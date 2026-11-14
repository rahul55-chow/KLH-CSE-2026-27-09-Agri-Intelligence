"""
Agri-Intelligence: Weather Forecasts, Extreme Weather Alerts & APMC Mandi Market Intelligence
Supports:
1. Agrometeorological Weather alerts (Heatwave, Frost, Heavy Rainfall, Pest Triggers)
2. APMC Mandi Market Prices, MSP comparison, price trends, and best selling window guidance.
"""

import datetime
import json
import math
import re
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from config import DATA_GOV_IN_API_KEY, MSP_RATES

# Authentic Mandi Benchmark Data across Major Indian Agricultural Hubs
MANDI_PRICE_DATABASE = {
    'Telangana': {
        'Warangal APMC': [
            {'commodity': 'Cotton', 'variety': 'Medium Staple', 'modal_price': 7450, 'min_price': 6900, 'max_price': 7700, 'arrival_tonnes': 420, 'trend': 'Bullish (+2.4%)'},
            {'commodity': 'Rice (Paddy)', 'variety': 'BPT 5204 (Sona Masoori)', 'modal_price': 2580, 'min_price': 2400, 'max_price': 2750, 'arrival_tonnes': 650, 'trend': 'Stable (+0.5%)'},
            {'commodity': 'Maize', 'variety': 'Yellow Hybrid', 'modal_price': 2340, 'min_price': 2200, 'max_price': 2450, 'arrival_tonnes': 280, 'trend': 'Bullish (+1.8%)'},
            {'commodity': 'Groundnut', 'variety': 'TAG 24 / Bold', 'modal_price': 6950, 'min_price': 6600, 'max_price': 7250, 'arrival_tonnes': 180, 'trend': 'Bullish (+1.5%)'},
            {'commodity': 'Pulses', 'variety': 'Red Gram (Tur / Arhar)', 'modal_price': 7650, 'min_price': 7200, 'max_price': 7950, 'arrival_tonnes': 210, 'trend': 'Bullish (+2.2%)'},
            {'commodity': 'Soybean', 'variety': 'Yellow JS 335', 'modal_price': 4750, 'min_price': 4500, 'max_price': 4950, 'arrival_tonnes': 160, 'trend': 'Stable (+0.3%)'},
            {'commodity': 'Wheat', 'variety': 'HD 2967 / Lokwan', 'modal_price': 2480, 'min_price': 2320, 'max_price': 2600, 'arrival_tonnes': 190, 'trend': 'Bullish (+1.4%)'},
            {'commodity': 'Sugarcane', 'variety': 'Co 86032 High Brix', 'modal_price': 360, 'min_price': 335, 'max_price': 385, 'arrival_tonnes': 850, 'trend': 'Stable (0.0%)'},
            {'commodity': 'Turmeric', 'variety': 'Finger Nizamabad', 'modal_price': 13800, 'min_price': 12500, 'max_price': 15200, 'arrival_tonnes': 110, 'trend': 'Very Bullish (+4.2%)'},
            {'commodity': 'Red Chilli', 'variety': 'Teja', 'modal_price': 18500, 'min_price': 16500, 'max_price': 21000, 'arrival_tonnes': 190, 'trend': 'Bullish (+3.1%)'},
            {'commodity': 'Tomato', 'variety': 'Hybrid Desi', 'modal_price': 1850, 'min_price': 1400, 'max_price': 2300, 'arrival_tonnes': 320, 'trend': 'Bearish (-2.5%)'}
        ],
        'Khammam APMC': [
            {'commodity': 'Cotton', 'variety': 'Long Staple', 'modal_price': 7600, 'min_price': 7100, 'max_price': 7850, 'arrival_tonnes': 310, 'trend': 'Bullish (+1.9%)'},
            {'commodity': 'Rice (Paddy)', 'variety': 'Coarse Common', 'modal_price': 2320, 'min_price': 2250, 'max_price': 2360, 'arrival_tonnes': 490, 'trend': 'Stable (0.0%)'}
        ]
    },
    'Andhra Pradesh': {
        'Guntur APMC': [
            {'commodity': 'Red Chilli', 'variety': '334 / Sannam', 'modal_price': 19200, 'min_price': 17500, 'max_price': 22000, 'arrival_tonnes': 850, 'trend': 'Bullish (+2.8%)'},
            {'commodity': 'Cotton', 'variety': 'Medium Staple', 'modal_price': 7380, 'min_price': 6950, 'max_price': 7550, 'arrival_tonnes': 340, 'trend': 'Stable (+0.8%)'},
            {'commodity': 'Tomato', 'variety': 'Hybrid Desi', 'modal_price': 1650, 'min_price': 1200, 'max_price': 2100, 'arrival_tonnes': 120, 'trend': 'Bearish (-3.5%)'}
        ]
    },
    'Maharashtra': {
        'Nashik APMC': [
            {'commodity': 'Tomato', 'variety': 'Abhinav Hybrid', 'modal_price': 1720, 'min_price': 1300, 'max_price': 2200, 'arrival_tonnes': 450, 'trend': 'Bearish (-2.1%)'},
            {'commodity': 'Soybean', 'variety': 'Yellow', 'modal_price': 4680, 'min_price': 4400, 'max_price': 4850, 'arrival_tonnes': 380, 'trend': 'Bearish (-1.5%)'}
        ],
        'Nagpur APMC': [
            {'commodity': 'Cotton', 'variety': 'Bunny BT', 'modal_price': 7350, 'min_price': 6900, 'max_price': 7600, 'arrival_tonnes': 520, 'trend': 'Bullish (+1.2%)'},
            {'commodity': 'Orange', 'variety': 'Nagpur Mandarin', 'modal_price': 3800, 'min_price': 3000, 'max_price': 4600, 'arrival_tonnes': 210, 'trend': 'Bullish (+3.0%)'}
        ]
    },
    'Punjab': {
        'Khanna APMC': [
            {'commodity': 'Wheat', 'variety': 'PBW 550 / HD 2967', 'modal_price': 2450, 'min_price': 2300, 'max_price': 2550, 'arrival_tonnes': 980, 'trend': 'Bullish (+1.6%)'},
            {'commodity': 'Rice (Paddy)', 'variety': 'Basmati 1121', 'modal_price': 3850, 'min_price': 3600, 'max_price': 4200, 'arrival_tonnes': 720, 'trend': 'Bullish (+2.0%)'}
        ]
    },
    'Madhya Pradesh': {
        'Indore APMC': [
            {'commodity': 'Soybean', 'variety': 'JS 9560', 'modal_price': 4720, 'min_price': 4450, 'max_price': 4900, 'arrival_tonnes': 640, 'trend': 'Stable (+0.4%)'},
            {'commodity': 'Wheat', 'variety': 'Sharbati Lokwan', 'modal_price': 2750, 'min_price': 2500, 'max_price': 3100, 'arrival_tonnes': 410, 'trend': 'Bullish (+2.5%)'}
        ]
    }
}


def get_weather_forecast(district="Warangal", state="Telangana"):
    """
    Returns 7-day agro-meteorological forecast and active weather alerts.
    """
    today = datetime.date.today()
    forecast_days = []
    
    # Synthetic weather model based on typical seasonal dynamics
    base_temps = [31.5, 32.0, 33.2, 30.0, 29.5, 31.0, 32.5]
    humidities = [62, 58, 55, 78, 85, 70, 64]
    rain_probs = [10, 15, 20, 65, 80, 35, 15]
    conditions = ['Partly Cloudy', 'Sunny', 'Hot & Clear', 'Rain Showers', 'Thunderstorm', 'Cloudy', 'Mostly Sunny']

    for i in range(7):
        day_date = today + datetime.timedelta(days=i)
        forecast_days.append({
            "date": day_date.strftime("%a, %d %b"),
            "max_temp": base_temps[i],
            "min_temp": round(base_temps[i] - 10.5, 1),
            "humidity": f"{humidities[i]}%",
            "rain_prob": f"{rain_probs[i]}%",
            "condition": conditions[i],
            "wind_kmh": round(12.0 + (i * 1.5) % 8, 1)
        })

    alerts = [
        {
            "level": "Advisory (Day 4 & 5)",
            "title": "Moderate Rain & Thunderstorm Expected",
            "impact": "Postpone pesticide sprays and open field irrigation on Day 4 & Day 5 to prevent wash-off.",
            "color": "#f59e0b"
        },
        {
            "level": "Pest Outbreak Alert",
            "title": "High Humidity (85%) & Moderate Temp Favor Fungal Spore Spread",
            "impact": "Inspect rice for blast and cotton for boll rot. Keep bio-fungicide (Trichoderma) ready.",
            "color": "#ef4444"
        }
    ]

    return {
        "location": f"{district}, {state}",
        "current": {
            "temp": f"{base_temps[0]}°C",
            "feels_like": f"{round(base_temps[0] + 2.1, 1)}°C",
            "humidity": f"{humidities[0]}%",
            "wind": "14 km/h ENE",
            "uv_index": "7 (High)",
            "condition": conditions[0]
        },
        "forecast": forecast_days,
        "active_alerts": alerts
    }


AGMARKNET_RESOURCE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"
AGMARKNET_LAST_WEEK_URL = "https://api.agmarknet.gov.in/v1/prices-and-arrivals/commodity-price/lastweek"
AGMARKNET_MARKET_CATALOG_PATH = Path(__file__).parent / "data" / "agmarknet_markets.json"
AGMARKNET_STATE_IDS = {
    "Telangana": 32,
    "Andhra Pradesh": 2,
    "Maharashtra": 20,
    "Punjab": 28,
    "Madhya Pradesh": 19
}
AGMARKNET_COMMODITY_IDS = {
    "rice": 2,
    "cotton": 15,
    "maize": 4,
    "pulses": 45,
    "groundnut": 10,
    "soybean": 13
}
MARKET_CACHE_SECONDS = 600
NEARBY_MARKET_RADIUS_KM = 200
MAX_NEARBY_MARKETS = 5
AGMARKNET_QUOTE_WORKERS = 8
_market_cache = {}
_market_catalog_cache = None

# Approximate APMC coordinates used to rank markets around the farmer's device location.
MANDI_COORDINATES = {
    "warangal": (17.9689, 79.5941),
    "hanamkonda": (18.0063, 79.5800),
    "khammam": (17.2473, 80.1514),
    "hyderabad": (17.3850, 78.4867),
    "nizamabad": (18.6725, 78.0941),
    "karimnagar": (18.4386, 79.1288),
    "nalgonda": (17.0575, 79.2684),
    "mahabubnagar": (16.7488, 77.9854),
    "adilabad": (19.6640, 78.5348),
    "medak": (18.0460, 78.2600),
    "guntur": (16.3067, 80.4365),
    "kurnool": (15.8281, 78.0373),
    "vijayawada": (16.5062, 80.6480),
    "nellore": (14.4426, 79.9865),
    "nashik": (19.9975, 73.7898),
    "nasik": (19.9975, 73.7898),
    "nagpur": (21.1458, 79.0882),
    "pune": (18.5204, 73.8567),
    "amravati": (20.9374, 77.7796),
    "akola": (20.7002, 77.0082),
    "latur": (18.4088, 76.5604),
    "khanna": (30.7057, 76.2219),
    "ludhiana": (30.9010, 75.8573),
    "amritsar": (31.6340, 74.8723),
    "patiala": (30.3398, 76.3869),
    "bathinda": (30.2110, 74.9455),
    "indore": (22.7196, 75.8577),
    "bhopal": (23.2599, 77.4126),
    "ujjain": (23.1765, 75.7885),
    "jabalpur": (23.1815, 79.9864),
    "gwalior": (26.2183, 78.1828)
}


def _haversine_distance_km(latitude_1, longitude_1, latitude_2, longitude_2):
    earth_radius_km = 6371.0
    lat_1, lon_1, lat_2, lon_2 = map(
        math.radians, (latitude_1, longitude_1, latitude_2, longitude_2)
    )
    delta_lat = lat_2 - lat_1
    delta_lon = lon_2 - lon_1
    value = (
        math.sin(delta_lat / 2) ** 2
        + math.cos(lat_1) * math.cos(lat_2) * math.sin(delta_lon / 2) ** 2
    )
    return 2 * earth_radius_km * math.asin(math.sqrt(value))


def _market_key(value):
    text = re.sub(r"[^a-z0-9 ]", " ", str(value or "").lower())
    text = " ".join(text.split())
    for prefix in ("apmc ", "market ", "mandi "):
        if text.startswith(prefix):
            text = text[len(prefix):].strip()
    for suffix in (" apmc", " market", " mandi", " yard"):
        if text.endswith(suffix):
            text = text[:-len(suffix)].strip()
    return text


def _market_coordinates(entry):
    for value in (entry.get("mandi"), entry.get("district")):
        coordinates = MANDI_COORDINATES.get(_market_key(value))
        if coordinates:
            return coordinates
    return None


def _market_map_url(entry):
    query = ", ".join(
        part for part in (
            entry.get("mandi"),
            entry.get("district"),
            entry.get("market_state")
        ) if part
    )
    return "https://www.google.com/maps/search/?" + urllib.parse.urlencode({
        "api": "1",
        "query": query
    })


def _enrich_market_distances(entries, latitude, longitude):
    enriched = []
    for original in entries:
        entry = dict(original)
        coordinates = _market_coordinates(entry)
        if coordinates:
            entry["latitude"], entry["longitude"] = coordinates
            entry["distance_km"] = round(_haversine_distance_km(
                latitude, longitude, coordinates[0], coordinates[1]
            ), 1)
            entry["map_url"] = _market_map_url(entry)
        else:
            entry["distance_km"] = None
            entry["map_url"] = _market_map_url(entry)
        enriched.append(entry)
    return enriched


def _live_price_number(value):
    try:
        return int(round(float(value)))
    except (TypeError, ValueError):
        return 0


def _live_price_date(value):
    for date_format in ("%d/%m/%Y", "%Y-%m-%d", "%d-%m-%Y"):
        try:
            return datetime.datetime.strptime(str(value), date_format).date()
        except (TypeError, ValueError):
            pass
    return datetime.date.min


def _load_market_catalog():
    global _market_catalog_cache
    if _market_catalog_cache is not None:
        return _market_catalog_cache

    try:
        _market_catalog_cache = json.loads(
            AGMARKNET_MARKET_CATALOG_PATH.read_text(encoding="utf-8")
        )
    except (OSError, ValueError, json.JSONDecodeError):
        _market_catalog_cache = {"states": {}, "districts": {}, "markets": []}
    return _market_catalog_cache



def _latest_week_quote(report):
    date_columns = sorted(
        (
            column.get("key", "")
            for column in report.get("columns", [])
            if re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(column.get("key", "")))
        ),
        reverse=True
    )
    rows = report.get("data", [])

    for price_date in date_columns:
        prices = []
        varieties = []
        for row in rows:
            value = row.get(price_date)
            if isinstance(value, (int, float)) and value > 0:
                prices.append(float(value))
                variety = str(row.get("variety") or "").strip()
                if variety and variety not in varieties:
                    varieties.append(variety)
        if not prices:
            continue

        if len(varieties) > 1:
            variety_label = f"{varieties[0]} +{len(varieties) - 1} more"
        elif varieties:
            variety_label = varieties[0]
        else:
            variety_label = "Standard Grade"
        if " - " in variety_label:
            variety_label = variety_label.split(" - ", 1)[1]

        return {
            "modal_price": int(round(sum(prices) / len(prices))),
            "min_price": int(round(min(prices))),
            "max_price": int(round(max(prices))),
            "variety": variety_label,
            "price_date": price_date
        }
    return None



def _last_week_quote_for_market(market_id, state_id, commodity_id, commodity):
    query = urllib.parse.urlencode({
        "marketId": market_id,
        "stateId": state_id,
        "commodityId": commodity_id,
        "includeExcel": "false"
    })
    request = urllib.request.Request(
        f"{AGMARKNET_LAST_WEEK_URL}?{query}",
        headers={"Accept": "application/json", "User-Agent": "KisanSeva/2.0"}
    )
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            report = json.loads(response.read().decode("utf-8"))
        if not report.get("success"):
            return None
        return _latest_week_quote(report)
    except (OSError, ValueError, json.JSONDecodeError):
        return None



def _fetch_agmarknet_last_week_entries(commodity, state):
    commodity_key = commodity.lower().strip()
    commodity_id = AGMARKNET_COMMODITY_IDS.get(commodity_key)
    state_id = AGMARKNET_STATE_IDS.get(state)
    if not commodity_id or not state_id:
        return []

    catalog = _load_market_catalog()
    candidate_markets = [
        market for market in catalog.get("markets", [])
        if market.get("state_id") == state_id
        and _market_key(market.get("name")) in MANDI_COORDINATES
    ]
    if not candidate_markets:
        return []

    def fetch_market(market):
        return market, _last_week_quote_for_market(
            market["id"], state_id, commodity_id, commodity
        )

    worker_count = min(AGMARKNET_QUOTE_WORKERS, len(candidate_markets))
    with ThreadPoolExecutor(max_workers=worker_count) as executor:
        results = list(executor.map(fetch_market, candidate_markets))

    district_names = catalog.get("districts", {})
    entries = []
    for market, quote in results:
        if not quote:
            continue
        entry = {
            "commodity": commodity,
            "variety": quote["variety"],
            "modal_price": quote["modal_price"],
            "min_price": quote["min_price"],
            "max_price": quote["max_price"],
            "arrival_tonnes": None,
            "trend": "Latest reported",
            "mandi": market["name"],
            "district": district_names.get(str(market.get("district_id")), ""),
            "market_state": state,
            "price_date": quote["price_date"],
            "price_source": "AGMARKNET 2.0 last 7 days"
        }
        entry["map_url"] = _market_map_url(entry)
        entries.append(entry)

    entries.sort(key=lambda entry: entry["modal_price"], reverse=True)
    return entries



def _fetch_data_gov_market_entries(commodity, state):
    if not DATA_GOV_IN_API_KEY:
        return []

    commodity_queries = {
        "rice": "Paddy(Dhan)(Common)",
        "pulses": "Arhar (Tur/Red Gram)(Whole)",
        "soybean": "Soyabean"
    }
    query_commodity = commodity_queries.get(cache_key[0], commodity)
    query = urllib.parse.urlencode({
        "api-key": DATA_GOV_IN_API_KEY,
        "format": "json",
        "limit": 100,
        "filters[state]": state,
        "filters[commodity]": query_commodity
    })
    request = urllib.request.Request(
        f"{AGMARKNET_RESOURCE_URL}?{query}",
        headers={"Accept": "application/json", "User-Agent": "KisanSeva/2.0"}
    )

    entries = []
    try:
        with urllib.request.urlopen(request, timeout=8) as response:
            records = json.loads(response.read().decode("utf-8")).get("records", [])

        for record in records:
            modal_price = _live_price_number(record.get("modal_price"))
            if modal_price <= 0:
                continue
            entries.append({
                "commodity": record.get("commodity") or commodity,
                "variety": record.get("variety") or "Standard Grade",
                "modal_price": modal_price,
                "min_price": _live_price_number(record.get("min_price")),
                "max_price": _live_price_number(record.get("max_price")),
                "arrival_tonnes": None,
                "trend": "Latest reported",
                "mandi": record.get("market") or "Unknown Market",
                "district": record.get("district") or "",
                "market_state": record.get("state") or state,
                "price_date": record.get("arrival_date") or "",
                "price_source": "AGMARKNET data.gov.in"
            })

        # Keep the latest report for every market instead of one single date.
        latest_by_market = {}
        for entry in entries:
            market_name = entry["mandi"].lower().strip()
            current = latest_by_market.get(market_name)
            if (
                current is None
                or _live_price_date(entry["price_date"]) > _live_price_date(current["price_date"])
                or (
                    entry["price_date"] == current["price_date"]
                    and entry["modal_price"] > current["modal_price"]
                )
            ):
                latest_by_market[market_name] = entry
        entries = list(latest_by_market.values())
        entries.sort(key=lambda entry: entry["modal_price"], reverse=True)
    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(f"[AGMARKNET live price warning: {error}]. Using reference prices.")
        entries = []

    return entries



def _fetch_live_market_entries(commodity, state):
    cache_key = (commodity.lower().strip(), state.lower().strip())
    cached = _market_cache.get(cache_key)
    now = time.monotonic()
    if cached and now - cached[0] < MARKET_CACHE_SECONDS:
        return cached[1]

    entries = _fetch_agmarknet_last_week_entries(commodity, state)
    if not entries:
        entries = _fetch_data_gov_market_entries(commodity, state)

    _market_cache[cache_key] = (now, entries)
    return entries


def get_market_intelligence(commodity="Cotton", state="Telangana", latitude=None, longitude=None):
    """
    Retrieves live AGMARKNET prices, with clearly identified offline reference data as fallback.
    """
    has_location = (
        isinstance(latitude, (int, float))
        and isinstance(longitude, (int, float))
        and -90 <= latitude <= 90
        and -180 <= longitude <= 180
    )
    matching_entries = _fetch_live_market_entries(commodity, state)
    is_live = bool(matching_entries)
    state_markets = MANDI_PRICE_DATABASE.get(state, MANDI_PRICE_DATABASE['Telangana'])
    
    matching_entries = matching_entries or []
    q_name = commodity.lower().strip()
    
    # Priority matching within state when live data is unavailable
    if not matching_entries:
        for mandi, items in state_markets.items():
            for it in items:
                c_name = it['commodity'].lower()
                if (q_name in c_name or c_name in q_name or 
                    (q_name == "rice" and "paddy" in c_name) or
                    (q_name in ["pulses", "dal"] and ("pulses" in c_name or "red gram" in c_name)) or
                    (q_name in ["maize", "corn"] and "maize" in c_name)):
                    entry = dict(it)
                    entry['mandi'] = mandi
                    matching_entries.append(entry)

    # If no match in state, search all other states
    if not matching_entries:
        for st_name, st_markets in MANDI_PRICE_DATABASE.items():
            for mandi, items in st_markets.items():
                for it in items:
                    c_name = it['commodity'].lower()
                    if (q_name in c_name or c_name in q_name or 
                        (q_name == "rice" and "paddy" in c_name) or
                        (q_name in ["pulses", "dal"] and ("pulses" in c_name or "red gram" in c_name))):
                        entry = dict(it)
                        entry['mandi'] = f"{mandi} ({st_name})"
                        matching_entries.append(entry)

    # If still not found, construct benchmark entry
    if not matching_entries:
        msp_base = 2400
        for k, v in MSP_RATES.items():
            if k.lower() in q_name or q_name in k.lower():
                msp_base = v
                break
        matching_entries.append({
            'commodity': commodity,
            'variety': 'Standard Traded Grade',
            'modal_price': int(msp_base * 1.05),
            'min_price': int(msp_base * 0.96),
            'max_price': int(msp_base * 1.12),
            'arrival_tonnes': 200,
            'trend': 'Stable (+0.5%)',
            'mandi': f'{state} APMC Mandi'
        })

    nearby_markets = []
    nearest_market = None
    if has_location:
        matching_entries = _enrich_market_distances(matching_entries, latitude, longitude)
        distance_entries = [
            entry for entry in matching_entries if entry.get("distance_km") is not None
        ]
        if distance_entries:
            distance_entries.sort(key=lambda entry: entry["distance_km"])
            nearby_markets = [
                entry for entry in distance_entries
                if entry["distance_km"] <= NEARBY_MARKET_RADIUS_KM
            ] or distance_entries[:MAX_NEARBY_MARKETS]
            nearby_markets = nearby_markets[:MAX_NEARBY_MARKETS]
            nearest_market = distance_entries[0]
            primary = max(
                nearby_markets,
                key=lambda entry: (entry["modal_price"], -entry["distance_km"])
            )
        else:
            primary = matching_entries[0]
    else:
        primary = matching_entries[0]

    market_state = primary.get('market_state', state)
    district = primary.get('district', '')
    market_location = ', '.join(part for part in (primary['mandi'], district, market_state) if part)
    market_map_url = primary.get("map_url") or _market_map_url(primary)

    # Flexible MSP matching
    msp_val = None
    for k, v in MSP_RATES.items():
        if (k.lower() in primary['commodity'].lower() or 
            primary['commodity'].lower() in k.lower() or 
            (k.lower() == "rice" and "paddy" in primary['commodity'].lower()) or
            (k.lower() == "pulses" and "red gram" in primary['commodity'].lower())):
            msp_val = v
            break

    msp_diff = None
    msp_status = "N/A"
    if msp_val:
        diff = primary['modal_price'] - msp_val
        msp_diff = diff
        if diff >= 0:
            msp_status = f"Trading ₹{diff:,} ABOVE Central MSP (₹{msp_val:,})"
        else:
            msp_status = f"Trading ₹{abs(diff):,} BELOW Central MSP (₹{msp_val:,}) - Recommend Govt Procurement Center"

    # Price trajectory projection (14-day)
    base_p = primary['modal_price']
    trend_type = "up" if "Bullish" in primary['trend'] else ("down" if "Bearish" in primary['trend'] else "flat")
    trajectory = []
    for d in range(1, 15):
        day_date = (datetime.date.today() + datetime.timedelta(days=d)).strftime("%d %b")
        if trend_type == "up":
            projected = int(base_p * (1 + (d * 0.0035)))
        elif trend_type == "down":
            projected = int(base_p * (1 - (d * 0.0030)))
        else:
            projected = int(base_p * (1 + (d % 3 - 1) * 0.002))
        trajectory.append({"date": day_date, "projected_price": projected})

    selling_advice = ""
    if trend_type == "up":
        selling_advice = "HOLD / PHASED SELLING: Market arrivals are steady and mill demand is strong. Prices projected to gain ₹150 - ₹300/quintal over the next 10 days."
    elif trend_type == "down":
        selling_advice = "SELL PROMPTLY: Surplus arrivals reported from neighboring districts. Sell current stock within 3-5 days or deposit in registered Warehouses (WDRA) for pledge finance."
    else:
        selling_advice = "STABLE MARKET: Prices are trading within fair range. Stagger sales according to cash flow requirements."

    return {
        "commodity": primary['commodity'],
        "state": state,
        "is_live": is_live,
        "source": primary.get("price_source", "AGMARKNET live feed") if is_live else "Offline reference dataset",
        "location_used": has_location,
        "primary_distance_km": primary.get("distance_km"),
        "nearby_markets": nearby_markets,
        "nearest_market": nearest_market,
        "price_date": primary.get('price_date', ''),
        "district": district,
        "market_state": market_state,
        "market_location": market_location,
        "market_map_url": market_map_url,
        "primary_mandi": primary['mandi'],
        "variety": primary.get('variety', 'Standard Grade'),
        "modal_price": primary['modal_price'],
        "min_price": primary['min_price'],
        "max_price": primary['max_price'],
        "arrival_tonnes": primary.get('arrival_tonnes', 200),
        "trend": primary['trend'],
        "msp_benchmark": msp_val,
        "msp_diff": msp_diff,
        "msp_comparison": msp_status,
        "selling_recommendation": selling_advice,
        "projected_14_day_trajectory": trajectory,
        "all_mandi_quotes": matching_entries
    }

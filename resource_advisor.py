"""
Agri-Intelligence: Farmer-Friendly Resource Management
Calculates:
1. Exact Commercial Fertilizer Bags to Buy (Urea, DAP, MOP Potash) based on Crop, Acreage, Soil Type & Compost usage.
2. Motor Run Time & Irrigation Schedule based on Soil Feel, Motor Type, and Crop Growth Stage.
"""

from config import CROP_NUTRIENT_REQUIREMENTS

SOIL_FERTILITY_DEFAULTS = {
    'Black Cotton Soil': {'N': 110, 'P': 45, 'K': 25, 'retention_days': 7},
    'Red Sandy Loam':    {'N': 75,  'P': 55, 'K': 35, 'retention_days': 4},
    'Alluvial Soil':     {'N': 95,  'P': 50, 'K': 45, 'retention_days': 5},
    'Sandy Loam':        {'N': 60,  'P': 35, 'K': 25, 'retention_days': 3},
    'Clay Loam':         {'N': 85,  'P': 45, 'K': 40, 'retention_days': 6}
}

CROP_GROWTH_STAGES = {
    'Initial / Germination': {'kc': 0.40, 'urgency_mult': 0.7},
    'Vegetative / Tillering':{'kc': 0.85, 'urgency_mult': 1.0},
    'Flowering / Grain Fill':{'kc': 1.20, 'urgency_mult': 1.4},
    'Ripening / Maturity':   {'kc': 0.50, 'urgency_mult': 0.5}
}


def calculate_farmer_fertilizer(crop_name, area_acres=1.0, soil_type="Black Cotton Soil", applied_fym="yes", opt_n=None, opt_p=None, opt_k=None):
    """
    100% Practical Farmer Fertilizer Calculator.
    Computes exact 50kg bag purchases of Urea, DAP, and Potash.
    """
    crop_key = crop_name.lower().strip()
    req = CROP_NUTRIENT_REQUIREMENTS.get(crop_key, {'N': 100, 'P': 50, 'K': 50, 'duration_days': 100})
    
    # Target nutrients per acre
    target_n = req['N'] / 2.47
    target_p = req['P'] / 2.47
    target_k = req['K'] / 2.47

    # Soil baseline
    s_info = SOIL_FERTILITY_DEFAULTS.get(soil_type, SOIL_FERTILITY_DEFAULTS['Black Cotton Soil'])
    curr_n = float(opt_n) if opt_n not in (None, "", 0) else s_info['N'] * 0.35
    curr_p = float(opt_p) if opt_p not in (None, "", 0) else s_info['P'] * 0.40
    curr_k = float(opt_k) if opt_k not in (None, "", 0) else s_info['K'] * 0.35

    def_n = max(5.0, target_n - curr_n)
    def_p = max(5.0, target_p - curr_p)
    def_k = max(5.0, target_k - curr_k)

    # If farmer added FYM / Cow dung, reduce chemical requirement by 20%
    if applied_fym == "yes":
        def_n *= 0.80
        def_p *= 0.80
        def_k *= 0.80

    # Calculate commercial fertilizers:
    # 1. DAP (18% N, 46% P)
    dap_kg_acre = def_p / 0.46
    n_from_dap = dap_kg_acre * 0.18

    # 2. Urea (46% N)
    rem_n = max(0.0, def_n - n_from_dap)
    urea_kg_acre = rem_n / 0.46

    # 3. MOP Potash (60% K)
    mop_kg_acre = def_k / 0.60

    total_urea = round(urea_kg_acre * area_acres, 1)
    total_dap = round(dap_kg_acre * area_acres, 1)
    total_mop = round(mop_kg_acre * area_acres, 1)

    urea_bags = max(0.5, round((total_urea / 50.0) * 2) / 2) # round to nearest half bag
    dap_bags = max(0.5, round((total_dap / 50.0) * 2) / 2)
    mop_bags = max(0.5, round((total_mop / 50.0) * 2) / 2)

    return {
        "crop": crop_name,
        "area_acres": area_acres,
        "fertilizer_recommendation": {
            "urea_kg": total_urea,
            "urea_50kg_bags": urea_bags,
            "dap_kg": total_dap,
            "dap_50kg_bags": dap_bags,
            "mop_kg": total_mop,
            "mop_50kg_bags": mop_bags,
            "organic_fym_tons": round(1.5 * area_acres, 1)
        },
        "split_application_schedule": [
            {
                "stage": "1. At Sowing / Transplanting (నాట్లు / విత్తే సమయంలో - Basal Dose)",
                "details": f"Apply ALL DAP ({dap_bags} bags), half MOP Potash ({round(mop_bags * 0.5, 1)} bags), and small starter Urea ({round(urea_bags * 0.25, 1)} bags)."
            },
            {
                "stage": "2. First Top Dressing (మొదటి దఫా - 25 to 30 Days after sowing)",
                "details": f"Broadcast 50% Urea ({round(urea_bags * 0.50, 1)} bags) when soil is damp. Avoid applying in standing ponded water."
            },
            {
                "stage": "3. Second Top Dressing (రెండో దఫా - 50 to 60 Days / Flowering & Panicle)",
                "details": f"Broadcast remaining 25% Urea ({round(urea_bags * 0.25, 1)} bags) and remaining Potash ({round(mop_bags * 0.5, 1)} bags) to ensure bold, heavy grains/bolls."
            }
        ]
    }


def calculate_farmer_irrigation(crop_name, soil_type="Black Cotton Soil", soil_feel="slightly_damp", growth_stage="Vegetative / Tillering", motor_type="5hp_pump"):
    """
    100% Practical Motor Run Time & Irrigation Advisor.
    """
    s_info = SOIL_FERTILITY_DEFAULTS.get(soil_type, SOIL_FERTILITY_DEFAULTS['Black Cotton Soil'])
    stage_info = CROP_GROWTH_STAGES.get(growth_stage, CROP_GROWTH_STAGES['Vegetative / Tillering'])

    # Motor capacities (Liters per hour output)
    motor_capacities = {
        '5hp_pump': {'rate_lph': 18000, 'name': '5 HP Borewell / Submersible Motor'},
        '3hp_pump': {'rate_lph': 11000, 'name': '3 HP Agricultural Pump'},
        'drip_system': {'rate_lph': 6000, 'name': 'Drip Irrigation System'},
        'canal_flood': {'rate_lph': 35000, 'name': 'Canal Water Channel'}
    }
    m_info = motor_capacities.get(motor_type, motor_capacities['5hp_pump'])

    # Standard water depth required in mm per watering cycle
    base_depth_mm = 30.0 * stage_info['kc']
    frequency_days = s_info['retention_days']

    if soil_feel == "dry_cracked":
        urgency = "🔴 CRITICAL: Soil is dry & cracking! Start motor within 24 hours to prevent crop wilting."
        base_depth_mm *= 1.3
        frequency_days = max(2, frequency_days - 2)
    elif soil_feel == "wet_muddy":
        urgency = "🟢 NO WATER NEEDED: Soil has sufficient dampness/mud. Do not run motor to prevent root rot & save power."
        base_depth_mm = 0.0
    else: # slightly_damp
        urgency = f"🟡 NORMAL MOISTURE: Plan next irrigation cycle in {max(1, frequency_days - 1)} days."

    # Water volume: 1 mm depth on 1 acre = 4,047 Liters
    total_water_liters = int(base_depth_mm * 4047) if base_depth_mm > 0 else 0
    runtime_hours = round(total_water_liters / m_info['rate_lph'], 1) if (total_water_liters > 0 and m_info['rate_lph'] > 0) else 0.0

    tip = "Irrigate during early morning (6 AM – 9 AM) or evening to prevent up to 25% water evaporation in summer/sun."
    if "Flowering" in growth_stage:
        tip = "CRITICAL STAGE: Crop is flowering/grain filling. Never let the soil dry out during this week or yield drops by 30%!"

    return {
        "crop": crop_name,
        "soil_type": soil_type,
        "soil_feel": soil_feel,
        "urgency": urgency,
        "irrigation_depth_mm": round(base_depth_mm, 1),
        "total_water_liters_per_acre": total_water_liters,
        "recommended_interval_days": frequency_days,
        "motor_name": m_info['name'],
        "runtime_hours": runtime_hours,
        "drip_runtime_hours": round(total_water_liters / 6000.0, 1) if total_water_liters > 0 else 0.0,
        "flood_runtime_hours": round(total_water_liters / 18000.0, 1) if total_water_liters > 0 else 0.0,
        "water_saving_tip": tip
    }


def calculate_fertilizer_schedule(crop, soil_n=80.0, soil_p=35.0, soil_k=40.0, area_acres=1.0, applied_fym="no", soil_type="Black Cotton Soil"):
    """Adapter for API endpoint compatibility"""
    return calculate_farmer_fertilizer(
        crop_name=crop,
        area_acres=area_acres,
        soil_type=soil_type,
        applied_fym=applied_fym,
        opt_n=soil_n,
        opt_p=soil_p,
        opt_k=soil_k
    )


def calculate_irrigation_schedule(crop, soil_type="Black Cotton Soil", growth_stage="Vegetative / Tillering", soil_moisture_pct=45.0, daily_temp=30.0, motor_type="5hp_pump"):
    """Adapter for API endpoint compatibility"""
    if soil_moisture_pct < 30:
        soil_feel = "dry_cracked"
    elif soil_moisture_pct > 65:
        soil_feel = "wet_muddy"
    else:
        soil_feel = "slightly_damp"
    return calculate_farmer_irrigation(
        crop_name=crop,
        soil_type=soil_type,
        soil_feel=soil_feel,
        growth_stage=growth_stage,
        motor_type=motor_type
    )

"""
KisanSeva: Farmer-Friendly Full-Stack Application & REST API
Clean, practical agricultural decision platform for farmers.
"""

import os
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

from config import APP_INFO
from ml_models import get_crop_model, recommend_crop_for_farmer, predict_crop_yield
from resource_advisor import calculate_fertilizer_schedule, calculate_irrigation_schedule
from market_weather import get_weather_forecast, get_market_intelligence
from disease_detector import analyze_plant_disease
from ai_advisor import chat_with_agronomist

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the crop model during startup instead of on the farmer's first click.
    get_crop_model()
    yield


app = FastAPI(
    title="KisanSeva Smart Crop Assistant",
    description="Farmer-Friendly Precision Farming Decision Platform",
    version="2.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).parent
STATIC_DIR = BASE_DIR / "static"
SAMPLES_DIR = BASE_DIR / "sample_images"

os.makedirs(STATIC_DIR, exist_ok=True)
os.makedirs(SAMPLES_DIR, exist_ok=True)
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")
app.mount("/sample_images", StaticFiles(directory=str(SAMPLES_DIR)), name="sample_images")


class FarmerCropRequest(BaseModel):
    soil_type: str = "black_cotton"
    season: str = "kharif"
    water_source: str = "moderate"
    land_terrain: str = "upland"
    previous_crop: Optional[str] = "rice"
    previous_crop_1: Optional[str] = "rice"
    previous_crop_2: Optional[str] = "cotton"
    farming_goal: str = "commercial"
    state: Optional[str] = "Telangana"
    opt_n: Optional[float] = None
    opt_p: Optional[float] = None
    opt_k: Optional[float] = None
    opt_ph: Optional[float] = None
    language: Optional[str] = "en"


class YieldPredictRequest(BaseModel):
    crop: str = "Rice"
    state: str = "Telangana"
    season: str = "Kharif"
    area_ha: float = 2.5
    annual_rainfall_mm: float = 1100.0
    fertilizer_kg_ha: float = 120.0
    pesticide_kg_ha: float = 2.5


class ResourcePlanRequest(BaseModel):
    crop: str = "Rice"
    soil_n: float = 80.0
    soil_p: float = 35.0
    soil_k: float = 40.0
    area_acres: float = 2.0
    soil_type: str = "Clay Loam"
    growth_stage: str = "Vegetative / Tillering"
    soil_moisture_pct: float = 45.0
    daily_temp: float = 31.0


class ChatRequest(BaseModel):
    message: str
    language: Optional[str] = "English"
    history: Optional[List[dict]] = None


# Serve Main Farmer Dashboard
@app.get("/", response_class=HTMLResponse)
def serve_index():
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        return HTMLResponse(content=index_file.read_text(encoding="utf-8"))
    return HTMLResponse("<h2>KisanSeva Application Starting...</h2>")


@app.get("/api/info")
def get_info():
    return {
        "status": "online",
        "title": APP_INFO["title"],
        "tagline": APP_INFO["tagline"],
        "helpline": APP_INFO["helpline"]
    }


# 1. Farmer-Centric Crop Recommendation Endpoint
@app.post("/api/recommend-crop")
def api_recommend_crop(req: FarmerCropRequest):
    prev1 = req.previous_crop_1 or req.previous_crop or "rice"
    prev2 = req.previous_crop_2 or "cotton"
    return recommend_crop_for_farmer(
        soil_type=req.soil_type,
        season=req.season,
        water_source=req.water_source,
        land_terrain=req.land_terrain,
        previous_crop=prev1,
        previous_crop_1=prev1,
        previous_crop_2=prev2,
        farming_goal=req.farming_goal,
        state=req.state or "Telangana",
        opt_n=req.opt_n,
        opt_p=req.opt_p,
        opt_k=req.opt_k,
        opt_ph=req.opt_ph,
        language=req.language or "en"
    )


# 2. Yield & Harvest Income Endpoint
@app.post("/api/predict-yield")
def api_predict_yield(req: YieldPredictRequest):
    res = predict_crop_yield(
        req.crop, req.state, req.season, req.area_ha,
        req.annual_rainfall_mm, req.fertilizer_kg_ha, req.pesticide_kg_ha
    )
    if isinstance(res, dict) and "error" not in res:
        res["market_intelligence"] = get_market_intelligence(req.crop, req.state or "Telangana")
    return res


@app.get("/api/health")
def api_health():
    return {"status": "ok", "app": "KisanSeva"}


# 3. Leaf Disease & Crop Doctor Endpoint
@app.post("/api/detect-disease")
@app.post("/api/diagnose-leaf")
async def api_detect_disease(
    file: UploadFile = File(...),
    language: Optional[str] = Form("en")
):
    contents = await file.read()
    if not contents:
        raise HTTPException(status_code=400, detail="Empty image uploaded")
    result = analyze_plant_disease(contents, language=language or "en")
    return result


# 4. Precision Water & Fertilizer Schedule Endpoint
@app.post("/api/resource-advice")
def api_resource_advice(req: ResourcePlanRequest):
    fert = calculate_fertilizer_schedule(req.crop, req.soil_n, req.soil_p, req.soil_k, req.area_acres)
    irrig = calculate_irrigation_schedule(req.crop, req.soil_type, req.growth_stage, req.soil_moisture_pct, req.daily_temp)
    return {
        "fertilizer_plan": fert,
        "irrigation_plan": irrig
    }


# 5. Local Weather & Weather Warnings Endpoint
@app.get("/api/weather")
def api_weather(district: str = "Warangal", state: str = "Telangana"):
    return get_weather_forecast(district, state)


# 6. Today's Mandi Market Rates Endpoint
@app.get("/api/market-prices")
def api_market_prices(
    commodity: str = "Cotton",
    state: str = "Telangana",
    lat: Optional[float] = None,
    lon: Optional[float] = None
):
    if (lat is None) != (lon is None):
        raise HTTPException(status_code=400, detail="Both lat and lon are required")
    if lat is not None and not (-90 <= lat <= 90 and -180 <= lon <= 180):
        raise HTTPException(status_code=400, detail="Invalid latitude or longitude")
    return get_market_intelligence(commodity, state, latitude=lat, longitude=lon)


# 7. Kisan Mitra AI Agronomist Chat Endpoint
@app.post("/api/chat")
def api_chat(req: ChatRequest):
    reply = chat_with_agronomist(req.message, req.history, req.language)
    return {"reply": reply}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)

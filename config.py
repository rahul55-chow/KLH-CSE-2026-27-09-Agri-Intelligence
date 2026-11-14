"""
KisanSeva / Agri-Intelligence: Configuration & Constants
Loads environment variables, ICAR agronomic tables, and Central MSP benchmarks.
"""

import os
from pathlib import Path

# Load API key from .env file
ENV_PATH = Path(__file__).parent / ".env"
GEMINI_API_KEY = ""
DATA_GOV_IN_API_KEY = ""

if ENV_PATH.exists():
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line.startswith("API_KEY="):
                GEMINI_API_KEY = line.split("=", 1)[1].strip()
            elif line.startswith("DATA_GOV_IN_API_KEY="):
                DATA_GOV_IN_API_KEY = line.split("=", 1)[1].strip()

# Fallback to system environment variable if set
if not GEMINI_API_KEY:
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "") or os.getenv("API_KEY", "")
if not DATA_GOV_IN_API_KEY:
    DATA_GOV_IN_API_KEY = os.getenv("DATA_GOV_IN_API_KEY", "")

GEMINI_MODEL = "gemini-3.5-flash-lite"

# Farmer-focused System Info
APP_INFO = {
    "title": "KisanSeva: Smart Crop Assistant",
    "tagline": "Your 24/7 AI Farming Advisor • Crop Doctor, Fertilizer, Mandi Rates & Water Management",
    "helpline": "9855655653 (Toll-Free Kisan Call Centre)"
}

# Standard ICAR Crop Nutrient Requirements (N-P-K in kg/hectare)
CROP_NUTRIENT_REQUIREMENTS = {
    'rice':        {'N': 120, 'P': 60, 'K': 60,  'water_mm': 1200, 'duration_days': 120},
    'maize':       {'N': 120, 'P': 60, 'K': 40,  'water_mm': 600,  'duration_days': 100},
    'chickpea':    {'N': 25,  'P': 50, 'K': 25,  'water_mm': 350,  'duration_days': 100},
    'kidneybeans': {'N': 30,  'P': 60, 'K': 30,  'water_mm': 400,  'duration_days': 85},
    'pigeonpeas':  {'N': 25,  'P': 50, 'K': 25,  'water_mm': 500,  'duration_days': 160},
    'mothbeans':   {'N': 20,  'P': 40, 'K': 20,  'water_mm': 250,  'duration_days': 75},
    'mungbean':    {'N': 20,  'P': 40, 'K': 20,  'water_mm': 300,  'duration_days': 65},
    'blackgram':   {'N': 20,  'P': 40, 'K': 20,  'water_mm': 300,  'duration_days': 75},
    'lentil':      {'N': 20,  'P': 40, 'K': 20,  'water_mm': 300,  'duration_days': 110},
    'pomegranate': {'N': 250, 'P': 125,'K': 250, 'water_mm': 900,  'duration_days': 365},
    'banana':      {'N': 200, 'P': 60, 'K': 300, 'water_mm': 1800, 'duration_days': 330},
    'mango':       {'N': 200, 'P': 100,'K': 200, 'water_mm': 1000, 'duration_days': 365},
    'grapes':      {'N': 150, 'P': 100,'K': 250, 'water_mm': 700,  'duration_days': 150},
    'watermelon':  {'N': 100, 'P': 50, 'K': 50,  'water_mm': 450,  'duration_days': 90},
    'muskmelon':   {'N': 100, 'P': 50, 'K': 50,  'water_mm': 400,  'duration_days': 85},
    'apple':       {'N': 200, 'P': 100,'K': 200, 'water_mm': 1000, 'duration_days': 365},
    'orange':      {'N': 150, 'P': 75, 'K': 150, 'water_mm': 1100, 'duration_days': 365},
    'papaya':      {'N': 200, 'P': 200,'K': 250, 'water_mm': 1400, 'duration_days': 270},
    'coconut':     {'N': 500, 'P': 320,'K': 1200,'water_mm': 1500, 'duration_days': 365},
    'cotton':      {'N': 120, 'P': 60, 'K': 60,  'water_mm': 750,  'duration_days': 150},
    'jute':        {'N': 80,  'P': 40, 'K': 40,  'water_mm': 900,  'duration_days': 120},
    'coffee':      {'N': 140, 'P': 90, 'K': 140, 'water_mm': 1500, 'duration_days': 365},
    'groundnut':   {'N': 25,  'P': 50, 'K': 75,  'water_mm': 600,  'duration_days': 110},
    'wheat':       {'N': 120, 'P': 60, 'K': 40,  'water_mm': 550,  'duration_days': 120},
    'soybean':     {'N': 30,  'P': 60, 'K': 40,  'water_mm': 700,  'duration_days': 95},
    'sugarcane':   {'N': 250, 'P': 100,'K': 120, 'water_mm': 1800, 'duration_days': 365}
}

# 2024-25 / 2025-26 Central Government Minimum Support Price (MSP) in INR per Quintal
MSP_RATES = {
    'Rice': 2300,
    'Wheat': 2275,
    'Maize': 2225,
    'Cotton': 7121,
    'Sugarcane': 340,
    'Pulses': 7000,
    'Groundnut': 6783,
    'Soybean': 4892,
    'Tomato': 1800,
    'Potato': 1500
}

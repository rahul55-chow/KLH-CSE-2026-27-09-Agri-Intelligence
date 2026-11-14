@echo off
title KisanSeva: Smart Farming Assistant
echo ========================================================
echo 🌱 Starting KisanSeva Smart Farming Assistant...
echo Opening browser at http://localhost:8000
echo ========================================================
start "" http://localhost:8000
python -m uvicorn api:app --reload --host 0.0.0.0 --port 8000
pause

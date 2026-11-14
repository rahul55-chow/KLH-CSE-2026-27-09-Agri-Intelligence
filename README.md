# 🌱 AGRI-INTELLIGENCE: Smart Crop Management System
### AI-Driven Precision Farming, Disease Diagnostics & Market Intelligence
**Review – 2 Project Implementation**

---

## 👥 Project Team & Guide
- **B. Nagaraju** (Roll No: `2420030614`)
- **K. Rahul** (Roll No: `2420030011`)
- **P. Likhith Sai** (Roll No: `2420030066`)
- **Project Guide:** `DR. N. SUNANDA`

---

## 🚀 Key Modules & System Architecture
The application features a modern HTML5/Vanilla CSS/JavaScript frontend backed by Python FastAPI and Machine Learning models:

1. **🌿 Crop Recommendation System (Random Forest Classifier - 88.75% Accuracy)**
   - Evaluates soil nutrients ($N, P, K, pH$) and climate factors (temperature, humidity, rainfall).
   - Generates top-3 ranked crop recommendations with probability distribution charts and ICAR agronomic practices.

2. **🔬 Leaf Disease & Pest Detection AI (Multimodal Computer Vision)**
   - Accepts leaf images via file upload, drag-and-drop, or live webcam.
   - Diagnoses conditions (e.g., Early Blight, Powdery Mildew, Chlorosis, Yellow Vein Mosaic, Healthy).
   - Identifies severity stages and recommends both **organic/biological remedies** (Neem extract, Trichoderma) and **chemical treatments** with standard dilution dosages.
   - Built-in OpenCV spectral heuristic fallback for offline situations.

3. **📈 Crop Yield & Revenue Forecaster (Random Forest Regressor - 86.66% $R^2$)**
   - Predicts yield in tonnes/hectare and total harvest output in quintals based on farm area, rainfall, and inputs.
   - Calculates estimated financial gross returns using Central Minimum Support Prices (MSP 2024-25/2025-26).

4. **🌦️ Market Intelligence & Weather Advisory**
   - Live APMC Mandi wholesale price telemetry, Government MSP comparison, and 7-day agro-meteorological spray warnings.

---

## 🛠️ How to Run

### Start Application
Run the one-click batch launcher:
```bash
run.bat
```
Or run directly using python:
```bash
python -m uvicorn api:app --reload --host 0.0.0.0 --port 8000
```

### Access Application
- **Web Dashboard**: `http://localhost:8000`
- **Interactive REST API Documentation (Swagger)**: `http://localhost:8000/docs`

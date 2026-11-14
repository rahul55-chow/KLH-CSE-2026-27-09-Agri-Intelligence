"""
Agri-Intelligence: Multilingual AI Agronomist Chat Advisor
Powered by Google Gemini 3 Flash API with farmer-focused agricultural intelligence.
"""

import json
import urllib.request
import urllib.error
from config import GEMINI_API_KEY, GEMINI_MODEL

SYSTEM_PROMPT = """
You are "Agri-Mitra", an elite Agricultural Scientist and AI Agronomist working inside the AGRI-INTELLIGENCE Smart Crop Management System.
Your job is to provide accurate, farmer-friendly, practical agricultural guidance.
You have deep knowledge of:
- Soil health, organic farming, bio-fertilizers (Jeevamrut, Vermicompost), chemical NPK dosing
- Crop selection, seed treatment, irrigation scheduling
- Plant diseases, viral pathogens, insect pest management (Integrated Pest Management - IPM)
- Indian agricultural schemes (PM-KISAN, PM Fasal Bima Yojana, Soil Health Card, e-NAM)
- Mandi prices and post-harvest storage

Guidelines:
1. Always be polite, encouraging, practical and culturally attuned to Indian and global farming practices.
2. If the farmer asks in Hindi, answer in clear Hindi (Devanagari). If in Telugu, answer in Telugu script. If in English, answer in English. You can also handle Tamil, Kannada, and Marathi.
3. Keep answers clear, bulleted, and actionable. Do not use overly dense academic jargon without explaining it.
4. Mention both organic/biological cures and safe chemical dosages when asked about diseases or pests.
"""

def chat_with_agronomist(user_message, chat_history=None, language="English"):
    """
    Sends conversation history + user message to Gemini 3 Flash and returns the agronomist response.
    """
    if not GEMINI_API_KEY:
        return "Gemini API key is not configured. Please ensure your API_KEY is set in .env."

    url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={GEMINI_API_KEY}"

    contents = []
    # Add System Context as first exchange
    contents.append({
        "role": "user",
        "parts": [{"text": f"{SYSTEM_PROMPT}\nFarmer's preferred language: {language}"}]
    })
    contents.append({
        "role": "model",
        "parts": [{"text": f"Namaste! I am Agri-Mitra, your Agri-Intelligence Agronomist. I am ready to guide you in {language}. How can I assist your farm today?"}]
    })

    if chat_history:
        for msg in chat_history[-6:]:  # Keep recent context
            role = "user" if msg.get("role") == "user" else "model"
            contents.append({
                "role": role,
                "parts": [{"text": msg.get("content", "")}]
            })

    # Append latest message
    contents.append({
        "role": "user",
        "parts": [{"text": f"[Language: {language}] {user_message}"}]
    })

    payload = {
        "contents": contents,
        "generationConfig": {
            "temperature": 0.4,
            "maxOutputTokens": 1000
        }
    }

    try:
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            candidate = data.get("candidates", [{}])[0]
            answer = candidate.get("content", {}).get("parts", [{}])[0].get("text", "")
            return answer.strip()
    except Exception as e:
        return f"Agronomist Service notice: Unable to contact Gemini API ({e}). For emergency crop advice, contact Kisan Call Centre (Toll Free: 9855655653)."

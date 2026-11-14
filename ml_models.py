"""
Agri-Intelligence: Machine Learning & Farmer Agronomic Decision Engine
Provides:
1. recommend_crop_for_farmer(): Recommends crops using 100% farmer-relevant practical inputs:
   - Soil Type (Black cotton, Red loam, Alluvial, Sandy, Clay)
   - Season (Kharif/Monsoon, Rabi/Winter, Zaid/Summer)
   - Water Availability (Abundant Canal/Borewell, Moderate Borewell, Rainfed)
   - Land Terrain (Lowland flat, Upland well-drained)
   - Previous Crop (Crop rotation benefits)
   - Farming Goal (Cash crop, Food security, Quick 60-day return, Horticulture)
2. predict_crop_yield(): Harvest yield & financial revenue estimator.
"""

import os
from pathlib import Path
import joblib
import pandas as pd
import numpy as np

MODELS_DIR = Path(__file__).parent / "models"
CROP_MODEL_PATH = MODELS_DIR / "crop_recommendation_rf.joblib"
YIELD_MODEL_PATH = MODELS_DIR / "crop_yield_rf_pipeline.joblib"

_crop_model = None
_yield_model = None
_crop_model_mtime = 0
_yield_model_mtime = 0

def get_crop_model():
    global _crop_model, _crop_model_mtime
    if CROP_MODEL_PATH.exists():
        current_mtime = os.path.getmtime(CROP_MODEL_PATH)
        if _crop_model is None or current_mtime > _crop_model_mtime:
            _crop_model = joblib.load(CROP_MODEL_PATH)
            _crop_model_mtime = current_mtime
    return _crop_model

def get_yield_model():
    global _yield_model, _yield_model_mtime
    if YIELD_MODEL_PATH.exists():
        current_mtime = os.path.getmtime(YIELD_MODEL_PATH)
        if _yield_model is None or current_mtime > _yield_model_mtime:
            _yield_model = joblib.load(YIELD_MODEL_PATH)
            _yield_model_mtime = current_mtime
    return _yield_model


# Comprehensive Indian Farmer Crop Database with real-world economics and cultivation guides
# Strictly separated by language (en, te, hi) so that no mixed-language words appear
FARMER_CROP_KNOWLEDGE = {
    'rice': {
        'en': {
            'display_name': 'Rice (Paddy)',
            'variety': 'BPT 5204 (Sona Masoori), MTU 1010, Telangana Sona (RNR 15048)',
            'duration': '120 - 135 Days',
            'investment_acre': '₹16,000 - ₹20,000',
            'yield_acre': '24 - 30 Quintals / acre',
            'profit_acre': '₹35,000 - ₹48,000',
            'sowing_window': 'Kharif: June 20 - July 20 | Rabi: Nov 15 - Dec 20',
            'seed_treatment': 'Treat seed with Carbendazim 2g/kg or Pseudomonas 10g/kg',
            'rotation_benefit': 'Can be rotated with Blackgram or Bengal gram in Rabi without extra ploughing.'
        },
        'te': {
            'display_name': 'వరి (వరి ధాన్యం)',
            'variety': 'బి.పి.టి 5204 (సోనా మసూరి), ఎమ్.టి.యు 1010, తెలంగాణ సోనా (RNR 15048)',
            'duration': '120 - 135 రోజులు',
            'investment_acre': '₹16,000 - ₹20,000',
            'yield_acre': '24 - 30 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹35,000 - ₹48,000',
            'sowing_window': 'వానాకాలం: జూన్ 20 - జూలై 20 | యాసంగి: నవంబర్ 15 - డిసెంబర్ 20',
            'seed_treatment': 'కిలో విత్తనానికి 2 గ్రాముల కార్బండజిమ్ లేదా 10 గ్రాముల సూడోమోనాస్‌తో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'వరి తర్వాత యాసంగిలో శనగలు లేదా మినుములు వేస్తే నేల సారం పెరుగుతుంది.'
        },
        'hi': {
            'display_name': 'चावल (धान)',
            'variety': 'बीपीटी 5204 (सोना मसूरी), एमटीयू 1010, तेलंगाना सोना (RNR 15048)',
            'duration': '120 - 135 दिन',
            'investment_acre': '₹16,000 - ₹20,000',
            'yield_acre': '24 - 30 क्विंटल / एकड़',
            'profit_acre': '₹35,000 - ₹48,000',
            'sowing_window': 'खरीफ: 20 जून - 20 जुलाई | रबी: 15 नवंबर - 20 दिसंबर',
            'seed_treatment': 'कार्बेंडाजिम 2 ग्राम प्रति किग्रा बीज या स्यूडोमोनास 10 ग्राम से बीजोपचार करें',
            'rotation_benefit': 'धान के बाद उड़द या चना लगाने से खेत की उपजाऊ शक्ति बढ़ती है।'
        }
    },
    'cotton': {
        'en': {
            'display_name': 'Cotton',
            'variety': 'Bollgard II Hybrids (Mallika, Kaveri ATM, RCH 659, US 7067)',
            'duration': '150 - 165 Days',
            'investment_acre': '₹20,000 - ₹25,000',
            'yield_acre': '10 - 14 Quintals / acre',
            'profit_acre': '₹48,000 - ₹72,000',
            'sowing_window': 'June 15 - July 15',
            'seed_treatment': 'Treat seeds with Trichoderma (4g/kg) and Imidacloprid (5g/kg)',
            'rotation_benefit': 'Deep taproot loosens subsoil; rotate next season with Wheat or Pulses.'
        },
        'te': {
            'display_name': 'పత్తి',
            'variety': 'బోల్‌గార్డ్ II హైబ్రిడ్స్ (మల్లిక, కావేరి, ఆర్.సి.హెచ్ 659)',
            'duration': '150 - 165 రోజులు',
            'investment_acre': '₹20,000 - ₹25,000',
            'yield_acre': '10 - 14 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹48,000 - ₹72,000',
            'sowing_window': 'జూన్ 15 - జూలై 15',
            'seed_treatment': 'కిలో విత్తనానికి ట్రైకోడెర్మా 4 గ్రాములు మరియు ఇమిడాక్లోప్రిడ్ 5 గ్రాములతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'పత్తి తర్వాత శనగలు లేదా గోధుమలు సాగు చేస్తే తెగుళ్లు తగ్గుతాయి.'
        },
        'hi': {
            'display_name': 'कपास',
            'variety': 'बोलगार्ड II हाइब्रिड (मल्लिका, कावेरी, आरसीएच 659)',
            'duration': '150 - 165 दिन',
            'investment_acre': '₹20,000 - ₹25,000',
            'yield_acre': '10 - 14 क्विंटल / एकड़',
            'profit_acre': '₹48,000 - ₹72,000',
            'sowing_window': '15 जून - 15 जुलाई',
            'seed_treatment': 'ट्राइकोडर्मा 4 ग्राम और इमिडाक्लोप्रिड 5 ग्राम प्रति किग्रा से बीजोपचार करें',
            'rotation_benefit': 'कपास के बाद गेहूं या दलहन लगाने से कीट चक्र टूटता है।'
        }
    },
    'maize': {
        'en': {
            'display_name': 'Maize (Corn)',
            'variety': 'Pioneer 3396, DKC 9108, Syngenta NK 6240, Kaveri 50',
            'duration': '95 - 110 Days',
            'investment_acre': '₹12,000 - ₹15,000',
            'yield_acre': '25 - 32 Quintals / acre',
            'profit_acre': '₹38,000 - ₹52,000',
            'sowing_window': 'Kharif: June - July | Rabi: Oct 15 - Nov 20',
            'seed_treatment': 'Treat with Cyantraniliprole 19.8% + Thiamethoxam @ 6ml/kg',
            'rotation_benefit': 'Crop stubble increases organic matter and soil health.'
        },
        'te': {
            'display_name': 'మొక్కజొన్న',
            'variety': 'పయనీర్ 3396, డి.కె.సి 9108, సింజెంటా ఎన్.కె 6240',
            'duration': '95 - 110 రోజులు',
            'investment_acre': '₹12,000 - ₹15,000',
            'yield_acre': '25 - 32 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹38,000 - ₹52,000',
            'sowing_window': 'వానాకాలం: జూన్ - జూలై | యాసంగి: అక్టోబర్ 15 - నవంబర్ 20',
            'seed_treatment': 'కత్తెర పురుగు నివారణకు కిలో విత్తనానికి 6 మి.లీ సయాంట్రానిలిప్రోల్ + థయామిథోక్సామ్‌తో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'మొక్కజొన్న పంట అవశేషాలు నేలలో సేంద్రీయ కర్బనాన్ని పెంచుతాయి.'
        },
        'hi': {
            'display_name': 'मक्का',
            'variety': 'पायनियर 3396, डीकेसी 9108, सिंजेंटा एनके 6240',
            'duration': '95 - 110 दिन',
            'investment_acre': '₹12,000 - ₹15,000',
            'yield_acre': '25 - 32 क्विंटल / एकड़',
            'profit_acre': '₹38,000 - ₹52,000',
            'sowing_window': 'खरीफ: जून - जुलाई | रबी: 15 अक्टूबर - 20 नवंबर',
            'seed_treatment': 'कीटों से बचाव हेतु 6 मिली प्रति किग्रा बीज से उपचार करें',
            'rotation_benefit': 'मक्का के ठूंठ मिट्टी में जैविक कार्बन बढ़ाने में सहायक होते हैं।'
        }
    },
    'chickpea': {
        'en': {
            'display_name': 'Bengal Gram (Chickpea)',
            'variety': 'JG 11, JAKI 9218, KAK 2, NBeG 3',
            'duration': '90 - 105 Days',
            'investment_acre': '₹8,000 - ₹11,000',
            'yield_acre': '8 - 12 Quintals / acre',
            'profit_acre': '₹32,000 - ₹50,000',
            'sowing_window': 'Oct 15 - Nov 15',
            'seed_treatment': 'Rhizobium culture @ 200g/acre + Trichoderma @ 4g/kg seed',
            'rotation_benefit': 'Fixes atmospheric nitrogen into your soil, cutting fertilizer costs.'
        },
        'te': {
            'display_name': 'శనగలు (బెంగాల్ గ్రామ్)',
            'variety': 'జె.జి 11, జాకి 9218, కాక్ 2, ఎన్.బి.ఇ.జి 3',
            'duration': '90 - 105 రోజులు',
            'investment_acre': '₹8,000 - ₹11,000',
            'yield_acre': '8 - 12 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹32,000 - ₹50,000',
            'sowing_window': 'అక్టోబర్ 15 - నవంబర్ 15',
            'seed_treatment': 'రైజోబియం కల్చర్ ఎకరానికి 200 గ్రాములు + ట్రైకోడెర్మా 4 గ్రాములతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'సహజంగా నత్రజని స్థిరీకరించి నేల సారాన్ని పెంచుతుంది.'
        },
        'hi': {
            'display_name': 'चना (बंगाल चना)',
            'variety': 'जेजी 11, जाकी 9218, काक 2, एनबीईजी 3',
            'duration': '90 - 105 दिन',
            'investment_acre': '₹8,000 - ₹11,000',
            'yield_acre': '8 - 12 क्विंटल / एकड़',
            'profit_acre': '₹32,000 - ₹50,000',
            'sowing_window': '15 अक्टूबर - 15 नवंबर',
            'seed_treatment': 'राइजोबियम 200 ग्राम प्रति एकड़ + ट्राइकोडर्मा 4 ग्राम से बीजोपचार करें',
            'rotation_benefit': 'भूमि में नाइट्रोजन जोड़कर उर्वरक का खर्च घटाता है।'
        }
    },
    'pigeonpeas': {
        'en': {
            'display_name': 'Red Gram (Arhar / Tur)',
            'variety': 'PRG 176, Asha (ICPL 87119), WRG 65',
            'duration': '150 - 180 Days',
            'investment_acre': '₹9,000 - ₹13,000',
            'yield_acre': '7 - 10 Quintals / acre',
            'profit_acre': '₹38,000 - ₹55,000',
            'sowing_window': 'June 15 - July 15',
            'seed_treatment': 'Treat seed with Rhizobium and Trichoderma viride',
            'rotation_benefit': 'Root nodules enrich soil fertility and improve water retention.'
        },
        'te': {
            'display_name': 'కందులు (తువర్)',
            'variety': 'పి.ఆర్.జి 176, ఆశ (ఐ.సి.పి.ఎల్ 87119), డబ్ల్యు.ఆర్.జి 65',
            'duration': '150 - 180 రోజులు',
            'investment_acre': '₹9,000 - ₹13,000',
            'yield_acre': '7 - 10 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹38,000 - ₹55,000',
            'sowing_window': 'జూన్ 15 - జూలై 15',
            'seed_treatment': 'రైజోబియం మరియు ట్రైకోడెర్మా విరిడేతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'లోతైన వేర్లు భూమి గట్టిదనాన్ని తగ్గించి సారవంతం చేస్తాయి.'
        },
        'hi': {
            'display_name': 'अरहर (तुअर)',
            'variety': 'पीआरजी 176, आशा, डब्ल्यूआरजी 65',
            'duration': '150 - 180 दिन',
            'investment_acre': '₹9,000 - ₹13,000',
            'yield_acre': '7 - 10 क्विंटल / एकड़',
            'profit_acre': '₹38,000 - ₹55,000',
            'sowing_window': '15 जून - 15 जुलाई',
            'seed_treatment': 'राइजोबियम और ट्राइकोडर्मा विरिडी से बीजोपचार करें',
            'rotation_benefit': 'गहरी जड़ें मिट्टी को ढीला कर भूजल सोखने में मदद करती हैं।'
        }
    },
    'mungbean': {
        'en': {
            'display_name': 'Green Gram (Moong)',
            'variety': 'WGG 42, IPM 02-3, Samrat',
            'duration': '60 - 70 Days',
            'investment_acre': '₹6,000 - ₹8,500',
            'yield_acre': '5 - 7 Quintals / acre',
            'profit_acre': '₹32,000 - ₹48,000',
            'sowing_window': 'Kharif: June - July | Summer: Feb - March',
            'seed_treatment': 'Rhizobium @ 250g/acre seed treatment',
            'rotation_benefit': 'Shortest duration pulse; fits perfectly between main seasons.'
        },
        'te': {
            'display_name': 'పెసలు (మూంగ్)',
            'variety': 'డబ్ల్యు.జి.జి 42, ఐ.పి.ఎమ్ 02-3, సామ్రాట్',
            'duration': '60 - 70 రోజులు',
            'investment_acre': '₹6,000 - ₹8,500',
            'yield_acre': '5 - 7 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹32,000 - ₹48,000',
            'sowing_window': 'వానాకాలం: జూన్ - జూలై | వేసవి: ఫిబ్రవరి - మార్చి',
            'seed_treatment': 'రైజోబియం కల్చర్ ఎకరానికి 250 గ్రాములతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'కేవలం రెండు నెలల్లో చేతికి వచ్చే త్వరిత ఆదాయ పంట.'
        },
        'hi': {
            'display_name': 'मूंग (हरी मूंग)',
            'variety': 'डब्ल्यूजीजी 42, आईपीएम 02-3, सम्राट',
            'duration': '60 - 70 दिन',
            'investment_acre': '₹6,000 - ₹8,500',
            'yield_acre': '5 - 7 क्विंटल / एकड़',
            'profit_acre': '₹32,000 - ₹48,000',
            'sowing_window': 'खरीफ: जून - जुलाई | जायद: फरवरी - मार्च',
            'seed_treatment': 'राइजोबियम कल्चर 250 ग्राम प्रति एकड़ से बीजोपचार करें',
            'rotation_benefit': 'मात्र 60 दिनों में तैयार होकर त्वरित नकद आमदनी देती है।'
        }
    },
    'blackgram': {
        'en': {
            'display_name': 'Black Gram (Urad)',
            'variety': 'PU 31, LBG 752, Shekhar 2',
            'duration': '70 - 80 Days',
            'investment_acre': '₹7,000 - ₹9,500',
            'yield_acre': '6 - 8 Quintals / acre',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': 'Kharif: June - July | Rice Fallow: Nov - Dec',
            'seed_treatment': 'Trichoderma 4g/kg + Imidacloprid 5ml/kg',
            'rotation_benefit': 'Restores organic matter and enriches nitrogen naturally.'
        },
        'te': {
            'display_name': 'మినుములు (ఉలవలు/ఉరద్)',
            'variety': 'పి.యు 31, ఎల్.బి.జి 752, శేఖర్ 2',
            'duration': '70 - 80 రోజులు',
            'investment_acre': '₹7,000 - ₹9,500',
            'yield_acre': '6 - 8 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': 'వానాకాలం: జూన్ - జూలై | మాగాణి: నవంబర్ - డిసెంబర్',
            'seed_treatment': 'కిలో విత్తనానికి ట్రైకోడెర్మా 4 గ్రాములు మరియు ఇమిడాక్లోప్రిడ్ 5 మి.లీతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'వరి కోతల తర్వాత తక్కువ పెట్టుబడితో ఎక్కువ రాబడి ఇస్తుంది.'
        },
        'hi': {
            'display_name': 'उड़द (काली दाल)',
            'variety': 'पीयू 31, एलबीजी 752, शेखर 2',
            'duration': '70 - 80 दिन',
            'investment_acre': '₹7,000 - ₹9,500',
            'yield_acre': '6 - 8 क्विंटल / एकड़',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': 'खरीफ: जून - जुलाई | धान के बाद: नवंबर - दिसंबर',
            'seed_treatment': 'ट्राइकोडर्मा 4 ग्राम और इमिडाक्लोप्रिड 5 मिली प्रति किग्रा से बीजोपचार करें',
            'rotation_benefit': 'भूमि की उर्वरा शक्ति को मजबूत करती है।'
        }
    },
    'groundnut': {
        'en': {
            'display_name': 'Groundnut (Peanut)',
            'variety': 'Kadiri 6 (K-6), TAG 24, Dharani',
            'duration': '105 - 115 Days',
            'investment_acre': '₹14,000 - ₹18,000',
            'yield_acre': '12 - 16 Quintals / acre',
            'profit_acre': '₹45,000 - ₹68,000',
            'sowing_window': 'Kharif: June 15 - July 15 | Rabi: Oct 15 - Nov 30',
            'seed_treatment': 'Treat seeds with Mancozeb 3g/kg seed',
            'rotation_benefit': 'Leaves valuable nitrogen-rich foliage for animal fodder.'
        },
        'te': {
            'display_name': 'వేరుశనగ (పల్లీలు)',
            'variety': 'కదిరి 6 (కె-6), టి.ఎ.జి 24, ధరణి',
            'duration': '105 - 115 రోజులు',
            'investment_acre': '₹14,000 - ₹18,000',
            'yield_acre': '12 - 16 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹45,000 - ₹68,000',
            'sowing_window': 'వానాకాలం: జూన్ 15 - జూలై 15 | యాసంగి: అక్టోబర్ 15 - నవంబర్ 30',
            'seed_treatment': 'కిలో విత్తనానికి మాంకోజెబ్ 3 గ్రాములతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'పంట అవశేషాలు పశువులకు బలవర్థకమైన మేతగా ఉపయోగపడతాయి.'
        },
        'hi': {
            'display_name': 'मूंगफली',
            'variety': 'कदिरी 6 (के-6), टीएजी 24, धरणी',
            'duration': '105 - 115 दिन',
            'investment_acre': '₹14,000 - ₹18,000',
            'yield_acre': '12 - 16 क्विंटल / एकड़',
            'profit_acre': '₹45,000 - ₹68,000',
            'sowing_window': 'खरीफ: 15 जून - 15 जुलाई | रबी: 15 अक्टूबर - 30 नवंबर',
            'seed_treatment': 'मेंकोजेब 3 ग्राम प्रति किग्रा बीज से उपचार करें',
            'rotation_benefit': 'मिट्टी की संरचना सुधारती है और पशुओं के लिए पौष्टिक चारा देती है।'
        }
    },
    'banana': {
        'en': {
            'display_name': 'Banana (Grand Naine)',
            'variety': 'Grand Naine (G9 Tissue Culture), Robusta',
            'duration': '11 - 12 Months',
            'investment_acre': '₹65,000 - ₹85,000',
            'yield_acre': '25 - 35 Tonnes / acre',
            'profit_acre': '₹1,50,000 - ₹2,50,000',
            'sowing_window': 'June - July or Sep - Oct',
            'seed_treatment': 'Dip plantlets in Carbendazim (1g/L) and Chlorpyrifos (2ml/L)',
            'rotation_benefit': 'Regular income through staggered harvest rounds.'
        },
        'te': {
            'display_name': 'అరటి (గ్రాండ్ నైన్)',
            'variety': 'గ్రాండ్ నైన్ (జి9 టిష్యూ కల్చర్), రోబస్టా',
            'duration': '11 - 12 నెలలు',
            'investment_acre': '₹65,000 - ₹85,000',
            'yield_acre': '25 - 35 టన్నులు / ఎకరా',
            'profit_acre': '₹1,50,000 - ₹2,50,000',
            'sowing_window': 'జూన్ - జూలై లేదా సెప్టెంబర్ - అక్టోబర్',
            'seed_treatment': 'పిలకలను లీటరు నీటికి 1 గ్రాము కార్బండజిమ్ కలిపిన ద్రావణంలో ముంచి నాటండి',
            'rotation_benefit': 'వరుస కోతల ద్వారా రైతుకు స్థిరమైన నిరంతర ఆదాయం లభిస్తుంది.'
        },
        'hi': {
            'display_name': 'केला (ग्रैंड नैन)',
            'variety': 'ग्रैंड नैन (जी9 टिश्यू कल्चर), रोबस्टा',
            'duration': '11 - 12 महीने',
            'investment_acre': '₹65,000 - ₹85,000',
            'yield_acre': '25 - 35 टन / एकड़',
            'profit_acre': '₹1,50,000 - ₹2,50,000',
            'sowing_window': 'जून - जुलाई या सितंबर - अक्टूबर',
            'seed_treatment': 'पौधों को कार्बेन्डाजिम (1 ग्राम/लीटर) के घोल में डुबोकर लगाएं',
            'rotation_benefit': 'नियमित अंतराल पर तुड़ाई से लगातार भारी मुनाफा मिलता है।'
        }
    },
    'pomegranate': {
        'en': {
            'display_name': 'Pomegranate (Bhagwa)',
            'variety': 'Bhagwa (Sindhuri), Arakta, Ganesh',
            'duration': 'Perennial Orchard',
            'investment_acre': '₹70,000 - ₹90,000',
            'yield_acre': '4 - 6 Tonnes / acre',
            'profit_acre': '₹1,80,000 - ₹3,20,000',
            'sowing_window': 'July - August',
            'seed_treatment': 'Root dip in bio-fungicide and Pseudomonas',
            'rotation_benefit': 'Long term commercial orchard yielding profits for 15+ years.'
        },
        'te': {
            'display_name': 'దానిమ్మ (భగ్వా)',
            'variety': 'భగ్వా (సింధూరి), అరక్త, గణేష్',
            'duration': 'దీర్ఘకాలిక పండ్ల తోట',
            'investment_acre': '₹70,000 - ₹90,000',
            'yield_acre': '4 - 6 టన్నులు / ఎకరా',
            'profit_acre': '₹1,80,000 - ₹3,20,000',
            'sowing_window': 'జూలై - ఆగస్టు',
            'seed_treatment': 'మొక్కల వేర్లను జీవ శిలీంద్రనాశిని మరియు సూడోమోనాస్ ద్రావణంలో ముంచి నాటండి',
            'rotation_benefit': 'ఒక్కసారి నాటితే 15-20 ఏళ్ల పాటు నిరంతరం లాభాలు ఇచ్చే తోట.'
        },
        'hi': {
            'display_name': 'अनार (भगवा)',
            'variety': 'भगवा (सिंदूरी), अरक्ता, गणेश',
            'duration': 'सदाबहार बागवानी',
            'investment_acre': '₹70,000 - ₹90,000',
            'yield_acre': '4 - 6 टन / एकड़',
            'profit_acre': '₹1,80,000 - ₹3,20,000',
            'sowing_window': 'जुलाई - अगस्त',
            'seed_treatment': 'जड़ों को जैव-फफूंदनाशी और स्यूडोमोनास के घोल में डुबोएं',
            'rotation_benefit': 'एक बार रोपण के बाद 15-20 वर्षों तक लगातार बंपर मुनाफा।'
        }
    },
    'watermelon': {
        'en': {
            'display_name': 'Watermelon',
            'variety': 'Maxx, Sagar King, Black Gold',
            'duration': '75 - 85 Days',
            'investment_acre': '₹25,000 - ₹32,000',
            'yield_acre': '20 - 28 Tonnes / acre',
            'profit_acre': '₹60,000 - ₹1,10,000',
            'sowing_window': 'Dec 15 - Feb 15',
            'seed_treatment': 'Soak seeds with Trichoderma for 12 hours',
            'rotation_benefit': 'Fast cash returns during dry summer season between field crops.'
        },
        'te': {
            'display_name': 'పుచ్చకాయ',
            'variety': 'మ్యాక్స్, సాగర్ కింగ్, బ్లాక్ గోల్డ్',
            'duration': '75 - 85 రోజులు',
            'investment_acre': '₹25,000 - ₹32,000',
            'yield_acre': '20 - 28 టన్నులు / ఎకరా',
            'profit_acre': '₹60,000 - ₹1,10,000',
            'sowing_window': 'డిసెంబర్ 15 - ఫిబ్రవరి 15',
            'seed_treatment': 'విత్తనాలను గోరువెచ్చని నీటిలో ట్రైకోడెర్మ కలిపి 12 గంటలు నానబెట్టి విత్తండి',
            'rotation_benefit': 'వేసవి కాలంలో తక్కువ సమయంలో భారీ లాభాలు అందించే పంట.'
        },
        'hi': {
            'display_name': 'तरबूज',
            'variety': 'मैक्स, सागर किंग, ब्लैक गोल्ड',
            'duration': '75 - 85 दिन',
            'investment_acre': '₹25,000 - ₹32,000',
            'yield_acre': '20 - 28 टन / एकड़',
            'profit_acre': '₹60,000 - ₹1,10,000',
            'sowing_window': '15 दिसंबर - 15 फरवरी',
            'seed_treatment': 'बीजों को ट्राइकोडर्मा मिले पानी में 12 घंटे भिगोकर बोएं',
            'rotation_benefit': 'गर्मियों में खाली पड़े खेतों से बंपर नकद मुनाफा देने वाली फसल।'
        }
    },
    'wheat': {
        'en': {
            'display_name': 'Wheat',
            'variety': 'GW 322, HD 2967, Lok 1',
            'duration': '110 - 125 Days',
            'investment_acre': '₹11,000 - ₹14,000',
            'yield_acre': '18 - 24 Quintals / acre',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': 'Nov 1 - Nov 25',
            'seed_treatment': 'Treat seed with Carboxin + Thiram (2g/kg)',
            'rotation_benefit': 'Ideal winter crop following Kharif Paddy or Maize.'
        },
        'te': {
            'display_name': 'గోధుమలు',
            'variety': 'జి.డబ్ల్యు 322, హెచ్.డి 2967, లోక్ 1',
            'duration': '110 - 125 రోజులు',
            'investment_acre': '₹11,000 - ₹14,000',
            'yield_acre': '18 - 24 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': 'నవంబర్ 1 - నవంబర్ 25',
            'seed_treatment': 'కిలో విత్తనానికి 2 గ్రాముల కార్బాక్సిన్ + థైరమ్‌తో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'వరి లేదా మొక్కజొన్న తర్వాత శీతాకాలంలో అనువైన ఆహార ధాన్య పంట.'
        },
        'hi': {
            'display_name': 'गेहूं',
            'variety': 'जीडब्ल्यू 322, एचडी 2967, लोक 1',
            'duration': '110 - 125 दिन',
            'investment_acre': '₹11,000 - ₹14,000',
            'yield_acre': '18 - 24 क्विंटल / एकड़',
            'profit_acre': '₹30,000 - ₹44,000',
            'sowing_window': '1 नवंबर - 25 नवंबर',
            'seed_treatment': 'कार्बोक्सिन + थीरम 2 ग्राम प्रति किग्रा से बीजोपचार करें',
            'rotation_benefit': 'धान अथवा मक्का के बाद रबी मौसम की सबसे सुरक्षित अनाज फसल।'
        }
    },
    'soybean': {
        'en': {
            'display_name': 'Soybean',
            'variety': 'JS 335, JS 95-60, NRC 37',
            'duration': '90 - 100 Days',
            'investment_acre': '₹9,000 - ₹12,000',
            'yield_acre': '8 - 12 Quintals / acre',
            'profit_acre': '₹30,000 - ₹48,000',
            'sowing_window': 'June 20 - July 15',
            'seed_treatment': 'Bradyrhizobium japonicum @ 250g/acre',
            'rotation_benefit': 'Fixes atmospheric nitrogen, ideal predecessor to winter Wheat.'
        },
        'te': {
            'display_name': 'సోయాబీన్',
            'variety': 'జె.ఎస్ 335, జె.ఎస్ 95-60, ఎన్.ఆర్.సి 37',
            'duration': '90 - 100 రోజులు',
            'investment_acre': '₹9,000 - ₹12,000',
            'yield_acre': '8 - 12 క్వింటాళ్లు / ఎకరా',
            'profit_acre': '₹30,000 - ₹48,000',
            'sowing_window': 'జూన్ 20 - జూలై 15',
            'seed_treatment': 'ఎకరానికి 250 గ్రాముల బ్రాడీరైజోబియం మరియు 4 గ్రాముల ట్రైకోడెర్మాతో విత్తన శుద్ధి చేయండి',
            'rotation_benefit': 'భూసారాన్ని పెంచి యాసంగి పంటలకు ఎరువుల ఖర్చు తగ్గిస్తుంది.'
        },
        'hi': {
            'display_name': 'सोयाबीन',
            'variety': 'जेएस 335, जेएस 95-60, एनआरसी 37',
            'duration': '90 - 100 दिन',
            'investment_acre': '₹9,000 - ₹12,000',
            'yield_acre': '8 - 12 क्विंटल / एकड़',
            'profit_acre': '₹30,000 - ₹48,000',
            'sowing_window': '20 जून - 15 जुलाई',
            'seed_treatment': 'ब्रेडीराइजोबियम कल्चर 250 ग्राम प्रति एकड़ से बीजोपचार करें',
            'rotation_benefit': 'मिट्टी को समृद्ध कर रबी गेहूं के लिए उत्कृष्ट आधार तैयार करता है।'
        }
    },
    'sugarcane': {
        'en': {
            'display_name': 'Sugarcane',
            'variety': 'Co 86032, Co 0238, CoLk 94184',
            'duration': '10 - 12 Months',
            'investment_acre': '₹45,000 - ₹60,000',
            'yield_acre': '40 - 55 Tonnes / acre',
            'profit_acre': '₹80,000 - ₹1,40,000',
            'sowing_window': 'Jan - March or Oct - Nov',
            'seed_treatment': 'Dip setts in Carbendazim (1g/L) for 15 minutes',
            'rotation_benefit': 'High cash yield per acre with guaranteed sugar mill procurement.'
        },
        'te': {
            'display_name': 'చెరకు',
            'variety': 'సి.ఒ 86032, సి.ఒ 0238, సి.ఒ.ఎల్.కె 94184',
            'duration': '10 - 12 నెలలు',
            'investment_acre': '₹45,000 - ₹60,000',
            'yield_acre': '40 - 55 టన్నులు / ఎకరా',
            'profit_acre': '₹80,000 - ₹1,40,000',
            'sowing_window': 'జనవరి - మార్చి లేదా అక్టోబర్ - నవంబర్',
            'seed_treatment': 'చెరకు ముక్కలను లీటరు నీటికి 1 గ్రాము కార్బండజిమ్ కలిపిన ద్రావణంలో 15 నిమిషాలు నానబెట్టి నాటండి',
            'rotation_benefit': 'షుగర్ ఫ్యాక్టరీ కొనుగోలుతో హామీ ఉన్న భారీ నగదు రాబడి.'
        },
        'hi': {
            'display_name': 'गन्ना',
            'variety': 'सीओ 86032, सीओ 0238, सीओएलके 94184',
            'duration': '10 - 12 महीने',
            'investment_acre': '₹45,000 - ₹60,000',
            'yield_acre': '40 - 55 टन / एकड़',
            'profit_acre': '₹80,000 - ₹1,40,000',
            'sowing_window': 'जनवरी - मार्च या अक्टूबर - नवंबर',
            'seed_treatment': 'गन्ने के टुकड़ों को कार्बेन्डाजिम (1 ग्राम/लीटर) के घोल में 15 मिनट डुबोएं',
            'rotation_benefit': 'चीनी मिलों द्वारा गारंटीड खरीद और भारी नकद कमाई।'
        }
    }
}


PREV_CROP_NAMES = {
    'rice': {'en': 'Paddy / Rice', 'te': 'వరి', 'hi': 'धान'},
    'cotton': {'en': 'Cotton', 'te': 'పత్తి', 'hi': 'कपास'},
    'maize': {'en': 'Maize', 'te': 'మొక్కజొన్న', 'hi': 'मक्का'},
    'pulses': {'en': 'Pulses / Dal', 'te': 'పప్పుధాన్యాలు', 'hi': 'दलहन'},
    'groundnut': {'en': 'Groundnut', 'te': 'వేరుశనగ', 'hi': 'मूंगफली'},
    'soybean': {'en': 'Soybean', 'te': 'సోయాబీన్', 'hi': 'सोयाबीन'},
    'chilli': {'en': 'Chilli / Veg', 'te': 'మిరప / కూరగాయలు', 'hi': 'मिर्च / सब्जियां'},
    'none': {'en': 'Fallow Land', 'te': 'బీడు భూమి', 'hi': 'परती खेत'}
}


def recommend_crop_for_farmer(
    soil_type="black_cotton",
    season="kharif",
    water_source="moderate",
    land_terrain="upland",
    previous_crop="rice",
    previous_crop_1=None,
    previous_crop_2=None,
    farming_goal="commercial",
    state="Telangana",
    opt_n=None,
    opt_p=None,
    opt_k=None,
    opt_ph=None,
    language="en"
):
    """
    100% Farmer-Oriented Recommendation Engine.
    Converts real farmer land conditions into soil-climate parameters,
    runs Machine Learning inference, and applies agricultural crop rotation and terrain heuristics.
    Strictly localized to the selected language (en, te, hi) without mixing words.
    """
    lang = language.lower() if language else "en"
    if lang not in ["en", "te", "hi"]:
        lang = "en"

    # Crop Rotation Inputs (Last Season & 2 Seasons Ago)
    prev1 = (previous_crop_1 or previous_crop or "rice").lower()
    prev2 = (previous_crop_2 or "cotton").lower()

    p1_name = PREV_CROP_NAMES.get(prev1, {}).get(lang, prev1.capitalize())
    p2_name = PREV_CROP_NAMES.get(prev2, {}).get(lang, prev2.capitalize())

    # 1. Translate Farmer Inputs to Agronomic Environment
    soil_defaults = {
        'black_cotton': {'N': 110, 'P': 45, 'K': 22, 'ph': 7.4, 'desc': {'en': 'Heavy clay Black Cotton Soil', 'te': 'తేమను నిలుపుకునే నల్లరేగడి నేల', 'hi': 'नमी रोकने वाली भारी काली कपास मिट्टी'}},
        'red_loam':     {'N': 75,  'P': 55, 'K': 32, 'ph': 6.4, 'desc': {'en': 'Porous Red Sandy Loam', 'te': 'గాలి ఆడే ఎర్ర నేల', 'hi': 'भुरभुरी लाल दोमट मिट्टी'}},
        'alluvial':     {'N': 95,  'P': 48, 'K': 42, 'ph': 6.8, 'desc': {'en': 'Deep, fertile River Alluvial Soil', 'te': 'సారవంతమైన ఒండ్రు నేల', 'hi': 'अत्यंत उपजाऊ जलोढ़ मिट्टी'}},
        'sandy':        {'N': 60,  'P': 35, 'K': 25, 'ph': 6.5, 'desc': {'en': 'Light Sandy Soil with rapid drainage', 'te': 'త్వరగా నీరు ఇంకే ఇసుక నేల', 'hi': 'तेजी से पानी सोखने वाली बलुई मिट्टी'}},
        'clay':         {'N': 85,  'P': 45, 'K': 40, 'ph': 7.0, 'desc': {'en': 'Dense Clayey Soil', 'te': 'నీరు నిలబడే బంకమట్టి నేల', 'hi': 'गाढ़ी चिकनी मिट्टी'}}
    }
    
    season_defaults = {
        'kharif': {'temp': 28.5, 'hum': 80.0, 'rain': 190.0, 'name': {'en': 'Monsoon (Kharif) Season', 'te': 'వానాకాలం (ఖరీఫ్) కాలం', 'hi': 'मानसून (खरीफ) मौसम'}},
        'rabi':   {'temp': 22.0, 'hum': 58.0, 'rain': 45.0,  'name': {'en': 'Winter (Rabi) Season', 'te': 'యాసంగి (రబీ) కాలం', 'hi': 'सर्दियों का (रबी) मौसम'}},
        'zaid':   {'temp': 34.0, 'hum': 42.0, 'rain': 25.0,  'name': {'en': 'Summer (Zaid) Season', 'te': 'వేసవి (జాయద్) కాలం', 'hi': 'गर्मियों का (जायद) मौसम'}}
    }

    s_prof = soil_defaults.get(soil_type, soil_defaults['black_cotton'])
    seas_prof = season_defaults.get(season, season_defaults['kharif'])

    # Override if farmer optionally supplied actual soil health card numbers
    n_val = float(opt_n) if opt_n not in (None, "", 0) else s_prof['N']
    p_val = float(opt_p) if opt_p not in (None, "", 0) else s_prof['P']
    k_val = float(opt_k) if opt_k not in (None, "", 0) else s_prof['K']
    ph_val = float(opt_ph) if opt_ph not in (None, "", 0) else s_prof['ph']

    temp_val = seas_prof['temp']
    hum_val = seas_prof['hum']
    rain_val = seas_prof['rain']

    if water_source == 'abundant':
        rain_val = max(rain_val, 180.0)
    elif water_source == 'rainfed':
        rain_val = min(rain_val, 85.0)

    # 2. Run Random Forest Inference
    rf_model = get_crop_model()
    input_df = pd.DataFrame([{
        'soil_type': soil_type,
        'season': season,
        'water_source': water_source,
        'land_terrain': land_terrain,
        'farming_goal': farming_goal,
        'previous_crop': prev1,
        'N': n_val, 'P': p_val, 'K': k_val,
        'temperature': temp_val, 'humidity': hum_val, 'ph': ph_val, 'rainfall': rain_val
    }])
    
    rf_probs = {}
    if rf_model:
        try:
            probs = rf_model.predict_proba(input_df)[0]
        except Exception:
            num_df = input_df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
            probs = rf_model.predict_proba(num_df)[0]

        classes = getattr(rf_model, 'classes_', None)
        if classes is None and hasattr(rf_model, 'named_steps'):
            classes = rf_model.named_steps['classifier'].classes_
        if classes is not None:
            for c, p in zip(classes, probs):
                rf_probs[c.lower()] = float(p)

    # 3. Apply Real-World Agricultural Heuristic Scores (Suitability Scoring)
    legumes = {'pulses', 'chickpea', 'blackgram', 'mungbean', 'pigeonpeas', 'groundnut', 'soybean'}
    cereals = {'rice', 'maize', 'wheat'}
    heavy_feeders = {'cotton', 'rice', 'maize', 'sugarcane', 'banana', 'chilli'}

    candidate_scores = {}
    for crop_key in FARMER_CROP_KNOWLEDGE.keys():
        base_score = rf_probs.get(crop_key, 0.05) * 100.0

        # Water source adjustments
        if water_source == 'rainfed':
            if crop_key in ['rice', 'banana', 'sugarcane']:
                base_score *= 0.10
            elif crop_key in ['chickpea', 'pigeonpeas', 'mungbean', 'cotton', 'groundnut', 'soybean']:
                base_score *= 1.35
        elif water_source == 'abundant':
            if crop_key in ['rice', 'banana', 'sugarcane']:
                base_score *= 1.45
            elif crop_key in ['chickpea', 'groundnut']:
                base_score *= 0.65

        # Land terrain adjustments
        if land_terrain == 'lowland':
            if crop_key in ['rice', 'sugarcane']:
                base_score *= 1.45
            elif crop_key in ['cotton', 'maize', 'groundnut', 'soybean']:
                base_score *= 0.35
        elif land_terrain == 'upland':
            if crop_key in ['cotton', 'maize', 'groundnut', 'pigeonpeas', 'soybean', 'wheat']:
                base_score *= 1.35
            elif crop_key == 'rice':
                base_score *= 0.45

        # Season adjustments
        if season == 'rabi':
            if crop_key in ['wheat', 'chickpea', 'blackgram', 'maize', 'groundnut']:
                base_score *= 1.35
            elif crop_key == 'cotton':
                base_score *= 0.25
        elif season == 'zaid':
            if crop_key in ['watermelon', 'mungbean']:
                base_score *= 1.50
            elif crop_key in ['wheat', 'chickpea']:
                base_score *= 0.15
        elif season == 'kharif':
            if crop_key in ['cotton', 'rice', 'maize', 'soybean', 'pigeonpeas', 'groundnut', 'sugarcane']:
                base_score *= 1.30

        # === 2-SEASON CROP ROTATION AGRONOMIC LOGIC ===
        # A. Monoculture Penalty & Break-Crop Bonus (2 consecutive seasons of same crop)
        if prev1 == prev2 and prev1 != 'none':
            if prev1 == 'cotton' and crop_key == 'cotton':
                base_score *= 0.30  # Severe penalty: Pink bollworm resistance & soil exhaustion
            elif prev1 == 'rice' and crop_key == 'rice':
                base_score *= 0.35  # Severe penalty: Stem borer, blast & micro-nutrient depletion
            elif prev1 == 'maize' and crop_key == 'maize':
                base_score *= 0.40  # Fall armyworm carryover
            elif prev1 in legumes and crop_key in legumes:
                base_score *= 0.40  # Root rot / wilt fungi buildup
            elif prev1 == 'groundnut' and crop_key == 'groundnut':
                base_score *= 0.35  # Tikka disease carryover
            elif prev1 == 'soybean' and crop_key == 'soybean':
                base_score *= 0.40
            elif prev1 == 'chilli' and crop_key == 'chilli':
                base_score *= 0.30

            # Alternative Break Crops get a high reward
            if prev1 == 'cotton' and crop_key in ['chickpea', 'maize', 'blackgram', 'wheat', 'soybean']:
                base_score += 28.0
            elif prev1 == 'rice' and crop_key in ['blackgram', 'chickpea', 'groundnut', 'maize']:
                base_score += 28.0
            elif prev1 in cereals and crop_key in ['chickpea', 'blackgram', 'pigeonpeas', 'groundnut', 'soybean']:
                base_score += 28.0
            elif prev1 in legumes and crop_key in ['cotton', 'maize', 'rice', 'wheat']:
                base_score += 28.0

        # B. Legume Residual Nitrogen Enrichment
        if prev1 in legumes:
            if crop_key in heavy_feeders:
                base_score += 20.0  # Residual N + organic biomass
        elif prev2 in legumes:
            if crop_key in heavy_feeders:
                base_score += 12.0  # Carried-over soil fertility

        # C. Cereal-to-Pulse/Oilseed Alternation
        if prev1 in cereals:
            if crop_key in ['chickpea', 'blackgram', 'mungbean', 'pigeonpeas', 'soybean', 'groundnut']:
                base_score += 20.0
            if prev2 in cereals and crop_key in ['chickpea', 'blackgram', 'pigeonpeas', 'groundnut', 'soybean']:
                base_score += 10.0  # Extra boost after two seasons of cereals

        # D. Taproot vs Fibrous Root Depth Alternation
        if prev1 == 'cotton' and crop_key in ['chickpea', 'wheat', 'maize', 'groundnut', 'mungbean', 'blackgram']:
            base_score += 16.0
        elif prev1 in ['rice', 'wheat'] and land_terrain == 'upland' and crop_key in ['cotton', 'pigeonpeas']:
            base_score += 14.0

        # E. Fallow Field Utilization
        if prev1 == 'none' or prev2 == 'none':
            if crop_key in ['cotton', 'maize', 'groundnut', 'chickpea', 'watermelon']:
                base_score += 15.0

        # Farming Goal Adjustments
        if farming_goal == 'commercial' and crop_key in ['cotton', 'banana', 'pomegranate', 'sugarcane', 'groundnut']:
            base_score += 12.0
        elif farming_goal == 'food_safe' and crop_key in ['rice', 'wheat', 'maize']:
            base_score += 14.0
        elif farming_goal == 'quick_cash' and crop_key in ['mungbean', 'watermelon', 'blackgram', 'soybean']:
            base_score += 15.0
        elif farming_goal == 'horticulture' and crop_key in ['banana', 'pomegranate']:
            base_score += 20.0

        candidate_scores[crop_key] = base_score

    sorted_crops = sorted(candidate_scores.items(), key=lambda x: x[1], reverse=True)
    top_candidates = []
    
    for crop_key, score in sorted_crops[:3]:
        crop_data = FARMER_CROP_KNOWLEDGE[crop_key]
        info = crop_data.get(lang, crop_data['en'])
        normalized_conf = min(98.5, max(75.0, round(score * 0.95, 1)))

        reasons = []
        if lang == 'te':
            if soil_type in ['black_cotton', 'clay'] and crop_key in ['cotton', 'rice', 'chickpea']:
                reasons.append(f"మీ నేల {info['display_name']} పంటకు తగినంత తేమను, పోషకాలను నిలుపుకోగలదు.")
            elif soil_type in ['red_loam', 'sandy'] and crop_key in ['maize', 'groundnut', 'watermelon']:
                reasons.append(f"మీ తేలికపాటి నేలలో నీరు నిలవకుండా వేగంగా ఇంకిపోతుంది, ఇది {info['display_name']} వేర్లకు చాలా మంచిది.")
            if water_source == 'abundant':
                reasons.append("సమృద్ధిగా ఉన్న నీటి వనరులు పంట ఆరోగ్యంగా ఎదగడానికి మరియు అధిక దిగుబడికి తోడ్పడతాయి.")
            elif water_source == 'rainfed':
                reasons.append("తక్కువ వర్షపాతం మరియు బెట్ట పరిస్థితులను తట్టుకుని ఈ పంట మంచి దిగుబడిని ఇస్తుంది.")
            else:
                reasons.append("మోస్తరు నీటి సదుపాయం ఈ పంట అవసరాలకు సరిగ్గా సరిపోతుంది.")

            # Dynamic 2-Season Crop Rotation Reason
            if prev1 == prev2 and prev1 != 'none':
                if crop_key == prev1:
                    reasons.append(f"గమనిక: వరుసగా 3వ సీజన్ కూడా {p1_name} సాగు చేస్తే చీడపీడల బెడద మరియు నేల అలసట పెరుగుతుంది; పంట మార్పిడి శ్రేయస్కరం.")
                else:
                    reasons.append(f"గత 2 సీజన్లలో నిరంతరం {p1_name} సాగు చేశారు. ఇప్పుడు {info['display_name']} వేయడం ద్వారా తెగుళ్లు, కలుపు చక్రం విరిగి భూసారం పుంజుకుంటుంది.")
            elif prev1 in legumes and crop_key in heavy_feeders:
                reasons.append(f"గతంలో {p1_name} సాగు వల్ల నేలలో సహజ నత్రజని పెరిగింది, ఇది {info['display_name']} అధిక దిగుబడికి అద్భుతంగా తోడ్పడుతుంది.")
            elif prev1 in cereals and crop_key in legumes.union({'groundnut'}):
                reasons.append(f"గత సీజన్లో {p1_name} తర్వాత ఇప్పుడు {info['display_name']} సాగు చేయడం వల్ల నేల భౌతిక స్థితి మెరుగై ఎరువుల ఖర్చు తగ్గుతుంది.")
            else:
                reasons.append(f"గతంలో ({p1_name}, {p2_name}) సాగు ఆధారంగా, ఈ పంట మార్పిడి నేల సారాన్ని కాపాడి గరిష్ట నికర లాభాన్ని అందిస్తుంది.")
        elif lang == 'hi':
            if soil_type in ['black_cotton', 'clay'] and crop_key in ['cotton', 'rice', 'chickpea']:
                reasons.append(f"आपकी मिट्टी {info['display_name']} की फसल के लिए आवश्यक नमी और पोषक तत्वों को संजोए रखती है।")
            elif soil_type in ['red_loam', 'sandy'] and crop_key in ['maize', 'groundnut', 'watermelon']:
                reasons.append(f"आपकी भुरभुरी मिट्टी में जल-जमाव नहीं होता, जो {info['display_name']} की जड़ों के लिए बहुत उत्तम है।")
            if water_source == 'abundant':
                reasons.append("प्रचुर पानी की सुविधा फसल के निरंतर विकास और बंपर उत्पादन में सहायक है।")
            elif water_source == 'rainfed':
                reasons.append("यह सूखा-सहनशील फसल कम पानी और केवल वर्षा के सहारे भी अच्छी उपज देती है।")
            else:
                reasons.append("मध्यम पानी की सुविधा इस फसल की जल-मांग के बिल्कुल अनुकूल है।")

            # Dynamic 2-Season Crop Rotation Reason
            if prev1 == prev2 and prev1 != 'none':
                if crop_key == prev1:
                    reasons.append(f"सावधानी: लगातार तीसरे मौसम में भी {p1_name} लगाने से कीटों का प्रकोप और मिट्टी की थकान बढ़ती है; फसल चक्र अपनाना बेहतर है।")
                else:
                    reasons.append(f"पिछले 2 मौसमों में लगातार {p1_name} के बाद, अब {info['display_name']} लगाने से कीट-रोग चक्र टूटेगा और मिट्टी की ताकत लौटेगी।")
            elif prev1 in legumes and crop_key in heavy_feeders:
                reasons.append(f"पिछली {p1_name} फसल से मिट्टी में भरपूर प्राकृतिक नाइट्रोजन जमा है, जो {info['display_name']} की बंपर पैदावार में बहुत सहायक है।")
            elif prev1 in cereals and crop_key in legumes.union({'groundnut'}):
                reasons.append(f"पिछली {p1_name} की फसल के बाद अब {info['display_name']} लगाना मिट्टी की सेहत सुधारता है और रासायनिक खाद का खर्च घटाता है।")
            else:
                reasons.append(f"खेत में पिछली फसलों ({p1_name}, {p2_name}) के बाद, यह वैज्ञानिक फसल चक्र भूमि की सेहत और अधिकतम शुद्ध मुनाफा सुनिश्चित करता है।")
        else: # en
            if soil_type in ['black_cotton', 'clay'] and crop_key in ['cotton', 'rice', 'chickpea']:
                reasons.append(f"Your soil provides optimal moisture and nutrient retention for {info['display_name']}.")
            elif soil_type in ['red_loam', 'sandy'] and crop_key in ['maize', 'groundnut', 'watermelon']:
                reasons.append(f"Your porous, well-aerated soil prevents root waterlogging, which {info['display_name']} prefers.")
            if water_source == 'abundant':
                reasons.append("Plentiful water supply supports uninterrupted growth and maximum yield.")
            elif water_source == 'rainfed':
                reasons.append("Highly drought-hardy root system thrives with rain showers and low moisture.")
            else:
                reasons.append("Moderate irrigation perfectly matches this crop's water requirements.")

            # Dynamic 2-Season Crop Rotation Reason
            if prev1 == prev2 and prev1 != 'none':
                if crop_key == prev1:
                    reasons.append(f"Notice: Continuously growing {p1_name} for a 3rd season increases pest risk and soil depletion; rotating to a break crop is strongly advised.")
                else:
                    reasons.append(f"After 2 consecutive seasons of {p1_name}, rotating to {info['display_name']} breaks persistent pest/weed cycles and revitalizes soil health.")
            elif prev1 in legumes and crop_key in heavy_feeders:
                reasons.append(f"Residual nitrogen fixed by previous {p1_name} provides rich natural fertility, boosting {info['display_name']} yields.")
            elif prev1 in cereals and crop_key in legumes.union({'groundnut'}):
                reasons.append(f"Rotating from {p1_name} to {info['display_name']} enriches organic matter and cuts fertilizer requirements.")
            else:
                reasons.append(f"Following your rotation history of ({p1_name}, {p2_name}), {info['display_name']} maintains soil health and maximizes net returns.")

        top_candidates.append({
            'crop_key': crop_key,
            'crop_name': info['display_name'],
            'confidence': normalized_conf,
            'variety': info['variety'],
            'duration': info['duration'],
            'investment_per_acre': info['investment_acre'],
            'expected_yield_per_acre': info['yield_acre'],
            'expected_profit_per_acre': info['profit_acre'],
            'sowing_window': info['sowing_window'],
            'seed_treatment': info['seed_treatment'],
            'farmer_reasons': reasons
        })

    primary = top_candidates[0]
    soil_desc_text = s_prof['desc'].get(lang, s_prof['desc']['en'])
    season_name_text = seas_prof['name'].get(lang, seas_prof['name']['en'])

    if lang == 'te':
        summary_text = f"మీ {soil_desc_text}, {season_name_text} మరియు గత 2 పంటల ({p1_name}, {p2_name}) రొటేషన్ ఆధారంగా, {primary['crop_name']} మీకు అత్యంత అనుకూలమైన మరియు గరిష్ట లాభదాయకమైన ఎంపిక."
    elif lang == 'hi':
        summary_text = f"आपकी {soil_desc_text}, {season_name_text} और पिछली 2 फसलों ({p1_name}, {p2_name}) के चक्र अनुसार, {primary['crop_name']} आपके लिए सबसे उपयुक्त और अधिकतम लाभदायक विकल्प है।"
    else:
        summary_text = f"Based on your {soil_desc_text}, {season_name_text}, and 2-season rotation history ({p1_name}, {p2_name}), {primary['crop_name']} is your highest yielding and most profitable choice."

    return {
        "status": "success",
        "primary_crop": primary['crop_name'],
        "primary_confidence": primary['confidence'],
        "top_recommendations": top_candidates,
        "farmer_summary": summary_text
    }


def predict_crop_yield(crop, state, season, area_ha, annual_rainfall_mm, fertilizer_kg_ha, pesticide_kg_ha):
    """
    Predicts yield in tonnes/hectare and total harvest production.
    """
    model = get_yield_model()
    if model is None:
        return {"error": "Crop Yield model not found. Run train_models.py first."}

    input_df = pd.DataFrame([{
        'Crop': crop,
        'State': state,
        'Season': season,
        'Area_ha': float(area_ha),
        'Annual_Rainfall_mm': float(annual_rainfall_mm),
        'Fertilizer_kg_ha': float(fertilizer_kg_ha),
        'Pesticide_kg_ha': float(pesticide_kg_ha)
    }])

    predicted_yield_ha = float(model.predict(input_df)[0])
    predicted_yield_ha = max(0.1, round(predicted_yield_ha, 2))
    
    total_production_tonnes = round(predicted_yield_ha * float(area_ha), 2)
    total_production_quintals = round(total_production_tonnes * 10.0, 1)

    return {
        "status": "success",
        "crop": crop,
        "state": state,
        "season": season,
        "area_hectares": area_ha,
        "area_acres": round(area_ha * 2.471, 2),
        "predicted_yield_tonnes_per_ha": predicted_yield_ha,
        "total_production_tonnes": total_production_tonnes,
        "total_production_quintals": total_production_quintals,
        "yield_category": "High Yield" if predicted_yield_ha > 3.5 else ("Moderate Yield" if predicted_yield_ha > 1.8 else "Low Yield")
    }

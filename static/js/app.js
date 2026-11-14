/**
 * AGRI-INTELLIGENCE: Smart Crop Management System
 * Pure Single-Language Localization Architecture
 * Strictly displays 100% in English (en), Telugu (te), or Hindi (hi) without any cross-language leakage.
 */

// ==========================================
// 1. COMPREHENSIVE I18N LOCALIZATION DICTIONARY
// ==========================================
const I18N = {
    en: {
        // Brand & Navigation
        brand_title: "Agri-Intelligence",
        brand_sub: "Smart Crop Management System",
        kisan_call_top: "Toll-Free Call: 9855655653",
        nav_home: "Home",
        nav_crop: "Crop Selector",
        nav_doctor: "Plant Doctor",
        nav_yield: "Yield & Income",
        ai_online: "AI Online",

        // Hero Section
        hero_greeting: "Namaste Farmer Friend!",
        hero_audio_pill: "Voice Guidance",
        hero_tap_pill: "Tap Icons Directly",
        hero_help_btn: "Listen to Instructions",

        // Weather Alert
        weather_title: "Live Weather (Today)",
        weather_cond: "Partly Cloudy • Good for field work",
        spray_alert_title: "Spray Warning",
        spray_rain_heading: "Do not spray pesticides today",
        spray_rain_desc: "Light rain forecasted this evening. Chemical wash-off risk is high.",

        // Dashboard Tools
        tools_heading: "What do you want to do today?",
        tool_what_to_grow: "What should I grow?",
        tool_what_to_grow_sub: "Find best crops for your soil",
        tool_plant_doctor: "Check Crop Disease",
        tool_plant_doctor_sub: "Scan leaf photo for instant cure",
        tool_yield_income: "Estimate Yield & Income",
        tool_yield_income_sub: "Calculate bags & market price",
        tool_kisan_call: "Kisan Call Center",
        tool_kisan_call_sub: "Speak with agriculture officer",

        // Crop Selector
        crop_heading: "Find the Best Crop for Your Land",
        crop_sub: "Tap your soil, season, and water availability below",
        sec_soil: "1. Select Your Soil Type",
        soil_black_title: "Black Soil",
        soil_black_sub: "Holds water well, rich clay",
        soil_red_title: "Red Soil",
        soil_red_sub: "Drains fast, loose soil",
        soil_alluvial_title: "Alluvial Soil",
        soil_alluvial_sub: "River bank, highly fertile",
        soil_clay_title: "Clay Heavy Soil",
        soil_clay_sub: "Water stays, sticky",
        soil_sandy_title: "Sandy Soil",
        soil_sandy_sub: "Very loose, low water hold",

        sec_season: "2. Current Season",
        seas_kharif_title: "Kharif Season",
        seas_kharif_sub: "Monsoon rains (June - October)",
        seas_rabi_title: "Rabi Season",
        seas_rabi_sub: "Winter season (November - March)",
        seas_zaid_title: "Summer / Zaid",
        seas_zaid_sub: "Dry summer (March - May)",

        sec_water: "3. Water Availability",
        water_abun_title: "Abundant Water",
        water_abun_sub: "Canal or 24hr borewell",
        water_mod_title: "Moderate Water",
        water_mod_sub: "Normal borewell / well",
        water_rain_title: "Rainfed Only",
        water_rain_sub: "No borewell, dependent on rain",

        sec_terrain: "4. Land Terrain",
        terr_up_title: "Upland / Well-Drained",
        terr_up_sub: "Water never stagnates",
        terr_low_title: "Lowland / Water-Retentive",
        terr_low_sub: "Water collects easily",

        sec_goal: "5. Farming Goal",
        goal_comm_title: "High Market Profit",
        goal_comm_sub: "Commercial cash crop",
        goal_food_title: "Food & Family Security",
        goal_food_sub: "Grains & stable home consumption",
        goal_fast_title: "Quick Cash",
        goal_fast_sub: "Short duration crop (60-70 days)",
        goal_orch_title: "Fruit Orchard",
        goal_orch_sub: "Long term plantation",

        // Previous Crops Rotation (Last 2 Seasons)
        sec_prev_crop_1: "7. Tap Previous Crop (Last Season):",
        sec_prev_crop_2: "8. Tap Crop Before That (2 Seasons Ago):",
        pcrop_rice_title: "Paddy / Rice",
        pcrop_rice_sub: "Last season",
        pcrop_cotton_title: "Cotton",
        pcrop_cotton_sub: "Last season",
        pcrop_maize_title: "Maize (Corn)",
        pcrop_maize_sub: "Last season",
        pcrop_pulses_title: "Pulses / Dal",
        pcrop_pulses_sub: "Gram, tur, moong",
        pcrop_groundnut_title: "Groundnut",
        pcrop_groundnut_sub: "Last season",
        pcrop_soybean_title: "Soybean",
        pcrop_soybean_sub: "Last season",
        pcrop_chilli_title: "Chilli / Veg",
        pcrop_chilli_sub: "Last season",
        pcrop_none_title: "Fallow / None",
        pcrop_none_sub: "Left uncultivated",

        // Soil Health Card
        lab_summary: "🔬 Have a Soil Health Card? (Optional - Tap to Open)",
        lab_desc: "If you had your soil tested in a lab, you can enter the values here for 100% precise recommendation.",
        lab_n: "Nitrogen (N) kg/ha",
        lab_p: "Phosphorus (P) kg/ha",
        lab_k: "Potash (K) kg/ha",
        lab_ph: "Soil pH Level",

        // Crop Results
        btn_find_crop: "Find My Best Crop",
        res_best_crop_tag: "TOP RECOMMENDED CROP",
        res_listen_btn: "Listen in Voice",
        res_top3_heading: "Top Recommended Crops for Your Farm",
        chart_comp_title: "Crop suitability score (0-100)",

        // Plant Doctor
        doc_title: "Plant Doctor: Crop Disease Scanner",
        doc_sub: "Take a photo of diseased leaf or choose from examples to get instant medicine",
        drop_title: "Tap here to upload a photo of the infected crop leaf",
        drop_sub: "Supports JPG, PNG photos taken from your phone",
        btn_camera: "Take Photo with Camera",
        btn_check_disease: "Check Plant Disease Now",
        doc_quick_title: "Or tap a sample diseased leaf below to test:",
        smp_rice_title: "Rice Leaf Blast",
        smp_rice_sub: "Brown spindle spots",
        smp_cotton_title: "Cotton Bacterial Blight",
        smp_cotton_sub: "Water-soaked leaf lesions",
        smp_chilli_title: "Chilli Leaf Curl",
        smp_chilli_sub: "Curling & yellowing",
        smp_banana_title: "Banana Sigatoka",
        smp_banana_sub: "Yellow streak spots",
        supported_crops_msg: "💡 Plant Doctor is trained on 8 crops: Rice, Cotton, Chilli, Banana, Maize, Groundnut, Blackgram, and Mango.",
        doc_guide_heading: "AI Plant Doctor Guidance",
        guide_supported_title: "8 Supported Crops:",
        guide_supported_desc: "Rice, Cotton, Chilli, Banana, Maize, Groundnut, Blackgram, Mango.",
        guide_lighting_title: "Clear Daylight Lighting:",
        guide_lighting_desc: "Take a clear close-up photo of the infected leaf, fruit rot, or stem under natural light.",
        guide_cure_title: "Dual Remedy Prescription:",
        guide_cure_desc: "Instant organic solutions plus chemical spray doses (per 15L water pump).",

        // Disease Results
        btn_listen_cure: "Listen to Cure in Voice",
        diag_lbl_crop: "Crop Identified:",
        diag_lbl_part: "Plant Part:",
        diag_lbl_pathogen: "Pathogen Type:",
        diag_remedy_chemical: "Chemical Medicines & Spray Dose",
        diag_spray_pump: "Recommended Spray Dose: Mix in 15-16 Liter Water Pump",
        diag_remedy_organic: "Organic & Biological Remedies",
        diag_prevention: "How to Prevent in Next Crop",

        // Yield & Income
        yield_heading: "Harvest Yield & Cash Income Estimator",
        yield_sub: "Calculate expected quintals and income based on Central Government MSP",
        yield_select_crop: "1. Select Crop",
        ycrop_rice: "Paddy / Rice",
        ycrop_cotton: "Cotton",
        ycrop_maize: "Maize",
        ycrop_pulses: "Pulses / Redgram",
        ycrop_groundnut: "Groundnut",
        ycrop_soybean: "Soybean",
        yield_land_area: "2. Land Area (Acres)",
        yield_acre_unit: "Acres",
        unit_single_acre: "Acre",
        unit_multi_acres: "Acres",
        yield_water_title: "3. Irrigation Condition",
        yield_water_good_title: "Assured Irrigation",
        yield_water_good_sub: "Full borewell / canal water",
        yield_water_rain_title: "Rainfed Condition",
        yield_water_rain_sub: "Dependent on rainfall only",
        btn_calc_yield: "Estimate Harvest & Income",
        yield_res_heading: "Estimated Harvest & Gross Cash Revenue:",
        yield_tot_prod_label: "Total Expected Harvest Output",
        yield_tot_prod_sub: "Total harvest from your land",
        yield_rev_label: "Govt Minimum Support Price (MSP) Revenue",
        yield_rev_sub: "Based on Central Government MSP",
        yield_live_market_title: "Live APMC Mandi Market Price:",
        yield_live_modal_label: "Today's Modal Market Price",
        yield_today_range_label: "Today's Mandi Range",
        yield_variety_label: "Traded Variety",
        yield_live_mkt_stat_label: "Live APMC Market Price",
        yield_live_income_label: "Cash Income (Live Market Price)",
        yield_selling_advice_title: "Agri-Expert Selling Advice & Market Timing:",
        btn_listen_advice: "Listen in Audio",
        mkt_per_quintal: "/ Quintal",
        mkt_daily_arrivals: "Daily Arrivals",

        // Camera Modal
        cam_modal_title: "Capture Crop Leaf",
        cam_snap: "Snap Photo",
        cam_cancel: "Cancel",

        // Dynamic Strings
        duration_label: "Duration",
        cost_label: "Cost / Acre",
        yield_label: "Yield / Acre",
        profit_label: "Net Profit",
        why_fits_label: "Why this fits your land:",
        seed_label: "Seed:",
        sow_label: "Sow:",
        treatment_label: "Treatment:",
        match_suffix: "Match",
        suitability_match: "Suitability Match",
        finding_crops: "Finding Best Crops...",
        diagnosing_leaf: "AI Diagnosing Leaf...",
        calculating_yield: "Estimating Harvest & Cash Income...",
        pump_dosage_notice: "Mix 30–35 grams or 25–30 ml per 15-16L spray pump",
        not_detected_title: "Leaf Not Recognized",
        not_detected_msg: "Plant Doctor is trained on 8 crops: Rice, Cotton, Chilli, Banana, Maize, Groundnut, Blackgram, and Mango. Please upload a clear photo of one of these crops.",
        severity_normal: "Normal Condition",
        severity_severe: "Severe Infestation",
        severity_moderate: "Moderate Risk",
        quintals_unit: "Quintals",
        tonnes_unit: "Tonnes",
        msp_desc_prefix: "Based on Central MSP ₹",
        msp_desc_mid: "/quintal for",
        msp_desc_suffix: "acres",
        // Navigation (5th tab)
        nav_advice: "Farm Advice",

        // Home tool cards
        tool_crop_title: "Choose My Crop",
        tool_crop_sub: "Best crop for your soil",
        tool_doctor_title: "Plant Doctor",
        tool_doctor_sub: "Photo disease check",
        tool_yield_title: "Harvest & Income",
        tool_yield_sub: "Yield and mandi value",
        tool_advice_title: "Ask Expert",
        tool_advice_sub: "Chat and fertilizer plan",
        helpline_title: "Kisan Call Centre (Toll-Free)",

        // Weather (now fetched from the API)
        weather_loading: "Loading weather...",
        weather_unavailable: "Weather could not be loaded. Check your connection.",
        weather_updated: "Updated",
        weather_rain_soon: "Rain likely in the next 3 days",
        weather_no_rain: "No significant rain expected this week",
        weather_spray_ok: "Spraying is safe today",
        weather_spray_hold: "Do not spray before rain",

        // Crop step labels
        sec_state: "6. Tap Your State:",
        state_tg_sub: "Warangal, Khammam",
        state_ap_sub: "Guntur, Kurnool",
        state_mh_sub: "Nashik, Nagpur",
        state_pb_sub: "Khanna, Ludhiana",
        state_mp_sub: "Indore, Bhopal",
        suitability_score: "Suitability score",
        chart_suitability_axis: "Suitability score (0-100)",

        // Plant Doctor
        sample_title: "Or Tap a Sample Photo:",
        sample_rice: "Rice Blast",
        sample_cotton: "Cotton Boll",
        sample_chilli: "Chilli Rot",
        sample_banana: "Banana Spot",
        sample_mosaic: "Yellow Mosaic",
        sample_blight: "Early Blight",
        sample_healthy: "Healthy Leaf",
        drop_limit: "Maximum 5 MB, JPG or PNG",
        preview_alt: "Selected plant photo",
        engine_label: "Analysed by",
        engine_local_note: "This is a local colour screen only, not a diagnosis. Please confirm with your agriculture officer.",

        // Yield disclosures
        yield_assumption: "Assumption: {state}, {season} season, 120 kg/ha fertilizer, 2.5 kg/ha pesticide",
        mkt_trend_up: "Rising",
        mkt_trend_down: "Falling",
        mkt_trend_flat: "Stable",
        mkt_advice_up: "HOLD / SELL IN STAGES: arrivals are steady and mill demand is firm. Stagger your sales over the next 10 days.",
        mkt_advice_down: "SELL SOON: surplus arrivals are reported. Sell within 3-5 days, or store in a registered (WDRA) warehouse for pledge finance.",
        mkt_advice_flat: "STABLE MARKET: prices are within a fair range. Sell in stages to match your cash needs.",
        mkt_reference_note: "Mandi rates shown here are reference values stored in this project's dataset, not a live APMC feed. Confirm the current rate at your mandi before selling.",
        mkt_live_note: "Market prices come from AGMARKNET through data.gov.in. Check the reported price date and confirm the rate at the market before selling.",
        mkt_reference_title: "Reference Mandi Market Price:",
        mkt_live_source: "Source: AGMARKNET (data.gov.in) • Price date:",
        mkt_reference_source: "Offline reference price • Live feed unavailable",
        mkt_view_map: "View market location on map",
        mkt_arrivals_not_reported: "Daily market arrivals not reported",
        btn_use_location: "Use my location",
        location_finding: "Finding markets near you...",
        location_enabled: "Location enabled. Markets are ranked by distance and price.",
        location_denied: "Location permission was denied. Showing state-level prices.",
        location_unsupported: "Location is not supported by this browser.",
        location_insecure: "Location requires a secure HTTPS connection.",
        location_failed: "Your location could not be determined.",
        nearby_markets_title: "Nearby markets and prices:",
        all_markets_title: "All reporting markets and prices:",
        reference_markets_title: "Reference market prices (not live):",
        market_list_summary: "{count} markets reporting • latest AGMARKNET prices",
        nearby_best: "Best nearby price: {market} at ₹{price} per quintal.",
        nearby_nearest: "Nearest market: {market}, {distance} km away (approx.).",
        nearby_distance: "{distance} km approx.",
        nearby_map: "Map",
        nearby_unavailable: "Market coordinates are unavailable, so distance cannot be calculated.",

        // Errors
        err_generic: "Something went wrong. Please try again.",
        err_network: "Cannot reach the server. Check your internet connection.",

        // Advice tab
        advice_chat_title: "Ask the AI Agronomist",
        advice_chat_sub: "Ask about pests, fertilizer, schemes or mandi timing.",
        chat_placeholder: "Type your farming question...",
        chat_send: "Send",
        chat_greeting: "Namaste! Ask me about pests, fertilizer dosage, irrigation or mandi prices.",
        chat_thinking: "Agronomist is typing...",
        resource_title: "Fertilizer Bags & Irrigation Planner",
        resource_sub: "Get exact urea, DAP and potash bag counts plus motor run-time for your field.",
        res_crop_label: "Crop",
        res_soil_label: "Soil type",
        res_stage_label: "Growth stage",
        res_area_label: "Area (acres)",
        res_n_label: "Soil N (kg/ha)",
        res_p_label: "Soil P (kg/ha)",
        res_k_label: "Soil K (kg/ha)",
        res_moisture_label: "Soil moisture (%)",
        res_temp_label: "Day temperature (C)",
        btn_plan_resources: "Plan My Fertilizer & Water",
        fert_result_title: "Fertilizer Bags to Buy",
        irrig_result_title: "Irrigation Plan",
        fert_schedule_title: "Split Application Schedule",
        plan_english_note: "The detailed schedule below is returned by the agronomy engine.",
        res_urea: "Urea (50 kg bags)",
        res_dap: "DAP (50 kg bags)",
        res_mop: "Potash / MOP (50 kg bags)",
        res_fym: "Farm yard manure (tonnes)",
        res_motor: "Motor run time",
        res_interval: "Next irrigation in",
        res_depth: "Water depth",
        res_days: "days",
        res_hours: "hours",
        res_mm: "mm",
        hero_audio_speech: "Namaste Farmer Friend! Welcome to Agri-Intelligence. Tap any icon to choose your soil, find the best crops for your land, or upload a leaf photo to diagnose crop diseases."
    },

    te: {
        // Brand & Navigation
        brand_title: "అగ్రి-ఇంటెలిజెన్స్",
        brand_sub: "స్మార్ట్ పంట నిర్వహణ వ్యవస్థ",
        kisan_call_top: "ఉచిత రైతు కాల్: 9855655653",
        nav_home: "హోమ్",
        nav_crop: "పంట ఎంపిక",
        nav_doctor: "మొక్కల వైద్యుడు",
        nav_yield: "దిగుబడి & ఆదాయం",
        ai_online: "AI సిద్ధంగా ఉంది",

        // Hero Section
        hero_greeting: "నమస్తే రైతు మిత్రమా!",
        hero_audio_pill: "వాయిస్ సాయం",
        hero_tap_pill: "ఐకాన్లపై నొక్కండి",
        hero_help_btn: "సలహాలు వినండి",

        // Weather Alert
        weather_title: "నేటి వాతావరణం",
        weather_cond: "పాక్షిక మేఘావృతం • పొలం పనులకు అనుకూలం",
        spray_alert_title: "స్ప్రే హెచ్చరిక",
        spray_rain_heading: "ఈరోజు పురుగుమందులు పిచికారీ చేయవద్దు",
        spray_rain_desc: "సాయంత్రం తేలికపాటి వర్షం కురిసే అవకాశం ఉంది. మందు కొట్టుకుపోయే ప్రమాదం ఉంది.",

        // Dashboard Tools
        tools_heading: "మీరు ఈరోజు ఏమి చేయాలనుకుంటున్నారు?",
        tool_what_to_grow: "ఏ పంట వేయాలి?",
        tool_what_to_grow_sub: "మీ నేలకు సరిపోయే పంటను ఎంచుకోండి",
        tool_plant_doctor: "పంట తెగుళ్ల గుర్తింపు",
        tool_plant_doctor_sub: "ఆకు ఫోటో తీసి నివారణ తెలుసుకోండి",
        tool_yield_income: "దిగుబడి & ఆదాయం అంచనా",
        tool_yield_income_sub: "బస్తాలు మరియు మార్కెట్ ధరను లెక్కించండి",
        tool_kisan_call: "కిసాన్ కాల్ సెంటర్",
        tool_kisan_call_sub: "వ్యవసాయ అధికారికి ఫోన్ చేసి మాట్లాడండి",

        // Crop Selector
        crop_heading: "మీ భూమికి అత్యంత లాభదాయకమైన పంటను ఎంచుకోండి",
        crop_sub: "కింది బొమ్మలను చూసి మీ నేల, కాలం, నీటి వసతిని ఎంచుకోండి",
        sec_soil: "1. మీ నేల రకాన్ని ఎంచుకోండి",
        soil_black_title: "నల్లరేగడి నేల",
        soil_black_sub: "తేమను బాగా పట్టి ఉంచుతుంది",
        soil_red_title: "ఎర్ర నేల",
        soil_red_sub: "త్వరగా నీరు ఇంకిపోయే తేలికపాటి నేల",
        soil_alluvial_title: "ఒండ్రు నేల",
        soil_alluvial_sub: "నది పరీవాహక ప్రాంతం, అధిక సారవంతమైనది",
        soil_clay_title: "బంకమట్టి నేల",
        soil_clay_sub: "నీరు నిలిచే నేల, బంకగా ఉంటుంది",
        soil_sandy_title: "ఇసుక నేల",
        soil_sandy_sub: "ఇసుక శాతం ఎక్కువ, తేమ నిలవదు",

        sec_season: "2. ప్రస్తుత సాగు కాలం",
        seas_kharif_title: "ఖరీఫ్ కాలం",
        seas_kharif_sub: "వర్షాకాలం (జూన్ - అక్టోబర్)",
        seas_rabi_title: "రబీ కాలం",
        seas_rabi_sub: "శీతాకాలం (నవంబర్ - మార్చి)",
        seas_zaid_title: "వేసవి కాలం",
        seas_zaid_sub: "ఎండ కాలం (మార్చి - మే)",

        sec_water: "3. నీటి వసతి సౌలభ్యం",
        water_abun_title: "మెండుగా నీరు",
        water_abun_sub: "కాలువ లేదా పుష్కలంగా బోర్ నీరు",
        water_mod_title: "ఓ మోస్తరు నీరు",
        water_mod_sub: "సాధారణ బావి లేదా బోర్ నీరు",
        water_rain_title: "కేవలం వర్షాధారం",
        water_rain_sub: "బోర్ లేదు, పూర్తిగా వానపై ఆధారపడి",

        sec_terrain: "4. భూమి ఎత్తుపల్లాలు",
        terr_up_title: "మెరక భూమి",
        terr_up_sub: "నీరు నిలబడకుండా పోయే భూమి",
        terr_low_title: "పల్లపు భూమి",
        terr_low_sub: "నీరు త్వరగా చేరే పల్లం",

        sec_goal: "5. మీ వ్యవసాయ లక్ష్యం",
        goal_comm_title: "అధిక మార్కెట్ లాభం",
        goal_comm_sub: "వాణిజ్య పంట, గరిష్ట రాబడి",
        goal_food_title: "ఆహార భద్రత",
        goal_food_sub: "ఇంటి అవసరాలకు ధాన్యం",
        goal_fast_title: "త్వరిత నగదు రాబడి",
        goal_fast_sub: "స్వల్పకాలిక పంట (60-70 రోజులు)",
        goal_orch_title: "పండ్ల తోట",
        goal_orch_sub: "దీర్ఘకాలిక అధిక ఆదాయం",

        // Previous Crops Rotation (Last 2 Seasons)
        sec_prev_crop_1: "7. అంతకుముందు వేసిన పంట (గత సీజన్):",
        sec_prev_crop_2: "8. అంతకంటే ముందు వేసిన పంట (2 సీజన్ల క్రితం):",
        pcrop_rice_title: "వరి / ధాన్యం",
        pcrop_rice_sub: "గత సీజన్ పంట",
        pcrop_cotton_title: "పత్తి",
        pcrop_cotton_sub: "పత్తి పంట",
        pcrop_maize_title: "మొక్కజొన్న",
        pcrop_maize_sub: "మొక్కజొన్న పంట",
        pcrop_pulses_title: "పప్పుధాన్యాలు",
        pcrop_pulses_sub: "కందులు, శనగలు, పెసలు",
        pcrop_groundnut_title: "వేరుశనగ",
        pcrop_groundnut_sub: "వేరుశనగ పంట",
        pcrop_soybean_title: "సోయాబీన్",
        pcrop_soybean_sub: "సోయాబీన్ పంట",
        pcrop_chilli_title: "మిరప / కూరగాయలు",
        pcrop_chilli_sub: "మిరప లేదా ఇతర కూరగాయలు",
        pcrop_none_title: "బీడు భూమి / ఏమీ లేదు",
        pcrop_none_sub: "సాగు చేయకుండా వదిలిన నేల",

        // Soil Health Card
        lab_summary: "🔬 భూసార పరీక్ష పత్రం ఉందా? (ఐచ్ఛికం - తెరవడానికి నొక్కండి)",
        lab_desc: "మీరు భూసార పరీక్ష చేయించి ఉంటే, ఆ వివరాలను ఇక్కడ నమోదు చేయవచ్చు.",
        lab_n: "నత్రజని (N) కిలో/హెక్టారు",
        lab_p: "భాస్వరం (P) కిలో/హెక్టారు",
        lab_k: "పొటాష్ (K) కిలో/హెక్టారు",
        lab_ph: "నేల pH విలువ",

        // Crop Results
        btn_find_crop: "నాకు సరైన పంట చూపించు",
        res_best_crop_tag: "అత్యుత్తమ సిఫార్సు పంట",
        res_listen_btn: "వాయిస్ సలహా వినండి",
        res_top3_heading: "మీ భూమికి ఉత్తమమైన టాప్ 3 పంటలు",
        chart_comp_title: "పంట అనుకూలత శాతం (%)",

        // Plant Doctor
        doc_title: "మొక్కల వైద్యుడు: పంట తెగుళ్ల గుర్తింపు",
        doc_sub: "తెగులు సోకిన ఆకు ఫోటో తీయండి లేదా కింది వాటి నుండి ఎంచుకోండి",
        drop_title: "రోగానికి గురైన పంట ఆకు ఫోటోను ఇక్కడ అప్‌లోడ్ చేయండి",
        drop_sub: "మొబైల్ కెమెరాతో తీసిన స్పష్టమైన ఫోటోలను అప్‌లోడ్ చేయవచ్చు",
        btn_camera: "కెమెరాతో ఫోటో తీయండి",
        btn_check_disease: "తెగులును వెంటనే గుర్తించండి",
        doc_quick_title: "లేదా పరీక్షించడానికి కింది నమూనా ఆకును నొక్కండి:",
        smp_rice_title: "వరి అగ్గితెగులు",
        smp_rice_sub: "గోధుమ రంగు మచ్చలు",
        smp_cotton_title: "పత్తి బ్యాక్టీరియా తెగులు",
        smp_cotton_sub: "ఆకులపై నల్లటి మచ్చలు",
        smp_chilli_title: "మిరప ఆకు ముడత",
        smp_chilli_sub: "ముడుచుకుపోయిన ఆకులు",
        smp_banana_title: "అరటి సిగటోకా తెగులు",
        smp_banana_sub: "పసుపు-గోధుమ చారలు",
        supported_crops_msg: "💡 ప్లాంట్ డాక్టర్ 8 పంటల వ్యాధులను గుర్తిస్తుంది: వరి, పత్తి, మిరప, అరటి, మొక్కజొన్న, వేరుశనగ, మినుములు, మామిడి.",
        doc_guide_heading: "AI ప్లాంట్ డాక్టర్ సూచనలు",
        guide_supported_title: "8 ప్రధాన పంటలు:",
        guide_supported_desc: "వరి, పత్తి, మిరప, అరటి, మొక్కజొన్న, వేరుశనగ, మినుములు, మామిడి.",
        guide_lighting_title: "స్పష్టమైన పగటి వెలుతురు:",
        guide_lighting_desc: "తెగులు సోకిన ఆకు లేదా కాయను స్పష్టమైన సహజ వెలుతురులో ఫోటో తీయండి.",
        guide_cure_title: "రెండు రకాల నివారణ మార్గాలు:",
        guide_cure_desc: "సేంద్రీయ పద్ధతులు మరియు 15-16 లీటర్ల పంపునకు ఖచ్చితమైన మందు మోతాదు.",

        // Disease Results
        btn_listen_cure: "మందు వివరాలు వాయిస్‌లో వినండి",
        diag_lbl_crop: "గుర్తించిన పంట:",
        diag_lbl_part: "మొక్క భాగం:",
        diag_lbl_pathogen: "రోగ కారకం:",
        diag_remedy_chemical: "రసాయన మందులు & పిచికారీ మోతాదు",
        diag_spray_pump: "సిఫార్సు చేసిన మోతాదు: 15-16 లీటర్ల స్ప్రే పంపునకు కలపండి",
        diag_remedy_organic: "సేంద్రీయ & జీవ నియంత్రణ పద్ధతులు",
        diag_prevention: "వచ్చే పంటలో రాకుండా తీసుకోవాల్సిన జాగ్రత్తలు",

        // Yield & Income
        yield_heading: "దిగుబడి & మార్కెట్ ఆదాయం అంచనా",
        yield_sub: "మీ విస్తీర్ణానికి వచ్చే దిగుబడి బస్తాలు మరియు కనీస మద్దతు ధర రాబడిని లెక్కించండి",
        yield_select_crop: "1. పంటను ఎంచుకోండి",
        ycrop_rice: "వరి",
        ycrop_cotton: "పత్తి",
        ycrop_maize: "మొక్కజొన్న",
        ycrop_pulses: "కందులు / పప్పుధాన్యాలు",
        ycrop_groundnut: "వేరుశనగ",
        ycrop_soybean: "సోయాబీన్",
        yield_land_area: "2. సాగు విస్తీర్ణం (ఎకరాలు)",
        yield_acre_unit: "ఎకరాలు",
        unit_single_acre: "ఎకరం",
        unit_multi_acres: "ఎకరాలు",
        yield_water_title: "3. నీటి లభ్యత స్థితి",
        yield_water_good_title: "పుష్కలమైన నీరు",
        yield_water_good_sub: "పూర్తి నీటి వసతి ఉంది",
        yield_water_rain_title: "వర్షాధార పరిస్థితి",
        yield_water_rain_sub: "కేవలం వర్షాలపై ఆధారపడి",
        btn_calc_yield: "దిగుబడి & ఆదాయం లెక్కించండి",
        yield_res_heading: "అంచనా వేసిన దిగుబడి & స్థూల నగదు ఆదాయం:",
        yield_tot_prod_label: "అంచనా మొత్తం దిగుబడి",
        yield_tot_prod_sub: "మీ సాగు విస్తీర్ణానికి వచ్చే మొత్తం పంట",
        yield_rev_label: "కనీస మద్దతు ధర (MSP) రాబడి",
        yield_rev_sub: "కేంద్ర ప్రభుత్వ కనీస మద్దతు ధర ప్రకారం",
        yield_live_market_title: "తాజా APMC మార్కెట్ ధర (మండి రేటు):",
        yield_live_modal_label: "నేటి మార్కెట్ మోడల్ ధర",
        yield_today_range_label: "నేటి మార్కెట్ శ్రేణి",
        yield_variety_label: "ట్రేడెడ్ రకం / వెరైటీ",
        yield_live_mkt_stat_label: "తాజా మార్కెట్ ధర",
        yield_live_income_label: "నగదు రాబడి (మార్కెట్ ధర ప్రకారం)",
        yield_selling_advice_title: "వ్యవసాయ నిపుణుల అమ్మకపు సలహా & సమయం:",
        btn_listen_advice: "వాయిస్ వినండి",
        mkt_per_quintal: "/ క్వింటాలు",
        mkt_daily_arrivals: "రోజువారీ రాబడులు",

        // Camera Modal
        cam_modal_title: "ఆకు ఫోటో తీయండి",
        cam_snap: "ఫోటో తీయి",
        cam_cancel: "రద్దు చేయి",

        // Dynamic Strings
        duration_label: "కాలపరిమితి",
        cost_label: "పెట్టుబడి / ఎకరం",
        yield_label: "దిగుబడి / ఎకరం",
        profit_label: "నికర లాభం",
        why_fits_label: "ఈ పంట మీ భూమికి ఎందుకు సరైనది:",
        seed_label: "విత్తనం:",
        sow_label: "విత్తే సమయం:",
        treatment_label: "విత్తన శుద్ధి:",
        match_suffix: "అనుకూలం",
        suitability_match: "భూమికి అనుకూలం",
        finding_crops: "ఉత్తమ పంటలను కనుగొంటోంది...",
        diagnosing_leaf: "తెగులును విశ్లేషిస్తోంది...",
        calculating_yield: "దిగుబడి & ఆదాయాన్ని లెక్కిస్తోంది...",
        pump_dosage_notice: "1 స్ప్రే పంపునకు (15-16 లీటర్లు) 30–35 గ్రాములు లేదా 25–30 ml కలపండి",
        not_detected_title: "ఆకు గుర్తించబడలేదు",
        not_detected_msg: "ప్లాంట్ డాక్టర్ 8 పంటల (వరి, పత్తి, మిరప, అరటి, మొక్కజొన్న, వేరుశనగ, మినుములు, మామిడి) తెగుళ్లను గుర్తించడానికి శిక్షణ పొందింది. దయచేసి వీటిలో ఒకదాని స్పష్టమైన ఫోటోను అప్‌లోడ్ చేయండి.",
        severity_normal: "సాధారణం",
        severity_severe: "తీవ్రమైన తెగులు",
        severity_moderate: "మధ్యస్థ తీవ్రత",
        quintals_unit: "క్వింటాళ్లు",
        tonnes_unit: "టన్నులు",
        msp_desc_prefix: "",
        msp_desc_mid: "ఎకరాలకు కేంద్ర ప్రభుత్వ మద్దతు ధర క్వింటాలుకు ₹",
        msp_desc_suffix: "ప్రకారం",
        // Navigation (5th tab)
        nav_advice: "వ్యవసాయ సలహాలు",

        // Home tool cards
        tool_crop_title: "పంట ఎంపిక",
        tool_crop_sub: "మీ నేలకు ఉత్తమ పంట",
        tool_doctor_title: "ప్లాంట్ డాక్టర్",
        tool_doctor_sub: "ఫోటోతో తెగులు పరీక్ష",
        tool_yield_title: "దిగుబడి & ఆదాయం",
        tool_yield_sub: "దిగుబడి మరియు మార్కెట్ విలువ",
        tool_advice_title: "నిపుణుడిని అడగండి",
        tool_advice_sub: "చాట్ మరియు ఎరువుల ప్రణాళిక",
        helpline_title: "కిసాన్ కాల్ సెంటర్ (టోల్-ఫ్రీ)",

        // Weather
        weather_loading: "వాతావరణం లోడ్ అవుతోంది...",
        weather_unavailable: "వాతావరణం లోడ్ కాలేదు. ఇంటర్నెట్ కనెక్షన్ చూడండి.",
        weather_updated: "నవీకరణ",
        weather_rain_soon: "వచ్చే 3 రోజుల్లో వర్షం అవకాశం",
        weather_no_rain: "ఈ వారం పెద్దగా వర్షం లేదు",
        weather_spray_ok: "ఈరోజు పిచికారీ చేయవచ్చు",
        weather_spray_hold: "వర్షానికి ముందు పిచికారీ చేయవద్దు",

        // Crop step labels
        sec_state: "6. మీ రాష్ట్రాన్ని ఎంచుకోండి:",
        state_tg_sub: "వరంగల్, ఖమ్మం",
        state_ap_sub: "గుంటూరు, కర్నూలు",
        state_mh_sub: "నాసిక్, నాగపూర్",
        state_pb_sub: "ఖన్నా, లుధియానా",
        state_mp_sub: "ఇండోర్, భోపాల్",
        suitability_score: "అనుకూలత స్కోరు",
        chart_suitability_axis: "అనుకూలత స్కోరు (0-100)",

        // Plant Doctor
        sample_title: "లేదా నమూనా ఫోటోను ఎంచుకోండి:",
        sample_rice: "వరి బ్లాస్ట్",
        sample_cotton: "పత్తి కాయ",
        sample_chilli: "మిరప కుళ్ళు",
        sample_banana: "అరటి మచ్చ",
        sample_mosaic: "పసుపు మొజాయిక్",
        sample_blight: "ఎర్లీ బ్లైట్",
        sample_healthy: "ఆరోగ్యకరమైన ఆకు",
        drop_limit: "గరిష్ఠం 5 MB, JPG లేదా PNG",
        preview_alt: "ఎంచుకున్న మొక్క ఫోటో",
        engine_label: "విశ్లేషించినది",
        engine_local_note: "ఇది స్థానిక రంగు పరీక్ష మాత్రమే, నిర్ధారణ కాదు. వ్యవసాయ అధికారిని సంప్రదించండి.",

        // Yield disclosures
        yield_assumption: "ఊహ: {state}, {season} కాలం, హెక్టారుకు 120 కిలోల ఎరువు, 2.5 కిలోల పురుగుమందు",
        mkt_trend_up: "పెరుగుతోంది",
        mkt_trend_down: "తగ్గుతోంది",
        mkt_trend_flat: "స్థిరంగా",
        mkt_advice_up: "ఆగి దశలవారీగా అమ్మండి: రాబడులు స్థిరంగా ఉన్నాయి, మిల్లుల డిమాండ్ బలంగా ఉంది. రాబోయే 10 రోజుల్లో దశలవారీగా అమ్మండి.",
        mkt_advice_down: "త్వరగా అమ్మండి: ఎక్కువ రాబడులు వస్తున్నాయి. 3-5 రోజుల్లో అమ్మండి, లేదా నమోదైన (WDRA) గోదాములో నిల్వ చేసి రుణం తీసుకోండి.",
        mkt_advice_flat: "స్థిరమైన మార్కెట్: ధరలు సరైన పరిధిలో ఉన్నాయి. మీ నగదు అవసరానికి తగ్గట్టు దశలవారీగా అమ్మండి.",
        mkt_reference_note: "ఇక్కడ చూపిన మార్కెట్ ధరలు ఈ ప్రాజెక్ట్ డేటాసెట్‌లో నిల్వ ఉన్న సూచన విలువలు మాత్రమే, లైవ్ APMC ఫీడ్ కాదు. అమ్మే ముందు మీ మార్కెట్‌లో నిజమైన ధర నిర్ధారించుకోండి.",
        mkt_live_note: "మార్కెట్ ధరలు data.gov.in ద్వారా AGMARKNET నుండి పొందబడతాయి. అమ్మే ముందు ధర నమోదైన తేదీని చూసి మార్కెట్‌లో నిర్ధారించుకోండి.",
        mkt_reference_title: "సూచన మార్కెట్ ధర:",
        mkt_live_source: "మూలం: AGMARKNET (data.gov.in) • ధర తేదీ:",
        mkt_reference_source: "ఆఫ్‌లైన్ సూచన ధర • లైవ్ ఫీడ్ అందుబాటులో లేదు",
        mkt_view_map: "మార్కెట్ స్థానాన్ని మ్యాప్‌లో చూడండి",
        mkt_arrivals_not_reported: "రోజువారీ మార్కెట్ రాబడులు నమోదు కాలేదు",
        btn_use_location: "నా స్థానాన్ని ఉపయోగించండి",
        location_finding: "మీ సమీప మార్కెట్లను వెతుకుతోంది...",
        location_enabled: "స్థానం అనుమతించబడింది. దూరం మరియు ధర ఆధారంగా మార్కెట్లు చూపబడుతున్నాయి.",
        location_denied: "స్థాన అనుమతి నిరాకరించబడింది. రాష్ట్ర స్థాయి ధరలు చూపబడుతున్నాయి.",
        location_unsupported: "ఈ బ్రౌజర్ స్థాన సేవను మద్దతు చేయదు.",
        location_insecure: "స్థానాన్ని ఉపయోగించడానికి సురక్షిత HTTPS కనెక్షన్ అవసరం.",
        location_failed: "మీ స్థానాన్ని గుర్తించలేకపోయాము.",
        nearby_markets_title: "సమీప మార్కెట్లు మరియు ధరలు:",
        all_markets_title: "నివేదించిన మార్కెట్లు మరియు ధరలు:",
        reference_markets_title: "సూచన మార్కెట్ ధరలు (లైవ్ కావు):",
        market_list_summary: "{count} మార్కెట్లు నివేదించాయి • తాజా AGMARKNET ధరలు",
        nearby_best: "సమీపంలో అత్యధిక ధర: {market} వద్ద క్వింటాలుకు ₹{price}.",
        nearby_nearest: "అత్యంత సమీప మార్కెట్: {market}, సుమారు {distance} కి.మీ దూరంలో.",
        nearby_distance: "సుమారు {distance} కి.మీ",
        nearby_map: "మ్యాప్",
        nearby_unavailable: "మార్కెట్ కోఆర్డినేట్లు లేకపోవడంతో దూరాన్ని లెక్కించలేము.",

        // Errors
        err_generic: "ఏదో లోపం జరిగింది. మళ్లీ ప్రయత్నించండి.",
        err_network: "సర్వర్‌కు కనెక్ట్ కాలేదు. ఇంటర్నెట్ కనెక్షన్ చూడండి.",

        // Advice tab
        advice_chat_title: "AI వ్యవసాయ నిపుణుడిని అడగండి",
        advice_chat_sub: "తెగుళ్లు, ఎరువులు, ప్రభుత్వ పథకాలు, మార్కెట్ గురించి అడగండి.",
        chat_placeholder: "మీ వ్యవసాయ ప్రశ్న రాయండి...",
        chat_send: "పంపండి",
        chat_greeting: "నమస్తే! తెగుళ్లు, ఎరువుల మోతాదు, నీటి యాజమాన్యం లేదా మార్కెట్ ధరల గురించి అడగండి.",
        chat_thinking: "నిపుణుడు సమాధానం రాస్తున్నారు...",
        resource_title: "ఎరువుల బస్తాలు & నీటి ప్రణాళిక",
        resource_sub: "మీ పొలానికి యూరియా, DAP, పొటాష్ బస్తాల సంఖ్య మరియు మోటారు నడిపే సమయం తెలుసుకోండి.",
        res_crop_label: "పంట",
        res_soil_label: "నేల రకం",
        res_stage_label: "పంట దశ",
        res_area_label: "విస్తీర్ణం (ఎకరాలు)",
        res_n_label: "నేల నత్రజని (కిలో/హె)",
        res_p_label: "నేల భాస్వరం (కిలో/హె)",
        res_k_label: "నేల పొటాష్ (కిలో/హె)",
        res_moisture_label: "నేల తేమ (%)",
        res_temp_label: "పగటి ఉష్ణోగ్రత (C)",
        btn_plan_resources: "ఎరువులు & నీటి ప్రణాళిక చూడండి",
        fert_result_title: "కొనాల్సిన ఎరువుల బస్తాలు",
        irrig_result_title: "నీటి యాజమాన్య ప్రణాళిక",
        fert_schedule_title: "దఫాల వారీగా వేసే షెడ్యూల్",
        plan_english_note: "వివరణాత్మక షెడ్యూల్ వ్యవసాయ ఇంజిన్ ఇచ్చిన విధంగా చూపబడుతుంది.",
        res_urea: "యూరియా (50 కిలో బస్తాలు)",
        res_dap: "DAP (50 కిలో బస్తాలు)",
        res_mop: "పొటాష్ / MOP (50 కిలో బస్తాలు)",
        res_fym: "పశువుల ఎరువు (టన్నులు)",
        res_motor: "మోటారు నడిపే సమయం",
        res_interval: "తదుపరి నీటి తడి",
        res_depth: "నీటి లోతు",
        res_days: "రోజులు",
        res_hours: "గంటలు",
        res_mm: "మి.మీ",
        hero_audio_speech: "నమస్తే రైతు మిత్రమా! అగ్రి-ఇంటెలిజెన్స్ యాప్‌కు స్వాగతం. మీ నేల రకాన్ని ఎంచుకుని ఉత్తమ పంటలను తెలుసుకోండి, లేదా ఆకు ఫోటో తీసి తెగుళ్ల నివారణ మందులను తెలుసుకోండి."
    },

    hi: {
        // Brand & Navigation
        brand_title: "एग्री-इंटेलिजेंस",
        brand_sub: "स्मार्ट फसल प्रबंधन प्रणाली",
        kisan_call_top: "टोल-फ्री किसान कॉल: 9855655653",
        nav_home: "होम",
        nav_crop: "फसल चयन",
        nav_doctor: "पौधा डॉक्टर",
        nav_yield: "उपज और आय",
        ai_online: "AI ऑनलाइन",

        // Hero Section
        hero_greeting: "नमस्ते किसान भाई!",
        hero_audio_pill: "आवाज सहायता",
        hero_tap_pill: "सीधे आइकन छुएं",
        hero_help_btn: "निर्देश सुनें",

        // Weather Alert
        weather_title: "आज का मौसम",
        weather_cond: "आंशिक बादल • खेत के काम के लिए अनुकूल",
        spray_alert_title: "छिड़काव चेतावनी",
        spray_rain_heading: "आज कीटनाशक का छिड़काव न करें",
        spray_rain_desc: "शाम को हल्की बारिश की संभावना है। दवा धुलने का खतरा अधिक है।",

        // Dashboard Tools
        tools_heading: "आज आप क्या करना चाहते हैं?",
        tool_what_to_grow: "कौन सी फसल लगाएं?",
        tool_what_to_grow_sub: "अपनी मिट्टी के लिए सबसे अच्छी फसल चुनें",
        tool_plant_doctor: "फसल रोग की पहचान",
        tool_plant_doctor_sub: "पत्ते की फोटो लेकर तुरंत इलाज जानें",
        tool_yield_income: "उपज और आय का अनुमान",
        tool_yield_income_sub: "बोरी और बाजार मूल्य की गणना करें",
        tool_kisan_call: "किसान कॉल सेंटर",
        tool_kisan_call_sub: "कृषि अधिकारी से सीधे बात करें",

        // Crop Selector
        crop_heading: "अपनी जमीन के लिए सबसे लाभदायक फसल चुनें",
        crop_sub: "नीचे दिए गए आइकन देखकर अपनी मिट्टी, मौसम और पानी की सुविधा चुनें",
        sec_soil: "1. अपनी मिट्टी का प्रकार चुनें",
        soil_black_title: "काली मिट्टी",
        soil_black_sub: "नमी सोखने वाली, उपजाऊ चिकनी मिट्टी",
        soil_red_title: "लाल मिट्टी",
        soil_red_sub: "जल्दी पानी सोखने वाली, हल्की मिट्टी",
        soil_alluvial_title: "जलोढ़ दोमट मिट्टी",
        soil_alluvial_sub: "नदी किनारे की अत्यंत उपजाऊ मिट्टी",
        soil_clay_title: "चिकनी भारी मिट्टी",
        soil_clay_sub: "पानी जमा रहने वाली, चिपचिपी मिट्टी",
        soil_sandy_title: "रेतीली बलुई मिट्टी",
        soil_sandy_sub: "रेत अधिक, कम नमी टिकने वाली",

        sec_season: "2. वर्तमान फसल का मौसम",
        seas_kharif_title: "खरीफ मौसम",
        seas_kharif_sub: "मानसून बारिश (जून - अक्टूबर)",
        seas_rabi_title: "रबी मौसम",
        seas_rabi_sub: "सर्दियों का मौसम (नवंबर - मार्च)",
        seas_zaid_title: "जायद / गर्मी का मौसम",
        seas_zaid_sub: "तेज धूप और गर्मी (मार्च - मई)",

        sec_water: "3. पानी की उपलब्धता",
        water_abun_title: "भरपूर पानी",
        water_abun_sub: "नहर या 24 घंटे बोरवेल सुविधा",
        water_mod_title: "मध्यम पानी",
        water_mod_sub: "सामान्य कुआं या बोरवेल पानी",
        water_rain_title: "केवल वर्षा आधारित",
        water_rain_sub: "बोरवेल नहीं, पूरी तरह बारिश पर निर्भर",

        sec_terrain: "4. जमीन की ढलान और बनावट",
        terr_up_title: "ऊंची ढलान वाली जमीन",
        terr_up_sub: "पानी कभी नहीं ठहरता, निकासी अच्छी",
        terr_low_title: "निचली गहरी जमीन",
        terr_low_sub: "पानी आसानी से जमा रहने वाली",

        sec_goal: "5. आपका मुख्य लक्ष्य",
        goal_comm_title: "अधिक बाजार लाभ",
        goal_comm_sub: "व्यावसायिक नकदी फसल, अधिकतम आय",
        goal_food_title: "खाद्य एवं परिवार सुरक्षा",
        goal_food_sub: "घर के लिए अनाज और सुरक्षित उपज",
        goal_fast_title: "शीघ्र नकद आमदनी",
        goal_fast_sub: "कम अवधि की फसल (60-70 दिन)",
        goal_orch_title: "फलों का बगीचा",
        goal_orch_sub: "दीर्घकालिक टिकाऊ बागवानी",

        // Previous Crops Rotation (Last 2 Seasons)
        sec_prev_crop_1: "7. पिछली फसल चुनें (पिछला मौसम):",
        sec_prev_crop_2: "8. उससे पहले की फसल चुनें (2 मौसम पहले):",
        pcrop_rice_title: "धान / चावल",
        pcrop_rice_sub: "पिछले मौसम की फसल",
        pcrop_cotton_title: "कपास",
        pcrop_cotton_sub: "कपास की खेती",
        pcrop_maize_title: "मक्का",
        pcrop_maize_sub: "मक्का की फसल",
        pcrop_pulses_title: "दलहन / दालें",
        pcrop_pulses_sub: "चना, अरहर, मूंग",
        pcrop_groundnut_title: "मूंगफली",
        pcrop_groundnut_sub: "मूंगफली की खेती",
        pcrop_soybean_title: "सोयाबीन",
        pcrop_soybean_sub: "सोयाबीन की फसल",
        pcrop_chilli_title: "मिर्च / सब्जियां",
        pcrop_chilli_sub: "मिर्च या अन्य सब्जियां",
        pcrop_none_title: "परती / कोई फसल नहीं",
        pcrop_none_sub: "खेत खाली छोड़ा गया था",

        // Soil Health Card
        lab_summary: "🔬 क्या आपके पास मृदा स्वास्थ्य कार्ड है? (वैकल्पिक - खोलने के लिए टैप करें)",
        lab_desc: "यदि आपने मिट्टी की जांच कराई है, तो सटीक परिणाम के लिए यहां मान दर्ज कर सकते हैं।",
        lab_n: "नाइट्रोजन (N) किग्रा/हेक्टेयर",
        lab_p: "फास्फोरस (P) किग्रा/हेक्टेयर",
        lab_k: "पोटाश (K) किग्रा/हेक्टेयर",
        lab_ph: "मिट्टी का pH स्तर",

        // Crop Results
        btn_find_crop: "मेरे लिए सर्वश्रेष्ठ फसल खोजें",
        res_best_crop_tag: "शीर्ष अनुशंसित फसल",
        res_listen_btn: "आवाज में सलाह सुनें",
        res_top3_heading: "आपके खेत के लिए शीर्ष 3 अनुशंसित फसलें",
        chart_comp_title: "फसल उपयुक्तता प्रतिशत (%)",

        // Plant Doctor
        doc_title: "पौधा डॉक्टर: फसल रोग स्कैनर",
        doc_sub: "रोगग्रस्त पत्ते की फोटो लें या नीचे दिए उदाहरणों में से चुनें",
        drop_title: "संक्रमित पत्ते की फोटो अपलोड करने के लिए यहां टैप करें",
        drop_sub: "मोबाइल से ली गई स्पष्ट फोटो अपलोड कर सकते हैं",
        btn_camera: "कैमरे से सीधे फोटो लें",
        btn_check_disease: "रोग की तुरंत पहचान करें",
        doc_quick_title: "या जांचने के लिए नीचे दिए नमूना पत्ते पर टैप करें:",
        smp_rice_title: "धान का झुलसा रोग",
        smp_rice_sub: "भूरे रंग के धब्बे",
        smp_cotton_title: "कपास का जीवाणु रोग",
        smp_cotton_sub: "पत्तियों पर गहरे काले धब्बे",
        smp_chilli_title: "मिर्च का पर्ण कुंचन रोग",
        smp_chilli_sub: "पत्तियां मुड़ना और पीलापन",
        smp_banana_title: "केले का सिगाटोका रोग",
        smp_banana_sub: "पत्तियों पर पीली-काली धारियां",
        supported_crops_msg: "💡 पौधा डॉक्टर 8 फसलों के रोगों की पहचान करता है: धान, कपास, मिर्च, केला, मक्का, मूंगफली, उड़द और आम।",
        doc_guide_heading: "AI पौधा डॉक्टर मार्गदर्शन",
        guide_supported_title: "8 समर्थित फसलें:",
        guide_supported_desc: "धान, कपास, मिर्च, केला, मक्का, मूंगफली, उड़द और आम।",
        guide_lighting_title: "स्पष्ट प्राकृतिक रोशनी:",
        guide_lighting_desc: "संक्रमित पत्ते या फल की प्राकृतिक रोशनी में साफ पास से फोटो लें।",
        guide_cure_title: "दोहरे उपचार के उपाय:",
        guide_cure_desc: "जैविक उपचार और 15-16 लीटर स्प्रे पंप के लिए सही रासायनिक मात्रा।",

        // Disease Results
        btn_listen_cure: "इलाज की जानकारी आवाज में सुनें",
        diag_lbl_crop: "पहचानी गई फसल:",
        diag_lbl_part: "पौधे का भाग:",
        diag_lbl_pathogen: "रोग का प्रकार:",
        diag_remedy_chemical: "रासायनिक दवाएं और छिड़काव की सही मात्रा",
        diag_spray_pump: "अनुशंसित मात्रा: 15-16 लीटर पानी के पंप में मिलाकर छिड़कें",
        diag_remedy_organic: "जैविक और प्राकृतिक रोकथाम उपाय",
        diag_prevention: "अगली फसल में बचाव के उपाय",

        // Yield & Income
        yield_heading: "फसल उपज और अनुमानित आय कैलकुलेटर",
        yield_sub: "अपने खेत का रकबा चुनकर कुल पैदावार और न्यूनतम समर्थन मूल्य (MSP) आय जानें",
        yield_select_crop: "1. फसल चुनें",
        ycrop_rice: "धान / चावल",
        ycrop_cotton: "कपास",
        ycrop_maize: "मक्का",
        ycrop_pulses: "अरहर / दालें",
        ycrop_groundnut: "मूंगफली",
        ycrop_soybean: "सोयाबीन",
        yield_land_area: "2. जमीन का रकबा (एकड़)",
        yield_acre_unit: "एकड़",
        unit_single_acre: "एकड़",
        unit_multi_acres: "एकड़",
        yield_water_title: "3. सिंचाई की स्थिति",
        yield_water_good_title: "सुनिश्चित सिंचाई",
        yield_water_good_sub: "नहर या बोरवेल से पूरी सिंचाई",
        yield_water_rain_title: "बारिश पर निर्भर",
        yield_water_rain_sub: "केवल मौसमी बारिश पर निर्भर",
        btn_calc_yield: "उपज और आय की गणना करें",
        yield_res_heading: "अनुमानित कुल पैदावार और सकल नकद लाभ:",
        yield_tot_prod_label: "कुल अनुमानित पैदावार",
        yield_tot_prod_sub: "आपके कुल रकबे से होने वाली पैदावार",
        yield_rev_label: "समर्थन मूल्य (MSP) सुरक्षित आय",
        yield_rev_sub: "केंद्र सरकार के न्यूनतम समर्थन मूल्य (MSP) पर आधारित",
        yield_live_market_title: "आज का लाइव APMC मंडी भाव:",
        yield_live_modal_label: "आज का मॉडल मंडी भाव",
        yield_today_range_label: "आज का मंडी भाव दायरा",
        yield_variety_label: "व्यापारिक किस्म",
        yield_live_mkt_stat_label: "लाइव मंडी भाव",
        yield_live_income_label: "कुल नकद आय (लाइव मंडी भाव पर)",
        yield_selling_advice_title: "कृषि विशेषज्ञ की बिक्री सलाह और सही समय:",
        btn_listen_advice: "आवाज में सुनें",
        mkt_per_quintal: "/ क्विंटल",
        mkt_daily_arrivals: "दैनिक आवक",

        // Camera Modal
        cam_modal_title: "पत्ते की फोटो लें",
        cam_snap: "फोटो खींचें",
        cam_cancel: "रद्द करें",

        // Dynamic Strings
        duration_label: "अवधि",
        cost_label: "लागत / एकड़",
        yield_label: "पैदावार / एकड़",
        profit_label: "शुद्ध लाभ",
        why_fits_label: "यह फसल आपकी जमीन के लिए क्यों सही है:",
        seed_label: "बीज:",
        sow_label: "बुवाई का समय:",
        treatment_label: "बीज उपचार:",
        match_suffix: "उपयुक्त",
        suitability_match: "जमीन के अनुकूल",
        finding_crops: "सर्वश्रेष्ठ फसलें खोजी जा रही हैं...",
        diagnosing_leaf: "रोग की पहचान की जा रही है...",
        calculating_yield: "उपज और आय की गणना हो रही है...",
        pump_dosage_notice: "1 स्प्रे पंप (15-16 लीटर पानी) में 30–35 ग्राम या 25–30 मिलीलीटर मिलाएं",
        not_detected_title: "पत्ती की पहचान नहीं हुई",
        not_detected_msg: "पौधा डॉक्टर 8 फसलों (धान, कपास, मिर्च, केला, मक्का, मूंगफली, उड़द और आम) के रोगों की पहचान के लिए प्रशिक्षित है। कृपया स्पष्ट फोटो अपलोड करें।",
        severity_normal: "सामान्य स्थिति",
        severity_severe: "गंभीर प्रकोप",
        severity_moderate: "मध्यम जोखिम",
        quintals_unit: "क्विंटल",
        tonnes_unit: "टन",
        msp_desc_prefix: "",
        msp_desc_mid: "एकड़ के लिए केंद्र सरकार के समर्थन मूल्य ₹",
        msp_desc_suffix: "के आधार पर",
        // Navigation (5th tab)
        nav_advice: "खेती सलाह",

        // Home tool cards
        tool_crop_title: "फसल चुनें",
        tool_crop_sub: "आपकी मिट्टी के लिए सबसे अच्छी फसल",
        tool_doctor_title: "पौधा डॉक्टर",
        tool_doctor_sub: "फोटो से रोग जांच",
        tool_yield_title: "उपज और आय",
        tool_yield_sub: "उपज और मंडी मूल्य",
        tool_advice_title: "विशेषज्ञ से पूछें",
        tool_advice_sub: "चैट और खाद योजना",
        helpline_title: "किसान कॉल सेंटर (टोल-फ्री)",

        // Weather
        weather_loading: "मौसम लोड हो रहा है...",
        weather_unavailable: "मौसम लोड नहीं हुआ। इंटरनेट कनेक्शन जांचें।",
        weather_updated: "अद्यतन",
        weather_rain_soon: "अगले 3 दिनों में बारिश की संभावना",
        weather_no_rain: "इस सप्ताह बारिश की संभावना कम",
        weather_spray_ok: "आज छिड़काव सुरक्षित है",
        weather_spray_hold: "बारिश से पहले छिड़काव न करें",

        // Crop step labels
        sec_state: "6. अपना राज्य चुनें:",
        state_tg_sub: "वरंगल, खम्मम",
        state_ap_sub: "गुंटूर, कुरनूल",
        state_mh_sub: "नासिक, नागपुर",
        state_pb_sub: "खन्ना, लुधियाना",
        state_mp_sub: "इंदौर, भोपाल",
        suitability_score: "उपयुक्तता स्कोर",
        chart_suitability_axis: "उपयुक्तता स्कोर (0-100)",

        // Plant Doctor
        sample_title: "या नमूना फोटो चुनें:",
        sample_rice: "धान ब्लास्ट",
        sample_cotton: "कपास टिंडा",
        sample_chilli: "मिर्च सड़न",
        sample_banana: "केला धब्बा",
        sample_mosaic: "पीला मोजेक",
        sample_blight: "अगेती झुलसा",
        sample_healthy: "स्वस्थ पत्ती",
        drop_limit: "अधिकतम 5 MB, JPG या PNG",
        preview_alt: "चुनी गई पौधे की फोटो",
        engine_label: "विश्लेषण इंजन",
        engine_local_note: "यह केवल स्थानीय रंग जांच है, निदान नहीं। कृषि अधिकारी से पुष्टि करें।",

        // Yield disclosures
        yield_assumption: "मान्यता: {state}, {season} मौसम, 120 किग्रा/हेक्टेयर खाद, 2.5 किग्रा/हेक्टेयर कीटनाशक",
        mkt_trend_up: "बढ़ रहा है",
        mkt_trend_down: "घट रहा है",
        mkt_trend_flat: "स्थिर",
        mkt_advice_up: "रुकें और चरणों में बेचें: आवक स्थिर है और मिल की मांग मजबूत है। अगले 10 दिनों में चरणों में बेचें।",
        mkt_advice_down: "जल्दी बेचें: अधिक आवक की सूचना है। 3-5 दिनों में बेचें, या पंजीकृत (WDRA) गोदाम में रखकर ऋण लें।",
        mkt_advice_flat: "स्थिर बाजार: भाव उचित दायरे में हैं। अपनी नकदी जरूरत के अनुसार चरणों में बेचें।",
        mkt_reference_note: "यहां दिखाए गए मंडी भाव इस प्रोजेक्ट के डेटासेट में संग्रहीत संदर्भ मान हैं, लाइव APMC फीड नहीं। बेचने से पहले अपनी मंडी में वास्तविक भाव जांचें।",
        mkt_live_note: "मंडी भाव data.gov.in के माध्यम से AGMARKNET से प्राप्त होते हैं। बेचने से पहले भाव की रिपोर्ट तिथि देखें और मंडी में पुष्टि करें।",
        mkt_reference_title: "संदर्भ मंडी भाव:",
        mkt_live_source: "स्रोत: AGMARKNET (data.gov.in) • भाव तिथि:",
        mkt_reference_source: "ऑफ़लाइन संदर्भ भाव • लाइव फीड उपलब्ध नहीं",
        mkt_view_map: "मंडी का स्थान मानचित्र पर देखें",
        mkt_arrivals_not_reported: "दैनिक मंडी आवक रिपोर्ट नहीं हुई",
        btn_use_location: "मेरा स्थान उपयोग करें",
        location_finding: "आपके आसपास की मंडियां खोजी जा रही हैं...",
        location_enabled: "स्थान की अनुमति मिल गई। दूरी और भाव के आधार पर मंडियां दिखाई जा रही हैं।",
        location_denied: "स्थान की अनुमति नहीं मिली। राज्य-स्तरीय भाव दिखाए जा रहे हैं।",
        location_unsupported: "यह ब्राउज़र स्थान सेवा का समर्थन नहीं करता।",
        location_insecure: "स्थान उपयोग के लिए सुरक्षित HTTPS कनेक्शन आवश्यक है।",
        location_failed: "आपका स्थान निर्धारित नहीं हो सका।",
        nearby_markets_title: "आसपास की मंडियां और भाव:",
        all_markets_title: "रिपोर्ट करने वाली सभी मंडियां और भाव:",
        reference_markets_title: "संदर्भ मंडी भाव (लाइव नहीं):",
        market_list_summary: "{count} मंडियों ने रिपोर्ट किया • नवीनतम AGMARKNET भाव",
        nearby_best: "आसपास का सर्वोच्च भाव: {market} में ₹{price} प्रति क्विंटल।",
        nearby_nearest: "सबसे निकट मंडी: {market}, लगभग {distance} किमी दूर।",
        nearby_distance: "लगभग {distance} किमी",
        nearby_map: "मानचित्र",
        nearby_unavailable: "मंडी के निर्देशांक उपलब्ध नहीं हैं, इसलिए दूरी की गणना नहीं हो सकती।",

        // Errors
        err_generic: "कुछ गलत हो गया। फिर से प्रयास करें।",
        err_network: "सर्वर से संपर्क नहीं हुआ। इंटरनेट कनेक्शन जांचें।",

        // Advice tab
        advice_chat_title: "AI कृषि विशेषज्ञ से पूछें",
        advice_chat_sub: "कीट, खाद, सरकारी योजनाएं या मंडी समय के बारे में पूछें।",
        chat_placeholder: "अपना सवाल लिखें...",
        chat_send: "भेजें",
        chat_greeting: "नमस्ते! कीट, खाद की मात्रा, सिंचाई या मंडी भाव के बारे में पूछें।",
        chat_thinking: "विशेषज्ञ उत्तर लिख रहे हैं...",
        resource_title: "खाद बोरी और सिंचाई योजना",
        resource_sub: "अपने खेत के लिए यूरिया, DAP, पोटाश बोरियों की संख्या और मोटर घंटे जानें।",
        res_crop_label: "फसल",
        res_soil_label: "मिट्टी प्रकार",
        res_stage_label: "फसल अवस्था",
        res_area_label: "क्षेत्र (एकड़)",
        res_n_label: "मिट्टी नाइट्रोजन (किग्रा/हे)",
        res_p_label: "मिट्टी फॉस्फोरस (किग्रा/हे)",
        res_k_label: "मिट्टी पोटाश (किग्रा/हे)",
        res_moisture_label: "मिट्टी नमी (%)",
        res_temp_label: "दिन का तापमान (C)",
        btn_plan_resources: "खाद और पानी योजना देखें",
        fert_result_title: "खरीदने वाली खाद बोरियां",
        irrig_result_title: "सिंचाई योजना",
        fert_schedule_title: "किस्तवार देने का कार्यक्रम",
        plan_english_note: "विस्तृत कार्यक्रम कृषि इंजन से जैसा मिला वैसा दिखाया गया है।",
        res_urea: "यूरिया (50 किग्रा बोरी)",
        res_dap: "DAP (50 किग्रा बोरी)",
        res_mop: "पोटाश / MOP (50 किग्रा बोरी)",
        res_fym: "गोबर खाद (टन)",
        res_motor: "मोटर चलाने का समय",
        res_interval: "अगली सिंचाई",
        res_depth: "पानी की गहराई",
        res_days: "दिन",
        res_hours: "घंटे",
        res_mm: "मिमी",
        hero_audio_speech: "नमस्ते किसान भाई! एग्री-इंटेलिजेंस में आपका स्वागत है। अपनी मिट्टी चुनकर सबसे अच्छी फसल जानें, या पत्ते की फोटो लेकर तुरंत रोग का इलाज पाएं।"
    }
};

// ==========================================
// 2. ACTIVE APPLICATION STATE
// ==========================================
let currentLanguage = localStorage.getItem("kisan_lang") || "en";
let latestCropData = null;
let latestDiseaseData = null;
let latestYieldData = null;
let latestYieldAcres = 2.5;

let currentYieldMarketData = null;
let latestYieldSpeech = "";
let farmerLocation = null;
let yieldMarketRequestId = 0;

const CROP_FALLBACK_MARKET = {
    "Rice": { commodity: "Rice (Paddy)", modal_price: 2580, min_price: 2400, max_price: 2750, primary_mandi: "Warangal APMC", variety: "BPT 5204 (Sona Masoori)", trend: "Stable (+0.5%)", msp_benchmark: 2300, arrival_tonnes: 650 },
    "Cotton": { commodity: "Cotton", modal_price: 7450, min_price: 6900, max_price: 7700, primary_mandi: "Warangal APMC", variety: "Medium Staple", trend: "Bullish (+2.4%)", msp_benchmark: 7121, arrival_tonnes: 420 },
    "Maize": { commodity: "Maize", modal_price: 2340, min_price: 2200, max_price: 2450, primary_mandi: "Warangal APMC", variety: "Yellow Hybrid", trend: "Bullish (+1.8%)", msp_benchmark: 2225, arrival_tonnes: 280 },
    "Pulses": { commodity: "Pulses", modal_price: 7650, min_price: 7200, max_price: 7950, primary_mandi: "Warangal APMC", variety: "Red Gram (Tur / Arhar)", trend: "Bullish (+2.2%)", msp_benchmark: 7000, arrival_tonnes: 210 },
    "Groundnut": { commodity: "Groundnut", modal_price: 6950, min_price: 6600, max_price: 7250, primary_mandi: "Warangal APMC", variety: "TAG 24 / Bold", trend: "Bullish (+1.5%)", msp_benchmark: 6783, arrival_tonnes: 180 },
    "Soybean": { commodity: "Soybean", modal_price: 4750, min_price: 4500, max_price: 4950, primary_mandi: "Warangal APMC", variety: "Yellow JS 335", trend: "Stable (+0.3%)", msp_benchmark: 4892, arrival_tonnes: 160 }
};

let latestCropSpeech = "";
let latestDiseaseSpeech = "";
let currentLeafBlob = null;

let cropChartInstance = null;

// ==========================================
// 2b. SHARED UI HELPERS
// ==========================================
function showToast(message, kind = "error") {
    const host = document.getElementById("toast-host");
    if (!host) {
        console.warn("[toast]", message);
        return;
    }
    const toast = document.createElement("div");
    toast.className = `toast toast-${kind}`;
    toast.setAttribute("role", kind === "error" ? "alert" : "status");
    toast.innerText = message;

    const dismiss = () => {
        toast.classList.add("toast-out");
        setTimeout(() => toast.remove(), 300);
    };
    toast.addEventListener("click", dismiss);
    host.appendChild(toast);
    setTimeout(dismiss, 6000);
}

// Rupee amounts use Indian digit grouping (1,00,000 rather than 100,000)
function fmtINR(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return "0";
    return Math.round(num).toLocaleString("en-IN");
}

// Fetch wrapper that turns every backend failure into a readable message
async function readJsonResponse(resp) {
    if (!resp.ok) {
        let detail = `Server status ${resp.status}`;
        try {
            const body = await resp.json();
            // FastAPI sends a string for HTTPException but a list for 422 validation errors
            const raw = body && (body.detail || body.message);
            if (typeof raw === "string") detail = raw;
            else if (raw) detail = `request rejected (${resp.status})`;
        } catch (_) {
            /* response body was not JSON */
        }
        throw new Error(detail);
    }
    const data = await resp.json();
    if (data && data.status === "error") {
        throw new Error(data.message || I18N[currentLanguage].err_generic);
    }
    return data;
}

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initIconCardSelectors();
    initSteppers();
    initLanguageSelector();
    initCropRecommendation();
    initDiseaseDetector();
    initYieldPredictor();
    initSpeechSynthesis();
    initChat();
    initResourcePlanner();

    // Apply stored or default language across the whole DOM
    applyLanguage(currentLanguage);
});

// ==========================================
// 4. LANGUAGE CONTROLLER & SWITCHER
// ==========================================
function initLanguageSelector() {
    const langSelect = document.getElementById("global-lang-select");
    if (!langSelect) return;

    langSelect.value = currentLanguage;
    langSelect.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
    });
}

function applyLanguage(lang) {
    if (!I18N[lang]) lang = "en";
    currentLanguage = lang;
    localStorage.setItem("kisan_lang", lang);

    const langSelect = document.getElementById("global-lang-select");
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    document.documentElement.lang = lang;
    const dict = I18N[lang];

    // 1. Translate all static data-i18n text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.innerText = dict[key];
        }
    });

    // 2. Translate all data-i18n-title attributes
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
        const key = el.getAttribute("data-i18n-title");
        if (dict[key] !== undefined) {
            el.setAttribute("title", dict[key]);
        }
    });

    // 3. Translate all data-i18n-placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] !== undefined) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // 4. Screen-reader labels and image alt text must follow the language too
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria");
        if (dict[key] !== undefined) {
            el.setAttribute("aria-label", dict[key]);
        }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
        const key = el.getAttribute("data-i18n-alt");
        if (dict[key] !== undefined) {
            el.setAttribute("alt", dict[key]);
        }
    });

    // 5. Update Quick Acre display
    updateAcreDisplay();

    // 6. Re-render dynamic components if previously loaded
    if (latestCropData) {
        // Re-request localized crop data from backend to ensure 100% pure translations
        refetchCropRecommendations();
    }
    if (latestDiseaseData && currentLeafBlob) {
        // Diagnosis text is generated server-side, so the photo is re-analysed
        analyzeSelectedLeaf();
    }
    const currentYieldCrop = getSelectedIconValue("yield-crop", "Rice");
    updateYieldLiveMarketPrice(currentYieldCrop);
    if (latestYieldData) {
        renderYieldResults(latestYieldData, latestYieldAcres);
    }

    // 7. Home tab widgets are rendered from API data, so they need a redraw
    loadHomeWeather();
    renderYieldAssumptionNote();
    if (document.getElementById("chat-messages") && chatHistory.length === 0) {
        seedChatGreeting();
    }
}

function updateAcreDisplay() {
    const dict = I18N[currentLanguage];
    const yieldInput = document.getElementById("yield-area-acres");
    const yieldDisp = document.getElementById("disp-yield-acres");
    if (yieldInput && yieldDisp) {
        const val = parseFloat(yieldInput.value) || 2.5;
        const unit = val === 1 ? dict.unit_single_acre : dict.unit_multi_acres;
        const unitEl = document.getElementById("disp-yield-unit");
        if (unitEl) unitEl.innerText = unit;
    }
}

// ==========================================
// 5. TAB CONTROLLER
// ==========================================
function initTabs() {
    const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
    const tabPanes = document.querySelectorAll(".tab-pane");

    function activateTab(btn, moveFocus) {
        tabBtns.forEach(b => {
            b.classList.remove("active");
            b.setAttribute("aria-selected", "false");
            b.setAttribute("tabindex", "-1");
        });
        tabPanes.forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        btn.setAttribute("tabindex", "0");
        if (moveFocus) btn.focus();

        const targetPane = document.getElementById(btn.getAttribute("data-tab"));
        if (targetPane) targetPane.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    tabBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => activateTab(btn, false));

        // Standard ARIA tablist keyboard model: arrows cycle, Home/End jump
        btn.addEventListener("keydown", (e) => {
            let next = null;
            if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % tabBtns.length;
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (index - 1 + tabBtns.length) % tabBtns.length;
            if (e.key === "Home") next = 0;
            if (e.key === "End") next = tabBtns.length - 1;
            if (next === null) return;
            e.preventDefault();
            activateTab(tabBtns[next], true);
        });
    });

    // Quick Action Tools on Home Tab
    document.querySelectorAll(".tool-card[data-tab]").forEach(card => {
        const open = () => {
            const btn = document.querySelector(`.tab-btn[data-tab="${card.getAttribute("data-tab")}"]`);
            if (btn) btn.click();
        };
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
            }
        });
    });
}

// ==========================================
// 6. ICON CARD SELECTOR CONTROLLER
// ==========================================
function initIconCardSelectors() {
    document.querySelectorAll(".icon-select-card").forEach(card => {
        card.addEventListener("click", () => {
            const group = card.getAttribute("data-group");
            if (!group) return;

            document.querySelectorAll(`.icon-select-card[data-group="${group}"]`).forEach(c => {
                c.classList.remove("selected");
            });

            card.classList.add("selected");

            if (group === "yield-water") {
                const hidden = document.getElementById("yield-water-type");
                if (hidden) hidden.value = card.getAttribute("data-value");
            }
            if (group === "yield-crop") {
                const cropVal = card.getAttribute("data-value");
                updateYieldLiveMarketPrice(cropVal);
            }
            if (group === "state") {
                // State drives the mandi rates and the agro-climatic context
                loadHomeWeather();
                updateYieldLiveMarketPrice(getSelectedIconValue("yield-crop", "Rice"));
                renderYieldAssumptionNote();
            }
        });
    });
}

function getSelectedIconValue(group, fallback) {
    const selected = document.querySelector(`.icon-select-card[data-group="${group}"].selected`);
    return selected ? selected.getAttribute("data-value") : fallback;
}

// ==========================================
// 7. STEPPERS & QUICK ACRE BUTTONS
// ==========================================
function initSteppers() {
    const yieldDisp = document.getElementById("disp-yield-acres");
    const yieldInput = document.getElementById("yield-area-acres");
    const btnYieldMinus = document.getElementById("btn-yield-minus");
    const btnYieldPlus = document.getElementById("btn-yield-plus");

    if (btnYieldMinus && btnYieldPlus && yieldInput && yieldDisp) {
        btnYieldMinus.addEventListener("click", () => {
            let val = Math.max(0.5, (parseFloat(yieldInput.value) || 2.5) - 0.5);
            yieldInput.value = val.toFixed(1);
            yieldDisp.innerText = val.toFixed(1);
            latestYieldAcres = val;
            updateAcreDisplay();
        });
        btnYieldPlus.addEventListener("click", () => {
            let val = Math.min(50.0, (parseFloat(yieldInput.value) || 2.5) + 0.5);
            yieldInput.value = val.toFixed(1);
            yieldDisp.innerText = val.toFixed(1);
            latestYieldAcres = val;
            updateAcreDisplay();
        });
    }

    document.querySelectorAll(".quick-acre-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const val = parseFloat(btn.getAttribute("data-val"));
            document.querySelectorAll(".quick-acre-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            if (yieldInput && yieldDisp) {
                yieldInput.value = val.toFixed(1);
                yieldDisp.innerText = val.toFixed(1);
                latestYieldAcres = val;
                updateAcreDisplay();
            }
        });
    });
}

// ==========================================
// 8. SPEECH SYNTHESIS CONTROLLER
// ==========================================
function speakText(text) {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === "undefined") {
        showToast("Voice guidance is not supported in this browser.", "warn");
        return;
    }
    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    if (currentLanguage === "te") {
        utterance.lang = "te-IN";
    } else if (currentLanguage === "hi") {
        utterance.lang = "hi-IN";
    } else {
        utterance.lang = "en-IN";
    }

    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
}

function initSpeechSynthesis() {
    const btnHeroHelp = document.getElementById("btn-hero-help");
    if (btnHeroHelp) {
        btnHeroHelp.addEventListener("click", () => {
            const dict = I18N[currentLanguage];
            speakText(dict.hero_audio_speech);
        });
    }

    const btnCrop = document.getElementById("btn-speak-crop");
    if (btnCrop) {
        btnCrop.addEventListener("click", () => {
            if (latestCropSpeech) speakText(latestCropSpeech);
        });
    }

    const btnDisease = document.getElementById("btn-speak-disease");
    if (btnDisease) {
        btnDisease.addEventListener("click", () => {
            if (latestDiseaseSpeech) speakText(latestDiseaseSpeech);
        });
    }

    const btnYield = document.getElementById("btn-speak-yield");
    if (btnYield) {
        btnYield.addEventListener("click", () => {
            if (latestYieldSpeech) speakText(latestYieldSpeech);
        });
    }
}

// ==========================================
// 9. CROP RECOMMENDATION MODULE
// ==========================================
function initCropRecommendation() {
    const btn = document.getElementById("btn-recommend-crop");
    if (!btn) return;

    btn.addEventListener("click", () => executeCropRecommendation());
}

async function executeCropRecommendation() {
    const btn = document.getElementById("btn-recommend-crop");
    const dict = I18N[currentLanguage];
    if (!btn) return;

    const optN = document.getElementById("crop-opt-n")?.value;
    const optP = document.getElementById("crop-opt-p")?.value;
    const optK = document.getElementById("crop-opt-k")?.value;
    const optPh = document.getElementById("crop-opt-ph")?.value;

    const prevCrop1 = getSelectedIconValue("prev-crop-1", "rice");
    const prevCrop2 = getSelectedIconValue("prev-crop-2", "cotton");

    const payload = {
        soil_type: getSelectedIconValue("soil", "black_cotton"),
        season: getSelectedIconValue("season", "kharif"),
        water_source: getSelectedIconValue("water", "moderate"),
        land_terrain: getSelectedIconValue("terrain", "upland"),
        previous_crop: prevCrop1,
        previous_crop_1: prevCrop1,
        previous_crop_2: prevCrop2,
        farming_goal: getSelectedIconValue("goal", "commercial"),
        state: getSelectedIconValue("state", "Telangana"),
        language: currentLanguage,
        opt_n: optN ? parseFloat(optN) : null,
        opt_p: optP ? parseFloat(optP) : null,
        opt_k: optK ? parseFloat(optK) : null,
        opt_ph: optPh ? parseFloat(optPh) : null
    };

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> ${dict.finding_crops}`;

    try {
        const resp = await fetch("/api/recommend-crop", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await readJsonResponse(resp);

        latestCropData = data;
        renderCropRecommendationResults(data);
    } catch (err) {
        showToast(`${dict.err_generic} (${err.message})`);
    } finally {
        btn.disabled = false;
        btn.innerHTML = `🚀 ${dict.btn_find_crop}`;
    }
}

async function refetchCropRecommendations() {
    if (!latestCropData) return;
    executeCropRecommendation();
}

function renderCropRecommendationResults(data) {
    const resultsContainer = document.getElementById("crop-results-container");
    if (!resultsContainer) return;
    resultsContainer.style.display = "block";

    const dict = I18N[currentLanguage];

    const primaryNameEl = document.getElementById("crop-primary-name");
    const primaryConfEl = document.getElementById("crop-primary-conf");
    const summaryEl = document.getElementById("crop-suitability-summary");

    if (primaryNameEl) primaryNameEl.innerText = data.primary_crop;
    // The model returns a 0-100 ranking score clamped to 75-98.5, so it is shown
    // as a suitability score instead of a claim of statistical confidence.
    if (primaryConfEl) primaryConfEl.innerText = `${dict.suitability_score}: ${data.primary_confidence} / 100`;
    if (summaryEl) summaryEl.innerText = data.farmer_summary;

    const top = (data.top_recommendations && data.top_recommendations[0]) ? data.top_recommendations[0] : null;
    if (top) {
        if (currentLanguage === "te") {
            latestCropSpeech = `మీ నేలకు అత్యంత అనుకూలమైన పంట ${top.crop_name}. కాలపరిమితి ${top.duration}. ఎకరానికి పెట్టుబడి ${top.investment_per_acre}, మరియు అంచనా నికర లాభం ${top.expected_profit_per_acre}. విత్తే సమయం ${top.sowing_window}.`;
        } else if (currentLanguage === "hi") {
            latestCropSpeech = `आपकी जमीन के लिए सबसे उपयुक्त फसल ${top.crop_name} है। इसकी अवधि ${top.duration} है। प्रति एकड़ लागत ${top.investment_per_acre} और अनुमानित शुद्ध लाभ ${top.expected_profit_per_acre} है। बुवाई का समय ${top.sowing_window} है।`;
        } else {
            latestCropSpeech = `The best recommended crop for your farm is ${top.crop_name}. Duration is ${top.duration}. Cost per acre is ${top.investment_per_acre}, and expected net profit is ${top.expected_profit_per_acre}. Sowing window is ${top.sowing_window}.`;
        }
    }

    const listEl = document.getElementById("crop-top3-list");
    if (listEl) {
        listEl.innerHTML = "";

        const cropIcons = {
            "Rice": "🌾", "Cotton": "☁️", "Maize": "🌽", "Chickpea": "🫘", "Pigeonpeas": "🫘",
            "Mungbean": "🫘", "Blackgram": "🫘", "Groundnut": "🥜", "Banana": "🍌",
            "Pomegranate": "🍎", "Watermelon": "🍉", "Wheat": "🌾", "Soybean": "🌱", "Sugarcane": "🎋"
        };

        (data.top_recommendations || []).forEach((rec, idx) => {
            const item = document.createElement("div");
            item.className = "card card-emerald";
            item.style.marginBottom = "16px";
            item.style.border = "1.5px solid #86efac";

            const reasonsHtml = (rec.farmer_reasons || []).map(r => `
                <div style="display:flex; align-items:center; gap:8px; margin:4px 0;">
                    <span style="color:#059669; font-weight:900;">✓</span>
                    <span style="font-weight:700; font-size:0.92rem; color:#1e293b;">${r}</span>
                </div>
            `).join("");

            const cKey = rec.crop_name.split('(')[0].trim();
            const icon = cropIcons[cKey] || "🌱";

            item.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <span style="font-size:1.45rem; font-weight:800; color:#064e3b;">
                        ${icon} #${idx + 1} ${rec.crop_name}
                    </span>
                    <span class="pill-badge pill-gold" style="font-size:0.95rem;">${dict.suitability_score}: ${rec.confidence} / 100</span>
                </div>

                <!-- 4 Visual Metric Cards -->
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(135px, 1fr)); gap:10px; margin:14px 0;">
                    <div class="bag-card">
                        <div style="font-size:1.8rem; margin-bottom:2px;">⏳</div>
                        <div class="bag-count" style="font-size:1.15rem;">${rec.duration}</div>
                        <div class="bag-name">${dict.duration_label}</div>
                    </div>
                    <div class="bag-card">
                        <div style="font-size:1.8rem; margin-bottom:2px;">💰</div>
                        <div class="bag-count" style="font-size:1.15rem;">${rec.investment_per_acre}</div>
                        <div class="bag-name">${dict.cost_label}</div>
                    </div>
                    <div class="bag-card">
                        <div style="font-size:1.8rem; margin-bottom:2px;">🌾</div>
                        <div class="bag-count" style="font-size:1.15rem;">${rec.expected_yield_per_acre}</div>
                        <div class="bag-name">${dict.yield_label}</div>
                    </div>
                    <div class="bag-card">
                        <div style="font-size:1.8rem; margin-bottom:2px;">💵</div>
                        <div class="bag-count" style="font-size:1.15rem; color:#064e3b;">${rec.expected_profit_per_acre}</div>
                        <div class="bag-name">${dict.profit_label}</div>
                    </div>
                </div>

                <!-- Visual Reason Badges -->
                <div style="background:white; padding:12px; border-radius:10px; border:1px solid #bbf7d0; margin-bottom:10px;">
                    <strong style="color:#047857; font-size:0.95rem;">🎯 ${dict.why_fits_label}</strong>
                    <div style="margin-top:6px;">
                        ${reasonsHtml}
                    </div>
                </div>

                <!-- Variety, Sowing, Treatment Badges -->
                <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
                    <span class="pill-badge pill-status">🌱 <strong>${dict.seed_label}</strong> ${rec.variety}</span>
                    <span class="pill-badge pill-gold">📅 <strong>${dict.sow_label}</strong> ${rec.sowing_window}</span>
                    <span class="pill-badge">🛡️ <strong>${dict.treatment_label}</strong> ${rec.seed_treatment}</span>
                </div>
            `;
            listEl.appendChild(item);
        });
    }

    // Chart.js render
    try {
        const chartCanvas = document.getElementById("chart-crop-confidence");
        if (chartCanvas && typeof Chart !== "undefined") {
            const ctx = chartCanvas.getContext("2d");
            const labels = (data.top_recommendations || []).map(r => r.crop_name.split('(')[0].trim());
            const scores = (data.top_recommendations || []).map(r => r.confidence);

            if (cropChartInstance) cropChartInstance.destroy();
            cropChartInstance = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: dict.chart_comp_title,
                        data: scores,
                        backgroundColor: ["#047857", "#10b981", "#34d399"],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: { display: true, text: dict.chart_suitability_axis }
                        }
                    }
                }
            });
        }
    } catch (chartErr) {
        console.warn("Chart rendering failed (non-critical):", chartErr);
    }

    const navHeight = document.querySelector('.top-nav')?.offsetHeight || 75;
    const rect = resultsContainer.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
        top: Math.max(0, rect.top + scrollTop - navHeight - 16),
        behavior: 'smooth'
    });
}

// ==========================================
// 10. PLANT DOCTOR (LEAF DISEASE AI)
// ==========================================
function initDiseaseDetector() {
    const dropzone = document.getElementById("leaf-dropzone");
    const fileInput = document.getElementById("leaf-file-input");
    const previewImg = document.getElementById("leaf-preview-img");
    const previewContainer = document.getElementById("leaf-preview-container");
    const btnAnalyze = document.getElementById("btn-analyze-disease");
    const btnCamera = document.getElementById("btn-open-camera");

    if (dropzone && fileInput) {
        dropzone.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0]) {
                handleSelectedFile(e.target.files[0]);
            }
        });

        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("dragover");
        });
        dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));
        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("dragover");
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleSelectedFile(e.dataTransfer.files[0]);
            }
        });
    }

    // Sample diseased leaf cards (mouse/touch and keyboard)
    document.querySelectorAll(".sample-leaf-card").forEach(card => {
        const pickSample = async () => {
            document.querySelectorAll(".sample-leaf-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            const samplePath = card.getAttribute("data-sample");
            if (!samplePath) return;

            try {
                const resp = await fetch(samplePath);
                if (!resp.ok) throw new Error(`Image status ${resp.status}`);
                const blob = await resp.blob();
                handleSelectedFile(blob);
            } catch (err) {
                showToast(`Sample photo could not be loaded. (${err.message})`);
            }
        };

        card.addEventListener("click", pickSample);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                pickSample();
            }
        });
    });

    function handleSelectedFile(blobOrFile) {
        const dict = I18N[currentLanguage];
        const MAX_BYTES = 5 * 1024 * 1024;
        const allowed = ["image/jpeg", "image/jpg", "image/png"];

        // The dropzone advertises these limits, so they are enforced here too
        if (blobOrFile.size > MAX_BYTES) {
            showToast(`${dict.drop_limit} — ${(blobOrFile.size / 1048576).toFixed(1)} MB`);
            return;
        }
        if (blobOrFile.type && !allowed.includes(blobOrFile.type.toLowerCase())) {
            showToast(dict.drop_limit);
            return;
        }

        currentLeafBlob = blobOrFile;
        const url = URL.createObjectURL(blobOrFile);
        if (previewImg) previewImg.src = url;
        if (previewContainer) previewContainer.style.display = "block";
        if (btnAnalyze) btnAnalyze.disabled = false;
    }

    // Camera Capture Modal
    const modalCamera = document.getElementById("camera-modal");
    const video = document.getElementById("camera-video");
    const canvas = document.getElementById("camera-canvas");
    const btnCapture = document.getElementById("btn-capture-photo");
    const btnCloseCamera = document.getElementById("btn-close-camera");
    let mediaStream = null;

    if (btnCamera && modalCamera) {
        btnCamera.addEventListener("click", async () => {
            modalCamera.style.display = "flex";
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" }
                });
                if (video) video.srcObject = mediaStream;
            } catch (err) {
                showToast(`Camera is not available. (${err.message})`);
                modalCamera.style.display = "none";
            }
        });
    }

    if (btnCloseCamera && modalCamera) {
        btnCloseCamera.addEventListener("click", () => {
            stopCamera();
            modalCamera.style.display = "none";
        });
    }

    if (btnCapture && canvas && video) {
        btnCapture.addEventListener("click", () => {
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 480;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((blob) => {
                handleSelectedFile(blob);
                stopCamera();
                if (modalCamera) modalCamera.style.display = "none";
            }, "image/jpeg", 0.9);
        });
    }

    function stopCamera() {
        if (mediaStream) {
            mediaStream.getTracks().forEach(t => t.stop());
            mediaStream = null;
        }
    }

    // Diagnosis Trigger
    if (btnAnalyze) {
        btnAnalyze.addEventListener("click", () => analyzeSelectedLeaf());
    }

    // Camera modal: close on Escape and restore focus to the trigger button
    if (modalCamera) {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modalCamera.style.display === "flex") {
                stopCamera();
                modalCamera.style.display = "none";
                if (btnCamera) btnCamera.focus();
            }
        });
    }

    // "Remove photo" style reset: clear the pending file when the tab is left
    window.addEventListener("beforeunload", stopCamera);
}

// Uploads the pending leaf photo and renders the report. Kept outside the init
// closure so a language change can re-run it: the diagnosis text is generated
// on the server, so the photo has to be sent again with the new language.
async function analyzeSelectedLeaf() {
    if (!currentLeafBlob) return;

    const dict = I18N[currentLanguage];
    const btnAnalyze = document.getElementById("btn-analyze-disease");

    if (btnAnalyze) {
        btnAnalyze.disabled = true;
        btnAnalyze.innerHTML = `<span class="spinner"></span> ${dict.diagnosing_leaf}`;
    }

    const formData = new FormData();
    formData.append("file", currentLeafBlob, "leaf.jpg");
    formData.append("language", currentLanguage);

    try {
        const resp = await fetch("/api/diagnose-leaf", {
            method: "POST",
            body: formData
        });
        const data = await readJsonResponse(resp);
        latestDiseaseData = data;
        renderDiseaseDiagnosis(data);
    } catch (err) {
        // A failed request must never be left on screen looking like a diagnosis
        latestDiseaseData = null;
        const box = document.getElementById("disease-results-box");
        if (box) box.style.display = "none";
        showToast(`${dict.err_generic} (${err.message})`);
    } finally {
        if (btnAnalyze) {
            btnAnalyze.disabled = false;
            btnAnalyze.innerHTML = `🔍 ${dict.btn_check_disease}`;
        }
    }
}

function renderDiseaseDiagnosis(data) {
    const diagBox = document.getElementById("disease-results-box");
    if (!diagBox) return;
    diagBox.style.display = "block";

    const guideBox = document.getElementById("disease-guide-box");
    if (guideBox) guideBox.style.display = "none";

    const dict = I18N[currentLanguage];

    // Honesty disclosure: name the engine that produced this result. The local
    // OpenCV path is a colour screen, not a trained diagnosis.
    const engineEl = document.getElementById("diag-engine");
    if (engineEl) {
        const engine = (data.analyzer_engine || "").trim();
        if (!engine) {
            engineEl.style.display = "none";
        } else {
            const isLocal = engine.toLowerCase().startsWith("local");
            engineEl.style.display = "";
            engineEl.className = isLocal ? "engine-badge engine-badge-warn" : "engine-badge";
            engineEl.innerText = isLocal
                ? `${dict.engine_label}: ${engine}. ${dict.engine_local_note}`
                : `${dict.engine_label}: ${engine}`;
        }
    }

    const notDetectedBox = document.getElementById("diag-not-detected-box");
    const detectedContent = document.getElementById("diag-detected-content");
    const btnSpeak = document.getElementById("btn-speak-disease");

    const isSupported = data.is_supported_crop !== false && !((data.crop_identified || "").toLowerCase().includes("not detected"));

    if (!isSupported) {
        if (notDetectedBox) notDetectedBox.style.display = "block";
        if (detectedContent) detectedContent.style.display = "none";
        if (btnSpeak) btnSpeak.style.display = "none";

        const titleEl = document.getElementById("diag-not-detected-title");
        const msgEl = document.getElementById("diag-not-detected-msg");
        if (titleEl) titleEl.innerText = data.condition || dict.not_detected_title;
        if (msgEl) msgEl.innerText = data.summary || dict.not_detected_msg;

        latestDiseaseSpeech = msgEl ? msgEl.innerText : dict.not_detected_msg;
    } else {
        if (notDetectedBox) notDetectedBox.style.display = "none";
        if (detectedContent) detectedContent.style.display = "block";
        if (btnSpeak) btnSpeak.style.display = "inline-flex";

        const condition = data.condition || "";
        const crop = data.crop_identified || "";
        const part = data.plant_part || "";
        const pathogen = data.pathogen_type || "";

        const condEl = document.getElementById("diag-condition");
        const cropEl = document.getElementById("diag-crop");
        const partEl = document.getElementById("diag-plant-part");
        const pathEl = document.getElementById("diag-pathogen");
        const summaryEl = document.getElementById("diag-summary");

        if (condEl) condEl.innerText = condition;
        if (cropEl) cropEl.innerText = crop;
        if (partEl) partEl.innerText = part;
        if (pathEl) pathEl.innerText = pathogen;
        if (summaryEl) summaryEl.innerText = data.summary || "";

        const chemList = data.chemical_treatments || [];
        if (currentLanguage === "te") {
            latestDiseaseSpeech = `మీ ${crop} పంట (${part}) పరీక్షించగా ${condition} ఉన్నట్లు తేలింది. దీని నివారణకు సిఫార్సు చేసిన మందులు: ${chemList.join(', ')}. స్ప్రే పంపునకు సరైన మోతాదు కలపండి.`;
        } else if (currentLanguage === "hi") {
            latestDiseaseSpeech = `आपकी ${crop} की पत्ती की जांच में ${condition} पाया गया है। अनुशंसित दवाएं: ${chemList.join(', ')}। स्प्रे पंप में सही मात्रा मिलाकर छिड़काव करें।`;
        } else {
            latestDiseaseSpeech = `Diagnosis for your ${crop} leaf shows ${condition}. Recommended chemical control: ${chemList.join(', ')}. Use proper dosage per spray pump.`;
        }

        const badge = document.getElementById("diag-severity-badge");
        if (badge) {
            const rawSev = (data.severity || "").toLowerCase();
            let sevText = dict.severity_normal;
            if (rawSev.includes("severe") || rawSev.includes("తీవ్ర") || rawSev.includes("गंभीर")) {
                sevText = dict.severity_severe;
                badge.className = "pill-badge";
                badge.style.background = "#fee2e2";
                badge.style.color = "#991b1b";
            } else if (rawSev.includes("mod") || rawSev.includes("మధ్య") || rawSev.includes("मध्यम")) {
                sevText = dict.severity_moderate;
                badge.className = "pill-badge pill-gold";
            } else {
                badge.className = "pill-badge pill-status";
            }
            badge.innerText = Number.isFinite(Number(data.confidence)) && Number(data.confidence) > 0
                ? `${sevText} • ${Number(data.confidence)}%`
                : sevText;
        }

        // Organic remedies
        const orgList = document.getElementById("diag-organic-list");
        if (orgList) {
            orgList.innerHTML = (data.biological_organic_remedies || []).map(o => `
                <li style="margin-bottom:6px;">🌿 <strong>${o}</strong></li>
            `).join("");
        }

        // Chemical treatments: the dose is already inside each product line, so no
        // generic pump dose is appended (it used to contradict the real label dose).
        const chemContainer = document.getElementById("diag-chemical-list");
        if (chemContainer) {
            chemContainer.innerHTML = (data.chemical_treatments || []).map(c => `
                <li style="margin-bottom:6px;">🧪 <strong>${c}</strong></li>
            `).join("");
        }

        // Preventative practices
        const prevList = document.getElementById("diag-prevent-list");
        if (prevList) {
            prevList.innerHTML = (data.preventative_practices || []).map(p => `
                <li style="margin-bottom:6px;">🛡️ ${p}</li>
            `).join("");
        }
    }

    const navHeight = document.querySelector('.top-nav')?.offsetHeight || 75;
    const rect = diagBox.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
        top: Math.max(0, rect.top + scrollTop - navHeight - 16),
        behavior: 'smooth'
    });
}

// ==========================================
// 11. HARVEST YIELD & CASH INCOME ESTIMATOR
// ==========================================
// The cached mandi dataset is English-only, so trend text is rebuilt in the UI language
function localizeTrend(trend, dict) {
    const raw = String(trend || "");
    const lower = raw.toLowerCase();
    const pct = (raw.match(/\(([^)]+)\)/) || [])[1] || "";
    let label = dict.mkt_trend_flat;
    if (lower.includes("bullish")) label = dict.mkt_trend_up;
    if (lower.includes("bearish")) label = dict.mkt_trend_down;
    return pct ? `${label} (${pct})` : label;
}

async function updateYieldLiveMarketPrice(crop) {
    const cropKey = crop || getSelectedIconValue("yield-crop", "Rice");
    const stateName = getSelectedIconValue("state", "Telangana");
    const requestId = ++yieldMarketRequestId;
    
    // Immediate fallback display so farmer gets instant zero-latency feedback
    const fallback = CROP_FALLBACK_MARKET[cropKey] || CROP_FALLBACK_MARKET["Rice"];
    currentYieldMarketData = { ...fallback, is_live: false, source: "Offline reference dataset" };
    renderLiveMarketBanner(currentYieldMarketData, cropKey);
    renderYieldAssumptionNote();

    const params = new URLSearchParams({ commodity: cropKey, state: stateName });
    if (farmerLocation) {
        params.set("lat", farmerLocation.latitude.toFixed(3));
        params.set("lon", farmerLocation.longitude.toFixed(3));
    }

    try {
        const resp = await fetch(`/api/market-prices?${params.toString()}`);
        if (resp.ok) {
            const data = await resp.json();
            if (requestId !== yieldMarketRequestId) return;
            currentYieldMarketData = data;
            renderLiveMarketBanner(data, cropKey);
            renderYieldAssumptionNote();
            return data;
        }
    } catch (e) {
        console.warn("Live market fetch fallback used:", e);
    }
}

function requestYieldLocation() {
    const dict = I18N[currentLanguage];
    const button = document.getElementById("btn-yield-location");
    const statusElement = document.getElementById("yield-location-status");

    if (!window.isSecureContext) {
        showToast(dict.location_insecure, "warn");
        return;
    }
    if (!navigator.geolocation) {
        showToast(dict.location_unsupported, "warn");
        return;
    }

    if (button) button.disabled = true;
    if (statusElement) statusElement.innerText = dict.location_finding;

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            farmerLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            try {
                const data = await updateYieldLiveMarketPrice(getSelectedIconValue("yield-crop", "Rice"));
                if (statusElement && !data?.location_used) {
                    statusElement.innerText = dict.location_failed;
                }
            } finally {
                if (button) button.disabled = false;
            }
        },
        (error) => {
            const message = error.code === error.PERMISSION_DENIED
                ? dict.location_denied
                : dict.location_failed;
            farmerLocation = null;
            updateYieldLiveMarketPrice(getSelectedIconValue("yield-crop", "Rice"));
            if (statusElement) statusElement.innerText = message;
            showToast(message, "warn");
            if (button) button.disabled = false;
        },
        { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }
    );
}

function renderNearbyMarkets(data) {
    const dict = I18N[currentLanguage];
    const wrapper = document.getElementById("yield-nearby-wrap");
    const list = document.getElementById("yield-nearby-list");
    const title = document.getElementById("yield-market-list-title");
    const statusElement = document.getElementById("yield-location-status");
    if (!wrapper || !list) return;

    list.replaceChildren();
    const allMarkets = data.all_mandi_quotes || [];
    let markets;
    if (data.location_used) {
        markets = allMarkets
            .filter((market) => market.distance_km !== null && market.distance_km !== undefined)
            .sort((first, second) => Number(first.distance_km) - Number(second.distance_km));
        if (!markets.length) markets = data.nearby_markets || [];
    } else {
        markets = [...allMarkets].sort(
            (first, second) => Number(second.modal_price) - Number(first.modal_price)
        );
    }

    if (!markets.length) {
        wrapper.hidden = true;
        if (data.location_used && statusElement) statusElement.innerText = dict.nearby_unavailable;
        return;
    }

    wrapper.hidden = false;
    if (title) {
        title.innerText = data.location_used
            ? dict.nearby_markets_title
            : (data.is_live ? dict.all_markets_title : dict.reference_markets_title);
    }
    if (!data.location_used && data.is_live && statusElement) {
        statusElement.innerText = dict.market_list_summary.replace("{count}", markets.length);
    }
    const nearest = data.nearest_market;
    if (data.location_used && statusElement) {
        const statusParts = [];
        if (data.primary_mandi) {
            statusParts.push(dict.nearby_best
                .replace("{market}", data.primary_mandi)
                .replace("{price}", Number(data.modal_price).toLocaleString("en-IN")));
        }
        if (nearest) {
            statusParts.push(dict.nearby_nearest
                .replace("{market}", nearest.mandi)
                .replace("{distance}", nearest.distance_km));
        }
        statusElement.innerText = statusParts.join(" ");
    }

    markets.forEach((market) => {
        const isBestPrice = market.mandi === data.primary_mandi
            && Number(market.modal_price) === Number(data.modal_price);
        const row = document.createElement("div");
        row.style.cssText = `display:flex; justify-content:space-between; gap:10px; align-items:center; flex-wrap:wrap; padding:7px 9px; background:#f0fdf4; border:${isBestPrice ? "2px solid #10b981" : "1px solid #bbf7d0"}; border-radius:8px;`;

        const label = document.createElement("span");
        label.style.cssText = "font-size:0.84rem; font-weight:700; color:#065f46;";
        label.innerText = `${market.mandi}${market.district ? `, ${market.district}` : ""}`;

        const details = document.createElement("span");
        details.style.cssText = "font-size:0.82rem; font-weight:700; color:#334155;";
        const detailParts = [`₹${Number(market.modal_price).toLocaleString("en-IN")} / Q`];
        if (market.distance_km !== null && market.distance_km !== undefined) {
            detailParts.push(dict.nearby_distance.replace("{distance}", market.distance_km));
        }
        if (market.price_date) detailParts.push(market.price_date);
        details.innerText = detailParts.join(" • ");

        row.appendChild(label);
        row.appendChild(details);
        if (market.map_url) {
            const mapLink = document.createElement("a");
            mapLink.href = market.map_url;
            mapLink.target = "_blank";
            mapLink.rel = "noopener noreferrer";
            mapLink.innerText = dict.nearby_map;
            mapLink.style.cssText = "font-size:0.8rem; font-weight:700; color:#047857;";
            row.appendChild(mapLink);
        }
        list.appendChild(row);
    });
}

function renderLiveMarketBanner(data, cropKey) {
    const dict = I18N[currentLanguage];
    const badge = document.getElementById("yield-live-crop-badge");
    const title = document.getElementById("yield-live-market-title");
    const priceDisp = document.getElementById("yield-live-price-disp");
    const mandiDisp = document.getElementById("yield-live-mandi-disp");
    const rangeDisp = document.getElementById("yield-live-range-disp");
    const trendPill = document.getElementById("yield-live-trend-pill");
    const mspStatus = document.getElementById("yield-live-msp-status");
    const varietyDisp = document.getElementById("yield-live-variety-disp");
    const arrivalDisp = document.getElementById("yield-live-arrival-disp");
    const mapLink = document.getElementById("yield-live-map-link");
    const sourceDisp = document.getElementById("yield-live-source-disp");

    const cropI18nKey = `ycrop_${cropKey.toLowerCase()}`;
    const localizedCrop = dict[cropI18nKey] || data.commodity || cropKey;

    if (badge) badge.innerText = localizedCrop;
    if (title) title.innerText = data.is_live ? dict.yield_live_market_title : dict.mkt_reference_title;

    const modalP = data.modal_price || 2500;
    const minP = data.min_price || Math.round(modalP * 0.95);
    const maxP = data.max_price || Math.round(modalP * 1.08);
    const mandi = data.primary_mandi || data.mandi || "Warangal APMC";
    const marketLocation = data.market_location || mandi;
    const trend = data.trend || "Stable (+0.5%)";
    const variety = data.variety || "Standard Grade";
    const arrivals = data.arrival_tonnes ?? data.arrivals;

    if (priceDisp) {
        priceDisp.innerHTML = `₹ ${modalP.toLocaleString()} <span style="font-size:0.92rem; font-weight:600; color:#64748b;">${dict.mkt_per_quintal || "/ Quintal"}</span>`;
    }
    if (mandiDisp) {
        const distanceText = Number.isFinite(data.primary_distance_km)
            ? ` • ${data.primary_distance_km} km`
            : "";
        mandiDisp.innerText = `📍 ${marketLocation}${distanceText}`;
    }
    if (mapLink) {
        mapLink.hidden = !data.market_map_url;
        if (data.market_map_url) mapLink.href = data.market_map_url;
        mapLink.innerText = dict.mkt_view_map;
    }
    if (sourceDisp) {
        sourceDisp.innerText = data.is_live
            ? `${dict.mkt_live_source} ${data.price_date || "-"}`
            : dict.mkt_reference_source;
    }
    renderNearbyMarkets(data);
    if (rangeDisp) {
        rangeDisp.innerHTML = `₹ ${minP.toLocaleString()} - ₹ ${maxP.toLocaleString()} <span style="font-size:0.82rem; font-weight:500; color:#64748b;">/ Q</span>`;
    }
    if (trendPill) {
        const isBullish = trend.toLowerCase().includes("bullish");
        const isBearish = trend.toLowerCase().includes("bearish");
        trendPill.innerText = data.is_live
            ? `${dict.mkt_live_source.split(":")[0]}: ${data.price_date || "-"}`
            : (isBullish ? "🟢 " : (isBearish ? "🔴 " : "⚪ ")) + localizeTrend(trend, dict);
        trendPill.style.background = data.is_live || isBullish ? "#dcfce7" : (isBearish ? "#fee2e2" : "#f1f5f9");
        trendPill.style.color = data.is_live || isBullish ? "#15803d" : (isBearish ? "#b91c1c" : "#475569");
        trendPill.style.borderColor = data.is_live || isBullish ? "#86efac" : (isBearish ? "#fca5a5" : "#cbd5e1");
    }

    const mspBenchmarks = {
        "Rice": 2300, "Wheat": 2275, "Maize": 2225, "Cotton": 7121, "Sugarcane": 340,
        "Pulses": 7000, "Groundnut": 6783, "Soybean": 4892
    };
    const mspRate = data.msp_benchmark || mspBenchmarks[cropKey] || 2200;
    const diff = modalP - mspRate;

    if (mspStatus) {
        if (diff >= 0) {
            mspStatus.style.color = "#059669";
            if (currentLanguage === "te") {
                mspStatus.innerText = `కనీస మద్దతు ధర (₹${mspRate.toLocaleString()}) కంటే ₹${diff.toLocaleString()} ఎక్కువ`;
            } else if (currentLanguage === "hi") {
                mspStatus.innerText = `समर्थन मूल्य (₹${mspRate.toLocaleString()}) से ₹${diff.toLocaleString()} अधिक`;
            } else {
                mspStatus.innerText = `Trading ₹${diff.toLocaleString()} ABOVE Central MSP (₹${mspRate.toLocaleString()})`;
            }
        } else {
            mspStatus.style.color = "#b91c1c";
            if (currentLanguage === "te") {
                mspStatus.innerText = `కనీస మద్దతు ధర (₹${mspRate.toLocaleString()}) కంటే ₹${Math.abs(diff).toLocaleString()} తక్కువ`;
            } else if (currentLanguage === "hi") {
                mspStatus.innerText = `समर्थन मूल्य (₹${mspRate.toLocaleString()}) से ₹${Math.abs(diff).toLocaleString()} कम`;
            } else {
                mspStatus.innerText = `Trading ₹${Math.abs(diff).toLocaleString()} BELOW Central MSP (₹${mspRate.toLocaleString()})`;
            }
        }
    }

    if (varietyDisp) varietyDisp.innerText = variety;
    if (arrivalDisp) {
        if (arrivals === null || arrivals === undefined) {
            arrivalDisp.innerText = dict.mkt_arrivals_not_reported;
        } else if (currentLanguage === "te") {
            arrivalDisp.innerText = `రోజువారీ రాబడులు: ${arrivals} టన్నులు`;
        } else if (currentLanguage === "hi") {
            arrivalDisp.innerText = `दैनिक आवक: ${arrivals} टन`;
        } else {
            arrivalDisp.innerText = `Daily Market Arrivals: ${arrivals} Tonnes`;
        }
    }
}

// States the assumptions the yield model is fed, plus where the mandi rates come from
function renderYieldAssumptionNote() {
    const noteEl = document.getElementById("yield-assumption-note");
    if (!noteEl) return;
    const dict = I18N[currentLanguage];
    const stateName = getSelectedIconValue("state", "Telangana");
    const assumption = dict.yield_assumption
        .replace("{state}", stateName)
        .replace("{season}", "Kharif");
    const marketNote = currentYieldMarketData?.is_live ? dict.mkt_live_note : dict.mkt_reference_note;
    noteEl.innerText = `${assumption}. ${marketNote}`;
}

function initYieldPredictor() {
    // Initial fetch of live market price for default crop (Rice)
    const initCrop = getSelectedIconValue("yield-crop", "Rice");
    updateYieldLiveMarketPrice(initCrop);
    renderYieldAssumptionNote();

    const locationButton = document.getElementById("btn-yield-location");
    if (locationButton) locationButton.addEventListener("click", requestYieldLocation);

    const btn = document.getElementById("btn-predict-yield");
    if (!btn) return;

    btn.addEventListener("click", async () => {
        const dict = I18N[currentLanguage];
        const cropVal = getSelectedIconValue("yield-crop", "Rice");
        const stateVal = getSelectedIconValue("state", "Telangana");
        const acresVal = parseFloat(document.getElementById("yield-area-acres").value) || 2.5;
        latestYieldAcres = acresVal;
        const haVal = acresVal / 2.471;
        const waterType = document.getElementById("yield-water-type").value;
        const rainVal = waterType === "good" ? 1200 : 700;

        btn.disabled = true;
        btn.innerHTML = `<span class="spinner"></span> ${dict.calculating_yield}`;

        try {
            const resp = await fetch("/api/predict-yield", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    crop: cropVal,
                    state: stateVal,
                    season: "Kharif",
                    area_ha: haVal,
                    annual_rainfall_mm: rainVal,
                    fertilizer_kg_ha: 120,
                    pesticide_kg_ha: 2.5
                })
            });
            const data = await readJsonResponse(resp);
            latestYieldData = data;
            renderYieldResults(data, acresVal);
        } catch (err) {
            const box = document.getElementById("yield-results-box");
            if (box) box.style.display = "none";
            showToast(`${dict.err_generic} (${err.message})`);
        } finally {
            btn.disabled = false;
            btn.innerHTML = `💰 ${dict.btn_calc_yield}`;
        }
    });
}

function renderYieldResults(data, acres) {
    const box = document.getElementById("yield-results-box");
    if (!box) return;
    box.style.display = "block";

    const dict = I18N[currentLanguage];
    const cropKey = data.crop || getSelectedIconValue("yield-crop", "Rice");
    const mkt = data.market_intelligence || currentYieldMarketData || CROP_FALLBACK_MARKET[cropKey] || CROP_FALLBACK_MARKET["Rice"];

    // 1. Total Production Output
    const prodEl = document.getElementById("yield-total-prod-val");
    if (prodEl) {
        prodEl.innerText = `${data.total_production_quintals} ${dict.quintals_unit} (${data.total_production_tonnes} ${dict.tonnes_unit})`;
    }
    const prodSub = document.getElementById("yield-prod-sub");
    if (prodSub) {
        if (currentLanguage === "te") {
            prodSub.innerText = `${acres} ఎకరాల విస్తీర్ణానికి AI ఆధారిత చారిత్రక సగటు దిగుబడి`;
        } else if (currentLanguage === "hi") {
            prodSub.innerText = `${acres} एकड़ रकबे के लिए ऐतिहासिक कृषि डेटा आधारित अनुमानित पैदावार`;
        } else {
            prodSub.innerText = `Machine learning prediction based on historical yields for ${acres} Acres`;
        }
    }

    // 2. Live APMC Market Price of that particular crop
    const modalPrice = mkt.modal_price || 2500;
    const minPrice = mkt.min_price || Math.round(modalPrice * 0.95);
    const maxPrice = mkt.max_price || Math.round(modalPrice * 1.08);
    const primaryMandi = mkt.primary_mandi || mkt.mandi || "Warangal APMC";
    const marketLocation = mkt.market_location || primaryMandi;
    const marketDistance = Number.isFinite(mkt.primary_distance_km)
        ? ` • ${mkt.primary_distance_km} km`
        : "";
    const trendText = mkt.trend || "Stable";

    const mktPriceEl = document.getElementById("yield-res-market-price");
    if (mktPriceEl) {
        mktPriceEl.innerHTML = `₹ ${modalPrice.toLocaleString()} <span style="font-size:0.95rem; font-weight:600; color:#64748b;">${dict.mkt_per_quintal || "/ Quintal"}</span>`;
    }
    const mktSubEl = document.getElementById("yield-res-market-sub");
    if (mktSubEl) {
        mktSubEl.innerText = `${marketLocation}${marketDistance} • Range: ₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`;
    }
    const trendBadge = document.getElementById("yield-res-trend-badge");
    if (trendBadge) {
        trendBadge.innerText = localizeTrend(trendText, dict);
    }

    // 3. Cash Income at Live Market Price
    const estMarketGross = Math.round(data.total_production_quintals * modalPrice);
    const liveIncomeEl = document.getElementById("yield-live-income-val");
    if (liveIncomeEl) {
        liveIncomeEl.innerText = `₹ ${fmtINR(estMarketGross)}`;
    }
    const liveIncomeSub = document.getElementById("yield-live-income-sub");
    if (liveIncomeSub) {
        if (currentLanguage === "te") {
            liveIncomeSub.innerText = `${data.total_production_quintals} క్వింటాళ్లు × నేటి మార్కెట్ ధర ₹${modalPrice.toLocaleString()}`;
        } else if (currentLanguage === "hi") {
            liveIncomeSub.innerText = `${data.total_production_quintals} क्विंटल × आज का मंडी भाव ₹${modalPrice.toLocaleString()}`;
        } else {
            liveIncomeSub.innerText = `${data.total_production_quintals} Quintals × Live APMC Rate ₹${modalPrice.toLocaleString()}/Q`;
        }
    }

    // 4. Govt Minimum Support Price (MSP) Revenue
    const mspBenchmarks = {
        "Rice": 2300, "Wheat": 2275, "Maize": 2225, "Cotton": 7121, "Sugarcane": 340,
        "Pulses": 7000, "Groundnut": 6783, "Soybean": 4892
    };
    const mspRate = mkt.msp_benchmark || mspBenchmarks[cropKey] || 2200;
    const estMspGross = Math.round(data.total_production_quintals * mspRate);

    const revEl = document.getElementById("yield-est-revenue");
    if (revEl) revEl.innerText = `₹ ${fmtINR(estMspGross)}`;

    const mspSub = document.getElementById("yield-msp-sub");
    if (mspSub) {
        if (currentLanguage === "te") {
            mspSub.innerText = `${acres} ఎకరాలకు కేంద్ర ప్రభుత్వ మద్దతు ధర క్వింటాలుకు ₹${mspRate.toLocaleString()} ప్రకారం`;
        } else if (currentLanguage === "hi") {
            mspSub.innerText = `${acres} एकड़ के लिए केंद्र सरकार के समर्थन मूल्य ₹${mspRate.toLocaleString()}/क्विंटल के आधार पर`;
        } else {
            mspSub.innerText = `Based on Central MSP ₹${mspRate.toLocaleString()} / Quintal`;
        }
    }

    // 5. Market Advantage Banner
    const diffTotal = estMarketGross - estMspGross;
    const diffPerQ = modalPrice - mspRate;
    const advIcon = document.getElementById("yield-advantage-icon");
    const advTitle = document.getElementById("yield-advantage-title");
    const advDesc = document.getElementById("yield-advantage-desc");
    const advBanner = document.getElementById("yield-market-advantage-banner");

    if (diffTotal >= 0) {
        if (advBanner) advBanner.style.borderLeftColor = "#10b981";
        if (advIcon) advIcon.innerText = "📈";
        if (advTitle) {
            advTitle.style.color = "#065f46";
            if (currentLanguage === "te") {
                advTitle.innerText = `మార్కెట్ ప్రీమియం లాభం: అదనంగా +₹${diffTotal.toLocaleString()}`;
            } else if (currentLanguage === "hi") {
                advTitle.innerText = `मंडी में अधिक मुनाफा: अतिरिक्त +₹${diffTotal.toLocaleString()}`;
            } else {
                advTitle.innerText = `Open Mandi Premium Advantage: +₹${diffTotal.toLocaleString()} Extra Profit`;
            }
        }
        if (advDesc) {
            if (currentLanguage === "te") {
                advDesc.innerText = `నేటి ${primaryMandi} మార్కెట్ ధర కనీస మద్దతు ధర కంటే క్వింటాలుకు ₹${diffPerQ.toLocaleString()} ఎక్కువగా ఉంది. నేరుగా మార్కెట్లో అమ్మడం ద్వారా మీకు ₹${diffTotal.toLocaleString()} అదనపు నగదు లాభం వస్తుంది.`;
            } else if (currentLanguage === "hi") {
                advDesc.innerText = `आज का ${primaryMandi} मंडी भाव समर्थन मूल्य (MSP) से ₹${diffPerQ.toLocaleString()} अधिक है। खुले बाजार में बेचने पर आपको ₹${diffTotal.toLocaleString()} का अतिरिक्त नकद लाभ मिलेगा।`;
            } else {
                advDesc.innerText = `Today's ${primaryMandi} price is ₹${diffPerQ.toLocaleString()}/Q above Govt MSP. Selling in open Mandi earns you ₹${diffTotal.toLocaleString()} more than the MSP safety floor.`;
            }
        }
    } else {
        if (advBanner) advBanner.style.borderLeftColor = "#f59e0b";
        if (advIcon) advIcon.innerText = "🛡️";
        if (advTitle) {
            advTitle.style.color = "#b45309";
            if (currentLanguage === "te") {
                advTitle.innerText = `కనీస మద్దతు ధర (MSP) కేంద్రాలలో అమ్మడం శ్రేయస్కరం: +₹${Math.abs(diffTotal).toLocaleString()} రక్షణ`;
            } else if (currentLanguage === "hi") {
                advTitle.innerText = `सरकारी खरीद केंद्र (MSP) पर बेचना अधिक लाभदायक: +₹${Math.abs(diffTotal).toLocaleString()} का लाभ`;
            } else {
                advTitle.innerText = `Government Procurement Recommended: +₹${Math.abs(diffTotal).toLocaleString()} Protection`;
            }
        }
        if (advDesc) {
            if (currentLanguage === "te") {
                advDesc.innerText = `ఓపెన్ మార్కెట్ ధర కనీస మద్దతు ధర కంటే క్వింటాలుకు ₹${Math.abs(diffPerQ).toLocaleString()} తక్కువగా ఉంది. నష్టపోకుండా ఉండటానికి ప్రభుత్వ కొనుగోలు కేంద్రాలలో (PPC) అమ్మడం ద్వారా ₹${Math.abs(diffTotal).toLocaleString()} ఎక్కువ ఆదాయం పొందండి.`;
            } else if (currentLanguage === "hi") {
                advDesc.innerText = `मंडी भाव समर्थन मूल्य से ₹${Math.abs(diffPerQ).toLocaleString()} कम चल रहा है। संकटपूर्ण बिक्री से बचने के लिए सरकारी खरीद केंद्र (PPC) पर बेचें जिससे आपको ₹${Math.abs(diffTotal).toLocaleString()} अधिक मिलेंगे।`;
            } else {
                advDesc.innerText = `Open market price is trading ₹${Math.abs(diffPerQ).toLocaleString()}/Q below MSP. We strongly recommend selling at Govt Procurement Centers (PPC) to secure ₹${Math.abs(diffTotal).toLocaleString()} extra income.`;
            }
        }
    }

    // 6. Agronomist Selling Advice (rebuilt from the trend so it follows the UI language)
    const adviceDesc = document.getElementById("yield-selling-advice-desc");
    if (adviceDesc) {
        const trendLower = (trendText || "").toLowerCase();
        if (trendLower.includes("bullish")) adviceDesc.innerText = dict.mkt_advice_up;
        else if (trendLower.includes("bearish")) adviceDesc.innerText = dict.mkt_advice_down;
        else adviceDesc.innerText = dict.mkt_advice_flat;
    }

    // 7. Prepare Localized Speech Utterance
    const localizedCrop = dict[`ycrop_${cropKey.toLowerCase()}`] || cropKey;
    if (currentLanguage === "te") {
        latestYieldSpeech = `మీ ${acres} ఎకరాల ${localizedCrop} పంటకు సుమారు ${data.total_production_quintals} క్వింటాళ్ల దిగుబడి అంచనా. ${primaryMandi} మార్కెట్‌లో నేటి లైవ్ ధర క్వింటాలుకు ₹${modalPrice}. మార్కెట్లో అమ్మడం ద్వారా మీ అంచనా నగదు రాబడి ₹${estMarketGross}.`;
    } else if (currentLanguage === "hi") {
        latestYieldSpeech = `आपके ${acres} एकड़ ${localizedCrop} के खेत से लगभग ${data.total_production_quintals} क्विंटल पैदावार का अनुमान है। ${primaryMandi} में आज का लाइव मंडी भाव ₹${modalPrice} प्रति क्विंटल है। बाजार में बेचने पर आपकी अनुमानित नकद आय ₹${estMarketGross} होगी।`;
    } else {
        latestYieldSpeech = `For your ${acres} acres of ${localizedCrop}, expected yield is ${data.total_production_quintals} Quintals. Today's live APMC price at ${primaryMandi} is ₹${modalPrice} per quintal. Estimated cash income from market sale is ₹${estMarketGross}.`;
    }

    const navHeight = document.querySelector('.top-nav')?.offsetHeight || 75;
    const rect = box.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
        top: Math.max(0, rect.top + scrollTop - navHeight - 16),
        behavior: 'smooth'
    });
}

// ==========================================
// 12. HOME TAB: TODAY'S WEATHER & SPRAY ADVISORY
// ==========================================
async function loadHomeWeather() {
    const tempEl = document.getElementById("dash-weather-temp");
    if (!tempEl) return;

    const dict = I18N[currentLanguage];
    const stateName = getSelectedIconValue("state", "Telangana");
    const condEl = document.getElementById("dash-weather-cond");
    const metaEl = document.getElementById("dash-weather-meta");

    try {
        const resp = await fetch(`/api/weather?district=Warangal&state=${encodeURIComponent(stateName)}`);
        const data = await readJsonResponse(resp);
        const current = data.current || {};
        const forecast = data.forecast || [];

        tempEl.innerText = current.temp || "--";

        if (condEl) {
            condEl.innerText = [current.condition, current.humidity, current.wind]
                .filter(Boolean)
                .join(" • ");
        }

        if (metaEl) {
            const now = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
            metaEl.innerText = `${data.location || stateName} • ${dict.weather_updated} ${now}`;
        }

        // Rain probability in the next three days decides the spray advice
        const rainSoon = forecast
            .slice(0, 3)
            .some(day => parseInt(day.rain_prob, 10) >= 40);

        const headingEl = document.getElementById("dash-advice-heading");
        const descEl = document.getElementById("dash-advice-desc");
        if (headingEl) {
            headingEl.innerText = rainSoon
                ? `🌧️ ${dict.weather_rain_soon}`
                : `☀️ ${dict.weather_no_rain}`;
        }
        if (descEl) {
            descEl.innerText = rainSoon
                ? `🚫 ${dict.weather_spray_hold}`
                : `✅ ${dict.weather_spray_ok}`;
        }
    } catch (err) {
        tempEl.innerText = "--";
        if (condEl) condEl.innerText = dict.weather_unavailable;
        if (metaEl) metaEl.innerText = "";
    }
}

// ==========================================
// 13. AI AGRONOMIST CHAT
// ==========================================
let chatHistory = [];

function appendChatBubble(roleClass, text) {
    const list = document.getElementById("chat-messages");
    if (!list) return null;
    const bubble = document.createElement("div");
    bubble.className = `message-bubble ${roleClass}`;
    bubble.innerText = text;
    list.appendChild(bubble);
    list.scrollTop = list.scrollHeight;
    return bubble;
}

function seedChatGreeting() {
    const list = document.getElementById("chat-messages");
    if (!list) return;
    list.innerHTML = "";
    appendChatBubble("bot", I18N[currentLanguage].chat_greeting);
}

async function sendChatMessage() {
    const input = document.getElementById("chat-input");
    const btn = document.getElementById("btn-chat-send");
    if (!input) return;

    const message = input.value.trim();
    if (!message) {
        input.focus();
        return;
    }

    const dict = I18N[currentLanguage];
    const languageNames = { en: "English", te: "Telugu", hi: "Hindi" };

    appendChatBubble("user", message);
    const priorHistory = chatHistory.slice(-6);
    chatHistory.push({ role: "user", content: message });
    input.value = "";

    const thinking = appendChatBubble("bot thinking", dict.chat_thinking);
    if (btn) btn.disabled = true;

    try {
        const resp = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: message,
                language: languageNames[currentLanguage] || "English",
                history: priorHistory
            })
        });
        const data = await readJsonResponse(resp);
        const reply = (data && data.reply) ? data.reply : dict.err_generic;

        if (thinking) thinking.remove();
        appendChatBubble("bot", reply);
        chatHistory.push({ role: "assistant", content: reply });
    } catch (err) {
        if (thinking) thinking.remove();
        appendChatBubble("bot error", `${dict.err_generic} (${err.message})`);
    } finally {
        if (btn) btn.disabled = false;
        if (input) input.focus();
    }
}

function initChat() {
    const input = document.getElementById("chat-input");
    const btn = document.getElementById("btn-chat-send");
    if (!input || !btn) return;

    seedChatGreeting();
    btn.addEventListener("click", sendChatMessage);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendChatMessage();
        }
    });
}

// ==========================================
// 14. FERTILIZER BAGS & IRRIGATION PLANNER
// ==========================================
function initResourcePlanner() {
    const btn = document.getElementById("btn-plan-resources");
    if (!btn) return;

    btn.addEventListener("click", async () => {
        const dict = I18N[currentLanguage];
        const num = (id, fallback) => {
            const value = parseFloat(document.getElementById(id)?.value);
            return Number.isFinite(value) ? value : fallback;
        };

        const payload = {
            crop: document.getElementById("res-crop")?.value || "Rice",
            soil_n: num("res-n", 80),
            soil_p: num("res-p", 35),
            soil_k: num("res-k", 40),
            area_acres: num("res-area", 2),
            soil_type: document.getElementById("res-soil")?.value || "Clay Loam",
            growth_stage: document.getElementById("res-stage")?.value || "Vegetative / Tillering",
            soil_moisture_pct: num("res-moisture", 45),
            daily_temp: num("res-temp", 31)
        };

        btn.disabled = true;
        const originalLabel = btn.innerHTML;
        btn.innerHTML = `<span class="spinner"></span> ${dict.btn_plan_resources}`;

        try {
            const resp = await fetch("/api/resource-advice", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const data = await readJsonResponse(resp);
            renderResourcePlan(data);
        } catch (err) {
            const box = document.getElementById("resource-results");
            if (box) box.style.display = "none";
            showToast(`${dict.err_generic} (${err.message})`);
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalLabel;
        }
    });
}

function renderResourcePlan(data) {
    const box = document.getElementById("resource-results");
    if (!box) return;

    const dict = I18N[currentLanguage];
    const fert = data.fertilizer_plan || {};
    const rec = fert.fertilizer_recommendation || {};
    const irrig = data.irrigation_plan || {};

    const fertBody = document.getElementById("fert-result-body");
    if (fertBody) {
        fertBody.innerHTML = `
            <div class="res-line">🌾 <strong>${dict.res_urea}</strong><br>${rec.urea_50kg_bags ?? "-"} bags (${rec.urea_kg ?? "-"} kg)</div>
            <div class="res-line">🌱 <strong>${dict.res_dap}</strong><br>${rec.dap_50kg_bags ?? "-"} bags (${rec.dap_kg ?? "-"} kg)</div>
            <div class="res-line">🍂 <strong>${dict.res_mop}</strong><br>${rec.mop_50kg_bags ?? "-"} bags (${rec.mop_kg ?? "-"} kg)</div>
            <div class="res-line">🐄 <strong>${dict.res_fym}</strong><br>${rec.organic_fym_tons ?? "-"}</div>
        `;
    }

    const irrigBody = document.getElementById("irrig-result-body");
    if (irrigBody) {
        irrigBody.innerHTML = `
            <div class="res-line">${irrig.urgency || ""}</div>
            <div class="res-line">🚜 <strong>${dict.res_motor}</strong><br>${irrig.runtime_hours ?? 0} ${dict.res_hours} (${irrig.motor_name || ""})</div>
            <div class="res-line">💧 <strong>${dict.res_depth}</strong><br>${irrig.irrigation_depth_mm ?? 0} ${dict.res_mm}</div>
            <div class="res-line">📅 <strong>${dict.res_interval}</strong><br>${irrig.recommended_interval_days ?? "-"} ${dict.res_days}</div>
            <div class="res-line">🕒 ${irrig.water_saving_tip || ""}</div>
        `;
    }

    const scheduleList = document.getElementById("fert-schedule-list");
    if (scheduleList) {
        scheduleList.innerHTML = (fert.split_application_schedule || []).map(step => `
            <li style="margin-bottom:8px;"><strong>${step.stage}</strong><br>${step.details}</li>
        `).join("");
    }

    const noteEl = document.getElementById("resource-assumption-note");
    if (noteEl) noteEl.innerText = dict.plan_english_note;

    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth", block: "start" });
}

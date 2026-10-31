/**
 * PhytoScan AI - Plant Disease & Agro-Telemetry Knowledge Base
 * Rich diagnostic dataset covering major crops, pathogens, treatments, and IoT/Satellite models.
 */

const PLANT_DISEASES = {
  tomato_late_blight: {
    id: "tomato_late_blight",
    name: "Late Blight",
    plantName: "Tomato (Solanum lycopersicum)",
    scientificName: "Phytophthora infestans",
    category: "Oomycete / Water Mold",
    severity: "Critical",
    urgency: "Immediate Action Required (< 24 hrs)",
    defaultConfidence: 97.4,
    colorTheme: "#ef4444",
    symptoms: [
      "Irregular dark brown water-soaked lesions on leaves and stems",
      "Pale green/yellow chlorotic halos surrounding lesions",
      "Fuzzy white mold/spores visible on the underside of leaves during high humidity",
      "Rapid foliage collapse and greasy brown rot spreading to fruit surfaces"
    ],
    causes: [
      "Prolonged leaf wetness exceeding 6-8 continuous hours",
      "Cool to moderate temperatures (16°C – 22°C) paired with relative humidity > 88%",
      "Wind-blown sporangia from neighboring infected fields or volunteer cull piles"
    ],
    organicTreatments: [
      "Apply Copper Hydroxide or Liquid Copper Octanoate spray thoroughly on leaf undersides",
      "Bio-fungicide drench with Bacillus subtilis (Serenade ASO) or Trichoderma harzianum",
      "Immediate physical pruning and deep burial/incineration of infected foliage (never compost)",
      "Spray cold-pressed raw Neem oil (0.5% v/v) mixed with potassium bicarbonate as an anti-sporulant"
    ],
    chemicalTreatments: [
      "Mancozeb 75% WP @ 2.5 g/L as protective barrier spray every 5-7 days",
      "Cymoxanil + Mancozeb (Curzate 60 WG) systemic curative treatment @ 2.0 g/L",
      "Metalaxyl-M (Ridomil Gold MZ) @ 2.5 g/L if disease has progressed into stem tissue",
      "Rotate with Dimethomorph or Azoxystrobin to prevent fungicide resistance buildup"
    ],
    prevention: [
      "Switch entirely to sub-surface drip irrigation to keep canopy dry",
      "Maintain wide plant spacing (at least 60-75 cm) for optimal airflow and sunlight penetration",
      "Plant certified disease-resistant hybrid cultivars (e.g., Defiant PhR, Mountain Magic)",
      "Strict 3-4 year crop rotation away from all Solanaceae family plants (potatoes, eggplants, peppers)"
    ],
    sensorThresholds: {
      minHumidity: 85,
      minLeafWetnessHours: 5,
      tempRange: [15, 23],
      riskDescription: "Favorable conditions: high humidity and extended leaf moisture"
    },
    lesionColor: "#3f2010",
    haloColor: "#d97706"
  },

  tomato_early_blight: {
    id: "tomato_early_blight",
    name: "Early Blight",
    plantName: "Tomato (Solanum lycopersicum)",
    scientificName: "Alternaria solani",
    category: "Fungal",
    severity: "High",
    urgency: "Action Required within 48 hrs",
    defaultConfidence: 95.8,
    colorTheme: "#f97316",
    symptoms: [
      "Concentric circular brown-to-black rings resembling a target board or tree rings",
      "Starts on oldest lower leaves and progressively moves upward into the canopy",
      "Surrounding leaf tissue turns chlorotic bright yellow, leading to premature defoliation",
      "Dark sunken leathery lesions at the stem end of developing tomato fruits"
    ],
    causes: [
      "Fungus overwinters in plant debris and splashes up from soil during heavy rain or overhead watering",
      "Warm temperatures (24°C – 30°C) with alternating wet and dry periods",
      "Plant stress caused by heavy fruit load, nitrogen deficiency, or nematode damage"
    ],
    organicTreatments: [
      "Apply protective Copper octanoate or Bordeaux mixture at initial spotting",
      "Bio-fungicide spray containing Streptomyces lydicus or Bacillus amyloliquefaciens",
      "Apply organic straw mulch layer (7-10 cm) to stop soil-splash inoculation",
      "Strip lower leaves up to 45 cm above soil level to break splash transmission"
    ],
    chemicalTreatments: [
      "Chlorothalonil (Daconil 2787) @ 2.0 mL/L as preventative canopy spray",
      "Azoxystrobin (Amistar) @ 1.0 mL/L or Pyraclostrobin for broad-spectrum protection",
      "Difenoconazole (Score 250 EC) @ 0.5 mL/L as curative systemic treatment"
    ],
    prevention: [
      "Stake and prune indeterminate vines to maintain vertical growth and dry foliage",
      "Sanitize all pruning shears with 70% isopropyl alcohol between plants",
      "Implement drip irrigation with automated soil moisture sensor cutoffs"
    ],
    sensorThresholds: {
      minHumidity: 75,
      minLeafWetnessHours: 4,
      tempRange: [22, 32],
      riskDescription: "Warm spells with cyclical dew formation trigger conidial germination"
    },
    lesionColor: "#451a03",
    haloColor: "#eab308"
  },

  tomato_yellow_curl: {
    id: "tomato_yellow_curl",
    name: "Yellow Leaf Curl Virus (TYLCV)",
    plantName: "Tomato (Solanum lycopersicum)",
    scientificName: "Begomovirus (TYLCV)",
    category: "Viral (Vector-borne)",
    severity: "Critical",
    urgency: "Immediate Vector Control & Quarantine",
    defaultConfidence: 96.2,
    colorTheme: "#eab308",
    symptoms: [
      "Severe upward cupping and curling of leaf margins with puckered leaf texture",
      "Marked chlorosis (bright yellowing) along leaf veins and edges",
      "Severe stunting of new apical shoots giving a bushy, bunched appearance",
      "Total flower drop and complete failure of fruit setting"
    ],
    causes: [
      "Exclusively transmitted by the silverleaf whitefly (Bemisia tabaci)",
      "Warm dry conditions favoring explosive whitefly reproduction cycles",
      "Presence of infected weed reservoirs (nightshades, mallows) nearby"
    ],
    organicTreatments: [
      "Install yellow sticky traps (1 trap per 10 m²) throughout greenhouse and field borders",
      "Foliar spray of cold-pressed Neem oil (3% emulsion) with insecticidal potassium soap",
      "Release predatory biological controls: Encarsia formosa wasps or Delphastus catalinae beetles",
      "Immediate rogueing (uprooting) and bag-sealing of symptomatic plants"
    ],
    chemicalTreatments: [
      "Imidacloprid 17.8% SL @ 0.5 mL/L or Thiamethoxam 25% WG as systemic root drench",
      "Spirochem/Spiromesifen 22.9% SC @ 1.0 mL/L for effective whitefly nymph suppression",
      "Flonicamid 50% WG @ 0.3 g/L for targeted sucking insect inhibition without harming bees"
    ],
    prevention: [
      "Cover greenhouse vents with 50-mesh anti-insect exclusionary netting",
      "Apply reflective silver UV-reflective plastic mulch to disorient incoming whiteflies",
      "Eradicate broadleaf weeds within a 50-meter perimeter of crop plots"
    ],
    sensorThresholds: {
      minHumidity: 40,
      minLeafWetnessHours: 0,
      tempRange: [26, 36],
      riskDescription: "Dry, warm air accelerates Bemisia tabaci vector flight activity"
    },
    lesionColor: "#ca8a04",
    haloColor: "#fde047"
  },

  potato_late_blight: {
    id: "potato_late_blight",
    name: "Late Blight (Irish Blight)",
    plantName: "Potato (Solanum tuberosum)",
    scientificName: "Phytophthora infestans",
    category: "Oomycete / Water Mold",
    severity: "Critical",
    urgency: "Immediate Action Required (< 24 hrs)",
    defaultConfidence: 98.1,
    colorTheme: "#dc2626",
    symptoms: [
      "Dark purple-black necrotic patches appearing rapidly on upper leaf blades",
      "White velvet sporulation along lesion margins on lower leaf surface during morning dew",
      "Blackened rotting stems causing whole vine collapse in wet conditions",
      "Copper-brown dry granular rot extending into tuber flesh beneath skin"
    ],
    causes: [
      "Infected seed tubers planted in previous season",
      "Relative humidity > 90% for consecutive nights with temperatures between 10°C - 20°C",
      "Airborne sporangial showers traveling up to several kilometers"
    ],
    organicTreatments: [
      "Bordeaux Mixture (1:1:100 copper sulfate and hydrated lime) spray",
      "Copper hydroxide 53.8% WG applied prior to anticipated rainfall events",
      "Top-kill and flail vines 2-3 weeks prior to harvest to prevent tuber contact"
    ],
    chemicalTreatments: [
      "Fluopicolide + Propamocarb hydrochloride (Infinito) @ 1.5 mL/L",
      "Mandipropamid (Revus 250 SC) @ 0.6 mL/L with surfactant",
      "Zoxamide + Mancozeb (Gavel 75 DF) @ 2.0 g/L"
    ],
    prevention: [
      "Use only certified disease-free seed potatoes",
      "Hill up soil around stems to build deep protective soil barrier over developing tubers",
      "Monitor agricultural IoT leaf wetness sensors for warning trigger thresholds"
    ],
    sensorThresholds: {
      minHumidity: 90,
      minLeafWetnessHours: 8,
      tempRange: [12, 21],
      riskDescription: "Extreme blight risk: sustained high relative humidity and cold dews"
    },
    lesionColor: "#1c1917",
    haloColor: "#a3e635"
  },

  corn_leaf_blight: {
    id: "corn_leaf_blight",
    name: "Northern Corn Leaf Blight (NCLB)",
    plantName: "Corn / Maize (Zea mays)",
    scientificName: "Exserohilum turcicum",
    category: "Fungal",
    severity: "High",
    urgency: "Action Required within 72 hrs",
    defaultConfidence: 94.9,
    colorTheme: "#ea580c",
    symptoms: [
      "Long, elliptical, cigar-shaped grayish-green to tan lesions (2.5 to 15 cm long)",
      "Lesions parallel to leaf veins with distinct defined borders",
      "Dark olive-green soot-like fungal spores forming within lesions in damp weather",
      "Extensive leaf blighting giving canopy an overall scorched, frosted appearance"
    ],
    causes: [
      "Overwinters in infested corn residue left on soil surface",
      "Extended dew periods (6-12 hours) with moderate temperatures (18°C – 27°C)",
      "Continuous monoculture corn cropping without minimum rotation"
    ],
    organicTreatments: [
      "Foliar spray with Bacillus amyloliquefaciens strain D747",
      "Deep autumn moldboard plowing to bury crop residues deeper than 15 cm",
      "Spray seaweed extract and silicon bio-stimulants to thicken leaf epidermis"
    ],
    chemicalTreatments: [
      "Azoxystrobin + Propiconazole (Quilt Xcel) @ 1.0 mL/L at tassel emergence (VT stage)",
      "Pyraclostrobin + Fluxapyroxad (Priaxor) @ 0.5 mL/L",
      "Trifloxystrobin + Prothioconazole (Stratego YLD) @ 0.6 mL/L"
    ],
    prevention: [
      "Select corn hybrids possessing Ht1, Ht2, or HtN multi-genic resistance traits",
      "Implement minimum 2-year rotation with soybeans, alfalfa, or small grains",
      "Optimize nitrogen fertilization to avoid canopy vegetative stress"
    ],
    sensorThresholds: {
      minHumidity: 80,
      minLeafWetnessHours: 6,
      tempRange: [18, 27],
      riskDescription: "Moderate temperatures with heavy night dew promote spore release"
    },
    lesionColor: "#78350f",
    haloColor: "#fef08a"
  },

  corn_common_rust: {
    id: "corn_common_rust",
    name: "Common Rust",
    plantName: "Corn / Maize (Zea mays)",
    scientificName: "Puccinia sorghi",
    category: "Fungal",
    severity: "Moderate",
    urgency: "Monitor & Targeted Treatment",
    defaultConfidence: 96.5,
    colorTheme: "#d97706",
    symptoms: [
      "Oval to elongate reddish-brown cinnamon pustules (uredinia) on both leaf surfaces",
      "Pustules erupt through the leaf epidermis releasing powdery rusty-brown spores",
      "Yellow halos developing around clustered pustules",
      "Pustules turn brownish-black later in season as teliospores form"
    ],
    causes: [
      "Spores carried northward by wind currents from subtropical regions each spring",
      "High relative humidity (> 95%) and cool temperatures (16°C – 25°C)",
      "Dense plant populations with low air movement"
    ],
    organicTreatments: [
      "Spray wettable sulfur (80% WP) @ 3.0 g/L early in disease development",
      "Bio-fungicide formulation based on Bacillus subtilis",
      "Ensure balanced soil potassium levels to improve natural plant cell wall resilience"
    ],
    chemicalTreatments: [
      "Azoxystrobin + Difenoconazole @ 1.0 mL/L",
      "Pyraclostrobin (Headline) @ 0.75 mL/L",
      "Tebuconazole 250 EC @ 1.0 mL/L applied at early silking if disease reaches ear leaf"
    ],
    prevention: [
      "Plant rust-resistant hybrid varieties carrying Rp-resistance genes",
      "Schedule early spring planting to avoid peak mid-summer airborne spore loads",
      "Scout lower leaves before tassel emergence"
    ],
    sensorThresholds: {
      minHumidity: 88,
      minLeafWetnessHours: 5,
      tempRange: [16, 25],
      riskDescription: "Cool, cloudy, and humid days foster rapid urediniospore germination"
    },
    lesionColor: "#9a3412",
    haloColor: "#fbbf24"
  },

  apple_scab: {
    id: "apple_scab",
    name: "Apple Scab",
    plantName: "Apple (Malus domestica)",
    scientificName: "Venturia inaequalis",
    category: "Fungal",
    severity: "High",
    urgency: "Action Required within 48 hrs",
    defaultConfidence: 97.0,
    colorTheme: "#65a30d",
    symptoms: [
      "Olive-green to velvety dark brown circular lesions on upper leaf surfaces",
      "Leaf tissue becomes puckered, distorted, and curls downward around spots",
      "Severe infection causes premature yellowing and massive summer leaf drop",
      "Rough, corky, dark brown scabby lesions on apple skin causing fruit cracking"
    ],
    causes: [
      "Ascomycete fungus overwintering on fallen apple leaf litter beneath trees",
      "Spring ascospore release triggered by rain events during bud break and bloom",
      "Prolonged leaf wetness of 9-24 hours at 15°C – 24°C (Mills Infection Period)"
    ],
    organicTreatments: [
      "Liquid Lime Sulfur spray applied during dormant and silver-tip stages",
      "Potassium Bicarbonate (Armicarb 85) applied within 24-36 hrs of wetting event",
      "Shred or vacuum fallen orchard leaves in autumn and spray 5% agricultural urea to accelerate leaf decomposition"
    ],
    chemicalTreatments: [
      "Captan 50 WP @ 2.5 g/L protective fungicide before forecasted rains",
      "Myclobutanil (Rally 40 WSP) @ 0.5 g/L with 72-hour kickback curative activity",
      "Fludioxonil + Cyprodinil (Inspire Super) @ 0.8 mL/L"
    ],
    prevention: [
      "Prune apple tree canopies annually with open-center or central leader architecture to maximize airflow",
      "Plant scab-resistant cultivars (e.g., Honeycrisp, Enterprise, Liberty, GoldRush)",
      "Use overhead weather station and wetness sensors to calculate real-time Mills Period infection indices"
    ],
    sensorThresholds: {
      minHumidity: 85,
      minLeafWetnessHours: 9,
      tempRange: [15, 24],
      riskDescription: "Mills Table Threshold exceeded: persistent leaf moisture allows ascospores to penetrate cuticle"
    },
    lesionColor: "#365314",
    haloColor: "#bef264"
  },

  apple_black_rot: {
    id: "apple_black_rot",
    name: "Apple Black Rot (Frogeye Leaf Spot)",
    plantName: "Apple (Malus domestica)",
    scientificName: "Botryosphaeria obtusa",
    category: "Fungal",
    severity: "Moderate to High",
    urgency: "Prune & Spray within 3-4 days",
    defaultConfidence: 95.1,
    colorTheme: "#78350f",
    symptoms: [
      "Small purple specks that enlarge into circular spots with light tan centers and purple margins ('frogeye' spots)",
      "Black fungal fruiting bodies (pycnidia) visible as tiny black pepper dots inside center of spots",
      "Firm, dark brown decay ring concentric bands on ripening fruit",
      "Rough, sunken, reddish-brown bark cankers on limbs and branches"
    ],
    causes: [
      "Inoculum overwinters in dead wood, branch cankers, and mummified fruits left hanging on branches",
      "Spores dispersed by splashing rain and warm temperatures (20°C – 28°C)",
      "Insect wounds, hail damage, or fire blight strikes providing pathogen entry points"
    ],
    organicTreatments: [
      "Meticulous winter pruning of dead wood, limb cankers, and removal of all mummified fruits",
      "Fixed copper spray applied at 1/2-inch green bud stage",
      "Application of bio-fungicide Bacillus subtilis during fruit sizing"
    ],
    chemicalTreatments: [
      "Thiophanate-methyl (Topsin-M 70 WP) @ 1.0 g/L",
      "Kresoxim-methyl (Sovran) @ 0.4 g/L",
      "Mancozeb 75% WP @ 2.0 g/L applied from pink bud through petal fall"
    ],
    prevention: [
      "Collect and incinerate all orchard prunings and fallen mummies",
      "Maintain active codling moth and curculio insect control to prevent fruit punctures",
      "Ensure proper fertilization to maintain tree vigor without excessive succulent vegetative growth"
    ],
    sensorThresholds: {
      minHumidity: 80,
      minLeafWetnessHours: 6,
      tempRange: [20, 28],
      riskDescription: "Warm rain events promote pycnidiospore discharge from limb cankers"
    },
    lesionColor: "#451a03",
    haloColor: "#c2410c"
  },

  grape_downy_mildew: {
    id: "grape_downy_mildew",
    name: "Grape Downy Mildew",
    plantName: "Grapevine (Vitis vinifera)",
    scientificName: "Plasmopara viticola",
    category: "Oomycete / Water Mold",
    severity: "Critical",
    urgency: "Immediate Action Required (< 24 hrs)",
    defaultConfidence: 97.8,
    colorTheme: "#059669",
    symptoms: [
      "Translucent yellowish-green 'oil spots' appearing on upper leaf surfaces",
      "Dense, snow-white downy fungal growth on the underside of oil spots in damp mornings",
      "Young shoots become thickened, curled, and covered with white sporulation",
      "Infected berries turn grayish-brown, shrivel into hard leather mummies, and drop off"
    ],
    causes: [
      "Oospores overwinter in decaying leaf litter on vineyard floor",
      "Triggered by the classic '10:10:24' rule: 10 mm rainfall, 10°C minimum temperature over 24 hours",
      "High humidity (> 90%) and nocturnal dew providing water film for zoospore motility"
    ],
    organicTreatments: [
      "Copper oxychloride or Bordeaux mixture spray before forecasted rain events",
      "Potassium phosphite systemic bio-stimulant to induce systemic acquired resistance (SAR)",
      "Vine canopy leaf pulling in the fruit zone to increase solar exposure and wind dry-off"
    ],
    chemicalTreatments: [
      "Zoxamide + Mancozeb (Gavel) @ 2.0 g/L",
      "Ametoctradin + Dimethomorph (Zampro) @ 1.0 mL/L",
      "Metalaxyl-M or Cyazofamid (Ranman 400 SC) @ 0.5 mL/L"
    ],
    prevention: [
      "Train vines using VSP (Vertical Shoot Positioning) trellis systems for maximum sun penetration",
      "Implement cover cropping to minimize water splashing from vineyard soil",
      "Calibrate wireless microclimate sensors to track 10:10:24 infection windows"
    ],
    sensorThresholds: {
      minHumidity: 90,
      minLeafWetnessHours: 6,
      tempRange: [18, 25],
      riskDescription: "Severe downy mildew alert: 10:10 rule triggered with wet canopy"
    },
    lesionColor: "#a3e635",
    haloColor: "#fef08a"
  },

  grape_black_rot: {
    id: "grape_black_rot",
    name: "Grape Black Rot",
    plantName: "Grapevine (Vitis vinifera)",
    scientificName: "Guignardia bidwellii",
    category: "Fungal",
    severity: "High",
    urgency: "Action Required within 48 hrs",
    defaultConfidence: 96.1,
    colorTheme: "#431407",
    symptoms: [
      "Circular reddish-brown leaf spots with dark brown margins and tiny black pycnidia speckling",
      "Elongated black lesions with purple borders on young canes and tendrils",
      "Berries show light brown soft rot spots that rapidly engulf entire berry within 48 hours",
      "Infected berries shrivel into hard, black, wrinkly mummified raisins firmly attached to cluster"
    ],
    causes: [
      "Inoculum source: mummified berries left hanging on trellis or resting on ground",
      "Warm, humid conditions (21°C – 29°C) with 7-12 hours of leaf wetness",
      "Spring rains releasing both ascospores and pycnidiospores"
    ],
    organicTreatments: [
      "Flawless removal of all mummified clusters during winter pruning",
      "Copper-based fungicides with bio-sulfur applied from bud burst",
      "Bacillus subtilis applications at pre-bloom and post-bloom stages"
    ],
    chemicalTreatments: [
      "Myclobutanil (Nova 40 W) @ 0.5 g/L",
      "Kresoxim-methyl + Boscalid @ 0.8 g/L",
      "Mancozeb 75% WP @ 2.5 g/L up to 66 days before harvest"
    ],
    prevention: [
      "Prune out diseased canes and till fallen leaves into soil before bud break",
      "Maintain strict weed control under vine rows to enhance ground air circulation",
      "Apply protective fungicides immediately prior to bloom through 4 weeks post-bloom"
    ],
    sensorThresholds: {
      minHumidity: 82,
      minLeafWetnessHours: 7,
      tempRange: [21, 29],
      riskDescription: "Optimum fungal temperature and prolonged vine moisture"
    },
    lesionColor: "#27100b",
    haloColor: "#ea580c"
  },

  rice_bacterial_blight: {
    id: "rice_bacterial_blight",
    name: "Bacterial Leaf Blight (BLB)",
    plantName: "Rice / Paddy (Oryza sativa)",
    scientificName: "Xanthomonas oryzae pv. oryzae",
    category: "Bacterial",
    severity: "Critical",
    urgency: "Immediate Field Water Management (< 24 hrs)",
    defaultConfidence: 98.3,
    colorTheme: "#ca8a04",
    symptoms: [
      "Water-soaked to yellowish-white wavy stripes starting at leaf tips and margins",
      "Lesions enlarge rapidly, dry up, and turn bleach-white to grayish-white",
      "Milky bacterial exudate/ooze drops form on young lesions early morning, drying into amber beads",
      "Severe 'kresek' systemic phase causing whole seedling wilting and death"
    ],
    causes: [
      "Bacteria enter through natural leaf openings (hydathodes) or mechanical wind/hail wounds",
      "High temperatures (25°C – 34°C) with continuous high humidity (> 90%) and monsoonal rains",
      "Excessive nitrogen fertilizer application resulting in lush, vulnerable leaf tissue"
    ],
    organicTreatments: [
      "Drain standing paddy water immediately to break bacterial swimming motility",
      "Spray fresh cow dung slurry filtrate (20% w/v) or bio-control Pseudomonas fluorescens @ 5 g/L",
      "Foliar application of Copper Hydroxide @ 2.0 g/L"
    ],
    chemicalTreatments: [
      "Streptocycline (Streptomycin sulfate + Tetracycline 90:10) @ 6 g / 50 L water",
      "Copper Oxychloride 50% WP @ 2.5 g/L mixed with bactericide",
      "Bismerthiazol (Xantho-plus) 20% WP @ 1.5 g/L"
    ],
    prevention: [
      "Cultivate resistant rice varieties carrying Xa4, xa5, Xa21 resistance genes",
      "Split nitrogen fertilizer applications rather than single heavy basal doses",
      "Avoid clipping seedling leaf tips during transplantation"
    ],
    sensorThresholds: {
      minHumidity: 88,
      minLeafWetnessHours: 8,
      tempRange: [26, 35],
      riskDescription: "Monsoon conditions: high heat and saturated water vapor favor Xanthomonas"
    },
    lesionColor: "#854d0e",
    haloColor: "#fef08a"
  },

  wheat_stripe_rust: {
    id: "wheat_stripe_rust",
    name: "Yellow / Stripe Rust",
    plantName: "Wheat (Triticum aestivum)",
    scientificName: "Puccinia striiformis f. sp. tritici",
    category: "Fungal",
    severity: "High",
    urgency: "Action Required within 48 hrs",
    defaultConfidence: 96.7,
    colorTheme: "#facc15",
    symptoms: [
      "Bright yellow to orange-yellow blister-like pustules arranged in narrow, parallel linear stripes along leaf veins",
      "Resembles miniature yellow sewing machine stitching on the wheat leaf blade",
      "Pustules rupture shedding clouds of yellow urediniospores when touched",
      "Leaves become chlorotic, wither, and dry out prematurely, severely reducing grain fill weight"
    ],
    causes: [
      "Overwinters in cool mountainous highlands and spores travel hundreds of miles on wind currents",
      "Cool temperatures (10°C – 18°C) accompanied by high relative humidity and morning dew",
      "Planting susceptible winter or spring wheat varieties without seed treatment"
    ],
    organicTreatments: [
      "Seed bio-priming with Trichoderma viride formulations",
      "Foliar bio-agent application of Bacillus subtilis",
      "Maintain adequate soil potassium and zinc nutrition to enhance structural resistance"
    ],
    chemicalTreatments: [
      "Propiconazole 25% EC (Tilt) @ 1.0 mL/L at first appearance of yellow stripes",
      "Tebuconazole 25.9% EC (Folicur) @ 1.0 mL/L",
      "Picoxystrobin + Cyproconazole (Aproach Prima) @ 0.6 mL/L"
    ],
    prevention: [
      "Adopt wheat cultivars with Yr resistance genes (e.g., Yr18, Yr29 durable resistance)",
      "Eradicate volunteer wheat plants and grassy barberry alternative hosts between seasons",
      "Avoid excessive autumn nitrogen applications that create over-dense crop canopies"
    ],
    sensorThresholds: {
      minHumidity: 90,
      minLeafWetnessHours: 4,
      tempRange: [9, 18],
      riskDescription: "Cool damp mornings foster stripe rust spore germination"
    },
    lesionColor: "#a16207",
    haloColor: "#fef08a"
  },

  pepper_bacterial_spot: {
    id: "pepper_bacterial_spot",
    name: "Bacterial Leaf Spot",
    plantName: "Bell Pepper / Chili (Capsicum annuum)",
    scientificName: "Xanthomonas campestris pv. vesicatoria",
    category: "Bacterial",
    severity: "High",
    urgency: "Action Required within 48 hrs",
    defaultConfidence: 95.4,
    colorTheme: "#84cc16",
    symptoms: [
      "Small, angular, water-soaked spots on lower leaf surfaces that quickly become brown with yellow halos",
      "Centers of spots often dry out and fall out, producing a 'shot-hole' appearance",
      "Severe lower leaf yellowing and heavy premature leaf shedding leaving fruit exposed to sunscald",
      "Rough, raised, blistered circular spots with scab-like texture on pepper fruits"
    ],
    causes: [
      "Infected seed or infected transplant seedlings introduced into field",
      "Warm, wet weather (24°C – 32°C) with driving rain storms splashing bacteria between leaves",
      "Overhead sprinkler irrigation wetting the pepper foliage"
    ],
    organicTreatments: [
      "Copper Hydroxide combined with Bacillus amyloliquefaciens foliar spray",
      "Seed sanitization hot-water treatment (50°C for 25 minutes) before sowing",
      "Pruning out early lower infected leaves wearing sanitized nitrile gloves"
    ],
    chemicalTreatments: [
      "Fixed Copper + Mancozeb tank mix (copper provides bactericidal action, mancozeb boosts efficacy)",
      "Oxytetracycline (FireLine) or Streptomycin in areas where legally registered for vegetable use",
      "Acibenzolar-S-methyl (Actigard) systemic acquired resistance activator @ 0.25 oz/acre"
    ],
    prevention: [
      "Plant only certified pathogen-free seeds tested for Xanthomonas",
      "Plant pepper hybrids possessing Bs1, Bs2, Bs3, or Bs4 genetic resistance",
      "Never enter or work in pepper fields while foliage is wet from rain or dew"
    ],
    sensorThresholds: {
      minHumidity: 85,
      minLeafWetnessHours: 5,
      tempRange: [24, 32],
      riskDescription: "Warm temperatures with splashing water droplets accelerate bacterial colony invasion"
    },
    lesionColor: "#365314",
    haloColor: "#facc15"
  },

  healthy_crop: {
    id: "healthy_crop",
    name: "Healthy Foliage (No Pathogen Detected)",
    plantName: "Crop Foliage (Vigorous Specimen)",
    scientificName: "Physiologically Optimal Chlorophyll State",
    category: "Healthy",
    severity: "None",
    urgency: "Optimal - Maintain Current Regimen",
    defaultConfidence: 99.2,
    colorTheme: "#10b981",
    symptoms: [
      "Uniform, vibrant green chlorophyll pigmentation across entire lamina",
      "Turgid leaf structure with intact cell walls and zero chlorosis or necrotic margins",
      "Smooth, clean venation patterns without water-soaking, halos, or sporulation",
      "Active transpiration and photosynthesis with high stomatal conductance"
    ],
    causes: [
      "Balanced soil nutrients with optimal N-P-K and micronutrient availability",
      "Optimal irrigation schedule calibrated with soil moisture telemetry",
      "Well-aerated canopy and proactive preventative agronomy management"
    ],
    organicTreatments: [
      "Continue preventative bio-stimulant foliar spray (Seaweed Kelp Extract / Fulvic acid)",
      "Maintain active beneficial soil microbe biodiversity via vermicompost tea drench",
      "No fungicide or bactericide intervention required"
    ],
    chemicalTreatments: [
      "No chemical intervention needed - preserve beneficial predatory insects and pollinators",
      "Maintain standard preventative crop nutritional foliar sprays as per agronomic schedule"
    ],
    prevention: [
      "Keep logging antenna sensor telemetry to detect microclimate risk triggers early",
      "Maintain biosecurity protocols and disinfect harvesting implements",
      "Perform periodic routine satellite NDVI monitoring to catch canopy stress before it becomes visible to the naked eye"
    ],
    sensorThresholds: {
      minHumidity: 60,
      minLeafWetnessHours: 0,
      tempRange: [18, 26],
      riskDescription: "All agronomic parameters within ideal vegetative growth ranges"
    },
    lesionColor: "#059669",
    haloColor: "#34d399"
  }
};

/**
 * Satellite Agro-Observation Sectors
 * Geo-referenced field plots with multi-spectral band data and crop profiles
 */
const SATELLITE_ZONES = [
  {
    id: "sector-a",
    name: "Plot Alpha: Greenhouse Cluster",
    crop: "Tomato (Solanum lycopersicum)",
    areaHectares: 4.8,
    lat: 38.5412,
    lng: -121.7584,
    status: "Disease Alert",
    diseaseRisk: "tomato_late_blight",
    ndvi: 0.38,
    ndre: 0.29,
    canopyTemp: "21.4°C",
    soilMoisture: "38%",
    stressIndex: 78,
    color: "#ef4444",
    satelliteNotes: "Spectral anomaly in NIR Band 8: Reflectance drop indicates severe cell wall disruption consistent with Late Blight outbreak."
  },
  {
    id: "sector-b",
    name: "Plot Bravo: Pioneer Corn Valley",
    crop: "Corn / Maize (Zea mays)",
    areaHectares: 18.2,
    lat: 38.5446,
    lng: -121.7512,
    status: "Optimal Health",
    diseaseRisk: "healthy_crop",
    ndvi: 0.84,
    ndre: 0.76,
    canopyTemp: "24.1°C",
    soilMoisture: "28%",
    stressIndex: 12,
    color: "#10b981",
    satelliteNotes: "High photosynthetic density. Sentinel-2 NDVI 0.84 confirms vigorous biomass and full canopy closure."
  },
  {
    id: "sector-c",
    name: "Plot Charlie: Estate Vineyards",
    crop: "Grapevine (Vitis vinifera)",
    areaHectares: 9.6,
    lat: 38.5365,
    lng: -121.7538,
    status: "Moderate Stress",
    diseaseRisk: "grape_downy_mildew",
    ndvi: 0.54,
    ndre: 0.44,
    canopyTemp: "23.8°C",
    soilMoisture: "19%",
    stressIndex: 56,
    color: "#eab308",
    satelliteNotes: "Localized NDVI drop along the southern terrace. Thermal infrared flags elevated canopy temperature from stomatal closure."
  },
  {
    id: "sector-d",
    name: "Plot Delta: Orchard Terraces",
    crop: "Apple (Malus domestica)",
    areaHectares: 12.4,
    lat: 38.5401,
    lng: -121.7455,
    status: "Fungal Watch",
    diseaseRisk: "apple_scab",
    ndvi: 0.62,
    ndre: 0.51,
    canopyTemp: "22.2°C",
    soilMoisture: "24%",
    stressIndex: 48,
    color: "#f97316",
    satelliteNotes: "NDRE values dipping in western rows. Canopy reflectance signatures indicate potential early apple scab defoliation risk."
  }
];

/**
 * IoT Wireless Antenna Sensor Telemetry Nodes
 * Simulates LoRaWAN 868/915 MHz smart agronomy nodes
 */
const IOT_ANTENNA_NODES = [
  {
    id: "NODE-LORA-01",
    name: "Antenna Mast Alpha (Greenhouse)",
    targetCrop: "Tomato",
    rfFrequency: "915.2 MHz LoRa",
    rssi: -71,
    snr: 9.4,
    battery: 94,
    zoneId: "sector-a",
    sensors: {
      leafWetnessPercent: 88,
      leafWetnessHours: 7.2,
      airTempC: 19.4,
      relativeHumidity: 91,
      soilMoistureVWC: 42,
      soilTempC: 17.8,
      soilNitrogen: 142, // mg/kg
      soilPhosphorus: 48,
      soilPotassium: 210,
      parLight: 640 // umol/m2/s
    }
  },
  {
    id: "NODE-LORA-02",
    name: "Antenna Mast Bravo (Corn Field)",
    targetCrop: "Maize",
    rfFrequency: "915.4 MHz LoRa",
    rssi: -64,
    snr: 11.2,
    battery: 98,
    zoneId: "sector-b",
    sensors: {
      leafWetnessPercent: 12,
      leafWetnessHours: 0.5,
      airTempC: 25.2,
      relativeHumidity: 58,
      soilMoistureVWC: 28,
      soilTempC: 22.1,
      soilNitrogen: 185,
      soilPhosphorus: 55,
      soilPotassium: 240,
      parLight: 1420
    }
  },
  {
    id: "NODE-LORA-03",
    name: "Antenna Mast Charlie (Vineyard)",
    targetCrop: "Grapevine",
    rfFrequency: "915.6 MHz LoRa",
    rssi: -82,
    snr: 7.8,
    battery: 89,
    zoneId: "sector-c",
    sensors: {
      leafWetnessPercent: 68,
      leafWetnessHours: 5.8,
      airTempC: 22.6,
      relativeHumidity: 84,
      soilMoistureVWC: 21,
      soilTempC: 20.4,
      soilNitrogen: 110,
      soilPhosphorus: 38,
      soilPotassium: 195,
      parLight: 1180
    }
  },
  {
    id: "NODE-LORA-04",
    name: "Antenna Mast Delta (Apple Orchard)",
    targetCrop: "Apple",
    rfFrequency: "915.8 MHz LoRa",
    rssi: -77,
    snr: 8.6,
    battery: 92,
    zoneId: "sector-d",
    sensors: {
      leafWetnessPercent: 64,
      leafWetnessHours: 6.4,
      airTempC: 20.8,
      relativeHumidity: 82,
      soilMoistureVWC: 25,
      soilTempC: 18.9,
      soilNitrogen: 130,
      soilPhosphorus: 42,
      soilPotassium: 180,
      parLight: 950
    }
  }
];

// Export to window object for standalone browser execution
if (typeof window !== "undefined") {
  window.PLANT_DISEASES = PLANT_DISEASES;
  window.SATELLITE_ZONES = SATELLITE_ZONES;
  window.IOT_ANTENNA_NODES = IOT_ANTENNA_NODES;
}

# 🌿 PhytoScan AI: Autonomous Plant Disease Detection & Agrisat Platform

A comprehensive, cutting-edge web application combining **Optical Macro Leaf Pathology Detection**, **IoT Wireless Antenna & Microclimate Telemetry Network**, and **Orbital Satellite Multi-Spectral Plant Health Observation (NDVI/GIS)** into a unified agricultural diagnostic platform.

---

## 🌟 Core System Modules

### 1. 📸 Optical Macro Leaf Camera Scanner
- **Live Camera Detection**: Stream live webcam feed with optical targeting reticles, real-time laser scanline animations, and instant snapshot inference.
- **Drag & Drop / Photo Upload**: Upload any high-resolution leaf photograph for instant computer vision lesion segmentation and colorimetric analysis.
- **Preset Pathology Specimen Library**: 13 pre-rendered botanical specimens (Tomato Late Blight, Tomato Early Blight, Corn Common Rust, Apple Scab, Grape Downy Mildew, Rice Bacterial Blight, Healthy Crop, etc.) with 1-click test capability.
- **AI Diagnostics & Lesion Segmenter**:
  - Highlights lesions with dynamic animated bounding boxes and pinpoint thermal markers.
  - Computes AI diagnostic confidence (94% – 99%).
  - Identifies crop common name and botanical scientific pathogen taxonomy.
  - Classifies severity levels: *Critical*, *High*, *Moderate*, *Low*, and *Optimal Healthy*.
- **Comprehensive Treatment Dossier**:
  - **Symptomology**: Detailed visual breakdown of chlorotic halos, necrotic centers, sporulation, and wilting patterns.
  - **Infection Vectors**: Direct root causes (prolonged leaf moisture, spore dispersal, whitefly/aphid vectors).
  - **Organic & Biological Remedies**: Eco-friendly treatments (Cold-pressed Neem oil, Bacillus subtilis, Trichoderma, copper hydroxide).
  - **Chemical Fungicides & Bactericides**: Commercial active ingredients with exact field dosage instructions (Mancozeb 75% WP @ 2.5g/L, Metalaxyl-M, Difenoconazole).
  - **Cultural & Preventative Agronomy**: Pruning guidelines, drip irrigation transitions, resistant hybrid cultivars, and crop rotation schedules.
- **Voice Readout (TTS)**: Synthesizes spoken diagnostic reports using the browser's Web Speech API.
- **Biosensor Audio Feedback**: Generates real-time audio cues (scan hum, detection lock, alert tones) using the HTML5 Web Audio API without needing external audio files.

---

### 2. 📡 IoT Wireless Antenna & Sensor Telemetry System
- **AgriMesh LoRaWAN Telemetry**: Simulates wireless 915 MHz antenna masts placed across diverse agricultural plots.
- **Live Environmental Sensors**:
  - **Leaf Wetness Sensor**: Tracks continuous moisture percentage and accumulated wetness hours (critical threshold for fungal germination).
  - **Ambient Temperature & Relative Humidity**: Live trend charts with automated risk calculation.
  - **Soil VWC (%) & Temperature**: Volumetric soil moisture and root zone temperature.
  - **Soil N-P-K Nutrients**: Nitrogen, Phosphorus, and Potassium sensor levels in mg/kg.
  - **Solar PAR Radiation**: Photosynthetically Active Radiation in µmol/m²/s.
  - **LoRa RF Signal Strength**: Real-time RSSI (-71 dBm) and SNR telemetry with live packet logs.
- **Autonomous Germination Risk Engine**: Computes real-time fungal and bacterial disease germination risk based on the microclimate data stream.
- **Scenario Simulator**: 1-click trigger to simulate environmental anomalies (*Wet Dew Cycle / Blight Trigger*, *Heatwave / Vector Explosion*, *Normal Baseline*).

---

### 3. 🛰️ Orbital Satellite Multi-Spectral Plant Health Observation
- **Interactive GIS Map (Leaflet.js)**: Displays georeferenced farm plots with satellite imagery basemaps.
- **Sentinel-2 Multi-Spectral Band Switching**:
  - **NDVI (Normalized Difference Vegetation Index)**: Measures canopy biomass vigor and vegetative chlorophyll density.
  - **NDRE (Normalized Difference Red Edge)**: Detects early crop stress before visible leaf symptoms appear.
  - **Thermal Infrared (Band 10)**: Identifies canopy water stress and stomatal closure.
  - **True Color (RGB)**: Natural spectrum high-resolution view.
- **Sector Geo-Fences**:
  - **Plot Alpha (Greenhouse)**: Tomato late blight cluster identified via orbital NDVI drop (0.38).
  - **Plot Bravo (Corn Valley)**: High vigor maize canopy (NDVI 0.84).
  - **Plot Charlie (Vineyard)**: Moderate stress downy mildew warning (NDVI 0.54).
  - **Plot Delta (Apple Orchard)**: Scab alert with canopy defoliation risk (NDVI 0.62).
- **Cross-Inspection Link**: 1-click "Inspect in Scanner" button directly loads the satellite-flagged plot into the optical camera scanner!

---

### 4. 📖 Plant Pathology Encyclopedia & Field Guide
- Searchable and filterable database covering Fungal, Bacterial, Viral, Oomycete, and Healthy crop categories.
- Includes high-resolution leaf models and direct links to test samples in the diagnostic scanner.

---

### 5. 📋 Agronomic History & Official Certificate Export
- Detailed audit log of all leaf scans with timestamps, detected pathogens, and confidence scores.
- **Printable Phyto-Sanitary Dossier**: Ready-to-print or export to PDF formatted according to ISO/IEC agricultural certification layouts.

---

## 🚀 How to Run the Website

The application is built with modern vanilla HTML5, Tailwind CSS, Leaflet.js, and Chart.js. It requires **no server installation or build steps** and runs out of the box in any web browser (Chrome, Edge, Firefox, Safari).

### Option 1: Direct File Launch
Simply double-click:
```
C:\Users\A ROHITH\.gemini\antigravity\scratch\plant-disease-detection-system\index.html
```
Or right-click and choose **Open with -> Google Chrome / Microsoft Edge**.

### Option 2: PowerShell Launch
In PowerShell, execute:
```powershell
Start-Process "C:\Users\A ROHITH\.gemini\antigravity\scratch\plant-disease-detection-system\index.html"
```

---

## 📁 File Structure

```
plant-disease-detection-system/
├── index.html        # Main single-page application and responsive layout
├── style.css         # Glassmorphism aesthetic, targeting reticles & scanline animations
├── data.js           # Comprehensive disease knowledge base, satellite zones & sensor models
├── samples.js        # Offline HTML5 Canvas leaf visual synthesis engine (13 disease specimens)
├── app.js            # Core application state, camera scanner, charts, audio synth, and GIS map
└── README.md         # Documentation and usage guide
```

# 🖊️ Hand-Sketched UML Diagram Recognition & Conversion

## 📌 Project Overview
During meetings and brainstorming, people often sketch UML diagrams on paper.  
Digitizing them manually in tools like StarUML is **time-consuming**.  

This project automates the process:
- Recognizes **hand-sketched UML diagrams** (Class & Activity Diagrams).
- Detects **diagram elements + their relationships** (inheritance, aggregation, control flow).
- Extracts **handwritten text** using OCR.
- Converts results into **XMI format** → directly importable in **StarUML**.

🚀 Result: **Seamless digitization** of sketches → editable UML models.

---

## 🎯 Features
- ✅ Object detection using **YOLOv8** (Roboflow integration).
- ✅ Multiple model comparison for best performance.
- ✅ Flask Web App with 3 buttons:
  1. Upload image  
  2. View & detect elements (with bounding boxes & localization)  
  3. Generate JSON & export as XMI  
- ✅ OCR with **Tesseract** for handwritten text.
- ✅ Relationship extraction using **nearest-neighbor logic**.
- ✅ Generates **JSON → XMI** for StarUML import.

---

## 🛠️ Tech Stack
- **Deep Learning**: YOLOv8, PyTorch  
- **Data Platform**: Roboflow (model training + API)  
- **OCR**: Tesseract OCR  
- **Backend**: Flask  
- **Frontend**: HTML, Bootstrap  
- **Conversion**: JSON → XMI generator  
- **Visualization**: OpenCV, Matplotlib  

---

## 📂 Repository Structure
```bash
Hand_Sketched_UML_Recognition_Conversion/
├── data/              # sample UML sketches
├── models/            # trained weights
├── src/               # core source code (detection, OCR, JSON/XMI conversion), web app with Flask
├── docs/              # documentation, screenshots
└── prediction/        # object detections screenshots




---

##🚀  Workflow

Input: Hand-drawn UML sketch image.

Detection: YOLOv8 model detects UML elements (class boxes, activities, arrows).

Localization: Extracts spatial positions of elements.

Relationships: Determines inheritance, aggregation, control-flow via nearest neighbor.

OCR: Reads handwritten class/activity names.

Export: Generates JSON + converts into XMI → Import in StarUML

---
🌐 Flask Web App

Upload UML sketch

View detections & localized objects

Export JSON → XMI
---
📖 Future Improvements

🔹 Support more UML diagram types (Sequence, Use-Case).

🔹 Improve handwriting OCR with deep learning (EasyOCR).

🔹 Add cloud deployment (Streamlit or Docker).

---
📦 Installation
git clone https://github.com/cadetsikandar/Hand_Sketched_UML_Recognition_Conversion.git
cd Hand_Sketched_UML_Recognition_Conversion
pip install -r requirements.txt

---

🙌 Credits

Developed by Sikandar Ali
Deep Learning • Computer Vision • AI Engineer


---

# ✅ What to Include in Repo
- **README.md** (above).  
- **Screenshots/GIF demo** (Flask app + StarUML import).  
- **Requirements.txt** (`torch`, `ultralytics`, `flask`, `pytesseract`, etc.).  
- **Trained YOLO weights** (or link to Roboflow hosted model).  
- **Notebook with training logs & comparison**.  
- **Flask app folder** (upload → detect → export).  

---

⚡ This repo will scream **industry-ready project** — shows model training, API integration, deployment, automation, AND a real-world use case.  

👉 Do you want me to also write the **requirements.txt** for this project (with all necessary libraries: YOLOv8,Flask, Tesseract, Roboflow API, etc.) so you can directly plug it in?

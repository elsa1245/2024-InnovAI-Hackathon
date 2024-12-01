# 💧 Irrigo: Smart Irrigation System for Water-Scarce Region

## 🚨 Problem  
Morocco is experiencing **increasing water stress**, with water availability dropping to less than **500 m³ per capita per year**, far below the **critical threshold of 1,700 m³ set by the WHO**. Key challenges include:  
- **Persistent droughts**.  
- **Unequal water resource distribution**.  
- **Inefficient irrigation practices**, causing both under- and over-irrigation.  

### 🌾 Case Study: Souss-Massa Region  
In Souss-Massa, a vital hub for Moroccan agriculture with **20,000 hectares of greenhouses exporting to Europe**:  
- **Groundwater levels are dropping 4.5 meters annually** due to overexploitation.  
- Farmers are forced to reduce operations or shut down, causing:  
  - Increased prices of fruits and vegetables.  
  - Threats to regional economic and environmental sustainability.  

---

## 🌱 Solution: Irrigo  

**Irrigo** is a **smart irrigation app mobile** designed to optimize water usage in Moroccan agriculture, especially in water-scarce regions like Souss-Massa. It integrates:  
- **IoT sensors and hardware**: For real-time monitoring.  
- **AI-powered recommendations**: For precise irrigation control.  
- **Mobile app and chatbot**: To assist farmers in sustainable practices about dry irrigation.  


## 📈 Impact  
**Irrigo** addresses water scarcity by:  
1. Ensuring crops receive only the necessary water, reducing waste.  
2. Decreasing dependency on fertilizers and pesticides.  
3. Promoting sustainable farming and increasing crop yields.


## 🛠️ Technical Architecture

### **Hardware Integration**

- **ESP32 Devices**: 
  - **Transmitter**: Collects sensor data and sends it via LoRa.  
  - **Server**: Connects to Firebase to retrieve recommendations.  
  - **Receiver**: Activates solenoid valves for irrigation.  
- **LoRa SX1278 Modules**: For wireless communication between ESP32 devices.  
- **Sensors**: Soil moisture, temperature (DHT11), and humidity.  
- **Solenoid Valves**: Controlled by the receiver ESP32 for irrigation.
  

### **Software Stack**

- **Arduino IDE**: Programming ESP32 devices.  
- **Firebase**: Cloud storage for irrigation recommendations.  
- **LoRa Libraries**: Communication protocol.  
- **Python Scripts**: Automate backend tasks (e.g., periodic updates on PythonAnywhere).  
- **Flask + ngrok**: API for chatbot and real-time recommendations.
  
  ### **IRRIGOClassifier system**
  ![image](https://github.com/user-attachments/assets/e47098ef-0d09-40c6-94a4-980761dbb63d)

### **IRRIGO CHAT**
<img width="608" alt="image" src="https://github.com/user-attachments/assets/551e85bc-540c-42e6-9cac-60bd5cf949bb">

---

## 📋 Implementation Details

### **Workflow**

1. **ESP32 Devices**:  
   - Transmitter collects real-time sensor data and sends it to the server ESP32 via LoRa.  
   - Server fetches irrigation recommendations from Firebase.  
   - Receiver receives instructions via LoRa and activates solenoid valves.  

2. **Data Flow**:  
   - **Sensor Data** → **ESP32 Transmitter** → **ESP32 Server** → **Firebase** → **ESP32 Receiver** → **Irrigation**
  ![image](https://github.com/user-attachments/assets/ed5b2a1e-a7ae-427c-b4c8-64287d0ea9e1)




3. **Automation**:  
   - Scripts on PythonAnywhere run periodically to update recommendations.
     ![image](https://github.com/user-attachments/assets/e4a4588e-f3bf-4440-9fda-a3584357276e)


---

## 📱 Mobile App Features



1. **Chatbot**:  
   - Real-time answers to questions like:  
     - "what are the advantages of dry irrigation?"  
     - "What’s the best irrigation technique?"  


2. **Dashboard**:  
   - Visualizes sensor data and weather forecasts.  
   - Displays AI-generated recommendations.

--

## 📊 how to run


  

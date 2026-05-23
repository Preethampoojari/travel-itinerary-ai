# ✈️ TravelAI — AI Powered Travel Itinerary Generator

<div align="center">

### 🚀 MERN + AI Based Smart Travel Planning Application

Generate intelligent travel itineraries automatically by uploading flight tickets, hotel bookings, and travel documents.

---

🌐 **Live Demo:**  
[https://travel-itinerary-ai-orcin.vercel.app](https://travel-itinerary-ai-orcin.vercel.app)

📂 **GitHub Repository:**  
https://github.com/Preethampoojari/travel-itinerary-ai

</div>

---

# 📌 Project Overview

TravelAI is a full-stack MERN application that allows users to upload travel-related booking documents and automatically generate AI-powered travel itineraries.

The application extracts travel information from uploaded files and creates structured day-wise travel plans using AI integration.

This project was built as part of a **Junior Full Stack Developer (MERN + AI)** assignment.

---

# ✨ Features

## 🔐 Authentication System
- User Signup & Login
- JWT-based Authentication
- Secure Protected Routes
- Cookie-based Session Handling
- Persistent Login State

---

## 📄 Travel Document Upload
Users can upload:
- Flight Tickets
- Hotel Bookings
- Travel Documents
- Images (JPG, PNG)
- PDFs

### Supported File Types
- PDF
- JPG
- PNG

---

## 🤖 AI-Powered Itinerary Generation
Automatically generates:
- Destination Details
- Travel Dates
- Flight Information
- Day-wise Travel Plan
- Budget Estimation
- Travel Tips
- Local Recommendations

Powered using:
- Gemini AI API

---

## 🗂️ Trip History Management
- Stores generated itineraries in MongoDB
- Users can revisit previous trips
- Persistent itinerary history

---

## 📤 Sharing Functionality
- Share generated itineraries
- Public itinerary links
- Easy collaboration and trip sharing

---

## 📥 Export Features
Users can:
- Download itinerary as PDF
- Download itinerary as TXT
- Share itinerary publicly

---

## 🎨 Modern Responsive UI
- Fully responsive design
- Clean modern interface
- Mobile-friendly layouts
- Dashboard-based workflow
- Smooth user experience

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

---

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Authentication & Security
- JWT Authentication
- bcrypt.js
- HTTP-only Cookies
- Protected Middleware

---

## AI Integration
- Gemini AI API

---

## File Upload & Storage
- Multer
- Cloudinary

---

## Deployment
### Frontend
- Vercel

### Backend
- Render

---

# 📁 Folder Structure

```bash
TravelAI/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── utils/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── utils/
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_SECRET

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run Application

## Backend

```bash
cd server
npm run dev
```

---

## Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

## Database
- MongoDB Atlas

---

# 🧠 AI Workflow

```text
User Uploads Travel Documents
            ↓
File Processing & Extraction
            ↓
Gemini AI API Processing
            ↓
Structured Travel Itinerary Generation
            ↓
Store in MongoDB
            ↓
Display + Share + Download
```

---

# 🔥 Challenges Faced & Solved

During development and deployment, multiple real-world production issues were handled:

- JWT authentication issues after deployment
- Cookie handling across frontend/backend domains
- CORS configuration problems
- Protected route persistence
- File upload handling
- AI response formatting
- MongoDB connection handling
- Deployment environment configuration
- Dynamic itinerary rendering

This project helped strengthen:
- Full-stack MERN development
- Authentication systems
- API architecture
- AI integration workflows
- Deployment/debugging skills
- Production-level problem solving

---

# 📈 Key Learning Outcomes

- Building secure MERN applications
- AI API integration
- Cloudinary file management
- Authentication & authorization
- REST API architecture
- Deployment workflows
- State management
- Real-world debugging

---

# 🎯 Assignment Requirements Covered

✅ JWT Authentication  
✅ Travel Document Upload  
✅ AI Processing  
✅ AI Itinerary Generation  
✅ MongoDB Storage  
✅ Trip History  
✅ Share Functionality  
✅ Responsive React Frontend  
✅ Node + Express Backend  
✅ Live Deployment  

---

# 🌟 Bonus Features Implemented

✅ PDF Download  
✅ TXT Download  
✅ Public Sharing  
✅ Drag & Drop Upload UI  
✅ Beautiful Responsive UI  
✅ Cloudinary Uploads  
✅ Persistent Login  
✅ Protected Dashboard Routes  

---

# 👨‍💻 Developer

## Preetham Poojari

Full Stack Developer (MERN)

---

# 📬 Contact

📧 Email: YOUR_EMAIL  
💼 LinkedIn: YOUR_LINKEDIN  
🌐 Portfolio: YOUR_PORTFOLIO

---

# ⭐ Final Note

This project was developed with focus on:
- Clean architecture
- Real-world usability
- Secure authentication
- Scalable backend structure
- AI-powered user experience
- Production deployment practices

The goal was not just to complete the assignment, but to build a polished and functional product-oriented application.

---

# ⭐ If you liked this project

Give this repository a ⭐ on GitHub.

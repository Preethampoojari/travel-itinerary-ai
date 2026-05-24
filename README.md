<div align="center">

# ✈️ TravelAI — AI Powered Travel Itinerary Generator

### Smart MERN + AI Travel Planning Application

Generate complete AI-powered travel itineraries from flight tickets, hotel bookings, PDFs, and travel images using **Gemini AI**.

<br/>

[![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)]()
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)]()
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?style=for-the-badge&logo=mongodb)]()
[![Express](https://img.shields.io/badge/Server-Express-black?style=for-the-badge&logo=express)]()
[![Gemini AI](https://img.shields.io/badge/AI-Gemini-purple?style=for-the-badge&logo=google)]()

<br/>

### 🚀 Live Demo

🔗 **Frontend:**  
https://travel-itinerary-ai-orcin.vercel.app

🔗 **Backend:**  
https://travel-itinerary-ai-fxcs.onrender.com

</div>

---

# 🌍 Overview

TravelAI is a full-stack MERN + AI application that automatically generates intelligent travel itineraries from uploaded travel documents.

Users can upload:

- Flight Tickets
- Hotel Bookings
- Travel PDFs
- Travel Images

or manually enter travel details through the dashboard form.

The application extracts travel information using AI + OCR processing and generates a structured day-wise itinerary with travel suggestions, budgeting, transport planning, and recommendations.

This project was developed as part of a **Junior Full Stack Developer (MERN + AI)** assignment and later improved with multiple production-level enhancements and optimizations.

---

# ✨ Core Features

# 🔐 Authentication System

✅ JWT Authentication  
✅ User Signup & Login  
✅ Protected Routes  
✅ Persistent Login State  
✅ Context API Authentication  
✅ Secure Logout Handling  
✅ Cookie-based Session Management  
✅ Protected Dashboard Access

---

# 🤖 AI-Powered Itinerary Generation

✅ Gemini AI Integration  
✅ AI-generated Travel Plans  
✅ Day-wise Itinerary Creation  
✅ Budget Recommendations  
✅ Travel Suggestions  
✅ Destination Planning  
✅ Smart Travel Formatting  
✅ Structured Markdown Response

---

# 📄 Smart Document Processing

Users can upload:

✅ Flight Tickets  
✅ Hotel Bookings  
✅ Travel Documents  
✅ PDFs  
✅ JPG Images  
✅ PNG Images

The system supports:

✅ PDF Text Extraction  
✅ OCR-based Image Text Extraction  
✅ Gemini Vision Processing  
✅ Drag & Drop Uploads  
✅ Manual Form Fallback

---

# 🧠 Dashboard Workflow

The dashboard supports **two ways** to generate itineraries:

### 1️⃣ Upload Travel Documents

Users can upload:

- Flight Tickets
- Hotel Bookings
- Travel Images
- PDFs

The application automatically extracts travel information and generates an itinerary.

### 2️⃣ Manual Entry (Optional)

Users can manually enter:

- Destination
- Dates
- Budget
- Travelers Count
- Transport Type
- Additional Notes

This makes document upload optional.

---

# 🗂️ Itinerary Features

✅ Generate AI Itinerary  
✅ Single Itinerary View  
✅ Public Shareable Links  
✅ History Page  
✅ Saved Itineraries  
✅ Delete Itinerary  
✅ Dynamic Itinerary Rendering  
✅ Smart Markdown Formatting

---

# 📥 Export & Sharing Features

✅ Download Itinerary as PDF  
✅ Download Itinerary as TXT  
✅ Public Itinerary Sharing  
✅ Shareable Public Links

---

# 🎨 Frontend Features

✅ Fully Responsive UI  
✅ Mobile Responsive Design  
✅ Modern Dashboard Layout  
✅ Responsive Navbar  
✅ Toast Notifications  
✅ Loading States  
✅ Smooth User Experience  
✅ Lazy-loaded Images  
✅ React Code Splitting  
✅ React.lazy + Suspense Optimization

---

# ⚙️ Backend Features

✅ REST API Architecture  
✅ Express.js Server  
✅ MongoDB Integration  
✅ Mongoose Models  
✅ Protected APIs  
✅ Middleware-based Architecture  
✅ Compression Middleware  
✅ MongoDB Indexing  
✅ Secure API Handling

---

# ☁️ Cloud & Deployment

✅ Frontend Deployment (Vercel)  
✅ Backend Deployment (Render)  
✅ Cloudinary File Uploads  
✅ Environment Variables Setup  
✅ Production-ready Deployment Structure

---

# 🚀 Performance Optimizations

✅ Lazy Loading  
✅ React Code Splitting  
✅ Compression Middleware  
✅ MongoDB Indexing  
✅ Optimized API Calls  
✅ Efficient Rendering  
✅ Protected Route Persistence

---

## ✨ Features

- 🔐 JWT Authentication & Protected Routes
- 📄 Upload Travel Documents (PDF/Image)
- 🤖 AI-powered Itinerary Generation
- 🧠 OCR-based Text Extraction
- ☁️ Cloudinary File Upload Integration
- 📚 Trip History Management
- 🔗 Public Itinerary Sharing
- 📥 PDF & TXT Download Feature
- 📱 Fully Responsive UI
- 🚀 Production Deployment Ready

---

# 🧭 Application Flow

```text
User Authentication
        ↓
Dashboard Access
        ↓
Upload Documents OR Fill Manual Form
        ↓
PDF/Image/OCR Processing
        ↓
Gemini AI Processing
        ↓
Structured Itinerary Generation
        ↓
Save to MongoDB
        ↓
View / Share / Download Itinerary
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API

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

## AI & Processing
- Gemini AI API
- Gemini Vision API
- OCR-based Extraction

---

## File Upload & Storage
- Multer
- Cloudinary

---

# 📁 Project Structure

```text
TravelAI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── routes/
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

# ⚡ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Preethampoojari/travel-itinerary-ai.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend Dependencies

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

# 🔥 Real-World Problems Solved

During development and deployment, multiple production-level issues were solved:

- ✅ JWT authentication persistence
- ✅ Cookie handling across frontend/backend domains
- ✅ CORS configuration handling
- ✅ Protected route management
- ✅ Cloudinary file upload handling
- ✅ OCR text extraction formatting
- ✅ Gemini AI response formatting
- ✅ MongoDB connection management
- ✅ Deployment environment configuration
- ✅ Dynamic itinerary rendering

---

# 📚 Key Learnings

- ✅ Full-stack MERN Development
- ✅ AI API Integration
- ✅ Authentication & Authorization
- ✅ REST API Architecture
- ✅ Cloudinary Integration
- ✅ Production Deployment
- ✅ MongoDB Optimization
- ✅ Real-world Debugging
- ✅ State Management
- ✅ Secure Backend Architecture

---

# 🎯 Assignment Requirements Covered

- ✅ JWT Authentication
- ✅ Travel Document Upload
- ✅ AI Processing
- ✅ AI Itinerary Generation
- ✅ MongoDB Storage
- ✅ Trip History
- ✅ Share Functionality
- ✅ Responsive React Frontend
- ✅ Node + Express Backend
- ✅ Live Deployment

---

# 🌟 Additional Improvements Implemented

- ✅ PDF Download Feature
- ✅ TXT Download Feature
- ✅ Public Itinerary Sharing
- ✅ Drag & Drop Upload UI
- ✅ Responsive Dashboard UI
- ✅ Cloudinary Integration
- ✅ Persistent Login State
- ✅ Optimized Rendering
- ✅ React Lazy Loading
- ✅ Compression Middleware
- ✅ MongoDB Indexing

---

# 👨‍💻 Developer

## Preetham Poojari

Full Stack Developer (MERN)

---

# 📬 Contact

📧 Email: preethampoojari146@gmail.com

💼 LinkedIn:  
https://www.linkedin.com/in/preethampoojari/

---

# ⭐ Final Note

This project was built with focus on:

- Real-world usability
- Secure authentication
- Scalable backend structure
- AI-powered automation
- Clean architecture
- Production deployment practices
- Responsive user experience

The goal was not just to complete the assignment, but to build a polished and production-oriented full-stack application.

---

<div align="center">

## ⭐ If you liked this project

Give this repository a ⭐ on GitHub.

</div>

# Luxe Affairs Event Planner  
A full‑stack luxury event planning platform featuring a cinematic React frontend, secure Node/Express backend, MongoDB database, and a protected admin dashboard for managing inquiries, reviews, users, and masterclass signups.

---

## ✨ Features

### 🎨 Frontend (React + Tailwind)
- Cinematic background slideshow
- Luxury‑coded UI with glassmorphism and smooth transitions
- Public pages: Home, Gallery, Lighting, Montage, Testimonials, Contact, Masterclass Signup
- Review submission + masterclass signup forms
- Fully responsive design

### 🔐 Admin Dashboard
- Secure JWT authentication
- Admin login page
- Protected routes using `RequireAuth`
- CRUD management for:
  - Inquiries
  - Masterclass signups
  - Reviews
  - Users
- Clean table UI with delete actions

### ⚙️ Backend (Node + Express)
- REST API with modular routes
- JWT authentication middleware
- MongoDB models for all entities
- Admin seeder for first‑time login
- CORS + security best practices

### 🗄️ Database (MongoDB Atlas)
- Cloud‑hosted database
- Mongoose models + schema validation

---

## 🚀 Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React, React Router, Axios, TailwindCSS |
| Backend | Node.js, Express.js, JWT, Bcrypt |
| Database | MongoDB Atlas, Mongoose |
| Deployment | Render (backend), Vercel (frontend) |

---

## 📁 Project Structure

event-planner/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── inquiryController.js
│   │   ├── masterclassController.js
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Inquiry.js
│   │   ├── Masterclass.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── inquiryRoutes.js
│   │   ├── masterclassRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── userRoutes.js
│   ├── seedAdmin.js
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── admin/
│   │   ├── DashboardLayout.jsx
│   │   ├── RequireAuth.jsx
│   │   └── pages/
│   │       ├── Inquiries.jsx
│   │       ├── Masterclasses.jsx
│   │       ├── Reviews.jsx
│   │       └── Users.jsx
│   ├── api/
│   │   └── axios.js
│   ├── components/
│   │   ├── BackgroundSlideshow.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── (other UI components)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── Lighting.jsx
│   │   ├── Montage.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Inquire.jsx
│   │   ├── SubmitReview.jsx
│   │   └── MasterclassSignup.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── index.html
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


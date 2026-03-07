# Luxe Affairs Event Planner  
A full‑stack luxury event planning platform featuring a cinematic React frontend, secure Node/Express backend, MongoDB database, and a protected admin dashboard for managing inquiries, reviews, users, and masterclass signups.

---

🔗 Live Demo

Frontend: https://luxe-affairs-event-planner.vercel.app
Admin Dashboard: https://luxe-affairs-event-planner.vercel.app/admin/login
Backend Health Check: https://luxe-affairs-backend.onrender.com/api/health


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

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js, JWT, Bcrypt |
| **Database** | MongoDB Atlas, Mongoose |
| **Deployment** | Render (backend), Netlify/Vercel (frontend) |

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

---

## 🔧 Environment Variables

Create a `.env` file inside `/backend`:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development

These same variables must be added to Render for production.

---

## 🧪 Running the Project Locally

### Install dependencies
npm install
cd backend && npm install

### Start backend
cd backend
npm start

### Start frontend
npm start

Frontend runs at:  
`http://localhost:3000`

Backend runs at:  
`http://localhost:5000`

---

## 🔐 Admin Login

After running the seeder:
node seedAdmin.js

Default admin credentials:
Email: admin@luxeaffairs.com
Password: Admin123!

---

## 🌐 Deployment

### Backend (Render)
- Deploy `/backend` folder as a Web Service  
- Root Directory: `backend`  
- Build command: `npm install`  
- Start command: `node server.js`  
- Add environment variables in Render dashboard  

### Frontend (Netlify or Vercel)
- Build command: `npm run build`  
- Publish directory: `build/`  
- Update Axios baseURL to your Render backend URL  

---

## 🏆 Author  
**Shy Copney**  
Full‑stack developer & luxury brand architect  
Statesville → Charlotte → Sacramento  

---

## 📄 License  
This project is open‑source and available under the MIT License.



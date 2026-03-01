import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundSlideshow from "./components/BackgroundSlideshow";
import ScrollToTop from "./ScrollToTop";
import api from "./api/axios";

// Public Pages
import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import EventMasterclass from "./pages/EventMasterclass";
import Montage from "./pages/Montage";
import Gallery from "./pages/Gallery";
import Lighting from "./pages/Lighting";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import SubmitReview from "./pages/SubmitReview";
import MasterclassSignup from "./pages/MasterclassSignup";

// Admin Pages
import DashboardLayout from "./admin/DashboardLayout";
import Inquiries from "./admin/pages/Inquiries";
import Masterclasses from "./admin/pages/Masterclasses";
import Reviews from "./admin/pages/Reviews";
import Users from "./admin/pages/Users";
import AdminLogin from "./admin/pages/AdminLogin";
import RequireAuth from "./admin/RequireAuth";

export default function App() {
  const [backendStatus, setBackendStatus] = useState(null);

  useEffect(() => {
    api
      .get("/health")
      .then((res) => {
        console.log("Backend connected:", res.data);
        setBackendStatus(res.data);
      })
      .catch((err) => {
        console.error("Backend connection failed:", err);
      });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundSlideshow />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/montage" element={<Montage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/event-masterclass" element={<EventMasterclass />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/submit-review" element={<SubmitReview />} />
            <Route path="/masterclass-signup" element={<MasterclassSignup />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Dashboard */}
            <Route element={<RequireAuth />}>
              <Route path="/admin" element={<DashboardLayout />}>
                <Route path="inquiries" element={<Inquiries />} />
                <Route path="masterclasses" element={<Masterclasses />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Route>
          </Routes>
        </main>

        <Footer />

        {backendStatus && (
          <p className="text-center text-white/60 text-xs py-2">
            Backend: {backendStatus.status} — {backendStatus.message}
          </p>
        )}
      </div>
    </div>
  );
}

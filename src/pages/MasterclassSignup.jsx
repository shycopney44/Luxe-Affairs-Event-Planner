import React, { useState } from "react";
import api from "../api/axios"; // ⭐ ADDED

export default function MasterclassSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    goals: "",
    country: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ⭐ UPDATED — Save to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/masterclass", formData);
      console.log("Masterclass signup saved:", res.data);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        goals: "",
        country: "",
      });
    } catch (err) {
      console.error("Error saving signup:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-4 drop-shadow-xl">
        Enroll in the Luxe Masterclass
      </h1>

      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-xl">
        Step into clarity, precision, and luxury. Secure your spot below.
      </p>

      {submitted ? (
        <div className="max-w-xl mx-auto backdrop-blur-xl bg-green-500/20 border border-green-300/40 text-green-200 p-6 rounded-xl text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-2 drop-shadow-xl">You're in!</h2>
          <p className="drop-shadow-xl">Your masterclass enrollment has been received.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
          />

          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
          />

          <textarea
            name="goals"
            placeholder="What are your goals for this masterclass?"
            value={formData.goals}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 h-32"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
          />

          <button
            type="submit"
            className="w-full bg-yellow-300 text-purple-900 font-semibold py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            Reserve Your Spot
          </button>
        </form>
      )}
    </div>
  );
}

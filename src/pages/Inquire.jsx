import React, { useState } from "react";
import api from "../api/axios"; // ⭐ ADDED

export default function Inquire() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    roomBlocks: "",
    eventType: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ UPDATED — Save inquiry to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        guests: formData.guests,
        roomBlocks: formData.roomBlocks,
        eventType: formData.eventType,
        notes: formData.notes,
      };

      const res = await api.post("/inquiries", payload);
      console.log("Inquiry saved:", res.data);

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        roomBlocks: "",
        eventType: "",
        notes: "",
      });
    } catch (err) {
      console.error("Error saving inquiry:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-20 z-10">

      {/* ⭐ UPDATED HEADER */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-6 drop-shadow-xl">
        Plan Your Event with Luxe Affairs
      </h1>

      {/* ⭐ UPDATED INTRO TEXT */}
      <div className="max-w-3xl mx-auto text-center text-white/90 mb-12 drop-shadow-xl">
        <p className="mb-4 text-xl md:text-2xl font-bold leading-relaxed">
          Welcome to Luxe Affairs—where elegance meets clarity. We plan legacy-infused events that glow with intention, beauty, and spiritual resonance.
        </p>

        <p className="mb-4 text-xl md:text-2xl font-bold leading-relaxed">
          From intimate ceremonies to grand celebrations, we honor your love story with elegance and soul. Corporate events are polished and purposeful, reflecting your brand’s legacy. Private affairs like birthdays and showers are crafted with clarity and care.
        </p>

        <p className="mb-4 text-2xl italic text-pink-300 font-bold drop-shadow-xl">
          ✨ You are building legacy with every click.
        </p>
      </div>

      {/* ⭐ FORM OR SUCCESS MESSAGE */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-2xl mx-auto">
        {submitted ? (
          <p className="text-center text-green-300 font-semibold text-xl drop-shadow-xl py-10">
            Thank you! Your inquiry has been submitted. We’ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-white/90 font-medium mb-2">Name *</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-pink-300 outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/90 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/90 font-medium mb-2">Requested Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Number of Guests *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  <option value="" className="text-black">Select an option</option>
                  <option className="text-black">Under 50</option>
                  <option className="text-black">50–100</option>
                  <option className="text-black">100–200</option>
                  <option className="text-black">200+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/90 font-medium mb-2">Room Blocks *</label>
                <select
                  name="roomBlocks"
                  value={formData.roomBlocks}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  <option value="" className="text-black">Select an option</option>
                  <option className="text-black">Yes</option>
                  <option className="text-black">No</option>
                  <option className="text-black">Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Event Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-300 outline-none"
                >
                  <option value="" className="text-black">Select an option</option>
                  <option className="text-black">Wedding</option>
                  <option className="text-black">Corporate</option>
                  <option className="text-black">Birthday</option>
                  <option className="text-black">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Notes or Requests</label>
              <textarea
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-pink-300 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition shadow-lg"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>

      {/* ⭐ UPDATED ADDRESS + CONTACT SECTION */}
      <div className="mt-12 text-center text-white/80 drop-shadow-xl">

        <p className="mb-2 font-bold text-yellow-300 text-xl drop-shadow-xl">
          📍 Luxe Affairs – Charlotte, NC
        </p>

        <p className="text-lg font-bold drop-shadow-xl">
          615 N Tryon St, Charlotte, NC 28202
        </p>

        <p className="mt-6 font-bold text-yellow-300 text-xl drop-shadow-xl">
          📞 Contact
        </p>

        <p className="text-lg font-bold drop-shadow-xl">
          Luxe Affairs —{" "}
          <a href="mailto:hello@luxeaffairs.com" className="text-pink-300 underline font-extrabold">
            hello@luxeaffairs.com
          </a>
        </p>

        <p className="text-lg font-bold drop-shadow-xl">
          704-555-8427
        </p>

      </div>
    </div>
  );
}

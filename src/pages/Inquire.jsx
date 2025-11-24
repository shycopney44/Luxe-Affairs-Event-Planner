import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    setSubmitted(true);
    // Add backend/email service integration here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-white p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-pink-700 mb-4 text-center">
        Plan Your Event with Luxe Affairs
      </h1>

      {/* Story Section */}
      <div className="max-w-3xl text-center text-gray-700 mb-10">
        <p className="mb-4">
          Welcome to Luxe Affairs—where elegance meets clarity. We plan legacy-infused events that glow with intention, beauty, and spiritual resonance.
        </p>
        <p className="mb-4">
          From intimate ceremonies to grand celebrations, we honor your love story with elegance and soul. Corporate events are polished and purposeful, reflecting your brand’s legacy. Private affairs like birthdays and showers are crafted with clarity and care.
        </p>
        <p className="mb-4">✨ You are building legacy with every click.</p>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name *</label>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          </div>

          {/* Date & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Requested Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of Guests *</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Select an option</option>
                <option>Under 50</option>
                <option>50–100</option>
                <option>100–200</option>
                <option>200+</option>
              </select>
            </div>
          </div>

          {/* Room Blocks & Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Room Blocks *</label>
              <select
                name="roomBlocks"
                value={formData.roomBlocks}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Select an option</option>
                <option>Yes</option>
                <option>No</option>
                <option>Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Select an option</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Add your notes or requests here</label>
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Submit Inquiry
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              ✅ Thank you! Your inquiry has been submitted. We’ll be in touch soon.
            </p>
          )}
        </form>
      </div>

      {/* Location & Contact Info */}
      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2 font-semibold">📍 Location</p>
        <p>3260 Carver Pl, Charlotte, NC 28269</p>
        <p className="mt-4 font-semibold">📞 Contact</p>
        <p>
          Shy Copney –{" "}
          <a href="mailto:shydashacopney@gmail.com" className="text-pink-600 underline">
            shydashacopney@gmail.com
          </a>
        </p>
        <p>916-202-3610</p>
      </div>
    </div>
  );
}

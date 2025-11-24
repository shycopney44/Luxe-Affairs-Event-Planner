import React, { useState } from "react";

export default function MasterclassSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    agree: false,
    cardNumber: "",
    expiry: "",
    cvc: "",
    zip: "",
    country: "United States",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you! Your Luxe Masterclass registration is being processed.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700 text-white px-6 pt-32 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Luxe Event Masterclass</h1>
        <p className="text-lg text-purple-100">
          The complete training to plan, lead & deliver world-class events with clarity, emotion, and cinematic impact.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white text-black p-8 rounded-xl shadow-2xl space-y-6"
      >
        {/* Pricing */}
        <div className="text-center">
          <p className="text-xl font-semibold text-purple-700">US$249</p>
          <p className="text-sm text-gray-500 line-through">US$497</p>
        </div>

        {/* Input Fields */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md border"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company (if relevant)"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded-md border"
        />
        <input
          type="text"
          name="title"
          placeholder="Title (if relevant)"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded-md border"
        />

        {/* Terms Checkbox */}
        <label className="flex items-center space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <span>I understand and agree to the Terms & Conditions.</span>
        </label>

        {/* Payment Fields */}
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full p-3 rounded-md border"
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
            required
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
            required
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Other</option>
          </select>
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-bold py-3 rounded-full hover:bg-pink-500 transition"
        >
          LET’S GO
        </button>

        {/* Privacy Link */}
        <p className="text-xs text-center text-gray-500 mt-4">
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
}

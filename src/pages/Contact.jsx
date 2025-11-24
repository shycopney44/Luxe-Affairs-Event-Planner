import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out. Luxe Affairs will be in touch soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-700 text-white px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Inquiry Panel */}
        <div className="bg-purple-800 p-8 rounded-xl shadow-xl space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">Let’s Talk</h2>

          <div className="space-y-4 text-white text-lg">
            <div>
              <h3 className="font-semibold text-purple-200">EVENT & BUSINESS ENQUIRIES</h3>
              <p>For planning, collaborations, or Luxe Affairs bookings:</p>
              <p className="font-medium">events@luxeaffairs.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-200">PRESS & MEDIA ENQUIRIES</h3>
              <p>For interviews, podcast invites, or media features:</p>
              <p className="font-medium">press@luxeaffairs.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-200">GENERAL ENQUIRIES</h3>
              <p>For anything else — we’d love to hear from you:</p>
              <p className="font-medium">hello@luxeaffairs.com</p>
            </div>
          </div>

          <p className="mt-8 text-purple-100 italic">
            Thank you and have a radiant day!
          </p>
          <p className="text-purple-300 font-semibold">— Luxe Affairs</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com/luxeaffairs" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-white text-2xl hover:text-pink-400"></i>
            </a>
            <a href="mailto:hello@luxeaffairs.com">
              <i className="fas fa-envelope text-white text-2xl hover:text-purple-300"></i>
            </a>
            <a href="https://linkedin.com/company/luxeaffairs" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-white text-2xl hover:text-blue-400"></i>
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-8 rounded-xl shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Send Us a Message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md border h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-bold py-3 rounded-full hover:bg-pink-500 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

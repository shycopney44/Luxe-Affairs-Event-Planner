import React, { useState } from "react";
import api from "../api/axios"; // ⭐ ADDED

export default function SubmitReview() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    date: "",
    rating: 5,
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ⭐ UPDATED — Now saves to MongoDB instead of localStorage
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment) return;

    try {
      const payload = {
        name: formData.name,
        eventType: formData.type || "General",
        date: formData.date || "Recently",
        rating: Number(formData.rating),
        review: formData.comment,
      };

      const res = await api.post("/reviews", payload);
      console.log("Review saved:", res.data);

      setSubmitted(true);

      setFormData({
        name: "",
        type: "",
        date: "",
        rating: 5,
        comment: "",
      });
    } catch (err) {
      console.error("Error saving review:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">

      {/* ⭐ UPDATED HEADER */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-4 drop-shadow-xl">
        Share Your Luxe Experience
      </h1>

      {/* ⭐ UPDATED INTRO TEXT */}
      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-xl">
        We’d love to hear how Luxe Affairs elevated your event.  
        Submit your review below and it may be featured on our Testimonials page.
      </p>

      {/* Success Message */}
      {submitted ? (
        <div className="max-w-xl mx-auto backdrop-blur-xl bg-green-500/20 border border-green-300/40 text-green-200 p-6 rounded-xl text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-2 drop-shadow-xl">Thank you!</h2>
          <p className="drop-shadow-xl">Your review has been submitted successfully.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl space-y-5"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Event Type */}
          <input
            type="text"
            name="type"
            placeholder="Event Type (e.g. Wedding)"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          {/* Event Date */}
          <input
            type="text"
            name="date"
            placeholder="Event Date (e.g. October 2025)"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />

          {/* Rating */}
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r} className="text-black">
                {r} Star{r > 1 && "s"}
              </option>
            ))}
          </select>

          {/* Comment */}
          <textarea
            name="comment"
            placeholder="Your Review *"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-300 text-purple-900 font-semibold py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}

import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      // In a real app, you'd send this to a backend or database
      console.log("Submitted Review:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        type: "",
        date: "",
        rating: 5,
        comment: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">
        Share Your Luxe Experience
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10">
        We’d love to hear how Luxe Affairs made your event unforgettable. Submit your review below and see it featured on our Testimonials page.
      </p>

      {submitted ? (
        <div className="max-w-xl mx-auto bg-green-50 border border-green-300 text-green-700 p-6 rounded-xl text-center shadow-md">
          <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
          <p>Your review has been submitted and will appear shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-purple-50 p-6 rounded-xl shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Event Type (e.g. Wedding)"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
          />
          <input
            type="text"
            name="date"
            placeholder="Event Date (e.g. October 2025)"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 rounded-md border"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            name="comment"
            placeholder="Your Review"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-3 rounded-md border h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold py-3 rounded-full hover:bg-pink-500 transition"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}

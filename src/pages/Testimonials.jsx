import React, { useState, useEffect } from "react";
import api from "../api/axios"; // ⭐ ADDED

// ⭐ Your original luxury-coded static testimonials
const staticTestimonials = [
  {
    name: "Jasmine R.",
    rating: 5,
    comment:
      "Luxe Affairs made my wedding feel like a dream. The lighting, the montage, the energy — everything was flawless.",
    date: "October 2025",
    type: "Wedding",
  },
  {
    name: "Marcus T.",
    rating: 4,
    comment:
      "Professional, elegant, and on point. The team handled our corporate gala with precision and style.",
    date: "September 2025",
    type: "Corporate Gala",
  },
  {
    name: "Aaliyah M.",
    rating: 5,
    comment:
      "The montage brought tears to our eyes. It was cinematic, emotional, and beautifully timed.",
    date: "August 2025",
    type: "Birthday",
  },
  {
    name: "Devon C.",
    rating: 5,
    comment:
      "From inquiry to execution, Luxe Affairs delivered clarity and luxury. Highly recommend!",
    date: "July 2025",
    type: "Engagement",
  },
  {
    name: "Tiana B.",
    rating: 5,
    comment:
      "The lighting transformed our venue into a fairytale. Luxe Affairs truly understands ambiance.",
    date: "June 2025",
    type: "Quinceañera",
  },
  {
    name: "Elias G.",
    rating: 4,
    comment:
      "Great communication and stunning visuals. Our anniversary party felt elevated and intentional.",
    date: "May 2025",
    type: "Anniversary",
  },
  {
    name: "Nia S.",
    rating: 5,
    comment:
      "The drone footage was breathtaking. It captured our outdoor ceremony like a movie scene.",
    date: "April 2025",
    type: "Wedding",
  },
  {
    name: "Jordan P.",
    rating: 5,
    comment:
      "Luxe Affairs brought clarity and luxury to our product launch. The montage was a hit.",
    date: "March 2025",
    type: "Brand Event",
  },
  {
    name: "Camille D.",
    rating: 5,
    comment:
      "Every detail was intentional. The team made our baby shower feel cinematic and warm.",
    date: "February 2025",
    type: "Baby Shower",
  },
  {
    name: "Zion L.",
    rating: 4,
    comment:
      "Loved the energy and elegance. The montage was powerful and perfectly timed.",
    date: "January 2025",
    type: "Graduation",
  },
  {
    name: "Sierra W.",
    rating: 5,
    comment:
      "Our Sweet 16 looked like a Hollywood premiere. Luxe Affairs exceeded every expectation.",
    date: "December 2024",
    type: "Sweet 16",
  },
  {
    name: "Andre F.",
    rating: 5,
    comment:
      "The team brought our vision to life with precision and luxury. The lighting was unreal.",
    date: "November 2024",
    type: "Wedding",
  },
  {
    name: "Kendra L.",
    rating: 4,
    comment:
      "Beautiful montage and great communication. The final product was emotional and polished.",
    date: "October 2024",
    type: "Memorial Tribute",
  },
  {
    name: "Rico M.",
    rating: 5,
    comment:
      "Our concert recap video was next‑level. Luxe Affairs knows how to create a cinematic vibe.",
    date: "September 2024",
    type: "Concert",
  },
  {
    name: "Harper J.",
    rating: 5,
    comment:
      "The team handled everything with grace and clarity. Our proposal video was magical.",
    date: "August 2024",
    type: "Proposal",
  },
];

export default function Testimonials() {
  const [filter, setFilter] = useState("All");
  const [allReviews, setAllReviews] = useState(staticTestimonials);

  // ⭐ UPDATED — Fetch real reviews from MongoDB
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get("/reviews");
        const mongoReviews = res.data.map((r) => ({
          name: r.name,
          rating: r.rating,
          comment: r.review,
          date: r.date || "Recently",
          type: r.eventType || "General",
        }));

        // Merge static + real reviews
        setAllReviews([...mongoReviews, ...staticTestimonials]);
      } catch (err) {
        console.error("Error loading reviews:", err);
        setAllReviews(staticTestimonials); // fallback
      }
    };

    fetchReviews();
  }, []);

  const filteredTestimonials =
    filter === "All"
      ? allReviews
      : allReviews.filter((t) => t.type === filter);

  const averageRating =
    allReviews.reduce((sum, t) => sum + t.rating, 0) / allReviews.length;

  const uniqueTypes = ["All", ...new Set(allReviews.map((t) => t.type))];

  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-4 drop-shadow-xl">
        Client Testimonials
      </h1>

      {/* Intro */}
      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-3xl mx-auto mb-6 drop-shadow-xl">
        Every Luxe event leaves a legacy. Here’s what our clients have to say.
      </p>

      {/* Add Review Button */}
      <div className="text-center mb-12">
        <a
          href="/submit-review"
          className="inline-block bg-yellow-300 text-purple-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 drop-shadow-xl"
        >
          Add Your Luxe Review
        </a>
      </div>

      {/* Average Rating */}
      <div className="text-center mb-10">
        <div className="text-3xl font-bold drop-shadow-xl">
          {averageRating.toFixed(1)} / 5.0
        </div>
        <div className="text-yellow-300 text-2xl">
          {"★".repeat(Math.round(averageRating))}
          {"☆".repeat(5 - Math.round(averageRating))}
        </div>
        <p className="text-sm opacity-80 mt-1">
          Based on {allReviews.length} verified reviews
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition backdrop-blur-xl border ${
              filter === type
                ? "bg-yellow-300 text-purple-900 border-yellow-300"
                : "bg-white/10 border-white/20 text-white hover:bg-white/20"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredTestimonials.map((review, index) => (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            {/* Avatar + Name */}
            <div className="flex items-center mb-4">
              <div className="bg-white/20 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3 backdrop-blur-xl">
                {review.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-semibold drop-shadow-xl">
                  {review.name}
                </h2>
                <span className="text-sm opacity-80">
                  {review.date} • {review.type}
                </span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-300 text-xl">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-white/30 text-xl">★</span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-base italic drop-shadow-xl">
              “{review.comment}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

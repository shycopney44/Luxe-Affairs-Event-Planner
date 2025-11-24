import React from "react";

const testimonials = [
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
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 px-6 pt-32 pb-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-4">
        Client Testimonials
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-4">
        Every Luxe event leaves a legacy. Here’s what our clients have to say about their experience.
      </p>

      {/* CTA Link */}
      <div className="text-center mb-12">
        <a
          href="/submit-review"
          className="text-purple-700 font-semibold underline hover:text-pink-500 transition"
        >
          Click here to view and add Reviews & Testimonials
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Avatar + Name */}
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-700 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                {review.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-700">{review.name}</h2>
                <span className="text-sm text-gray-500">{review.date} • {review.type}</span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-xl">★</span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 text-base italic">“{review.comment}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Montage() {
  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-6">
        Customized Video Montages
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        A Luxe montage is more than a slideshow — it’s a cinematic celebration of your story. We blend your favorite photos and videos with music, transitions, and special effects to create a stunning visual experience.
      </p>

      {/* Package Options with Embedded Videos */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Option 1: Photo + Video Montage */}
        <div className="bg-purple-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Photo + Video Montage</h2>
          <div className="aspect-video mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/FeqtqB3tSQg"
              title="Photo + Video Montage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></iframe>
          </div>
          <p className="text-gray-700">
            A cinematic video montage blending your favorite photos and video clips with music, transitions, and special effects. Perfect for weddings, birthdays, and milestone celebrations.
          </p>
        </div>

        {/* Option 2: Drone Video Highlight */}
        <div className="bg-purple-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Drone Video Highlight</h2>
          <div className="aspect-video mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/RzHhsRq7IrU"
              title="Drone Video Highlight"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></iframe>
          </div>
          <p className="text-gray-700">
            A high-definition aerial video captured by drone, edited with music and cinematic transitions. Ideal for outdoor weddings, venue showcases, and grand entrances.
          </p>
        </div>
      </div>

      {/* Presentation Setup */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700">
          We handle the full A/V setup — from large TVs to projectors and screens — so your montage plays beautifully at your event.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/inquire"
          className="inline-block bg-purple-700 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-pink-500 transition"
        >
          Book Your Montage
        </a>
      </div>
    </div>
  );
}

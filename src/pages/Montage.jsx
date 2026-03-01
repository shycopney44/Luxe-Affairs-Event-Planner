import React from "react";

export default function Montage() {
  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-12 z-10">

      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-6 drop-shadow-xl">
        Customized Video Montages
      </h1>

      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-xl">
        A Luxe montage is more than a slideshow — it’s a cinematic celebration of your story.
        We blend your favorite photos and videos with music, transitions, and special effects
        to create a stunning visual experience.
      </p>

      {/* Package Options */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

        {/* Option 1 */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-xl">
            Photo + Video Montage
          </h2>

          <div className="aspect-video mb-4 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FeqtqB3tSQg"
              title="Photo + Video Montage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-lg font-bold text-white/90 drop-shadow-xl">
            A cinematic video montage blending your favorite photos and video clips with music,
            transitions, and special effects. Perfect for weddings, birthdays, and milestone celebrations.
          </p>
        </div>

        {/* Option 2 */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-xl">
            Drone Video Highlight
          </h2>

          <div className="aspect-video mb-4 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RzHhsRq7IrU"
              title="Drone Video Highlight"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-lg font-bold text-white/90 drop-shadow-xl">
            A high-definition aerial video captured by drone, edited with music and cinematic transitions.
            Ideal for outdoor weddings, venue showcases, and grand entrances.
          </p>
        </div>
      </div>

      {/* Presentation Setup */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xl font-bold text-white/90 drop-shadow-xl">
          We handle the full A/V setup — from large TVs to projectors and screens —
          so your montage plays beautifully at your event.
        </p>
      </div>

    </div>
  );
}

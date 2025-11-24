import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundSlideshow from "../components/BackgroundSlideshow";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Slideshow */}
      <BackgroundSlideshow />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Fixed Header */}
        <Header />

        {/* Spacer to offset fixed header height */}
        <div className="h-20" />

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-white text-center px-4 pt-32 space-y-10 animate-fadeIn">
          {/* Hero */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl bg-black/40 px-8 py-6 rounded-2xl shimmer-text pulse-glow animate-zoomIn">
            Welcome to <span className="text-pink-300">Luxe Affairs</span>
          </h1>

          {/* Masterclass Statement */}
          <p className="text-2xl md:text-3xl font-bold max-w-5xl bg-black/30 px-8 py-6 rounded-xl drop-shadow-xl animate-fadeIn delay-200">
            Welcome to Luxe Affairs — where unforgettable experiences begin. <br />
            Join our upcoming masterclasses and learn how to lead with style, precision, and impact.
          </p>

          {/* Promo Video */}
          <div className="w-full max-w-[90vw] aspect-video animate-fadeIn delay-300 px-4 md:px-0">
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/Rw2Vgg7wG6g?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
              title="Event Promo Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* About Section */}
          <section className="w-full flex justify-center px-4 md:px-0 mb-20">
            <div className="max-w-5xl text-center bg-black/40 text-white px-8 py-12 rounded-2xl drop-shadow-2xl animate-fadeIn delay-500">
              <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight shimmer-text pulse-glow mb-8">
                About <span className="text-pink-300">Luxe Affairs</span>
              </h2>
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                Headquartered in Charlotte, North Carolina, Luxe Affairs is a premier event planning firm specializing in high-end experiences that blend elegance, innovation, and emotional impact. For over a decade, we’ve transformed ordinary gatherings into unforgettable affairs.
              </p>
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                Our portfolio spans over 500 luxury events nationwide — from rose-garden weddings in Napa Valley to executive galas in Manhattan. Each event is a reflection of our commitment to precision, storytelling, and elevated design.
              </p>
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                What began as a bold vision in a modest studio has grown into a legacy brand trusted by clients who value clarity, leadership, and luxury. Our journey has been shaped by breakthrough moments, strategic pivots, and a relentless pursuit of excellence.
              </p>
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                Today, Luxe Affairs stands as a beacon for intentional celebration. Whether you're planning a milestone or elevating your brand through experience, we’re here to lead with clarity — and glow with impact.
              </p>
              <p className="text-2xl italic text-pink-300">
                Designed with clarity. Built for legacy. ✨
              </p>
            </div>
          </section>

          {/* Gallery Preview Strip */}
          <section className="w-full px-6 md:px-20 mb-24">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-8 shimmer-text pulse-glow">
                Event Highlights
              </h2>

              <div className="flex space-x-6 overflow-x-auto pb-4 scroll-snap-x snap-mandatory">
                {[
                  { src: "/images/banquet-bg5.jpeg", alt: "Banquet Elegance 5" },
                  { src: "/images/banquet-bg6.jpeg", alt: "Banquet Elegance 6" },
                  { src: "/images/banquet-bg7.jpeg", alt: "Banquet Elegance 7" },
                  { src: "/images/banquet-bg9.jpeg", alt: "Banquet Elegance 9" },
                  { src: "/images/banquet-bg11.jpeg", alt: "Banquet Elegance 11" },
                  { src: "/images/banquet-bg12.jpeg", alt: "Banquet Elegance 12" },
                ].map((img, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] md:min-w-[320px] snap-start relative group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                      <span className="text-white text-lg font-semibold">{img.alt}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/gallery"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
                >
                  View Full Gallery
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Section Divider Spacer */}
<div className="w-full my-16 flex justify-center">
  <div className="h-1 w-24 md:w-32 bg-pink-300 rounded-full animate-pulse" />
</div>

        

        {/* Location, Contact, Follow Section */}
<section className="w-full px-6 md:px-20 mb-24">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
    {/* Location */}
    <div className="bg-purple-800 rounded-2xl p-6 shadow-xl hover:shadow-pink-500/30 transition">
      <h3 className="text-2xl font-bold text-pink-300 mb-4">📍 Location</h3>
      <p className="text-lg mb-2">Charlotte, North Carolina</p>
      <a
        href="https://maps.google.com/?q=Charlotte+NC"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 underline hover:text-pink-300"
      >
        View on Google Maps
      </a>
    </div>

    {/* Contact */}
    <div className="bg-purple-800 rounded-2xl p-6 shadow-xl hover:shadow-pink-500/30 transition">
      <h3 className="text-2xl font-bold text-pink-300 mb-4">📞 Contact</h3>
      <p className="text-lg mb-2">
        Email:{" "}
        <a
          href="mailto:info@luxeaffairs.com"
          className="text-pink-400 underline hover:text-pink-300"
        >
          info@luxeaffairs.com
        </a>
      </p>
      <p className="text-lg">
        Phone:{" "}
        <a
          href="tel:+17045551234"
          className="text-pink-400 underline hover:text-pink-300"
        >
          (704) 555-1234
        </a>
      </p>
    </div>

    {/* Follow */}
    <div className="bg-purple-800 rounded-2xl p-6 shadow-xl hover:shadow-pink-500/30 transition">
      <h3 className="text-2xl font-bold text-pink-300 mb-4">📲 Follow</h3>
      <p className="text-lg mb-2">
        Instagram:{" "}
        <a
          href="https://instagram.com/luxeaffairs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 underline hover:text-pink-300"
        >
          @luxeaffairs
        </a>
      </p>
      <p className="text-lg mb-2">
        Facebook:{" "}
        <a
          href="https://facebook.com/luxeaffairs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 underline hover:text-pink-300"
        >
          Luxe Affairs
        </a>
      </p>
      <p className="text-lg">
        TikTok:{" "}
        <a
          href="https://tiktok.com/@luxeaffairs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 underline hover:text-pink-300"
        >
          @luxeaffairs
        </a>
      </p>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

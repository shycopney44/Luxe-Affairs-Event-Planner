import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-white">

      {/* Spacer for fixed header */}
      <div className="h-24" />

      {/* HERO SECTION */}
      <div className="text-center px-4 space-y-6 mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold text-pink-300 drop-shadow-xl bg-black/40 px-8 py-6 rounded-2xl">
          Welcome to <span className="text-white drop-shadow-xl">Luxe Affairs</span>
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-white/90 drop-shadow-xl max-w-4xl mx-auto bg-black/30 px-8 py-6 rounded-xl">
          Luxe Affairs is where intentional celebration meets elevated design.  
          From intimate gatherings to large‑scale productions, we curate experiences 
          that feel effortless, cinematic, and unforgettable.
        </p>
      </div>

      {/* MASTERCLASS COMING SOON */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 drop-shadow-xl">
          Masterclass Coming Soon
        </h2>
      </div>

      {/* MASTERCLASS INTRO TEXT */}
      <div className="text-center max-w-4xl mx-auto mb-24 px-4">
        <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed drop-shadow-xl bg-black/30 px-6 py-6 rounded-xl">
          A new standard in event mastery is on the horizon.  
          The Luxe Affairs Masterclass distills years of luxury‑grade execution, intentional design, 
          and real‑world experience into a transformative learning experience for planners and creative 
          entrepreneurs ready to rise.
        </p>

        <p className="text-lg md:text-xl font-semibold text-white/80 mt-6 leading-relaxed drop-shadow-xl bg-black/20 px-6 py-4 rounded-xl">
          This program sharpens your eye, elevates your process, and strengthens your confidence—so you can 
          plan with clarity, lead with excellence, and build a brand rooted in legacy.  
          Your evolution begins soon. Watch the preview below.
        </p>
      </div>

      {/* YouTube Video */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-24">
        <div className="w-full aspect-video rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Rw2Vgg7wG6g?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
            title="Event Promo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="w-full flex justify-center px-4 md:px-0 mb-24">
        <div className="max-w-5xl text-center bg-black/40 px-8 py-12 rounded-2xl drop-shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-pink-300 drop-shadow-xl mb-8">
            About Luxe Affairs
          </h2>

          <p className="text-2xl font-bold leading-relaxed drop-shadow-xl mb-6">
            Luxe Affairs is more than an event planning company — it is a sanctuary for
            intentional celebration. Rooted in Charlotte and expanding with vision and
            purpose, we specialize in crafting experiences that feel cinematic, elevated,
            and emotionally resonant.
          </p>

          <p className="text-2xl font-bold leading-relaxed drop-shadow-xl mb-6">
            Every event we design is guided by a philosophy of clarity and legacy. We
            believe that moments should be felt, not just seen — that ambiance, detail,
            and storytelling work together to create experiences that linger long after
            the lights fade. From intimate gatherings to large‑scale productions, our
            approach blends luxury coordination, refined aesthetics, and seamless
            execution.
          </p>

          <p className="text-2xl font-bold leading-relaxed drop-shadow-xl mb-6">
            With decades of combined expertise in hospitality, design, and event
            production, our team brings a level of professionalism and artistry that
            transforms ordinary occasions into unforgettable milestones. We collaborate
            closely with clients, honoring their vision while elevating it with our
            signature Luxe Affairs touch — intentional, polished, and deeply personal.
          </p>

          <p className="text-2xl italic text-pink-300 drop-shadow-xl">
            Luxe Affairs is where clarity becomes beauty, and beauty becomes legacy.
          </p>
        </div>
      </section>


      {/* PARTNER SLIDER SECTION */}
<section className="w-full py-20 bg-black/40 backdrop-blur-xl mb-24">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-300 mb-12 drop-shadow-xl">
    Trusted Partners & Collaborators
  </h2>

  <div className="relative w-full overflow-hidden">

    {/* Gradient Fade Left */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/70 to-transparent z-10 pointer-events-none"></div>

    {/* Gradient Fade Right */}
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/70 to-transparent z-10 pointer-events-none"></div>

    {/* TRUE Seamless Marquee */}
    <div className="marquee">

      {/* FIRST SET */}
      {[
        "walmart.png",
        "target.png",
        "homedepot.png",
        "vivia.png",
        "att.png",
        "sunrun.png",
        "wellcare.png",
        "humana.png",
      ].map((logo, index) => (
        <div key={`set1-${index}`} className="logo-card">
          <img
            src={`/partners/${logo}`}
            alt={logo}
            className="logo-img"
          />
        </div>
      ))}

      {/* DUPLICATE SET (REQUIRED FOR SEAMLESS LOOP) */}
      {[
        "walmart.png",
        "target.png",
        "homedepot.png",
        "vivia.png",
        "att.png",
        "sunrun.png",
        "wellcare.png",
        "humana.png",
      ].map((logo, index) => (
        <div key={`set2-${index}`} className="logo-card">
          <img
            src={`/partners/${logo}`}
            alt={logo}
            className="logo-img"
          />
        </div>
      ))}

    </div>
  </div>
</section>


{/* EVENT STYLES TITLE */}
<h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-300 mb-16 drop-shadow-xl">
  Event Styles
</h2>

{[
  {
    title: "Celebrating Life’s Milestones",
    description:
      "Luxe Affairs curates birthday experiences that feel personal, vibrant, and unforgettable. From intimate dinners to lavish surprise parties, we design every detail to reflect your story and style.",
    image: "/eventStyles/birthday.jpg",
  },
  {
    title: "Designed for Forever",
    description:
      "Our wedding experiences are built on clarity, elegance, and emotional impact. From venue styling to vendor coordination, Luxe Affairs ensures your day feels cinematic, sacred, and seamless.",
    image: "/eventStyles/wedding.jpg",
  },
  {
    title: "Professionalism with Presence",
    description:
      "Luxe Affairs transforms corporate gatherings into branded experiences. Whether it’s a gala, retreat, or launch, we deliver clarity, polish, and elevated hospitality that reflects your mission.",
    image: "/eventStyles/corporate.jpg",
  },
  {
    title: "Intimate Moments, Elevated",
    description:
      "We specialize in private affairs that feel soulful and intentional. Luxe Affairs blends ambiance, culinary artistry, and emotional resonance to create unforgettable evenings.",
    image: "/eventStyles/private.jpg",
  },
  {
    title: "Celebrating Legacy",
    description:
      "Whether it’s one year or fifty, Luxe Affairs honors your journey with elegance and intimacy. We design anniversary events that reflect your love story and elevate every moment.",
    image: "/eventStyles/anniversary.jpg",
  },
  {
    title: "Graceful Farewells",
    description:
      "Luxe Affairs offers compassionate, dignified event planning for memorials and celebrations of life. We handle every detail with sensitivity, clarity, and respect.",
    image: "/eventStyles/memorial.jpg",
  },
].map((event, index) => (
  <section
    key={index}
    className={`relative max-w-6xl mx-auto mb-24 px-4 flex flex-col md:flex-row gap-10 items-center ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* IMAGE — CLEAN, NO SHADOWS */}
    <img
      src={event.image}
      alt={event.title}
      className="h-72 md:h-96 w-full object-cover rounded-2xl"
    />

    {/* TEXT — UNCHANGED */}
    <div className="space-y-4 z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-200 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
        {event.title}
      </h2>

      <p className="text-white text-lg leading-relaxed font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
        {event.description}
      </p>
    </div>
  </section>
))}

{/* LOCATION SECTION */}
<section className="mt-20 text-center">

  {/* TITLE + ADDRESS */}
  <div className="max-w-4xl mx-auto px-4 mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-pink-200 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
      Visit Luxe Affairs Charlotte
    </h2>

    <p className="text-white text-lg font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] mt-3">
      615 N Tryon St, Charlotte, NC 28202
    </p>
  </div>

  {/* FULL-WIDTH MAP */}
  <div className="w-full h-80 md:h-[450px]">
    <iframe
      title="Luxe Affairs Charlotte Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2068.982989036!2d-80.837251!3d35.229003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02c6e0f7d2f%3A0x7f3f0e6e8d3d4e!2s615%20N%20Tryon%20St%2C%20Charlotte%2C%20NC%2028202!5e0!3m2!1sen!2sus!4v1700000000000"
    ></iframe>
  </div>

  {/* SACRAMENTO COMING SOON */}
  <p className="text-white/80 text-sm italic font-semibold mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
    Sacramento location coming soon.
  </p>

  {/* CTA */}
  <div className="mt-12 px-4">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
      Ready to Create Your Luxe Experience?
    </h3>

    <a
      href="/inquire"
      className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
    >
      Inquire Now
    </a>
  </div>

</section>
    </div>
  );
}

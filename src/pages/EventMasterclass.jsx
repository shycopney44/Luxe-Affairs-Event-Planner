import React from "react";

export default function EventMasterclass() {
  return (
    <div className="relative min-h-screen text-white px-6 pt-32 pb-20 z-10">

      {/* Header — UPDATED */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 text-center mb-6 drop-shadow-xl">
        Luxe Event Masterclass
      </h1>

      {/* Intro Text — UPDATED */}
      <p className="text-center text-xl md:text-2xl font-bold text-white/90 max-w-3xl mx-auto mb-12 drop-shadow-xl">
        A signature experience designed for those who lead with intention, elevate with clarity,
        and build legacy through celebration.
      </p>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4 drop-shadow-xl">
          About the Masterclass
        </h2>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          Luxe Affairs began as a quiet dream — a vision rooted in elegance, clarity, and emotional impact.
          Over the years, that dream evolved into a movement: a standard of excellence that transforms
          ordinary events into cinematic experiences.
        </p>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          This masterclass is the culmination of that journey — a blueprint for those who want to build
          a brand that feels intentional, elevated, and unforgettable.
        </p>

        <p className="text-white/90 text-lg drop-shadow-xl">
          I’m no longer just dreaming — I’m living it. And now, I’m opening the doors for you to do the same.
        </p>
      </section>

      {/* Who It's For */}
      <section className="max-w-4xl mx-auto mb-16 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4 drop-shadow-xl">
          Who Is It For?
        </h2>

        <ul className="list-disc list-inside text-white/90 text-lg space-y-3 drop-shadow-xl">
          <li>Event planners ready to elevate their brand and workflow</li>
          <li>Creative entrepreneurs seeking clarity and legacy</li>
          <li>Venue owners and stylists who want cinematic presentation</li>
          <li>Anyone building a business rooted in celebration and impact</li>
        </ul>
      </section>

      {/* How You'll Learn */}
      <section className="max-w-4xl mx-auto mb-16 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4 drop-shadow-xl">
          How You’ll Learn
        </h2>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          You don’t need a degree or a long résumé to become a powerful, internationally recognized
          event professional. What you need is clarity, intention, and a blueprint — and that’s exactly
          what this masterclass delivers.
        </p>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          Luxe Affairs blends high‑level industry training with real‑world application. This isn’t a
          generic online course — it’s a cinematic, immersive learning experience designed to elevate
          your craft and transform the way you approach events.
        </p>

        <ul className="list-disc list-inside text-white/90 text-lg space-y-3 drop-shadow-xl">
          <li>
            <span className="text-yellow-300 font-semibold">Enroll & Begin —</span>
            No deadlines, no pressure. Join anytime and gain access to your course materials within
            two business days.
          </li>

          <li>
            <span className="text-yellow-300 font-semibold">Learn Online & In‑Person —</span>
            Study at your own pace through our digital modules, then step into our exclusive
            in‑person training sessions — the same hands‑on experience showcased in the Luxe Affairs
            YouTube Masterclass.
          </li>

          <li>
            <span className="text-yellow-300 font-semibold">Submit Assignments —</span>
            Complete your work inside the Luxe Student Portal and receive personalized audio and
            video feedback tailored to your brand.
          </li>

          <li>
            <span className="text-yellow-300 font-semibold">Graduate with Confidence —</span>
            Finish in as little as 3 months, earn your Luxe Certification, and begin booking clients
            with a portfolio rooted in clarity, luxury, and cinematic presentation.
          </li>
        </ul>
      </section>

      {/* Certification Section */}
      <section className="max-w-4xl mx-auto mb-16 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4 drop-shadow-xl">
          Your Event & Wedding Planning Certification
        </h2>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          Once you’ve completed your Luxe Masterclass training, you’ll receive your official certification and professional designation.
          This credential becomes part of your brand identity — a symbol of clarity, intention, and elevated execution.
        </p>

        <p className="text-white/90 text-lg mb-6 drop-shadow-xl">
          Your certification demonstrates that you’ve completed professional event and wedding planning training and that you possess
          the skills, strategy, and creative eye required to plan, design, and execute flawless private and corporate events.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-300 mb-4 drop-shadow-xl">
          Your Certification Has Many Benefits
        </h3>

        <ul className="list-disc list-inside text-white/90 text-lg space-y-3 drop-shadow-xl">
          <li>Start your own event and wedding planning business</li>
          <li>Provide coordination and vendor outreach services to clients</li>
          <li>Work for an established event or wedding planning company</li>
          <li>Join a corporation as an internal event coordinator</li>
          <li>Plan events for venues, hotels, restaurants, and more</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/masterclass-signup"
          className="inline-block bg-yellow-300 text-purple-900 text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 drop-shadow-xl"
        >
          Reserve Your Spot
        </a>
      </div>
    </div>
  );
}

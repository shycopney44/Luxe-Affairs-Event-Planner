import React from "react";

export default function EventMasterclass() {
  return (
    <div className="min-h-screen bg-white px-6 pt-32 pb-12">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 mb-6">
        Luxe Event Masterclass
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        A signature experience designed for those who lead with intention, elevate with clarity, and build legacy through celebration.
      </p>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">About the Masterclass</h2>
        <p className="text-gray-700 text-lg mb-6">
          Luxe Affairs began as a quiet dream — a vision rooted in elegance, clarity, and emotional impact. I started with nothing but faith, a deep love for celebration, and a calling to create experiences that felt cinematic and unforgettable. Over the years, I’ve planned weddings, milestone events, and brand activations that didn’t just impress — they transformed. Every layout, lighting cue, and montage was crafted with intention, and every client walked away feeling seen, celebrated, and elevated.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          This masterclass is the culmination of that journey. It’s built for those who want more than templates — it’s for leaders who want to build legacy through celebration. I’ll teach you how to design with emotion, lead with clarity, and deliver events that feel like breakthrough moments. You’ll learn the exact strategies I use to coordinate vendors, communicate with clients, and execute cinematic setups that leave lasting impressions.
        </p>
        <p className="text-gray-700 text-lg">
          I’m no longer just dreaming — I’m living it. And now, I’m ready to teach others how to rise. If you’ve ever felt called to lead with elegance, build a brand that speaks volumes, or create events that move people — this masterclass is for you. Let’s build legacy together.
        </p>
      </section>

      {/* Who It's For */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Who Is It For?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Event planners ready to elevate their brand and workflow</li>
          <li>Creative entrepreneurs seeking clarity and legacy</li>
          <li>Venue owners and stylists who want cinematic presentation</li>
          <li>Anyone building a business rooted in celebration and impact</li>
        </ul>
      </section>

      {/* What to Expect */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">What Can I Expect?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Step-by-step guidance on layout, lighting, and montage strategy</li>
          <li>Real-world examples from Luxe Affairs events</li>
          <li>Templates for client communication and vendor coordination</li>
          <li>Breakthrough moments that align your brand with clarity and impact</li>
        </ul>
      </section>

      {/* Masterclass Details */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Masterclass Details</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li><strong>Total Length:</strong> 7.5 hours of immersive content</li>
          <li><strong>Assessments:</strong> None — this is clarity-driven, not test-driven</li>
          <li><strong>Region:</strong> Global — accessible from anywhere</li>
          <li><strong>Cost:</strong> USD $249</li>
          <li><strong>Access:</strong> Lifetime access through Luxe Affairs portal</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/masterclass-signup"
          className="inline-block bg-purple-700 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-pink-500 transition"
        >
          Reserve Your Spot
        </a>
      </div>
    </div>
  );
}

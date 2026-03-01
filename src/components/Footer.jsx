import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-xl bg-white/10 border-t border-white/20 text-white py-12 mt-20 relative z-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* FIVE-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* SITE LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300 drop-shadow-xl">Site Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-pink-300">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-pink-300">Gallery</Link></li>
              <li><Link to="/lighting" className="hover:text-pink-300">Lighting</Link></li>
              <li><Link to="/montage" className="hover:text-pink-300">Montage</Link></li>
              <li><Link to="/testimonials" className="hover:text-pink-300">Testimonials</Link></li>
              <li><Link to="/event-masterclass" className="hover:text-pink-300">Event Masterclass</Link></li>
              <li><Link to="/contact" className="hover:text-pink-300">Contact</Link></li>
              <li><Link to="/inquire" className="hover:text-pink-300">Inquire</Link></li>
            </ul>
          </div>

          {/* VISIT US */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300 drop-shadow-xl">Visit Us</h3>
            <p className="text-sm leading-relaxed">
              615 N Tryon St<br />
              Charlotte, NC 28202
            </p>
            <Link to="/contact" className="text-pink-300 text-sm hover:underline block mt-2">
              Get Directions
            </Link>
          </div>

          {/* SERVING AREA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300 drop-shadow-xl">Serving Area</h3>
            <p className="text-sm leading-relaxed">
              Charlotte, NC<br />
              <span className="text-white/70">and surrounding areas</span>
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300 drop-shadow-xl">Contact Us</h3>
            <p className="text-sm mb-2">(704) 555-8427</p>
            <p className="text-sm mb-2">hello@luxeaffairs.com</p>
            <Link to="/contact" className="text-pink-300 text-sm hover:underline">
              Send a Message
            </Link>
          </div>

          {/* BUSINESS HOURS — NOW ITS OWN COLUMN */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-300 drop-shadow-xl">Business Hours</h3>
            <p className="text-sm leading-relaxed">
              Monday: Closed<br />
              Tue – Fri: 10:00 AM – 6:00 PM<br />
              Sat – Sun: Closed<br /><br />
              <span className="text-white/70">
                Catering offered 24/7/365.<br />
                Venue open 8 AM – Midnight, 7 days a week.<br />
                Saturday hours by appointment.
              </span>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-12 text-sm text-white/80">
          © {new Date().getFullYear()} Luxe Affairs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

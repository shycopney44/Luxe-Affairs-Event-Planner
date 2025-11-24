import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 text-white text-center py-6 shadow-inner mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
        <nav className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/gallery" className="hover:text-yellow-200">Gallery</Link>
          <Link to="/lighting" className="hover:text-yellow-200">Lighting</Link>
          <Link to="/montage" className="hover:text-yellow-200">Montage</Link>
          <Link to="/testimonials" className="hover:text-yellow-200">Testimonials</Link>
          <Link to="/contact" className="hover:text-yellow-200">Contact</Link>
        </nav>
        <p className="text-sm">&copy; {new Date().getFullYear()} Luxe Affairs. All rights reserved.</p>
        <p className="text-sm italic">Designed with clarity, built for legacy. ✨</p>
      </div>
    </footer>
  );
}

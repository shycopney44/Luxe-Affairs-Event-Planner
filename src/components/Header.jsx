import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Luxe-Logo.png";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Luxe Affairs Logo"
            className="h-16 w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-white font-medium text-sm sm:text-base drop-shadow-xl">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link to="/lighting" className="hover:text-yellow-300">Lighting</Link>
          <Link to="/montage" className="hover:text-yellow-300">Montage</Link>
          <Link to="/testimonials" className="hover:text-yellow-300">Testimonials</Link>
          <Link to="/event-masterclass" className="hover:text-yellow-300">Event Masterclass</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>

        {/* Inquire Button */}
        <Link
          to="/inquire"
          className="ml-4 bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          Inquire
        </Link>
      </div>
    </header>
  );
}

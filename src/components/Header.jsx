import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Luxe-Logo.png";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-700 via-pink-500 to-pink-400 shadow-lg py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Far Left */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Luxe Affairs Logo"
            className="h-16 w-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-white font-medium text-sm sm:text-base">
          <Link to="/" className="hover:text-yellow-200">Home</Link>
          <Link to="/gallery" className="hover:text-yellow-200">Gallery</Link>
          <Link to="/lighting" className="hover:text-yellow-200">Lighting</Link>
          <Link to="/montage" className="hover:text-yellow-200">Montage</Link>
          <Link to="/testimonials" className="hover:text-yellow-200">Testimonials</Link>
          <Link to="/event-masterclass" className="hover:text-yellow-200">Event Masterclass</Link>
          <Link to="/contact" className="hover:text-yellow-200">Contact</Link>
        </nav>

        {/* Inquire Button - Far Right */}
        <Link
          to="/inquire"
          className="ml-4 bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-colors duration-300"
        >
          Inquire
        </Link>
      </div>
    </header>
  );
}

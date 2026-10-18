"use client";

import React, { useState } from "react";
import { Phone, Menu, X, MessageCircle, Clock, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-[#e5d5be] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <Logo size="sm" showText={true} />
        </a>

        {/* Clean, Simple Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-stone-700">
          <a
            href="#offerings"
            className="hover:text-[#601212] transition-colors py-1"
          >
            Sweets &amp; Food
          </a>
          <a
            href="#hampers"
            className="hover:text-[#601212] transition-colors py-1"
          >
            Wedding Boxes
          </a>
          <a
            href="#about"
            className="hover:text-[#601212] transition-colors py-1"
          >
            About Us
          </a>
          <a
            href="#location"
            className="hover:text-[#601212] transition-colors py-1"
          >
            Shop &amp; Timings
          </a>
        </nav>

        {/* Single Prominent Call Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:09855016191"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#601212] hover:bg-[#781818] text-white font-bold text-sm tracking-wide transition shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#e2b763]" />
            <span>098550 16191</span>
          </a>

          <a
            href="https://wa.me/918285391000?text=Hello%20Gagan%20Sweets%2C%20I%20would%20like%20to%20inquire%20about%20your%20sweets%20and%20orders."
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-[#15803d]/10 hover:bg-[#15803d]/20 text-[#15803d] transition"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg text-[#601212] hover:bg-stone-100 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#ebdcc8] px-6 py-6 space-y-4 text-base font-semibold text-stone-800 shadow-xl">
          <a
            href="#offerings"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#601212] border-b border-stone-100"
          >
            🍬 Sweets &amp; Food Menu
          </a>
          <a
            href="#hampers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#601212] border-b border-stone-100"
          >
            🎁 Wedding &amp; Festive Hampers
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#601212] border-b border-stone-100"
          >
            📜 About Our Heritage
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#601212] border-b border-stone-100"
          >
            📍 Shop Location &amp; Timings
          </a>

          {/* Quick Contact for Mobile */}
          <div className="pt-2 space-y-3">
            <a
              href="tel:09855016191"
              className="w-full py-3 rounded-xl bg-[#601212] text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#e2b763]" />
              <span>Call Shop: 098550 16191</span>
            </a>
            <a
              href="https://wa.me/918285391000"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-[#15803d] text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 82853 91000</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-stone-500 space-y-1">
            <p className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8c6721]" />
              <span>Open Daily: 10:00 AM – 10:00 PM</span>
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8c6721]" />
              <span>Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}


"use client";

import React from "react";
import { Phone, MapPin, Clock, ArrowUp, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#4d0c0c] text-stone-300 pt-14 pb-8 border-t-4 border-[#c69229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#6e1818]">
          {/* Column 1: About & Trust */}
          <div className="space-y-3">
            <Logo size="md" variant="dark" />
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
              Committed to preserving the authentic flavors of Punjab through 100% pure desi ghee, fresh morning preparations, and warm family hospitality.
            </p>
            <p className="text-xs text-[#e2b763] font-semibold pt-1">
              ⭐ 4.6★ Dining &bull; 4.5★ (5,504+ Delivery Orders)
            </p>
          </div>

          {/* Column 2: Contact & Ordering */}
          <div className="space-y-3">
            <h4 className="font-serif-royal font-bold text-lg text-white">
              Direct Contact &amp; Orders
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="flex items-start gap-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-[#e2b763] shrink-0 mt-0.5" />
                <span>Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran, Punjab</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e2b763] shrink-0" />
                <a
                  href="tel:09855016191"
                  className="font-mono font-bold text-white hover:text-[#e2b763] text-sm"
                >
                  098550 16191
                </a>
                <span className="text-stone-500">|</span>
                <a
                  href="tel:+918285391000"
                  className="font-mono font-bold text-white hover:text-[#e2b763] text-sm"
                >
                  +91 82853 91000
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#e2b763] shrink-0" />
                <a
                  href="https://wa.me/918285391000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-200 hover:text-white underline text-xs"
                >
                  Chat with us on WhatsApp (+91 82853 91000)
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Hours & Offerings */}
          <div className="space-y-3">
            <h4 className="font-serif-royal font-bold text-lg text-white">
              Shop Timings &amp; Specialties
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e2b763] shrink-0" />
                <span className="font-semibold text-white">
                  Monday – Sunday: 10:00 AM – 10:00 PM
                </span>
              </p>
              <p className="text-xs text-stone-300 leading-relaxed pt-1">
                <strong>Our Specialties:</strong> Pure Desi Ghee Mithai &bull; Family Rasoi Buffet &bull; Street Chaat &bull; Hakka Noodles &bull; Custom Birthday &amp; Wedding Cakes &bull; Festival Gift Baskets.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; 2026 Gagan Sweets, Rasoi And Bakers. All rights reserved. &bull; Tarn Taran, Punjab
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#601212] hover:bg-[#781818] text-[#e2b763] hover:text-white transition font-medium text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

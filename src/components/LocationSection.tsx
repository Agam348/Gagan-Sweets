"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, Star, ExternalLink } from "lucide-react";

export function LocationSection() {
  const mapSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Gagan+Sweets+Rasoi+And+Bakers+Near+Chaar+Khamba+Chowk+Sarhali+Road+Tarn+Taran";

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#fbf7f0] border-t border-[#ebdcc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-10 bg-[#c69229]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#8c6721] uppercase">
              Visit Our Shop &amp; Rasoi
            </span>
            <div className="h-px w-10 bg-[#c69229]" />
          </div>

          <h2 className="font-serif-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#540e0e]">
            Store Location, Timings &amp; Directions
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Tarn Taran. Visit us for pure sweets, dine-in family rasoi, and fresh customized cakes.
          </p>
        </div>

        {/* Info Grid: Details Card & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#e5d5be] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header inside card */}
              <div className="border-b border-[#ebdcc8] pb-5">
                <h3 className="font-serif-royal font-bold text-2xl text-[#601212]">
                  Gagan Sweets, Rasoi And Bakers
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#8c6721] mt-1">
                  Chinese &bull; Mithai &bull; Street Food &bull; American &bull; Bakery
                </p>

                {/* Ratings */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-[#15803d] text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    4.6★
                  </span>
                  <span className="text-xs text-stone-600 font-medium">
                    44 Dining Ratings
                  </span>
                  <span className="text-stone-300">|</span>
                  <span className="bg-[#15803d] text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    4.5★
                  </span>
                  <span className="text-xs text-stone-600 font-medium">
                    5,504+ Delivery Orders
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#f3e5cd] text-[#601212] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#8c6721]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Shop Address</h4>
                  <p className="text-stone-700 text-sm mt-0.5 leading-relaxed font-medium">
                    Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran Locality, Tarn Taran, Punjab
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Close to Amritsar Road &amp; Tarn Taran Main Market
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#f3e5cd] text-[#601212] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#8c6721]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Telephone &amp; Mobile</h4>
                  <div className="space-y-1 mt-1">
                    <a
                      href="tel:09855016191"
                      className="block text-[#601212] hover:underline font-mono font-bold text-base"
                    >
                      098550 16191
                    </a>
                    <a
                      href="tel:+918285391000"
                      className="block text-stone-800 hover:underline font-mono font-bold text-base"
                    >
                      +91 82853 91000
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#f3e5cd] text-[#601212] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#8c6721]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-sm">Operating Hours</h4>
                    <span className="text-xs font-bold text-[#15803d] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      Open All 7 Days
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-stone-800 mt-1">
                    10:00 AM to 10:00 PM (10:00 – 22:00)
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Sunday through Saturday without closure
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Buttons */}
            <div className="pt-6 border-t border-[#ebdcc8] mt-6 grid grid-cols-2 gap-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-[#601212] hover:bg-[#781818] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#f1d08c]" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:09855016191"
                className="py-3 px-4 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border-2 border-[#e5d5be] shadow-sm flex flex-col">
            <div className="p-4 bg-[#fcf9f2] border-b border-[#ebdcc8] flex items-center justify-between">
              <span className="text-xs font-bold text-stone-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#601212]" />
                <span>Tarn Taran Locality, Punjab</span>
              </span>

              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#601212] hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative flex-1 min-h-[380px] w-full bg-stone-100">
              <iframe
                title="Gagan Sweets Tarn Taran Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27289.471644783327!2d74.9100!3d31.4520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919655f00000001%3A0x0!2sTarn%20Taran%20Sahib%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

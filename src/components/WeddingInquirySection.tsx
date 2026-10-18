"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Gift, CheckCircle2 } from "lucide-react";

export function WeddingInquirySection() {
  const highlights = [
    "Custom Velvet, Wooden & Silk Packaging Boxes",
    "Fresh Pure Desi Ghee Mithai & Shahi Pinni",
    "Premium California Almonds, Jumbo Cashews & Pistachios",
    "Personalized Name Tags, Wedding Cards & Ribbons",
    "Sample Tasting & Consultation at our Tarn Taran Shop",
    "Timely Delivery Across Tarn Taran & Surrounding Areas",
  ];

  return (
    <section id="hampers" className="py-16 sm:py-20 bg-[#601212] text-white relative overflow-hidden">
      {/* Decorative subtle ambient pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#c69229_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#c69229]/60 text-[#f7e6c4] text-xs font-semibold">
              <Gift className="w-3.5 h-3.5 text-[#e2b763]" />
              <span>Bulk Orders &bull; Wedding Bhaji Specialist</span>
            </div>

            <h2 className="font-serif-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Celebrate Life’s Grandest Occasions With Royal Sweet Boxes
            </h2>

            <p className="text-[#f7e6c4]/90 text-sm sm:text-base leading-relaxed">
              Whether you are planning a grand wedding, ring ceremony, baby arrival, or festival celebration, our master halwais prepare the finest traditional sweet hampers customized with your family&apos;s personal touch.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e2b763] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact for Bulk Orders */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:09855016191"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#c69229] hover:bg-[#d8a339] text-[#4a0d0d] font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call For Bookings: 098550 16191</span>
              </a>

              <a
                href="https://wa.me/918285391000?text=Hello%2C%20I%20am%20interested%20in%20Wedding%20Bhaji%20and%20bulk%20sweet%20boxes%20for%20an%20upcoming%20function."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#e2b763]" />
                <span>WhatsApp Consultation: +91 82853 91000</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-[#d8be8d] shadow-2xl p-2 bg-[#540e0e]">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/SaveInta.com_785926724_17969612190128675_8472309017080164885_n.jpg"
                  alt="Wedding Sweet Box Packaging"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

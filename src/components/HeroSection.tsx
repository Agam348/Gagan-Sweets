"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Star, Award, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[#fcf9f2] border-b border-[#e8dac7] overflow-hidden">
      {/* Subtle traditional top banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e5cd] border border-[#d8be8d] text-[#601212] text-xs sm:text-sm font-semibold">
              <Award className="w-4 h-4 text-[#a8741a]" />
              <span>A Trusted Name for Authentic Sweets &amp; Rasoi in Tarn Taran</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-royal text-3xl sm:text-5xl lg:text-6xl font-bold text-[#540e0e] leading-tight sm:leading-tight">
              Pure Desi Ghee Mithai, Authentic Rasoi &amp; Fresh Bakery
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong>Gagan Sweets, Rasoi And Bakers</strong>. For decades, we have been crafting Punjab’s finest traditional sweets with 100% pure desi ghee, serving piping hot rasoi delicacies, and baking fresh celebration cakes for your most cherished moments.
            </p>

            {/* Ratings & Social Proof Card */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#e5d5be] shadow-xs">
                <span className="bg-[#15803d] text-white px-2 py-0.5 rounded text-xs font-extrabold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  4.6
                </span>
                <div className="text-left text-xs leading-tight">
                  <span className="font-bold text-stone-800 block">Dining Rating</span>
                  <span className="text-stone-500">Google Verified</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#e5d5be] shadow-xs">
                <span className="bg-[#15803d] text-white px-2 py-0.5 rounded text-xs font-extrabold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  4.5
                </span>
                <div className="text-left text-xs leading-tight">
                  <span className="font-bold text-stone-800 block">5,504+ Ratings</span>
                  <span className="text-stone-500">Zomato Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8c6721]">
                <ShieldCheck className="w-4 h-4 text-[#15803d]" />
                <span>100% Purity &amp; Freshness Guaranteed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:09855016191"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#601212] hover:bg-[#781818] text-white font-bold text-base transition shadow-md flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-[#f1d08c]" />
                <span>Call Shop: 098550 16191</span>
              </a>

              <a
                href="https://wa.me/918285391000?text=Hello%20Gagan%20Sweets%2C%20I%20would%20like%20to%20inquire%20about%20your%20sweets%20and%20family%20orders."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base transition shadow-md flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: +91 82853 91000</span>
              </a>
            </div>

            {/* Address snippet */}
            <p className="text-xs text-stone-600 pt-2 font-medium">
              📍 <strong>Location:</strong> Near Chaar Khamba Chowk, Sarhali Road, Tarn Taran Locality, Tarn Taran, Punjab
            </p>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white p-3 sm:p-4 rounded-2xl border-2 border-[#d9c4a4] shadow-lg">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-100 border border-[#e8dac7]">
                <Image
                  src="/assets/SaveInta.com_786314899_17969612175128675_6289742036396807227_n.jpg"
                  alt="Gagan Sweets Royal Mithai & Dry Fruits Box"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Bottom Caption under photo */}
              <div className="pt-3 text-center">
                <h3 className="font-serif-royal font-bold text-lg text-[#601212]">
                  Shahi Mithai &amp; Royal Dry Fruit Hampers
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Handcrafted Kaju Katli, Motichoor Ladoo, and California Nuts in traditional gift packaging.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Traditional Pillars Bar */}
        <div className="mt-12 pt-8 border-t border-[#ebdcc8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="font-serif-royal font-bold text-[#601212] text-lg sm:text-xl">
              100% Desi Ghee
            </div>
            <p className="text-xs text-stone-600 mt-1">
              Pure milk khoya &amp; rich desi ghee in every bite
            </p>
          </div>

          <div className="p-3">
            <div className="font-serif-royal font-bold text-[#601212] text-lg sm:text-xl">
              Fresh Daily Batches
            </div>
            <p className="text-xs text-stone-600 mt-1">
              Cooked fresh every morning for optimum taste
            </p>
          </div>

          <div className="p-3">
            <div className="font-serif-royal font-bold text-[#601212] text-lg sm:text-xl">
              Wedding &amp; Bhaji Packs
            </div>
            <p className="text-xs text-stone-600 mt-1">
              Specialized packaging for family celebrations
            </p>
          </div>

          <div className="p-3">
            <div className="font-serif-royal font-bold text-[#601212] text-lg sm:text-xl">
              Family Rasoi Seating
            </div>
            <p className="text-xs text-stone-600 mt-1">
              Clean dining &amp; live buffet for family visits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

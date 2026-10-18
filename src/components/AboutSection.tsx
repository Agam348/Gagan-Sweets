"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#fbf7f0] border-t border-[#e8dac7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-[#d8be8d] shadow-lg bg-white p-2 sm:p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/SaveInta.com_785945151_17969612139128675_9055861862472739782_n.jpg"
                  alt="Gagan Sweets Celebration Display"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Traditional Seal Badge */}
              <div className="absolute bottom-6 right-6 bg-[#601212] text-[#f7e6c4] p-4 rounded-xl border border-[#c69229] shadow-xl text-center">
                <p className="text-[10px] tracking-widest uppercase font-bold text-[#e2b763]">
                  Purity Guaranteed
                </p>
                <p className="font-serif-royal font-bold text-lg text-white">
                  100% Desi Ghee
                </p>
                <p className="text-[10px] text-white/80">Every Day &bull; Every Batch</p>
              </div>
            </div>
          </div>

          {/* Right Column: Traditional Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#c69229]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#8c6721] uppercase">
                Our Heritage &amp; Values
              </span>
            </div>

            <h2 className="font-serif-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#540e0e] leading-tight">
              A Legacy of Pure Desi Ghee &amp; Honest Traditions
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              At <strong>Gagan Sweets, Rasoi And Bakers</strong>, our philosophy has always been simple and timeless: <em>serve food that is pure enough to offer to God and delicious enough to delight every family member.</em>
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Located on Sarhali Road near Chaar Khamba Chowk in Tarn Taran, we take immense pride in maintaining the highest standards of culinary hygiene, authentic preparation techniques, and authentic desi ghee recipes. Whether it is a small evening snack with family or a grand wedding celebration with thousands of guests, we bring the same warmth and dedication to every dish.
            </p>

            {/* Core Pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#e5d5be] shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f3e5cd] text-[#601212] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#8c6721]" />
                </div>
                <div>
                  <h4 className="font-serif-royal font-bold text-base text-[#601212]">
                    Unadulterated Purity
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Made with high-grade desi ghee and farm-fresh dairy with no artificial shortcuts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5d5be] shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f3e5cd] text-[#601212] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#8c6721]" />
                </div>
                <div>
                  <h4 className="font-serif-royal font-bold text-base text-[#601212]">
                    Family Hospitality
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Warm, respectful service for all generations, from elders to young children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

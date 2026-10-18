import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { WeddingInquirySection } from "@/components/WeddingInquirySection";
import { AboutSection } from "@/components/AboutSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#292524] font-sans antialiased selection:bg-[#c69229] selection:text-white">
      {/* Traditional Blessing & Header Navigation */}
      <Navbar />

      {/* Main Traditional Hero Section */}
      <HeroSection />

      {/* 4 Core Offerings: Mithai, Rasoi, Bakery, Hampers */}
      <OfferingsSection />

      {/* Wedding Bhaji & Bulk Orders Feature */}
      <WeddingInquirySection />

      {/* Our Heritage & Values */}
      <AboutSection />

      {/* Store Location, Timings & Google Map */}
      <LocationSection />

      {/* Traditional Dignified Footer */}
      <Footer />
    </div>
  );
}

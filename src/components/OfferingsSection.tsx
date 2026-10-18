"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export function OfferingsSection() {
  const [activeTab, setActiveTab] = useState<"sweets" | "rasoi" | "bakery" | "hampers">("sweets");

  const sweetsItems = [
    {
      name: "Royal Desi Ghee Mithai Box",
      desc: "Pure Desi Ghee Motichoor Ladoo, Kaju Katli, and Shahi Barfi packed with premium nuts.",
      image: "/assets/SaveInta.com_786314899_17969612175128675_6289742036396807227_n.jpg",
      highlight: "100% Pure Desi Ghee",
    },
    {
      name: "Shahi Motichoor Ladoo & Nut Box",
      desc: "Fine pearl gram flour pearls fried in desi ghee, infused with saffron and green cardamom.",
      image: "/assets/SaveInta.com_785926724_17969612190128675_8472309017080164885_n.jpg",
      highlight: "Festive Favorite",
    },
    {
      name: "Artisanal Ladoo & Cashew Platter",
      desc: "Wholesome traditional laddoos loaded with crunchy cashews, almonds, and pistachios.",
      image: "/assets/SaveInta.com_786657746_17969612172128675_4906105476791647948_n.jpg",
      highlight: "Traditional Recipe",
    },
  ];

  const rasoiItems = [
    {
      name: "Crispy Golgappe / Pani Puri Platter",
      desc: "Crisp puffed semolina puris served with spicy mint water, tangy tamarind water, and spiced potato boondi.",
      image: "/assets/Screenshot_8-10-2026_215845_www.instagram.com.jpeg",
      highlight: "Fresh Daily",
    },
    {
      name: "South Indian Steamed Idli Sambar",
      desc: "Soft, fluffy steamed rice idlis served with piping hot dal sambar, fresh coconut chutney, and tomato dip.",
      image: "/assets/Screenshot_8-10-2026_215651_www.instagram.com.jpeg",
      highlight: "Hot & Healthy",
    },
    {
      name: "Golden Crispy Spring Rolls",
      desc: "Crunchy wrapper rolls loaded with sautéed vegetables, served with sweet garlic chili sauce and mayonnaise.",
      image: "/assets/Screenshot_8-10-2026_215856_www.instagram.com.jpeg",
      highlight: "Evening Snack",
    },
    {
      name: "Veg Hakka Chowmein",
      desc: "Wok-tossed noodles tossed with bell peppers, shredded cabbage, carrots, and aromatic Chinese spices.",
      image: "/assets/Screenshot_8-10-2026_215757_www.instagram.com.jpeg",
      highlight: "Customer Favorite",
    },
    {
      name: "Grilled Vegetable Club Sandwich",
      desc: "Triple-layered butter-toasted sandwich filled with spiced vegetable stuffing, paneer, and herb butter.",
      image: "/assets/Screenshot_8-10-2026_215926_www.instagram.com.jpeg",
      highlight: "Freshly Grilled",
    },
  ];

  const bakeryItems = [
    {
      name: "Artisanal Fresh Fruit Gateau",
      desc: "Moist vanilla sponge iced with light dairy cream, crowned with kiwi, cherries, pineapple, and chocolate nibs.",
      image: "/assets/Screenshot_8-10-2026_215937_www.instagram.com.jpeg",
      highlight: "Fresh Seasonal Fruits",
    },
    {
      name: "2-Tier Floral Celebration Cake",
      desc: "Custom handcrafted two-tier cake decorated with edible sugar blossoms and delicate silver pearls.",
      image: "/assets/SaveInta.com_649500013_18078867383457664_7766845983216011803_n.jpg",
      highlight: "Weddings & Anniversaries",
    },
    {
      name: "Pink Rose Buttercream Cake",
      desc: "Classic birthday cake decorated with handcrafted rich buttercream roses and chocolate piping.",
      image: "/assets/SaveInta.com_642994492_18093759584476837_8749771454408246978_n.jpg",
      highlight: "Birthday Special",
    },
    {
      name: "Theme Cartoon Birthday Cake",
      desc: "Customized themed cakes for kids parties, made with eggless sponge and customer favorite flavors.",
      image: "/assets/SaveInta.com_621032669_18089029217028883_2713938750312423056_n.jpg",
      highlight: "Kids Custom Cake",
    },
  ];

  const hamperItems = [
    {
      name: "Royal Festive Sweet & Nut Hamper",
      desc: "Grand presentation box featuring traditional desi ghee mithai alongside glass jars of California almonds and cashews.",
      image: "/assets/SaveInta.com_785926724_17969612190128675_8472309017080164885_n.jpg",
      highlight: "Diwali & Rakhi Special",
    },
    {
      name: "Wedding Bhaji & Celebration Baskets",
      desc: "Exquisite net, ribbon, and golden trays filled with handcrafted cookies, savory mixtures, and traditional bhaji.",
      image: "/assets/SaveInta.com_785945151_17969612139128675_9055861862472739782_n.jpg",
      highlight: "Wedding Bhaji Specialist",
    },
    {
      name: "Luxury Silk Box Assortment",
      desc: "Rigid gold and velvet boxes personalized with custom card inserts for family weddings and corporate gifting.",
      image: "/assets/SaveInta.com_786314899_17969612175128675_6289742036396807227_n.jpg",
      highlight: "Custom Bulk Orders",
    },
  ];

  return (
    <section id="offerings" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-10 bg-[#c69229]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#8c6721] uppercase">
              Our Signature Specialties
            </span>
            <div className="h-px w-10 bg-[#c69229]" />
          </div>

          <h2 className="font-serif-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#540e0e]">
            Freshly Prepared For Every Occasion
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            From early morning fresh mithai batches to evening family rasoi dinners and custom bakery cakes, explore our complete range of specialties.
          </p>
        </div>

        {/* Traditional Category Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab("sweets")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeTab === "sweets"
                ? "bg-[#601212] text-white border-[#601212] shadow-sm"
                : "bg-[#fcf9f2] text-stone-800 border-[#e5d5be] hover:bg-[#f6ebd9]"
            }`}
          >
            Traditional Mithai
          </button>

          <button
            onClick={() => setActiveTab("rasoi")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeTab === "rasoi"
                ? "bg-[#601212] text-white border-[#601212] shadow-sm"
                : "bg-[#fcf9f2] text-stone-800 border-[#e5d5be] hover:bg-[#f6ebd9]"
            }`}
          >
            Rasoi &amp; Street Food
          </button>

          <button
            onClick={() => setActiveTab("bakery")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeTab === "bakery"
                ? "bg-[#601212] text-white border-[#601212] shadow-sm"
                : "bg-[#fcf9f2] text-stone-800 border-[#e5d5be] hover:bg-[#f6ebd9]"
            }`}
          >
            Bakery &amp; Cakes
          </button>

          <button
            onClick={() => setActiveTab("hampers")}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
              activeTab === "hampers"
                ? "bg-[#601212] text-white border-[#601212] shadow-sm"
                : "bg-[#fcf9f2] text-stone-800 border-[#e5d5be] hover:bg-[#f6ebd9]"
            }`}
          >
            Wedding &amp; Gift Hampers
          </button>
        </div>

        {/* Items Grid for Active Tab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "sweets"
            ? sweetsItems
            : activeTab === "rasoi"
            ? rasoiItems
            : activeTab === "bakery"
            ? bakeryItems
            : hamperItems
          ).map((item) => (
            <div
              key={item.name}
              className="bg-[#fcf9f2] rounded-2xl overflow-hidden border border-[#e5d5be] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 w-full bg-stone-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#601212] text-[#f7e6c4] text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
                    {item.highlight}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif-royal font-bold text-xl text-[#601212] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dignified Call / Inquiry Footer */}
              <div className="px-5 pb-5 pt-2 border-t border-[#ebdcc8]/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8c6721]">
                  Available Fresh Daily
                </span>
                <a
                  href="tel:09855016191"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#601212] hover:text-[#831818] transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner calling directly */}
        <div className="mt-12 bg-[#f6ebd9] border border-[#d8be8d] rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <h3 className="font-serif-royal font-bold text-xl sm:text-2xl text-[#601212]">
            Looking for Custom Quantities or Special Boxes?
          </h3>
          <p className="text-stone-700 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            We prepare personalized sweet assortments, bulk wedding orders, and corporate festive packs to your exact preference.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:09855016191"
              className="px-6 py-2.5 rounded-xl bg-[#601212] hover:bg-[#781818] text-white font-bold text-xs sm:text-sm tracking-wide transition shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#e2b763]" />
              <span>Call Us: 098550 16191</span>
            </a>
            <a
              href="https://wa.me/918285391000?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20and%20wedding%20sweet%20boxes."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm tracking-wide transition shadow-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

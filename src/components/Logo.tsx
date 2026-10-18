import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  variant?: "light" | "dark";
  type?: "vector" | "badge";
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
  variant = "light",
  type = "vector",
}: LogoProps) {
  const dimensions = {
    sm: { px: 48, text: "text-xl", sub: "text-[11px]" },
    md: { px: 60, text: "text-2xl", sub: "text-xs" },
    lg: { px: 84, text: "text-3xl", sub: "text-sm" },
    xl: { px: 120, text: "text-4xl", sub: "text-base" },
  };

  const current = dimensions[size];

  // If badge mode is selected, render the complete luxury crest artwork
  if (type === "badge") {
    return (
      <div className={`relative shrink-0 select-none ${className}`}>
        <div
          className="relative rounded-2xl overflow-hidden border-2 border-[#d4a340] shadow-md transition-transform duration-300 hover:scale-105"
          style={{ width: current.px, height: current.px }}
        >
          <Image
            src="/assets/gagan_sweets_professional_logo.jpg"
            alt="Gagan Sweets Royal Logo"
            fill
            sizes={`${current.px}px`}
            priority
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Royal Crest Medallion */}
      <div
        className="relative shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: current.px, height: current.px }}
      >
        <Image
          src="/assets/gagan_sweets_crest.svg"
          alt="Gagan Sweets Crest"
          width={current.px}
          height={current.px}
          priority
          className="w-full h-full drop-shadow-sm"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif-royal font-black tracking-tight ${
              variant === "dark" ? "text-white" : "text-[#540e0e]"
            } ${current.text}`}
          >
            Gagan Sweets
          </span>
          <span
            className={`font-brand-crest uppercase font-bold tracking-[0.16em] mt-1.5 ${
              variant === "dark" ? "text-[#e2b763]" : "text-[#8c6721]"
            } ${current.sub}`}
          >
            Rasoi &amp; Bakers &bull; Tarn Taran
          </span>
        </div>
      )}
    </div>
  );
}

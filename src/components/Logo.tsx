import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
  variant = "light",
}: LogoProps) {
  const dimensions = {
    sm: { px: 46, text: "text-xl", sub: "text-[11px]" },
    md: { px: 60, text: "text-2xl", sub: "text-xs" },
    lg: { px: 90, text: "text-3xl", sub: "text-sm" },
    xl: { px: 130, text: "text-4xl", sub: "text-base" },
  };

  const current = dimensions[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Medallion Emblem */}
      <div
        className="relative shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: current.px, height: current.px }}
      >
        <Image
          src="/assets/gagan_sweets_logo.jpg"
          alt="Gagan Sweets Logo"
          width={current.px}
          height={current.px}
          priority
          className="w-full h-full object-cover rounded-full border-2 border-[#c69229] shadow-md"
        />
      </div>

      {/* Brand Text (Optional) */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif-royal font-black tracking-tight ${
              variant === "dark" ? "text-white" : "text-[#5e1111]"
            } ${current.text}`}
          >
            Gagan Sweets
          </span>
          <span
            className={`font-brand-crest uppercase font-bold tracking-widest mt-1 ${
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

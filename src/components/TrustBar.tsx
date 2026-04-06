"use client";

import { Phone, Star } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-[var(--sv-navy)] text-white text-xs"
      style={{ height: "40px" }}
    >
      <div className="container-sv h-full flex items-center justify-between gap-4">
        {/* Left: tagline */}
        <span className="hidden md:flex items-center gap-1.5 font-medium tracking-wide">
          <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
          <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
          <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
          <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
          <Star className="w-3 h-3 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
          <span className="ml-1 text-white/80">5-Star Rated Across All Locations</span>
        </span>

        {/* Center on mobile, right on desktop */}
        <div className="flex items-center gap-4 ml-auto">
          {LOCATIONS.map((loc, i) => (
            <a
              key={loc.id}
              href={loc.phoneHref}
              className="hidden lg:flex items-center gap-1.5 hover:text-[var(--sv-gold)] transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span className="text-white/70 mr-0.5">{loc.shortName}:</span>
              {loc.phone}
            </a>
          ))}
          {/* Mobile: just one phone */}
          <a
            href={BUSINESS.phoneHref}
            className="flex lg:hidden items-center gap-1.5 font-semibold hover:text-[var(--sv-gold)] transition-colors"
          >
            <Phone className="w-3 h-3" />
            {BUSINESS.phone}
          </a>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="hidden sm:block text-white/70">FREE Vein Screening</span>
        </div>
      </div>
    </div>
  );
}

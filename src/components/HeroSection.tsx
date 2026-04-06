"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown, ShieldCheck, Award, Clock } from "lucide-react";
import { BUSINESS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B2545]">
        {/* Background image — inline style avoids extra JS; loading=eager for LCP */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.schulmanveincenter.com/wp-content/uploads/2018/02/legswithoverlay.png')",
          }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,37,69,0.93) 0%, rgba(11,37,69,0.75) 55%, rgba(11,37,69,0.25) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C8973A] border border-[#C8973A]/40 rounded-full px-3 py-1">
                All We Do Is Veins™
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-4"
            >
              New York's Premier
              <br />
              <span className="text-[#17A8C6]">Vein Specialists</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Board-certified vein doctors with 55+ years of combined experience. Non-surgical varicose &amp; spider vein treatment in Manhattan and Long Island — drive home the same day.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
            >
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg text-white font-bold text-lg px-8 py-4 shadow-lg transition-colors"
                style={{ backgroundColor: "#0D7F9B" }}
              >
                <Phone className="w-5 h-5 shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white font-bold text-lg px-8 py-4 transition-colors hover:bg-white"
                style={{ "--hover-color": "#0B2545" } as React.CSSProperties}
              >
                <Calendar className="w-5 h-5 shrink-0" />
                Free Vein Screening
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <div className="flex items-center gap-2 text-sm text-white/70">
                <ShieldCheck className="w-4 h-4 text-[#C8973A] shrink-0" />
                <span>Board-Certified Doctors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Award className="w-4 h-4 text-[#C8973A] shrink-0" />
                <span>FDA-Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 text-[#C8973A] shrink-0" />
                <span>Same-Day Recovery</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator — hidden on mobile to save space */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </section>

      {/* Trust stat bar — solid row below hero for full legibility */}
      <div style={{ backgroundColor: "#0B2545", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-5 px-4"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none" }}
              >
                <span className="text-2xl md:text-3xl font-heading font-bold" style={{ color: "#C8973A" }}>
                  {stat.value}
                </span>
                <span className="text-xs mt-1 text-center" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

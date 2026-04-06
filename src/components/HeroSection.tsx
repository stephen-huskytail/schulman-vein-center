"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ChevronDown, ShieldCheck, Award, Clock } from "lucide-react";
import { BUSINESS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--sv-navy)]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.schulmanveincenter.com/wp-content/uploads/2018/02/legswithoverlay.png')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sv-navy)]/92 via-[var(--sv-navy)]/75 to-[var(--sv-navy)]/30" />

      {/* Content */}
      <div className="container-sv relative z-10 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--sv-gold)] border border-[var(--sv-gold)]/40 rounded-full px-3 py-1">
              All We Do Is Veins™
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-4"
          >
            New York's Premier
            <br />
            <span className="text-[var(--sv-teal-light)]">Vein Specialists</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg"
          >
            Board-certified vein doctors with 55+ years of combined experience. Non-surgical varicose & spider vein treatment in Manhattan and Long Island — drive home the same day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
          >
            <a href={BUSINESS.phoneHref} className="btn-primary-lg">
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <a href="#contact" className="btn-secondary-lg">
              <Calendar className="w-5 h-5" />
              Free Vein Screening
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="w-4 h-4 text-[var(--sv-gold)]" />
              <span>Board-Certified Doctors</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Award className="w-4 h-4 text-[var(--sv-gold)]" />
              <span>FDA-Approved Treatments</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock className="w-4 h-4 text-[var(--sv-gold)]" />
              <span>Same-Day Recovery</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust stat bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[var(--sv-navy)]/80 backdrop-blur-sm border-t border-white/10">
        <div className="container-sv">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-5 px-4 border-r border-white/10 last:border-r-0"
              >
                <span className="text-2xl md:text-3xl font-heading font-bold text-[var(--sv-gold)]">
                  {stat.value}
                </span>
                <span className="text-xs text-white/60 mt-0.5 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-24 md:bottom-28 right-8 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, ShieldCheck, Award, Clock } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";
import CallNowButton from "@/components/CallNowButton";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B2545]">
        {/* Background image — inline style avoids extra JS; loading=eager for LCP */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/hero-bg.png')",
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
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-2xl sm:text-3xl font-black tracking-[0.18em] uppercase"
                style={{
                  background: "linear-gradient(135deg, #C8973A 0%, #E8B84B 100%)",
                  color: "#0B2545",
                  boxShadow: "0 4px 16px rgba(200,151,58,0.45), 0 1px 3px rgba(0,0,0,0.3)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(11,37,69,0.4)", flexShrink: 0 }} />
                All We Do Is Veins™
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(11,37,69,0.4)", flexShrink: 0 }} />
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
              <CallNowButton
                variant="custom"
                className="inline-flex items-center justify-center gap-2 rounded-lg text-white font-bold text-lg px-8 py-4 shadow-lg transition-colors bg-[#0D7F9B] hover:bg-[#0a6b83]"
                iconSize="w-5 h-5 shrink-0"
              />
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white font-bold text-lg px-8 py-4 transition-colors hover:bg-white hover:text-[#0B2545]"
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

        {/* Google 5-star badge — floats on the right side of the hero */}
        <motion.a
          href="#testimonials"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-16 right-8 lg:right-14 z-10 hidden md:flex items-center gap-6 bg-white rounded-3xl px-8 py-6 shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)" }}
          aria-label="Google Reviews"
        >
          {/* Google G logo */}
          <div className="shrink-0">
            <svg width="56" height="56" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          </div>
          {/* Rating content */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-gray-900 font-black text-xl leading-none">5.0</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-7 h-7" viewBox="0 0 20 20" fill="#FBBC05">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-gray-500 text-sm leading-none">200+ Google Reviews</span>
          </div>
        </motion.a>

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

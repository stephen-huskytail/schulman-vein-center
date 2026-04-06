"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[url('https://www.schulmanveincenter.com/wp-content/uploads/2018/02/legs2overlay-1.png')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-[var(--sv-navy)]/95" />

      <div className="container-sv relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--sv-gold)] mb-2">
            Patient Reviews
          </p>
          <h2 className="section-title-light mb-3">
            What Our{" "}
            <span className="text-[var(--sv-teal-light)]">Patients Say</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--sv-gold)] rounded-full mx-auto mb-5" />
          <p className="section-subtitle-light">
            5-star rated across all three locations on Google, Yelp, Healthgrades, Vitals, and more.
          </p>

          {/* Star rating display */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
            ))}
            <span className="ml-2 text-white/70 text-sm">5.0 average · All locations</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-[var(--sv-teal)]/30 rounded-2xl p-6 md:p-7 transition-all"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-[var(--sv-gold)] fill-[var(--sv-gold)]" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-[var(--sv-teal)]/20 absolute -top-1 -left-1" />
                <p className="text-white/80 text-sm leading-relaxed pl-4 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-[var(--sv-teal)]/20 flex items-center justify-center text-[var(--sv-teal-light)] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review platforms */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Rated 5 stars on all major review platforms:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Google", "Yelp", "Healthgrades", "Vitals", "Yellow Pages", "TrustPilot"].map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

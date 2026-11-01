"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { PATIENT_VIDEOS } from "@/lib/patient-videos";
import PatientVideoReviews from "@/components/PatientVideoReviews";
import StarRating from "@/components/StarRating";
import { GOOGLE_REVIEWS } from "@/lib/google-reviews";

interface TestimonialsSectionProps {
  variant?: "navy" | "light";
}

export default function TestimonialsSection({ variant = "navy" }: TestimonialsSectionProps) {
  const isLight = variant === "light";

  return (
    <section
      id="testimonials"
      className={`${isLight ? "section-light" : "section-navy"} relative overflow-hidden`}
    >
      {/* Decorative */}
      {!isLight && (
        <>
          <div className="absolute inset-0 bg-[url('/images/testimonials-bg.png')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-[var(--sv-navy)]/95" />
        </>
      )}

      <div className="container-sv relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--sv-gold)] mb-2">
            Patient Reviews
          </p>
          <h2 className={`${isLight ? "section-title" : "section-title-light"} mb-3`}>
            What Our{" "}
            <span className={isLight ? "text-[var(--sv-teal)]" : "text-[var(--sv-teal-light)]"}>
              Patients Say
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--sv-gold)] rounded-full mx-auto mb-5" />
          <p className={`${isLight ? "section-subtitle" : "section-subtitle-light"} font-semibold`}>
            Hear from our patients, and read {GOOGLE_REVIEWS.label.split(",")[0]}{"'s "}
            <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener" className="underline underline-offset-4">reviews on Google</a>.
          </p>

          {/* Star rating display */}
          <div
            className={`mt-5 inline-flex flex-col items-center gap-2 rounded-2xl px-6 py-4 ${
              isLight
                ? "bg-white border-2 border-[var(--sv-gold)]/40 shadow-md"
                : "bg-white/10 border-2 border-[var(--sv-gold)]/50 shadow-lg"
            }`}
          >
            <span className={`${isLight ? "text-[var(--sv-navy)]" : "text-white"} text-3xl font-black leading-none`}>
              {GOOGLE_REVIEWS.rating.toFixed(1)} on Google
            </span>
            <StarRating rating={GOOGLE_REVIEWS.rating} sizeClass="h-7 w-7" className="flex items-center justify-center gap-1" emptyClass={isLight ? "fill-gray-300 text-gray-300" : "fill-white/35 text-white/35"} />
            <span className={`text-sm font-semibold ${isLight ? "text-[var(--sv-navy)]/75" : "text-white/80"}`}>
              {GOOGLE_REVIEWS.count} Google reviews for {GOOGLE_REVIEWS.label}
            </span>
          </div>
        </div>

        {/* Patient video reviews */}
        <PatientVideoReviews videos={PATIENT_VIDEOS} variant={variant} />

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-7 transition-all ${
                isLight
                  ? "bg-white border border-[var(--sv-border)] shadow-sm hover:border-[var(--sv-teal)]/40"
                  : "bg-white/5 border border-white/10 hover:border-[var(--sv-teal)]/30"
              }`}
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
                <p className={`text-sm leading-relaxed pl-4 italic ${isLight ? "text-[var(--sv-navy)]/80" : "text-white/80"}`}>
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className={`flex items-center gap-3 mt-auto pt-4 ${isLight ? "border-t border-[var(--sv-border)]" : "border-t border-white/10"}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                  isLight
                    ? "bg-[var(--sv-teal)]/15 text-[var(--sv-teal)]"
                    : "bg-[var(--sv-teal)]/20 text-[var(--sv-teal-light)]"
                }`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isLight ? "text-[var(--sv-navy)]" : "text-white"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${isLight ? "text-[var(--sv-navy)]/55" : "text-white/50"}`}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

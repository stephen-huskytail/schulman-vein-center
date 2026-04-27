"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpen } from "lucide-react";
import { DOCTORS } from "@/lib/constants";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="section-cream">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="section-eyebrow">Meet the Specialists</p>
          <h2 className="section-title mb-3">
            Your Trusted{" "}
            <span className="text-[var(--sv-teal)]">Vein Doctors</span>
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle">
            Drs. Martin and Lee Schulman bring over 55 years of combined experience devoted exclusively to vein disease. They were among the first board-certified vascular surgeons in the United States.
          </p>
        </div>

        {/* Doctor team photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl aspect-[16/7]">
            <Image
              src="/images/team.jpg"
              alt="Dr. Martin L. Schulman and Dr. Lee G. Schulman — Schulman Vein and Laser Center"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--sv-navy)]/50 to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white font-heading font-semibold text-lg">
                Dr. Martin L. Schulman &amp; Dr. Lee G. Schulman
              </p>
              <p className="text-white/70 text-sm">Board-Certified Vein Specialists</p>
            </div>
          </div>
        </motion.div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DOCTORS.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-doctor p-7 md:p-9"
            >
              {/* Name & title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--sv-teal)]/10 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-6 h-6 text-[var(--sv-teal)]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[var(--sv-navy)] text-xl">
                    {doc.name}
                  </h3>
                  <p className="text-[var(--sv-teal)] text-sm font-semibold">{doc.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{doc.credentials}</p>
                </div>
              </div>

              <div className="gold-line-sm mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{doc.bio}</p>

              {/* Highlights */}
              <div className="bg-[var(--sv-cream)] rounded-xl p-4 mb-5">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--sv-navy)] mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--sv-teal)]" />
                  Notable Achievements
                </h4>
                <ul className="space-y-2">
                  {doc.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--sv-gold)] mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Memberships */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--sv-navy)] mb-3">
                  Professional Memberships
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doc.memberships.slice(0, 5).map((m) => (
                    <span
                      key={m}
                      className="inline-block text-sm bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-gray-700"
                    >
                      {m}
                    </span>
                  ))}
                  {doc.memberships.length > 5 && (
                    <span className="inline-flex items-center justify-center min-h-[36px] text-sm font-semibold text-[var(--sv-teal)] border border-[var(--sv-teal)]/30 bg-[var(--sv-teal)]/5 rounded-full px-3 py-1.5">
                      +{doc.memberships.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

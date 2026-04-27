"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Sparkles,
  Crosshair,
  Hand,
  HeartPulse,
  Search,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Sparkles,
  Crosshair,
  Hand,
  HeartPulse,
  Search,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-light">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="section-eyebrow">What We Treat</p>
          <h2 className="section-title mb-3">
            Comprehensive{" "}
            <span className="text-[var(--sv-teal)]">Vein Treatments</span>
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle">
            Every treatment at Schulman Vein is non-surgical, performed personally by a board-certified doctor, and requires zero downtime. Patients drive home the same day.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Zap;
            const isHighlight = i === 2; // Laser treatment gets featured treatment
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`card-service group ${isHighlight ? "ring-2 ring-[var(--sv-teal)]" : ""}`}
              >
                {isHighlight && (
                  <div className="bg-[var(--sv-teal)] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 text-center">
                    Most Common Treatment
                  </div>
                )}
                <div className="p-4 md:p-6 lg:p-7">
                  <div className="icon-circle mb-4 group-hover:bg-[var(--sv-teal)] transition-colors">
                    <Icon className="w-5 h-5 text-[var(--sv-teal)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[var(--sv-navy)] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Mini treatment list */}
                  <ul className="space-y-1.5 mb-5">
                    {service.treatments.slice(0, 3).map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--sv-teal)] shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--sv-teal)] hover:gap-2.5 transition-all"
                  >
                    Free Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Not sure which treatment you need? A Dr. Schulman will evaluate your veins personally at your free consultation.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule Free Vein Screening
          </a>
        </motion.div>
      </div>
    </section>
  );
}

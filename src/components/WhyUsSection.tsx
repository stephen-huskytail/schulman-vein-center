"use client";

import { motion } from "framer-motion";
import {
  Award,
  UserCheck,
  Clock,
  ShieldCheck,
  Car,
  Globe,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  UserCheck,
  Clock,
  ShieldCheck,
  Car,
  Globe,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--sv-teal)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--sv-gold)]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-sv relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--sv-gold)] mb-2">
            The Schulman Difference
          </p>
          <h2 className="section-title-light mb-3">
            Why Patients Choose{" "}
            <span className="text-[var(--sv-teal-light)]">Schulman Vein</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--sv-gold)] rounded-full mx-auto mb-5" />
          <p className="section-subtitle-light">
            With hundreds of vein clinics to choose from, the difference lies in who treats you, how much experience they have, and what standards they uphold.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--sv-teal)]/40 rounded-2xl p-6 md:p-7 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--sv-teal)]/20 group-hover:bg-[var(--sv-teal)] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-[var(--sv-teal-light)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 md:mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <p className="font-heading text-xl md:text-2xl text-white italic leading-relaxed max-w-3xl mx-auto">
            "At Schulman Vein and Laser Center, all varicose and spider vein treatment is done personally by one of the two Dr. Schulmans. We will never allow any of our patients to be used for training or learning experience."
          </p>
          <p className="mt-4 text-[var(--sv-gold)] text-sm font-semibold">— Schulman Vein and Laser Center</p>
        </motion.div>
      </div>
    </section>
  );
}

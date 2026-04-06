"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface CTABannerSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTABannerSection({
  title = "Ready to Treat Your Veins?",
  subtitle = "Free initial consultation · Board-certified doctors · Same-day recovery",
}: CTABannerSectionProps) {
  return (
    <section className="section-teal relative overflow-hidden py-12 md:py-16">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCA0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="container-sv relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className="text-white/80 text-base">{subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--sv-teal)] font-bold hover:bg-[var(--sv-cream)] transition-colors shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--sv-navy)] text-white font-bold hover:bg-[var(--sv-navy-light)] transition-colors shadow-md text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

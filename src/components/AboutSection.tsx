"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const DIFFERENTIATORS = [
  "100% vein-only practice — no divided attention",
  "Every treatment personally performed by Dr. Schulman",
  "Non-surgical, FDA-approved methods exclusively",
  "Drive yourself home immediately after every treatment",
  "Free, no-obligation initial consultation",
  "Internationally recognized techniques used worldwide",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-cream">
      <div className="container-sv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/about.jpg"
                alt="Clear, healthy legs after vein treatment at Schulman Vein Center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--sv-navy)] text-white rounded-2xl px-5 py-4 shadow-xl max-w-[180px]">
              <p className="text-3xl font-bold font-heading text-[var(--sv-gold)]">55+</p>
              <p className="text-xs text-white/80 leading-tight mt-1">Years Combined Vein Experience</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-eyebrow">About Schulman Vein Center</p>
            <h2 className="section-title mb-2">
              Why New York Trusts{" "}
              <span className="text-[var(--sv-teal)]">Schulman Vein</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Drs. Martin and Lee Schulman are internationally recognized phlebologists — doctors whose medical practice is limited <strong>exclusively</strong> to the treatment of vein disease. Together they have pioneered techniques now used by vein specialists worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Schulman Vein and Laser Center, all varicose and spider veins are treated non-surgically — by virtually painless injection therapy, micro ambulatory phlebectomy, or ultrasound-assisted laser treatments. The blood loss and scarring associated with surgery are completely eliminated.
            </p>

            <ul className="space-y-3 mb-8">
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--sv-teal)] mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
              <a href="/contact" className="btn-outline-navy">
                Schedule Free Screening
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

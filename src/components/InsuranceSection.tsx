"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import CallNowButton from "@/components/CallNowButton";

const COVERED = [
  "EVLT (Endovenous Laser Therapy) for varicose veins",
  "Sclerotherapy for medically necessary varicose veins",
  "Doppler ultrasound evaluation",
  "Phlebitis and DVT treatment",
  "Venous leg ulcer treatment",
];

const NOT_COVERED = [
  "Cosmetic spider vein treatments",
  "Hand vein treatment",
  "Temple and facial vein treatment",
  "Breast and chest vein treatment",
];

export default function InsuranceSection() {
  return (
    <section id="insurance" className="section-cream">
      <div className="container-sv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Insurance & Payment</p>
            <h2 className="section-title mb-3">
              We Work With{" "}
              <span className="text-[var(--sv-teal)]">Your Insurance</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              At Schulman Vein and Laser Center, we participate with as many insurance plans as possible. This does not guarantee coverage — but we actively advocate for our patients by submitting medical history, Doppler ultrasound results, photos, and letters to your insurance company on your behalf.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>No insurance? No problem.</strong> We offer discounted fees and payment plans to ensure you can access world-class vein care regardless of coverage.
            </p>

            <CallNowButton variant="primary" label="Discuss Your Coverage" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Often covered */}
            <div className="bg-white rounded-2xl shadow-card p-6 border border-green-100">
              <h3 className="font-heading font-bold text-[var(--sv-navy)] text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Often Covered by Insurance
              </h3>
              <ul className="space-y-2.5">
                {COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Typically not covered */}
            <div className="bg-white rounded-2xl shadow-card p-6 border border-orange-100">
              <h3 className="font-heading font-bold text-[var(--sv-navy)] text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-orange-400" />
                Typically Not Covered (Cosmetic)
              </h3>
              <ul className="space-y-2.5">
                {NOT_COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <XCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Payment plans and fee assistance available for all non-covered treatments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

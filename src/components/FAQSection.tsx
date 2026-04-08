"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="section-light">
      <div className="container-sv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div className="self-start lg:sticky lg:top-32">
            <p className="section-eyebrow">Common Questions</p>
            <h2 className="section-title mb-3">
              Frequently Asked{" "}
              <span className="text-[var(--sv-teal)]">Questions</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">
              Have questions about vein treatment? We've answered the most common ones below. If you don't see your question, call us — a Dr. Schulman will answer it personally.
            </p>

            {/* Insurance note */}
            <div className="bg-[var(--sv-cream)] border border-[var(--sv-teal)]/20 rounded-xl p-5 mb-6">
              <h3 className="font-heading font-bold text-[var(--sv-navy)] text-base mb-2">
                Insurance Coverage
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We participate with as many insurances as possible and actively advocate for coverage on your behalf. EVLT for varicose veins is often covered. For patients without coverage, we offer fee reductions and payment plans.
              </p>
            </div>

            <a href="/contact" className="btn-primary">
              Ask Us a Question
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--sv-teal)]/40 transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-heading font-semibold text-[var(--sv-navy)] text-base leading-snug">
                    {faq.q}
                  </span>
                  <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[var(--sv-teal)]/10 flex items-center justify-center">
                    {open === i ? (
                      <Minus className="w-3.5 h-3.5 text-[var(--sv-teal)]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[var(--sv-teal)]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

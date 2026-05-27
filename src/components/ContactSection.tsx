"use client";

import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";

export default function ContactSection() {
  return (
    <section id="contact" className="section-cream">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title mb-3">
            Schedule Your{" "}
            <span className="text-[var(--sv-teal)]">Free Consultation</span>
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle">
            Every consultation is free, no-obligation, and performed personally by one of the Dr. Schulmans — never by a nurse or assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Main contact */}
            <div className="bg-[var(--sv-navy)] rounded-2xl p-6 md:p-7 text-white">
              <h3 className="font-heading font-bold text-xl mb-5">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--sv-teal)]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--sv-teal-light)]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Email</p>
                    <a
                      href={BUSINESS.emailHref}
                      className="text-sm font-medium text-white hover:text-[var(--sv-teal-light)] transition-colors break-all"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-[var(--sv-gold)] text-xs font-bold uppercase tracking-widest mb-4">
                  Call Our Locations Directly
                </p>
                <div className="space-y-3">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[var(--sv-teal-light)]" />
                      </div>
                      <div>
                        <p className="text-white/60 text-xs">{loc.shortName}</p>
                        <a
                          href={loc.phoneHref}
                          className="font-bold text-white hover:text-[var(--sv-teal-light)] transition-colors text-base"
                        >
                          {loc.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Free screening callout */}
            <div className="bg-[var(--sv-teal)] rounded-2xl p-6 text-white">
              <CheckCircle2 className="w-8 h-8 text-white/80 mb-3" />
              <h3 className="font-heading font-bold text-lg mb-2">
                FREE Vein Screening
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                No cost. No obligation. Your consultation is performed personally by Dr. Schulman — who will evaluate your veins and answer every question you have before any treatment begins.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

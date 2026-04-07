"use client";

import { motion } from "framer-motion";
import { ClipboardList, Stethoscope, Activity, MessageSquare, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Medical History Review",
    desc: "Dr. Schulman reviews your complete medical history with an emphasis on vascular medicine — all from the comfort of a relaxed, stress-free setting.",
  },
  {
    icon: Activity,
    step: "02",
    title: "Doppler Ultrasound (When Indicated)",
    desc: "A non-invasive Doppler ultrasound may be performed to check the condition of your circulatory system — fully painless, similar to prenatal ultrasounds.",
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Physical Examination",
    desc: "Your legs and any other treatment areas are thoroughly examined by the doctor — never by a student, intern, or assistant.",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Treatment Plan & Q&A",
    desc: "After reviewing all findings, Dr. Schulman explains every treatment option clearly and answers all your questions personally. You decide what's right for you.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Start Treatment — Same Visit",
    desc: "Many patients begin treatment on their very first visit. Most procedures are completed in 30 minutes, and you drive yourself home the same day.",
  },
];

export default function FirstVisitSection() {
  return (
    <section id="first-visit" className="section-light">
      <div className="container-sv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-title mb-3">
              Your{" "}
              <span className="text-[var(--sv-teal)]">First Visit</span>{" "}
              — What to Expect
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              We know many patients are nervous before their first vein appointment. After starting treatment, those same patients consistently say they had <strong>no idea how simple and pain-free vein treatment would be.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              You're welcome to bring a family member or friend with you. We encourage it.
            </p>
            <a href="/contact" className="btn-primary">
              Schedule My Free Consultation
            </a>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-xl bg-[var(--sv-cream)] border border-gray-200 hover:border-[var(--sv-teal)]/30 hover:shadow-card transition-all"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[var(--sv-navy)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-[var(--sv-teal)]">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[var(--sv-navy)] text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

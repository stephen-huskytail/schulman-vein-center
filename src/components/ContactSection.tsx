"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Send, CheckCircle2, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { BUSINESS, LOCATIONS } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(1, "Please select a preferred location"),
  service: z.string().optional(),
  message: z.string().min(5, "Please describe your concern"),
});

type FormData = z.infer<typeof schema>;

const SERVICES_LIST = [
  "Varicose Vein Treatment",
  "Spider Vein Treatment",
  "Laser Vein Therapy (EVLT)",
  "Hand / Face / Body Veins",
  "Phlebitis or Venous Ulcers",
  "Not Sure – Need Evaluation",
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const message = body?.error ?? "Something went wrong while sending your request.";
      toast.error(message);
      return;
    }

    toast.success("Your consultation request was sent. Our team will contact you shortly.");
    reset();
  };

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
                    <p className="text-white/60 text-sm mb-0.5">Email</p>
                    <a
                      href={BUSINESS.emailHref}
                      className="text-base font-medium text-white hover:text-[var(--sv-teal-light)] transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-[var(--sv-gold)] text-sm font-bold uppercase tracking-widest mb-4">
                  Our 3 Locations
                </p>
                <div className="space-y-3">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.id} id={loc.id} className="rounded-xl bg-white/5 p-4">
                      <p className="text-white font-semibold text-base mb-2">{loc.name}</p>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-white/70 text-sm mb-2 hover:text-white transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--sv-teal-light)]" />
                        <span>{loc.fullAddress}</span>
                      </a>
                      <a
                        href={loc.phoneHref}
                        className="flex items-center gap-2 font-bold text-white hover:text-[var(--sv-teal-light)] transition-colors text-base mb-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--sv-teal-light)]" />
                        {loc.phone}
                      </a>
                      <p className="flex items-center gap-2 text-white/60 text-sm">
                        <Clock className="w-3.5 h-3.5 text-[var(--sv-teal-light)]" />
                        {loc.hoursDisplay}
                      </p>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-card p-6 md:p-8 border border-gray-100"
            >
              <h3 className="font-heading font-bold text-[var(--sv-navy)] text-xl mb-6">
                Request Your Free Consultation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    {...register("name")}
                    placeholder="Jane Smith"
                    className="form-input"
                  />
                  {errors.name && <p className="form-error">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    {...register("phone")}
                    placeholder="555.555.5555"
                    type="tel"
                    className="form-input"
                  />
                  {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Email Address *</label>
                <input
                  {...register("email")}
                  placeholder="jane@email.com"
                  type="email"
                  className="form-input"
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Preferred Location *</label>
                  <select {...register("location")} className="form-select">
                    <option value="">Select location…</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.shortName}
                      </option>
                    ))}
                  </select>
                  {errors.location && <p className="form-error">{errors.location.message}</p>}
                </div>
                <div>
                  <label className="form-label">Area of Concern</label>
                  <select {...register("service")} className="form-select">
                    <option value="">Select service…</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="form-label">Tell Us About Your Concerns *</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Describe your vein concerns, how long you've had them, and any questions you'd like answered…"
                  className="form-input resize-none"
                />
                {errors.message && <p className="form-error">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Free Consultation
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                By submitting this form, your request is securely sent to our care team.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

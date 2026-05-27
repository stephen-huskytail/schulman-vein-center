"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";

export default function LocationsSection() {
  return (
    <section id="locations" className="section-light">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="section-eyebrow">Find Us Near You</p>
          <h2 className="section-title mb-3">
            Three{" "}
            <span className="text-[var(--sv-teal)]">Convenient Locations</span>
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle">
            Serving Manhattan, Nassau County, and Suffolk County — with the same world-class vein specialists at every location.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-gray-100 overflow-hidden transition-all"
            >
              {/* Header strip */}
              <div className="bg-[var(--sv-navy)] px-6 py-4">
                <p className="text-[var(--sv-gold)] text-xs font-bold uppercase tracking-widest mb-0.5">
                  Location {i + 1}
                </p>
                <h3 className="font-heading font-bold text-white text-lg">{loc.shortName}</h3>
              </div>

              {/* Details */}
              <div className="p-4 md:p-6 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="icon-circle mt-0.5">
                    <MapPin className="w-4 h-4 text-[var(--sv-teal)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm font-medium text-gray-800">{loc.address}</p>
                    <p className="text-sm text-gray-600">{loc.city}, {loc.state} {loc.zip}</p>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--sv-teal)] mt-1 hover:underline font-medium"
                    >
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="icon-circle">
                    <Phone className="w-4 h-4 text-[var(--sv-teal)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <a
                      href={loc.phoneHref}
                      className="text-base font-bold text-[var(--sv-navy)] hover:text-[var(--sv-teal)] transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="icon-circle">
                    <Clock className="w-4 h-4 text-[var(--sv-teal)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-sm text-gray-700">{loc.hoursDisplay.split(" · ")[0]}<span className="block">{loc.hoursDisplay.split(" · ")[1]}</span></p>
                    <p className="text-xs text-gray-400 mt-0.5">Sat–Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <a
                  href={loc.phoneHref}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {loc.shortName}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Three maps, one for each location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={`${loc.id}-map`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-card border border-gray-200 aspect-[4/3] bg-gray-100"
            >
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.fullAddress)}&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Schulman Vein Center ${loc.shortName} location map`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

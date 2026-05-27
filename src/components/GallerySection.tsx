"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  { category: "Spider Veins", before: "/images/gallery/spider-veins-8.png", label: "Spider Veins – Patient 8" },
  { category: "Spider Veins", before: "/images/gallery/spider-veins-7.png", label: "Spider Veins – Patient 7" },
  { category: "Varicose Veins", before: "/images/gallery/varicose-large.png", label: "Enlarged Varicose Veins" },
  { category: "Varicose Veins", before: "/images/gallery/varicose-veins.png", label: "Varicosities in Leg" },
];

const CATEGORIES = ["All", "Spider Veins", "Varicose Veins", "Hand Veins"];

export default function GallerySection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <section id="gallery" className="section-cream">
      <div className="container-sv">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="section-eyebrow">Real Results</p>
          <h2 className="section-title mb-3">
            Before &amp;{" "}
            <span className="text-[var(--sv-teal)]">After Gallery</span>
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="section-subtitle">
            These before &amp; after photos represent actual patient results from Schulman Vein and Laser Center across a range of vein conditions.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-[var(--sv-teal)] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--sv-teal)] hover:text-[var(--sv-teal)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-gray-200 shadow-card hover:shadow-card-hover transition-shadow"
                onClick={() => setLightbox(item.before)}
              >
                <Image
                  src={item.before}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-[var(--sv-navy)]/0 group-hover:bg-[var(--sv-navy)]/50 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-xs font-medium">{item.label}</p>
                  <span className="text-white/70 text-[10px]">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative max-w-2xl w-full max-h-[80vh] aspect-auto min-[400px]:aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

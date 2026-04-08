import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vein Health Blog",
  description:
    "Read educational articles from Schulman Vein Center on vein symptoms, treatment options, insurance, recovery, and prevention.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/blog`,
  },
  openGraph: {
    title: "Vein Health Blog | Schulman Vein Center",
    description:
      "Educational articles on varicose veins, spider veins, laser treatment, insurance, and recovery.",
    url: `${BUSINESS.siteUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Vein Health Resources from Our Specialists"
        description="Medical guidance for Manhattan and Long Island patients, written to answer common questions before your first visit."
      />

      <section className="section-light">
        <div className="container-narrow">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <Image
              src="/images/gallery/varicose-large.png"
              alt="Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <div className="p-6 md:p-8">
              <p className="section-eyebrow mb-2">Featured Post</p>
              <h2 className="section-title text-2xl md:text-3xl mb-3">
                Vein Treatment on the Upper East Side — What Manhattan Patients Should Know
              </h2>
              <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-4">
                <CalendarDays className="w-4 h-4" />
                <span>April 7, 2026</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you live or work in Manhattan and have been postponing care, this guide covers
                what causes vein symptoms, what treatment involves, and how appointments are
                designed for New York schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog/vein-treatment-upper-east-side-manhattan"
                  className="btn-primary justify-center"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline-navy justify-center">
                  Schedule A Consultation
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

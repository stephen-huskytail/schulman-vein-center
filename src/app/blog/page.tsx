import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";

const featuredPost = {
  title: "Vein Treatment on the Upper East Side - What Manhattan Patients Should Know",
  slug: "vein-treatment-upper-east-side-manhattan",
  excerpt:
    "How Manhattan patients can get physician-led vein care near Carnegie Hill with same-day recovery for most treatments.",
  published: "April 7, 2026",
  image: "/images/gallery/varicose-veins.png",
  imageAlt:
    "Vein doctor performing ultrasound evaluation at Schulman Vein and Laser Center, Upper East Side Manhattan",
};

export const metadata: Metadata = {
  title: "Vein Health Blog",
  description:
    "Educational articles from Schulman Vein and Laser Center on vein symptoms, treatment options, recovery, and prevention.",
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
        description="Educational guidance from our physician-led team for patients in Manhattan and Long Island."
      />

      <section className="section-light">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
            <h2 className="section-title text-2xl mb-4">Latest Article</h2>

            <article className="grid md:grid-cols-[320px_1fr] gap-6 items-start">
              <Link href={`/blog/${featuredPost.slug}`} className="block rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                />
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-2">{featuredPost.published}</p>
                <h3 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[var(--sv-teal)] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`} className="btn-primary inline-flex">
                  Read This Article
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/constants";
import { getAllBlogPosts } from "@/lib/blog-posts";

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

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Vein Health Resources from Our Specialists"
        description="Medical guidance for Manhattan and Long Island patients, written to answer common questions before your first visit."
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Blog", url: `${BUSINESS.siteUrl}/blog` },
        ]}
      />

      <section className="section-light">
        <div className="container-sv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-[var(--sv-teal)]/10">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt ?? post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--sv-teal)] to-[var(--sv-navy)] flex items-end">
                    <span className="m-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                      Schulman Vein Center
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <span className="inline-flex self-start items-center rounded-full bg-[var(--sv-teal)]/10 text-[var(--sv-teal)] text-xs font-semibold tracking-wide px-3 py-1 mb-3">
                  {post.category}
                </span>
                <h2 className="font-heading font-bold text-lg text-[var(--sv-navy)] mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="w-3.5 h-3.5" />
                    {post.readTimeMinutes} min
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="btn-primary justify-center text-sm"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

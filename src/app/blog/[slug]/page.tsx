import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { BUSINESS } from "@/lib/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Schulman Vein and Laser Center",
      description: "The requested article could not be found.",
    };
  }

  const canonicalUrl = `${BUSINESS.siteUrl}/blog/${post.slug}`;
  const ogImageUrl = post.featuredImage?.startsWith("http")
    ? post.featuredImage
    : `${BUSINESS.siteUrl}${post.featuredImage ?? "/images/gallery/varicose-large.png"}`;

  return {
    title: post.metaTitle ?? `${post.title} | Schulman Vein and Laser Center`,
    description: post.metaDescription ?? post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.ogDescription ?? post.metaDescription ?? post.excerpt,
      url: canonicalUrl,
      type: "article",
      siteName: BUSINESS.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 675,
          alt: post.featuredImageAlt ?? post.title,
        },
      ],
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${BUSINESS.siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    datePublished: `${post.publishedAt}T00:00:00.000Z`,
    dateModified: `${post.publishedAt}T00:00:00.000Z`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: post.featuredImage?.startsWith("http")
      ? post.featuredImage
      : `${BUSINESS.siteUrl}${post.featuredImage ?? "/images/gallery/varicose-large.png"}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { name: "Home", url: `${BUSINESS.siteUrl}/` },
          { name: "Blog", url: `${BUSINESS.siteUrl}/blog` },
          { name: post.title, url: canonicalUrl },
        ]}
      />

      <section className="section-light">
        <div className="container-narrow">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 md:gap-5 mb-8 pb-6 border-b border-gray-100">
              <span className="inline-flex items-center rounded-full bg-[var(--sv-teal)]/10 text-[var(--sv-teal)] text-xs font-semibold tracking-wide px-3 py-1">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <CalendarDays className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <Clock3 className="w-4 h-4" />
                {post.readTimeMinutes} min read
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                <UserRound className="w-4 h-4" />
                {post.author}
              </span>
            </div>

            {post.featuredImage ? (
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt ?? post.title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl mb-8"
                priority
              />
            ) : null}

            <div className="space-y-10">
              {post.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-4">
                    {section.heading}
                  </h2>
                  {section.imageSrc ? (
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt ?? section.heading}
                      width={1200}
                      height={675}
                      className="w-full h-auto rounded-xl mb-5"
                    />
                  ) : null}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {post.relatedLinks?.length ? (
              <section className="mt-10 bg-white rounded-xl border border-gray-100 p-6 md:p-7">
                <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">
                  Related Treatment Resources
                </h2>
                <ul className="space-y-2">
                  {post.relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[var(--sv-teal)] font-medium hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-10 bg-[var(--sv-cream)] rounded-xl border border-gray-100 p-6 md:p-7">
              <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-3">
                Need Personalized Vein Care?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Schedule a physician-led evaluation and review treatment options tailored to your
                symptoms and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services/free-vein-screening" className="btn-primary justify-center">
                  Book A Free Vein Screening
                </Link>
                <Link href="/services" className="btn-outline-navy justify-center">
                  Explore Treatment Services
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CalendarDays, CheckCircle2, ChevronRight, Clock3, HelpCircle, Info, Lightbulb, List, UserRound } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { BUSINESS } from "@/lib/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const CALLOUT_STYLES: Record<
  "tip" | "warning" | "info",
  { border: string; bg: string; text: string; icon: typeof Lightbulb; label: string }
> = {
  tip: {
    border: "border-emerald-300",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    icon: Lightbulb,
    label: "Tip",
  },
  info: {
    border: "border-sky-300",
    bg: "bg-sky-50",
    text: "text-sky-900",
    icon: Info,
    label: "Info",
  },
  warning: {
    border: "border-amber-300",
    bg: "bg-amber-50",
    text: "text-amber-900",
    icon: AlertTriangle,
    label: "Important",
  },
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

function getCanonicalSlug(slug: string) {
  if (slug === "evlt-vs-sclerotherapy-which-treatment-is-right") {
    return "evlt-vs-sclerotherapy-vein-treatment-new-york";
  }

  return slug;
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

  const canonicalSlug = getCanonicalSlug(post.slug);
  const canonicalUrl = `${BUSINESS.siteUrl}/blog/${canonicalSlug}`;
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

  const canonicalSlug = getCanonicalSlug(post.slug);
  const canonicalUrl = `${BUSINESS.siteUrl}/blog/${canonicalSlug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    about: {
      "@type": "MedicalCondition",
      name: post.title,
    },
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
            ) : (
              <div className="mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-[var(--sv-teal)] to-[var(--sv-navy)] p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Featured Article
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
                  {post.title}
                </h2>
              </div>
            )}

            {post.tableOfContents?.length ? (
              <nav className="mb-8 rounded-xl border border-[var(--sv-teal)]/30 bg-[var(--sv-teal)]/5 p-5">
                <div className="flex items-center gap-2 mb-3 text-[var(--sv-navy)] font-semibold text-sm uppercase tracking-wide">
                  <List className="w-4 h-4" />
                  Table of Contents
                </div>
                <ol className="space-y-1.5">
                  {post.tableOfContents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--sv-teal)] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {post.quickSummary?.length ? (
              <div className="mb-8 rounded-xl border-l-4 border-[var(--sv-teal)] bg-[var(--sv-teal)]/8 p-5">
                <p className="text-[var(--sv-navy)] font-semibold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Quick Summary
                </p>
                <ul className="space-y-2">
                  {post.quickSummary.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--sv-teal)] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="space-y-10">
              {post.body.map((section, sectionIndex) => (
                <section key={`${section.heading}-${sectionIndex}`}>
                  {section.keyTakeaway ? (
                    <div className="mb-4 rounded-xl border border-[var(--sv-teal)]/30 bg-[var(--sv-teal)]/10 p-4">
                      <p
                        className="text-gray-700 leading-relaxed [&_a]:text-[var(--sv-teal)] [&_a]:font-medium [&_a:hover]:underline [&_strong]:text-[var(--sv-navy)] [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: section.keyTakeaway }}
                      />
                    </div>
                  ) : null}
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
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${section.heading}-paragraph-${paragraphIndex}`}
                        className="text-gray-700 leading-relaxed [&_a]:text-[var(--sv-teal)] [&_a]:font-medium [&_a:hover]:underline [&_strong]:text-[var(--sv-navy)] [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 list-disc space-y-2 border-l-2 border-[var(--sv-teal)]/30 pl-6 text-gray-700">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${section.heading}-bullet-${bulletIndex}`}
                          className="pl-1 leading-relaxed [&_a]:text-[var(--sv-teal)] [&_a]:font-medium [&_a:hover]:underline [&_strong]:text-[var(--sv-navy)] [&_strong]:font-semibold"
                          dangerouslySetInnerHTML={{ __html: bullet }}
                        />
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    (() => {
                      const calloutStyle = CALLOUT_STYLES[section.callout.type];
                      const CalloutIcon = calloutStyle.icon;
                      return (
                        <div
                          className={`mt-5 rounded-xl border-l-4 ${calloutStyle.border} ${calloutStyle.bg} p-4`}
                        >
                          <div className={`mb-2 flex items-center gap-2 text-sm font-semibold ${calloutStyle.text}`}>
                            <CalloutIcon className="h-4 w-4" />
                            {calloutStyle.label}
                          </div>
                          <p
                            className={`leading-relaxed ${calloutStyle.text} [&_a]:text-[var(--sv-teal)] [&_a]:font-medium [&_a:hover]:underline [&_strong]:text-[var(--sv-navy)] [&_strong]:font-semibold`}
                            dangerouslySetInnerHTML={{ __html: section.callout.text }}
                          />
                        </div>
                      );
                    })()
                  ) : null}
                </section>
              ))}
            </div>

            {post.faqSection?.length ? (
              <section className="mt-10 rounded-xl border border-gray-100 bg-white p-6 md:p-7">
                <h2 className="font-heading text-2xl font-bold text-[var(--sv-navy)] mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[var(--sv-teal)]" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {post.faqSection.map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                      <p className="font-semibold text-[var(--sv-navy)] mb-2">{faq.question}</p>
                      <p className="text-gray-700 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

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

import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.schulmanveincenter.com";
  const homepageDate = new Date("2026-04-08T00:00:00.000Z");
  const serviceDate = new Date("2026-04-08T00:00:00.000Z");
  const locationDate = new Date("2026-04-08T00:00:00.000Z");
  const contentDate = new Date("2026-04-08T00:00:00.000Z");
  const legalDate = new Date("2026-04-08T00:00:00.000Z");
  const blogDate = new Date("2026-04-08T00:00:00.000Z");

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}`,
      lastModified: homepageDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/locations`,
      lastModified: locationDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/locations/manhattan`,
      lastModified: locationDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/locations/manhasset`,
      lastModified: locationDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/locations/commack`,
      lastModified: locationDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/services`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/varicose-vein-treatment`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/spider-vein-treatment`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/laser-vein-therapy`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/body-vein-treatment`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/vein-disorders`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/free-vein-screening`,
      lastModified: serviceDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/faq`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/reviews`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/results`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: legalDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: legalDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPostRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogPostRoutes];
}

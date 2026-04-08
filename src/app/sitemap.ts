import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.schulmanveincenter.com";
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/services",
    "/services/varicose-vein-treatment",
    "/services/spider-vein-treatment",
    "/services/laser-vein-therapy",
    "/services/body-vein-treatment",
    "/services/vein-disorders",
    "/services/free-vein-screening",
    "/results",
    "/reviews",
    "/faq",
    "/contact",
    "/locations",
    "/locations/manhattan",
    "/locations/manhasset",
    "/locations/commack",
    "/privacy",
    "/terms",
    "/sitemap-page",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

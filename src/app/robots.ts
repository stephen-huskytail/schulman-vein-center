import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: [
          "GPTBot",
          "anthropic-ai",
          "PerplexityBot",
          "GoogleOther",
          "CCBot",
        ],
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://www.schulmanveincenter.com/sitemap.xml",
  };
}

# Schulman Vein Center Project Memory

## Last Worked On

June 2, 2026: Completed a full repo-based SEO, GEO, localization, content, and UX audit for the Schulman Vein and Laser Center Next.js site.

## Project Shape

- Framework: Next.js App Router.
- Main source of truth:
  - Business, locations, doctors, services, FAQs, testimonials, schema: `src/lib/constants.ts`
  - Expanded service copy and service FAQs: `src/lib/service-content.ts`
  - Blog posts: `src/lib/blog-posts.ts`
- SEO infrastructure:
  - Root metadata: `src/app/layout.tsx`
  - Sitemap: `src/app/sitemap.ts`
  - Robots: `src/app/robots.ts`
  - GEO files: `public/llms.txt`, `public/llms-full.txt`

## Audit Summary

The site is in a good baseline state: most pages have metadata, canonical URLs, structured data, conversion CTAs, location data, and enough medical/service content to rank. The strongest gaps are strategic rather than basic: local service page coverage, duplicate blog cleanup, richer schema, and better GEO answer-readiness.

Top recommendations are documented in `TODO.md`.

## Important Findings

- Production build passed after `npm install`.
- Build generated 41 routes/pages.
- Build warning: Next.js inferred workspace root from `/Users/stephengardner/package-lock.json` and detected this project lockfile too. Consider setting `outputFileTracingRoot` in `next.config.mjs`.
- `node_modules` and `.next` may exist locally from audit/build verification.
- Standalone blog page exists at:
  - `src/app/blog/what-are-varicose-veins-causes-symptoms-treatment-new-york/page.tsx`
- That standalone article is not part of `getAllBlogPosts()` and not listed in `src/app/sitemap.ts`.
- Two EVLT/sclerotherapy blog posts exist; one canonical slug helper points the older slug to the newer slug, but both still generate static pages.

## Future Work Guidance

When implementing SEO improvements:

- Prefer reusing existing constants and content modules over hardcoding new business/location/service data.
- Add new indexable routes to `src/app/sitemap.ts`.
- Keep canonical URLs explicit.
- Add structured data near the page component that renders the page.
- For local pages, include unique neighborhood, transportation, office, physician, FAQ, and service details. Avoid thin city-swapped copies.
- For GEO, make answers extractable with concise summary sections and schema, then keep `llms.txt` current.

## Blog SOP

- Every new or updated blog post must include at least 5 contextual internal links in the rendered article copy.
- Count in-copy links only: paragraph, bullet, callout, and key-takeaway anchors count; navigation, breadcrumbs, sidebar, related-resource blocks, and bottom CTA links do not satisfy blog internal-link QC.
- Use descriptive anchors pointing to relevant service, location, and related blog pages; prefer same-window internal links. Do not force internal blog links to open in a new tab; Stephen overrode the new-tab suggestion on 2026-07-02 for SEO reasons.
- Before publishing or reporting complete, verify the live rendered DOM for the target blog URL and confirm the post has 5+ qualifying internal links with expected destinations.

## Recommended Next Task

Start with blog cleanup because it has the highest immediate technical SEO risk:

1. Choose canonical article for the hardcoded varicose-veins post.
2. Either migrate it into `src/lib/blog-posts.ts` and sitemap, or redirect it.
3. Resolve the duplicate EVLT/sclerotherapy article pair with a redirect or noindex strategy.
4. Re-run `npm run build`.

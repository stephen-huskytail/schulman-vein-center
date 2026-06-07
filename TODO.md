# Schulman Vein Center SEO / GEO Audit TODO

Audit date: June 2, 2026

## Scope Reviewed

- Next.js App Router site with homepage, services, locations, FAQ, reviews, results, contact, legal pages, sitemap page, robots, XML sitemap, `llms.txt`, `llms-full.txt`, and blog content.
- Generated page inventory from build output:
  - Core/static pages: `/`, `/about`, `/blog`, `/contact`, `/faq`, `/locations`, `/privacy`, `/results`, `/reviews`, `/services`, `/sitemap-page`, `/terms`
  - Location pages: `/locations/manhattan`, `/locations/manhasset`, `/locations/commack`
  - Service pages: `/services/varicose-vein-treatment`, `/services/spider-vein-treatment`, `/services/laser-vein-therapy`, `/services/body-vein-treatment`, `/services/vein-disorders`, `/services/free-vein-screening`
  - Blog pages: 13 generated posts from `src/lib/blog-posts.ts`
  - Standalone blog page: `/blog/what-are-varicose-veins-causes-symptoms-treatment-new-york`
- Production build passed after installing dependencies. Build warning remains: Next inferred workspace root from `/Users/stephengardner/package-lock.json`; consider pinning `outputFileTracingRoot` in `next.config.mjs`.

## Top 5 Recommendations

### 1. Build location + service landing pages for local search combinations

Priority: Critical

The site has strong service pages and strong location pages, but not enough pages for high-intent local combinations such as:

- `/locations/manhattan/varicose-vein-treatment`
- `/locations/manhattan/spider-vein-treatment`
- `/locations/manhasset/varicose-vein-treatment`
- `/locations/commack/spider-vein-treatment`
- `/services/varicose-vein-treatment/long-island`
- `/services/spider-vein-treatment/upper-east-side`

Why it matters: Current location pages say all services are available, but they do not fully target "varicose vein treatment Manhattan", "spider vein treatment Long Island", "vein doctor Commack", etc. Dedicated pages can capture local long-tail demand and improve Google local organic relevance.

Implementation notes:

- Create a reusable route such as `src/app/locations/[id]/services/[slug]/page.tsx`.
- Reuse `LOCATIONS`, `SERVICES`, and `SERVICE_EXPANDED_CONTENT`.
- Add unique local intro, transportation/recovery notes, service-specific local FAQs, and physician proof.
- Add `MedicalClinic`, `MedicalProcedure`, `FAQPage`, and breadcrumb schema per page.
- Add these routes to `src/app/sitemap.ts`.

### 2. Fix blog duplication and sitemap coverage

Priority: Critical

There is a standalone hardcoded blog page at `/blog/what-are-varicose-veins-causes-symptoms-treatment-new-york` that is not in `getAllBlogPosts()` and not listed in the sitemap. It overlaps with generated varicose-vein content from `src/lib/blog-posts.ts`.

Why it matters: This creates avoidable duplication, weakens canonical clarity, and leaves a live article outside the XML sitemap.

Implementation notes:

- Decide whether the standalone page should be migrated into `BLOG_POSTS` or redirected/canonicalized to the best generated article.
- If retained, include it in `/blog` listing and `sitemap.ts`.
- If deprecated, add a permanent redirect in `next.config.mjs` and remove the standalone page.
- Check the two EVLT vs sclerotherapy posts; one canonicalizes to the other but still generates a live static path. Prefer one canonical article plus redirect.

### 3. Expand structured data for GEO and rich-result clarity

Priority: High

The site already uses organization, physician, location, FAQ, review, article, breadcrumb, and medical procedure schema in several places. The next lift is to expose more page-specific entities and FAQ content.

Implementation notes:

- Add `FAQPage` schema to each service page using `SERVICE_EXPANDED_CONTENT[slug].faqs` and local FAQs.
- Add `FAQPage` schema to each location page from `location.locationFaqs`.
- Upgrade blog schema from generic `MedicalWebPage` to a graph that includes `BlogPosting` or `Article`, `MedicalWebPage`, `FAQPage` when available, `Person` author, and publisher `Organization`.
- Add `hasMap`, `sameAs`, and Google Business Profile URLs when known.
- Add `knowsAbout`, `availableService`, or `makesOffer` references to connect clinics, doctors, services, and conditions.

### 4. Improve GEO answer-readiness and medical trust signals

Priority: High

The site has `llms.txt` and `llms-full.txt`, which is a strong start. The content should be made more extractable for generative search systems and answer engines.

Implementation notes:

- Update `public/llms.txt` to include the service, location, FAQ, reviews, results, and blog URLs, not just core pages/legal pages.
- Add concise "quick answer" blocks to all service and location pages.
- Add source-style trust details where appropriate: physician credentials, board certifications, years in vein-only practice, treatment settings, insurance notes, and medical disclaimers.
- Add author/reviewer metadata to medical blog posts, especially for DVT and treatment guidance.
- Add "last reviewed" or "updated" dates to medical content and reflect those dates in schema.

### 5. Tighten UX, conversion, and technical SEO polish

Priority: Medium-High

The site is already conversion-oriented, with CTAs, forms, phone links, maps, testimonials, and sticky mobile CTA. The next improvements should reduce friction and protect performance.

Implementation notes:

- Add visible trust/insurance details near the contact form and service CTAs.
- Add appointment-location selection deep links from local service pages.
- Ensure all above-the-fold images have explicit sizes/priority only where needed; avoid making every service detail hero `priority`.
- Consider replacing embedded Google Maps on every location listing card with static map thumbnails or "load map" interactions to reduce third-party iframe cost.
- Pin `outputFileTracingRoot` in `next.config.mjs` to silence the root inference warning and prevent build-trace surprises.

## Other Observations

- Metadata is generally present and canonicalized for primary pages.
- `robots.ts` allows major AI crawlers and disallows `/api/`, which is appropriate for GEO.
- Sitemap uses static `lastModified` dates from April 8, 2026 even though blog posts have varied publish dates in April/May 2026. Use per-post `publishedAt` or add `updatedAt`.
- `sameAs` is empty in organization schema. Add known Google Business Profile, Healthgrades, Yelp, Facebook, LinkedIn, or other authoritative profiles if available.
- Testimonials are implemented as schema, but verify they match review-platform policy and actual review source expectations before relying on rich review treatment.
- The site generated 41 routes in production build. XML sitemap currently targets 33 page URLs, because build output also includes route handlers and the standalone blog article not in sitemap.

## Suggested Implementation Order

1. Resolve blog duplication/canonical/sitemap issue.
2. Add service FAQ and location FAQ schema.
3. Add location-service pages and sitemap entries.
4. Expand `llms.txt` and add answer-ready summaries.
5. Address performance/build polish and map iframe strategy.

## Verification Checklist

- Run `npm run build`.
- Check `/sitemap.xml` contains every intended indexable route.
- Validate schema with Google Rich Results Test and Schema.org validator.
- Check rendered titles/descriptions/canonicals for homepage, all service pages, all location pages, and representative blog posts.
- Confirm no indexable duplicate blog URLs remain without redirect or a deliberate canonical strategy.

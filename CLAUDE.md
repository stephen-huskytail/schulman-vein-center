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

## Recurring Blog Automation SOP

### Source and runtime boundary

- The repository on `main` is the only publishing source of truth: `LEARNINGS.md` for dedupe/run history, this `CLAUDE.md` for the operating rules, `src/lib/blog-posts.ts` for article data, and `public/images/blog/` for assets. Do not use the retired private Google Doc, a separate publishing-reference file, or nonexistent `coworker_git`/`deploy.py` helpers.
- A local shell cannot prove Multica checkout readiness: `multica repo checkout` requires the daemon environment. The independently scheduled preflight must execute inside the assigned Multica runtime and explicitly prove that the registered repository can be checked out at `main` and that the required source paths exist.
- Before changing a scheduled job, re-read its active Multica configuration after the mutation. Confirm its repository identity, assigned agent, `run_only` mode, enabled trigger, exact IANA timezone, and next fire time. Schedule changes remain a Stephen-authorized control-plane action.

### Required delivery controls

- Primary publisher: Wednesday, **10:00 AM America/Los_Angeles**.
- Read-only readiness preflight: Wednesday, **9:45 AM America/Los_Angeles**. It checks enabled trigger/timezone, assigned runtime, repository mapping/checkout, `LEARNINGS.md`/`CLAUDE.md`/`src/lib/blog-posts.ts`, and a non-publishing build path. It must alert `#hermes-blogs` immediately on a failure and never draft, commit, publish, or generate images.
- Read-only semantic watchdog: Wednesday, **10:20 AM America/Los_Angeles**. It must inspect both the primary run and the public site. Success requires current-date canonical article proof: expected visible title/date, HTTP 200 for the article and blog index, plus HTTP 200 for all three referenced article images.
- Semantic delivery—not the outer Multica run state—is decisive. If the primary run is blocked or errors but a verified current-date canonical post is already live, the watchdog returns `PROOF PASS`, stays silent, and must not request a duplicate recovery. If live proof is absent, it posts one concise `WATCHDOG BLOCKED` alert with the run ID, precise missing proof, owner, and safe next action.

### Catch-up and publication gates

- Do not manually retrigger the primary publisher merely to clear an alert. A catch-up requires explicit content/publish authority, is limited to one deduplicated post, and must use the normal repository workflow.
- Before a catch-up or scheduled release: confirm no current-date duplicate is live; select a topic outside `LEARNINGS.md` history; use authoritative medical sources; write conservative, non-diagnostic copy; create three distinct approved images; ensure each image path extension matches its actual bytes; and retain at least five qualifying contextual internal links in the body.
- Before push: run `npm run build`, inspect the staged diff and image MIME/extension alignment, obtain an independent final review for the exact diff, commit only scoped files, and push the approved identity.
- Before reporting success: verify the custom-domain canonical article in a browser, publication date/title/canonical metadata, qualifying internal links, and all three actual article image responses. Log the exact result to the Schulman Close lead and record the run in `LEARNINGS.md`.

## Recommended Next Task

Start with blog cleanup because it has the highest immediate technical SEO risk:

1. Choose canonical article for the hardcoded varicose-veins post.
2. Either migrate it into `src/lib/blog-posts.ts` and sitemap, or redirect it.
3. Resolve the duplicate EVLT/sclerotherapy article pair with a redirect or noindex strategy.
4. Re-run `npm run build`.

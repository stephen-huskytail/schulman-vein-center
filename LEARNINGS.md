# Schulman Vein Center — Blog Automation LEARNINGS

## Run Log

### 2026-07-22 — leg-swelling-vein-disease-new-york
- **Topic:** Leg Swelling and Vein Disease: When to Seek Care in New York
- **Live URL:** https://www.schulmanveincenter.com/blog/leg-swelling-vein-disease-new-york
- **HTTP Status:** 200 ✓ (canonical DOM and all three image assets verified live)
- **Author:** Dr. Lee G. Schulman
- **Category:** Patient Guide
- **Images:** 3 × GPT Image 2 (`gpt-image-2-medium`, 1536×1024 PNG)
  - `leg-swelling-vein-disease-new-york.png` (featured)
  - `venous-reflux-leg-swelling-ultrasound-new-york.png` (in-body)
  - `leg-swelling-walking-vein-health-new-york.png` (in-body)
- **Deploy:** commit `94d943d` pushed to `main` → Vercel auto-deploy → live HTTP 200
- **SEO gates:** meta title 57 chars, meta description 141 chars, primary keyword "leg swelling and vein disease" in H1/first-100-words/H2/slug/alt text ✓
- **Internal links:** /services/vein-disorders, /services/varicose-vein-treatment, /blog/compression-stockings-vein-health-new-york, /blog/exercise-vein-health-new-york, /blog/deep-vein-thrombosis-symptoms-treatment-new-york, /services/free-vein-screening ✓
- **Recovery context:** scheduled run `cd77ca43-6a50-4036-8b7b-dc1e8181f3a6` blocked before source checkout due to missing Multica repo registration; repo mapping, runtime preflight, and read-only semantic watchdog were repaired before authorized catch-up publication.

### 2026-07-15 — radiofrequency-ablation-varicose-veins-new-york
- **Topic:** Radiofrequency Ablation for Varicose Veins: A Complete Guide for New York Patients
- **Live URL:** https://www.schulmanveincenter.com/blog/radiofrequency-ablation-varicose-veins-new-york
- **HTTP Status:** 200 ✓
- **Author:** Dr. Lee G. Schulman
- **Category:** Treatments
- **Images:** 3 × GPT Image 2 (gpt-image-2-medium, 1536×1024)
  - `radiofrequency-ablation-varicose-veins-new-york.jpg` (featured)
  - `radiofrequency-ablation-procedure-new-york.jpg` (in-body)
  - `radiofrequency-ablation-recovery-new-york.jpg` (in-body)
- **Deploy:** git push to main → Vercel auto-deploy → HTTP 200
- **Slack:** Posted to #hermes-blogs (C0BFFC20D6C) ✓
- **SEO gates:** meta title 53 chars, meta desc 145 chars, primary keyword "radiofrequency ablation varicose veins" in H1/first-100-words/H2/slug/alt text ✓
- **Internal links:** /services/varicose-vein-treatment, /services/vein-disorders, /services/free-vein-screening, /blog/evlt-vs-sclerotherapy-vein-treatment-new-york ✓
- **Autopilot run:** 1d53f4d4-4d48-4c8d-9199-849a735e6b84

### 2026-07-08 — spider-vein-sclerotherapy-treatment-new-york
- **Topic:** Sclerotherapy for Spider Veins: What to Expect Before, During, and After in New York
- **Live URL:** https://www.schulmanveincenter.com/blog/spider-vein-sclerotherapy-treatment-new-york
- **HTTP Status:** 200 ✓
- **Author:** Dr. Lee G. Schulman
- **Category:** Treatments
- **Images:** 3 × GPT Image 2 (gpt-image-2-medium, 1536×1024)
  - `spider-vein-sclerotherapy-new-york.jpg` (featured)
  - `spider-vein-sclerotherapy-new-york-procedure.jpg` (in-body)
  - `spider-vein-sclerotherapy-new-york-recovery.jpg` (in-body)
- **Deploy:** git push to main → Vercel auto-deploy → HTTP 200
- **Slack:** Posted to #hermes-blogs (C0BFFC20D6C) ✓
- **SEO gates:** meta title 52 chars, meta desc 142 chars, primary keyword "spider vein sclerotherapy" in H1/first-100-words/H2/slug/alt text ✓
- **Internal links:** /services/spider-vein-treatment, /services/varicose-vein-treatment, /services/vein-disorders, /services/free-vein-screening ✓
- **Autopilot run:** 78b3b156-2e6e-4f98-9b1c-f2c31f6aa669

### 2026-07-01 — varicose-veins-summer-heat-new-york
- **Topic:** Why Varicose Veins Feel Worse in Summer Heat — and What New York Patients Can Do
- **Live URL:** https://www.schulmanveincenter.com/blog/varicose-veins-summer-heat-new-york
- **Status:** Published (prior run)

---

## Topics Published (avoid duplication)
- 2026-07-22: Leg swelling and vein disease — evaluation patterns and urgent-care red flags
- 2026-07-15: Radiofrequency ablation (RFA) for varicose veins — complete guide
- 2026-07-08: Spider vein sclerotherapy (what to expect before/during/after)
- 2026-07-01: Varicose veins + summer heat
- 2026-06-24: Compression stockings and vein health
- 2026-06-17: Travel + DVT prevention
- 2026-06-10: Vein treatment in Commack NY (location page)
- 2026-06-03: Exercise and vein health (best/worst workouts)
- 2026-05-31: Medicare coverage for vein treatment
- 2026-05-31: Vein treatment in Manhasset/Long Island (location page)
- 2026-05-20: DVT symptoms, risk factors, treatment
- 2026-05-15: Preparing for your first vein appointment
- 2026-05-13: Ambulatory phlebectomy
- 2026-05-12: Varicose vein treatment in Manhattan (location page)
- 2026-05-06: Chronic venous insufficiency symptoms + treatment
- 2026-04-29: Pregnancy and varicose veins
- 2026-04-08: EVLT vs sclerotherapy (condition/treatment deep dive)
- 2026-04-08: Does insurance cover vein treatment?
- 2026-04-07: Understanding varicose veins / symptoms / when to seek treatment
- 2026-04-06: EVLT vs sclerotherapy (which is right for you)
- 2026-04-05: What to expect after minimally invasive vein treatment
- 2026-04-03: Spider veins vs varicose veins (comparison)
- 2026-04-02: Hand vein treatment

## Notes
- Publishing reference at skills/blog_writing/references/schulman-vein-center-publishing.md does NOT yet exist as of 2026-07-08. Publishing is handled directly from this LEARNINGS.md + CLAUDE.md brief.
- Deploy method: git push to main (GitHub → Vercel auto-deploy). No deploy.py exists; standard Vercel GitHub integration handles it.
- Image generation: OpenAI API key from Doppler (huskytail-clients/prd → OPENAI_API_KEY), model gpt-image-2 via hermes venv Python.
- Slack posting: SLACK_BOT_TOKEN from Doppler (huskytail-clients/prd), posted via curl to Slack API.

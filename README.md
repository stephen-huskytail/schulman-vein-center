# Schulman Vein and Laser Center — Next.js Website

Modern, SEO-optimized one-page website for Schulman Vein and Laser Center built with Next.js 15.

## Tech Stack

- **Framework**: Next.js 15 + React 19 (App Router)
- **Styling**: Tailwind CSS v3 with custom brand design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner
- **Analytics**: Vercel Analytics
- **Fonts**: Playfair Display (headings) + Inter (body)

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `sv-navy` | `#0B2545` | Primary / backgrounds |
| `sv-teal` | `#0D7F9B` | Accent / CTAs |
| `sv-gold` | `#C8973A` | Highlights / tagline |
| `sv-cream` | `#F8F7F4` | Light section backgrounds |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

1. Push to GitHub (done)
2. Import repo in [vercel.com/new](https://vercel.com/new)
3. No additional env vars needed for the base site

## Contact Form

The contact form submits through `src/app/api/contact/route.ts` and sends via Resend.

Required environment variables:

- `SCHULMAN_RESEND` — Resend API key
- `RESEND_FROM_EMAIL` (optional) — sender address, defaults to `Schulman Vein Center <onboarding@resend.dev>`

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, analytics
│   ├── page.tsx          # Main one-page assembly
│   ├── globals.css       # Design system, component classes
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── TrustBar.tsx      # Fixed top bar (40px) with phone numbers
│   ├── Header.tsx        # Fixed nav with dropdowns + mobile menu
│   ├── Footer.tsx        # 4-col footer + CTA band
│   ├── HeroSection.tsx   # Hero with background image
│   ├── AboutSection.tsx  # About + differentiators
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx  # Dark navy section
│   ├── DoctorsSection.tsx
│   ├── FirstVisitSection.tsx
│   ├── GallerySection.tsx  # Filterable photo gallery + lightbox
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx    # Accordion + FAQ JSON-LD schema
│   ├── InsuranceSection.tsx
│   ├── LocationsSection.tsx  # 3 location cards + Google Maps
│   ├── ContactSection.tsx    # Appointment form
│   ├── CTABannerSection.tsx  # Reusable CTA strip
│   ├── StickyMobileCTA.tsx
│   └── ScrollToTop.tsx
└── lib/
    ├── constants.ts      # All business data (single source of truth)
    └── utils.ts          # cn() utility
```

---

Built by [HuskyTail Digital Marketing](https://www.huskytaildigital.com)

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sv-navy": "#0B2545",
        "sv-navy-light": "#1A3A6E",
        "sv-teal": "#0D7F9B",
        "sv-teal-light": "#17A8C6",
        "sv-gold": "#C8973A",
        "sv-gold-light": "#E8B96A",
        "sv-cream": "#F8F7F4",
        "sv-gray": "#F1F3F6",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(11, 37, 69, 0.06), 0 1px 4px 0 rgba(11, 37, 69, 0.04)",
        "card-hover": "0 8px 32px 0 rgba(11, 37, 69, 0.12), 0 2px 8px 0 rgba(11, 37, 69, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.5s ease-out both",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

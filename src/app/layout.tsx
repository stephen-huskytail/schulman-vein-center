import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TrustBar from "@/components/TrustBar";
import ScrollToTop from "@/components/ScrollToTop";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.schulmanveincenter.com"),
  title: {
    default: "Best Vein Treatment & Removal | Manhattan & Long Island | Schulman Vein",
    template: "%s | Schulman Vein and Laser Center",
  },
  description:
    "Manhattan and Long Island's premier vein specialists. Over 55 years of combined experience. Varicose & spider vein treatment performed personally by board-certified doctors. All We Do Is Veins™. FREE screening.",
  keywords: [
    "vein treatment",
    "varicose vein treatment",
    "spider vein treatment",
    "vein center Manhattan",
    "vein center Long Island",
    "vein doctor NYC",
    "EVLT",
    "sclerotherapy",
    "phlebologist New York",
    "Schulman Vein",
    "vein removal",
    "laser vein treatment",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.schulmanveincenter.com",
    siteName: "Schulman Vein and Laser Center",
    title: "Best Vein Treatment | Manhattan & Long Island | Schulman Vein",
    description:
      "Board-certified vein specialists in Manhattan and Long Island. 55+ years experience. All We Do Is Veins™. Free screening. Call today.",
    images: [
      {
        url: "https://www.schulmanveincenter.com/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Schulman Vein and Laser Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vein Treatment | Manhattan & Long Island | Schulman Vein",
    description:
      "Board-certified vein specialists. 55+ years experience. All We Do Is Veins™. FREE consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.schulmanveincenter.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Static vendor bootstrap; it does not interpolate user-controlled content. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-NSJT8NRG';f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NSJT8NRG');`,
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-800">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSJT8NRG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollToTop />
        <TrustBar />
        <Header />
        <main className="pt-[124px] lg:pt-[132px] pb-[64px] xl:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

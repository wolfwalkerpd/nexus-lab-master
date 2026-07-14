import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import PromoBanner from "@/components/PromoBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/next"

const display = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// app/layout.tsx  →  paste this `metadata` export into your root layout.
// These are the SITE-WIDE DEFAULTS. Every page inherits them unless it
// exports its own metadata (see per-page-metadata.ts).

const BASE = "https://www.nexuslabsystems.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // No maximumScale / userScalable:false — blocking pinch-zoom fails WCAG 1.4.4.
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Nexus Lab Systems | Websites & SEO That Convert",
    template: "%s | Nexus Lab Systems",
  },

  description:
    "Nexus Lab Systems builds fast, premium websites and SEO for dentists, tradespeople and local service businesses — designed and maintained by one person, start to finish.",

keywords: [
  "web design agency",
  "web design and development",
  "website design",
  "website development",
  "custom website design",
  "responsive web design",
  "conversion focused web design",
  "landing page design",
  "SEO",
  "local SEO",
  "SEO agency",
  "search engine optimization",
  "Google Business Profile optimization",
  "technical SEO",
  "on-page SEO",
  "small business SEO",
  "website maintenance",
  "website care plans",
  "website hosting",
  "website management",
  "monthly website maintenance",
  "dental website design",
  "websites for dentists",
  "healthcare web design",
  "websites for tradespeople",
  "websites for local business",
  "professional services web design",
  "websites for accountants",
  "websites for solicitors",
  "web designer near me",
  "small business website design",
  "affordable web design",
  "freelance web designer",
  "web design for small business",
  "Next.js website",
  "fast websites",
  "premium web design",
  "Nexus Lab Systems",
],

  authors: [{ name: "Mohammad Jawad Samadi" }],
  creator: "Nexus Lab Systems",
  publisher: "Nexus Lab Systems",


  alternates: {
    canonical: "/",
  },


  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE,
    siteName: "Nexus Lab Systems",
    title: "Nexus Lab Systems | Websites & SEO That Convert",
    description:
      "Fast, premium websites and SEO for local service businesses — built and maintained by one person, start to finish.",
    images: [
      {
        url: "/opengraph-image.png", // 1200×630, place in app/ or public/
        width: 1200,
        height: 630,
        alt: "Nexus Lab Systems",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Nexus Lab Systems | Websites & SEO That Convert",
    description:
      "Fast, premium websites and SEO for local service businesses — built and maintained by one person.",
    images: ["/opengraph-image.png"],
    // creator: "@yourhandle", // add if you have one
  },

  // Icons are wired automatically from app/icon.svg (Next file convention),
  // so no manual `icons` block is needed here.

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // After you set up Google Search Console, paste the verification token:
  // verification: { google: "your-google-site-verification-token" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="warm"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <PageLoader />
        <PromoBanner />
        <SiteHeader />
        <Analytics />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

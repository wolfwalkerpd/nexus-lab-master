// Structured-data (JSON-LD) builders. Keep all schema shapes here so the site's
// machine-readable identity lives in one place. Rendered via <JsonLd />.
import { EMAIL } from "@/lib/site";

export const BASE = "https://nexuslabsystems.com";

// Stable @id anchors so other nodes (publisher, provider, author) can reference
// the org, site and founder instead of repeating them.
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;
export const PERSON_ID = `${BASE}/#founder`;

const SAME_AS = [
  "https://www.instagram.com/nexuslab.systems",
  "https://www.facebook.com/share/1H78imojpE/",
  "https://x.com/NexusLabsystems",
  "https://www.linkedin.com/in/mohammad-javad-samadi-13b134222/",
  "https://www.tiktok.com/@nexuslabsystems",
];

// The founder — a real Person entity. Defined inline on the sitewide org so its
// @id resolves everywhere, then referenced by blog articles' `author` (E-E-A-T).
const FOUNDER = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mohammad Javad Samadi",
  jobTitle: "Founder",
  url: `${BASE}/about`,
  worksFor: { "@id": ORG_ID },
  sameAs: ["https://www.linkedin.com/in/mohammad-javad-samadi-13b134222/"],
};

/** Who Nexus Lab Systems is — a UK web-design/SEO studio. Sitewide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Nexus Lab Systems",
    url: BASE,
    // Raster logo (≥112px, PNG) — the most reliable format for Google's logo /
    // knowledge-panel feature.
    logo: `${BASE}/icon-512.png`,
    image: `${BASE}/opengraph-image.png`,
    description:
      "Nexus Lab Systems builds fast, premium websites and SEO for dentists, tradespeople and local service businesses — designed and maintained by one person, start to finish.",
    slogan: "Websites and SEO that convert.",
    email: EMAIL,
    // Fixed-price builds run £795–£3,950; care plans from £39/mo. A typical
    // range, so it stays accurate through temporary offers.
    priceRange: "£795–£3,950",
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank transfer, Card",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
    founder: FOUNDER,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: EMAIL,
      areaServed: "GB",
      availableLanguage: "English",
    },
    // No public street address; the studio serves the UK, mostly remotely.
    areaServed: { "@type": "Country", name: "United Kingdom" },
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    knowsAbout: [
      "Web design",
      "Web development",
      "SEO",
      "Local SEO",
      "Google Business Profile",
      "Website maintenance",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web design, SEO and care plans",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development", url: `${BASE}/services/website-design` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Local SEO", url: `${BASE}/services/seo` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Care Plans & Maintenance", url: `${BASE}/services/care-plans` } },
      ],
    },
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE,
    name: "Nexus Lab Systems",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

/** Home → … → current page. Pass paths relative to the site root. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BASE}${it.path}`,
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  author: string;
  image?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${post.slug}#article`,
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    image: post.image ? `${BASE}${post.image}` : `${BASE}/opengraph-image.png`,
    // Reference the founder Person entity (defined on the sitewide org) so every
    // article is attributed to one real, linkable author.
    author: { "@type": "Person", "@id": PERSON_ID, name: post.author },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
    ...(post.datePublished
      ? { datePublished: post.datePublished, dateModified: post.datePublished }
      : {}),
  };
}

export function serviceSchema(s: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: `${BASE}${s.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };
}

/** The contact page — marks it as the place to reach the business. */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE}/contact#webpage`,
    url: `${BASE}/contact`,
    name: "Contact Nexus Lab Systems",
    description:
      "Book a free website teardown. Tell us about your business and we'll get back to you fast.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

/** The about page — its main entity is the founder, tying the person to the org. */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE}/about#webpage`,
    url: `${BASE}/about`,
    name: "About Nexus Lab Systems",
    description:
      "One person who designs, builds and maintains websites for local service businesses across the UK — start to finish.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": PERSON_ID },
    inLanguage: "en-GB",
  };
}

// Structured-data (JSON-LD) builders. Keep all schema shapes here so the site's
// machine-readable identity lives in one place. Rendered via <JsonLd />.
import { EMAIL } from "@/lib/site";

export const BASE = "https://nexuslabsystems.com";

// Stable @id anchors so other nodes (publisher, provider) can reference the org
// and site instead of repeating them.
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;

const SAME_AS = [
  "https://www.instagram.com/nexuslab.systems",
  "https://www.facebook.com/share/1H78imojpE/",
  "https://x.com/NexusLabsystems",
  "https://www.linkedin.com/in/mohammad-javad-samadi-13b134222/",
  "https://www.tiktok.com/@nexuslabsystems",
];

/** Who Nexus Lab Systems is — a UK web-design/SEO studio. Sitewide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Nexus Lab Systems",
    url: BASE,
    logo: `${BASE}/icon.svg`,
    image: `${BASE}/opengraph-image.png`,
    description:
      "Nexus Lab Systems builds fast, premium websites and SEO for dentists, tradespeople and local service businesses — designed and maintained by one person, start to finish.",
    email: EMAIL,
    founder: { "@type": "Person", name: "Mohammad Javad Samadi" },
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
    author: { "@type": "Person", name: post.author },
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

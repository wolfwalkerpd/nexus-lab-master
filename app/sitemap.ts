// app/sitemap.ts
// Nexus Lab Systems — full sitemap, served at /sitemap.xml
//
// Data-driven: dynamic routes (industries, case studies, blog posts) are derived
// from the same data the pages render from, so this stays in sync automatically —
// add a post/case/industry to its data file and it appears here on the next build.

import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/cases";
import { INDUSTRY_PAGES } from "@/lib/industries";
import { POSTS } from "@/lib/posts";

const BASE = "https://www.nexuslabsystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Fixed routes (pages without dynamic segments).
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },

    // Services
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/website-design`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/care-plans`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Sections
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },

    // Company
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },

    // Legal
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRY_PAGES.map((p) => ({
    url: `${BASE}/industries/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...workRoutes, ...blogRoutes];
}

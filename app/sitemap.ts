// app/sitemap.ts
// Nexus Lab Systems — full sitemap
// Serves automatically at https://www.nexuslabsystems.com/sitemap.xml
//
// NOTE: This is the STATIC version — every fixed page is listed.
// For blog posts / case studies that come from a CMS or files, see the
// commented `getDynamic()` pattern at the bottom to append them automatically.

import type { MetadataRoute } from "next";

const BASE = "https://www.nexuslabsystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Core ────────────────────────────────────────────────
    { url: `${BASE}`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },

    // ── Services ────────────────────────────────────────────
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/website-design`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/care-plans`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Industries ──────────────────────────────────────────
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries/dental`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/professional`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries/trades`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Work / Case Studies ─────────────────────────────────
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Company ─────────────────────────────────────────────
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },

    // ── Resources / Blog ────────────────────────────────────
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
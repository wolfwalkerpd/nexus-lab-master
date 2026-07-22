import type { MetadataRoute } from "next";

// Web app manifest. Gives Android/Chrome a named, installable identity and a set
// of icons — and, with the favicon set, a stronger, more reliable icon signal
// for Google than an SVG alone.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexus Lab Systems",
    short_name: "Nexus Lab",
    description:
      "Fast, premium websites and SEO for dentists, tradespeople and local service businesses across the UK.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e6",
    theme_color: "#1c2630",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

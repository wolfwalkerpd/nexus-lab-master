# Nexus Lab Systems — Blog Library (200 posts)

Framework-agnostic export of 200 SEO blog posts. Two ways to import:

## Option A — single JSON file  (`blog-posts.json`)
An array of 200 post objects. Import directly in any JS/TS project:

```ts
import posts from "./blog-posts.json";
// posts[0].title, .slug, .description, .bodyMarkdown, .content.sections, .faq, ...
```

Each object:
```ts
interface BlogPost {
  slug: string;
  title: string;
  description: string;      // meta description (~150 chars)
  metaTitle: string;        // <= 60 chars, no brand suffix
  excerpt: string;
  category: "Websites" | "SEO" | "Local marketing" | "Business";
  topic: string;            // breadcrumb / sub-topic
  tags: string[];
  date: string;             // ISO date (staggered, newest first)
  readingTime: string;      // e.g. "6 min read"
  heroGradient: string;     // CSS gradient for the hero band
  location: string | null;  // for local pages
  targetKeyword: string;
  cta: { heading: string; sub: string };
  faq: { q: string; a: string }[];
  bodyMarkdown: string;     // full post body as Markdown
  content: { intro: string[]; sections: {...}[]; keyTakeaways: string[] };
}
```

## Option B — one Markdown file per post  (`posts/*.md`)
Each file has YAML frontmatter + a Markdown body. Works with Astro content
collections, Next.js MDX, Contentlayer, Eleventy, Hugo, Gatsby, etc. Rename to
`.mdx` if your pipeline requires it (the body is plain Markdown, so both work).

## Notes
- Internal links in the body use root-relative paths like `[web design](/services/website-design)`.
  Update these to match the destination project's routes.
- `date` values are staggered (one per day, newest = 2026-07-18) so the blog
  looks naturally built up rather than bulk-published. Adjust to taste.
- Body uses `## H2` sections, `- bullets`, `> pullquote`, an FAQ section, and
  **bold**. The post title is in frontmatter (not repeated as an H1 in the body).
- Pricing referenced: websites from £477 / £1,170 / £2,370, care plans from £27/mo.

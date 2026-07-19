"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { isBannerImage, type BlogCard } from "@/lib/posts";

// Subtle scrim so a white overlay label stays legible over a photo image.
const SCRIM = "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 55%)";

const INITIAL = 24; // cards shown before "Load more"
const STEP = 24; // cards revealed per "Load more"

export default function BlogExplorer({
  cards,
  categories,
}: {
  cards: BlogCard[];
  categories: string[];
}) {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(INITIAL);

  // Precompute a lowercase haystack per card so filtering stays cheap even
  // across 200+ posts (title, summary, tags, category, topic and location).
  const indexed = useMemo(
    () =>
      cards.map((c) => ({
        card: c,
        hay: [c.title, c.excerpt, c.category, c.topic ?? "", c.location ?? "", ...c.tags]
          .join(" ")
          .toLowerCase(),
      })),
    [cards],
  );

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    return indexed
      .filter(({ card }) => cat === "All" || card.category === cat)
      .filter(({ hay }) => q === "" || hay.includes(q))
      .map(({ card }) => card);
  }, [indexed, cat, q]);

  // Any new filter/search starts the "Load more" count over from the top.
  useEffect(() => setVisible(INITIAL), [cat, q]);

  // The big featured card only makes sense for the full, unfiltered list.
  const showFeatured = cat === "All" && q === "";
  const featured = showFeatured ? filtered[0] : undefined;
  const gridPosts = showFeatured ? filtered.slice(1) : filtered;
  const shown = gridPosts.slice(0, visible);
  const remaining = gridPosts.length - shown.length;

  return (
    <>
      {/* SEARCH + CHIPS */}
      <section className="wrap pb-0 pt-9">
        <FadeIn>
          <div className="relative max-w-[560px]">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted3" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
              placeholder="Search articles — try “SEO”, “Camden”, “pricing”…"
              className="w-full rounded-full border bg-transparent py-[13px] pl-11 pr-11 text-[15px] text-ink outline-none transition-colors placeholder:text-muted3 focus:border-ink/40 hair [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-muted3 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-[10px]">
            {categories.map((c) => {
              const on = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={on}
                  className="inline-flex min-h-[36px] cursor-pointer items-center rounded-full border px-4 py-2 text-[13px] font-medium transition-colors"
                  style={{
                    borderColor: on ? "var(--ink)" : "rgba(var(--ink-rgb),0.2)",
                    background: on ? "var(--ink)" : "transparent",
                    color: on ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-[13px] text-muted3">
            {filtered.length === 0
              ? "No matching articles"
              : `${filtered.length} article${filtered.length === 1 ? "" : "s"}${
                  cat !== "All" ? ` in ${cat}` : ""
                }${q ? ` matching “${query.trim()}”` : ""}`}
          </div>
        </FadeIn>
      </section>

      {/* FEATURED (only when unfiltered) */}
      {featured && (
        <section className="wrap pb-3 pt-7">
          <FadeIn>
            <Link href={`/blog/${featured.slug}`} className="surface grid grid-cols-1 overflow-hidden text-ink no-underline hover:border-ink/30 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[16/10] overflow-hidden" style={featured.image ? undefined : { background: featured.heroGradient }}>
                {featured.image && (
                  <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 55vw" unoptimized={isBannerImage(featured.image)} className={`object-cover ${isBannerImage(featured.image) ? "object-left" : ""}`} />
                )}
                {isBannerImage(featured.image) ? (
                  // Banner already carries its own label — mark it "Featured" up
                  // top so the two don't collide.
                  <span className="absolute left-5 top-5 z-[1] inline-flex rounded-full bg-black/45 px-3 py-[5px] font-mono text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">Featured</span>
                ) : (
                  <>
                    {featured.image && <div className="absolute inset-0" style={{ background: SCRIM }} />}
                    <span className="absolute bottom-6 left-6 z-[1] font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">Featured · {featured.category}</span>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-center p-card">
                <h2 className="serif mb-[14px] text-h4">{featured.title}</h2>
                <p className="mb-5 text-[15.5px] leading-relaxed text-muted2">{featured.excerpt}</p>
                <div className="text-[13px] text-muted3">{featured.date} · {featured.readingTime}</div>
              </div>
            </Link>
          </FadeIn>
        </section>
      )}

      {/* GRID */}
      <section className={`wrap pb-5 ${showFeatured ? "pt-6" : "pt-7"}`}>
        {shown.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
              {shown.map((p, i) => (
                <FadeIn key={p.slug} delay={(i % 3) * 80}>
                  <Link href={`/blog/${p.slug}`} className="surface flex h-full flex-col overflow-hidden text-ink no-underline hover:border-ink/30">
                    <div className="relative aspect-[16/10] overflow-hidden" style={p.image ? undefined : { background: p.heroGradient }}>
                      {p.image && (
                        <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" unoptimized={isBannerImage(p.image)} className={`object-cover ${isBannerImage(p.image) ? "object-left" : ""}`} />
                      )}
                      {!isBannerImage(p.image) && (
                        <>
                          {p.image && <div className="absolute inset-0" style={{ background: SCRIM }} />}
                          <span className="absolute bottom-4 left-4 z-[1] font-mono text-[10px] uppercase tracking-[0.12em] text-white/90">{p.category}</span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col px-6 pb-6 pt-[22px]">
                      <h3 className="serif mb-[10px] text-[22px] leading-[1.15]">{p.title}</h3>
                      <p className="mb-4 text-[14px] leading-relaxed text-muted2">{p.excerpt}</p>
                      <div className="mt-auto text-[12.5px] text-muted3">
                        {p.date} · {p.readingTime}{p.location ? ` · ${p.location}` : ""}
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            {remaining > 0 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + STEP)}
                  className="inline-flex min-h-[46px] cursor-pointer items-center rounded-full border px-7 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
                  style={{ borderColor: "rgba(var(--ink-rgb),0.25)" }}
                >
                  Load more ({remaining} more)
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="py-10 text-center text-[15px] text-muted2">
            No articles match your search — try a different word or clear the filters.
          </p>
        )}
      </section>
    </>
  );
}

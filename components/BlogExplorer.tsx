"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";
import type { BlogPostFull } from "@/lib/posts";

export default function BlogExplorer({ posts }: { posts: BlogPostFull[] }) {
  // Chips derived from the posts so they never drift out of sync.
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts],
  );
  const [cat, setCat] = useState("All");

  // The big "featured" card only makes sense for the full, unfiltered list.
  const showFeatured = cat === "All";
  const featured = posts[0];
  const gridPosts = showFeatured
    ? posts.slice(1)
    : posts.filter((p) => p.category === cat);

  return (
    <>
      {/* CATEGORY CHIPS */}
      <section className="wrap pb-0 pt-9">
        <FadeIn className="flex flex-wrap gap-[10px]">
          {cats.map((c) => {
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
        </FadeIn>
      </section>

      {/* FEATURED (only when unfiltered) */}
      {showFeatured && (
        <section className="wrap pb-3 pt-7">
          <FadeIn>
            <Link href={`/blog/${featured.slug}`} className="surface grid grid-cols-1 overflow-hidden text-ink no-underline hover:border-ink/30 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative flex aspect-[16/10] items-end overflow-hidden p-6" style={featured.image ? undefined : { background: featured.heroGrad }}>
                {featured.image && (
                  <>
                    <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
                    {/* scrim keeps the white label legible over any image */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 55%)" }} />
                  </>
                )}
                <span className="relative z-[1] font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">Featured · {featured.category}</span>
              </div>
              <div className="flex flex-col justify-center p-card">
                <h2 className="serif mb-[14px] text-h4">{featured.title}</h2>
                <p className="mb-5 text-[15.5px] leading-relaxed text-muted2">{featured.description}</p>
                <div className="text-[13px] text-muted3">By {featured.author} · {featured.date} · {featured.read}</div>
              </div>
            </Link>
          </FadeIn>
        </section>
      )}

      {/* GRID */}
      <section className={`wrap pb-5 ${showFeatured ? "pt-6" : "pt-7"}`}>
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 3) * 80}>
                <Link href={`/blog/${p.slug}`} className="surface flex h-full flex-col overflow-hidden text-ink no-underline hover:border-ink/30">
                  <div className="relative flex aspect-[16/10] items-end overflow-hidden p-4" style={p.image ? undefined : { background: p.heroGrad }}>
                    {p.image && (
                      <>
                        <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 55%)" }} />
                      </>
                    )}
                    <span className="relative z-[1] font-mono text-[10px] uppercase tracking-[0.12em] text-white/90">{p.category}</span>
                  </div>
                  <div className="px-6 pb-6 pt-[22px]">
                    <h3 className="serif mb-[10px] text-[22px] leading-[1.15]">{p.title}</h3>
                    <p className="mb-4 text-[14px] leading-relaxed text-muted2">{p.description}</p>
                    <div className="text-[12.5px] text-muted3">{p.date} · {p.read}</div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-[15px] text-muted2">
            No articles in this category yet — check back soon.
          </p>
        )}
      </section>
    </>
  );
}

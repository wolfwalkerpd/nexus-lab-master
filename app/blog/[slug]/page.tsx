import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import { POSTS, getPost } from "@/lib/posts";
import type { Metadata } from "next";

const BASE = "https://www.nexuslabsystems.com";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Nexus Lab Systems`,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-[760px] px-gutter pb-5 pt-section">
        <div className="mb-[18px] font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
          <Link href="/blog" className="text-muted3">Resources</Link> / {post.category}
        </div>
        <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-[14px] gap-y-2 border-b pb-[26px] text-[13.5px] text-muted3 hair">
          <span className="inline-block h-9 w-9 flex-none rounded-full bg-av" />
          <span>By {post.author}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.read}</span>
        </div>
      </article>

      <section className="mx-auto max-w-[1080px] px-gutter pb-2 pt-6">
        <FadeIn>
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[18px] border font-mono text-[11px] tracking-[0.14em] text-white/70 hair sm:aspect-[21/9] sm:text-[13px]" style={post.image ? undefined : { background: post.heroGrad }}>
            {post.image ? (
              <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 1080px) 100vw, 1040px" className="object-cover" />
            ) : (
              "ARTICLE HERO IMAGE"
            )}
          </div>
        </FadeIn>
      </section>

      <article className="mx-auto max-w-[680px] px-gutter pb-5 pt-10 text-lead leading-[1.75]" style={{ color: "#2b2820" }}>
        {post.intro.map((para, i) => (
          <p key={i} className={i === post.intro.length - 1 ? "mb-8" : "mb-[22px]"}>{para}</p>
        ))}
        {post.reasons.map((r, i) => (
          <FadeIn key={i}>
            <h2 className="serif mb-[14px] text-h5 text-ink">{r.heading}</h2>
            <p className="mb-8">{r.body}</p>
            {post.pullQuote && i === post.pullQuoteAfter && (
              <div className="my-8 border-l-[3px] border-accent pl-6">
                <div className="serif text-quote text-ink">&ldquo;{post.pullQuote}&rdquo;</div>
              </div>
            )}
          </FadeIn>
        ))}
        <FadeIn>
          <h2 className="serif mb-[14px] mt-[34px] text-h5 text-ink">{post.fixTitle}</h2>
          <div className="mb-8 flex flex-col gap-3">
            {post.fixes.map((t) => (
              <div key={t} className="flex gap-[11px] text-[16px]"><span className="flex-none font-bold text-accent">→</span>{t}</div>
            ))}
          </div>
          <p>{post.closing}</p>
        </FadeIn>
      </article>

      <section className="mx-auto max-w-[680px] px-gutter pb-2 pt-6">
        <FadeIn>
          <div className="surface flex items-center gap-4 px-5 py-6 sm:px-[26px]">
            <span className="inline-block h-14 w-14 flex-none rounded-full bg-av" />
            <div className="min-w-0">
              <div className="serif mb-[3px] text-[20px]">{post.author}</div>
              <div className="text-[14px] leading-relaxed text-muted2">{post.authorBio}</div>
            </div>
          </div>
        </FadeIn>
      </section>

      <CtaBand heading={post.ctaHeading} sub={post.ctaSub} />
    </>
  );
}

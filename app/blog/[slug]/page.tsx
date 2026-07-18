import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { richText } from "@/components/richText";
import { POSTS, getPost, isBannerImage } from "@/lib/posts";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { Metadata } from "next";

const BASE = "https://nexuslabsystems.com";

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

  const { content } = post;

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            slug: post.slug,
            title: post.title,
            description: post.description,
            author: post.author,
            image: post.image,
            datePublished: post.isoDate,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faq.length ? [faqPageSchema(post.faq)] : []),
        ]}
      />

      <article className="mx-auto max-w-[760px] px-gutter pb-5 pt-section">
        <div className="mb-[18px] font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
          <Link href="/blog" className="text-muted3">Resources</Link> / {post.category}
        </div>
        <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-[14px] gap-y-2 border-b pb-[26px] text-[13.5px] text-muted3 hair">
          <span className="inline-block h-9 w-9 flex-none rounded-full bg-av" />
          <span>By {post.author}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readingTime}</span>
          {post.location && (<><span>·</span><span>{post.location}</span></>)}
        </div>
      </article>

      <section className="mx-auto max-w-[1080px] px-gutter pb-2 pt-6">
        <FadeIn>
          {/* 40/21 matches the banner artwork's 1200×630 ratio, so it shows in
              full (label included) with no cropping. */}
          <div className="relative aspect-[40/21] overflow-hidden rounded-[18px] border hair" style={post.image ? undefined : { background: post.heroGradient }}>
            {post.image && (
              <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 1080px) 100vw, 1040px" unoptimized={isBannerImage(post.image)} className="object-cover" />
            )}
          </div>
        </FadeIn>
      </section>

      <article className="mx-auto max-w-[680px] px-gutter pb-5 pt-10 text-lead leading-[1.75]" style={{ color: "#2b2820" }}>
        {/* INTRO */}
        {content.intro.map((para, i) => (
          <p key={`intro${i}`} className={i === content.intro.length - 1 ? "mb-8" : "mb-[22px]"}>
            {richText(para)}
          </p>
        ))}

        {/* SECTIONS */}
        {content.sections.map((s, i) => (
          <FadeIn key={`sec${i}`}>
            {s.h2 && <h2 className="serif mb-[14px] mt-[6px] text-h5 text-ink">{s.h2}</h2>}
            {s.paragraphs.map((para, j) => (
              <p key={`p${j}`} className="mb-6">{richText(para)}</p>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <div className="mb-8 flex flex-col gap-3">
                {s.bullets.map((b, j) => (
                  <div key={`b${j}`} className="flex gap-[11px] text-[16px]">
                    <span className="flex-none font-bold text-accent">→</span>
                    <span>{richText(b)}</span>
                  </div>
                ))}
              </div>
            )}
            {s.pullquote && (
              <div className="my-8 border-l-[3px] border-accent pl-6">
                <div className="serif text-quote text-ink">&ldquo;{richText(s.pullquote)}&rdquo;</div>
              </div>
            )}
          </FadeIn>
        ))}

        {/* OUTRO (legacy posts) */}
        {content.outro?.map((para, i) => (
          <p key={`outro${i}`} className="mb-6">{richText(para)}</p>
        ))}

        {/* KEY TAKEAWAYS */}
        {content.keyTakeaways.length > 0 && (
          <FadeIn>
            <div className="surface mt-10 p-card">
              <div className="eyebrow mb-4">Key takeaways</div>
              <ul className="flex flex-col gap-3">
                {content.keyTakeaways.map((t, i) => (
                  <li key={`kt${i}`} className="flex gap-[11px] text-[15.5px] leading-relaxed">
                    <span className="flex-none font-bold text-accent">✓</span>
                    <span>{richText(t)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}
      </article>

      {/* FAQ */}
      {post.faq.length > 0 && (
        <section className="mx-auto max-w-[680px] px-gutter pb-2 pt-8">
          <FadeIn>
            <h2 className="serif mb-6 text-h4 text-ink">Frequently asked questions</h2>
            <div className="flex flex-col">
              {post.faq.map((f, i) => (
                <div key={`faq${i}`} className="border-t py-6 hair">
                  <h3 className="serif mb-[10px] text-[19px] leading-snug text-ink">{f.q}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted2">{richText(f.a)}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* AUTHOR */}
      <section className="mx-auto max-w-[680px] px-gutter pb-2 pt-8">
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

      <CtaBand heading={post.cta.heading} sub={post.cta.sub} />
    </>
  );
}

import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { BLOG_POSTS } from "@/lib/site";
import { Metadata } from "next";

const cats = ["All", "Websites", "SEO", "Local marketing", "Business"];

export const blogMetadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Practical guides on web design, SEO and getting found online for local service businesses — from someone who builds and ranks sites for a living.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources & Blog | Nexus Lab Systems",
    description:
      "Practical web design and SEO guides for local service businesses.",
    url: "https://www.nexuslabsystems.com/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <>
      <section className="wrap pb-5 pt-section">
        <div className="eyebrow mb-[18px]">Resources</div>
        <h1 className="serif mb-[22px] max-w-[900px] text-h1 tracking-[-0.5px]">Plain-English guides to growing your business online.</h1>
        <p className="max-w-[640px] text-lead text-muted">No fluff, no jargon — practical advice on websites, SEO and winning more local customers. Written by the people who build them.</p>
      </section>

      <section className="wrap pb-0 pt-9">
        <div className="flex flex-wrap gap-[10px]">
          {cats.map((c, i) => (
            <span key={c} className={`inline-flex min-h-[36px] items-center rounded-full px-4 py-2 text-[13px] font-medium ${i === 0 ? "bg-ink text-bg" : "border text-muted"}`} style={i === 0 ? {} : { borderColor: "rgba(var(--ink-rgb),0.2)" }}>{c}</span>
          ))}
        </div>
      </section>

      <section className="wrap pb-3 pt-7">
        <Link href={`/blog/${featured.slug}`} className="surface grid grid-cols-1 overflow-hidden text-ink no-underline hover:border-ink/30 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex aspect-[16/10] items-end p-6" style={{ background: featured.grad }}>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">Featured · {featured.category}</span>
          </div>
          <div className="flex flex-col justify-center p-card">
            <h2 className="serif mb-[14px] text-h4">{featured.title}</h2>
            <p className="mb-5 text-[15.5px] leading-relaxed text-muted2">{featured.excerpt}</p>
            <div className="text-[13px] text-muted3">By [Author] · [Month Year] · {featured.read}</div>
          </div>
        </Link>
      </section>

      <section className="wrap pb-5 pt-6">
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Link key={i} href={`/blog/${p.slug}`} className="surface flex flex-col overflow-hidden text-ink no-underline hover:border-ink/30">
              <div className="flex aspect-[16/10] items-end p-4" style={{ background: p.grad }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/90">{p.category}</span>
              </div>
              <div className="px-6 pb-6 pt-[22px]">
                <h3 className="serif mb-[10px] text-[22px] leading-[1.15]">{p.title}</h3>
                <p className="mb-4 text-[14px] leading-relaxed text-muted2">{p.excerpt}</p>
                <div className="text-[12.5px] text-muted3">[Month Year] · {p.read}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand heading="Rather we just did it for you?" sub="Skip the reading list. Book a free teardown and we'll show you the wins specific to your site." />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { CASE_STUDIES, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCase(params.slug);
  if (!c) notFound();

  return (
    <>
      <section className="mx-auto max-w-[960px] px-gutter pb-7 pt-section">
        <div className="mb-[18px] font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
          <Link href="/work" className="text-muted3">Work</Link> / {c.client}
        </div>
        <div className="mb-5 flex flex-wrap gap-[10px]">
          {c.tags.map((t) => (
            <span key={t} className="rounded-full bg-panel px-[13px] py-[5px] text-[12px] font-medium text-muted">{t}</span>
          ))}
        </div>
        <h1 className="serif mb-[18px] text-h1 tracking-[-0.5px]">{c.title}</h1>
        <p className="max-w-[680px] text-lead text-muted">{c.intro}</p>
      </section>

      <section className="wrap pb-5 pt-2">
        <div className="flex aspect-[16/9] items-center justify-center rounded-[18px] border font-mono text-[11px] tracking-[0.14em] text-white/70 hair sm:aspect-[21/9] sm:text-[13px]" style={{ background: c.hue }}>
          PROJECT HERO IMAGE
        </div>
      </section>

      <section className="mx-auto max-w-[960px] px-gutter py-[34px]">
        <div className="grid grid-cols-2 gap-5 border-y py-[30px] hair md:grid-cols-4">
          {c.metrics.map(([v, l]) => (
            <div key={l}>
              <div className="serif text-stat text-accent">{v}</div>
              <div className="mt-1 text-[13px] text-muted2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[960px] grid-cols-1 gap-10 px-gutter py-6 md:grid-cols-2 md:gap-11">
        <div>
          <h2 className="serif mb-[14px] text-h6">{c.briefTitle}</h2>
          {c.brief.map((p, i) => <p key={i} className="mb-[14px] text-[15.5px] leading-[1.7] text-muted">{p}</p>)}
        </div>
        <div>
          <h2 className="serif mb-[14px] text-h6">The approach</h2>
          {c.approach.map((p, i) => <p key={i} className="mb-[14px] text-[15.5px] leading-[1.7] text-muted">{p}</p>)}
        </div>
      </section>

      <section className="mt-6 border-y bg-panel hair">
        <div className="mx-auto max-w-[960px] px-gutter py-sectionsm">
          <h2 className="serif mb-[26px] text-h4 tracking-[-0.3px]">What we built</h2>
          <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
            {c.built.map((b) => (
              <div key={b} className="surface flex gap-[11px] px-[18px] py-4 text-[15px] text-muted"><span className="flex-none text-accent">✓</span>{b}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[960px] px-gutter py-14">
        <div className="serif text-quote text-ink">&quot;{c.quote}&quot;</div>
        <div className="mt-[22px] text-[14px] text-muted3">{c.quoteBy}</div>
      </section>

      <section className="mx-auto max-w-[960px] px-gutter pb-5">
        <div className="mb-[14px] font-mono text-[12px] uppercase tracking-[0.16em] text-muted3">Services used</div>
        <div className="flex flex-wrap gap-3">
          {c.services.map((s) => (
            <Link key={s.label} href={s.href} className="inline-flex min-h-[42px] items-center rounded-full border px-[18px] py-[9px] text-[14px] text-ink hover:border-ink" style={{ borderColor: "rgba(var(--ink-rgb),0.28)" }}>{s.label}</Link>
          ))}
        </div>
      </section>

      <section className="wrap pb-2 pt-[34px]">
        <Link href={`/work/${c.next.slug}`} className="surface flex items-center justify-between gap-5 px-6 py-[26px] text-ink no-underline hover:border-ink/30 sm:px-[30px]">
          <div className="min-w-0">
            <div className="mb-1 text-[12.5px] text-muted3">Next case study</div>
            <div className="serif text-h6">{c.next.name} →</div>
          </div>
          <span className="flex-none text-[14px] font-semibold text-accent">View</span>
        </Link>
      </section>

      <CtaBand heading={c.ctaHeading} sub={c.ctaSub} />
    </>
  );
}

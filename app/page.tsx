import Link from "next/link";
import IndustryPicker from "@/components/IndustryPicker";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import FadeIn from "@/components/FadeIn";
import PriceTag from "@/components/PriceTag";
import { SERVICES, WORK, BUILD_PLANS, CARE_PLANS, HOME_FAQ } from "@/lib/site";
import { PROMO, priceFor, promoLive, seatsLeft } from "@/lib/promo";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <FadeIn>
        <section className="wrap grid grid-cols-1 items-center gap-10 pb-sectionsm pt-section lg:grid-cols-[1.15fr_0.85fr] lg:gap-[52px]">
          <div>
            <div className="mb-[22px] font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-accent">
              Design · Build · Grow
            </div>
            <h1 className="serif mb-6 text-display tracking-[-0.5px]">
              Websites that turn browsers into{" "}
              <em className="italic text-accent">bookings</em>.
            </h1>
            <p className="mb-8 max-w-[490px] text-lead text-muted">
              We design, build and grow websites for ambitious businesses — plus SEO,
              branding, copy and an admin panel so you can run it all yourself.
            </p>
            <div className="mb-5 flex flex-wrap items-center gap-[14px]">
              <Link href="/contact" className="btn-primary btn-lg w-full sm:w-auto">
                Book your free teardown →
              </Link>
              <Link href="/work" className="btn-ghost w-full sm:w-auto">See our work</Link>
            </div>
            <p className="text-[13.5px] text-muted3">
              No jargon. Fixed-price projects. You own everything.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border hair sm:aspect-[4/5]" style={{ background: "linear-gradient(150deg,var(--ph-a),var(--ph-b))" }}>
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[12px] tracking-[0.12em] text-muted4">
              <Image src='/nexus.svg' alt="Studio Image" height={700} width={500} />
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[12px] bg-bg p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Free teardown</div>
              <div className="serif text-[19px] leading-[1.15] sm:text-[21px]">A 15-min video showing what&apos;s costing you customers.</div>
            </div>
          </div>
        </section>
      </FadeIn>

      <IndustryPicker />

      {/* SERVICES */}
      <section className="wrap pb-5 pt-section">
        <FadeIn>
          <div className="eyebrow mb-3">Everything under one roof</div>
          <div className="mb-[38px] flex flex-wrap items-end justify-between gap-4">
            <h2 className="serif m-0 text-h2 tracking-[-0.3px]">Services</h2>
            <Link href="/services" className="text-[14.5px] font-medium text-accent">All services →</Link>
          </div>
        </FadeIn>
        {/* Reveals as one unit: the 1px "gaps" are the parent's background showing
            through, so fading individual cells would expose a dark grid. */}
        <FadeIn>
          <div className="grid grid-cols-1 overflow-hidden rounded-[14px] border sm:grid-cols-2 lg:grid-cols-3 hair" style={{ background: "rgba(var(--ink-rgb),0.12)", gap: "1px" }}>
            {SERVICES.map((s) => (
              <Link key={s.no} href={s.href} className="block min-h-[176px] bg-bg px-6 py-7 text-ink no-underline transition-colors hover:bg-card sm:px-[26px] sm:py-[30px]">
                <div className="mb-4 font-mono text-[12px] text-accent">{s.no}</div>
                <div className="serif mb-[9px] text-[23px]">{s.title}</div>
                <div className="mb-[14px] text-[14px] leading-relaxed text-muted2">{s.body}</div>
                <span className="text-[13px] font-medium text-accent">{s.link} →</span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      <CtaBand
        variant="dark"
        align="between"
        heading="See exactly what's holding your website back."
        sub="A short screen recording of your site (or a competitor's), with the three changes that would win you the most customers."
      />

      {/* SELECTED WORK */}
      <section className="wrap pb-section pt-5">
        <FadeIn className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="serif m-0 text-h2 tracking-[-0.3px]">Selected work</h2>
          <Link href="/work" className="text-[14.5px] font-medium text-accent">All case studies →</Link>
        </FadeIn>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {WORK.map((w, i) => (
            <FadeIn key={w.slug} delay={i * 80}>
              <Link
                href={`/work/${w.slug}`}
                className="group block h-full overflow-hidden rounded-[13px] border text-ink no-underline transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(var(--ink-rgb),0.16)] hair"
              >
                {/* overflow-hidden clips the zoom to the image frame, so only the
                    image scales on hover — the tag label stays put. */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                    style={{ backgroundImage: `url('${w.img}')` }}
                  />
                  <span className="absolute bottom-[18px] left-[18px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/90">
                    {w.tag}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 bg-card px-5 py-[18px]">
                  <span className="serif text-[21px]">{w.name}</span>
                  <span className="text-[13px] text-muted3">{w.kind}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
          <FadeIn delay={WORK.length * 80}>
            <Link href="/work" className="flex h-full min-h-[120px] flex-col items-start justify-center gap-[10px] rounded-[13px] border border-dashed bg-panel p-6 text-ink no-underline transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(var(--ink-rgb),0.12)] sm:p-7" style={{ borderColor: "rgba(var(--ink-rgb),0.28)" }}>
              <span className="serif text-[24px]">See every project</span>
              <span className="text-[14px] text-muted2">Full case studies — the brief, the build, the results.</span>
              <span className="mt-1 text-[14px] font-semibold text-accent">Browse case studies →</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="border-t bg-panel hair">
        <div className="wrap py-section">
          <FadeIn className="mb-11 text-center">
            <div className="eyebrow mb-3">Simple, fixed pricing</div>
            <h2 className="serif mb-3 text-h2 tracking-[-0.3px]">Pricing that&apos;s clear from day one</h2>
            <p className="mx-auto max-w-[560px] text-[16px] text-muted">
              Buy your site once, then keep it running with an optional monthly care plan. No hidden fees, no surprises.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3">
            {BUILD_PLANS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div className="flex h-full flex-col rounded-[15px] border bg-card p-6 sm:p-8" style={{ borderColor: p.popular ? "var(--accent)" : "rgba(var(--ink-rgb),0.14)" }}>
                  <div className="mb-[6px] flex flex-wrap items-center justify-between gap-2">
                    <span className="serif text-[24px]">{p.name}</span>
                    {p.popular && <span className="rounded-full border border-accent px-[10px] py-[3px] text-[11px] font-semibold text-accent">Popular</span>}
                  </div>
                  <div className="mb-5 min-h-[40px] text-[13.5px] leading-relaxed text-muted2">{p.desc}</div>
                  <div className="mb-[22px] flex flex-wrap items-baseline gap-[6px]">
                    <span className="text-[13px] text-muted3">from</span>
                    <PriceTag price={p.price} kind="build" variant="pill" />
                  </div>
                  <div className="mb-[26px] flex flex-col gap-[10px]">
                    {p.features.map((f) => (
                      <div key={f} className="flex gap-[9px] text-[13.5px] text-muted"><span className="flex-none text-accent">✓</span>{f}</div>
                    ))}
                  </div>
                  <Link href="/pricing" className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full border border-ink px-4 py-[13px] text-center text-[14px] font-semibold text-ink no-underline hover:bg-ink hover:text-bg">
                    See what&apos;s included
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-[26px] text-center text-[14px] text-muted2">
              Keep it running with a care plan from{" "}
              <strong>{priceFor(CARE_PLANS[0].price, "care")}{CARE_PLANS[0].suffix}</strong> — hosting, updates, backups &amp; support.{" "}
              <Link href="/pricing" className="font-medium">Full pricing →</Link>
            </p>
            {promoLive() && (
              <p className="mt-3 text-center text-[14px] font-semibold text-accent">
                {PROMO.headline} · {PROMO.sub} — {seatsLeft()} of {PROMO.seats} spots left.{" "}
                <Link href="/pricing" className="underline">See the offer →</Link>
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section className="wrap grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[52px]">
        <FadeIn>
          <div className="flex aspect-square items-center justify-center rounded-[16px] border font-mono text-[12px] tracking-[0.12em] text-muted4 hair" style={{ background: "linear-gradient(150deg,var(--ph-a),var(--ph-c))" }}>
            <Image src="/workspace.svg" alt="About our workspace" height={800} width={480} />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="eyebrow mb-4">About</div>
          <h2 className="serif mb-5 text-h3 tracking-[-0.3px]">A small team that actually picks up the phone.</h2>
          <p className="mb-6 text-[16.5px] leading-relaxed text-muted">
            Nexus LabSystems is a lean studio. No account managers, no hand-offs, no ballooning retainers — you work directly with the people building your site. That&apos;s how we move fast and keep the quality high.
          </p>
          <div className="flex flex-wrap gap-x-9 gap-y-5">
            {[["Direct access", "to your maker"], ["Fixed prices", "no surprises"], ["You own it", "site, domain, data"]].map(([a, b]) => (
              <div key={a}><div className="serif mb-[2px] text-[19px]">{a}</div><div className="text-[13px] text-muted3">{b}</div></div>
            ))}
          </div>
          <Link href="/about" className="mt-[26px] inline-block text-[14.5px] font-medium text-accent">More about us →</Link>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="border-t bg-panel hair">
        <div className="mx-auto max-w-[900px] px-gutter py-section">
          <FadeIn className="mb-10 text-center">
            <div className="eyebrow mb-3">Questions</div>
            <h2 className="serif text-h2 tracking-[-0.3px]">Frequently asked</h2>
          </FadeIn>
          <FadeIn delay={80}>
            <FaqAccordion items={HOME_FAQ} />
          </FadeIn>
          <FadeIn className="mt-8 text-center">
            <Link href="/faq" className="text-[14.5px] font-semibold text-accent">
              See all FAQs →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

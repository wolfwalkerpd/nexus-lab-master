import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { ABOUT_FAQ } from "@/lib/site";
import { Metadata } from "next";


export const aboutMetadata: Metadata = {
  title: "About",
  description:
    "One person who designs, builds and answers the phone — a practising clinician who builds websites for local service businesses. No handoffs, no ticket queues.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Nexus Lab Systems",
    description:
      "Meet the one person who designs, builds and maintains your website — start to finish.",
    url: "https://www.nexuslabsystems.com/about",
  },
};

const principles = [
  ["Direct access", "You talk to the people doing the work, from first call to launch and beyond — never a middleman."],
  ["Fixed, honest pricing", "You know the number before we start. No hourly billing, no scope-creep invoices, no surprises."],
  ["You own everything", "Your site, domain, data and content are yours. There's no lock-in and nothing held hostage."],
  ["Built to grow", "We don't disappear at launch. We help your site earn its keep, month after month."],
];

const steps = [
  ["01", "Teardown", "A free, honest review of where you are and what's possible."],
  ["02", "Plan", "A fixed-price proposal with clear scope and timeline."],
  ["03", "Build", "We design and build, with you reviewing at every stage."],
  ["04", "Grow", "We look after it and help it bring you more work."],
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[900px] px-gutter pb-5 pt-section text-center">
        <div className="eyebrow mb-[18px]">About</div>
        <h1 className="serif mb-[22px] text-h1 tracking-[-0.5px]">The studio behind your website.</h1>
        <p className="mx-auto max-w-[640px] text-lead text-muted">
          We&apos;re a small, hands-on team that treats your website like it&apos;s our own business on the line — because our reputation depends on yours doing well.
        </p>
      </section>

      <section className="wrap grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[52px]">
        <div className="flex aspect-square items-center justify-center rounded-[16px] border font-mono text-[12px] tracking-[0.12em] text-muted4 hair" style={{ background: "linear-gradient(150deg,var(--ph-a),var(--ph-c))" }}>
          FOUNDER / TEAM PHOTO
        </div>
        <div>
          <h2 className="serif mb-5 text-h3 tracking-[-0.3px]">Why one focused team beats a faceless agency</h2>
          <p className="mb-4 text-[16.5px] leading-[1.7] text-muted">Nexus LabSystems started with a simple frustration: small businesses were being sold expensive, over-complicated websites by agencies that vanished the moment the invoice was paid.</p>
          <p className="mb-4 text-[16.5px] leading-[1.7] text-muted">We do the opposite. The people you meet are the people who design, build and look after your site. No account managers relaying messages. No junior team learning on your budget. No lock-in.</p>
          <p className="text-[16.5px] leading-[1.7] text-muted">Just good work, fair fixed prices, and a website you own outright.</p>
        </div>
      </section>

      <section className="border-y bg-panel hair">
        <div className="wrap py-sectionsm">
          <div className="eyebrow mb-3">What we stand for</div>
          <h2 className="serif mb-[38px] text-h3 tracking-[-0.3px]">Four principles we won&apos;t bend on</h2>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
            {principles.map(([t, d]) => (
              <div key={t} className="surface p-card">
                <div className="serif mb-2 text-h6">{t}</div>
                <div className="text-[15px] leading-relaxed text-muted2">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-5 pt-section">
        <div className="eyebrow mb-3">How we work</div>
        <h2 className="serif mb-10 text-h3 tracking-[-0.3px]">Simple, transparent, in the loop</h2>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={n}>
              <div className="serif mb-3 text-stat text-accent">{n}</div>
              <div className="serif mb-2 text-[22px]">{t}</div>
              <div className="text-[14px] leading-relaxed text-muted2">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t bg-panel hair">
        <div className="mx-auto max-w-[900px] px-gutter py-section">
          <div className="mb-10 text-center">
            <div className="eyebrow mb-3">Questions</div>
            <h2 className="serif text-h2 tracking-[-0.3px]">Frequently asked</h2>
          </div>
          <FaqAccordion items={ABOUT_FAQ} />
        </div>
      </section>

      <CtaBand heading="Let's see if we're a fit." sub="The best way to get to know us is a free teardown. No pitch, no obligation." />
    </>
  );
}

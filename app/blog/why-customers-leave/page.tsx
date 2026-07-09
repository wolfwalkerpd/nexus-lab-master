import Link from "next/link";
import CtaBand from "@/components/CtaBand";

const reasons = [
  ["1. It loads too slowly", "Every extra second of load time costs you visitors — especially on mobile, on patchy signal, where most local searches happen. If your homepage takes four seconds to appear, a big chunk of people are already gone. Heavy images, bloated templates and cheap hosting are the usual culprits, and all three are fixable."],
  ["2. It's not clear what you do", "A visitor should know what you offer, where you operate and who you help within a glance. Clever taglines and stock photography don't do that job. A plain headline — \u201cEmergency roof repairs across Nottingham, same week\u201d — does. If someone has to scroll and hunt to understand you, they won't."],
  ["3. There's no obvious next step", "Once someone's interested, tell them exactly what to do — book, call, or request a quote — and make that action impossible to miss. One clear, repeated call-to-action beats a page scattered with competing links every time."],
  ["4. It doesn't work on a phone", "The majority of local searches happen on mobile. If your text is tiny, your buttons are hard to tap, or your booking form is a nightmare on a small screen, you're turning away most of your audience. A site should be designed for the phone first, then scaled up."],
  ["5. There's nothing to build trust", "People buy from businesses they trust. Reviews, real photos of your work, guarantees, accreditations and a genuine local address all quietly reassure a nervous first-time visitor. Leave them out and even a beautiful site feels risky."],
];

export default function ArticlePage() {
  return (
    <>
      <article className="mx-auto max-w-[760px] px-gutter pb-5 pt-section">
        <div className="mb-[18px] font-mono text-[12px] font-medium uppercase tracking-[0.2em]">
          <Link href="/blog" className="text-muted3">Resources</Link> / Websites
        </div>
        <h1 className="serif mb-5 text-h1 tracking-[-0.5px]">Why local customers leave your website in 5 seconds</h1>
        <div className="flex flex-wrap items-center gap-x-[14px] gap-y-2 border-b pb-[26px] text-[13.5px] text-muted3 hair">
          <span className="inline-block h-9 w-9 flex-none rounded-full bg-av" />
          <span>By [Author name]</span><span>·</span><span>[Month Year]</span><span>·</span><span>6 min read</span>
        </div>
      </article>

      <section className="mx-auto max-w-[1080px] px-gutter pb-2 pt-6">
        <div className="flex aspect-[16/9] items-center justify-center rounded-[18px] border font-mono text-[11px] tracking-[0.14em] text-white/70 hair sm:aspect-[21/9] sm:text-[13px]" style={{ background: "linear-gradient(135deg,#B7472A,#8f3520)" }}>ARTICLE HERO IMAGE</div>
      </section>

      <article className="mx-auto max-w-[680px] px-gutter pb-5 pt-10 text-lead leading-[1.75]" style={{ color: "#2b2820" }}>
        <p className="mb-[22px]">You have about five seconds. That&apos;s how long a visitor gives your website before they decide to stay or hit the back button and try the next result. For a local business, that decision is the difference between a booked job and a lost one — and most of the reasons people leave are completely fixable.</p>
        <p className="mb-8">Here are the five we see most often in a teardown, and the unglamorous fixes that keep people reading.</p>
        {reasons.map(([h, b], i) => (
          <div key={i}>
            <h2 className="serif mb-[14px] text-h5 text-ink">{h}</h2>
            <p className="mb-8">{b}</p>
            {i === 2 && (
              <div className="my-8 border-l-[3px] border-accent pl-6">
                <div className="serif text-quote text-ink">&quot;If a visitor has to think about what to do next, you&apos;ve already lost half of them.&quot;</div>
              </div>
            )}
          </div>
        ))}
        <h2 className="serif mb-[14px] mt-[34px] text-h5 text-ink">How to fix it, fast</h2>
        <div className="mb-8 flex flex-col gap-3">
          {["Put a plain-English headline and a single clear call-to-action above the fold.", "Compress your images and move to fast, modern hosting.", "Test every page on your own phone — and fix what annoys you.", "Add three to five recent reviews near your call-to-action."].map((t) => (
            <div key={t} className="flex gap-[11px] text-[16px]"><span className="flex-none font-bold text-accent">→</span>{t}</div>
          ))}
        </div>
        <p>None of these require a full rebuild — but together they can meaningfully change how many visitors turn into enquiries. If you&apos;re not sure which apply to your site, that&apos;s exactly what a teardown is for.</p>
      </article>

      <section className="mx-auto max-w-[680px] px-gutter pb-2 pt-6">
        <div className="surface flex items-center gap-4 px-5 py-6 sm:px-[26px]">
          <span className="inline-block h-14 w-14 flex-none rounded-full bg-av" />
          <div className="min-w-0">
            <div className="serif mb-[3px] text-[20px]">[Author name]</div>
            <div className="text-[14px] leading-relaxed text-muted2">[Short author bio — role at Nexus LabSystems and a line on what they write about.]</div>
          </div>
        </div>
      </section>

      <CtaBand heading="See which of these are costing you customers." sub="Book a free teardown and we'll record a walkthrough of your own site." />
    </>
  );
}

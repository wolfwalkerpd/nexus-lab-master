"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type Step = {
  key: "name" | "email" | "business" | "url" | "about" | "source";
  q: string;
  help?: string;
  type: "text" | "email" | "url" | "textarea" | "choice";
  ph?: string;
  optional?: boolean;
  options?: string[];
};

const STEPS: Step[] = [
  { key: "name", q: "First — what's your name?", help: "So we know who we're talking to.", type: "text", ph: "Jane Smith" },
  { key: "email", q: "What's the best email to reach you?", help: "We'll send your teardown here. No spam, ever.", type: "email", ph: "jane@yourbusiness.co.uk" },
  { key: "business", q: "And what's your business called?", type: "text", ph: "Your Business Ltd" },
  { key: "url", q: "Do you already have a website?", help: "Paste the link so we can review it — or skip if you don't have one yet.", type: "url", ph: "https://…", optional: true },
  { key: "about", q: "What does your business do, and what do you need?", help: "A sentence or two is plenty.", type: "textarea", ph: "We're a dental practice in Nottingham and want more online bookings…" },
  { key: "source", q: "Last one — how did you hear about us?", type: "choice", options: ["Google search", "Referral / word of mouth", "Social media", "Saw our work", "Other"] },
];

type Data = Record<Step["key"], string>;

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({ name: "", email: "", business: "", url: "", about: "", source: "" });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const cfg = STEPS[step];
  const total = STEPS.length;
  const pct = done ? 100 : Math.round(((step + 1) / total) * 100);

  const validate = () => {
    const v = (data[cfg.key] || "").trim();
    if (cfg.optional) return "";
    if (!v) return cfg.type === "choice" ? "Please choose an option to continue." : "This field is required.";
    if (cfg.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
    return "";
  };

  const next = () => {
    const err = validate();
    if (err) return setError(err);
    setError("");
    if (step >= total - 1) {
      // [backend placeholder] — POST `data` to your server / CRM here.
      setDone(true);
    } else {
      setStep((s) => s + 1);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  };
  const back = () => {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  };
  const set = (val: string) => setData((d) => ({ ...d, [cfg.key]: val }));

  const firstName = data.name.trim().split(" ")[0];

  if (done) {
    return (
      <div className="surface p-cardlg text-center shadow-[0_20px_60px_rgba(var(--ink-rgb),0.12)]">
        <div className="mx-auto mb-[26px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-accent text-[34px] leading-none text-white">
          ✓
        </div>
        <h1 className="serif mb-[14px] text-h3">
          Finished — we&apos;ll contact you as soon as possible.
        </h1>
        <p className="mx-auto mb-[30px] max-w-[460px] text-[16.5px] leading-relaxed text-muted">
          Thanks{firstName ? `, ${firstName}` : ""}. We&apos;ve got your details and
          we&apos;ll be in touch shortly with your free website teardown. Keep an eye
          on your inbox.
        </p>
        <div className="flex flex-wrap justify-center gap-[13px]">
          <Link href="/" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-[26px] py-[14px] text-[15px] font-semibold text-bg no-underline sm:w-auto">
            Back to home
          </Link>
          <Link href="/work" className="btn-ghost w-full sm:w-auto">See our work while you wait</Link>
        </div>
        <div className="mt-7 font-mono text-[11px] text-muted4">
          [backend placeholder — submissions are not wired to a server in this prototype]
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="surface p-card shadow-[0_20px_60px_rgba(var(--ink-rgb),0.12)]">
        <div className="mb-[10px] flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent sm:text-[12px]">Free teardown</span>
          <span className="whitespace-nowrap font-mono text-[11px] text-muted3 sm:text-[12px]">Step {step + 1} of {total}</span>
        </div>
        <div className="mb-[30px] h-[5px] overflow-hidden rounded-[10px]" style={{ background: "rgba(var(--ink-rgb),0.12)" }}>
          <div className="h-full rounded-[10px] bg-accent transition-[width] duration-300" style={{ width: `${pct}%` }} />
        </div>

        <div key={cfg.key} className="animate-nxfade">
          <h1 className="serif mb-[10px] text-h4">{cfg.q}</h1>
          {cfg.help && <p className="mb-6 text-[15px] leading-relaxed text-muted2">{cfg.help}</p>}

          {(cfg.type === "text" || cfg.type === "email" || cfg.type === "url") && (
            <input
              ref={inputRef}
              type={cfg.type}
              value={data[cfg.key]}
              onChange={(e) => set(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); next(); } }}
              placeholder={cfg.ph}
              /* Never below 16px — iOS Safari zooms the viewport on focus otherwise. */
              className="w-full rounded-[12px] border bg-bg px-[18px] py-4 text-[17px] text-ink outline-none focus:border-accent hair sm:text-[19px]"
            />
          )}
          {cfg.type === "textarea" && (
            <textarea
              ref={inputRef}
              value={data[cfg.key]}
              onChange={(e) => set(e.target.value)}
              placeholder={cfg.ph}
              rows={4}
              className="w-full resize-y rounded-[12px] border bg-bg px-[18px] py-4 text-[16px] leading-relaxed text-ink outline-none focus:border-accent hair sm:text-[18px]"
            />
          )}
          {cfg.type === "choice" && (
            <div className="flex flex-col gap-[11px]">
              {cfg.options!.map((o) => {
                const on = data.source === o;
                return (
                  <button
                    key={o}
                    onClick={() => { set(o); setError(""); }}
                    aria-pressed={on}
                    className="w-full cursor-pointer rounded-[12px] border px-[18px] py-[15px] text-left text-[15px] transition-colors sm:text-[16px]"
                    style={{
                      borderColor: on ? "var(--ink)" : "rgba(var(--ink-rgb),0.2)",
                      background: on ? "var(--ink)" : "var(--bg)",
                      color: on ? "var(--bg)" : "var(--ink)",
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          )}

          {cfg.optional && <div className="mt-3 text-[13px] text-muted3">Optional — feel free to skip.</div>}
          {error && <div className="mt-3 text-[13.5px] text-accent">{error}</div>}
        </div>

        <div className="mt-8 flex items-center justify-between gap-[14px]">
          {step > 0 ? (
            <button onClick={back} className="min-h-[44px] cursor-pointer border-none bg-transparent px-1 py-2 text-[15px] text-muted2">
              ← Back
            </button>
          ) : (
            <span />
          )}
          <button onClick={next} className="btn-primary btn-lg cursor-pointer border-none">
            {step === total - 1 ? "Finish" : "Next"} →
          </button>
        </div>
      </div>
      <p className="mt-5 text-center text-[13px] text-muted3">
        Prefer email? <a href="mailto:contact@nexuslabsystems.com" className="font-medium">contact@nexuslabsystems.com</a>
      </p>
    </>
  );
}

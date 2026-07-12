"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { INDUSTRIES } from "@/lib/site";

export default function IndustryPicker() {
  const [i, setI] = useState(0);
  const active = INDUSTRIES[i];

  return (
    <section className="border-y bg-panel hair">
      <div className="wrap py-sectionsm">
        <FadeIn className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">See yourself here</div>
            <h2 className="serif m-0 max-w-[560px] text-h2 leading-[1.05] tracking-[-0.3px]">
              Pick your industry. Watch what we&apos;d build.
            </h2>
          </div>
          <div className="flex max-w-[540px] flex-wrap justify-start gap-[9px] lg:justify-end">
            {INDUSTRIES.map((it, idx) => {
              const on = idx === i;
              return (
                <button
                  key={it.key}
                  onClick={() => setI(idx)}
                  aria-pressed={on}
                  className="inline-flex min-h-[40px] cursor-pointer items-center whitespace-nowrap rounded-full border px-[15px] py-[9px] text-[13px] font-semibold transition-colors"
                  style={{
                    borderColor: on ? "var(--ink)" : "rgba(var(--ink-rgb),0.24)",
                    background: on ? "var(--ink)" : "transparent",
                    color: on ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {it.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-[34px] lg:grid-cols-2">
          {/* website preview */}
          <FadeIn
            className="min-w-0 overflow-hidden rounded-[14px] border shadow-[0_20px_50px_rgba(var(--ink-rgb),0.16)] hair"
          >
            <div className="flex items-center gap-[7px] border-b bg-av px-[15px] py-[11px] hair">
              <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#c9713f" }} />
              <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#d6b24a" }} />
              <span className="h-[11px] w-[11px] flex-none rounded-full" style={{ background: "#7a9a6d" }} />
              <span className="ml-3 truncate font-mono text-[11px] text-muted3">your-business.co.uk</span>
            </div>
            <div key={active.key} className="animate-nxfade bg-card">
              <div className="px-6 pb-[30px] pt-[34px] text-white sm:px-[34px] sm:pt-[38px]" style={{ background: active.hue }}>
                <div className="mb-[14px] font-mono text-[10.5px] uppercase tracking-[0.18em] opacity-90">
                  {active.label}
                </div>
                <div className="serif mb-3 text-h4">{active.head}</div>
                <div className="mb-5 max-w-[340px] text-[13.5px] leading-relaxed opacity-90">
                  {active.sub}
                </div>
                <span className="inline-block rounded-full bg-white px-5 py-[11px] text-[13px] font-semibold text-ink">
                  {active.cta}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4 sm:gap-[10px] sm:p-5">
                {active.cards.map((c) => (
                  <div key={c} className="rounded-[9px] border bg-bg px-2 py-[14px] text-center text-[11px] text-muted hair sm:px-3 sm:text-[12px]">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* rank tracker */}
          <FadeIn delay={80} className="min-w-0 rounded-[20px] border bg-bg p-3 shadow-[0_20px_50px_rgba(var(--ink-rgb),0.14)] hair sm:p-[18px]">
            <div className="mb-[13px] flex items-stretch gap-[11px]">
              <div className="flex min-w-0 flex-1 items-center gap-[11px] rounded-[16px] border bg-card px-[15px] py-3 hair">
                <span className="relative inline-block h-[15px] w-[15px] flex-none">
                  <span className="absolute left-0 top-0 h-[11px] w-[11px] rounded-full border-2" style={{ borderColor: "var(--muted3)" }} />
                  <span className="absolute bottom-0 right-0 h-[2px] w-[6px] origin-right rotate-45" style={{ background: "var(--muted3)" }} />
                </span>
                <span key={active.key} className="animate-nxfade min-w-0 flex-1 truncate text-[14px] font-semibold text-ink">
                  {active.query}
                </span>
                <span className="hidden flex-none items-center gap-[6px] border-l pl-[11px] text-[12.5px] text-muted3 hair xs:flex">
                  <span className="inline-block h-[9px] w-[9px] flex-none rotate-[-45deg] rounded-[50%_50%_50%_0] border-[1.5px]" style={{ borderColor: "var(--muted3)" }} />
                  Nottingham
                </span>
              </div>
              <div className="flex w-[68px] flex-none flex-col items-center justify-center rounded-[16px] border bg-accentweak sm:w-[88px]" style={{ borderColor: "rgba(var(--accent-rgb),0.3)" }}>
                <span className="serif text-[26px] leading-none text-accent sm:text-[30px]">#7</span>
                <span className="mt-[3px] text-[8.5px] font-semibold uppercase tracking-[0.14em] text-accentdeep">Your rank</span>
              </div>
            </div>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-accentweak2 px-[13px] py-[6px] text-[12px] font-medium text-muted2">Page 1 · position 7</span>
              <span className="flex items-center gap-[6px] text-[12.5px] font-medium text-accent">
                optimising
                <span className="h-[6px] w-[6px] animate-nxpulse rounded-full bg-accent" />
              </span>
            </div>
            <div key={active.key + "-list"} className="flex animate-nxfade flex-col gap-[7px]">
              {active.ranks.map((r) => (
                <div
                  key={r.n}
                  className="flex items-center gap-2 rounded-[13px] border px-2 py-[11px] sm:gap-[11px] sm:px-[13px]"
                  style={{
                    background: r.you ? "var(--rowbg-you)" : "var(--rowbg)",
                    borderColor: r.you ? "var(--accent)" : "transparent",
                  }}
                >
                  <span className="w-[14px] flex-none text-center text-[13px] font-semibold text-muted4">{r.n}</span>
                  <span
                    className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] text-[13px] font-bold sm:h-[34px] sm:w-[34px] sm:text-[14px]"
                    style={{
                      background: r.you ? "var(--accent)" : "var(--av)",
                      color: r.you ? "#fff" : "var(--muted4)",
                    }}
                  >
                    {r.letter}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex min-w-0 items-center gap-[7px]">
                      <span className="truncate text-[13px] font-bold text-ink sm:text-[13.5px]">{r.name}</span>
                      {r.you && (
                        <span className="flex-none rounded-[5px] bg-accent px-[6px] py-[2px] text-[9px] font-bold tracking-[0.06em] text-white">YOU</span>
                      )}
                    </div>
                    <div className="truncate text-[11.5px] text-muted3">{r.domain}</div>
                  </div>
                  <span className="flex flex-none items-center gap-1 whitespace-nowrap text-[12px] sm:text-[13px]">
                    <span className="text-star">★</span>
                    <span className="font-bold text-ink">{r.rating}</span>
                    <span className="hidden text-muted3 xs:inline">({r.reviews})</span>
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-[34px]">
          <h3 className="serif mb-[10px] text-h5">{active.head}</h3>
          <p className="mb-[22px] max-w-[680px] text-[16px] leading-relaxed text-muted">
            {active.sub} Every site we build is designed to rank on Google and turn
            local searches into booked customers.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              "A site designed around how your customers actually book",
              "Ranked on Google & the map pack for local searches",
              "An admin panel to change anything yourself, anytime",
            ].map((t) => (
              <div key={t} className="flex items-start gap-[11px] text-[14px]">
                <span className="mt-[6px] h-[7px] w-[7px] flex-none rounded-full bg-accent" />
                {t}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";
import type { FaqCategory, SiteFaq } from "@/lib/site";

type Props = {
  categories: FaqCategory[];
  faqs: SiteFaq[];
};

export default function FaqExplorer({ categories, faqs }: Props) {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [expandAll, setExpandAll] = useState(false);

  const q = query.trim().toLowerCase();

  // Tag every FAQ with its original index so open-state keys stay stable
  // regardless of filtering.
  const visible = useMemo(
    () =>
      faqs
        .map((f, i) => ({ ...f, i }))
        .filter((f) => {
          const catOk = cat === "all" || f.cat === cat;
          const qOk =
            !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
          return catOk && qOk;
        }),
    [faqs, cat, q],
  );

  const chips = useMemo(
    () =>
      [{ key: "all", label: "All" }, ...categories].map((c) => ({
        key: c.key,
        label: c.label,
        count:
          c.key === "all"
            ? faqs.length
            : faqs.filter((f) => f.cat === c.key).length,
      })),
    [categories, faqs],
  );

  const groups = useMemo(() => {
    const shown = categories
      .map((c) => c.key)
      .filter(
        (k) => (cat === "all" || cat === k) && visible.some((f) => f.cat === k),
      );
    return shown.map((k, gi) => {
      const meta = categories.find((c) => c.key === k)!;
      const items = visible.filter((f) => f.cat === k);
      return {
        num: String(gi + 1).padStart(2, "0"),
        title: meta.title,
        countLabel: items.length === 1 ? "1 question" : `${items.length} questions`,
        items,
      };
    });
  }, [categories, visible, cat]);

  const empty = visible.length === 0;
  const countLabel =
    q || cat !== "all"
      ? `Showing ${visible.length} of ${faqs.length} questions`
      : `${faqs.length} common questions, answered`;

  const isOpen = (i: number) => expandAll || !!open[i];
  const toggle = (i: number) => {
    setOpen((s) => ({ ...s, [i]: !(expandAll || s[i]) }));
    setExpandAll(false);
  };
  const toggleAll = () => {
    setExpandAll((v) => !v);
    setOpen({});
  };

  return (
    <>
      {/* HERO + SEARCH */}
      <section className="border-b bg-panel hair">
        <FadeIn className="mx-auto max-w-[820px] px-gutter pb-sectionsm pt-section text-center">
          <div className="eyebrow mb-4">Help centre</div>
          <h1 className="serif mb-4 text-h1 tracking-[-0.5px]">
            Questions? We&apos;ve got answers.
          </h1>
          <p className="mx-auto mb-[30px] max-w-[520px] text-lead text-muted">
            Everything you might want to know about working with us — the process,
            pricing, ownership and the day-to-day. Search or browse by topic below.
          </p>
          <div className="relative mx-auto max-w-[520px]">
            <span className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2">
              <span className="absolute left-0 top-0 h-3 w-3 rounded-full border-2" style={{ borderColor: "var(--muted3)" }} />
              <span className="absolute bottom-0 right-0 h-[2px] w-[6px] origin-right rotate-45" style={{ background: "var(--muted3)" }} />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search questions — try "pricing" or "own"'
              aria-label="Search questions"
              className="w-full rounded-full border bg-card py-4 pl-[46px] pr-[22px] text-[16px] text-ink shadow-[0_8px_24px_rgba(25,23,18,0.06)] outline-none focus:border-accent hair"
            />
          </div>
          <div className="mt-[14px] text-[13px] text-muted3" aria-live="polite">
            {countLabel}
          </div>
        </FadeIn>
      </section>

      {/* CATEGORY CHIPS (sticky below the header) */}
      <section
        className="sticky top-[72px] z-[50] border-b backdrop-blur-[10px] hair"
        style={{ background: "rgba(var(--bg-rgb),0.92)" }}
      >
        <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-4 px-gutter py-4">
          <div className="flex flex-wrap gap-[9px]">
            {chips.map((c) => {
              const on = cat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  aria-pressed={on}
                  className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border px-[15px] py-[9px] text-[13px] font-semibold transition-colors"
                  style={{
                    borderColor: on ? "var(--ink)" : "rgba(var(--ink-rgb),0.2)",
                    background: on ? "var(--ink)" : "transparent",
                    color: on ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {c.label}
                  <span
                    className="rounded-full px-[6px] py-[2px] font-mono text-[10.5px] font-semibold"
                    style={{
                      background: on ? "rgba(255,255,255,0.16)" : "rgba(var(--ink-rgb),0.08)",
                      color: on ? "var(--bg)" : "var(--muted3)",
                    }}
                  >
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            onClick={toggleAll}
            className="min-h-[38px] cursor-pointer whitespace-nowrap border-none bg-transparent text-[13.5px] font-medium text-accent"
          >
            {expandAll ? "Collapse all" : "Expand all"}
          </button>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="mx-auto max-w-[1040px] px-gutter pb-5 pt-5">
        {groups.map((g) => (
          <FadeIn key={g.title} className="scroll-mt-[150px] pb-2 pt-[34px]">
            <div className="mb-[18px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[12px] font-semibold text-accent">{g.num}</span>
              <h2 className="serif m-0 text-h5 tracking-[-0.3px]">{g.title}</h2>
              <span className="text-[12.5px] text-muted3">{g.countLabel}</span>
            </div>
            <div className="flex flex-col gap-[11px]">
              {g.items.map((f) => {
                const openItem = isOpen(f.i);
                return (
                  <div
                    key={f.i}
                    className="overflow-hidden rounded-[14px] border bg-card transition-colors"
                    style={{ borderColor: openItem ? "var(--accent)" : "rgba(var(--ink-rgb),0.12)" }}
                  >
                    <button
                      onClick={() => toggle(f.i)}
                      aria-expanded={openItem}
                      className="flex w-full cursor-pointer items-center gap-4 bg-transparent px-5 py-5 text-left sm:px-6"
                    >
                      <span className="w-[26px] flex-none font-mono text-[12px] text-muted4">
                        {String(f.i + 1).padStart(2, "0")}
                      </span>
                      <span className="serif flex-1 text-[18px] leading-[1.25] text-ink sm:text-[20px]">
                        {f.q}
                      </span>
                      <span
                        className="serif flex-none text-[28px] leading-none text-accent transition-transform duration-200"
                        style={{ transform: openItem ? "rotate(45deg)" : "none" }}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {openItem && (
                      <div className="animate-nxfade pb-[22px] pl-[62px] pr-5 text-[15.5px] leading-[1.65] text-muted sm:pl-[66px] sm:pr-6">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        ))}

        {empty && (
          <div className="px-5 pb-10 pt-[70px] text-center">
            <div className="serif mb-[10px] text-h5">
              No matches for &ldquo;{query}&rdquo;
            </div>
            <p className="mb-[22px] text-[15.5px] text-muted2">
              Try a different word — or just ask us directly, we&apos;re happy to help.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setCat("all");
              }}
              className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-ink bg-transparent px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              Clear search
            </button>
          </div>
        )}
      </section>
    </>
  );
}

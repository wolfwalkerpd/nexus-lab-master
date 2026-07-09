"use client";

import { useState } from "react";
import type { Faq } from "@/lib/site";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((q, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="surface overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-5 py-5 text-left sm:px-[26px] sm:py-[22px]"
            >
              <span className="serif min-w-0 text-[18px] text-ink sm:text-[21px]">{q.q}</span>
              <span className="serif flex-none text-[26px] leading-none text-accent">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${i}`}
                className="animate-nxfade px-5 pb-6 text-[15px] leading-relaxed text-muted sm:px-[26px] sm:text-[15.5px]"
              >
                {q.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

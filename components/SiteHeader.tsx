"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-[900] border-b backdrop-blur-[12px]"
      style={{
        background: "rgba(var(--bg-rgb),0.9)",
        borderColor: "rgba(var(--ink-rgb),0.1)",
      }}
    >
      <div className="wrap flex items-center justify-between gap-3 py-[14px] sm:gap-6">
        <Link
          href="/"
          className="flex min-w-0 flex-none items-center gap-[10px] no-underline"
        >
          <span className="relative inline-block h-[27px] w-[27px] flex-none rounded-full bg-ink">
            <span className="absolute inset-[7px] rounded-full border-[1.5px] border-bg" />
          </span>
          <span className="serif truncate text-[19px] tracking-[0.2px] text-ink sm:text-[22px]">
            Nexus LabSystems
          </span>
        </Link>

        {/* Full nav only from `lg`: at `md` the logo + 6 links + CTA overflow 768px. */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((it) => {
            const active = isActive(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className="whitespace-nowrap border-b-2 pb-[3px] text-[14.5px] no-underline transition-colors"
                style={{
                  color: active ? "var(--ink)" : "var(--muted2)",
                  fontWeight: active ? 600 : 400,
                  borderColor: active ? "var(--accent)" : "transparent",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <Link href="/contact" className="btn-primary btn-sm hidden sm:inline-flex">
            <span className="hidden xl:inline">Book your free teardown</span>
            <span className="xl:hidden">Free teardown</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 flex-none items-center justify-center rounded-full lg:hidden"
          >
            <span className="relative block h-[14px] w-[22px]">
              <span
                className="absolute left-0 block h-[2px] w-full rounded-full bg-ink transition-transform duration-200"
                style={{
                  top: open ? "6px" : "0",
                  transform: open ? "rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 top-[6px] block h-[2px] w-full rounded-full bg-ink transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[2px] w-full rounded-full bg-ink transition-transform duration-200"
                style={{
                  top: open ? "6px" : "12px",
                  transform: open ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="animate-nxdrop max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t bg-bg lg:hidden hair"
        >
          <div className="wrap flex flex-col py-3">
            {NAV.map((it) => {
              const active = isActive(it.href);
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className="flex min-h-[48px] items-center border-b text-[16px] no-underline hair"
                  style={{
                    color: active ? "var(--ink)" : "var(--muted2)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {it.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-primary btn-lg mt-4 w-full sm:hidden"
            >
              Book your free teardown →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

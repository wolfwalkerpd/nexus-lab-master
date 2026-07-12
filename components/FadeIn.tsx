"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** useLayoutEffect logs a warning when it runs during SSR. */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * "static" — visible, no transition ever. This is what the server renders, and
 * what reduced-motion / no-JS / already-on-screen elements keep.
 * "hidden" -> "shown" — the animated path, entered only before first paint.
 */
type Phase = "static" | "hidden" | "shown";

/** Distance the element travels up as it fades in. */
const RISE_PX = 24;
/** Reveals fire this far before the element reaches the bottom edge. */
const EARLY_PX = 50;

type FadeInProps = {
  children: React.ReactNode;
  /** transition-delay in ms — cascade siblings with 0, 80, 160… */
  delay?: number;
  /** Layout classes for the wrapper, since it becomes the flex/grid item. */
  className?: string;
};

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Server and first client render must agree, so both start visible. Anything
  // below the fold is hidden in the layout effect below — i.e. after hydration
  // but before the browser paints, so the swap is never seen.
  const [phase, setPhase] = useState<Phase>("static");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    // Already on screen at mount (the hero, the first section) — show instantly.
    if (el.getBoundingClientRect().top < viewportH - EARLY_PX) return;

    setPhase("hidden");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (phase !== "hidden" || !el) return;

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    // A block far taller than the viewport can never reach ratio 0.15, so it
    // would never reveal. Fall back to "any part visible" for those.
    const threshold = el.offsetHeight > viewportH * 2 ? 0 : 0.15;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase("shown");
        observer.disconnect(); // reveal once — never re-hide on scroll up
      },
      { threshold, rootMargin: `0px 0px -${EARLY_PX}px 0px` },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [phase]);

  return (
    <div
      ref={ref}
      className={className}
      // Only opacity and transform animate, so this never triggers layout or CLS.
      style={
        phase === "static"
          ? undefined
          : {
              opacity: phase === "shown" ? 1 : 0,
              transform: phase === "shown" ? "none" : `translateY(${RISE_PX}px)`,
              transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
              willChange: phase === "hidden" ? "opacity, transform" : undefined,
            }
      }
    >
      {children}
    </div>
  );
}

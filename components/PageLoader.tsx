"use client";

import { useEffect, useState } from "react";

/** Full-screen splash that fades out shortly after the page mounts. */
export default function PageLoader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-[22px] bg-bg"
      style={{ animation: "nxload 1.5s ease .35s forwards" }}
    >
      <div className="relative h-[54px] w-[54px]">
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: "rgba(var(--ink-rgb),0.12)" }}
        />
        <div
          className="absolute inset-0 animate-nxspin rounded-full border-2 border-transparent"
          style={{ borderTopColor: "var(--accent)" }}
        />
        <div className="absolute inset-[15px] rounded-full bg-ink" />
      </div>
      <div className="serif text-[23px] tracking-[0.3px] text-ink">
        Nexus LabSystems
      </div>
      <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted4">
        Design · Build · Grow
      </div>
    </div>
  );
}

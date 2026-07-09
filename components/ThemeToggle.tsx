"use client";

import { useEffect, useState } from "react";

const THEMES = ["warm", "blue"] as const;
type Theme = (typeof THEMES)[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("warm");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("nx-theme")) as Theme | null;
    if (stored && THEMES.includes(stored)) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    }
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try {
      window.localStorage.setItem("nx-theme", t);
    } catch {}
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border p-1"
      style={{ borderColor: "rgba(var(--ink-rgb),0.16)" }}
    >
      {THEMES.map((t) => (
        <button
          key={t}
          onClick={() => choose(t)}
          aria-pressed={theme === t}
          className="rounded-full px-3 py-1 text-[12px] font-semibold capitalize transition-colors"
          style={
            theme === t
              ? { background: "var(--ink)", color: "var(--bg)" }
              : { background: "transparent", color: "var(--muted2)" }
          }
        >
          {t}
        </button>
      ))}
    </div>
  );
}

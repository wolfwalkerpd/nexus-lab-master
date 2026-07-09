import type { Config } from "tailwindcss";

/**
 * Scales linearly from `min`px at a 320px viewport to `max`px at 1180px,
 * clamped flat outside that range.
 */
function fluid(min: number, max: number): string {
  const slope = (max - min) / (1180 - 320);
  const intercept = (min - slope * 320) / 16;
  return `clamp(${min / 16}rem, ${intercept.toFixed(4)}rem + ${(
    slope * 100
  ).toFixed(4)}vw, ${max / 16}rem)`;
}

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    // Listed in full (not `extend`) so `xs` sorts before `sm` in the output.
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        card: "var(--card)",
        ink: "var(--ink)",
        darkpanel: "var(--dark-panel)",
        muted: "var(--muted)",
        muted2: "var(--muted2)",
        muted3: "var(--muted3)",
        muted4: "var(--muted4)",
        accent: "var(--accent)",
        accenth: "var(--accent-hover)",
        accentweak: "var(--accent-weak)",
        accentweak2: "var(--accent-weak2)",
        accentdeep: "var(--accent-deep)",
        ondark: "var(--on-dark-muted)",
        rowbg: "var(--rowbg)",
        rowbgyou: "var(--rowbg-you)",
        av: "var(--av)",
        star: "#F5A623",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        mega: [fluid(84, 150), { lineHeight: "0.9" }],
        display: [fluid(34, 62), { lineHeight: "1.02" }],
        h1: [fluid(32, 58), { lineHeight: "1.04" }],
        h2: [fluid(28, 42), { lineHeight: "1.08" }],
        h3: [fluid(26, 38), { lineHeight: "1.1" }],
        h4: [fluid(24, 34), { lineHeight: "1.12" }],
        h5: [fluid(22, 30), { lineHeight: "1.15" }],
        h6: [fluid(20, 27), { lineHeight: "1.2" }],
        stat: [fluid(30, 42), { lineHeight: "1" }],
        quote: [fluid(22, 32), { lineHeight: "1.35" }],
        lead: [fluid(16, 18), { lineHeight: "1.65" }],
      },
      spacing: {
        gutter: fluid(20, 32),
        section: fluid(48, 76),
        sectionsm: fluid(36, 56),
        card: fluid(24, 44),
        cardlg: fluid(28, 56),
      },
      maxWidth: {
        wrap: "1180px",
      },
      keyframes: {
        nxfade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "none" },
        },
        nxpulse: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        nxspin: {
          to: { transform: "rotate(360deg)" },
        },
        nxdrop: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        nxfade: "nxfade .35s ease",
        nxpulse: "nxpulse 1.4s ease-in-out infinite",
        nxspin: "nxspin .8s linear infinite",
        nxdrop: "nxdrop .18s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

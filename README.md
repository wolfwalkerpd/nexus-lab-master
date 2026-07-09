# Nexus LabSystems — Next.js website

Full marketing site for Nexus LabSystems, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**. Converted from the original design; faithful to the "1a" warm/editorial palette with a blue & white theme toggle.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
npm start
```

## What's inside

- `app/` — App Router pages (one folder per route):
  - `/` home · `/services` (+ `website-design`, `seo`, `care-plans`) · `/industries` (+ `[slug]`: dental, professional, trades) · `/work` (+ `[slug]` case studies) · `/about` · `/pricing` · `/blog` (+ `why-customers-leave` article) · `/contact` · `/privacy` · custom `not-found` (404)
- `components/` — `SiteHeader`, `SiteFooter`, `PageLoader`, `ThemeToggle`, `CtaBand`, `FaqAccordion`, `IndustryPicker` (the interactive "see yourself here" rank tracker), `ContactForm` (the multi-step form).
- `lib/` — all site content as typed data (`site.ts`, `industries.ts`, `cases.ts`). Edit copy here in one place.

## Theming

Colors are CSS variables defined in `app/globals.css` under `[data-theme="warm"]` (default) and `[data-theme="blue"]`. Tailwind maps semantic classes (`bg-bg`, `text-ink`, `text-accent`, …) onto those variables, so the whole site re-themes from the header toggle. Fonts are loaded with `next/font` (Instrument Serif, Work Sans, IBM Plex Mono).

## Notes / placeholders

- Prices show `£[PLACEHOLDER]`; case-study metrics show `[+X%]` etc. — drop in your real numbers in `lib/`.
- The contact form's submit is a **[backend placeholder]** in `components/ContactForm.tsx` — wire it to your CRM/email/API route there.
- Founder photos, project images and social links are placeholders.
- The industry-preview and work images are CSS gradients standing in for real screenshots.

# Sepide Norouzi — Portfolio

A light-mode, animation-heavy developer portfolio built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Make it yours

Almost everything lives in **`src/lib/data.ts`** — name, tagline, stats, tech stack, services,
and every project (title, summary, tech, highlights). Edit that one file and the whole site
updates.

A few things to swap before you deploy:

- `siteConfig.email`, `siteConfig.linkedin`, `siteConfig.resumeUrl` in `src/lib/data.ts` — currently placeholders (`siteConfig.github` is already wired to your real profile).
- The contact form (`src/components/sections/contact.tsx`) opens the visitor's email client via
  a `mailto:` link, so it works with zero backend. Swap the `handleSubmit` function for a call to
  your own API route, Formspree, or EmailJS if you'd rather receive submissions directly.
- `public/favicon.svg` — a quick gradient monogram; replace with your own mark if you like.

## Structure

```
src/
  app/
    layout.tsx          Root layout: fonts, navbar, footer, ambient effects
    page.tsx             Home page (hero → marquee → services → projects → CTA → contact)
    template.tsx          Per-route fade-in transition
    not-found.tsx          Themed 404
    projects/
      page.tsx             Full project archive with category + search filtering
      [slug]/page.tsx        Individual project detail page (statically generated)
  components/
    layout/               Navbar, footer, scroll progress bar, cursor glow
    sections/               Hero, tech marquee, services, projects grid, CTA, contact
    ui/                     Reusable primitives: buttons, glow cards, tags, stat chips, reveal
    project-card.tsx         Shared project card (home grid + archive + featured variant)
    projects-filter.tsx        Client-side category/search filter for the archive page
  lib/
    data.ts                  ← All site content lives here
    types.ts                  Shared TypeScript types
    utils.ts                   cn() helper + accent-color class lookup
```

## Notes on the design

- **Light mode only, by design** — violet/pink/cyan accents on a soft off-white canvas, with
  Plus Jakarta Sans for text and JetBrains Mono for anything "code-flavored" (tags, section
  kickers, the hero code window).
- **One signature moment**: the animated code-editor illustration in the hero. Everything else
  (cards, hovers, the marquee) stays quieter on purpose so that moment lands.
- Project accent colors are tied to category (`Full-Stack` / `Frontend` / `Learning`) so the
  color-coding carries real information — see `accentStyles` in `src/lib/utils.ts`.
- Animations respect `prefers-reduced-motion`.

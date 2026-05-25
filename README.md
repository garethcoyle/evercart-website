# Evercart Marketing Site

Marketing website for Evercart. Lives at `www.evercart.io`.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS 3 with brand tokens in `tailwind.config.ts`
- Framer Motion for scroll-triggered reveals
- Manrope (loaded via `next/font/google`)
- Hosted on Vercel

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand tokens

Locked in the brief. Edit only with intent.

- `ink` `#000000`
- `paper` `#FFFFFF`
- `offwhite` `#F2F2F0` — warm, paper-like
- `emerald` `#3DBF79` — used sparingly
- `line` `#E5E5E5`
- `surface` `#FAFAFA`
- `meta` / `meta-500` / `meta-700` — body subtitles, meta, deep meta

Motion curve: `cubic-bezier(0.32, 0.72, 0, 1)` — exposed as `ease-apple` in Tailwind.

## Folder layout

```
app/                  routes (App Router)
  layout.tsx          root layout — Header + Footer wrap every page
  globals.css         Tailwind layers + reset + reduced-motion handling
  page.tsx            homepage
  pricing/            /pricing
  features/           /features
  about/              /about
  contact/            /contact
  legal/{privacy,terms,refund,cookie}/  legal pages
  not-found.tsx       branded 404
  sitemap.ts          generated from a route manifest
  robots.ts
components/
  EvercartLogo.tsx    full lockup + mark-only, both using currentColor
  Header.tsx          sticky, scroll-state border + blur, mobile sheet
  Footer.tsx          multi-column with brand block
  ui/Container.tsx    consistent max-width + padding
  ui/Button.tsx       primary / secondary / ghost / emerald variants
  motion/Reveal.tsx   scroll-triggered fade-up, prefers-reduced-motion safe
lib/
  utils.ts            cn() helper (clsx + tailwind-merge)
  motion.ts           Apple curve + duration constants
public/
  evercart-logo.svg   brand assets — see brand/README
  brand/              raster variants for emails, social, OS
```

## Deploy

Push to GitHub, connect the repo as a new Vercel project on the Evercart team.
Once approved on a preview URL, swap `evercart.io` and `www.evercart.io` over
from the existing coming-soon project.

## Conventions

- British English throughout (colour, optimise, behaviour).
- No emojis in the UI. Lucide icons or inline SVG only, stroke width 2.
- No `target="_blank"` on links to `app.evercart.io` — those flows feel like
  the same site.
- Every animation must respect `prefers-reduced-motion`.

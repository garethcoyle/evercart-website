/**
 * Homepage imagery sources
 * ────────────────────────
 * Single source of truth for external images on the homepage. If any URL
 * 404s, swap it here — every reference resolves through this file.
 *
 * Captions intentionally generic — we never claim a specific image shows a
 * specific category unless we've curated the actual photograph. Production
 * launch should replace these with sourced or original photography.
 */

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const HOMEPAGE_IMAGERY = {
  // Section 4 — lookbook grid. Pure aesthetic support for the
  // "Online stores that take design seriously" headline. No category captions —
  // the photographs speak for themselves.
  lookbook: [
    { src: U("1556228578-8c89e6adf883"), alt: "Product photography" },
    { src: U("1571781926291-c477ebfd024b"), alt: "Product photography" },
    { src: U("1495474472287-4d71bcdd2085"), alt: "Product photography" },
    { src: U("1554224155-6726b3ff858f"), alt: "Product photography" },
  ],
} as const;

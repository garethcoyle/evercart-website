/**
 * Homepage imagery sources
 * ────────────────────────
 * Single source of truth for every external image on the homepage. If any
 * URL 404s, swap it here — every reference resolves through this file.
 *
 * Unsplash URL pattern (paths-only photo ID, no query params):
 *   https://images.unsplash.com/photo-{ID}
 *
 * Next.js Image handles `sizes` and serves appropriate variants automatically.
 *
 * Production note: Replace these with original photography before launch.
 * The brief (section 8) calls for real product photography curated by hand —
 * Unsplash is for V1 iteration, not for production.
 */

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const HOMEPAGE_IMAGERY = {
  // Section 3 block 01 — pairs with "A storefront that looks made, not assembled"
  // Want: a beautifully styled retail or product environment that embodies
  // "this shop was designed."
  storefrontScene: {
    src: U("1441986300917-64674bd600d8"),
    alt: "A beautifully composed retail product display.",
  },

  // Section 3 block 02 — pairs with "Sell with whatever your customers carry"
  // Want: a still life that says "premium product."
  objects: {
    src: U("1556228720-195a672e8a03"),
    alt: "A still life of carefully arranged objects.",
  },

  // Section 3 block 04 — pairs with "Support that lives where the work happens"
  // Want: a workspace scene, scale-neutral.
  workspace: {
    src: U("1556909114-f6e7ad7d3136"),
    alt: "A considered workspace at a desk.",
  },

  // Section 4 — lookbook grid (4 photos with editorial captions)
  // Categories chosen to be scale-neutral: works for an indie maker AND for
  // an established DTC brand selling the same category.
  lookbook: [
    {
      src: U("1556228578-8c89e6adf883"),
      alt: "Skincare product photography",
      caption: "Skincare, Lisbon.",
    },
    {
      src: U("1599642944-5d29def8ddcf"),
      alt: "Home fragrance product photography",
      caption: "Home fragrance, Stockholm.",
    },
    {
      src: U("1495474472287-4d71bcdd2085"),
      alt: "Coffee product photography",
      caption: "Coffee, Cape Town.",
    },
    {
      src: U("1554224155-6726b3ff858f"),
      alt: "Leather goods product photography",
      caption: "Leather goods, Brooklyn.",
    },
  ],
} as const;

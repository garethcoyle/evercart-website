/**
 * Homepage imagery sources
 * ────────────────────────
 * All Unsplash URLs are in this one file. If any of these 404 or don't
 * fit aesthetically, replace the URL here — every reference across the
 * site resolves through these constants.
 *
 * Sourcing rules from the brief (section 8): real product photography,
 * maker / workshop / craft imagery. Avoid: anything with "team", "office",
 * "meeting", "laptop with hands".
 *
 * Unsplash URL pattern:
 *   https://images.unsplash.com/photo-{ID}?w={WIDTH}&auto=format&fit=crop&q=80
 *
 * The Next.js Image component handles `sizes` and serves appropriate variants.
 * Don't add `&w=` query params here — let Next/Image pick.
 */

const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const HOMEPAGE_IMAGERY = {
  // Section 3 block 02 — object photography pairing with "Sell with whatever your customers carry"
  objects: {
    src: U("1565193566173-7a0ee3dbe261"),
    alt: "Hand-thrown ceramic vessels in a sunlit studio.",
  },

  // Section 3 block 04 — workshop scene pairing with "Support that lives where the work happens"
  workshop: {
    src: U("1556228720-195a672e8a03"),
    alt: "A maker at work in a small studio, hands on tools.",
  },

  // Section 4 — lookbook grid (4 photos with editorial captions)
  lookbook: [
    {
      src: U("1565193566173-7a0ee3dbe261"),
      alt: "Ceramics studio in Lisbon",
      caption: "Ceramics studio in Lisbon.",
    },
    {
      src: U("1602523498073-fe5dabd91c2b"),
      alt: "Candle workshop, Stockholm",
      caption: "Candle workshop, Stockholm.",
    },
    {
      src: U("1495474472287-4d71bcdd2085"),
      alt: "Coffee roastery, Cape Town",
      caption: "Coffee roastery, Cape Town.",
    },
    {
      src: U("1554224155-6726b3ff858f"),
      alt: "Leather goods workshop in Brooklyn",
      caption: "Leather goods, Brooklyn.",
    },
  ],
} as const;

import { ShoppingBag, Search } from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

/**
 * StorefrontHero
 *
 * A typographic storefront hero mockup — designed, not screenshot.
 * Used in WhatYouGet block 01 to literally show what a "storefront that looks
 * made, not assembled" looks like. No image dependencies; the design reads
 * as a premium DTC brand's homepage.
 */
export function StorefrontHero() {
  return (
    <BrowserFrame url="haloskin.evercart.io">
      {/* Storefront nav */}
      <div className="px-6 md:px-8 py-4 border-b border-line flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-[13px]">
          HALO SKIN CO.
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-[11px] text-meta font-medium">
          <span>Shop</span>
          <span>Ritual</span>
          <span>About</span>
        </nav>
        <div className="flex items-center gap-3 text-meta">
          <Search size={13} strokeWidth={2} />
          <ShoppingBag size={13} strokeWidth={2} />
        </div>
      </div>

      {/* Hero band — editorial, text-led */}
      <div className="px-6 md:px-10 py-10 md:py-14 bg-paper">
        <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-emerald mb-3">
          Botanical skincare · Cape Town
        </p>
        <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-[-0.025em] leading-[1.04] max-w-[85%] text-ink">
          Skincare, distilled<br />
          to the essential.
        </h3>
        <p className="mt-4 text-[12px] md:text-[13px] text-meta max-w-[60%] leading-[1.55]">
          Six clean products. No fillers. No fluff. Made in small batches in
          Cape Town.
        </p>
        <div className="mt-6 inline-flex items-center justify-center bg-ink text-paper px-4 h-8 rounded-md text-[11px] font-semibold">
          Shop the line →
        </div>
      </div>

      {/* Category strip — gives the storefront a sense of catalog depth */}
      <div className="px-6 md:px-10 py-3.5 border-t border-line bg-surface flex items-center gap-2.5 text-[9px] uppercase tracking-label font-bold text-meta">
        <span>Cleansers</span>
        <span className="text-line">·</span>
        <span>Serums</span>
        <span className="text-line">·</span>
        <span>Moisturizers</span>
        <span className="text-line">·</span>
        <span>Masks</span>
      </div>
    </BrowserFrame>
  );
}

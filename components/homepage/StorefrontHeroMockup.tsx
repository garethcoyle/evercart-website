import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";

/**
 * StorefrontHeroMockup
 *
 * A constructed mockup of the HERO section of a real Evercart-built storefront
 * (Halo Skin Co. — our consistent demo merchant). Shows what a customer sees
 * when they land on a store. Used in WhatYouGet block 01.
 *
 * Built as real markup (not a screenshot) so it stays sharp at any zoom and
 * matches the brand exactly.
 */
export function StorefrontHeroMockup() {
  return (
    <div className="bg-paper flex flex-col h-full">
      {/* Storefront header */}
      <header className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-line shrink-0">
        <div className="flex items-center gap-2">
          <div
            aria-hidden
            className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3DBF79] to-[#2A8C57] flex items-center justify-center text-paper font-extrabold text-[11px]"
          >
            H
          </div>
          <span className="font-extrabold tracking-tight text-[12px]">
            Halo Skin Co.
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-[11px] text-meta font-medium">
          <span>Products</span>
          <span>Routine</span>
          <span>About</span>
        </nav>
        <div className="flex items-center gap-3 text-meta">
          <Search size={12} strokeWidth={2} aria-hidden />
          <ShoppingBag size={12} strokeWidth={2} aria-hidden />
        </div>
      </header>

      {/* Hero band — editorial split: product photo + text */}
      <div className="flex-1 grid grid-cols-5 gap-0 bg-[#F5EFE7]">
        {/* Product photo */}
        <div className="col-span-2 relative bg-[#E8DFD2]">
          <Image
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80"
            alt=""
            fill
            sizes="(max-width: 1024px) 40vw, 25vw"
            className="object-cover"
          />
        </div>
        {/* Text content */}
        <div className="col-span-3 flex flex-col justify-center px-6 sm:px-8 py-6">
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-bold text-[#7A6A52] mb-2 sm:mb-3">
            Botanical skincare
          </p>
          <h3 className="text-[20px] sm:text-[26px] md:text-[30px] font-extrabold tracking-[-0.03em] leading-[0.98] text-[#2A2620]">
            Skincare,<br />distilled to<br />the essential.
          </h3>
          <p className="hidden sm:block mt-3 text-[10px] leading-relaxed text-[#5A5045] max-w-[180px]">
            Six products. One uncomplicated routine.
          </p>
          <div className="mt-4 sm:mt-5">
            <span className="inline-block bg-[#2A2620] text-paper text-[10px] sm:text-[11px] font-semibold px-3 py-2 rounded-md">
              Browse the line
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

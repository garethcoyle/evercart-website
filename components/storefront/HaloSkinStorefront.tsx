"use client";

import { motion, useReducedMotion } from "framer-motion";
import { APPLE_CURVE } from "@/lib/motion";
import { ShoppingBag, Search, Menu } from "lucide-react";

/**
 * HaloSkinStorefront
 *
 * A constructed mockup of the Halo Skin Co. storefront — not a screenshot.
 * Used in the homepage hero as the layered-reveal motion moment. Built as
 * real markup so each element (header → headline → product grid) can fade
 * up with its own delay.
 *
 * Product data mirrors what the dashboard screenshots show, so the merchant
 * identity threads consistently across the site.
 */

const PRODUCTS = [
  { name: "Niacinamide 10% Serum", price: "$28", swatch: "from-[#D7CEFB] to-[#B3A6F2]" },
  { name: "Vitamin C Brightening Drops", price: "$36", swatch: "from-[#FFD9C2] to-[#F5B193]" },
  { name: "Green Tea Calming Toner", price: "$22", swatch: "from-[#C6F0CE] to-[#9CDCAB]" },
  { name: "Rosehip Glow Oil", price: "$32", swatch: "from-[#FBD0D9] to-[#F2A8B7]" },
];

type Props = {
  animate?: boolean; // if false, render statically (e.g. for non-hero uses)
};

export function HaloSkinStorefront({ animate = true }: Props) {
  const reduced = useReducedMotion();
  const enabled = animate && !reduced;

  const fadeUp = (delay: number) =>
    enabled
      ? {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: APPLE_CURVE },
        }
      : {};

  return (
    <div className="bg-paper">
      {/* Storefront header */}
      <motion.header
        {...fadeUp(0.05)}
        className="flex items-center justify-between px-6 py-4 border-b border-line"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3DBF79] to-[#2A8C57] flex items-center justify-center text-paper font-extrabold text-[12px]"
            aria-hidden
          >
            H
          </div>
          <span className="font-extrabold tracking-tight text-[14px]">
            Halo Skin Co.
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-5 text-[12px] text-meta">
          <span>Shop</span>
          <span>Routine</span>
          <span>About</span>
        </nav>
        <div className="flex items-center gap-3 text-meta">
          <Search size={14} strokeWidth={2} />
          <ShoppingBag size={14} strokeWidth={2} />
          <Menu size={14} strokeWidth={2} className="sm:hidden" />
        </div>
      </motion.header>

      {/* Hero band */}
      <motion.div
        {...fadeUp(0.18)}
        className="px-6 pt-8 pb-6 bg-offwhite"
      >
        <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-emerald mb-2">
          Botanical skincare · Cape Town
        </p>
        <h2 className="text-[28px] font-extrabold tracking-[-0.025em] leading-[1.05] max-w-[80%]">
          Skincare,<br />distilled to the essential.
        </h2>
      </motion.div>

      {/* Product grid */}
      <motion.div
        {...fadeUp(0.32)}
        className="grid grid-cols-2 gap-3 p-6 pt-5"
      >
        {PRODUCTS.map((p) => (
          <div key={p.name} className="flex flex-col">
            <div
              className={`aspect-[4/5] rounded-md bg-gradient-to-br ${p.swatch}`}
              aria-hidden
            />
            <p className="mt-2 text-[11px] font-semibold leading-tight">
              {p.name}
            </p>
            <p className="text-[11px] text-meta mt-0.5">{p.price}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";

import { Sparkles, ArrowRight, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * EvercartAI section
 *
 * Anchors the "AI in your dashboard" promise. Demonstrates the feature
 * with a constructed mockup of Evercart's AI generating a product
 * description for a Halo Skin Co. product (consistent brand thread
 * with the storefront/checkout/chat mockups).
 *
 * Three concrete feature claims sit alongside; user to confirm
 * which AI features will actually ship.
 */
export function EvercartAI() {
  return (
    <section className="py-24 md:py-36 bg-offwhite">
      <Container size="hero">
        <div className="max-w-[820px]">
          <Reveal>
            <p className="label">AI in your dashboard</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-[40px] md:text-[60px] font-extrabold tracking-[-0.025em] leading-[1.02] text-ink">
              Help that knows<br />
              your brand.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-[17px] md:text-[19px] leading-[1.55] text-meta max-w-[560px]">
              Built into every plan. Evercart&rsquo;s AI learns your tone, polishes
              your photos, and gives you straight answers about what&rsquo;s selling
              — so you spend less time on busywork and more on the product.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">
          {/* Left: three concrete AI features */}
          <Reveal delay={0.18}>
            <div className="space-y-10 md:space-y-12">
              <FeatureItem
                number="01"
                title="Product descriptions, on brand."
                body="Type the name and a few facts. Get copy that sounds like you — every time."
              />
              <FeatureItem
                number="02"
                title="Photo polish in one tap."
                body="Background cleanup, optimal sizing for every breakpoint, alt text written for you."
              />
              <FeatureItem
                number="03"
                title="Plain-English analytics."
                body="Ask &lsquo;what sold best last month&rsquo; and get an answer, not a chart."
              />
            </div>
          </Reveal>

          {/* Right: AI mockup */}
          <Reveal delay={0.22}>
            <AIMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FeatureItem({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold text-emerald tracking-[0.12em] mb-3">
        {number}
      </p>
      <h3 className="text-[20px] md:text-[24px] font-bold text-ink tracking-[-0.015em] leading-[1.2]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.55] text-meta max-w-[420px]">
        {body}
      </p>
    </div>
  );
}

/**
 * AIMockup — constructed UI panel showing Evercart AI generating a product
 * description. Decorative; uses pointer-events-none on action buttons so
 * users can't click into a non-functional state.
 */
function AIMockup() {
  return (
    <div className="bg-paper rounded-[16px] border border-line shadow-[0_30px_60px_-20px_rgba(0,0,0,0.14),0_8px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-line flex items-center gap-2">
        <Sparkles size={14} strokeWidth={2.5} className="text-emerald" />
        <p className="text-[12px] font-bold text-ink">Evercart AI</p>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          <span className="text-[10px] font-medium text-meta-700">
            Generating description
          </span>
        </div>
      </div>

      {/* Prompt — product + tone settings */}
      <div className="px-5 py-4 border-b border-line">
        <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-meta mb-2">
          Product
        </p>
        <p className="text-[14px] font-semibold text-ink">
          Niacinamide 10% Serum
        </p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <span className="text-[9px] uppercase tracking-[0.14em] font-bold text-meta mr-1">
            Tone
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-ink text-paper font-semibold">
            Editorial
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-line text-meta font-medium">
            Calm
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-line text-meta font-medium">
            Confident
          </span>
        </div>
      </div>

      {/* Generated output */}
      <div className="px-5 py-5 bg-surface">
        <p className="text-[9px] uppercase tracking-[0.14em] font-bold text-emerald mb-3">
          Generated
        </p>
        <p className="text-[14px] leading-[1.6] text-ink">
          A lightweight serum that pairs 10% niacinamide with hyaluronic acid.
          Calms texture, fades marks, and never asks for attention. Daily, am or pm.
        </p>
        <div className="mt-5 flex items-center gap-2">
          <button
            type="button"
            aria-label="Use generated description"
            className="text-[12px] font-semibold bg-ink text-paper px-3 py-2 rounded-md pointer-events-none flex items-center gap-1.5"
          >
            Use it
            <ArrowRight size={11} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Refine description"
            className="text-[12px] font-medium text-meta px-3 py-2 pointer-events-none flex items-center gap-1.5"
          >
            <RefreshCw size={11} strokeWidth={2.5} />
            Refine
          </button>
        </div>
      </div>
    </div>
  );
}

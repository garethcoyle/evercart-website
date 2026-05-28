"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { PLANS, type Cadence } from "@/lib/pricing";

export function PricingTeaser() {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <section className="py-24 md:py-32">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label">Pricing</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
                Three plans. No hidden fees.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[17px] leading-[1.55] text-meta max-w-[480px]">
                Every plan includes unlimited products, the builder,
                multi-gateway checkout, a custom domain, and 0% transaction
                fees. Pay 20% less when you choose annual.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 mt-6 md:mt-0 md:text-right">
            <Reveal delay={0.18}>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-meta transition-colors duration-200 ease-apple"
              >
                Compare full plans
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Monthly / Annual toggle — matches the in-app pricing flow */}
        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <div
              role="tablist"
              aria-label="Billing cadence"
              className="inline-flex items-center bg-offwhite border border-line rounded-full p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={cadence === "monthly"}
                onClick={() => setCadence("monthly")}
                className={cn(
                  "px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ease-apple",
                  cadence === "monthly"
                    ? "bg-paper text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-meta hover:text-ink",
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={cadence === "annual"}
                onClick={() => setCadence("annual")}
                className={cn(
                  "px-5 py-2 rounded-full text-[13px] font-semibold inline-flex items-center gap-2 transition-all duration-200 ease-apple",
                  cadence === "annual"
                    ? "bg-paper text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-meta hover:text-ink",
                )}
              >
                Annual
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald"
                  aria-hidden
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => {
            const price =
              cadence === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            return (
              <Reveal key={plan.id} delay={i * 0.06}>
                <div
                  className={cn(
                    "group relative rounded-[16px] p-7 md:p-8 h-full flex flex-col transition-all duration-300 ease-apple",
                    plan.featured
                      ? "bg-ink text-paper shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
                      : "bg-paper border border-line hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)]",
                  )}
                >
                  {plan.featured && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[16px] opacity-40"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(61,191,121,0.35), transparent 35%)",
                        WebkitMaskImage:
                          "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        padding: "1px",
                      }}
                    />
                  )}
                  <div className="flex items-baseline justify-between">
                    <h3
                      className={cn(
                        "text-[15px] font-bold tracking-tight",
                        plan.featured ? "text-paper" : "text-ink",
                      )}
                    >
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="label" style={{ color: "#3DBF79" }}>
                        Most popular
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-[13px] mt-1.5",
                      plan.featured ? "text-paper/65" : "text-meta",
                    )}
                  >
                    {plan.tagline}
                  </p>
                  <div className="mt-8 flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-[44px] font-extrabold tracking-[-0.025em] leading-none transition-all duration-300 ease-apple",
                        plan.featured ? "text-paper" : "text-ink",
                      )}
                    >
                      ${price}
                    </span>
                    <span
                      className={cn(
                        "text-[14px] font-medium",
                        plan.featured ? "text-paper/65" : "text-meta",
                      )}
                    >
                      / month
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-1.5 text-[11px]",
                      plan.featured ? "text-paper/60" : "text-meta-700",
                    )}
                  >
                    {cadence === "annual" ? "Billed yearly" : "Billed monthly"}
                  </p>
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.highlights.map((h) => (
                      <li
                        key={h}
                        className={cn(
                          "flex items-start gap-2.5 text-[14px]",
                          plan.featured ? "text-paper/85" : "text-meta",
                        )}
                      >
                        <Check
                          size={14}
                          strokeWidth={2.5}
                          className="mt-1 flex-shrink-0 text-emerald"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-[12px] text-meta-700">
            14-day free trial on every plan. No credit card required.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { PLANS, type Cadence, type Plan } from "@/lib/pricing";

const SIGNUP_URL = "https://app.evercart.io/auth/signup";

function PlanCard({ plan, cadence }: { plan: Plan; cadence: Cadence }) {
  const price = cadence === "annual" ? plan.annualPrice : plan.monthlyPrice;
  const featured = plan.featured;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 md:p-8 transition-all duration-300 ease-apple",
        featured
          ? "bg-ink text-paper border-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:-mt-4 md:mb-[-1rem]"
          : "bg-paper border-line hover:border-meta-500/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.2)]",
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-emerald px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-paper">
            Most popular
          </span>
        </div>
      )}

      {/* Name */}
      <p
        className={cn(
          "text-[11px] uppercase tracking-[0.14em] font-bold",
          featured ? "text-paper/60" : "text-meta",
        )}
      >
        {plan.name}
      </p>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span
          className={cn(
            "text-[26px] font-bold align-top mt-1",
            featured ? "text-paper" : "text-ink",
          )}
        >
          $
        </span>
        <span
          className={cn(
            "text-[60px] leading-none font-extrabold tracking-[-0.04em]",
            featured ? "text-paper" : "text-ink",
          )}
        >
          {price}
        </span>
        <span
          className={cn(
            "text-[15px] font-medium",
            featured ? "text-paper/60" : "text-meta",
          )}
        >
          /mo
        </span>
      </div>
      <p
        className={cn(
          "mt-1.5 text-[12px]",
          featured ? "text-paper/50" : "text-meta",
        )}
      >
        {cadence === "annual" ? "billed annually" : "billed monthly"}
      </p>

      {/* Tagline */}
      <p
        className={cn(
          "mt-4 text-[14px] leading-[1.5] min-h-[42px]",
          featured ? "text-paper/70" : "text-meta",
        )}
      >
        {plan.tagline}
      </p>

      {/* Divider */}
      <div
        className={cn(
          "my-6 h-px w-full",
          featured ? "bg-paper/15" : "bg-line",
        )}
      />

      {/* Features */}
      {plan.inherits && (
        <p
          className={cn(
            "text-[13px] font-semibold mb-4",
            featured ? "text-paper" : "text-ink",
          )}
        >
          Everything in {plan.inherits}, plus:
        </p>
      )}
      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2.5}
              className="text-emerald shrink-0 mt-0.5"
            />
            <span
              className={cn(
                "text-[13.5px] leading-[1.4]",
                featured ? "text-paper/90" : "text-meta-700",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Button
          href={SIGNUP_URL}
          size="lg"
          className={cn(
            "w-full justify-center",
            featured
              ? "bg-emerald text-paper hover:bg-emerald hover:-translate-y-px hover:shadow-[0_8px_24px_-6px_rgba(61,191,121,0.5)]"
              : "bg-offwhite text-ink hover:bg-surface hover:-translate-y-px border border-line",
          )}
        >
          Start for free
        </Button>
      </div>
    </div>
  );
}

export function PricingPlans() {
  const [cadence, setCadence] = useState<Cadence>("annual");

  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28">
      <Container size="hero">
        {/* Hero */}
        <div className="text-center max-w-[720px] mx-auto">
          <Reveal>
            <p className="label">Pricing</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 text-[42px] md:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.03] text-ink">
              Pricing that scales<br className="hidden sm:block" /> with you.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-meta max-w-[560px] mx-auto">
              Start free for 14 days. Keep every cent you earn &mdash; 0%
              transaction fees on every plan. No credit card to begin, no
              surprises later.
            </p>
          </Reveal>
        </div>

        {/* Toggle */}
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
                  "px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ease-apple flex items-center gap-2",
                  cadence === "annual"
                    ? "bg-paper text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-meta hover:text-ink",
                )}
              >
                Annual
                <span className="text-[11px] font-bold text-emerald">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal delay={0.24}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-start max-w-[1040px] mx-auto">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} cadence={cadence} />
            ))}
          </div>
        </Reveal>

        {/* Risk reversal */}
        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-[13px] text-meta">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  highlights: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$9",
    cadence: "/ month",
    tagline: "Launch your store and make your first sales.",
    highlights: [
      "Up to 20 products",
      "Custom domain + SSL",
      "0% transaction fees",
    ],
  },
  {
    name: "Growth",
    price: "$29",
    cadence: "/ month",
    tagline: "The full toolkit to grow and market your store.",
    highlights: [
      "Up to 100 products",
      "Abandoned cart recovery",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$79",
    cadence: "/ month",
    tagline: "No limits. No compromises. Total control.",
    highlights: [
      "Unlimited products",
      "Multi-currency checkout",
      "Dedicated account manager",
    ],
  },
];

export function PricingTeaser() {
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
                Every plan includes the builder, multi-gateway checkout,
                custom domain, and 0% transaction fees. Pay 20% less when
                you choose annual.
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div
                className={cn(
                  "rounded-[16px] p-7 md:p-8 h-full flex flex-col transition-all duration-200 ease-apple",
                  plan.featured
                    ? "bg-ink text-paper"
                    : "bg-paper border border-line",
                )}
              >
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
                      "text-[44px] font-extrabold tracking-[-0.025em] leading-none",
                      plan.featured ? "text-paper" : "text-ink",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-[14px] font-medium",
                      plan.featured ? "text-paper/65" : "text-meta",
                    )}
                  >
                    {plan.cadence}
                  </span>
                </div>
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
          ))}
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

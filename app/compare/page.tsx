import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { CompareLogo } from "@/components/compare/CompareLogo";
import { cn } from "@/lib/utils";
import {
  PLATFORMS,
  COMPARE_GROUPS,
  COMPARE_UPDATED,
  type CompareValue,
} from "@/lib/compare";

export const metadata: Metadata = {
  title: "How Evercart Compares",
  description:
    "An honest look at how Evercart compares with Shopify and Squarespace on price, transaction fees, and features. 0% transaction fees on every plan, from $7/month.",
  alternates: { canonical: "/compare" },
};

function Cell({ value, own }: { value: CompareValue; own?: boolean }) {
  if (value === true) {
    return (
      <Check
        size={18}
        strokeWidth={2.5}
        className={cn("mx-auto", own ? "text-emerald" : "text-meta-700")}
        aria-label="Yes"
      />
    );
  }
  if (value === false) {
    return <Minus size={16} strokeWidth={2} className="text-line mx-auto" aria-label="No" />;
  }
  return (
    <span
      className={cn(
        "text-[13px] leading-tight",
        own ? "text-ink font-semibold" : "text-meta-700",
      )}
    >
      {value}
    </span>
  );
}

export default function ComparePage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <Container size="hero">
          <div className="max-w-[760px]">
            <Reveal>
              <p className="label">Compare</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-4 text-[42px] md:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.03] text-ink">
                How Evercart compares.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-meta max-w-[600px]">
                An honest look at how Evercart stacks up against the platforms
                you already know. We lead on price and keep 0% transaction fees
                on every plan &mdash; including the entry tier, where others
                charge you to sell.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 text-[12px] text-meta">
                Figures are publicly listed prices as of {COMPARE_UPDATED}.
                Competitor pricing changes often &mdash; check each provider for
                the latest.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="pb-20 md:pb-28">
        <Container size="wide">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="sticky top-[68px] bg-paper z-10">
                  <th className="text-left align-bottom pb-5 w-[34%]">
                    <span className="sr-only">Feature</span>
                  </th>
                  {PLATFORMS.map((p) => (
                    <th
                      key={p.id}
                      className={cn(
                        "pb-5 px-3 text-center align-bottom w-[22%]",
                        p.own && "relative",
                      )}
                    >
                      <span className="flex items-center justify-center h-7">
                        <CompareLogo platform={p} />
                      </span>
                      {p.own && (
                        <span className="block text-[10px] uppercase tracking-[0.1em] font-bold text-emerald mt-1.5">
                          You are here
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_GROUPS.map((group) => (
                  <Fragment key={group.heading}>
                    <tr>
                      <td colSpan={4} className="pt-8 pb-2 border-b border-line">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-meta-700">
                          {group.heading}
                        </span>
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-line/70">
                        <td className="py-4 pr-4">
                          <span className="block text-[14px] text-ink">
                            {row.label}
                          </span>
                          {row.note && (
                            <span className="block text-[11px] text-meta mt-0.5">
                              {row.note}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-3 text-center bg-emerald/[0.04]">
                          <Cell value={row.evercart} own />
                        </td>
                        <td className="py-4 px-3 text-center">
                          <Cell value={row.shopify} />
                        </td>
                        <td className="py-4 px-3 text-center">
                          <Cell value={row.squarespace} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Positioning — confident */}
      <section className="py-20 md:py-28 bg-offwhite border-y border-line">
        <Container size="hero">
          <div className="max-w-[680px]">
            <Reveal>
              <p className="label">Why Evercart</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[30px] md:text-[40px] font-extrabold tracking-[-0.025em] leading-[1.1] text-ink">
                The power of a big platform, without the fees.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.65] text-meta">
                <p>
                  Evercart gives you everything you&rsquo;d expect from an
                  established platform &mdash; a fast, beautiful, fully-featured
                  online store &mdash; and keeps 100% of every sale in your
                  pocket with 0% transaction fees on every plan.
                </p>
                <p>
                  Design isn&rsquo;t an afterthought or a paid add-on. It&rsquo;s
                  built into the platform from the first click, so your store
                  looks like you made it &mdash; not like it came off a
                  production line.
                </p>
                <p>
                  And Evercart keeps getting better. We ship new features
                  constantly, built for ambitious stores that intend to become
                  names everyone knows.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container size="hero">
          <div className="text-center max-w-[640px] mx-auto">
            <Reveal>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.05] text-ink">
                See it for yourself.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-[17px] text-meta">
                Start a free 14-day trial. No credit card, no commitment.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="https://app.evercart.io/auth/signup"
                  size="lg"
                  variant="primary"
                >
                  Start for free
                </Button>
                <Link
                  href="/pricing"
                  className="text-[14px] font-semibold text-ink hover:text-meta transition-colors duration-200 ease-apple"
                >
                  View pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

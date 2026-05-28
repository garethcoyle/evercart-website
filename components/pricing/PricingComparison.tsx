import { Fragment } from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { COMPARISON, type ComparisonValue } from "@/lib/pricing";

function Cell({
  value,
  featured,
}: {
  value: ComparisonValue;
  featured?: boolean;
}) {
  if (value === true) {
    return (
      <Check
        size={17}
        strokeWidth={2.5}
        className="text-emerald mx-auto"
        aria-label="Included"
      />
    );
  }
  if (value === false) {
    return (
      <Minus
        size={16}
        strokeWidth={2}
        className="text-line mx-auto"
        aria-label="Not included"
      />
    );
  }
  return (
    <span
      className={cn(
        "text-[13px] leading-tight",
        featured ? "text-ink font-semibold" : "text-meta-700",
      )}
    >
      {value}
    </span>
  );
}

export function PricingComparison() {
  return (
    <section className="py-20 md:py-28">
      <Container size="wide">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="label">Compare plans</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.08] text-ink">
              Every feature, side by side.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[640px] border-collapse">
              {/* Header */}
              <thead>
                <tr className="sticky top-[68px] bg-paper z-10">
                  <th className="text-left align-bottom pb-4 w-[34%]">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th className="pb-4 px-3 text-center w-[22%]">
                    <span className="block text-[14px] font-bold text-ink">
                      Starter
                    </span>
                  </th>
                  <th className="pb-4 px-3 text-center w-[22%]">
                    <span className="block text-[14px] font-bold text-ink">
                      Growth
                    </span>
                    <span className="block text-[10px] uppercase tracking-[0.08em] font-bold text-emerald mt-0.5">
                      Most popular
                    </span>
                  </th>
                  <th className="pb-4 px-3 text-center w-[22%]">
                    <span className="block text-[14px] font-bold text-ink">
                      Pro
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON.map((group) => (
                  <Fragment key={group.heading}>
                    {/* Group heading row */}
                    <tr>
                      <td
                        colSpan={4}
                        className="pt-7 pb-2 border-b border-line"
                      >
                        <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-meta-700">
                          {group.heading}
                        </span>
                      </td>
                    </tr>
                    {/* Rows */}
                    {group.rows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-line/70"
                      >
                        <td className="py-3.5 text-[14px] text-ink pr-4">
                          {row.label}
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <Cell value={row.starter} />
                        </td>
                        <td className="py-3.5 px-3 text-center bg-emerald/[0.04]">
                          <Cell value={row.growth} featured />
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <Cell value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 text-[14px] text-meta">
            Curious how we stack up against other platforms?{" "}
            <Link
              href="/compare"
              className="text-ink font-semibold underline underline-offset-2 hover:text-emerald transition-colors"
            >
              See the full comparison
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

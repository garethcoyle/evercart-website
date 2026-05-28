import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PLAN_INCLUDES } from "@/lib/pricing";

export function PricingIncludes() {
  return (
    <section className="py-20 md:py-28 bg-offwhite border-y border-line">
      <Container size="hero">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="label">Every plan includes</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.08] text-ink">
              The essentials aren&rsquo;t extras.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] leading-[1.6] text-meta max-w-[520px]">
              Whichever plan you start on, the things that matter most come
              as standard. No upsells for the basics.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {PLAN_INCLUDES.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald/12">
                    <Check size={14} strokeWidth={2.75} className="text-emerald" />
                  </span>
                  <h3 className="text-[16px] font-bold text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-[14px] leading-[1.55] text-meta pl-[34px]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

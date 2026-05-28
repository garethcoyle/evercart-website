"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { APPLE_CURVE } from "@/lib/motion";
import { FAQS } from "@/lib/pricing";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  // The refund FAQ links to the policy — special-cased for the inline link.
  const isRefund = q === "Can I cancel anytime?";

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-ink">
          {q}
        </span>
        <Plus
          size={20}
          strokeWidth={2}
          className={cn(
            "shrink-0 text-meta transition-transform duration-300 ease-apple",
            isOpen && "rotate-45",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: APPLE_CURVE }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-[1.65] text-meta max-w-[640px]">
              {a}
              {isRefund && (
                <>
                  {" "}
                  <Link
                    href="/legal/refund"
                    className="text-ink font-semibold underline underline-offset-2 hover:text-emerald transition-colors"
                  >
                    Read the Refund Policy
                  </Link>
                  .
                </>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-offwhite border-t border-line">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label">FAQ</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[32px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.08] text-ink">
                Questions, answered.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15px] leading-[1.6] text-meta max-w-[320px]">
                Still unsure about something? Email{" "}
                <a
                  href="mailto:hello@evercart.io"
                  className="text-ink font-semibold underline underline-offset-2 hover:text-emerald transition-colors"
                >
                  hello@evercart.io
                </a>{" "}
                and a human will reply.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8 mt-10 md:mt-0">
            <Reveal delay={0.1}>
              <div>
                {FAQS.map((faq, i) => (
                  <FaqItem
                    key={faq.q}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

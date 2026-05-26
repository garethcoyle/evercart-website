"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { APPLE_CURVE } from "@/lib/motion";

// Words that cycle in the headline. Each works as a completion of
// "An online store you'll actually want to ___." Single syllables for rhythm.
const CYCLE_WORDS = ["share", "run", "scale", "grow"] as const;
const CYCLE_INTERVAL_MS = 2800;

export function Hero() {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLE_WORDS.length);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduced]);

  const currentWord = reduced ? CYCLE_WORDS[0] : CYCLE_WORDS[wordIndex];

  return (
    <section className="relative pt-16 md:pt-28 pb-24 md:pb-36 overflow-hidden">
      <Container size="hero">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: APPLE_CURVE }}
            className="label"
          >
            Currently in beta · Launching summer 2026
          </motion.p>

          {/* Headline with cycling word */}
          <motion.h1
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: APPLE_CURVE }}
            className="mt-6 text-[48px] sm:text-[72px] lg:text-[104px] font-extrabold tracking-[-0.035em] leading-[0.98] text-ink"
          >
            <span className="block">An online store</span>
            <span className="block">you&rsquo;ll actually want</span>
            <span className="block relative">
              to&nbsp;
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: APPLE_CURVE }}
                  className="inline-block"
                >
                  {currentWord}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: APPLE_CURVE }}
            className="mt-10 max-w-[620px] mx-auto text-[17px] lg:text-[19px] leading-[1.55] text-meta"
          >
            Evercart is the e-commerce platform for online stores that take
            design seriously. From your first product to your hundred-thousandth,
            your store should look like you made it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: APPLE_CURVE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
          >
            <Button
              href="https://app.evercart.io/auth/signup"
              variant="primary"
              size="lg"
            >
              Start for free
            </Button>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-meta transition-colors duration-200 ease-apple"
            >
              See pricing
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Trial caveat */}
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: APPLE_CURVE }}
            className="mt-6 text-[12px] text-meta-700"
          >
            14-day free trial. No credit card required.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}

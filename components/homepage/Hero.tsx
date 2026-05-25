"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { HaloSkinStorefront } from "@/components/storefront/HaloSkinStorefront";
import { APPLE_CURVE } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <Container size="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy block */}
          <div className="lg:col-span-6">
            <motion.p
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: APPLE_CURVE }}
              className="label"
            >
              Currently in beta · Launching summer 2026
            </motion.p>

            <motion.h1
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: APPLE_CURVE }}
              className="mt-5 text-[44px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-[-0.025em] leading-[1.02] text-ink"
            >
              A shop you&rsquo;ll<br />actually want<br />to share.
            </motion.h1>

            <motion.p
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: APPLE_CURVE }}
              className="mt-7 text-[17px] lg:text-[18px] leading-[1.55] text-meta max-w-[480px]"
            >
              Evercart is the e-commerce platform for makers and boutique
              brands who care how their shop looks. Built around taste, sold
              by you.
            </motion.p>

            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: APPLE_CURVE }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
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

            <motion.p
              initial={reduced ? { opacity: 0 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: APPLE_CURVE }}
              className="mt-6 text-[12px] text-meta-700"
            >
              No credit card required. Free during beta.
            </motion.p>
          </div>

          {/* Right: signature motion moment — layered storefront reveal */}
          <div className="lg:col-span-6">
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: APPLE_CURVE,
              }}
              className="lg:max-w-none mx-auto max-w-[480px]"
            >
              <BrowserFrame url="haloskin.evercart.io">
                <HaloSkinStorefront animate />
              </BrowserFrame>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

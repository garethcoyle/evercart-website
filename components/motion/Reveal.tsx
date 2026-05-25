"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { APPLE_CURVE, DURATIONS } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number; // seconds — for staggering children manually
  y?: number; // pixels translated up on enter
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  once?: boolean;
  amount?: number; // 0-1 — how much of the element must be in view to trigger
};

export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  as = "div",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionComp = motion[as] as typeof motion.div;

  // Reduced motion: simple cross-fade, no translate
  if (reduced) {
    return (
      <MotionComp
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionComp>
    );
  }

  return (
    <MotionComp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: DURATIONS.reveal,
        delay,
        ease: APPLE_CURVE,
      }}
    >
      {children}
    </MotionComp>
  );
}

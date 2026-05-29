"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures every route change scrolls the window back to the top.
 * Preserves hash-based anchor navigation (e.g. legal-page TOC) by skipping
 * the scroll if the URL has a hash.
 *
 * Next.js does this by default for most cases, but prefetching, scroll
 * restoration, and certain transitions can occasionally leave the page
 * scrolled. This guarantees the behaviour.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { EvercartLogo } from "@/components/EvercartLogo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-all duration-320 ease-apple",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-paper/0 border-b border-transparent",
      )}
    >
      <Container size="hero">
        <div className="flex items-center justify-between h-[68px]">
          {/* Lockup — full Evercart logo, sized conservatively for the dense nav */}
          <Link
            href="/"
            aria-label="Evercart home"
            className="text-ink hover:opacity-80 transition-opacity duration-200 ease-apple"
          >
            <EvercartLogo height={22} />
          </Link>

          {/* Center nav — desktop only */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          >
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[14px] transition-all duration-200 ease-apple relative",
                    active
                      ? "text-ink font-semibold"
                      : "text-meta hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions — desktop */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://app.evercart.io/auth/login"
              className="text-[14px] text-meta hover:text-ink transition-colors duration-200 ease-apple font-medium"
            >
              Sign in
            </a>
            <Button
              href="https://app.evercart.io/auth/signup"
              variant="primary"
              size="sm"
            >
              Start for free
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-2 -mr-2 text-ink"
          >
            {open ? <Menu size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-[68px] z-40 bg-paper border-t border-line"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <Container>
            <nav
              aria-label="Mobile primary"
              className="flex flex-col gap-1 py-6"
            >
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "py-3 text-lg transition-colors duration-200 ease-apple",
                      active ? "text-ink font-bold" : "text-meta",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="h-px bg-line my-4" />
              <a
                href="https://app.evercart.io/auth/login"
                className="py-3 text-lg text-meta"
              >
                Sign in
              </a>
              <Button
                href="https://app.evercart.io/auth/signup"
                variant="primary"
                size="lg"
                className="mt-3 w-full"
              >
                Start for free
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

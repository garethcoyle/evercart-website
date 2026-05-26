"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X as CloseIcon, ChevronDown } from "lucide-react";
import { EvercartLogo } from "@/components/EvercartLogo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { APPLE_CURVE } from "@/lib/motion";
import { PRODUCT_LINKS, RESOURCE_LINKS } from "@/lib/nav";

type LinkItem = { href: string; label: string };

function NavDropdown({
  label,
  items,
  columns = 1,
  panelMinWidth,
}: {
  label: string;
  items: ReadonlyArray<LinkItem>;
  columns?: 1 | 3;
  panelMinWidth?: number;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-[14px] transition-colors duration-200 ease-apple",
          open ? "text-ink" : "text-meta hover:text-ink"
        )}
      >
        {label}
        <ChevronDown
          size={13}
          strokeWidth={2.25}
          className={cn(
            "transition-transform duration-200 ease-apple",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: APPLE_CURVE }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
          >
            <div
              className="bg-paper border border-line rounded-2xl shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18),0_4px_16px_-4px_rgba(0,0,0,0.06)] py-4 px-3"
              style={panelMinWidth ? { minWidth: panelMinWidth } : undefined}
            >
              <ul
                className={cn(
                  columns === 3
                    ? "grid grid-cols-3 gap-x-2 gap-y-0.5"
                    : "flex flex-col"
                )}
              >
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded-md text-[13px] text-meta hover:text-ink hover:bg-surface transition-colors duration-150 whitespace-nowrap font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSection({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<LinkItem>;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between py-4 text-lg text-ink font-medium"
      >
        {label}
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={cn(
            "transition-transform duration-200 ease-apple text-meta",
            expanded && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: APPLE_CURVE }}
            className="overflow-hidden"
          >
            <ul className="pb-4 flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 pl-1 text-[15px] text-meta hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-all duration-320 ease-apple",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-paper/0 border-b border-transparent"
      )}
    >
      <Container size="hero">
        <div className="flex items-center justify-between h-[68px]">
          <Link
            href="/"
            aria-label="Evercart home"
            className="text-ink hover:opacity-80 transition-opacity duration-200 ease-apple shrink-0"
          >
            <EvercartLogo height={22} />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          >
            <NavDropdown
              label="Products"
              items={PRODUCT_LINKS}
              columns={3}
              panelMinWidth={480}
            />
            <Link
              href="/pricing"
              className={cn(
                "text-[14px] transition-colors duration-200 ease-apple relative",
                pathname === "/pricing"
                  ? "text-ink font-semibold"
                  : "text-meta hover:text-ink"
              )}
            >
              Pricing
              {pathname === "/pricing" && (
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald"
                />
              )}
            </Link>
            <NavDropdown label="Resources" items={RESOURCE_LINKS} columns={1} />
          </nav>

          <div className="hidden md:flex items-center gap-5 shrink-0">
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden p-2 -mr-2 text-ink"
          >
            {open ? (
              <CloseIcon size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          className="md:hidden fixed inset-0 top-[68px] z-40 bg-paper border-t border-line overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <Container>
            <nav aria-label="Mobile primary" className="py-2">
              <MobileSection label="Products" items={PRODUCT_LINKS} />
              <Link
                href="/pricing"
                className="block py-4 text-lg text-ink font-medium border-b border-line"
              >
                Pricing
              </Link>
              <MobileSection label="Resources" items={RESOURCE_LINKS} />
            </nav>
            <div className="pt-6 pb-12">
              <a
                href="https://app.evercart.io/auth/login"
                className="block py-3 text-[15px] text-meta"
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
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

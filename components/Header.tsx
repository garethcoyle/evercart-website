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
import {
  PRODUCT_LINKS,
  PRODUCT_GROUPS,
  RESOURCE_LINKS,
  type NavLink,
  type NavGroup,
} from "@/lib/nav";

/**
 * DropdownLink — title + optional description, rendered as a single
 * clickable block with a subtle hover state.
 */
function DropdownLink({ href, label, description }: NavLink) {
  return (
    <Link
      href={href}
      className="block py-2.5 px-3 -mx-3 rounded-lg hover:bg-surface transition-colors duration-150"
    >
      <p className="text-[13.5px] font-semibold text-ink leading-tight">
        {label}
      </p>
      {description && (
        <p className="text-[12px] text-meta mt-1 leading-[1.4]">
          {description}
        </p>
      )}
    </Link>
  );
}

/**
 * NavDropdown — desktop hover/click dropdown menu.
 * Accepts either a flat `items` list or grouped `groups` (rendered as
 * a multi-column mega menu with section headers).
 */
function NavDropdown({
  label,
  items,
  groups,
  panelWidth,
}: {
  label: string;
  items?: ReadonlyArray<NavLink>;
  groups?: ReadonlyArray<NavGroup>;
  panelWidth?: number;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

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
          open ? "text-ink" : "text-meta hover:text-ink",
        )}
      >
        {label}
        <ChevronDown
          size={13}
          strokeWidth={2.25}
          className={cn(
            "transition-transform duration-200 ease-apple",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: APPLE_CURVE }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
          >
            <div
              className="bg-paper border border-line rounded-2xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.18),0_4px_16px_-4px_rgba(0,0,0,0.06)] p-6"
              style={panelWidth ? { width: panelWidth } : undefined}
            >
              {groups ? (
                <div className="grid grid-cols-3 gap-x-6 gap-y-0">
                  {groups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-meta-700 mb-3 px-3">
                        {group.heading}
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <DropdownLink {...item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : items ? (
                <ul className="flex flex-col gap-0.5">
                  {items.map((item) => (
                    <li key={item.href}>
                      <DropdownLink {...item} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * MobileSection — accordion-style expandable section for the mobile sheet.
 * Shows titles only (no descriptions) to keep the mobile menu tight.
 */
function MobileSection({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<{ href: string; label: string }>;
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
            expanded && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: APPLE_CURVE }}
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
          : "bg-paper/0 border-b border-transparent",
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
              groups={PRODUCT_GROUPS}
              panelWidth={720}
            />
            <Link
              href="/pricing"
              className={cn(
                "text-[14px] transition-colors duration-200 ease-apple relative",
                pathname === "/pricing"
                  ? "text-ink font-semibold"
                  : "text-meta hover:text-ink",
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
            <NavDropdown
              label="Resources"
              items={RESOURCE_LINKS}
              panelWidth={280}
            />
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
              <MobileSection
                label="Resources"
                items={RESOURCE_LINKS.map((r) => ({
                  href: r.href,
                  label: r.label,
                }))}
              />
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

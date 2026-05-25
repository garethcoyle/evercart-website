import Link from "next/link";
import { EvercartLogo } from "@/components/EvercartLogo";
import { Container } from "@/components/ui/Container";

const PRODUCT_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "https://app.evercart.io/auth/signup", label: "Start for free", external: true },
  { href: "https://app.evercart.io/auth/login", label: "Sign in", external: true },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/refund", label: "Refund policy" },
  { href: "/legal/cookie", label: "Cookies" },
];

function ColumnHeading({ children }: { children: string }) {
  return (
    <p className="label-ink mb-5">{children}</p>
  );
}

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "text-[14px] text-meta hover:text-ink transition-colors duration-200 ease-apple";
  if (external) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-line mt-32 text-ink">
      <Container size="hero">
        <div className="pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-5">
            <EvercartLogo height={24} className="text-ink" />
            <p className="mt-6 text-[14px] leading-relaxed text-meta max-w-xs">
              Premium e-commerce, simply done. The platform for shops that
              take design seriously.
            </p>
            <p className="mt-4 text-[12px] text-meta-700 uppercase tracking-label font-bold">
              Currently in beta · Launching summer 2026
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Product */}
          <div className="md:col-span-2">
            <ColumnHeading>Product</ColumnHeading>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <ColumnHeading>Legal</ColumnHeading>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom rule + meta */}
        <div className="pt-8 pb-10 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-meta-700">
            © {year} Evercart. All rights reserved.
          </p>
          <p className="text-[12px] text-meta-700 italic">
            Premium e-commerce, simply done.
          </p>
        </div>
      </Container>
    </footer>
  );
}

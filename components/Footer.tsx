import Link from "next/link";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { EvercartLogo } from "@/components/EvercartLogo";
import { Container } from "@/components/ui/Container";
import {
  PRODUCT_LINKS,
  RESOURCE_LINKS,
  COMPANY_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
  type SocialPlatform,
} from "@/lib/nav";

/**
 * X (Twitter) icon — lucide ships the legacy bird; use the X glyph instead.
 */
function XIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const sz = 16;
  const sw = 1.75;
  switch (platform) {
    case "instagram":
      return <Instagram size={sz} strokeWidth={sw} aria-hidden />;
    case "youtube":
      return <Youtube size={sz} strokeWidth={sw} aria-hidden />;
    case "linkedin":
      return <Linkedin size={sz} strokeWidth={sw} aria-hidden />;
    case "facebook":
      return <Facebook size={sz} strokeWidth={sw} aria-hidden />;
    case "x":
      return <XIcon size={sz - 2} />;
  }
}

function ColumnHeading({ children }: { children: string }) {
  return <p className="label-ink mb-5">{children}</p>;
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
    <footer className="bg-offwhite border-t border-line text-ink">
      <Container size="hero">
        <div className="pt-20 pb-12 grid grid-cols-2 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4">
            <EvercartLogo height={24} className="text-ink" />
            <p className="mt-6 text-[14px] leading-relaxed text-meta max-w-xs">
              Premium e-commerce, simply done. The platform for online stores
              that take design seriously.
            </p>
            <p className="mt-4 text-[12px] text-meta-700 uppercase tracking-label font-bold">
              Currently in beta · Launching summer 2026
            </p>
          </div>

          {/* Products column */}
          <div className="md:col-span-3">
            <ColumnHeading>Products</ColumnHeading>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
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

          {/* Support column */}
          <div className="md:col-span-2">
            <ColumnHeading>Support</ColumnHeading>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.href}>
                  <FooterLink {...l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="md:col-span-1">
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

        {/* Bottom bar — copyright + sitemap + socials */}
        <div className="pt-8 pb-10 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-[12px] text-meta-700">
            <p>© {year} Evercart. All rights reserved.</p>
            <Link
              href="/sitemap"
              className="hover:text-ink transition-colors duration-200 ease-apple"
            >
              Sitemap
            </Link>
          </div>

          {/* Social icons */}
          <ul className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.href}
                  aria-label={`Evercart on ${s.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-meta hover:text-ink hover:border-ink transition-colors duration-200 ease-apple"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

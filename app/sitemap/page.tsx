import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import {
  PRODUCT_LINKS,
  RESOURCE_LINKS,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from "@/lib/nav";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "All Evercart pages, in one place.",
};

const PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
];

function Section({
  heading,
  items,
}: {
  heading: string;
  items: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h2 className="label-ink mb-5">{heading}</h2>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-[15px] text-meta hover:text-ink transition-colors duration-200 ease-apple"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="py-24 md:py-36">
      <Container size="hero">
        <p className="label">Sitemap</p>
        <h1 className="mt-5 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05] text-ink">
          All Evercart pages, in one place.
        </h1>
        <p className="mt-6 text-[16px] md:text-[18px] leading-[1.55] text-meta max-w-[560px]">
          Looking for something? Every page on Evercart, listed for humans.
          For machines, see{" "}
          <a
            href="/sitemap.xml"
            className="underline underline-offset-4 hover:text-ink transition-colors"
          >
            /sitemap.xml
          </a>
          .
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
          <Section heading="Main" items={PRIMARY} />
          <Section heading="Products" items={PRODUCT_LINKS} />
          <Section heading="Support" items={RESOURCE_LINKS} />
          <Section heading="Company" items={COMPANY_LINKS} />
          <Section heading="Legal" items={LEGAL_LINKS} />
        </div>
      </Container>
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

const PRODUCTS: Record<
  string,
  { title: string; description: string }
> = {
  "website-builder": {
    title: "Website Builder",
    description:
      "A section-based builder with restraint by default. Drag, drop, design — without the assembled-from-a-template look.",
  },
  themes: {
    title: "Themes",
    description:
      "Forty premium themes to start from. Considered typography, generous spacing, photography that breathes.",
  },
  domains: {
    title: "Domains",
    description:
      "Every store gets a yourbrand.evercart.io subdomain from day one. Connect a custom domain when you're ready — included on every plan.",
  },
  "customer-accounts": {
    title: "Customer Accounts",
    description:
      "Lightweight customer accounts that respect your customer's time. Order history, saved details, and one-click reorder.",
  },
  discounts: {
    title: "Discounts",
    description:
      "Codes, automatic discounts, bundles, free shipping thresholds. Set the rules, Evercart applies them.",
  },
  analytics: {
    title: "Analytics",
    description:
      "Revenue, orders, conversion, and top products at a glance. Plain-English answers — not just charts.",
  },
  "seo-tools": {
    title: "SEO Tools",
    description:
      "Clean URLs, fast pages, structured data, and metadata controls on every page. Built to be found.",
  },
  payments: {
    title: "Payments",
    description:
      "Stripe and PayPal in the box. Apple Pay, Google Pay, and major cards just work. Zero transaction fees on every plan.",
  },
  checkout: {
    title: "Checkout",
    description:
      "A checkout that converts. Single-page, fast, mobile-perfect, with the payment methods your customers expect.",
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = PRODUCTS[slug];
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = PRODUCTS[slug];
  if (!item) notFound();
  return (
    <StubPage
      eyebrow="Products"
      title={item.title}
      description={item.description}
      parentHref="/"
      parentLabel="home"
    />
  );
}

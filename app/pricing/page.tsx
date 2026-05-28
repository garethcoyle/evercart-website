import type { Metadata } from "next";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PricingIncludes } from "@/components/pricing/PricingIncludes";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { Closing } from "@/components/homepage/Closing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing that scales with you. Three plans, 0% transaction fees on every one, and a 14-day free trial with no credit card required. From $7/month.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Evercart Pricing — Three plans, 0% transaction fees",
    description:
      "Start free for 14 days. Keep every cent you earn with 0% transaction fees on every plan. From $7/month.",
    url: "https://www.evercart.io/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <PricingIncludes />
      <PricingComparison />
      <PricingFAQ />
      <Closing />
    </>
  );
}

// Comparison data for /compare.
// All competitor figures are publicly listed prices verified May 2026.
// Competitor pricing changes often — revisit periodically.

export const COMPARE_UPDATED = "May 2026";

export type Platform = {
  id: "evercart" | "shopify" | "squarespace";
  name: string;
  own?: boolean;
};

export const PLATFORMS: Platform[] = [
  { id: "evercart", name: "Evercart", own: true },
  { id: "shopify", name: "Shopify" },
  { id: "squarespace", name: "Squarespace" },
];

export type CompareValue = boolean | string;
export type CompareRow = {
  label: string;
  note?: string;
  evercart: CompareValue;
  shopify: CompareValue;
  squarespace: CompareValue;
};
export type CompareGroup = { heading: string; rows: CompareRow[] };

export const COMPARE_GROUPS: CompareGroup[] = [
  {
    heading: "Pricing",
    rows: [
      {
        label: "Entry plan",
        note: "billed annually, monthly equivalent",
        evercart: "$7/mo",
        shopify: "$19/mo",
        squarespace: "$16/mo",
      },
      {
        label: "Mid plan",
        note: "billed annually",
        evercart: "$23/mo",
        shopify: "$49/mo",
        squarespace: "$23/mo",
      },
      {
        label: "Top plan",
        note: "billed annually, excludes enterprise tiers",
        evercart: "$63/mo",
        shopify: "$299/mo",
        squarespace: "$99/mo",
      },
      {
        label: "Free trial",
        evercart: "14 days, no card",
        shopify: "3 days",
        squarespace: "14 days, no card",
      },
    ],
  },
  {
    heading: "Fees",
    rows: [
      {
        label: "Platform transaction fees",
        note: "charged on top of standard payment-processor rates",
        evercart: "0% on every plan",
        shopify: "Up to 2% unless using Shopify Payments",
        squarespace: "2% on entry plan, 0% above",
      },
      {
        label: "Setup fees",
        evercart: false,
        shopify: false,
        squarespace: false,
      },
      {
        label: "Bandwidth / traffic charges",
        evercart: false,
        shopify: false,
        squarespace: false,
      },
    ],
  },
  {
    heading: "Building & selling",
    rows: [
      {
        label: "Unlimited products",
        evercart: true,
        shopify: true,
        squarespace: true,
      },
      {
        label: "Custom domain + SSL",
        evercart: "Every plan",
        shopify: "Every plan",
        squarespace: "Annual plans",
      },
      {
        label: "Design-led premium themes",
        evercart: true,
        shopify: true,
        squarespace: true,
      },
      {
        label: "Abandoned cart recovery",
        evercart: "Growth & Pro",
        shopify: true,
        squarespace: "Core & above",
      },
      {
        label: "Multi-currency checkout",
        evercart: "Pro",
        shopify: true,
        squarespace: "Limited",
      },
    ],
  },
];

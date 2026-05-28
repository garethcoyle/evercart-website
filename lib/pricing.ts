// Pricing data — matches the in-app pricing page exactly.
// Annual prices are the monthly-equivalent when billed annually (20% off).

export type Cadence = "monthly" | "annual";

export type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  tagline: string;
  features: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 9,
    annualPrice: 7,
    tagline: "Launch your store and make your first sales.",
    features: [
      "Up to 20 products",
      "Custom domain + SSL",
      "0% transaction fees",
      "5 premium themes",
      "Basic analytics (30 days)",
      "1 active discount code",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 29,
    annualPrice: 23,
    tagline: "The full toolkit to grow and market your store.",
    featured: true,
    features: [
      "Up to 100 products",
      "Custom domain + SSL",
      "0% transaction fees",
      "40+ premium themes",
      "Full analytics + history",
      "Abandoned cart recovery",
      "Customer accounts",
      "Gift cards",
      "Unlimited discount codes",
      "Staff accounts (3)",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 79,
    annualPrice: 63,
    tagline: "No limits. No compromises. Total control.",
    features: [
      "Unlimited products",
      "Custom domain + SSL",
      "0% transaction fees",
      "40+ premium themes",
      "Advanced analytics + exports",
      "Abandoned cart recovery",
      "Customer accounts",
      "Gift cards",
      "Unlimited discount codes",
      "Multi-currency checkout",
      "API access",
      "Staff accounts (10)",
      "Dedicated account manager",
    ],
  },
];

// "Every plan includes" — universal value props, benefit-framed.
export const PLAN_INCLUDES: { title: string; description: string }[] = [
  {
    title: "0% transaction fees",
    description: "Keep every cent you earn. We never take a cut of your sales.",
  },
  {
    title: "14-day free trial",
    description: "Explore everything, no credit card required to begin.",
  },
  {
    title: "Custom domain + SSL",
    description: "Connect your own domain, secured automatically.",
  },
  {
    title: "Unlimited bandwidth",
    description: "No traffic caps and no surprise overage charges.",
  },
  {
    title: "Multi-gateway checkout",
    description: "Stripe, PayPal, Apple Pay, and Google Pay, ready to go.",
  },
  {
    title: "Cancel anytime",
    description: "No lock-in and no long-term contracts. Leave whenever.",
  },
];

// Full feature comparison matrix.
export type ComparisonValue = boolean | string;
export type ComparisonRow = {
  label: string;
  starter: ComparisonValue;
  growth: ComparisonValue;
  pro: ComparisonValue;
};
export type ComparisonGroup = { heading: string; rows: ComparisonRow[] };

export const COMPARISON: ComparisonGroup[] = [
  {
    heading: "Catalogue",
    rows: [
      { label: "Products", starter: "Up to 20", growth: "Up to 100", pro: "Unlimited" },
      { label: "Gift cards", starter: false, growth: true, pro: true },
    ],
  },
  {
    heading: "Design & domain",
    rows: [
      { label: "Premium themes", starter: "5", growth: "40+", pro: "40+" },
      { label: "Custom domain + SSL", starter: true, growth: true, pro: true },
    ],
  },
  {
    heading: "Selling",
    rows: [
      { label: "Transaction fees", starter: "0%", growth: "0%", pro: "0%" },
      { label: "Discount codes", starter: "1 active", growth: "Unlimited", pro: "Unlimited" },
      { label: "Abandoned cart recovery", starter: false, growth: true, pro: true },
      { label: "Customer accounts", starter: false, growth: true, pro: true },
      { label: "Multi-currency checkout", starter: false, growth: false, pro: true },
    ],
  },
  {
    heading: "Insights",
    rows: [
      {
        label: "Analytics",
        starter: "Basic (30 days)",
        growth: "Full + history",
        pro: "Advanced + exports",
      },
      { label: "API access", starter: false, growth: false, pro: true },
    ],
  },
  {
    heading: "Team & support",
    rows: [
      { label: "Staff accounts", starter: false, growth: "3", pro: "10" },
      { label: "Support", starter: "Email", growth: "Priority", pro: "Dedicated manager" },
    ],
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Can I change plans as I grow?",
    a: "Yes. Upgrade or downgrade at any time from your dashboard. Upgrades apply immediately so you get the new features straight away; downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "What does 0% transaction fees actually mean?",
    a: "Evercart never takes a percentage of your sales — on any plan. The only fee on a sale is your payment processor's standard card-processing rate (for example, Stripe's), which goes to them, not to us.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Every plan begins with a 14-day free trial and no card is required. You only add payment details if you decide to continue after the trial.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "If you choose a plan before the trial ends, your store stays live with no interruption. If you don't, your store is paused and your data is kept safe for 30 days so you can pick up exactly where you left off.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel whenever you like and you'll keep access until the end of the period you've already paid for. Annual plans can be refunded in full within 14 days of payment — see our Refund Policy for the details.",
  },
  {
    q: "Can I use my own domain?",
    a: "Absolutely. A custom domain with automatic SSL is included on every plan. You can also start on a free yourbrand.evercart.io address and connect your own domain whenever you're ready.",
  },
  {
    q: "What payment methods can my customers use?",
    a: "Your customers can pay with all major cards plus Apple Pay, Google Pay, and PayPal, powered by Stripe and other supported gateways. You keep 100% of every sale, minus only the processor's standard fee.",
  },
  {
    q: "Is there a setup fee or a contract?",
    a: "Neither. No setup fees and no long-term contracts. Pay monthly, or save 20% by paying annually — your choice, and you can change it whenever you like.",
  },
];

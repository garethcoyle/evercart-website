// Pricing data — single source of truth for the /pricing page AND the
// homepage pricing teaser. Edit here and both stay in sync.
// Annual prices are the monthly-equivalent when billed annually (20% off).

export type Cadence = "monthly" | "annual";

export type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  tagline: string;
  featured?: boolean;
  /** Name of the plan whose features this plan builds on (for "Everything in X, plus"). */
  inherits?: string;
  /** Incremental features shown on the /pricing cards (full list for the base plan). */
  features: string[];
  /** Three punchy items shown on the homepage teaser. */
  highlights: string[];
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 9,
    annualPrice: 7,
    tagline: "Launch your store and make your first sales.",
    features: [
      "Unlimited products",
      "40+ premium themes",
      "Custom domain + SSL",
      "0% transaction fees",
      "Secure, fast checkout",
      "Basic analytics (30 days)",
      "Unlimited discount codes",
      "Email support",
    ],
    highlights: [
      "Unlimited products",
      "40+ premium themes",
      "0% transaction fees",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 29,
    annualPrice: 23,
    tagline: "The full toolkit to grow and market your store.",
    featured: true,
    inherits: "Starter",
    features: [
      "Evercart AI for products & photos",
      "Abandoned cart recovery",
      "Customer accounts",
      "Gift cards",
      "Full analytics + history",
      "Staff accounts (3)",
      "Priority support",
    ],
    highlights: [
      "Evercart AI built in",
      "Abandoned cart recovery",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 79,
    annualPrice: 63,
    tagline: "No limits. No compromises. Total control.",
    inherits: "Growth",
    features: [
      "AI analytics insights",
      "Multi-currency checkout",
      "API access",
      "Advanced analytics + exports",
      "Staff accounts (10)",
      "Priority support + onboarding",
    ],
    highlights: [
      "AI analytics insights",
      "Multi-currency checkout",
      "API access",
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
    title: "Unlimited products",
    description: "List as much as you like on every plan, from day one.",
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

// Full feature comparison matrix (Evercart tiers).
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
      { label: "Products", starter: "Unlimited", growth: "Unlimited", pro: "Unlimited" },
      { label: "Gift cards", starter: false, growth: true, pro: true },
    ],
  },
  {
    heading: "Design & domain",
    rows: [
      { label: "Premium themes", starter: "40+", growth: "40+", pro: "40+" },
      { label: "Custom domain + SSL", starter: true, growth: true, pro: true },
    ],
  },
  {
    heading: "Evercart AI",
    rows: [
      { label: "AI product descriptions", starter: false, growth: true, pro: true },
      { label: "AI photo polish", starter: false, growth: true, pro: true },
      { label: "AI analytics insights", starter: false, growth: false, pro: true },
    ],
  },
  {
    heading: "Selling",
    rows: [
      { label: "Transaction fees", starter: "0%", growth: "0%", pro: "0%" },
      { label: "Discount codes", starter: "Unlimited", growth: "Unlimited", pro: "Unlimited" },
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
      { label: "Support", starter: "Email", growth: "Priority", pro: "Priority + onboarding" },
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

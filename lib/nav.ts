// Navigation configuration shared by Header, Footer, and sitemap.
// Edit here to update everywhere.

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavGroup = {
  heading: string;
  items: NavLink[];
};

// Products — grouped into Build / Sell / Manage for the desktop dropdown.
// The flat PRODUCT_LINKS list below is derived from these groups and used
// for the footer + mobile menu + sitemap.
export const PRODUCT_GROUPS: NavGroup[] = [
  {
    heading: "Build",
    items: [
      {
        href: "/products/website-builder",
        label: "Website Builder",
        description: "Section-based, restraint by default",
      },
      {
        href: "/products/themes",
        label: "Themes",
        description: "40+ premium themes to start from",
      },
      {
        href: "/products/domains",
        label: "Domains",
        description: "Free subdomain, custom domain included",
      },
    ],
  },
  {
    heading: "Sell",
    items: [
      {
        href: "/products/payments",
        label: "Payments",
        description: "Stripe, PayPal, and major cards",
      },
      {
        href: "/products/checkout",
        label: "Checkout",
        description: "Fast, mobile-perfect, conversion-tuned",
      },
      {
        href: "/products/discounts",
        label: "Discounts",
        description: "Codes, automatic discounts, bundles",
      },
    ],
  },
  {
    heading: "Manage",
    items: [
      {
        href: "/products/customer-accounts",
        label: "Customer Accounts",
        description: "Lightweight, respects your customer's time",
      },
      {
        href: "/products/analytics",
        label: "Analytics",
        description: "Plain-English answers, not just charts",
      },
      {
        href: "/products/seo-tools",
        label: "SEO Tools",
        description: "Built to be found",
      },
    ],
  },
];

// Flat list of all product links — used by Footer, mobile menu, sitemap.
export const PRODUCT_LINKS: ReadonlyArray<{ href: string; label: string }> =
  PRODUCT_GROUPS.flatMap((g) =>
    g.items.map((i) => ({ href: i.href, label: i.label })),
  );

export const RESOURCE_LINKS: ReadonlyArray<NavLink> = [
  {
    href: "/resources/help-centre",
    label: "Help Centre",
    description: "Guides and answers, written by people who use it",
  },
  {
    href: "/resources/blog",
    label: "Blog",
    description: "Notes on building and running an online store",
  },
  {
    href: "/resources/guides",
    label: "Guides",
    description: "Long-form playbooks for growth",
  },
];

export const COMPANY_LINKS = [
  { href: "/about", label: "About Evercart" },
  { href: "/careers", label: "Careers" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/refund", label: "Refund policy" },
  { href: "/legal/cookie", label: "Cookies" },
] as const;

// Social media — TODO: confirm actual handles before launch.
export type SocialPlatform =
  | "instagram"
  | "youtube"
  | "linkedin"
  | "facebook"
  | "x";

export const SOCIAL_LINKS: ReadonlyArray<{
  href: string;
  label: string;
  platform: SocialPlatform;
}> = [
  { href: "https://instagram.com/evercart", label: "Instagram", platform: "instagram" },
  { href: "https://youtube.com/@evercart", label: "YouTube", platform: "youtube" },
  { href: "https://linkedin.com/company/evercart", label: "LinkedIn", platform: "linkedin" },
  { href: "https://facebook.com/evercart", label: "Facebook", platform: "facebook" },
  { href: "https://x.com/evercart", label: "X", platform: "x" },
];

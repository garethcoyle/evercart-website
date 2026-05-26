// Navigation configuration shared by Header, Footer, and sitemap.
// Edit here to update everywhere.

export const PRODUCT_LINKS = [
  { href: "/products/website-builder", label: "Website Builder" },
  { href: "/products/themes", label: "Themes" },
  { href: "/products/domains", label: "Domains" },
  { href: "/products/customer-accounts", label: "Customer Accounts" },
  { href: "/products/discounts", label: "Discounts" },
  { href: "/products/analytics", label: "Analytics" },
  { href: "/products/seo-tools", label: "SEO Tools" },
  { href: "/products/payments", label: "Payments" },
  { href: "/products/checkout", label: "Checkout" },
] as const;

export const RESOURCE_LINKS = [
  { href: "/resources/help-centre", label: "Help Centre" },
  { href: "/resources/blog", label: "Blog" },
  { href: "/resources/guides", label: "Guides" },
] as const;

export const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/refund", label: "Refund policy" },
  { href: "/legal/cookie", label: "Cookies" },
] as const;

// Social media — TODO: confirm actual handles before launch.
// These are placeholders based on the Evercart brand.
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

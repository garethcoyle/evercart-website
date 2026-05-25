import type { MetadataRoute } from "next";

const BASE = "https://www.evercart.io";

const ROUTES = [
  { path: "/", priority: 1.0, changeFreq: "weekly" as const },
  { path: "/pricing", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/about", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFreq: "yearly" as const },
  { path: "/legal/privacy", priority: 0.3, changeFreq: "yearly" as const },
  { path: "/legal/terms", priority: 0.3, changeFreq: "yearly" as const },
  { path: "/legal/refund", priority: 0.3, changeFreq: "yearly" as const },
  { path: "/legal/cookie", priority: 0.3, changeFreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}

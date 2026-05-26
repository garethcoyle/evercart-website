import type { MetadataRoute } from "next";
import {
  PRODUCT_LINKS,
  RESOURCE_LINKS,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from "@/lib/nav";

const BASE = "https://www.evercart.io";

type Entry = {
  path: string;
  priority: number;
  changeFreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

const PRIMARY: Entry[] = [
  { path: "/", priority: 1.0, changeFreq: "weekly" },
  { path: "/pricing", priority: 0.9, changeFreq: "monthly" },
  { path: "/sitemap", priority: 0.3, changeFreq: "monthly" },
];

const PRODUCT_ENTRIES: Entry[] = PRODUCT_LINKS.map((l) => ({
  path: l.href,
  priority: 0.7,
  changeFreq: "monthly",
}));

const RESOURCE_ENTRIES: Entry[] = RESOURCE_LINKS.map((l) => ({
  path: l.href,
  priority: 0.6,
  changeFreq: "weekly",
}));

const COMPANY_ENTRIES: Entry[] = COMPANY_LINKS.map((l) => ({
  path: l.href,
  priority: 0.6,
  changeFreq: "monthly",
}));

const LEGAL_ENTRIES: Entry[] = LEGAL_LINKS.map((l) => ({
  path: l.href,
  priority: 0.3,
  changeFreq: "yearly",
}));

const ROUTES = [
  ...PRIMARY,
  ...PRODUCT_ENTRIES,
  ...RESOURCE_ENTRIES,
  ...COMPANY_ENTRIES,
  ...LEGAL_ENTRIES,
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

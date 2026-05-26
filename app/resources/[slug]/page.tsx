import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

const RESOURCES: Record<
  string,
  { title: string; description: string }
> = {
  "help-centre": {
    title: "Help Centre",
    description:
      "Guides, walkthroughs, and answers to the questions merchants ask most often. Searchable and written by people who use Evercart every day.",
  },
  blog: {
    title: "Blog",
    description:
      "Notes on building, selling, and running an online store with care. New posts each fortnight.",
  },
  guides: {
    title: "Guides",
    description:
      "Long-form playbooks for launching, marketing, and growing your store. From your first sale to your hundred-thousandth.",
  },
};

export function generateStaticParams() {
  return Object.keys(RESOURCES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = RESOURCES[slug];
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = RESOURCES[slug];
  if (!item) notFound();
  return (
    <StubPage
      eyebrow="Resources"
      title={item.title}
      description={item.description}
      parentHref="/"
      parentLabel="home"
    />
  );
}

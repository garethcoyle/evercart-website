import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team building Evercart. Open roles and what it's like to work with us.",
};

export default function CareersPage() {
  return (
    <StubPage
      eyebrow="Company"
      title="Careers at Evercart"
      description="We're a small team building the e-commerce platform we always wanted. When roles open up, they'll be listed here."
      parentHref="/"
      parentLabel="home"
    />
  );
}

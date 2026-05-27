import type { Metadata } from "next";
import { StubPage } from "@/components/StubPage";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Announcements, milestones, and press resources from Evercart.",
};

export default function NewsroomPage() {
  return (
    <StubPage
      eyebrow="Company"
      title="Newsroom"
      description="Announcements, milestones, and press resources from Evercart. Once we have news worth sharing, it'll live here."
      parentHref="/"
      parentLabel="home"
    />
  );
}

import { Container } from "@/components/ui/Container";

/**
 * SectionBreak — quiet divider between two sections.
 *
 * Matches the hairlines used inside the WhatYouGet section
 * (divide-y divide-line): a 1px line in `line` (#E5E5E5) that
 * spans the container width. No internal padding — the
 * surrounding sections' own py provides the breathing room.
 */
export function SectionBreak() {
  return (
    <div className="bg-offwhite">
      <Container size="hero">
        <div aria-hidden className="h-px bg-line" />
      </Container>
    </div>
  );
}

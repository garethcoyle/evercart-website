import { Container } from "@/components/ui/Container";

/**
 * SectionBreak — a quiet divider between two adjacent sections.
 *
 * Single thin hairline in the paper (white) colour, centred against
 * the offwhite section backgrounds. Subtle and editorial — does the
 * work without announcing itself.
 */
export function SectionBreak() {
  return (
    <div className="bg-offwhite">
      <Container size="hero">
        <div className="flex items-center justify-center py-10 md:py-14">
          <span aria-hidden className="block h-px w-24 md:w-32 bg-paper" />
        </div>
      </Container>
    </div>
  );
}

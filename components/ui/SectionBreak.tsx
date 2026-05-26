import { Container } from "@/components/ui/Container";

/**
 * SectionBreak — a quiet visual divider between two adjacent sections.
 *
 * Centred Evercart mark flanked by two short hairlines. Editorial,
 * restrained, brand-affirming. Use sparingly — once per page.
 */
export function SectionBreak() {
  return (
    <div className="bg-paper">
      <Container size="hero">
        <div className="flex items-center justify-center gap-5 py-12 md:py-16">
          <span className="block h-px w-12 md:w-20 bg-line" />
          <span
            aria-hidden
            className="text-[11px] font-extrabold tracking-[0.35em] uppercase text-meta"
          >
            E
          </span>
          <span className="block h-px w-12 md:w-20 bg-line" />
        </div>
      </Container>
    </div>
  );
}

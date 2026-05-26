import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * FounderMoment section
 *
 * No photo on the homepage — the typography carries the moment.
 * Quote sits prominently; attribution underneath like a signed letter.
 * The full story lives on /about.
 */
export function FounderMoment() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <Container size="prose">
        <div className="max-w-[720px] mx-auto text-center">
          <Reveal>
            <p className="label">Behind Evercart</p>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="mt-10 text-[24px] md:text-[30px] font-medium text-ink leading-[1.4] tracking-[-0.015em]">
              &ldquo;I built my first online store while I was studying for
              my law degree. I had no idea what I was doing — but I learned
              fast. And I learned that the freedom of working for yourself
              is hard to give back once you&rsquo;ve had it. I qualified as
              an attorney and practised for years. Evercart is what I
              quietly worked on the whole way: the platform I wish I&rsquo;d
              had on my first sale, and the one I want in the hands of
              everyone about to make theirs.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="block h-px w-8 bg-line" />
              <div className="text-center">
                <p className="text-[13px] font-bold text-ink">Gareth Coyle</p>
                <p className="text-[12px] text-meta mt-0.5">
                  Founder, Evercart
                </p>
              </div>
              <span className="block h-px w-8 bg-line" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

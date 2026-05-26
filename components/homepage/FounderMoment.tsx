import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * FounderMoment section
 *
 * Humanises the brand. Sits between Pricing and the Closing CTA so the
 * final read before conversion is a person, not a feature list.
 *
 * --- CONTENT TO REPLACE ---
 *
 *  1. Founder photo — drop a square JPG/PNG at /public/founder.jpg
 *     (or update the src below). Roughly 400×400, head-and-shoulders,
 *     same off-white background as the section if possible.
 *  2. Name — replace the [FOUNDER NAME] placeholder.
 *  3. Role — "Founder, Evercart" is fine; adjust if needed.
 *  4. Quote — replace the placeholder paragraph with the real origin
 *     story. Aim for 50–90 words. Voice should feel like Evercart's:
 *     restrained, confident, specific. The first sentence should
 *     state what was broken; the rest should state what you wanted
 *     instead.
 *
 * Until the real content is in, the section renders with visible
 * placeholders so it's obvious where the gaps are.
 */
export function FounderMoment() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <Container size="prose">
        <div className="max-w-[640px] mx-auto text-center">
          <Reveal>
            <p className="label">Behind Evercart</p>
          </Reveal>

          {/* TODO: replace placeholder div with a real photo
              <Image src="/founder.jpg" alt="Founder portrait" width={104} height={104} className="..." />
          */}
          <Reveal delay={0.06}>
            <div className="mt-10 inline-flex items-center justify-center w-[104px] h-[104px] rounded-full bg-surface border-2 border-dashed border-line text-meta">
              <span className="text-[9px] uppercase tracking-[0.14em] font-bold">
                Photo
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-[14px] font-bold text-ink">
              [FOUNDER NAME]
            </p>
            <p className="text-[13px] text-meta mt-1">
              Founder, Evercart
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <blockquote className="mt-10 text-[22px] md:text-[26px] font-medium text-ink leading-[1.4] tracking-[-0.012em]">
              &ldquo;[Origin paragraph goes here. What was broken about
              the existing tools. What I wanted to build instead. Who
              I&rsquo;m building it for. Keep it to roughly 50&ndash;90
              words — short enough to read in one breath, long enough
              to mean something.]&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

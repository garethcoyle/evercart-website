import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * FounderMoment section
 *
 * Sits between Pricing and the Closing CTA so the final read before
 * conversion is a person, not a feature list. The full origin story
 * lives on /about — this section is the elevator pitch.
 */
export function FounderMoment() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <Container size="prose">
        <div className="max-w-[640px] mx-auto text-center">
          <Reveal>
            <p className="label">Behind Evercart</p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10 inline-block">
              <Image
                src="/founder.jpg"
                alt="Gareth Coyle, founder of Evercart"
                width={128}
                height={128}
                className="rounded-full object-cover border border-line"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-[14px] font-bold text-ink">Gareth Coyle</p>
            <p className="text-[13px] text-meta mt-1">Founder, Evercart</p>
          </Reveal>

          <Reveal delay={0.18}>
            <blockquote className="mt-10 text-[22px] md:text-[26px] font-medium text-ink leading-[1.4] tracking-[-0.012em]">
              &ldquo;I started my first online store while studying law. It
              taught me more than the textbooks did, and gave me something I
              didn&rsquo;t expect: a kind of freedom that&rsquo;s hard to
              walk away from. I qualified and practised as an attorney, but
              the pull never left. Evercart is the platform I wish I&rsquo;d
              had on my first sale — for people doing it for the first time,
              without the complexity and cost they shouldn&rsquo;t have to
              inherit.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * FounderMoment section
 *
 * Multi-paragraph founder letter. Opening line set as a pull-quote;
 * body paragraphs in regular reading size. Signed at the bottom in
 * letterhead style. No photo on the homepage — the full version
 * with portrait will live on /about.
 */
export function FounderMoment() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <Container size="prose">
        <div className="max-w-[680px] mx-auto">
          <Reveal>
            <p className="label text-center">Behind Evercart</p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-10 text-[26px] md:text-[32px] font-semibold text-ink leading-[1.3] tracking-[-0.018em] text-center">
              A moment more than a decade in the making.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 space-y-5 text-[16px] md:text-[17px] leading-[1.65] text-meta">
              <p>
                My passion for e-commerce was born at university. I was
                studying for my law degree when I launched my own online
                store on the side. I had no idea what I was doing, but I
                learned fast &mdash; and it taught me more about running a
                business than any textbook ever could.
              </p>
              <p>
                It also gave me something I didn&rsquo;t expect: freedom.
                Financial freedom. Freedom over my schedule. Freedom over my
                future. Once you&rsquo;ve tasted that, it&rsquo;s hard to go
                back.
              </p>
              <p>
                I went on to practise as an attorney, but the e-commerce bug
                never left. For years, I quietly held onto a dream of
                building my own platform &mdash; the one I wish I&rsquo;d
                had as a law student fumbling through my first sale.
              </p>
              <p className="text-ink font-medium">That platform is Evercart.</p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-12 flex items-center justify-center gap-3">
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

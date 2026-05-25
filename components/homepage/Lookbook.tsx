import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HOMEPAGE_IMAGERY } from "@/lib/homepage-imagery";

export function Lookbook() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="label">Built for</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
                Independent makers.<br />
                Boutique brands.<br />
                Shops with a point of view.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 mt-8 md:mt-0 md:flex md:items-end">
            <Reveal delay={0.12}>
              <p className="text-[16px] leading-[1.65] text-meta max-w-[440px]">
                Evercart isn&rsquo;t for everyone. It&rsquo;s for the small shop
                where every product is chosen, every photograph is shot, and
                every order matters. If that sounds like you, you&rsquo;re in
                the right place.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Lookbook grid — asymmetric, editorial */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-6">
          {HOMEPAGE_IMAGERY.lookbook.map((shot, i) => {
            // Editorial sizing — break the symmetric 4-up grid
            // First photo wider, then mixed widths
            const spans = [
              "col-span-2 md:col-span-7 aspect-[4/3]",
              "col-span-2 md:col-span-5 aspect-[4/3]",
              "col-span-1 md:col-span-5 aspect-[3/4]",
              "col-span-1 md:col-span-7 aspect-[3/4] md:aspect-[4/3]",
            ];
            return (
              <Reveal
                key={shot.src}
                delay={0.05 * i + 0.18}
                className={spans[i]}
              >
                <figure className="h-full">
                  <div className="relative h-full w-full rounded-[10px] overflow-hidden bg-surface">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[12px] italic text-meta-700">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

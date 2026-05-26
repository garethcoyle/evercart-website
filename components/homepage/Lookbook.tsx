import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Lookbook — "The brands you'll know next."
 *
 * Three documentary photographs of independent brands in their working
 * environments. Layout: tall portrait left, two landscapes stacked right.
 * Text sits above the photo grid to give the photographs breathing room.
 */
export function Lookbook() {
  return (
    <section className="py-24 md:py-36 bg-offwhite">
      <Container size="hero">
        {/* Text — full width, capped, left-aligned */}
        <div className="max-w-[680px]">
          <Reveal>
            <p className="label">Designed for</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
              The brands<br />you&rsquo;ll know next.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 text-[16px] leading-[1.65] text-meta max-w-[520px]">
              Ceramics studios. Specialty coffee. Independent skincare.
              Apparel labels. Evercart is the platform behind brands built
              with care &mdash; by people who refuse to compromise on either
              craft or how it&rsquo;s seen.
            </p>
          </Reveal>
        </div>

        {/* Photo grid — portrait left (5 cols), two landscapes stacked right (7 cols) */}
        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-3 md:gap-4">
          <Reveal delay={0.18} className="col-span-12 md:col-span-5">
            <div
              className="relative w-full overflow-hidden rounded-[10px] bg-surface"
              style={{ aspectRatio: "2/3" }}
            >
              <Image
                src="/lookbook/storefront-on-laptop.jpg"
                alt="A premium fashion storefront viewed on a laptop"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-4">
            <Reveal delay={0.24}>
              <div
                className="relative w-full overflow-hidden rounded-[10px] bg-surface"
                style={{ aspectRatio: "5/3" }}
              >
                <Image
                  src="/lookbook/retail-checkout.jpg"
                  alt="Customer paying at the counter of an independent retail boutique"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div
                className="relative w-full overflow-hidden rounded-[10px] bg-surface"
                style={{ aspectRatio: "5/3" }}
              >
                <Image
                  src="/lookbook/order-fulfilment.jpg"
                  alt="Merchant fulfilling an order from their warehouse"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

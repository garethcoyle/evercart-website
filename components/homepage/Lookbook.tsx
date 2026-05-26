import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Lookbook
 *
 * Four documentary-style photographs of makers and merchants — the kind
 * of brands Evercart is built for. Deliberately avoids polished catalogue
 * product shots (which read as stock) in favour of process, hands, and
 * workspace moments.
 *
 * Image URLs are Unsplash photo IDs. If any fail to load on deploy,
 * swap the photo ID in the array below — the rest of the layout is
 * source-agnostic.
 */

const PHOTOS = [
  {
    id: "1565193566173-7a0ee3dbe261",
    alt: "Hands shaping clay on a pottery wheel",
    aspect: "4/5", // taller
  },
  {
    id: "1487530811176-3780de880c2d",
    alt: "Florist arranging seasonal blooms at a workbench",
    aspect: "1/1", // square
  },
  {
    id: "1559496417951-3e63d7c46c84",
    alt: "Specialty coffee being weighed and bagged",
    aspect: "1/1", // square
  },
  {
    id: "1558769132-cb1aea458c5e",
    alt: "Garment maker at work on a vintage sewing machine",
    aspect: "4/5", // taller
  },
] as const;

export function Lookbook() {
  return (
    <section className="py-24 md:py-36 bg-offwhite">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-16 items-end">
          {/* Text column */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="label">Designed for</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
                Online stores that take<br />
                design seriously.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-[16px] leading-[1.65] text-meta max-w-[440px]">
                Whether you make ceramics, roast coffee, or build the brand
                you&rsquo;ve been planning for years, your online store
                deserves to look like it was designed. Evercart is built for
                brands that treat design as a competitive edge — not an
                afterthought.
              </p>
            </Reveal>
          </div>

          {/* Photo grid */}
          <div className="md:col-span-7 mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {PHOTOS.map((photo, i) => (
                <Reveal key={photo.id} delay={0.1 + i * 0.06}>
                  <div
                    className="relative w-full overflow-hidden rounded-[10px] bg-surface"
                    style={{ aspectRatio: photo.aspect }}
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&q=80&w=900`}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

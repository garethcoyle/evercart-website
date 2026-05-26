import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Lookbook — "The brands you'll know next."
 *
 * Four documentary photographs of independent brands in their working
 * environments — retail interiors, packaging, photography setups,
 * studio spaces. Deliberately reads as businesses operating, not as
 * abstract craft.
 *
 * Image URLs are Unsplash photo IDs. If any fail to load on deploy,
 * swap the photo ID in the PHOTOS array — the rest of the layout
 * is source-agnostic.
 */

const PHOTOS = [
  {
    id: "1441986300917-64674bd600d8",
    alt: "Independent retail interior with curated product display",
    aspect: "4/5",
  },
  {
    id: "1607082348824-0a96f2a4b9da",
    alt: "Branded packaging being prepared for shipping",
    aspect: "1/1",
  },
  {
    id: "1554118811-1e0d58224f24",
    alt: "Specialty coffee bar with branded environment",
    aspect: "1/1",
  },
  {
    id: "1556909114-f6e7ad7d3136",
    alt: "Independent design studio workspace",
    aspect: "4/5",
  },
] as const;

export function Lookbook() {
  return (
    <section className="py-24 md:py-36 bg-offwhite">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-16 items-end">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label">Designed for</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
                The brands<br />you&rsquo;ll know next.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-[16px] leading-[1.65] text-meta max-w-[440px]">
                Ceramics studios. Specialty coffee. Independent skincare.
                Apparel labels. Evercart is the platform behind brands built
                with care — by people who refuse to compromise on either
                craft or how it&rsquo;s seen.
              </p>
            </Reveal>
          </div>

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

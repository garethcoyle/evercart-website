import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Reveal } from "@/components/motion/Reveal";

export function InsideEvercart() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container size="hero">
        <Reveal>
          <p className="label">Inside Evercart</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05] max-w-[820px]">
            The dashboard a maker would actually use.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-[600px] text-[17px] leading-[1.55] text-meta">
            Revenue at the top. Orders the moment they arrive. Your store URL
            one click from copy. No dashboard explorers, no command palettes,
            no nested menus to dig through on a Tuesday morning.
          </p>
        </Reveal>

        <Reveal delay={0.2} y={20}>
          <div className="mt-16">
            <BrowserFrame url="app.evercart.io">
              <Image
                src="/product/dashboard-home.png"
                width={2400}
                height={1350}
                alt="Evercart dashboard for Halo Skin Co. showing revenue, orders, customers, and recent activity."
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority={false}
                className="block w-full h-auto"
              />
            </BrowserFrame>
          </div>
        </Reveal>

        {/* Secondary screenshots strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { src: "/product/dashboard-analytics.png", label: "Analytics", alt: "Analytics view with pageviews, conversion rate, and top products." },
            { src: "/product/dashboard-orders.png", label: "Orders", alt: "Orders list with fulfilment and payment status for each customer." },
            { src: "/product/dashboard-products.png", label: "Products", alt: "Product catalogue with inventory levels and status." },
          ].map((shot, i) => (
            <Reveal key={shot.src} delay={0.05 * i + 0.3}>
              <figure>
                <BrowserFrame url="app.evercart.io" shadow={false}>
                  <Image
                    src={shot.src}
                    width={1200}
                    height={675}
                    alt={shot.alt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="block w-full h-auto"
                  />
                </BrowserFrame>
                <figcaption className="mt-3 text-[11px] uppercase tracking-label font-bold text-meta">
                  {shot.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

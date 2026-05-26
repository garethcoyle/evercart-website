import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Reveal } from "@/components/motion/Reveal";

const VIEWS = [
  {
    src: "/product/dashboard-analytics.png",
    label: "Analytics",
    description: "Pageviews, conversion, top products. The story your online store is telling.",
    alt: "Analytics view with pageviews, conversion rate, and top products by revenue.",
  },
  {
    src: "/product/dashboard-orders.png",
    label: "Orders",
    description: "Filter, search, fulfil. Built for the inbox you actually live in.",
    alt: "Orders list showing customer, order number, date, payment, and fulfilment status.",
  },
  {
    src: "/product/dashboard-products.png",
    label: "Products",
    description: "Inventory, pricing, status. A catalogue you can manage in minutes.",
    alt: "Products catalogue with inventory levels, pricing, and status indicators.",
  },
];

export function InsideEvercart() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container size="hero">
        <div className="md:grid md:grid-cols-12 md:gap-12 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label">Inside the dashboard</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">
                A dashboard you&rsquo;ll actually want to open.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 mt-6 md:mt-0">
            <Reveal delay={0.12}>
              <p className="text-[17px] leading-[1.55] text-meta max-w-[440px]">
                Every view in Evercart is considered. Revenue at the top.
                Orders the moment they arrive. Analytics that don&rsquo;t
                require a guide. Built for daily use — not designed for
                a demo.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Three deeper views, each given room to breathe */}
        <div className="mt-20 space-y-20 md:space-y-28">
          {VIEWS.map((view, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={view.src}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={
                    reverse
                      ? "lg:col-span-8 lg:order-2"
                      : "lg:col-span-8 lg:order-1"
                  }
                >
                  <Reveal y={20}>
                    <BrowserFrame url="app.evercart.io" shadow={true}>
                      <Image
                        src={view.src}
                        width={2400}
                        height={1350}
                        alt={view.alt}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="block w-full h-auto"
                      />
                    </BrowserFrame>
                  </Reveal>
                </div>
                <div
                  className={
                    reverse
                      ? "lg:col-span-4 lg:order-1 lg:pr-6"
                      : "lg:col-span-4 lg:order-2 lg:pl-6"
                  }
                >
                  <Reveal delay={0.08}>
                    <p className="label-ink">{view.label}</p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="mt-4 text-[18px] leading-[1.5] text-ink font-semibold tracking-[-0.01em]">
                      {view.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { HOMEPAGE_IMAGERY } from "@/lib/homepage-imagery";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type BlockProps = {
  number: string;
  title: string;
  body: string;
  imagePosition: "left" | "right";
  children: ReactNode;
};

function Block({ number, title, body, imagePosition, children }: BlockProps) {
  const imageOnLeft = imagePosition === "left";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 md:py-24">
      <div
        className={cn(
          "lg:col-span-7",
          imageOnLeft ? "lg:order-1" : "lg:order-2",
        )}
      >
        <Reveal y={20}>{children}</Reveal>
      </div>
      <div
        className={cn(
          "lg:col-span-5",
          imageOnLeft ? "lg:order-2" : "lg:order-1",
        )}
      >
        <Reveal>
          <span
            aria-hidden
            className="font-extrabold text-[64px] md:text-[88px] leading-[0.85] tracking-[-0.04em] text-emerald block"
          >
            {number}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="mt-4 text-[28px] md:text-[36px] font-extrabold tracking-[-0.02em] leading-[1.1] text-ink">
            {title}
          </h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 text-[16px] leading-[1.6] text-meta max-w-[460px]">
            {body}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function WhatYouGet() {
  return (
    <section className="py-20 md:py-28">
      <Container size="hero">
        <Reveal>
          <p className="label">What you get</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 text-[40px] md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05] max-w-[820px]">
            Four things you&rsquo;ll appreciate by Tuesday.
          </h2>
        </Reveal>

        <div className="mt-6 divide-y divide-line">
          {/* 01 — Storefront / builder */}
          <Block
            number="01"
            title="A storefront that looks made, not assembled."
            body="A section-based builder with restraint by default and 40+ premium themes to start from. Your shop looks like yours — not like a template you share with thousands of other stores."
            imagePosition="right"
          >
            <div className="relative aspect-[5/4] rounded-[14px] overflow-hidden bg-surface">
              <Image
                src={HOMEPAGE_IMAGERY.storefrontScene.src}
                alt={HOMEPAGE_IMAGERY.storefrontScene.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Block>

          {/* 02 — Multi-gateway checkout */}
          <Block
            number="02"
            title="Sell with whatever your customers carry."
            body="Stripe, PayPal, and PayFast in the box. Set up one or all three. Zero transaction fees on every plan — we charge for software, not the privilege of taking payment."
            imagePosition="left"
          >
            <div className="relative aspect-[5/4] rounded-[14px] overflow-hidden bg-surface">
              <Image
                src={HOMEPAGE_IMAGERY.objects.src}
                alt={HOMEPAGE_IMAGERY.objects.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Block>

          {/* 03 — Domain */}
          <Block
            number="03"
            title="Your shop URL on us, or bring your own."
            body="Every store gets a yourshop.evercart.io subdomain from day one. Connect a custom domain whenever you&rsquo;re ready — included on every plan, SSL handled for you."
            imagePosition="right"
          >
            <div className="aspect-[5/4] rounded-[14px] bg-offwhite border border-line p-10 md:p-14 flex flex-col justify-center">
              <div className="space-y-5">
                <div className="inline-flex items-center bg-paper border border-line rounded-md px-4 py-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                  <span className="text-[11px] text-meta font-medium tracking-tight mr-2">
                    https://
                  </span>
                  <span className="text-[15px] font-semibold text-ink">
                    haloskin.evercart.io
                  </span>
                </div>
                <div className="flex items-center gap-3 pl-4">
                  <span className="text-[11px] uppercase tracking-label font-bold text-emerald">
                    or
                  </span>
                </div>
                <div className="inline-flex items-center bg-paper border border-line rounded-md px-4 py-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                  <span className="text-[11px] text-meta font-medium tracking-tight mr-2">
                    https://
                  </span>
                  <span className="text-[15px] font-semibold text-ink">
                    haloskin.co
                  </span>
                </div>
              </div>
            </div>
          </Block>

          {/* 04 — Support */}
          <Block
            number="04"
            title="Support that lives where the work happens."
            body="Open the chat drawer in your dashboard. Real people answer — no ticket numbers, no email chains, no bot pretending to be a person. Faster on Growth, dedicated on Pro."
            imagePosition="left"
          >
            <div className="relative aspect-[5/4] rounded-[14px] overflow-hidden bg-surface">
              <Image
                src={HOMEPAGE_IMAGERY.workspace.src}
                alt={HOMEPAGE_IMAGERY.workspace.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Block>
        </div>
      </Container>
    </section>
  );
}

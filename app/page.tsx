import { Hero } from "@/components/homepage/Hero";
import { InsideEvercart } from "@/components/homepage/InsideEvercart";
import { WhatYouGet } from "@/components/homepage/WhatYouGet";
import { Lookbook } from "@/components/homepage/Lookbook";
import { SectionBreak } from "@/components/ui/SectionBreak";
import { EvercartAI } from "@/components/homepage/EvercartAI";
import { FounderMoment } from "@/components/homepage/FounderMoment";
import { PricingTeaser } from "@/components/homepage/PricingTeaser";
import { Closing } from "@/components/homepage/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InsideEvercart />
      <WhatYouGet />
      <Lookbook />
      <SectionBreak />
      <EvercartAI />
      <FounderMoment />
      <PricingTeaser />
      <Closing />
    </>
  );
}

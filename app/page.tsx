import { Hero } from "@/components/homepage/Hero";
import { InsideEvercart } from "@/components/homepage/InsideEvercart";
import { WhatYouGet } from "@/components/homepage/WhatYouGet";
import { Lookbook } from "@/components/homepage/Lookbook";
import { PricingTeaser } from "@/components/homepage/PricingTeaser";
import { Closing } from "@/components/homepage/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InsideEvercart />
      <WhatYouGet />
      <Lookbook />
      <PricingTeaser />
      <Closing />
    </>
  );
}

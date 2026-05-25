import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function Closing() {
  return (
    <section className="py-32 md:py-40 bg-ink text-paper">
      <Container size="hero">
        <div className="max-w-[920px] mx-auto text-center">
          <Reveal>
            <p
              className="text-[10px] uppercase tracking-label font-bold"
              style={{ color: "#3DBF79" }}
            >
              Open for beta
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-[48px] sm:text-[68px] lg:text-[88px] font-extrabold tracking-[-0.035em] leading-[0.98]">
              Open a shop<br />
              in a weekend.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button
                href="https://app.evercart.io/auth/signup"
                size="lg"
                className="bg-paper text-ink hover:bg-paper hover:-translate-y-px hover:shadow-[0_4px_12px_-2px_rgba(255,255,255,0.18)]"
              >
                Start for free
              </Button>
              <a
                href="https://app.evercart.io/auth/login"
                className="text-[14px] font-medium text-paper/65 hover:text-paper transition-colors duration-200 ease-apple"
              >
                Or sign in
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-10 text-[12px] text-paper/55">
              No credit card. Currently in beta. Launching summer 2026.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

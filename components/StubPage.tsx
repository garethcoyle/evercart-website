import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function StubPage({
  eyebrow,
  title,
  description,
  parentHref,
  parentLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  parentHref?: string;
  parentLabel?: string;
}) {
  return (
    <div className="py-32 md:py-44">
      <Container size="prose">
        <p className="label">{eyebrow}</p>
        <h1 className="mt-5 text-[44px] md:text-[64px] font-extrabold tracking-[-0.025em] leading-[1.05] text-ink">
          {title}
        </h1>
        <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-meta">
          {description}
        </p>
        <p className="mt-12 text-[14px] text-meta italic">
          This page is coming soon — we&rsquo;re building it out for the full
          launch.
        </p>
        {parentHref && parentLabel && (
          <Link
            href={parentHref}
            className="mt-10 inline-flex items-center gap-2 text-[14px] text-meta hover:text-ink transition-colors duration-200 ease-apple"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            Back to {parentLabel}
          </Link>
        )}
      </Container>
    </div>
  );
}

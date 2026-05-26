import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { LegalToc } from "./LegalToc";

export type LegalSectionData = {
  id: string;
  number: number;
  title: string;
  content: ReactNode;
};

export type LegalPageProps = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  summary?: ReactNode;
  sections: LegalSectionData[];
  contactName?: string;
  contactEmail: string;
};

export function LegalPage({
  title,
  effectiveDate,
  lastUpdated,
  version,
  summary,
  sections,
  contactName = "Evercart Legal",
  contactEmail,
}: LegalPageProps) {
  return (
    <div>
      {/* Page header */}
      <header className="bg-offwhite border-b border-line">
        <Container size="wide">
          <div className="py-14 md:py-20">
            <p className="label">Legal</p>
            <h1 className="mt-4 text-[36px] md:text-[52px] font-extrabold tracking-[-0.025em] leading-[1.05] text-ink">
              {title}
            </h1>
            <div className="mt-5 text-[12px] md:text-[13px] text-meta flex flex-wrap items-center gap-x-4 gap-y-1 font-medium">
              <span>Effective date: {effectiveDate}</span>
              <span className="text-line">·</span>
              <span>Last updated: {lastUpdated}</span>
              <span className="text-line">·</span>
              <span>Version {version}</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Body */}
      <Container size="wide">
        <div className="py-14 md:py-20 md:grid md:grid-cols-12 md:gap-16">
          <aside className="hidden md:block md:col-span-3">
            <LegalToc
              sections={sections.map((s) => ({
                id: s.id,
                number: s.number,
                title: s.title,
              }))}
            />
          </aside>

          <div className="md:col-span-9 max-w-[720px]">
            {summary && (
              <div className="rounded-xl bg-emerald/[0.08] border border-emerald/20 px-5 py-4 mb-12 text-[14px] leading-[1.65] text-ink">
                {summary}
              </div>
            )}

            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="mb-12 scroll-mt-24"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-emerald mb-2">
                  Section {s.number}
                </p>
                <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.015em] leading-[1.2] text-ink pb-4 mb-5 border-b border-line">
                  {s.title}
                </h2>
                <div className="legal-prose">{s.content}</div>
              </section>
            ))}

            {/* Contact card */}
            <div className="mt-16 bg-ink text-paper rounded-2xl p-6 md:p-8">
              <h3 className="text-[15px] font-bold mb-2">{contactName}</h3>
              <p className="text-[14px] leading-[1.7] text-paper/60">
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-emerald font-semibold hover:underline"
                >
                  {contactEmail}
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.evercart.io"
                  className="text-emerald font-semibold hover:underline"
                >
                  www.evercart.io
                </a>
              </p>
              <p className="mt-3 text-[13px] text-paper/60">
                We aim to respond to all enquiries within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

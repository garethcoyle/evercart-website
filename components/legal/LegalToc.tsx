"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; number: number; title: string };

export function LegalToc({ sections }: { sections: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost section that's currently in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <p className="text-[11px] uppercase tracking-[0.12em] font-bold text-meta mb-4">
        Contents
      </p>
      <ul className="flex flex-col">
        {sections.map((s) => {
          const active = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "block py-1.5 px-3 text-[12.5px] border-l-2 transition-colors duration-150 leading-[1.4]",
                  active
                    ? "text-ink border-emerald font-bold"
                    : "text-meta border-line hover:text-ink",
                )}
              >
                {s.number}. {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "highlight" | "warning" | "info";

export function CalloutBox({
  variant = "info",
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  const styles: Record<Variant, string> = {
    highlight: "bg-emerald/[0.08] border-emerald/20 text-ink",
    warning: "bg-[#FEF3E2] border-[#F59E0B]/20 text-ink",
    info: "bg-surface border-line text-meta-700",
  };

  return (
    <div
      className={cn(
        "rounded-lg border px-5 py-4 my-5 text-[14px] leading-[1.65]",
        styles[variant],
      )}
    >
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "hero" | "wide" | "prose" | "readable";
  className?: string;
};

const SIZE_CLASSES = {
  hero: "max-w-hero", // 1240px — heroes, full-bleed-ish content
  wide: "max-w-wide", // 1100px — most marketing content
  prose: "max-w-prose", // 760px — long-form copy
  readable: "max-w-readable", // 720px — legal pages
} as const;

export function Container({
  children,
  size = "hero",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 md:px-10",
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

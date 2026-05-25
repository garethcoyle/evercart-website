import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "emerald";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap " +
  "transition-all duration-200 ease-apple " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:-translate-y-px hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.18)] active:translate-y-0",
  secondary:
    "bg-paper text-ink border border-line hover:border-ink hover:-translate-y-px",
  ghost: "bg-transparent text-ink hover:bg-offwhite",
  emerald:
    "bg-emerald text-paper hover:-translate-y-px hover:shadow-[0_4px_12px_-2px_rgba(61,191,121,0.35)] active:translate-y-0",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px] rounded-[10px]",
  md: "h-11 px-5 text-[14px] rounded-[12px]",
  lg: "h-12 px-6 text-[15px] rounded-[14px]",
};

type ButtonAsLinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type ButtonAsButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const composed = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as ButtonAsLinkProps;
    const isExternal =
      external ?? (typeof href === "string" && /^https?:\/\//.test(href));

    if (isExternal) {
      // External (e.g. app.evercart.io) — plain <a>, no target=_blank per brief
      return (
        <a href={href} className={composed} {...anchorRest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={composed} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={composed}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}

import { type ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  url?: string;
  children: ReactNode;
  className?: string;
  shadow?: boolean;
};

/**
 * BrowserFrame
 *
 * Mimics a macOS-style browser window with traffic-light dots and a URL bar.
 * Used to frame storefront / dashboard screenshots and mockups so they read
 * as "this is the product running in a browser" rather than as a stray image.
 *
 * The frame itself is rendered as semantic markup — no img — so the chrome
 * stays sharp on retina without raster artifacts.
 */
export function BrowserFrame({
  url = "haloskin.evercart.io",
  children,
  className,
  shadow = true,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[14px] overflow-hidden bg-paper border border-line",
        shadow &&
          "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18),0_8px_20px_-8px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      {/* Chrome bar */}
      <div className="h-10 bg-surface border-b border-line flex items-center px-4 gap-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-paper border border-line rounded-md pl-2 pr-3 py-1 text-[11px] text-meta font-medium tracking-tight max-w-[300px] truncate flex items-center gap-1.5">
            <Lock size={9} strokeWidth={2.5} className="text-meta-700 shrink-0" aria-hidden />
            {url}
          </div>
        </div>
        {/* spacer to mirror the dots for visual centring */}
        <div className="w-[42px]" aria-hidden />
      </div>
      {/* Content */}
      <div className="bg-paper">{children}</div>
    </div>
  );
}

import Image from "next/image";
import { existsSync } from "fs";
import { join } from "path";
import { EvercartLogo } from "@/components/EvercartLogo";
import type { Platform } from "@/lib/compare";

/**
 * Renders a platform's brand mark for the comparison table.
 *
 * - Evercart: our own logo component.
 * - Competitors: if an official asset has been placed at
 *   /public/logos/{id}.svg (downloaded from the competitor's brand/press
 *   kit), it is used. Otherwise we fall back to a clean text wordmark.
 *
 * We deliberately do NOT recreate competitors' trademarked logo artwork.
 */
export function CompareLogo({ platform }: { platform: Platform }) {
  if (platform.own) {
    return <EvercartLogo height={20} className="text-ink" />;
  }

  const assetPath = `/logos/${platform.id}.svg`;
  const hasAsset = existsSync(
    join(process.cwd(), "public", "logos", `${platform.id}.svg`),
  );

  if (hasAsset) {
    return (
      <Image
        src={assetPath}
        alt={platform.name}
        width={120}
        height={24}
        className="h-5 w-auto object-contain opacity-80"
      />
    );
  }

  // Text wordmark fallback
  return (
    <span className="text-[16px] font-bold tracking-[-0.01em] text-meta-700">
      {platform.name}
    </span>
  );
}

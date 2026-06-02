import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
};

export function Logo({ className, showTagline = false, compact = false }: LogoProps) {
  const iconSize = compact ? 36 : 40;

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/40",
        className
      )}
      aria-label={`${siteConfig.name} - ${siteConfig.domain}`}
    >
      <Image
        src={siteConfig.logoIcon}
        alt=""
        width={iconSize}
        height={iconSize}
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        priority
      />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-[14px] font-semibold tracking-tight text-foreground sm:text-[15px] md:text-base">
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "block truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]",
            compact ? "hidden min-[380px]:block" : "block"
          )}
        >
          {siteConfig.domain}
        </span>
        {showTagline ? (
          <span className="mt-0.5 hidden truncate text-xs text-muted-foreground lg:block">
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

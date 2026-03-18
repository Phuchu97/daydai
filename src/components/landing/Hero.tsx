import Link from "next/link";
import { Section } from "./Section";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const defaultHeadline = "Xây dựng sản phẩm đột phá";
const defaultSubheadline =
  "Landing page base với Next.js — nhanh, SEO-friendly, dễ mở rộng. Bắt đầu ngay với base chuẩn này.";

export function Hero({
  headline = defaultHeadline,
  subheadline = defaultSubheadline,
  primaryCta = { label: "Bắt đầu ngay", href: "#contact" },
  secondaryCta = { label: "Tìm hiểu thêm", href: "#features" },
}: HeroProps) {
  return (
    <Section className="pb-12 pt-8 md:pb-20 md:pt-16" container={true}>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-opacity hover:opacity-90"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted hover:text-foreground"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { Section } from "./Section";

type CTAProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

const defaults = {
  title: "Sẵn sàng bắt đầu?",
  description: "Liên hệ với chúng tôi ngay hôm nay để được tư vấn và triển khai.",
  buttonLabel: "Liên hệ ngay",
  buttonHref: "#contact",
};

export function CTA({
  title = defaults.title,
  description = defaults.description,
  buttonLabel = defaults.buttonLabel,
  buttonHref = defaults.buttonHref,
}: CTAProps) {
  return (
    <Section id="contact" className="bg-muted/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-opacity hover:opacity-90"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </Section>
  );
}

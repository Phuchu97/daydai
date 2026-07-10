import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ContactCtaLabel } from "./ContactCtaLabel";
import { PhoneIcon } from "./ContactIcons";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type PhoneCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function PhoneCtaButton({ children, className }: PhoneCtaButtonProps) {
  return (
    <a
      href={PHONE_TEL}
      className={cn(
        "btn-lift inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_-16px_rgba(22,67,126,0.85)]",
        className,
      )}
    >
      <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
        {children}
      </ContactCtaLabel>
    </a>
  );
}

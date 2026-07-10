import { SiteShell } from "@/components/layout/SiteShell";
import { siteContainerClass } from "@/components/layout/siteContainer";
import { cn } from "@/lib/utils";

type MarketingPageLayoutProps = {
  children: React.ReactNode;
  showTopBar?: boolean;
};

export function MarketingPageLayout({
  children,
  showTopBar = false,
}: MarketingPageLayoutProps) {
  return (
    <SiteShell
      showTopBar={showTopBar}
      stackContactsAboveCartBar={false}
      mainClassName="py-8 sm:py-10"
    >
      <div className={cn(siteContainerClass, "space-y-8 sm:space-y-10")}>
        {children}
      </div>
    </SiteShell>
  );
}

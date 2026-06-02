import { SiteShell } from "@/components/layout/SiteShell";

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
      {children}
    </SiteShell>
  );
}

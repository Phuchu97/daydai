import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { StickyContacts } from "@/components/layout/StickyContacts";
import { StickyAddToCartBar } from "@/components/product/StickyAddToCartBar";

type SiteShellProps = {
  children: React.ReactNode;
  showTopBar?: boolean;
  showQuickCartBar?: boolean;
  stackContactsAboveCartBar?: boolean;
  mainId?: string;
  mainClassName?: string;
};

export function SiteShell({
  children,
  showTopBar = false,
  showQuickCartBar = false,
  stackContactsAboveCartBar = true,
  mainId = "main-content",
  mainClassName,
}: SiteShellProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader showTopBar={showTopBar} />
      <main
        id={mainId}
        className={cn(
          "site-main min-w-0 flex-1 overflow-x-hidden bg-background pb-page-safe",
          mainClassName
        )}
      >
        {children}
      </main>
      <Footer />
      <StickyContacts stackAboveCartBar={stackContactsAboveCartBar} />
      {showQuickCartBar ? <StickyAddToCartBar /> : null}
    </div>
  );
}

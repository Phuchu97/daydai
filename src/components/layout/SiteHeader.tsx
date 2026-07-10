import { Header } from "@/components/layout/Header";
import { StickyTopBar } from "@/components/layout/StickyTopBar";

type SiteHeaderProps = {
  showTopBar?: boolean;
};

export function SiteHeader({ showTopBar = false }: SiteHeaderProps) {
  return (
    <div className="sticky top-0 z-50 w-full">
      {showTopBar ? <StickyTopBar /> : null}
      <Header />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { QuoteIcon } from "@/components/contact/ContactIcons";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export const metadata: Metadata = {
  title: "Không tìm thấy trang",
  description: "Trang bạn truy cập không tồn tại hoặc đã được chuyển đi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <MarketingPageLayout>
      <section className="section-intro py-12 sm:py-16">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
          Không tìm thấy trang bạn cần
        </h1>
        <p className="mx-auto mt-3 max-w-[62ch] text-sm leading-7 text-muted-foreground sm:text-base">
          Có thể đường dẫn đã thay đổi hoặc bị sai. Bạn có thể quay lại trang chủ
          hoặc truy cập các trang sản phẩm, báo giá và tư vấn bên dưới.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="btn-lift inline-flex justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Về trang chủ
          </Link>
          <Link
            href="/san-pham"
            className="btn-lift inline-flex justify-center rounded-xl border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/70"
          >
            Xem sản phẩm
          </Link>
          <Link
            href="/bao-gia-day-dai-thep"
            className="btn-lift inline-flex items-center justify-center rounded-xl border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/70"
          >
            <ContactCtaLabel icon={<QuoteIcon className="h-4 w-4" />}>
              Xem báo giá
            </ContactCtaLabel>
          </Link>
        </div>
      </section>
    </MarketingPageLayout>
  );
}

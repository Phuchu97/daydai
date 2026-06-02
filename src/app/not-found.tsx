import Link from "next/link";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export default function NotFound() {
  return (
    <MarketingPageLayout>
      <section className="container mx-auto max-w-3xl px-4 py-12 text-center sm:py-16">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
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
            className="btn-lift inline-flex justify-center rounded-xl border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/70"
          >
            Xem báo giá
          </Link>
        </div>
      </section>
    </MarketingPageLayout>
  );
}

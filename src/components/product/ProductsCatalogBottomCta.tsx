import Link from "next/link";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon, QuoteIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { siteConfig } from "@/config/site";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;
const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

export function ProductsCatalogBottomCta() {
  return (
    <section className="surface-card overflow-hidden p-5 sm:p-6">
      <h2 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        Cần báo giá theo số lượng?
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Gọi hoặc nhắn Zalo để nhận báo giá nhanh trong ngày. Gửi form nếu bạn
        cần tư vấn chi tiết quy cách.
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={PHONE_TEL}
          className="btn-lift inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
            Gọi {siteConfig.company.phone}
          </ContactCtaLabel>
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lift inline-flex items-center justify-center rounded-xl border border-[#0068FF]/30 bg-[#0068FF]/[0.06] px-4 py-2.5 text-sm font-semibold text-[#0058d6]"
        >
          <ContactCtaLabel variant="zalo" icon={<ZaloIcon className="h-5 w-5" />}>
            Chat Zalo
          </ContactCtaLabel>
        </a>
        <Link
          href="/lien-he"
          className="btn-lift inline-flex items-center justify-center rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted/60"
        >
          <ContactCtaLabel icon={<QuoteIcon className="h-4 w-4" />}>
            Gửi form báo giá
          </ContactCtaLabel>
        </Link>
      </div>

      <nav
        className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-4 text-xs sm:text-sm"
        aria-label="Tài nguyên liên quan"
      >
        <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary hover:underline">
          Bảng giá tham khảo
        </Link>
        <Link href="/tu-van" className="font-medium text-primary hover:underline">
          Tư vấn chọn quy cách
        </Link>
        <Link
          href="/day-dai-thep-16mm-19mm-32mm"
          className="font-medium text-primary hover:underline"
        >
          So sánh 16 / 19 / 32mm
        </Link>
      </nav>
    </section>
  );
}

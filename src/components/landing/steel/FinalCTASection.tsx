import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon, QuoteIcon, ZaloIcon } from "@/components/contact/ContactIcons";
import { Section } from "../Section";

const PHONE = siteConfig.company.phone;
const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;
const ZALO_URL = `https://zalo.me/${siteConfig.company.zaloPhone}`;

export function FinalCTASection() {
  return (
    <Section
      id="final-cta"
      className="relative overflow-x-clip bg-[radial-gradient(circle_at_50%_-10%,hsl(214_68%_87%_/_0.62),hsl(210_33%_98%)_58%)]"
    >
      <div className="section-intro">
        <p className="eyebrow">Sẵn sàng nhận báo giá</p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
          Liên hệ ngay để nhận báo giá tốt nhất hôm nay
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Gửi yêu cầu hoặc gọi trực tiếp, chúng tôi sẽ tư vấn quy cách dây đai
          và bộ dụng cụ phù hợp nhất cho dây chuyền của bạn.
        </p>

        <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <a
            href={PHONE_TEL}
            className="btn-lift inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-18px_rgba(25,61,112,0.84)] sm:inline-flex"
          >
            <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
              <span className="sm:hidden">Gọi ngay</span>
              <span className="hidden sm:inline">Gọi ngay {PHONE}</span>
            </ContactCtaLabel>
          </a>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex items-center justify-center rounded-xl border border-primary/25 bg-primary/8 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/15 sm:inline-flex"
          >
            <ContactCtaLabel variant="zalo" icon={<ZaloIcon className="h-5 w-5" />}>
              Chat Zalo
            </ContactCtaLabel>
          </a>
          <Link
            href="/lien-he"
            className="btn-lift inline-flex items-center justify-center rounded-xl border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/70 sm:inline-flex"
          >
            <ContactCtaLabel icon={<QuoteIcon className="h-4 w-4" />}>
              Gửi form báo giá
            </ContactCtaLabel>
          </Link>
        </div>
        <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <Link href="/day-dai-thep" className="font-medium text-primary">
            Hướng dẫn dây đai thép
          </Link>
          <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary">
            Xem bảng giá mới nhất
          </Link>
          <Link href="/day-dai-thep-16mm-19mm-32mm" className="font-medium text-primary">
            So sánh 16 · 19 · 32mm
          </Link>
          <Link href="/day-dai-thep-ha-noi" className="font-medium text-primary">
            Dây đai thép tại Hà Nội
          </Link>
          <Link href="/day-dai-thep-mien-bac" className="font-medium text-primary">
            Dây đai thép miền Bắc
          </Link>
          <Link href="/day-dai-sat-gia-re" className="font-medium text-primary">
            Dây đai sắt giá rẻ
          </Link>
          <Link href="/bo-sat" className="font-medium text-primary">
            Bọ sắt, bọ kẹp đai
          </Link>
          <Link href="/siet-day-thep" className="font-medium text-primary">
            Siết dây thép
          </Link>
        </div>
      </div>
    </Section>
  );
}

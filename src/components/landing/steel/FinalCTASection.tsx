import Link from "next/link";
import { Section } from "../Section";

const PHONE = "0339.689.386";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export function FinalCTASection() {
  return (
    <Section
      id="final-cta"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_-10%,hsl(214_68%_87%_/_0.62),hsl(210_33%_98%)_58%)]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Sẵn sàng nhận báo giá</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Liên hệ ngay để nhận báo giá tốt nhất hôm nay
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Gửi yêu cầu hoặc gọi trực tiếp, chúng tôi sẽ tư vấn quy cách dây đai
          và bộ dụng cụ phù hợp nhất cho dây chuyền của bạn.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="btn-lift inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-18px_rgba(25,61,112,0.84)]"
          >
            Gọi ngay {PHONE}
          </a>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex rounded-xl border border-primary/25 bg-primary/8 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/15"
          >
            Chat Zalo
          </a>
          <Link
            href="/#contact"
            className="btn-lift inline-flex rounded-xl border border-border bg-white/85 px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted/70"
          >
            Gửi form báo giá
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary">
            Xem bảng giá mới nhất
          </Link>
          <Link
            href="/day-dai-thep-ha-noi"
            className="font-medium text-primary"
          >
            Dây đai thép tại Hà Nội
          </Link>
          <Link
            href="/day-dai-thep-mien-bac"
            className="font-medium text-primary"
          >
            Nhà cung cấp miền Bắc
          </Link>
        </div>
      </div>
    </Section>
  );
}


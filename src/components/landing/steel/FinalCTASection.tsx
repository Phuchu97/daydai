import Link from "next/link";
import { Section } from "../Section";

const PHONE = "0339689386";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export function FinalCTASection() {
  return (
    <Section id="final-cta" className="bg-slate-900">
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Liên hệ ngay để nhận báo giá tốt nhất hôm nay
        </h2>
        <p className="mt-3 text-sm text-slate-200 sm:text-base">
          Gửi yêu cầu hoặc gọi trực tiếp, chúng tôi sẽ tư vấn quy cách dây đai
          và bộ dụng cụ phù hợp nhất cho dây chuyền của bạn.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/40 transition hover:opacity-90"
          >
            Gọi ngay {PHONE}
          </a>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-sky-400/70 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-100 hover:bg-sky-500/20"
          >
            Chat Zalo
          </a>
          <Link
            href="#contact"
            className="inline-flex rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Gửi form báo giá
          </Link>
        </div>
      </div>
    </Section>
  );
}


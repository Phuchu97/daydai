import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description:
    "Điều khoản sử dụng website daydaivn.com — Dây Đai Thép Việt Nam.",
  alternates: {
    canonical: `${siteConfig.url}/dieu-khoan-su-dung`,
  },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <MarketingPageLayout>
      <article className="max-w-3xl space-y-6 sm:space-y-8">
        <Link
          href="/"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          ← Quay về trang chủ
        </Link>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
          Điều khoản sử dụng
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            Nội dung trên website nhằm mục đích giới thiệu sản phẩm và hỗ trợ tư
            vấn giải pháp đóng đai công nghiệp.
          </p>
          <p>
            Giá và tồn kho có thể thay đổi theo thời điểm. Báo giá chính thức được
            xác nhận qua liên hệ trực tiếp giữa hai bên.
          </p>
          <p>
            Người dùng đồng ý cung cấp thông tin chính xác khi gửi yêu cầu để chúng
            tôi hỗ trợ nhanh và đúng nhu cầu thực tế.
          </p>
        </div>
      </article>
    </MarketingPageLayout>
  );
}

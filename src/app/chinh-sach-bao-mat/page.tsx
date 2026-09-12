import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description:
    "Chính sách bảo mật thông tin khách hàng của Dây Đai Thép Việt Nam (daydaivn.com).",
  alternates: {
    canonical: `${siteConfig.url}/chinh-sach-bao-mat`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
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
          Chính sách bảo mật
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            Chúng tôi chỉ thu thập thông tin cần thiết để tư vấn, báo giá và xử lý
            đơn hàng như họ tên, số điện thoại, công ty và nhu cầu liên hệ.
          </p>
          <p>
            Dữ liệu được dùng cho mục đích chăm sóc khách hàng, không chia sẻ cho
            bên thứ ba ngoài các đối tác vận chuyển hoặc nền tảng kỹ thuật phục vụ
            việc gửi báo giá và xác nhận đơn hàng.
          </p>
          <p>
            Bạn có thể yêu cầu cập nhật hoặc xóa thông tin bằng cách gọi trực tiếp
            số hotline {siteConfig.company.phone} trên website.
          </p>
        </div>
      </article>
    </MarketingPageLayout>
  );
}

import Link from "next/link";
import { MarketingPageLayout } from "@/components/layout/MarketingPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <MarketingPageLayout>
      <article className="container mx-auto max-w-4xl px-4 lg:px-6">
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
            số hotline trên website.
          </p>
        </div>
      </article>
    </MarketingPageLayout>
  );
}

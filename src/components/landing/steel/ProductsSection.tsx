import Image from "next/image";
import Link from "next/link";
import { Section } from "../Section";
import { getProductById } from "@/data/products";

const PHONE = "0339689386";

export function ProductsSection() {
  const steel = getProductById("steel-strapping");
  const tools = getProductById("steel-strapping-tools");

  return (
    <Section id="products">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Danh mục nổi bật</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Sản phẩm dây đai thép & bộ dụng cụ đóng đai
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Đầy đủ từ dây đai thép đến bộ dụng cụ siết, bấm khóa – phù hợp hầu hết
          nhu cầu đóng gói công nghiệp hiện nay.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Product 1 */}
        <div className="surface-card p-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {steel?.name ?? "Dây đai thép đóng gói công nghiệp"}
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {steel?.shortDescription ??
              "Dây đai thép mạ kẽm, độ bền kéo cao, bề mặt xử lý chống gỉ, phù hợp siết chặt hàng hóa trọng tải lớn."}
          </p>

          <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
            <ul className="space-y-2 leading-7">
              <li>• Bản rộng đa dạng: 16mm, 19mm, 25mm, 32mm</li>
              <li>• Độ dày từ 0.5mm – 1mm</li>
              <li>• Lực kéo cao, hạn chế giãn trong quá trình vận chuyển</li>
              <li>• Bề mặt sơn/nhúng mạ hạn chế gỉ sét</li>
            </ul>
            <ul className="space-y-2 leading-7">
              <li>• Đóng pallet thép, gỗ, tôn cuộn, ống thép</li>
              <li>• Cố định máy móc, kết cấu thép khi vận chuyển</li>
              <li>• Ứng dụng trong kho bãi, bến cảng, nhà máy thép</li>
            </ul>
          </div>

          <p className="mt-4 text-sm font-semibold text-primary">
            Giá: Liên hệ {PHONE} để được báo giá tốt theo số lượng.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href={steel?.slug ?? "/products/steel-strapping"}
              className="btn-lift inline-flex items-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_16px_32px_-18px_rgba(25,61,112,0.82)] sm:text-sm"
            >
              Xem chi tiết sản phẩm
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="btn-lift inline-flex items-center rounded-xl border border-border bg-white/85 px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted/70 sm:text-sm"
            >
              Gọi tư vấn nhanh
            </a>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-muted">
              <Image
                src={steel?.images[0]?.src ?? "/images/day-dai-1.JPG"}
                alt={steel?.images[0]?.alt ?? "Cuộn dây đai thép trong kho"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-muted">
              <Image
                src={steel?.images[3]?.src ?? "/images/day-dai-4.JPG"}
                alt={steel?.images[3]?.alt ?? "Dây đai thép được bọc pallet"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="surface-card p-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {tools?.name ?? "Bộ dụng cụ đóng đai thép"}
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {tools?.shortDescription ??
              "Hàng chính hãng nhập khẩu Đài Loan, vận hành đơn giản, phù hợp cho cả kho nhỏ và dây chuyền nhà máy."}
          </p>

          <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
            <ul className="space-y-2 leading-7">
              <li>• Manual tensioner – dụng cụ siết dây đai</li>
              <li>• Sealer – kìm bấm khóa, cố định đầu dây</li>
              <li>• Combination tools – máy siết & bấm kết hợp</li>
              <li>• Phù hợp dây đai thép bản 16–19–32mm</li>
            </ul>
            <ul className="space-y-2 leading-7">
              <li>• Thiết kế chắc chắn, chịu lực tốt</li>
              <li>• Phụ tùng thay thế sẵn có</li>
              <li>• Hướng dẫn sử dụng trực tiếp/online</li>
            </ul>
          </div>

          {tools?.basePrice && tools?.salePrice && (
            <p className="mt-4 text-sm">
              Giá niêm yết:{" "}
              <span className="line-through text-muted-foreground">
                {tools.basePrice.toLocaleString("vi-VN")}đ
              </span>{" "}
              <span className="font-semibold text-secondary">
                chỉ còn {tools.salePrice.toLocaleString("vi-VN")}đ
              </span>{" "}
              / bộ.
            </p>
          )}

          <p className="mt-1 text-xs text-muted-foreground">
            Số lượng có hạn – ưu tiên khách đặt trước. Vui lòng liên hệ để giữ
            hàng.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href={tools?.slug ?? "/products/steel-strapping"}
              className="btn-lift inline-flex items-center rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_16px_32px_-18px_rgba(25,61,112,0.82)] sm:text-sm"
            >
              Xem chi tiết dụng cụ
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="btn-lift inline-flex items-center rounded-xl border border-border bg-white/85 px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted/70 sm:text-sm"
            >
              Gọi tư vấn nhanh
            </a>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-muted">
              <Image
                src={tools?.images[0]?.src ?? "/images/dung-cu-dong-dai-3.jpg"}
                alt={tools?.images[0]?.alt ?? "Bộ dụng cụ đóng đai thép"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-muted">
              <Image
                src={tools?.images[1]?.src ?? "/images/kho-dung-cu-dong-dai.png"}
                alt={tools?.images[1]?.alt ?? "Kho dụng cụ đóng đai thép"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="surface-card mt-8 p-6">
        <h2 className="font-display text-xl font-semibold text-foreground">
          Tài nguyên chọn mua dây đai thép
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Nếu bạn đang so sánh quy cách hoặc cần báo giá nhanh theo số lượng,
          xem thêm các trang chuyên sâu bên dưới.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary">
            Báo giá dây đai thép mới nhất
          </Link>
          <Link href="/day-dai-thep-16mm-19mm-32mm" className="font-medium text-primary">
            So sánh bản dây 16mm 19mm 32mm
          </Link>
          <Link href="/khoa-dai-thep" className="font-medium text-primary">
            Chọn khóa đai thép tương thích
          </Link>
        </div>
      </section>
    </Section>
  );
}


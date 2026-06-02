import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { Section } from "../Section";
import { getProductById } from "@/data/products";
import { siteConfig } from "@/config/site";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { cn } from "@/lib/utils";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type ProductHighlightCardProps = {
  product: CatalogProduct;
  tags: string[];
  priceNode: React.ReactNode;
  imageIndices?: [number, number];
};

function ProductHighlightCard({
  product,
  tags,
  priceNode,
  imageIndices = [0, 1],
}: ProductHighlightCardProps) {
  const [imgA, imgB] = imageIndices;
  const imgPrimary = product.images[imgA];
  const imgSecondary = product.images[imgB] ?? product.images[0];

  return (
    <article className="surface-card flex h-full flex-col overflow-hidden transition duration-200 hover:border-primary/25 hover:shadow-[0_22px_48px_-28px_rgba(22,67,126,0.4)]">
      <Link
        href={product.slug}
        className="group flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
      >
        <div className="grid grid-cols-2 gap-0.5 bg-muted/40">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={imgPrimary?.src ?? siteConfig.ogImage}
              alt={imgPrimary?.alt ?? product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={imgSecondary?.src ?? siteConfig.ogImage}
              alt={imgSecondary?.alt ?? product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Đặc điểm nổi bật">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground/90"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex min-h-[1.375rem] items-end text-sm">
            {priceNode}
          </div>

          <p
            className={cn(
              "mt-auto pt-4 text-sm font-semibold text-primary",
              "inline-flex items-center gap-1 transition group-hover:gap-2"
            )}
          >
            Xem chi tiết
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </p>
        </div>
      </Link>

      <div className="border-t border-border/70 px-5 py-3 sm:px-6">
        <a
          href={PHONE_TEL}
          className="btn-lift inline-flex w-full items-center justify-center rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted/60 sm:text-sm"
        >
          Gọi tư vấn {siteConfig.company.phone}
        </a>
      </div>
    </article>
  );
}

export function ProductsSection() {
  const steel = getProductById("steel-strapping");
  const tools = getProductById("steel-strapping-tools");
  const seals = getProductById("steel-seals");

  if (!steel || !tools || !seals) return null;

  return (
    <Section id="products">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Danh mục nổi bật</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Dây đai thép, bọ thép & dụng cụ đóng đai
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Bấm vào thẻ sản phẩm để xem chi tiết quy cách, thông số và báo giá.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:items-stretch">
        <ProductHighlightCard
          product={steel}
          imageIndices={[0, 3]}
          tags={[
            "Bản 16–32mm",
            "Mạ kẽm",
            "Pallet & cuộn thép",
            "Giao toàn quốc",
          ]}
          priceNode={
            <p>
              <span className="font-semibold text-secondary">
                {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
              </span>
              <span className="mt-0.5 block text-[11px] font-normal text-muted-foreground">
                Báo giá cuộn theo số lượng — gọi tư vấn
              </span>
            </p>
          }
        />

        <ProductHighlightCard
          product={tools}
          imageIndices={[0, 1]}
          tags={[
            "Kìm siết & bấm khóa",
            "Dây 16–32mm",
            "Nhập khẩu",
            "Hướng dẫn sử dụng",
          ]}
          priceNode={
            tools.basePrice && tools.salePrice ? (
              <p>
                <span className="text-muted-foreground line-through">
                  {tools.basePrice.toLocaleString("vi-VN")}đ
                </span>{" "}
                <span className="font-semibold text-secondary">
                  {tools.salePrice.toLocaleString("vi-VN")}đ
                </span>
                <span className="text-muted-foreground"> / bộ</span>
              </p>
            ) : (
              <p className="font-medium text-primary">Liên hệ báo giá</p>
            )
          }
        />

        <ProductHighlightCard
          product={seals}
          imageIndices={[0, 1]}
          tags={[
            "Bản 16–32mm",
            "Bọ kín / U",
            "Dùng kèm dây đai",
            "Giá theo số lượng",
          ]}
          priceNode={
            <p className="font-medium text-primary">
              {seals.priceLabel ?? "Liên hệ báo giá"} — gọi tư vấn
            </p>
          }
        />
      </div>

      <section className="surface-card mt-6 p-5 sm:p-6">
        <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">
          Tài nguyên chọn mua dây đai thép
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          So sánh quy cách hoặc nhận báo giá nhanh theo số lượng.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary hover:underline">
            Báo giá dây đai thép
          </Link>
          <Link
            href="/day-dai-thep-16mm-19mm-32mm"
            className="font-medium text-primary hover:underline"
          >
            So sánh 16 / 19 / 32mm
          </Link>
          <Link href="/khoa-dai-thep" className="font-medium text-primary hover:underline">
            Bọ thép / khóa đai
          </Link>
        </div>
      </section>
    </Section>
  );
}

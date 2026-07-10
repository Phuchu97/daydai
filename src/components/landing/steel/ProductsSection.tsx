import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/data/products";
import { Section } from "../Section";
import { getProductById } from "@/data/products";
import { siteConfig } from "@/config/site";
import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon } from "@/components/contact/ContactIcons";
import { cn } from "@/lib/utils";

const PHONE_TEL = `tel:${siteConfig.company.zaloPhone}`;

type FeaturedProductConfig = {
  productId: CatalogProduct["id"];
  tags: string[];
  imageIndices?: [number, number];
  priceNode: (product: CatalogProduct) => React.ReactNode;
};

const featuredProducts: FeaturedProductConfig[] = [
  {
    productId: "steel-strapping",
    imageIndices: [0, 3],
    tags: ["Bản 16–32mm", "Mạ kẽm", "Pallet & cuộn thép", "Giao toàn quốc"],
    priceNode: () => (
      <p>
        <span className="text-xs font-semibold text-secondary sm:text-sm">
          {STEEL_STRAPPING_PRICE_PER_KG.toLocaleString("vi-VN")}đ/kg
        </span>
        <span className="mt-0.5 block text-[10px] font-normal text-muted-foreground sm:text-[11px]">
          Báo giá cuộn theo số lượng
        </span>
      </p>
    ),
  },
  {
    productId: "steel-strapping-tools",
    imageIndices: [0, 1],
    tags: ["Kìm siết & bấm khóa", "Dây 16–32mm", "Nhập khẩu", "Hướng dẫn sử dụng"],
    priceNode: (product) =>
      product.basePrice && product.salePrice ? (
        <p className="tabular-nums leading-tight">
          <span className="text-[10px] text-muted-foreground line-through sm:text-xs">
            {product.basePrice.toLocaleString("vi-VN")}đ{" "}
          </span>
          <span className="text-xs font-semibold text-secondary sm:text-sm">
            {product.salePrice.toLocaleString("vi-VN")}đ
          </span>
          <span className="text-[10px] text-muted-foreground sm:text-xs"> / bộ</span>
        </p>
      ) : (
        <p className="text-xs font-medium text-primary sm:text-sm">Liên hệ báo giá</p>
      ),
  },
  {
    productId: "plastic-strapping-tools",
    imageIndices: [0, 1],
    tags: ["Dây PP/PET", "Tăng đai đỏ", "Nhập khẩu", "Pallet carton"],
    priceNode: (product) =>
      product.basePrice && product.salePrice ? (
        <p className="tabular-nums leading-tight">
          <span className="text-[10px] text-muted-foreground line-through sm:text-xs">
            {product.basePrice.toLocaleString("vi-VN")}đ{" "}
          </span>
          <span className="text-xs font-semibold text-secondary sm:text-sm">
            {product.salePrice.toLocaleString("vi-VN")}đ
          </span>
          <span className="text-[10px] text-muted-foreground sm:text-xs"> / bộ</span>
        </p>
      ) : (
        <p className="text-xs font-medium text-primary sm:text-sm">Liên hệ báo giá</p>
      ),
  },
  {
    productId: "steel-seals",
    imageIndices: [0, 1],
    tags: ["Bản 16–32mm", "Bọ kín / U", "Dùng kèm dây đai", "Giá theo số lượng"],
    priceNode: (product) => (
      <p className="text-xs font-medium text-primary sm:text-sm">
        {product.priceLabel ?? "Liên hệ báo giá"}
      </p>
    ),
  },
];

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
        <div className="relative aspect-square overflow-hidden bg-muted/40 sm:grid sm:grid-cols-2 sm:gap-0.5 sm:aspect-auto">
          <div className="relative h-full w-full overflow-hidden sm:aspect-[5/4]">
            <Image
              src={imgPrimary?.src ?? siteConfig.ogImage}
              alt={imgPrimary?.alt ?? product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1280px) 25vw, 50vw"
            />
          </div>
          <div className="relative hidden h-full w-full overflow-hidden sm:block sm:aspect-[5/4]">
            <Image
              src={imgSecondary?.src ?? siteConfig.ogImage}
              alt={imgSecondary?.alt ?? product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(min-width: 1280px) 25vw, 50vw"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
          <h3 className="line-clamp-2 font-display text-[13px] font-semibold leading-snug tracking-tight text-foreground sm:text-xl lg:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
            {product.shortDescription}
          </p>

          <ul
            className="mt-2 hidden flex-wrap gap-1.5 sm:mt-3 sm:flex"
            aria-label="Đặc điểm nổi bật"
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground/90"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex min-h-[1.25rem] items-end sm:mt-3 sm:min-h-[1.375rem]">
            {priceNode}
          </div>

          <p
            className={cn(
              "mt-auto pt-2.5 text-[11px] font-semibold text-primary sm:pt-4 sm:text-sm",
              "inline-flex items-center gap-1 transition group-hover:gap-2",
            )}
          >
            Xem chi tiết
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </p>
        </div>
      </Link>

      <div className="hidden border-t border-border/70 px-3 py-2.5 sm:block sm:px-5 sm:py-3 lg:px-6">
        <a
          href={PHONE_TEL}
          className="btn-lift inline-flex w-full items-center justify-center rounded-xl border border-border bg-background px-3 py-2 text-[11px] font-semibold text-foreground hover:bg-muted/60 sm:px-4 sm:py-2.5 sm:text-xs lg:text-sm"
        >
          <ContactCtaLabel icon={<PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}>
            Gọi tư vấn {siteConfig.company.phone}
          </ContactCtaLabel>
        </a>
      </div>
    </article>
  );
}

export function ProductsSection() {
  const items = featuredProducts
    .map((config) => {
      const product = getProductById(config.productId);
      if (!product) return null;
      return { config, product };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (items.length === 0) return null;

  return (
    <Section id="products">
      <div className="section-intro">
        <p className="eyebrow">Danh mục nổi bật</p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
          Dây đai thép, đai nhựa, bọ thép & dụng cụ đóng đai
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Bấm vào thẻ sản phẩm để xem chi tiết quy cách, thông số và báo giá.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4 xl:grid-cols-4 xl:items-stretch">
        {items.map(({ config, product }) => (
          <ProductHighlightCard
            key={product.id}
            product={product}
            tags={config.tags}
            imageIndices={config.imageIndices}
            priceNode={config.priceNode(product)}
          />
        ))}
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

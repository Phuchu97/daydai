import type { CatalogProduct } from "@/data/products";
import { getProductDescription } from "@/data/product-detail-content";

type Props = {
  product?: CatalogProduct;
};

export function DescriptionSection({ product }: Props) {
  const { overview, applications, industries, technical } =
    getProductDescription(product);

  return (
    <section className="border-t border-border bg-background py-12 md:py-16">
      <div className="site-container space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Tổng quan sản phẩm
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{overview}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Ứng dụng thực tế
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {applications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Ngành sử dụng phổ biến
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {industries.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Giải thích kỹ thuật đơn giản
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">{technical}</p>
        </div>
      </div>
    </section>
  );
}

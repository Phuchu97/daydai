import type { CatalogProduct } from "@/data/products";
import { getProductSpecs } from "@/data/product-detail-content";

type Props = {
  product?: CatalogProduct;
};

export function SpecsTable({ product }: Props) {
  const rows = getProductSpecs(product);

  return (
    <section className="border-t border-border/60 bg-muted/30 py-12 md:py-16">
      <div className="site-container">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Thông số kỹ thuật
        </h2>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
          <dl className="divide-y divide-border/70 text-sm">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[180px,minmax(0,1fr)]"
              >
                <dt className="font-medium text-foreground">{row.label}</dt>
                <dd className="text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

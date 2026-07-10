import type { CatalogProduct } from "@/data/products";
import { getProductBenefits } from "@/data/product-detail-content";

type Props = {
  product?: CatalogProduct;
};

export function BenefitsSection({ product }: Props) {
  const { title, benefits } = getProductBenefits(product);

  return (
    <section className="border-t border-border/60 bg-muted/40 py-12 md:py-16">
      <div className="site-container">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          {title}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-background p-4 shadow-sm"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

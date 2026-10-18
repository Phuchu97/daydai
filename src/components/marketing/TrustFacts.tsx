import { siteConfig } from "@/config/site";

const { company } = siteConfig;
const yearsInBusiness = new Date().getFullYear() - company.foundingYear;

const facts = [
  {
    value: `Từ ${company.foundingYear}`,
    label: `${yearsInBusiness}+ năm cung ứng dây đai thép`,
  },
  {
    value: "Thép Hòa Phát",
    label: company.materialSource,
  },
  {
    value: "Kho Hà Nội",
    label: `${company.address} · ${company.serviceArea}`,
  },
] as const;

type TrustFactsProps = {
  className?: string;
};

/** Thông tin năng lực đã xác minh với chủ site — không thêm số liệu chưa có nguồn. */
export function TrustFacts({ className }: TrustFactsProps) {
  return (
    <section
      aria-labelledby="trust-facts-heading"
      className={className ?? "border-t border-border/60 bg-muted/25 py-12 md:py-16"}
    >
      <div className="site-container">
        <h2
          id="trust-facts-heading"
          className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Năng lực cung ứng của {company.legalName}
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.value} className="surface-card p-5">
              <dt className="text-lg font-semibold text-primary">{fact.value}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-foreground">
            Khách hàng tiêu biểu đã sử dụng dây đai thép
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {company.notableClients.map((client) => (
              <li
                key={client}
                className="rounded-lg border border-border/60 bg-background px-3 py-1.5 text-sm font-medium text-foreground/90"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

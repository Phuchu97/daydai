import { Section } from "./Section";

const features = [
  {
    title: "Next.js 15",
    description: "App Router, Server Components, Turbopack — công nghệ mới nhất.",
  },
  {
    title: "Tailwind CSS",
    description: "Styling nhanh, nhất quán với design tokens và responsive.",
  },
  {
    title: "TypeScript",
    description: "Type-safe, ít lỗi runtime, refactor an toàn.",
  },
  {
    title: "SEO sẵn có",
    description: "Metadata, Open Graph, cấu trúc chuẩn cho landing page.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Base chuẩn cho landing page
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cấu trúc rõ ràng, dễ mở rộng, sẵn sàng cho production.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border/60 bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

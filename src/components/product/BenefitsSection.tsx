export function BenefitsSection() {
  const benefits = [
    "Siết chặt hàng hóa chắc chắn, hạn chế xê dịch khi vận chuyển.",
    "Chịu lực cao, phù hợp cho pallet hàng nặng và cuộn thép.",
    "Tối ưu vận chuyển container, kho bãi, bến cảng.",
    "Dùng tốt trong môi trường công nghiệp, chịu nhiệt và va đập.",
  ];

  return (
    <section className="border-t border-border/60 bg-muted/40 py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Lợi ích khi sử dụng dây đai thép công nghiệp
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


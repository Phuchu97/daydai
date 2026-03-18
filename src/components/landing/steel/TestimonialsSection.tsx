import { Section } from "../Section";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-muted/40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Được tin tưởng bởi quản lý nhà máy, kho bãi và đơn vị logistics trên
          toàn quốc.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <figure className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6 text-left shadow-sm">
          <blockquote className="text-sm text-muted-foreground">
            “Dây đai thép căng tốt, không bị trượt khi siết cuộn thép trọng
            lượng lớn. Đặc biệt là được tư vấn rất kỹ về khoảng cách đai, nên
            giảm được hẳn sự cố hàng xê dịch khi vận chuyển.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-foreground">
            Anh Nam – Quản lý nhà máy cán thép
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6 text-left shadow-sm">
          <blockquote className="text-sm text-muted-foreground">
            “Bộ dụng cụ đóng đai dễ dùng, nhân viên kho học rất nhanh. Hỗ trợ
            giao hàng và bảo hành rõ ràng, đáp ứng tốt khi mình cần gấp.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-foreground">
            Chị Hương – Công ty logistics & kho bãi
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}


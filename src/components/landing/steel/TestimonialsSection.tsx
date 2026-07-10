import { Section } from "../Section";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-muted/35">
      <div className="section-intro">
        <p className="eyebrow">Phản hồi từ khách hàng</p>
        <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl md:text-4xl">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Được tin tưởng bởi quản lý nhà máy, xưởng sản xuất và đơn vị logistics trên
          toàn quốc.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <figure className="surface-card flex flex-col justify-between p-7 text-left">
          <blockquote className="font-display text-lg leading-relaxed text-foreground/90 sm:text-xl md:text-2xl">
            “Dây đai thép căng tốt, không bị trượt khi siết cuộn thép trọng
            lượng lớn. Đặc biệt là được tư vấn rất kỹ về khoảng cách đai, nên
            giảm được hẳn sự cố hàng xê dịch khi vận chuyển.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-foreground">
            Anh Nam – Quản lý nhà máy cán thép
          </figcaption>
        </figure>

        <figure className="surface-card flex flex-col justify-between p-6 text-left">
          <blockquote className="text-sm leading-7 text-muted-foreground">
            “Bộ dụng cụ đóng đai dễ dùng, nhân viên kho học rất nhanh. Hỗ trợ
            giao hàng và bảo hành rõ ràng, đáp ứng tốt khi mình cần gấp.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-foreground">
            Chị Hương – Công ty logistics & xưởng sản xuất
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}


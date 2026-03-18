import { Section } from "../Section";

const items = [
  {
    title: "Giá cạnh tranh",
    description: "Báo giá theo số lượng, tối ưu chi phí đóng gói cho doanh nghiệp.",
  },
  {
    title: "Hàng luôn có sẵn",
    description: "Tồn kho dây đai & dụng cụ, sẵn sàng giao nhanh khi cần gấp.",
  },
  {
    title: "Giao hàng toàn quốc",
    description: "Giao tận kho, hỗ trợ sắp xếp lịch giao phù hợp ca sản xuất.",
  },
  {
    title: "Tư vấn kỹ thuật miễn phí",
    description:
      "Đề xuất quy cách dây đai, khoảng cách siết, số lượng dây cho từng loại pallet.",
  },
  {
    title: "Hỗ trợ nhanh",
    description:
      "Ưu tiên xử lý sự cố, hỗ trợ đổi trả khi sản phẩm không đúng quy cách.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section id="why-us" className="bg-muted/40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Tại sao nên chọn chúng tôi?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Không chỉ bán dây đai và dụng cụ, chúng tôi đồng hành cùng doanh
          nghiệp tối ưu chi phí và giảm rủi ro trong vận chuyển.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-5 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg">★</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


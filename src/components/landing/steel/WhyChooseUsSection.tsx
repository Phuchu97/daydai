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
    <Section id="why-us" className="bg-muted/35">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Lý do hợp tác lâu dài</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Tại sao nên chọn chúng tôi?
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Không chỉ bán dây đai và dụng cụ, chúng tôi đồng hành cùng doanh
          nghiệp tối ưu chi phí và giảm rủi ro trong vận chuyển.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.08fr),minmax(0,0.92fr)]">
        <div className="surface-card flex flex-col justify-between p-6 md:p-7">
          <div>
            <p className="text-sm font-medium text-primary">Cam kết vận hành</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
              Giao nhanh, tư vấn đúng, đồng hành khi phát sinh.
            </h3>
            <p className="mt-3 max-w-[52ch] text-sm leading-7 text-muted-foreground">
              Đội ngũ hỗ trợ theo nhu cầu thực tế của kho và dây chuyền. Khi
              đơn hàng gấp hoặc cần thay đổi quy cách, chúng tôi xử lý theo ca
              sản xuất thay vì quy trình cứng.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.slice(0, 2).map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/70 bg-muted/45 px-4 py-3"
              >
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-xs leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {items.slice(2).map((item) => (
          <div
            key={item.title}
            className="surface-card flex flex-col gap-2 p-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/12 text-primary">
              <span className="text-lg">★</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="text-xs leading-6 text-muted-foreground">{item.description}</p>
          </div>
        ))}
        </div>
      </div>
    </Section>
  );
}


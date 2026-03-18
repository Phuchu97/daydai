import { Section } from "../Section";

const faqs = [
  {
    question: "Dây đai thép chịu tải được bao nhiêu?",
    answer:
      "Tùy quy cách bản rộng và độ dày. Ví dụ dây 19mm dày 0.8mm thường chịu được từ 800–1.200kg/đai trong điều kiện đóng gói đúng kỹ thuật. Chúng tôi sẽ tư vấn quy cách phù hợp theo loại hàng và tải trọng của bạn.",
  },
  {
    question: "Có giao hàng toàn quốc không?",
    answer:
      "Chúng tôi giao hàng toàn quốc qua chành xe, đơn vị vận chuyển hoặc giao trực tiếp tại các khu công nghiệp lớn. Đơn nội thành và lân cận có thể giao trong ngày nếu có sẵn hàng.",
  },
  {
    question: "Có bán sỉ cho đại lý hoặc nhà phân phối không?",
    answer:
      "Có. Chúng tôi có chính sách giá sỉ theo số lượng cuộn dây và bộ dụng cụ, phù hợp cho đại lý hoặc đơn vị cung cấp vật tư đóng gói.",
  },
  {
    question: "Có hỗ trợ hướng dẫn đóng đai đúng kỹ thuật không?",
    answer:
      "Chúng tôi có thể hướng dẫn online qua video, Zalo hoặc trực tiếp tại kho/nhà máy (tùy khu vực) để đảm bảo nhân sự của bạn sử dụng đúng cách.",
  },
];

export function FAQSection() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Câu hỏi thường gặp
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Nếu bạn còn băn khoăn, hãy xem qua một số câu hỏi mà khách hàng hay
          hỏi nhất.
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-3xl space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-border bg-background p-4 text-left open:bg-muted/40"
          >
            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground">
              <span>{faq.question}</span>
              <span className="ml-4 text-lg leading-none text-muted-foreground group-open:hidden">
                +
              </span>
              <span className="ml-4 hidden text-lg leading-none text-muted-foreground group-open:block">
                −
              </span>
            </summary>
            <p className="mt-2 text-xs text-muted-foreground group-open:animate-fade-in">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}


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
        <p className="eyebrow">Giải đáp nhanh</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Câu hỏi thường gặp
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          Nếu bạn còn băn khoăn, hãy xem qua một số câu hỏi mà khách hàng hay
          hỏi nhất.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="surface-card rounded-xl p-5 text-left"
          >
            <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}


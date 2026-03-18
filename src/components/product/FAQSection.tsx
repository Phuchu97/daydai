const faqs = [
  {
    question: "Dây đai thép chịu lực bao nhiêu?",
    answer:
      "Tùy quy cách bản rộng và độ dày. Ví dụ dây 19mm dày 0.8mm thường chịu được khoảng 800–1.200kg khi đóng đai đúng kỹ thuật. Chúng tôi sẽ tư vấn cụ thể theo loại hàng và tải trọng của bạn.",
  },
  {
    question: "Có giao hàng toàn quốc không?",
    answer:
      "Chúng tôi giao hàng toàn quốc qua chành xe, đơn vị vận chuyển hoặc giao trực tiếp tại các khu công nghiệp lớn. Đơn nội thành và lân cận có thể giao trong ngày nếu có sẵn hàng.",
  },
  {
    question: "Có bán sỉ cho đại lý / nhà phân phối không?",
    answer:
      "Có. Chúng tôi có chính sách giá sỉ theo số lượng cuộn dây, bộ dụng cụ và khóa đai. Vui lòng liên hệ để nhận báo giá chi tiết.",
  },
  {
    question: "Có hỗ trợ hướng dẫn đóng đai không?",
    answer:
      "Chúng tôi hỗ trợ hướng dẫn online qua video, Zalo hoặc trực tiếp tại kho/nhà máy (tùy khu vực) để đảm bảo nhân sự của bạn sử dụng đúng cách và an toàn.",
  },
];

export function FAQSection() {
  return (
    <section className="border-t border-border bg-muted/40 py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Câu hỏi thường gặp
        </h2>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background p-4 text-left open:bg-muted/40"
            >
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-foreground">
                <span>{faq.question}</span>
                <span className="ml-4 text-lg leading-none text-muted-foreground group-open:hidden">
                  +
                </span>
                <span className="ml-4 hidden text-lg leading-none text-muted-foreground group-open:block">
                  −
                </span>
              </summary>
              <p className="mt-2 text-xs text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  relatedProductIds: string[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "cach-chon-day-dai-thep-theo-tai-trong",
    title: "Cách chọn dây đai thép theo tải trọng thực tế",
    description:
      "Hướng dẫn chọn dây đai thép theo tải trọng hàng hóa, bản rộng, độ dày và môi trường vận chuyển để giảm rủi ro bung đai.",
    excerpt:
      "Nhiều doanh nghiệp chọn sai bản rộng/độ dày khiến đai bị lỏng hoặc tốn chi phí. Bài viết này giúp bạn chọn đúng theo tải trọng thật.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    keywords: [
      "cách chọn dây đai thép",
      "dây đai thép tải trọng",
      "bản rộng dây đai thép",
      "độ dày dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Vì sao cần chọn đúng quy cách dây đai thép?",
        paragraphs: [
          "Nếu chọn dây quá mỏng cho hàng nặng, vòng đai dễ mất lực sau khi bốc xếp. Nếu chọn dây quá dày cho hàng vừa, chi phí vật tư sẽ tăng không cần thiết.",
          "Mục tiêu là cân bằng giữa độ an toàn khi vận chuyển và chi phí đóng gói cho từng nhóm hàng.",
        ],
      },
      {
        heading: "Nguyên tắc chọn bản rộng và độ dày",
        paragraphs: [
          "Hàng nặng, dễ xê dịch hoặc đi tuyến xa nên ưu tiên bản rộng lớn hơn và độ dày cao hơn.",
          "Với hàng vừa, ổn định hình khối, có thể dùng bản nhỏ hơn nếu quy trình siết đai chuẩn và có khóa phù hợp.",
        ],
      },
      {
        heading: "Checklist thực tế tại kho",
        paragraphs: [
          "Xác định khối lượng kiện hàng, số điểm đai, loại pallet, quãng đường vận chuyển và tần suất bốc xếp.",
          "Test thử 1-2 phương án dây trong ca thực tế rồi chốt quy cách để tránh sai số trên số lượng lớn.",
        ],
      },
    ],
  },
  {
    slug: "so-sanh-day-dai-thep-va-day-dai-nhua",
    title: "So sánh dây đai thép và dây đai nhựa cho hàng nặng",
    description:
      "So sánh ưu nhược điểm giữa dây đai thép và dây đai nhựa theo tải trọng, độ ổn định, chi phí và môi trường sử dụng.",
    excerpt:
      "Không phải lúc nào dây đai nhựa cũng là lựa chọn tối ưu. Với hàng nặng và tuyến vận chuyển rung lắc, dây đai thép có lợi thế rõ rệt.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-17",
    keywords: [
      "dây đai thép vs dây đai nhựa",
      "đóng đai pallet hàng nặng",
      "vật tư đóng gói công nghiệp",
    ],
    relatedProductIds: ["steel-strapping"],
    sections: [
      {
        heading: "Khi nào nên dùng dây đai thép?",
        paragraphs: [
          "Dây đai thép phù hợp khi kiện hàng có tải trọng cao, cần cố định chắc trên pallet, container hoặc xe tải đường dài.",
          "Trong môi trường công nghiệp có va đập, rung lắc mạnh, dây đai thép thường ổn định hơn.",
        ],
      },
      {
        heading: "Khi nào dây đai nhựa là lựa chọn đủ dùng?",
        paragraphs: [
          "Với hàng nhẹ đến trung bình, tuyến vận chuyển ngắn hoặc yêu cầu bề mặt mềm, dây đai nhựa có thể tối ưu chi phí và thao tác.",
          "Tuy nhiên cần kiểm tra độ giãn theo thời gian để tránh lỏng đai.",
        ],
      },
      {
        heading: "Kết luận cho doanh nghiệp B2B",
        paragraphs: [
          "Nếu mục tiêu là giảm rủi ro hư hỏng hàng nặng và tăng độ chắc trong vận chuyển, dây đai thép vẫn là lựa chọn an toàn hơn.",
        ],
      },
    ],
  },
  {
    slug: "huong-dan-su-dung-bo-dung-cu-dong-dai-thep",
    title: "Hướng dẫn sử dụng bộ dụng cụ đóng đai thép đúng kỹ thuật",
    description:
      "Quy trình siết - bấm - khóa đai thép đúng chuẩn để tăng tốc đóng gói và hạn chế lỗi bung đai khi vận chuyển.",
    excerpt:
      "Dùng đúng thao tác với tensioner/sealer giúp giảm lỗi rất nhiều. Đây là quy trình ngắn gọn cho kho và nhà máy.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-16",
    keywords: [
      "hướng dẫn dụng cụ đóng đai thép",
      "cách dùng tensioner",
      "cách dùng sealer",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Chuẩn bị trước khi đóng đai",
        paragraphs: [
          "Kiểm tra đúng bản dây và đúng loại khóa tương thích với dụng cụ.",
          "Đảm bảo bề mặt hàng hóa không có cạnh sắc cắt vào dây đai.",
        ],
      },
      {
        heading: "Quy trình 3 bước: Siết - Bấm - Khóa",
        paragraphs: [
          "Bước 1: Luồn dây đúng vị trí và căn điểm tỳ.",
          "Bước 2: Dùng tensioner siết đến lực phù hợp, tránh siết quá mức.",
          "Bước 3: Dùng sealer bấm khóa, kiểm tra lại độ ôm của vòng đai.",
        ],
      },
      {
        heading: "Lỗi thường gặp và cách khắc phục",
        paragraphs: [
          "Khóa tuột: kiểm tra lại kích thước khóa và lực bấm.",
          "Đai lỏng: tăng số điểm đai hoặc điều chỉnh lực siết theo tải trọng.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticlesByProduct(
  productId: string,
  limit = 3,
): Article[] {
  return articles
    .filter((article) => article.relatedProductIds.includes(productId))
    .slice(0, limit);
}


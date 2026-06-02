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
  {
    slug: "day-dai-thep-16mm-19mm-32mm-nen-chon-loai-nao",
    title: "Dây đai thép 16mm, 19mm, 32mm: nên chọn loại nào?",
    description:
      "So sánh nhanh dây đai thép 16mm, 19mm, 32mm theo tải trọng, độ dày và điều kiện vận chuyển thực tế.",
    excerpt:
      "Bài viết giúp bạn chọn đúng bản dây theo tải trọng và giảm rủi ro tuột đai khi vận chuyển hàng nặng.",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-06",
    keywords: [
      "dây đai thép 16mm",
      "dây đai thép 19mm",
      "dây đai thép 32mm",
      "cách chọn bản dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Khác nhau chính giữa bản 16mm, 19mm và 32mm",
        paragraphs: [
          "Bản dây càng lớn thường cho biên chịu lực cao hơn, nhưng cũng làm tăng chi phí vật tư và thao tác.",
          "Trong thực tế kho, bản 19mm là điểm cân bằng phổ biến cho nhiều nhóm hàng nặng vừa.",
        ],
      },
      {
        heading: "Khi nào dùng 16mm để tối ưu chi phí",
        paragraphs: [
          "Với kiện hàng ổn định hình khối, số điểm đai đủ và tuyến vận chuyển ngắn, 16mm có thể đáp ứng tốt.",
          "Nên kết hợp test lực siết và kiểm tra mối khóa sau khi bốc xếp thử.",
        ],
      },
      {
        heading: "Khi nào cần tăng lên 32mm",
        paragraphs: [
          "Hàng rất nặng, chịu rung lắc cao hoặc yêu cầu hệ số an toàn lớn nên ưu tiên bản 32mm.",
          "Đồng thời phải kiểm tra lại bộ dụng cụ siết và loại khóa đai tương thích.",
        ],
      },
    ],
  },
  {
    slug: "bao-gia-day-dai-thep-yeu-to-anh-huong-don-gia",
    title: "Báo giá dây đai thép: 5 yếu tố ảnh hưởng trực tiếp đến đơn giá",
    description:
      "Các yếu tố quyết định giá dây đai thép gồm mác thép, lớp phủ, độ dày, khối lượng đặt và vị trí giao hàng.",
    excerpt:
      "Nắm 5 yếu tố này giúp doanh nghiệp dự toán chuẩn và đàm phán giá tốt hơn cho đơn hàng dây đai thép.",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-08",
    keywords: [
      "báo giá dây đai thép",
      "giá dây đai thép",
      "yếu tố ảnh hưởng giá đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Mác thép và kiểu bề mặt xử lý",
        paragraphs: [
          "Dây mạ kẽm, dây dầu, dây sơn tĩnh điện có cấu trúc chi phí khác nhau do quy trình xử lý bề mặt khác nhau.",
          "Môi trường lưu kho và vận chuyển sẽ quyết định bạn nên chọn loại nào để tối ưu tổng chi phí.",
        ],
      },
      {
        heading: "Độ dày và bản rộng quyết định lượng thép",
        paragraphs: [
          "Tăng độ dày hoặc bản rộng sẽ tăng lượng thép trên mỗi mét dây, vì vậy đơn giá thay đổi rõ.",
          "Doanh nghiệp nên chọn mức vừa đủ theo tải trọng thay vì chọn quá dư an toàn.",
        ],
      },
      {
        heading: "Khối lượng đặt hàng và lịch giao",
        paragraphs: [
          "Đặt hàng theo tháng hoặc theo lô lớn thường được ưu đãi đơn giá và lịch giao.",
          "Việc gom nhu cầu giữa nhiều bộ phận giúp tối ưu giá tốt hơn đặt nhỏ lẻ.",
        ],
      },
    ],
  },
  {
    slug: "cach-chon-khoa-dai-thep-phu-hop-ban-day",
    title: "Cách chọn khóa đai thép phù hợp theo bản dây",
    description:
      "Hướng dẫn chọn khóa đai thép, bọ kín, bọ chữ U theo bản dây 16mm, 19mm, 25mm, 32mm và loại dụng cụ bấm.",
    excerpt:
      "Khóa đai sai quy cách là nguyên nhân thường gặp khiến tuột mối đai. Bài viết này giúp bạn chọn đúng ngay từ đầu.",
    publishedAt: "2026-05-10",
    updatedAt: "2026-05-10",
    keywords: [
      "chọn khóa đai thép",
      "bọ sắt đóng đai",
      "khóa đai thép 19mm",
      "khoa dai thep",
    ],
    relatedProductIds: ["steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Vì sao bản khóa nên lớn hơn bản dây khoảng 0.2mm",
        paragraphs: [
          "Khoảng sai số nhỏ giúp khóa ôm dây tốt hơn khi bấm và hạn chế cắt cạnh dây.",
          "Nếu khóa quá chật hoặc quá rộng đều có thể làm giảm độ ổn định của mối đai.",
        ],
      },
      {
        heading: "Khác biệt giữa bọ kín và bọ chữ U",
        paragraphs: [
          "Bọ kín thường dùng cho tải cao, tuyến vận chuyển xa và môi trường rung lắc.",
          "Bọ chữ U phù hợp cho một số ứng dụng thao tác nhanh với tải trung bình.",
        ],
      },
      {
        heading: "Checklist kiểm tra mối đai sau khi bấm",
        paragraphs: [
          "Kiểm tra độ bám khóa, độ cân giữa hai mép khóa và độ căng tổng thể vòng đai.",
          "Nên chuẩn hóa biểu mẫu kiểm tra cho từng ca để giảm lỗi lặp lại.",
        ],
      },
    ],
  },
  {
    slug: "day-dai-thep-cho-pallet-hang-nang-va-cuon-thep",
    title: "Dây đai thép cho pallet hàng nặng và cuộn thép",
    description:
      "Gợi ý cấu hình dây đai thép cho pallet hàng nặng, cuộn thép, kết cấu kim loại theo điều kiện vận chuyển.",
    excerpt:
      "Mỗi nhóm hàng nặng cần cấu hình đai khác nhau. Bài viết tổng hợp cách chọn thực dụng cho kho và nhà máy.",
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-14",
    keywords: [
      "dây đai thép cho pallet",
      "dây đai thép cho hàng nặng",
      "dây đai thép cho cuộn thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Pallet thép và hàng cấu kiện",
        paragraphs: [
          "Với pallet thép, cần ưu tiên bản dây và số điểm đai đủ để hạn chế xê dịch theo phương ngang.",
          "Nên dùng thêm góc bảo vệ để giảm ma sát tại cạnh sắc.",
        ],
      },
      {
        heading: "Cuộn thép và kiện có tâm trọng lực lệch",
        paragraphs: [
          "Cuộn thép cần kiểm soát hướng đai và độ cân lực giữa các điểm siết.",
          "Dụng cụ bấm và loại khóa phải đồng bộ để tránh tuột mối trong quá trình nâng hạ.",
        ],
      },
      {
        heading: "Gợi ý kiểm tra trước khi xuất hàng",
        paragraphs: [
          "Thực hiện kiểm tra nhanh: lực siết, mối khóa, số điểm đai, trạng thái cạnh kiện.",
          "Checklist trước xuất kho giúp giảm lỗi phát sinh tại điểm giao.",
        ],
      },
    ],
  },
  {
    slug: "loi-thuong-gap-khi-dong-dai-thep-va-cach-khac-phuc",
    title: "Lỗi thường gặp khi đóng đai thép và cách khắc phục",
    description:
      "Các lỗi thường gặp như tuột khóa, lỏng đai, xước dây khi đóng đai thép và phương án xử lý ngay tại kho.",
    excerpt:
      "Tổng hợp lỗi vận hành phổ biến và cách khắc phục theo từng nguyên nhân để giảm tỷ lệ hàng lỗi.",
    publishedAt: "2026-05-15",
    updatedAt: "2026-05-15",
    keywords: [
      "lỗi đóng đai thép",
      "tuột khóa đai thép",
      "đai thép bị lỏng",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-seals", "steel-strapping"],
    sections: [
      {
        heading: "Khóa đai bị tuột sau vận chuyển",
        paragraphs: [
          "Nguyên nhân thường đến từ khóa sai kích thước hoặc lực bấm không đủ.",
          "Cách xử lý là thay đúng loại khóa và kiểm tra lại tình trạng hàm kìm bấm.",
        ],
      },
      {
        heading: "Đai lỏng sau khi bốc xếp",
        paragraphs: [
          "Có thể do lực siết ban đầu chưa đủ hoặc số điểm đai ít hơn yêu cầu thực tế.",
          "Nên tăng số điểm đai ở kiện có rung lắc nhiều và kiểm tra lại quy trình thao tác.",
        ],
      },
      {
        heading: "Dây bị xước hoặc cấn cạnh",
        paragraphs: [
          "Cạnh sắc của kiện hàng có thể gây suy giảm độ bền dây tại điểm tiếp xúc.",
          "Sử dụng góc bảo vệ và điều chỉnh đường đi dây để hạn chế rủi ro này.",
        ],
      },
    ],
  },
  {
    slug: "quy-trinh-kiem-tra-chat-luong-day-dai-thep-truoc-khi-nhap-kho",
    title: "Quy trình kiểm tra chất lượng dây đai thép trước khi nhập kho",
    description:
      "Hướng dẫn kiểm tra ngoại quan, quy cách, độ dày và đóng gói dây đai thép trước khi đưa vào vận hành.",
    excerpt:
      "Thiết lập quy trình kiểm tra đầu vào giúp doanh nghiệp giảm lỗi đóng đai và tránh gián đoạn sản xuất.",
    publishedAt: "2026-05-18",
    updatedAt: "2026-05-18",
    keywords: [
      "kiểm tra chất lượng dây đai thép",
      "quy trình nhập kho dây đai thép",
      "độ dày dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Kiểm tra ngoại quan và thông tin nhãn",
        paragraphs: [
          "Xác nhận chủng loại, bản dây, độ dày, số lô và tình trạng bề mặt ngay khi nhận hàng.",
          "Nếu có sai khác quy cách, cần tách lô để tránh dùng nhầm trong sản xuất.",
        ],
      },
      {
        heading: "Kiểm tra quy cách thực tế trên mẫu ngẫu nhiên",
        paragraphs: [
          "Đo bản rộng và độ dày trên nhiều điểm để phát hiện sai lệch lô.",
          "Nên lập biên bản kiểm tra để làm cơ sở làm việc với nhà cung cấp khi cần.",
        ],
      },
      {
        heading: "Bảo quản và cấp phát cho từng khu vực",
        paragraphs: [
          "Phân khu rõ cho dây dầu, dây mạ kẽm và khóa đai để tránh nhầm lẫn khi cấp phát.",
          "Quy định FIFO giúp kiểm soát tồn kho và chất lượng vận hành tốt hơn.",
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


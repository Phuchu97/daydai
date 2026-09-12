import { priorityArticles, priorityArticleSlugs } from "./priority-articles";
import { secondaryArticles, secondaryArticleSlugs } from "./secondary-articles";

export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  table?: ArticleTable;
};

export type ArticleFaq = {
  question: string;
  answer: string;
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
  faqs?: ArticleFaq[];
};

const rawArticles: Article[] = [
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
      "Dùng đúng thao tác với kìm siết/bấm khóa giúp giảm lỗi rất nhiều. Đây là quy trình ngắn gọn cho kho và nhà máy.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-16",
    keywords: [
      "hướng dẫn dụng cụ đóng đai thép",
      "cách dùng kìm siết",
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
          "Bước 2: Dùng kìm siết siết đến lực phù hợp, tránh siết quá mức.",
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
  {
    slug: "quy-trinh-dong-day-dai-thep-5-buoc-chuan-ky-thuat",
    title: "Quy trình đóng dây đai thép 5 bước chuẩn kỹ thuật",
    description:
      "Hướng dẫn chi tiết 5 bước đóng dây đai thép: luồn dây, lắp bọ sắt, siết căng, bấm khóa và cắt dây thừa — áp dụng cho pallet và kiện hàng nặng.",
    excerpt:
      "Làm đúng 5 bước giúp mối nối chắc, lực siết đồng đều và giảm rủi ro tuột đai khi vận chuyển. Quy trình chuẩn cho kho và nhà máy.",
    publishedAt: "2026-06-03",
    updatedAt: "2026-06-03",
    keywords: [
      "quy trình đóng dây đai thép",
      "cách đóng dây đai thép",
      "siết dây đai thép",
      "bấm bọ sắt đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Chuẩn bị dụng cụ và vật tư",
        paragraphs: [
          "Trước khi đóng đai, cần có đủ bộ ba: dây đai thép đúng bản rộng/độ dày, khóa đai thép (bọ sắt) tương thích và bộ dụng cụ gồm kìm siết (tensioner) cùng kìm bấm khóa (sealer). Hai dụng cụ này luôn dùng kết hợp — siết trước, bấm khóa trong lúc vẫn giữ lực căng.",
          "Kiểm tra nhanh dụng cụ: hàm kìm không gãy, không kẹt; bọ sắt đúng kích cỡ với bản dây (thường lớn hơn bản dây khoảng 0,2mm). Với kiện trên 500kg nên dùng kìm siết cơ học thay vì căng tay để lực đồng đều hơn.",
        ],
      },
      {
        heading: "Bước 1–2: Luồn dây và lắp bọ sắt",
        paragraphs: [
          "Quấn dây đai quanh kiện hoặc pallet theo hướng đã định (ngang, dọc hoặc kết hợp). Dây phải nằm sát bề mặt, không xoắn, không chéo lệch. Đặt đầu dây dưới cố định trên mặt kiện, đầu dây trên (từ cuộn) chồng khít lên đầu dây dưới tại vị trí phẳng, thuận tiện thao tác.",
          "Luồn bọ sắt vào hai lớp dây đã chồng nhau. Đặt bọ tránh xa góc sắc của kiện hàng; nếu cạnh nhọn, nên dùng nẹp góc (edge protector) để dây không bị cắt và hàng không bị móp.",
        ],
      },
      {
        heading: "Bước 3–4: Siết căng và bấm khóa",
        paragraphs: [
          "Đặt kìm siết lên dây: một ngàm giữ đầu dây dưới, bánh răng bám đầu dây trên. Gạt cần liên tục cho đến khi dây ôm sát kiện. Không siết quá mức — dễ biến dạng hàng hoặc làm dây đứt tại góc uốn.",
          "Giữ nguyên lực căng, đặt kìm bấm vuông góc với bọ sắt và bóp mạnh để bọ bẹt, ăn sâu vào hai lớp dây. Với hàng nặng, có thể bấm hai lần trên cùng một bọ để tăng độ bám. Mối khóa đạt chuẩn phải phẳng, không lỏng, không có cạnh nhô sắc.",
        ],
      },
      {
        heading: "Bước 5: Cắt dây và kiểm tra cuối",
        paragraphs: [
          "Dùng kéo cắt đai chuyên dụng, cắt phần dây thừa và chừa khoảng 1–2cm sau bọ để đầu dây không trượt vào trong bọ khi rung lắc.",
          "Kiểm tra lại toàn bộ vòng đai: độ căng đồng đều, mối khóa chắc, dây không sượt cạnh. Lập checklist cho từng ca giúp giảm lỗi lặp khi xuất hàng số lượng lớn.",
        ],
      },
    ],
  },
  {
    slug: "an-toan-khi-su-dung-day-dai-thep-tai-kho",
    title: "An toàn khi sử dụng dây đai thép tại kho và nhà máy",
    description:
      "Các quy tắc an toàn khi siết dây đai thép: trang bị bảo hộ, tư thế thao tác, phòng dây bật ngược (snap back) và kiểm tra dụng cụ trước vận hành.",
    excerpt:
      "Dây đai thép có cạnh sắc và có thể bật mạnh khi đứt. Bài viết tổng hợp quy tắc an toàn thực tế cho công nhân kho.",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-10",
    keywords: [
      "an toàn dây đai thép",
      "quy tắc siết đai thép",
      "snap back dây đai thép",
      "bảo hộ khi đóng đai",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-strapping"],
    sections: [
      {
        heading: "Rủi ro thường gặp khi thao tác",
        paragraphs: [
          "Mép dây đai thép sắc có thể cắt da khi luồn dây hoặc kéo tay không đeo găng. Khi dây đứt hoặc mối khóa bung đột ngột, phần dây co lại rất mạnh (hiện tượng snap back) — có thể gây chấn thương nếu đứng đúng hướng dây.",
          "Siết quá căng làm dây đứt tại góc uốn hoặc biến dạng hàng; dụng cụ hỏng (hàm kìm gãy, rỉ kẹt) có thể tạo mối nối yếu mà mắt thường khó phát hiện ngay.",
        ],
      },
      {
        heading: "Trang bị bảo hộ bắt buộc",
        paragraphs: [
          "Tối thiểu: găng tay chống cắt, giày bảo hộ và kính bảo vệ mắt khi cắt dây hoặc thao tác gần mối nối căng.",
          "Không đeo găng tay quá rộng vì dễ vướng vào bánh răng kìm siết. Với ca làm việc lặp nhiều, nên luân phiên người siết để giảm mỏi tay và sai sót do mệt.",
        ],
      },
      {
        heading: "Tư thế và kỹ thuật thao tác an toàn",
        paragraphs: [
          "Luôn đứng lệch hướng so với dây đai khi siết và cắt — không đứng trực diện theo hướng dây có thể bật về phía bạn.",
          "Trước mỗi ca, kiểm tra kìm siết và kìm bấm: không rỉ nặng, không lỏng ốc, hàm bấm đối xứng. Dụng cụ không tương thích bản dây (ví dụ dùng kìm 16mm cho dây 32mm) vừa hỏng máy vừa tạo mối nối không an toàn.",
        ],
      },
      {
        heading: "Quy định nội bộ nên có tại kho",
        paragraphs: [
          "Chuẩn hóa quy trình 5 bước, checklist kiểm tra mối nối trước khi xe nâng di chuyển pallet.",
          "Ghi nhận và báo cáo ngay sự cố tuột đai, đứt dây hoặc hỏng dụng cụ để điều chỉnh quy cách hoặc thay thiết bị kịp thời.",
        ],
      },
    ],
  },
  {
    slug: "cach-bo-tri-vong-dai-thep-cho-pallet-va-container",
    title: "Cách bố trí vòng đai thép cho pallet và container",
    description:
      "Hướng dẫn chọn số vòng đai, hướng siết ngang-dọc và vị trí đặt dây khi cố định pallet, kiện hàng nặng và hàng lên container.",
    excerpt:
      "Bố trí sai số vòng hoặc sai hướng đai khiến hàng xê dịch dù lực siết đủ. Cách phân bố vòng đai thực dụng cho kho Việt Nam.",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-14",
    keywords: [
      "bố trí dây đai thép",
      "số vòng đai thép pallet",
      "đóng đai container",
      "siết đai ngang dọc",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Nguyên tắc chọn số vòng đai",
        paragraphs: [
          "Kiện nhỏ, hình khối ổn định trên pallet thường cần tối thiểu 2 vòng đai (một ngang hoặc một dọc tùy hướng ưu tiên chịu lực). Kiện cao, nặng hoặc dễ nghiêng nên dùng 3–4 vòng, kết hợp cả ngang và dọc.",
          "Hàng có tâm trọng lực lệch (cuộn thép, máy móc) cần thêm điểm đai ở vùng chịu lực chính, không chỉ viền ngoài pallet.",
        ],
      },
      {
        heading: "Hướng siết ngang, dọc và chéo",
        paragraphs: [
          "Siết ngang giữ kiện bám pallet; siết dọc chống xê dịch theo phương cao. Với tuyến vận chuyển xa, rung nhiều, nên kết hợp cả hai.",
          "Tránh đặt dây qua vị trí yếu của bao bì (nắp hộp mỏng, cạnh tấm ván). Dùng nẹp góc tại điểm dây gập 90° để lực phân bố đều và giảm cắt dây.",
        ],
      },
      {
        heading: "Pallet lên container và xe tải",
        paragraphs: [
          "Trong container, ngoài đai từng pallet có thể cần thêm dây neo pallet với móc sàn hoặc thanh chèn nếu lô hàng không lấp kín.",
          "Trước khi đóng cửa container, kiểm tra lại mối khóa sau khi xe nâng hạ pallet — lực quán tính khi nâng hạ dễ làm lỏng đai nếu siết chưa đủ hoặc số vòng thiếu.",
        ],
      },
      {
        heading: "Checklist bố trí trước khi siết",
        paragraphs: [
          "Xác nhận hàng xếp cân, không vượt mép pallet; xác định hướng chịu lực chính khi xe chạy và khi nâng hạ.",
          "Đánh dấu vị trí vòng đai trên pallet mẫu cho từng loại hàng — giúp công nhân mới thao tác đồng nhất và giảm tranh luận giữa các ca.",
        ],
      },
    ],
  },
  {
    slug: "dieu-chinh-luc-siet-day-dai-thep-theo-tai-trong",
    title: "Điều chỉnh lực siết dây đai thép theo tải trọng hàng",
    description:
      "Cách căn lực siết dây đai thép phù hợp từng nhóm hàng: nhẹ, trung bình và nặng; dấu hiệu siết quá hoặc quá lỏng và cách kiểm tra nhanh tại kho.",
    excerpt:
      "Siết quá lỏng thì tuột đai, siết quá căng thì hỏng hàng và đứt dây. Hướng dẫn căn lực theo kinh nghiệm thực tế tại kho.",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-20",
    keywords: [
      "lực siết dây đai thép",
      "căng dây đai thép",
      "điều chỉnh lực siết đai",
      "độ căng dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools"],
    sections: [
      {
        heading: "Vì sao lực siết quyết định an toàn vận chuyển",
        paragraphs: [
          "Lực siết đủ giúp dây giữ kiện khi chịu rung, phanh gấp và nâng hạ forklift. Lực quá thấp khiến dây võng, mối khóa trượt; lực quá cao làm móp thùng, nứt pallet hoặc đứt dây tại góc.",
          "Với dây đai thép, độ dãn thấp hơn dây nhựa — sau khi siết, đai giữ lực ổn định lâu hơn nếu mối khóa đạt chuẩn.",
        ],
      },
      {
        heading: "Gợi ý mức siết theo nhóm hàng",
        paragraphs: [
          "Hàng nhẹ, bao bì mềm (carton, mút): siết vừa phải — dây ôm sát nhưng chưa làm lõm mặt thùng. Kiểm tra bằng cách ấn nhẹ giữa span dây, độ võng còn khoảng 20–40mm tùy bản dây.",
          "Hàng nặng (thép, gạch, máy móc trên pallet): cần lực cao hơn, thường kết hợp bản dây lớn hơn và nhiều vòng đai. Ưu tiên kìm siết cơ học để lực đồng đều giữa các ca.",
        ],
      },
      {
        heading: "Dấu hiệu siết chưa đạt",
        paragraphs: [
          "Sau bốc xếp, dây võng rõ hoặc xoay được trên mặt kiện — cần siết lại hoặc thêm vòng.",
          "Mối khóa có tiếng kêu, bọ biến dạng không đều, hoặc dây cắt sát quá sát bọ (<1cm) — nguy cơ tuột khi rung.",
        ],
      },
      {
        heading: "Chuẩn hóa lực siết trong doanh nghiệp",
        paragraphs: [
          "Chọn một kiện mẫu, thử 2–3 mức siết, vận chuyển thử nội bộ hoặc nâng hạ forklift rồi chốt mức chuẩn cho từng SKU.",
          "Với đơn xuất khắt khe, có thể dùng thiết bị đo lực căng; dây mới đôi khi cần siết cao hơn dây đã chạy vì độ dãn ban đầu khác nhau.",
        ],
      },
    ],
  },
  {
    slug: "bao-quan-day-dai-thep-va-dung-cu-dong-dai",
    title: "Bảo quản dây đai thép và dụng cụ đóng đai đúng cách",
    description:
      "Hướng dẫn lưu kho dây đai thép mạ kẽm, khóa đai và bộ kìm siết: chống ẩm, tránh va đập, xếp cuộn đúng chiều và bảo dưỡng dụng cụ.",
    excerpt:
      "Bảo quản sai làm dây gỉ sét, khóa lẫn quy cách và dụng cụ kẹt. Quy trình lưu kho gọn cho bộ phận vật tư và kho thành phẩm.",
    publishedAt: "2026-06-22",
    updatedAt: "2026-06-24",
    keywords: [
      "bảo quản dây đai thép",
      "lưu kho dây đai thép",
      "bảo dưỡng dụng cụ đóng đai",
      "dây đai thép mạ kẽm",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Điều kiện kho cho dây đai thép",
        paragraphs: [
          "Nên để nơi khô ráo, thoáng, tránh đọng nước trực tiếp lên cuộn. Dây mạ kẽm chịu ẩm tốt hơn dây dầu nhưng vẫn nên hạn chế môi trường muối biển, hóa chất ăn mòn.",
          "Không xếp chồng cuộn quá cao gây biến dạng mép dây. Cuộn đặt đứng hoặc nằm theo hướng nhà sản xuất khuyến cáo; tránh lăn cuộn trên nền bẩn làm xước bề mặt.",
        ],
      },
      {
        heading: "Phân khu khóa đai và dây theo quy cách",
        paragraphs: [
          "Tách riêng bọ 16mm, 19mm, 32mm và ghi nhãn rõ — nhầm khóa là nguyên nhân phổ biến gây tuột mối.",
          "Áp dụng FIFO: cuộn nhập trước xuất trước, tránh cuộn cũ nằm lâu bị ẩm mốc ở lõi.",
        ],
      },
      {
        heading: "Bảo dưỡng kìm siết và kìm bấm",
        paragraphs: [
          "Sau ca, làm sạch mạt sắt và bụi bám; tra dầu nhẹ vào bản lề và bánh răng theo khuyến cáo nhà sản xuất. Cất trong hộp riêng, không để chung khu ẩm ướt.",
          "Kìm có hàm mòn, lệch hoặc không giữ được lực căng nên đưa bảo trì hoặc thay — tiếp tục dùng sẽ tạo mối nối kém chất lượng.",
        ],
      },
      {
        heading: "Kiểm tra định kỳ trước khi cấp phát",
        paragraphs: [
          "Mỗi tuần rà soát ngoại quan cuộn dây: gỉ sét, mép xước, nhãn quy cách. Cuộn có dấu hiệu ẩm mốc nên tách lô kiểm tra trước khi đưa vào sản xuất.",
          "Lập sổ cấp phát dụng cụ theo ca/bộ phận giúp truy vết khi phát sinh lỗi chất lượng mối đai.",
        ],
      },
    ],
  },
  {
    slug: "day-dai-pet-hay-day-dai-thep",
    title: "Dây đai PET hay dây đai thép? Cách chọn theo tải và ngành",
    description:
      "So sánh dây đai PET và dây đai thép theo tải trọng, độ co giãn, an toàn thao tác, chi phí và môi trường vận chuyển để chọn đúng vật tư đóng gói.",
    excerpt:
      "PET nhẹ và an toàn khi cắt; thép chịu lực cao và ít co giãn. Bài viết giúp chốt lựa chọn theo từng nhóm hàng.",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-10",
    keywords: [
      "dây đai pet hay dây đai thép",
      "so sánh dây đai pet và thép",
      "dây đai thép vs pet",
      "chọn dây đai đóng hàng",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Khác biệt cốt lõi giữa PET và thép",
        paragraphs: [
          "Dây đai thép chịu lực kéo cao, độ dãn thấp sau khi siết — phù hợp kiện nặng, cạnh sắc, tuyến rung lắc mạnh. Dây đai PET nhẹ hơn, đàn hồi có kiểm soát, cắt an toàn hơn và thường tối ưu chi phí cho hàng vừa.",
          "Không có loại nào “tốt tuyệt đối”: chọn theo tải kiện, hình dạng hàng, số lần bốc xếp và yêu cầu an toàn lao động tại kho.",
        ],
      },
      {
        heading: "Khi nào nên ưu tiên dây đai thép",
        paragraphs: [
          "Cuộn thép, dầm, VLXD nặng, máy móc trên pallet, hàng xuất khẩu đường dài có nhiều lần nâng hạ — thép thường cho biên an toàn cao hơn.",
          "Nếu hàng có cạnh sắc dễ cắt dây nhựa, hoặc yêu cầu giữ lực ổn định nhiều ngày trong kho/container, dây đai thép + bọ kín là lựa chọn phổ biến.",
        ],
      },
      {
        heading: "Khi nào PET đủ dùng",
        paragraphs: [
          "Pallet hàng tiêu dùng, thùng carton ổn định, tải vừa và tuyến nội địa ngắn — PET giúp giảm chi phí và giảm rủi ro đứt dây gây thương tích khi cắt.",
          "Nếu đang cân nhắc chuyển từ thép sang PET, hãy test cùng số vòng đai và cùng quy trình nâng hạ trước khi thay toàn bộ dây chuyền.",
        ],
      },
      {
        heading: "Checklist quyết định nhanh",
        paragraphs: [
          "Ghi tải kiện, số điểm đai, loại pallet, quãng đường và môi trường ẩm. Nếu tải cao / cạnh sắc / xuất khẩu dài → nghiêng về thép. Nếu tải vừa / ưu tiên an toàn cắt / tối ưu giá → cân nhắc PET.",
          "Xem thêm trang tổng quan dây đai thép và bảng so sánh 16/19/32mm để chốt quy cách khi đã chọn thép.",
        ],
      },
    ],
  },
  {
    slug: "huong-dan-chon-day-dai-thep-cho-nha-may",
    title: "Hướng dẫn chọn dây đai thép cho nhà máy và kho logistics",
    description:
      "Quy trình chọn dây đai thép cho nhà máy: khảo sát tải, chuẩn hóa quy cách, đồng bộ khóa–dụng cụ, test mẫu và dự trù tồn kho theo tháng.",
    excerpt:
      "Chuẩn hóa vật tư đóng đai giúp giảm bung hàng và chi phí phát sinh. Checklist dành cho quản lý kho và sản xuất.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-10",
    keywords: [
      "chọn dây đai thép cho nhà máy",
      "dây đai thép kho logistics",
      "chuẩn hóa dây đai thép",
      "vật tư đóng đai công nghiệp",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Khảo sát hiện trạng trước khi mua",
        paragraphs: [
          "Liệt kê các nhóm SKU theo tải kiện, hình dạng và tuyến vận chuyển. Ghi nhận quy cách dây–bọ–dụng cụ đang dùng và tỷ lệ sự cố bung đai / đứt dây trong 1–3 tháng gần nhất.",
          "Ảnh thực tế mối đai lỗi giúp nhà cung cấp tư vấn đúng hơn là chỉ hỏi “báo giá dây 19mm”.",
        ],
      },
      {
        heading: "Chuẩn hóa 1–2 quy cách chính",
        paragraphs: [
          "Tránh tồn quá nhiều khổ dây khác nhau. Nhiều nhà máy chỉ cần 16mm cho hàng vừa và 19mm (hoặc 32mm) cho hàng nặng — kèm bọ và kìm khớp từng dòng.",
          "Gắn nhãn rõ tại khu vực cấp phát để công nhân không nhầm khóa 16 với 19.",
        ],
      },
      {
        heading: "Test mẫu và chốt SOP",
        paragraphs: [
          "Chạy thử 1–2 ca với quy cách mới: siết, bấm, nâng hạ forklift, quan sát độ võng sau 24 giờ nếu hàng lưu kho.",
          "Viết SOP ngắn: số vòng đai theo SKU, lực siết tham chiếu, checklist kiểm tra trước khi xuất.",
        ],
      },
      {
        heading: "Dự trù tồn và giao hàng miền Bắc",
        paragraphs: [
          "Tính tiêu hao theo kg/tháng và giữ tồn an toàn theo lead time giao. Với Hà Nội và KCN miền Bắc, có thể chia nhỏ lô giao để giảm tồn kho mà vẫn đủ chạy sản xuất.",
          "Kết hợp báo giá theo tháng để ổn định đơn giá khi thép đầu vào biến động.",
        ],
      },
    ],
  },
];

export const articles: Article[] = [
  ...priorityArticles,
  ...secondaryArticles,
  ...rawArticles.filter(
    (article) =>
      !priorityArticleSlugs.has(article.slug) &&
      !secondaryArticleSlugs.has(article.slug),
  ),
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


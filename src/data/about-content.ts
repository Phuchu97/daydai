import { catalogProducts } from "@/data/products";

export const aboutStrengths = [
  {
    title: "Tư vấn theo tải trọng thực tế",
    body: "Đề xuất bản rộng 16–32mm, độ dày, số điểm siết và loại khóa đai phù hợp từng pallet, cuộn thép hoặc kiện hàng — không bán theo mẫu chung.",
  },
  {
    title: "Tồn kho linh hoạt, giao theo ca",
    body: "Dây đai thép, khóa đai và dụng cụ siết thường có sẵn. Hỗ trợ giao Hà Nội, miền Bắc và toàn quốc theo lịch kho, ca sản xuất.",
  },
  {
    title: "Bộ giải pháp đồng bộ",
    body: "Cung cấp trọn bộ dây đai + khóa đai + kìm siết/bấm khóa để vận hành thống nhất, giảm lệch quy cách giữa các ca.",
  },
  {
    title: "Hỗ trợ sau bán hàng",
    body: "Hướng dẫn thao tác siết đai, xử lý tuột đai và điều chỉnh quy trình khi đổi quy cách hàng hoặc mở rộng sản lượng.",
  },
] as const;

export const aboutIndustries = [
  "Nhà máy thép & kim loại",
  "Kho logistics & 3PL",
  "Sản xuất pallet gỗ",
  "Vật liệu xây dựng",
  "Thiết bị công nghiệp",
  "Xuất nhập khẩu",
] as const;

export const aboutProcess = [
  {
    step: "01",
    title: "Tiếp nhận & tư vấn",
    body: "Trao đổi loại hàng, tải trọng, quy cách đóng gói và khu vực giao.",
  },
  {
    step: "02",
    title: "Báo giá & chốt quy cách",
    body: "Báo giá dây đai, khóa đai hoặc bộ dụng cụ theo số lượng và bản rộng.",
  },
  {
    step: "03",
    title: "Giao hàng",
    body: "Xuất kho, giao tận nơi hoặc hẹn lịch nhận theo ca vận hành.",
  },
  {
    step: "04",
    title: "Đồng hành vận hành",
    body: "Hỗ trợ khi đổi quy cách, bổ sung dụng cụ hoặc xử lý sự cố siết đai.",
  },
] as const;

export const aboutFaqs = [
  {
    question: "Dây Đai Thép Việt Nam cung cấp những sản phẩm gì?",
    answer:
      "Chúng tôi chuyên dây đai thép mạ kẽm các bản 16–32mm, khóa đai thép (bọ kín, bọ U), bộ dụng cụ đóng dây đai thép và bộ dụng cụ đóng dây đai nhựa PP/PET. Khách hàng có thể mua lẻ hoặc combo đồng bộ theo quy mô kho.",
  },
  {
    question: "Có tư vấn chọn quy cách dây đai theo tải trọng không?",
    answer:
      "Có. Đội ngũ tư vấn đề xuất bản rộng, độ dày, số vòng siết và loại khóa đai dựa trên loại pallet, cuộn thép hoặc kiện hàng thực tế — miễn phí trong giờ hành chính.",
  },
  {
    question: "Khu vực giao hàng và thời gian phản hồi báo giá?",
    answer:
      "Phục vụ toàn quốc, ưu tiên Hà Nội và miền Bắc. Báo giá thường phản hồi trong ngày làm việc qua hotline, Zalo hoặc form trên website.",
  },
  {
    question: "Doanh nghiệp mua số lượng lớn có được hỗ trợ riêng không?",
    answer:
      "Có. Chúng tôi hỗ trợ báo giá theo khối lượng, đồng bộ dây đai – khóa đai – dụng cụ và sắp xếp lịch giao phù hợp ca sản xuất của nhà máy hoặc trung tâm logistics.",
  },
] as const;

export const aboutProductShowcase = catalogProducts.map((product) => ({
  id: product.id,
  name: product.name,
  slug: product.slug,
  description: product.shortDescription,
  image: product.images[0],
}));

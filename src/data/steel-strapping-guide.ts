/**
 * Shared SEO / technical content for steel strapping landing pages.
 * Keep numbers consistent across báo giá, pillar, size & surface pages.
 */

export type StrapSurface = "dau" | "ma-kem" | "son";

export type StrapPriceRow = {
  surface: StrapSurface;
  surfaceLabel: string;
  widthMm: number;
  thicknessMm: string;
  priceLabel: string;
  bestFor: string;
};

export type SealPriceRow = {
  widthMm: number;
  typeLabel: string;
  pricePerPiece: string;
  pricePerKg: string;
};

export type SpecRow = {
  widthMm: number;
  thicknessMm: string;
  breakLoadN: string;
  metersPerKg: string;
  loadHint: string;
  bestFor: string;
  href: string;
};

export type PairingRow = {
  strapWidthMm: number;
  sealWidthLabel: string;
  note: string;
};

export type SurfaceGuide = {
  slug: string;
  surface: StrapSurface;
  name: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  widths: number[];
  thicknessMm: string;
  coilWeightKg: string;
  heroImage: { src: string; alt: string; caption?: string };
  gallery: { src: string; alt: string; caption?: string }[];
};

export type SizeGuide = {
  slug: string;
  widthMm: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  thicknessMm: string;
  breakLoadN: string;
  metersPerKg: string;
  loadHint: string;
  useCases: string[];
  whenToChoose: string[];
  whenToUpgrade: string;
  heroImage: { src: string; alt: string; caption?: string };
  gallery: { src: string; alt: string; caption?: string }[];
};

export const STRAP_PRICE_ROWS: StrapPriceRow[] = [
  { surface: "dau", surfaceLabel: "Dây đai thép dầu", widthMm: 16, thicknessMm: "0.5 - 0.8", priceLabel: "19.000 - 20.500đ/kg", bestFor: "Kho nội địa khô, tối ưu chi phí" },
  { surface: "dau", surfaceLabel: "Dây đai thép dầu", widthMm: 19, thicknessMm: "0.6 - 0.9", priceLabel: "19.500 - 21.500đ/kg", bestFor: "VLXD, pallet nặng trong nhà" },
  { surface: "dau", surfaceLabel: "Dây đai thép dầu", widthMm: 25, thicknessMm: "0.7 - 1.0", priceLabel: "19.000 - 21.000đ/kg", bestFor: "Kiện nặng tuyến nội địa" },
  { surface: "dau", surfaceLabel: "Dây đai thép dầu", widthMm: 32, thicknessMm: "0.8 - 1.2", priceLabel: "19.000 - 21.000đ/kg", bestFor: "Cuộn thép, cấu kiện siêu nặng" },
  { surface: "ma-kem", surfaceLabel: "Dây đai thép mạ kẽm", widthMm: 16, thicknessMm: "0.5 - 0.8", priceLabel: "22.000 - 24.000đ/kg", bestFor: "Pallet vừa, chống ẩm tốt hơn dầu" },
  { surface: "ma-kem", surfaceLabel: "Dây đai thép mạ kẽm", widthMm: 19, thicknessMm: "0.6 - 0.9", priceLabel: "22.500 - 24.500đ/kg", bestFor: "Xuất khẩu / kho ẩm phổ biến nhất" },
  { surface: "ma-kem", surfaceLabel: "Dây đai thép mạ kẽm", widthMm: 25, thicknessMm: "0.7 - 1.0", priceLabel: "22.000 - 24.000đ/kg", bestFor: "Container, tuyến dài" },
  { surface: "ma-kem", surfaceLabel: "Dây đai thép mạ kẽm", widthMm: 32, thicknessMm: "0.8 - 1.2", priceLabel: "22.000 - 24.000đ/kg", bestFor: "Hàng siêu nặng ngoài trời" },
  { surface: "son", surfaceLabel: "Dây đai thép sơn tĩnh điện", widthMm: 16, thicknessMm: "0.5 - 0.8", priceLabel: "23.500 - 25.500đ/kg", bestFor: "Ngoại quan đẹp, chống ăn mòn" },
  { surface: "son", surfaceLabel: "Dây đai thép sơn tĩnh điện", widthMm: 19, thicknessMm: "0.6 - 0.9", priceLabel: "23.500 - 25.500đ/kg", bestFor: "Xuất khẩu yêu cầu thẩm mỹ" },
  { surface: "son", surfaceLabel: "Dây đai thép sơn tĩnh điện", widthMm: 25, thicknessMm: "0.7 - 1.0", priceLabel: "23.000 - 25.000đ/kg", bestFor: "Lưu kho dài ngày ngoài trời" },
  { surface: "son", surfaceLabel: "Dây đai thép sơn tĩnh điện", widthMm: 32, thicknessMm: "0.8 - 1.2", priceLabel: "23.000 - 25.000đ/kg", bestFor: "Kiện nặng + chống ăn mòn cao" },
];

/** Market range used in intro copy for “giá dây đai thép bao nhiêu”. */
export const STRAP_PRICE_RANGE_LABEL = "19.000 - 25.500đ/kg";
export const SEAL_PRICE_RANGE_LABEL = "1.800 - 4.100đ/cái";

export const PRICE_FACTORS = [
  {
    title: "Loại bề mặt",
    detail:
      "Đai dầu thường rẻ nhất; mạ kẽm cao hơn vì chống gỉ; sơn tĩnh điện cao nhất trong 3 dòng phổ biến.",
  },
  {
    title: "Khổ rộng & độ dày",
    detail:
      "Bản 19–32mm và độ dày lớn hơn tiêu hao thép nhiều hơn, đơn giá/kg có thể gần nhau nhưng chi phí/kiện tăng vì dùng nhiều kg hơn.",
  },
  {
    title: "Khối lượng đặt hàng",
    detail:
      "Lô theo pallet/tháng được chiết khấu rõ hơn mua lẻ vài cuộn. Đơn ổn định theo tháng giúp giữ giá tốt khi thép đầu vào biến động.",
  },
  {
    title: "Địa điểm giao",
    detail:
      "Nội thành Hà Nội / KCN miền Bắc thường tối ưu chi phí vận chuyển hơn tuyến xa. Toàn quốc giao qua chành xe theo lịch.",
  },
  {
    title: "Chất lượng phôi & đồng đều kích thước",
    detail:
      "Hàng loại 1: mép đều, ít nối, độ dày ổn định. Hàng biên/tận dụng rẻ hơn nhưng dễ lệch dụng cụ và mối nối kém.",
  },
] as const;

export const COST_ESTIMATE_ROWS = [
  {
    scenario: "Pallet vừa ~400–600kg, 3 vòng đai 16mm",
    strapKg: "0.8 - 1.4 kg",
    sealQty: "3 - 6 bọ",
    note: "Ưu tiên tối ưu chi phí kho nội địa",
  },
  {
    scenario: "Pallet nặng ~800–1.200kg, 4 vòng đai 19mm",
    strapKg: "1.5 - 2.5 kg",
    sealQty: "4 - 8 bọ",
    note: "Phổ biến VLXD / xuất khẩu vừa",
  },
  {
    scenario: "Cuộn thép / kiện siêu nặng, đai 32mm",
    strapKg: "3 - 6+ kg",
    sealQty: "Theo số điểm đai",
    note: "Cần góc bảo vệ + dụng cụ 32mm",
  },
] as const;

export const BUYING_CHECKLIST = [
  "Xác định loại bề mặt theo môi trường (khô / ẩm / xuất khẩu).",
  "Chọn bản rộng + độ dày theo tải kiện và số điểm đai.",
  "Khớp khóa đai (bọ) và dụng cụ siết/bấm đúng khổ.",
  "Gửi số lượng theo tháng + địa điểm giao để nhận đơn giá lô.",
  "Test 1–2 cuộn mẫu trước khi nhập số lượng lớn.",
] as const;

export const CONSULTING_TOPICS = [
  {
    id: "chon-quy-cach",
    title: "Chọn quy cách & so sánh",
    description:
      "Chọn bản dây theo tải, so sánh PET/thép, chuẩn hóa vật tư cho nhà máy.",
    slugs: [
      "cach-chon-day-dai-thep-theo-tai-trong",
      "day-dai-thep-16mm-19mm-32mm-nen-chon-loai-nao",
      "so-sanh-day-dai-thep-va-day-dai-nhua",
      "day-dai-pet-hay-day-dai-thep",
      "huong-dan-chon-day-dai-thep-cho-nha-may",
      "day-dai-thep-cho-pallet-hang-nang-va-cuon-thep",
    ],
  },
  {
    id: "khoa-dung-cu",
    title: "Khóa đai, dụng cụ & báo giá",
    description:
      "Chọn bọ sắt khớp bản dây, dùng bộ dụng cụ đúng cách và hiểu yếu tố giá.",
    slugs: [
      "cach-chon-khoa-dai-thep-phu-hop-ban-day",
      "huong-dan-su-dung-bo-dung-cu-dong-dai-thep",
      "bao-gia-day-dai-thep-yeu-to-anh-huong-don-gia",
    ],
  },
  {
    id: "quy-trinh",
    title: "Quy trình đóng đai & an toàn",
    description:
      "5 bước đóng đai chuẩn, an toàn kho, bố trí vòng đai, chỉnh lực siết.",
    slugs: [
      "quy-trinh-dong-day-dai-thep-5-buoc-chuan-ky-thuat",
      "an-toan-khi-su-dung-day-dai-thep-tai-kho",
      "cach-bo-tri-vong-dai-thep-cho-pallet-va-container",
      "dieu-chinh-luc-siet-day-dai-thep-theo-tai-trong",
      "loi-thuong-gap-khi-dong-dai-thep-va-cach-khac-phuc",
    ],
  },
  {
    id: "van-hanh",
    title: "Kiểm tra chất lượng & bảo quản",
    description:
      "Kiểm tra trước nhập kho, bảo quản dây–khóa–dụng cụ để giảm hỏng hóc.",
    slugs: [
      "quy-trinh-kiem-tra-chat-luong-day-dai-thep-truoc-khi-nhap-kho",
      "bao-quan-day-dai-thep-va-dung-cu-dong-dai",
    ],
  },
] as const;

export const SEAL_PRICE_ROWS: SealPriceRow[] = [
  { widthMm: 16, typeLabel: "Bọ kín / chữ U", pricePerPiece: "1.800 - 2.400đ/cái", pricePerKg: "28.000 - 32.000đ/kg" },
  { widthMm: 19, typeLabel: "Bọ kín / chữ U", pricePerPiece: "2.000 - 2.700đ/cái", pricePerKg: "28.000 - 32.000đ/kg" },
  { widthMm: 25, typeLabel: "Bọ kín", pricePerPiece: "2.600 - 3.300đ/cái", pricePerKg: "28.000 - 31.000đ/kg" },
  { widthMm: 32, typeLabel: "Bọ kín", pricePerPiece: "3.200 - 4.100đ/cái", pricePerKg: "28.000 - 31.000đ/kg" },
];

export const SPEC_ROWS: SpecRow[] = [
  {
    widthMm: 16,
    thicknessMm: "0.5 - 0.8",
    breakLoadN: "6.500 - 9.000",
    metersPerKg: "14 - 18",
    loadHint: "400 - 900kg/đai",
    bestFor: "Pallet vừa, kiện ổn định hình khối",
    href: "/day-dai-thep-16mm",
  },
  {
    widthMm: 19,
    thicknessMm: "0.6 - 0.9",
    breakLoadN: "9.000 - 14.000",
    metersPerKg: "10 - 13",
    loadHint: "800 - 1.400kg/đai",
    bestFor: "Pallet thép, VLXD, tuyến rung lắc",
    href: "/day-dai-thep-19mm",
  },
  {
    widthMm: 25,
    thicknessMm: "0.7 - 1.0",
    breakLoadN: "14.000 - 18.000",
    metersPerKg: "7 - 10",
    loadHint: "1.100 - 1.800kg/đai",
    bestFor: "Kiện nặng, xuất khẩu đường dài",
    href: "/day-dai-thep-16mm-19mm-32mm",
  },
  {
    widthMm: 32,
    thicknessMm: "0.8 - 1.2",
    breakLoadN: "18.000 - 25.000+",
    metersPerKg: "5 - 8",
    loadHint: "1.300kg+/đai",
    bestFor: "Cuộn thép, cấu kiện siêu nặng",
    href: "/day-dai-thep-32mm",
  },
];

export const PAIRING_ROWS: PairingRow[] = [
  { strapWidthMm: 16, sealWidthLabel: "Bọ 16.2mm (bọ kín / chữ U)", note: "Phổ biến cho pallet vừa và kho nội địa" },
  { strapWidthMm: 19, sealWidthLabel: "Bọ 19.2mm (bọ kín / chữ U)", note: "Nên dùng bọ kín khi tuyến xa hoặc hàng nặng" },
  { strapWidthMm: 25, sealWidthLabel: "Bọ 25.6mm (bọ kín)", note: "Ưu tiên bọ kín, kiểm tra lực bấm đều" },
  { strapWidthMm: 32, sealWidthLabel: "Bọ 32mm (bọ kín)", note: "Bắt buộc khớp dụng cụ siết/bấm 32mm" },
];

export const LOAD_GUIDE_ROWS = [
  {
    load: "Dưới 500kg / kiện",
    recommend: "16mm × 0.5–0.6mm",
    notes: "2–3 vòng đai; kiểm tra ổn định hình khối",
  },
  {
    load: "500 – 1.200kg / kiện",
    recommend: "19mm × 0.6–0.8mm",
    notes: "3–4 vòng; ưu tiên bọ kín nếu đi xa",
  },
  {
    load: "Trên 1.200kg hoặc cuộn thép",
    recommend: "32mm × 0.8–1.2mm",
    notes: "Nhiều điểm đai + góc bảo vệ nếu cạnh sắc",
  },
  {
    load: "Pallet xuất khẩu / container",
    recommend: "19mm hoặc 32mm tùy tải",
    notes: "Thêm neo pallet nếu container không đầy",
  },
] as const;

export const INDUSTRY_CASES = [
  {
    industry: "Thép cuộn / cơ khí",
    need: "Biên an toàn cao, cạnh sắc",
    recommend: "32mm mạ kẽm + bọ kín + góc bảo vệ",
  },
  {
    industry: "Vật liệu xây dựng",
    need: "Kiện nặng, bốc xếp nhiều lần",
    recommend: "19–32mm dầu hoặc mạ kẽm",
  },
  {
    industry: "Gỗ / pallet xuất khẩu",
    need: "Ổn định trên tuyến dài",
    recommend: "19mm mạ kẽm hoặc sơn tĩnh điện",
  },
  {
    industry: "Kho vận nội địa miền Bắc",
    need: "Chi phí tối ưu, giao nhanh",
    recommend: "16–19mm theo tải; giao Hà Nội / KCN",
  },
] as const;

export const SURFACE_GUIDES: SurfaceGuide[] = [
  {
    slug: "day-dai-thep-dau",
    surface: "dau",
    name: "Dây đai thép dầu",
    h1: "Dây đai thép dầu (đai thép đen) cho hàng nặng trong kho",
    title: "Dây đai thép dầu | chịu lực cao, giá tối ưu",
    description:
      "Dây đai thép dầu (đai thép đen phủ dầu) 16mm, 19mm, 32mm: chịu lực tốt, giá cạnh tranh cho kho nội địa khô ráo. Tư vấn quy cách và báo giá trong ngày.",
    keywords: [
      "dây đai thép dầu",
      "đai thép đen",
      "dây đai thép đen phủ dầu",
      "giá dây đai thép dầu",
    ],
    intro:
      "Dây đai thép dầu (thường gọi đai thép đen) được phủ lớp dầu chống gỉ tạm thời. Loại này thường cứng và chịu lực kéo tốt, phù hợp kho nội địa khô ráo và các kiện cần biên an toàn cao với chi phí tối ưu.",
    pros: [
      "Chịu lực kéo tốt, ít co giãn sau khi siết",
      "Đơn giá thường thấp hơn mạ kẽm và sơn tĩnh điện",
      "Phù hợp máy đóng đai và dụng cụ tay phổ biến",
    ],
    cons: [
      "Chống ẩm kém hơn mạ kẽm nếu để ngoài trời lâu",
      "Bề mặt dầu cần bảo quản đúng để tránh bám bẩn",
    ],
    bestFor: [
      "Kho nội địa khô ráo",
      "Kiện gỗ, thùng kim loại, VLXD trong nhà",
      "Đơn hàng số lượng lớn cần tối ưu chi phí",
    ],
    widths: [16, 19, 25, 32],
    thicknessMm: "0.5 - 1.0",
    coilWeightKg: "30 - 50kg/cuộn (theo yêu cầu)",
    heroImage: {
      src: "/images/day-dai-thep-dau.jpg",
      alt: "Cuộn dây đai thép dầu (đai thép đen) tại kho",
      caption: "Dây đai thép dầu — tối ưu chi phí cho kho nội địa khô ráo",
    },
    gallery: [
      {
        src: "/images/phan-biet-chat-luong-day-dai-thep.jpg",
        alt: "So sánh chất lượng bề mặt dây đai thép",
        caption: "Kiểm tra bề mặt và độ đều mép dây",
      },
      {
        src: "/images/day-dai-thep-chat-luong-cao.jpg",
        alt: "Cuộn dây đai thép chất lượng cao xếp tại kho",
        caption: "Cuộn sẵn sàng cấp phát theo quy cách",
      },
      {
        src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
        alt: "Lô dây đai thép giao cho khách hàng",
        caption: "Giao hàng theo lô cho doanh nghiệp",
      },
    ],
  },
  {
    slug: "day-dai-thep-ma-kem",
    surface: "ma-kem",
    name: "Dây đai thép mạ kẽm",
    h1: "Dây đai thép mạ kẽm chống gỉ cho vận chuyển và lưu kho",
    title: "Dây đai thép mạ kẽm | chống gỉ, dùng phổ biến nhất",
    description:
      "Dây đai thép mạ kẽm 16mm, 19mm, 32mm chống ăn mòn tốt hơn đai dầu, phù hợp pallet xuất khẩu, kho ẩm và tuyến ngoài trời. Báo giá nhanh theo quy cách.",
    keywords: [
      "dây đai thép mạ kẽm",
      "đai thép mạ kẽm",
      "dây đai thép chống gỉ",
      "giá dây đai thép mạ kẽm",
    ],
    intro:
      "Dây đai thép mạ kẽm có lớp kẽm bảo vệ bề mặt, chống gỉ tốt hơn đai dầu trong môi trường ẩm hoặc lưu kho ngoài trời. Đây là lựa chọn phổ biến nhất cho doanh nghiệp cần cân bằng độ bền và chi phí.",
    pros: [
      "Chống gỉ tốt hơn đai dầu trong điều kiện ẩm",
      "Dễ bảo quản, bề mặt sạch hơn khi thao tác",
      "Phù hợp xuất khẩu và lưu kho dài ngày",
    ],
    cons: [
      "Đơn giá thường cao hơn đai dầu cùng quy cách",
      "Vẫn nên tránh để ngâm nước mặn / hóa chất mạnh",
    ],
    bestFor: [
      "Pallet xuất khẩu, container",
      "Kho gần biển hoặc độ ẩm cao",
      "Hàng lưu kho dài ngày trước khi xuất",
    ],
    widths: [16, 19, 25, 32],
    thicknessMm: "0.5 - 1.0",
    coilWeightKg: "30 - 50kg/cuộn (theo yêu cầu)",
    heroImage: {
      src: "/images/day-dai-thep-ma-kem-xanh.jpg",
      alt: "Dây đai thép mạ kẽm bề mặt sáng chống gỉ",
      caption: "Dây đai thép mạ kẽm — chống ẩm tốt hơn đai dầu",
    },
    gallery: [
      {
        src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
        alt: "Dây đai thép mạ kẽm tại kho khách hàng",
        caption: "Sẵn sàng dùng tại kho doanh nghiệp",
      },
      {
        src: "/images/xuat-hang-1.jpg",
        alt: "Xuất kho cuộn dây đai thép mạ kẽm theo pallet",
        caption: "Xuất hàng theo lô pallet",
      },
      {
        src: "/images/day-dai-thep-chat-luong-cao.jpg",
        alt: "Cuộn dây đai thép chất lượng cao",
        caption: "Quy cách đồng đều theo đơn đặt hàng",
      },
    ],
  },
  {
    slug: "day-dai-thep-son-tinh-dien",
    surface: "son",
    name: "Dây đai thép sơn tĩnh điện",
    h1: "Dây đai thép sơn tĩnh điện chống ăn mòn và thẩm mỹ hơn",
    title: "Dây đai thép sơn tĩnh điện | chống ăn mòn, nhiều màu",
    description:
      "Dây đai thép sơn tĩnh điện 16mm, 19mm, 32mm: lớp sơn chống ăn mòn, màu xanh/đen phổ biến. Phù hợp hàng xuất khẩu và môi trường khắc nghiệt hơn.",
    keywords: [
      "dây đai thép sơn tĩnh điện",
      "đai thép sơn",
      "dây đai thép xanh",
      "giá dây đai thép sơn tĩnh điện",
    ],
    intro:
      "Dây đai thép sơn tĩnh điện được phủ lớp sơn bảo vệ (thường xanh hoặc đen), tăng khả năng chống ăn mòn và dễ nhận diện trên dây chuyền. Phù hợp khi cần độ bền bề mặt cao hơn đai dầu thông thường.",
    pros: [
      "Chống ăn mòn tốt, bề mặt thẩm mỹ hơn",
      "Dễ phân biệt quy cách / lô hàng theo màu",
      "Ổn định khi lưu kho và vận chuyển ngoài trời",
    ],
    cons: [
      "Đơn giá thường cao nhất trong 3 dòng phổ biến",
      "Cần chọn đúng độ dày để không đánh đổi chịu lực",
    ],
    bestFor: [
      "Hàng xuất khẩu yêu cầu ngoại quan",
      "Môi trường ẩm / ngoài trời dài ngày",
      "Doanh nghiệp muốn chuẩn hóa nhận diện vật tư",
    ],
    widths: [16, 19, 25, 32],
    thicknessMm: "0.5 - 1.0",
    coilWeightKg: "30 - 50kg/cuộn (theo yêu cầu)",
    heroImage: {
      src: "/images/day-dai-thep-ma-kem-xanh.jpg",
      alt: "Dây đai thép sơn / phủ màu chống ăn mòn",
      caption: "Dây đai thép sơn tĩnh điện — chống ăn mòn và dễ nhận diện",
    },
    gallery: [
      {
        src: "/images/phan-biet-chat-luong-day-dai-thep.jpg",
        alt: "Phân biệt chất lượng bề mặt dây đai thép sơn",
        caption: "Kiểm tra lớp phủ trước khi nhập kho",
      },
      {
        src: "/images/xuat-hang-2.jpg",
        alt: "Cuộn dây đai thép đóng gói xuất hàng",
        caption: "Đóng gói bảo vệ trước khi giao",
      },
      {
        src: "/images/nha-may-dong-dai-3.webp",
        alt: "Nhà máy đóng đai thép công nghiệp",
        caption: "Ứng dụng tại nhà máy đóng gói",
      },
    ],
  },
];

export const SIZE_GUIDES: SizeGuide[] = [
  {
    slug: "day-dai-thep-16mm",
    widthMm: 16,
    name: "Dây đai thép 16mm",
    h1: "Dây đai thép 16mm: khi nào nên dùng và cách chọn độ dày",
    title: "Dây đai thép 16mm | giá tốt cho pallet vừa",
    description:
      "Dây đai thép 16mm (0.5–0.8mm): tải tham khảo 400–900kg/đai, khoảng 14–18m/kg. Tư vấn khi nào dùng 16mm và khi nào nâng lên 19mm.",
    keywords: [
      "dây đai thép 16mm",
      "đai thép 16mm",
      "giá dây đai thép 16mm",
      "day dai thep 16mm",
    ],
    intro:
      "Dây đai thép 16mm là quy cách phổ biến cho pallet vừa và kiện ổn định hình khối. Chi phí thấp hơn 19mm/32mm nhưng vẫn đủ an toàn nếu số điểm đai và lực siết đúng chuẩn.",
    thicknessMm: "0.5 - 0.8",
    breakLoadN: "6.500 - 9.000",
    metersPerKg: "14 - 18",
    loadHint: "400 - 900kg/đai (tham khảo)",
    useCases: [
      "Pallet hàng tiêu dùng / linh kiện trên pallet gỗ",
      "Kiện thùng ổn định, ít cạnh sắc",
      "Kho nội địa, tuyến ngắn đến trung bình",
    ],
    whenToChoose: [
      "Tải kiện dưới ~500–800kg và hình khối ổn định",
      "Muốn tối ưu chi phí vật tư trên số lượng lớn",
      "Đã có dụng cụ và bọ 16mm đang chạy ổn",
    ],
    whenToUpgrade:
      "Nâng lên 19mm nếu kiện nặng hơn, tuyến xa, nhiều lần bốc xếp hoặc hàng dễ xê dịch trên pallet.",
    heroImage: {
      src: "/images/day-dai-thep-chat-luong-cao.jpg",
      alt: "Dây đai thép 16mm cuộn tại kho",
      caption: "Dây đai thép 16mm — tối ưu chi phí cho pallet vừa",
    },
    gallery: [
      {
        src: "/images/bo-thep-kin.jpg",
        alt: "Khóa đai thép bọ kín dùng với dây 16mm",
        caption: "Khớp với bọ kín / chữ U 16mm",
      },
      {
        src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
        alt: "Dây đai thép tại kho khách hàng",
        caption: "Sẵn sàng đóng pallet tại kho",
      },
      {
        src: "/images/xuat-hang-1.jpg",
        alt: "Xuất hàng cuộn dây đai thép 16mm",
        caption: "Giao theo lô cho doanh nghiệp",
      },
    ],
  },
  {
    slug: "day-dai-thep-19mm",
    widthMm: 19,
    name: "Dây đai thép 19mm",
    h1: "Dây đai thép 19mm: lựa chọn cân bằng cho hàng nặng",
    title: "Dây đai thép 19mm | cân bằng chịu lực và chi phí",
    description:
      "Dây đai thép 19mm (0.6–0.9mm): tải tham khảo 800–1.400kg/đai. Phù hợp pallet thép, VLXD và tuyến rung lắc. So sánh với 16mm và 32mm.",
    keywords: [
      "dây đai thép 19mm",
      "đai thép 19mm",
      "giá dây đai thép 19mm",
      "day dai thep 19mm",
    ],
    intro:
      "Dây đai thép 19mm là quy cách “vàng” cho nhiều nhà máy: chịu lực tốt hơn 16mm rõ rệt mà chưa đội chi phí như 32mm. Phù hợp pallet thép, vật liệu xây dựng và tuyến vận chuyển có rung lắc.",
    thicknessMm: "0.6 - 0.9",
    breakLoadN: "9.000 - 14.000",
    metersPerKg: "10 - 13",
    loadHint: "800 - 1.400kg/đai (tham khảo)",
    useCases: [
      "Pallet thép, ống, thanh profile",
      "Gạch, đá, vật tư xây dựng",
      "Xuất khẩu đường bộ / container tải trung bình–nặng",
    ],
    whenToChoose: [
      "Kiện 500–1.200kg hoặc cần biên an toàn cao hơn 16mm",
      "Hàng dễ xê dịch / cạnh cứng",
      "Muốn một quy cách chuẩn cho nhiều SKU",
    ],
    whenToUpgrade:
      "Chuyển 32mm khi cuộn thép, cấu kiện siêu nặng hoặc yêu cầu hệ số an toàn rất cao.",
    heroImage: {
      src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
      alt: "Dây đai thép 19mm tại kho doanh nghiệp",
      caption: "Dây đai thép 19mm — quy cách phổ biến cho hàng nặng",
    },
    gallery: [
      {
        src: "/images/bo-thep-kin-19-mat-truoc.jpg",
        alt: "Bọ thép kín 19mm mặt trước",
        caption: "Bọ kín 19mm khớp bản dây",
      },
      {
        src: "/images/bo-thep-kin-19-mat-sau.jpg",
        alt: "Bọ thép kín 19mm mặt sau",
        caption: "Chi tiết khóa đai 19mm",
      },
      {
        src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
        alt: "Lô dây đai thép 19mm giao khách",
        caption: "Giao hàng theo nhu cầu tháng",
      },
    ],
  },
  {
    slug: "day-dai-thep-32mm",
    widthMm: 32,
    name: "Dây đai thép 32mm",
    h1: "Dây đai thép 32mm cho hàng siêu nặng và cuộn thép",
    title: "Dây đai thép 32mm | chịu lực cao cho hàng siêu nặng",
    description:
      "Dây đai thép 32mm (0.8–1.2mm): tải tham khảo từ 1.300kg/đai trở lên. Dùng cho cuộn thép, cấu kiện nặng; cần khớp bọ và dụng cụ 32mm.",
    keywords: [
      "dây đai thép 32mm",
      "đai thép 32mm",
      "giá dây đai thép 32mm",
      "day dai thep 32mm",
    ],
    intro:
      "Dây đai thép 32mm dành cho kiện siêu nặng, cuộn thép và cấu kiện cần biên an toàn cao. Cần đồng bộ khóa đai và dụng cụ 32mm — không dùng bọ/kìm lệch quy cách.",
    thicknessMm: "0.8 - 1.2",
    breakLoadN: "18.000 - 25.000+",
    metersPerKg: "5 - 8",
    loadHint: "1.300kg+/đai (tham khảo)",
    useCases: [
      "Cuộn thép, dầm, cấu kiện kim loại lớn",
      "Máy móc / thiết bị nặng trên pallet",
      "Tuyến xa, nhiều lần nâng hạ forklift",
    ],
    whenToChoose: [
      "Tải kiện cao hoặc hình dạng khó cố định",
      "Yêu cầu hệ số an toàn lớn từ khách hàng / xuất khẩu",
      "Đã trang bị dụng cụ và bọ 32mm",
    ],
    whenToUpgrade:
      "Nếu tải thấp hơn, cân nhắc 19mm để giảm chi phí — miễn là test thực tế đạt an toàn.",
    heroImage: {
      src: "/images/day-dai-thep-32mm.jpg",
      alt: "Cuộn dây đai thép 32mm chịu lực cao",
      caption: "Dây đai thép 32mm — cho cuộn thép và kiện siêu nặng",
    },
    gallery: [
      {
        src: "/images/day-dai-thep-32-chat-luong.jpg",
        alt: "Dây đai thép 32mm chất lượng cao chi tiết",
        caption: "Chi tiết bề mặt và mép dây 32mm",
      },
      {
        src: "/images/day-dai-thep-32.jpg",
        alt: "Dây đai thép bản 32mm tại kho",
        caption: "Quy cách 32mm sẵn kho",
      },
      {
        src: "/images/do-day-bo-thep-32.jpg",
        alt: "Đo độ dày bọ thép 32mm",
        caption: "Khóa đai / bọ khớp 32mm",
      },
    ],
  },
];

export function getSurfaceGuide(slug: string): SurfaceGuide | undefined {
  return SURFACE_GUIDES.find((item) => item.slug === slug);
}

export function getSizeGuide(slug: string): SizeGuide | undefined {
  return SIZE_GUIDES.find((item) => item.slug === slug);
}

export function pricesForSurface(surface: StrapSurface): StrapPriceRow[] {
  return STRAP_PRICE_ROWS.filter((row) => row.surface === surface);
}

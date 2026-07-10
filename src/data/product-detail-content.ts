import type { CatalogProduct } from "@/data/products";
import { steelStrappingBenefits } from "@/data/steel-strapping-content";
import {
  plasticStrappingToolsApplications,
  plasticStrappingToolsBenefits,
  plasticStrappingToolsFaqs,
  plasticStrappingToolsIndustries,
  plasticStrappingToolsOverview,
  plasticStrappingToolsSpecs,
  plasticStrappingToolsTechnical,
} from "@/data/plastic-strapping-content";
import type { FaqItem } from "@/components/product/FAQSection";

const steelStrappingToolsBenefits = [
  "Siết dây đai thép nhanh, bấm khóa chắc cho pallet hàng nặng.",
  "Phù hợp kho sản xuất, logistics và đóng container hàng thép, gỗ.",
  "Giảm thời gian đóng đai so với thao tác thủ công, ít lỗi bung đai.",
  "Tư vấn chọn bộ phù hợp bản dây 16–32mm và hướng dẫn thao tác.",
];

const steelSealsBenefits = [
  "Khóa chặt đầu dây đai sau khi siết, giữ lực ổn định khi vận chuyển.",
  "Nhiều kích thước cho bản dây 16–32mm, dùng kèm dây đai thép.",
  "Giảm tuột khóa khi bốc xếp và rung lắc trên đường dài.",
  "Phù hợp đóng pallet thép, gỗ và kiện hàng xuất khẩu.",
];

export function getProductBenefits(product?: CatalogProduct) {
  switch (product?.id) {
    case "steel-strapping":
      return {
        title: "Lợi ích khi sử dụng dây đai thép",
        benefits: steelStrappingBenefits,
      };
    case "steel-strapping-tools":
      return {
        title: "Lợi ích khi dùng bộ dụng cụ đóng đai thép",
        benefits: steelStrappingToolsBenefits,
      };
    case "plastic-strapping-tools":
      return {
        title: "Lợi ích khi dùng bộ dụng cụ đóng đai nhựa",
        benefits: plasticStrappingToolsBenefits,
      };
    case "steel-seals":
      return {
        title: "Lợi ích khi dùng khóa đai thép (bọ thép)",
        benefits: steelSealsBenefits,
      };
    default:
      return {
        title: "Lợi ích khi sử dụng dây đai thép",
        benefits: steelStrappingBenefits,
      };
  }
}

type DescriptionContent = {
  overview: string;
  applications: string[];
  industries: string[];
  technical: string;
};

const steelStrappingDescription: DescriptionContent = {
  overview:
    "Dây đai thép công nghiệp được thiết kế để cố định hàng hóa trọng tải lớn như cuộn thép, ống thép, pallet gỗ, máy móc và vật liệu xây dựng. Với độ bền kéo cao và khả năng chịu va đập tốt, dây đai thép đảm bảo hàng hóa luôn được siết chặt an toàn trong suốt quá trình bốc xếp và vận chuyển.",
  applications: [
    "Đóng đai pallet hàng nặng trong kho và container.",
    "Cố định cuộn thép, tôn, ống thép, dầm thép.",
    "Gia cố hàng hóa trên xe tải và rơ-moóc.",
    "Dùng trong nhà máy sản xuất thép, gỗ, kính, vật liệu xây dựng.",
  ],
  industries: [
    "Nhà máy thép, cơ khí, kết cấu thép.",
    "Doanh nghiệp logistics, xưởng sản xuất, ICD.",
    "Công ty xây dựng, bãi vật liệu.",
    "Đơn vị đóng gói công nghiệp và xuất khẩu.",
  ],
  technical:
    "Dây đai thép được sản xuất từ thép cacbon chất lượng cao, qua xử lý nhiệt và bề mặt để đạt được lực kéo và độ dẻo tối ưu. Bản rộng và độ dày khác nhau cho phép lựa chọn phù hợp với tải trọng và kích thước kiện hàng. Khi kết hợp với bộ dụng cụ siết đai và khóa đai thép, hệ thống đóng gói tạo thành vòng đai chắc chắn, phân bổ lực đều và giảm nguy cơ bung đai trong quá trình vận chuyển.",
};

const steelStrappingToolsDescription: DescriptionContent = {
  overview:
    "Bộ dụng cụ đóng đai thép giúp siết dây đai nhanh, cố định khóa đai chắc chắn và tối ưu thao tác cho nhân sự kho/nhà máy. Sản phẩm phù hợp khi bạn cần tốc độ đóng đai ổn định cho pallet, thùng hàng và kiện xuất vận chuyển.",
  applications: [
    "Siết và bấm khóa dây đai thép cho pallet hàng nặng.",
    "Đóng kiện cuộn thép, ống thép, tôn cuộn trong kho.",
    "Gia cố hàng trên xe tải, container trước khi xuất.",
    "Thay thế thao tác thủ công, rút ngắn thời gian đóng gói.",
  ],
  industries: [
    "Nhà máy thép, cơ khí, sản xuất có pallet nặng.",
    "Kho logistics, ICD, bãi container.",
    "Xưởng gỗ, vật liệu xây dựng cần đai chắc.",
    "Doanh nghiệp xuất khẩu hàng công nghiệp.",
  ],
  technical:
    "Bộ dụng cụ siết – bấm khóa hoạt động theo nguyên lý siết dây đến lực căng phù hợp, sau đó bấm/khóa để hoàn tất vòng đai. Khi thao tác đúng quy trình, bạn sẽ giảm rủi ro bung đai, tăng độ ổn định và rút ngắn thời gian đóng gói.",
};

const steelSealsDescription: DescriptionContent = {
  overview:
    "Bọ thép (khóa đai thép) dùng để cố định đầu dây đai sau khi siết, giúp vòng đai giữ lực ổn định và hạn chế tuột đai trong quá trình bốc xếp – vận chuyển.",
  applications: [
    "Khóa đầu dây đai thép sau khi siết xong pallet.",
    "Dùng cho kiện hàng xuất vận chuyển đường dài.",
    "Kết hợp dây bản 16–32mm tùy quy cách.",
    "Thay thế khi cần độ chắc cao hơn so với khóa rẻ.",
  ],
  industries: [
    "Kho thép, logistics, đóng container.",
    "Nhà máy sản xuất có pallet nặng.",
    "Doanh nghiệp xuất khẩu hàng kim loại, gỗ.",
    "Đơn vị đóng gói công nghiệp.",
  ],
  technical:
    "Khóa đai thép giúp liên kết và giữ chặt đầu dây sau khi siết. Việc chọn đúng kích thước khóa theo bản dây sẽ giúp vòng đai ổn định hơn và hạn chế tuột trong quá trình vận chuyển.",
};

const plasticStrappingToolsDescription: DescriptionContent = {
  overview: plasticStrappingToolsOverview,
  applications: plasticStrappingToolsApplications,
  industries: plasticStrappingToolsIndustries,
  technical: plasticStrappingToolsTechnical,
};

export function getProductDescription(product?: CatalogProduct): DescriptionContent {
  switch (product?.id) {
    case "steel-strapping-tools":
      return steelStrappingToolsDescription;
    case "plastic-strapping-tools":
      return plasticStrappingToolsDescription;
    case "steel-seals":
      return steelSealsDescription;
    case "steel-strapping":
    default:
      return steelStrappingDescription;
  }
}

export function getProductSpecs(product?: CatalogProduct) {
  if (!product) {
    return [
      { label: "Bản rộng", value: "16mm, 19mm, 25mm, 32mm" },
      { label: "Độ dày", value: "0.6mm – 1.0mm" },
      { label: "Vật liệu", value: "Thép cacbon mạ kẽm / sơn đen chống gỉ" },
      { label: "Lực kéo đứt", value: "Tùy quy cách, lên tới 1.200–1.800 kgf/đai" },
      {
        label: "Trọng lượng cuộn",
        value: "Khoảng 25–50kg/cuộn (tùy bản rộng & độ dày)",
      },
      {
        label: "Ứng dụng",
        value:
          "Đóng đai pallet hàng nặng, cuộn thép, ống thép, máy móc và kiện hàng xuất khẩu",
      },
    ];
  }

  if (product.id === "plastic-strapping-tools") {
    return plasticStrappingToolsSpecs;
  }

  if (product.id === "steel-strapping-tools") {
    return [
      { label: "Thành phần", value: "Kìm siết, kìm bấm khóa, dụng cụ siết–bấm kết hợp" },
      { label: "Mục đích", value: "Siết dây đai & bấm khóa để hoàn tất vòng đai" },
      { label: "Bản dây tương thích", value: "Phổ biến: 16–19–32mm (tùy bộ)" },
      { label: "Vật liệu", value: "Kim loại chịu lực, thiết kế cho môi trường kho/nhà máy" },
      { label: "Hướng dẫn", value: "Tư vấn kỹ thuật miễn phí + hướng dẫn thao tác" },
      { label: "Trạng thái", value: "Có sẵn hàng, giao toàn quốc" },
    ];
  }

  if (product.id === "steel-seals") {
    return [
      { label: "Loại khóa", value: "Khóa đai thép (bọ thép, bọ sắt)" },
      { label: "Bản dây tương thích", value: "Phù hợp phổ biến: 16–32mm" },
      { label: "Chức năng", value: "Cố định đầu dây đai sau khi siết" },
      { label: "Vật liệu", value: "Thép chịu lực, giảm nguy cơ tuột khóa" },
      { label: "Ứng dụng", value: "Đóng đai pallet thép/gỗ, hàng xuất vận chuyển" },
      { label: "Tư vấn", value: "Chọn đúng kích thước để tối ưu độ ổn định" },
    ];
  }

  return [
    { label: "Bản rộng", value: "16mm, 19mm, 25mm, 32mm" },
    { label: "Độ dày", value: "0.6mm – 1.0mm" },
    { label: "Vật liệu", value: "Thép cacbon mạ kẽm / sơn đen chống gỉ" },
    { label: "Lực kéo đứt", value: "Tùy quy cách, lên tới 1.200–1.800 kgf/đai" },
    {
      label: "Trọng lượng cuộn",
      value: "Khoảng 25–50kg/cuộn (tùy bản rộng & độ dày)",
    },
    {
      label: "Ứng dụng",
      value:
        "Đóng đai pallet hàng nặng, cuộn thép, ống thép, máy móc và kiện hàng xuất khẩu",
    },
  ];
}

export function getProductFaqs(product?: CatalogProduct): FaqItem[] | undefined {
  switch (product?.id) {
    case "plastic-strapping-tools":
      return plasticStrappingToolsFaqs;
    default:
      return undefined;
  }
}

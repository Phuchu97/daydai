export type ProductImage = {
  src: string;
  alt: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  basePrice?: number;
  salePrice?: number;
  priceLabel?: string;
  shortDescription: string;
  images: ProductImage[];
  upsellDescription?: string;
  showInUpsell?: boolean;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "steel-strapping",
    name: "Dây đai thép công nghiệp chịu lực cao",
    slug: "/san-pham/day-dai-thep-chiu-luc-cao",
    basePrice: 1900000,
    salePrice: 1450000,
    shortDescription:
      "Dây đai thép mạ kẽm, chịu lực cao, dùng cho pallet hàng nặng và cuộn thép.",
    images: [
      { src: "/images/day-dai-1.JPG", alt: "Cuộn dây đai thép trong kho" },
      { src: "/images/day-dai-2.JPG", alt: "Dây đai thép siết pallet hàng" },
      { src: "/images/day-dai-3.JPG", alt: "Kho dây đai thép công nghiệp" },
      { src: "/images/day-dai-4.JPG", alt: "Dây đai thép trên xe tải" },
    ],
    upsellDescription: "Cuộn dây đai thép mạ kẽm chịu lực cao.",
    showInUpsell: true,
  },
  {
    id: "steel-strapping-tools",
    name: "Bộ dụng cụ đóng đai thép",
    slug: "/san-pham/bo-dung-cu-dong-dai-thep",
    basePrice: 1900000,
    salePrice: 1450000,
    shortDescription:
      "Bộ tensioner, sealer, combination tools nhập khẩu Đài Loan, dùng cho dây đai thép.",
    images: [
      {
        src: "/images/dung-cu-dong-dai-3.jpg",
        alt: "Bộ dụng cụ đóng đai thép",
      },
      {
        src: "/images/kho-dung-cu-dong-dai.png",
        alt: "Kho dụng cụ đóng đai thép",
      },
    ],
    upsellDescription:
      "Tensioner, sealer và combination tools cho dây đai thép.",
    showInUpsell: true,
  },
  {
    id: "steel-seals",
    name: "Khóa đai thép (seals)",
    slug: "/san-pham/khoa-dai-thep-seals",
    priceLabel: "Liên hệ",
    shortDescription:
      "Khóa đai thép dùng kèm dây đai, nhiều kích thước cho bản 16–32mm.",
    images: [
      {
        src: "/images/kho-dung-cu-dong-dai.png",
        alt: "Khóa đai thép dùng kèm dây đai",
      },
    ],
    upsellDescription:
      "Khóa thép dùng cùng dây đai, nhiều kích thước, giữ đai chắc chắn.",
    showInUpsell: true,
  },
];

export function getProductById(id: string): CatalogProduct | undefined {
  return catalogProducts.find((p) => p.id === id);
}


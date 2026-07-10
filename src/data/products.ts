import { STEEL_STRAPPING_PRICE_PER_KG } from "@/config/pricing";

export type ProductImage = {
  src: string;
  alt: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  slug: string;
  /** Số lượng đã bán (hiển thị social proof). */
  soldCount?: number;
  /** Giá cố định theo đơn vị sản phẩm (bộ, thùng, …). */
  basePrice?: number;
  salePrice?: number;
  /** Giá theo kg (dây đai thép). */
  pricePerKg?: number;
  priceLabel?: string;
  shortDescription: string;
  images: ProductImage[];
  upsellDescription?: string;
  showInUpsell?: boolean;
};

export const catalogProducts: CatalogProduct[] = [
  {
    id: "steel-strapping",
    name: "Dây đai thép",
    slug: "/san-pham/day-dai-thep-chiu-luc-cao",
    soldCount: 1284,
    pricePerKg: STEEL_STRAPPING_PRICE_PER_KG,
    shortDescription:
      "Dây đai thép mạ kẽm chịu lực cao — bản 16/19/25/32mm, dùng đóng pallet, cuộn thép, logistics. Giao toàn quốc, tư vấn quy cách miễn phí.",
    images: [
      {
        src: "/images/day-dai-thep-dau.jpg",
        alt: "Dây đai thép mạ kẽm xanh",
      },
      {
        src: "/images/day-dai-thep-chat-luong-cao.jpg",
        alt: "Cuộn dây đai thép chất lượng cao",
      },
      {
        src: "/images/day-dai-thep-32mm.jpg",
        alt: "Dây đai thép 32mm",
      },
      {
        src: "/images/day-dai-thep-tai-kho-khach-hang.jpg",
        alt: "Dây đai thép tại kho khách hàng",
      },
      {
        src: "/images/lo-day-dai-thep-giao-cho-khach-hang.jpg",
        alt: "Lô dây đai thép giao cho khách hàng",
      },
    ],
    upsellDescription: "Dây đai thép mạ kẽm — nhiều bản rộng, giao nhanh toàn quốc.",
    showInUpsell: true,
  },
  {
    id: "steel-strapping-tools",
    name: "Bộ dụng cụ đóng dây đai thép",
    slug: "/san-pham/bo-dung-cu-dong-dai-thep",
    soldCount: 367,
    basePrice: 1900000,
    salePrice: 1250000,
    shortDescription:
      "Bộ kìm siết, bấm khóa nhập khẩu Đài Loan, dùng cho dây đai thép.",
    images: [
      {
        src: "/images/dung-cu-dong-dai-3.jpg",
        alt: "Bộ dụng cụ đóng đai thép",
      },
      {
        src: "/images/human-dungcu.jpeg",
        alt: "Bộ dụng cụ đóng đai nhựa",
      },
      {
        src: "/images/kim-siet-dai.jpg",
        alt: "Kìm siết đai thép",
      },
      {
        src: "/images/kim-bam-bo.webp",
        alt: "Kìm siết đai thép",
      },
      {
        src: "/images/dung-cu-dong-dai-chi-tiet.jpg",
        alt: "Bộ dụng cụ đóng đai thép chi tiết",
      },
      {
        src: "/images/dung-cu-dong-dai-kich-thuoc.webp",
        alt: "Bộ dụng cụ đóng đai thép",
      },
    ],
    upsellDescription:
      "Kìm siết, bấm khóa cho dây đai thép.",
    showInUpsell: true,
  },
  {
    id: "plastic-strapping-tools",
    name: "Bộ dụng cụ đóng dây đai nhựa",
    slug: "/san-pham/bo-dung-cu-dong-dai-nhua",
    soldCount: 218,
    basePrice: 950000,
    salePrice: 750000,
    shortDescription:
      "Bộ kìm siết, bấm khóa nhập khẩu Đài Loan, dùng cho dây đai nhựa.",
    images: [
      {
        src: "/images/dungcu-dainhua-1.jpg",
        alt: "Bộ dụng cụ đóng đai nhựa",
      },
      {
        src: "/images/dungcu-dainhua-2.jpg",
        alt: "Bộ dụng cụ đóng đai nhựa",
      },
      {
        src: "/images/dungcu-dainhua-3.jpg",
        alt: "Kìm siết đai nhựa",
      },
      {
        src: "/images/dungcu-dainhua-ca-2.jpg",
        alt: "Kìm siết đai nhựa",
      },
      {
        src: "/videos/dong-dai-nhua.mp4",
        alt: "Bộ dụng cụ đóng đai nhựa",
      },
    ],
    upsellDescription:
      "Kìm siết, bấm khóa cho dây đai nhựa PP/PET.",
    showInUpsell: true,
  },
  {
    id: "steel-seals",
    name: "Bọ thép (khóa đai)",
    slug: "/san-pham/khoa-dai-thep-seals",
    soldCount: 942,
    priceLabel: "Liên hệ báo giá",
    shortDescription:
      "Bọ thép / khóa đai dùng kèm dây đai, nhiều kích thước cho bản 16–32mm.",
    images: [
      {
        src: "/images/bo-thep-kin-2.jpg",
        alt: "Khóa đai thép bọ kín",
      },
      {
        src: "/images/bo-thep-u-1.jpg",
        alt: "Khóa đai thép mặt trước",
      },
      {
        src: "/images/bo-thep-kin.jpg",
        alt: "Khóa đai thép bọ kín",
      },
      {
        src: "/images/bo-thep-kin-mat-sau.jpg",
        alt: "Khóa đai thép mặt sau",
      },
      {
        src: "/images/bo-thep-kin-19-mat-sau.jpg",
        alt: "Khóa đai thép bọ kín 19mm",
      },
      {
        src: "/images/bo-thep-kin-19-mat-truoc.jpg",
        alt: "Khóa đai thép bọ kín 19mm mặt trước",
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


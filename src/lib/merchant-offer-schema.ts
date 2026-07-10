import type { CatalogProduct } from "@/data/products";
import {
  STEEL_SEAL_REFERENCE_PRICE_UNIT,
  STEEL_STRAPPING_PRICE_PER_KG,
} from "@/config/pricing";
import { siteConfig } from "@/config/site";

const PRICE_VALID_UNTIL = `${new Date().getFullYear()}-12-31`;

const seller = {
  "@type": "Organization" as const,
  name: siteConfig.company.legalName,
  url: siteConfig.url,
};

/** Google Merchant Listings — shipping (giao toàn quốc, phí theo đơn). */
export const merchantShippingDetails = {
  "@type": "OfferShippingDetails" as const,
  shippingRate: {
    "@type": "MonetaryAmount" as const,
    value: 0,
    currency: "VND",
  },
  shippingDestination: {
    "@type": "DefinedRegion" as const,
    addressCountry: "VN",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime" as const,
    handlingTime: {
      "@type": "QuantitativeValue" as const,
      minValue: 0,
      maxValue: 2,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue" as const,
      minValue: 1,
      maxValue: 7,
      unitCode: "DAY",
    },
  },
};

/** Đổi trả khi sai quy cách — khớp nội dung trang sản phẩm. */
export const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy" as const,
  applicableCountry: "VN",
  returnPolicyCategory:
    "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 7,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
};

export function getProductOfferPrice(product: CatalogProduct): number {
  if (product.pricePerKg != null) return product.pricePerKg;
  if (product.salePrice != null) return product.salePrice;
  if (product.basePrice != null) return product.basePrice;
  if (product.id === "steel-seals") return STEEL_SEAL_REFERENCE_PRICE_UNIT;
  return STEEL_STRAPPING_PRICE_PER_KG;
}

type BuildOfferOptions = {
  price: number;
  url: string;
  /** Đơn vị giá (kg, cái, bộ) — hiển thị trong priceSpecification khi cần. */
  unitText?: string;
};

/** Offer đủ trường cho Merchant Listings (price, shipping, return). */
export function buildMerchantOffer({
  price,
  url,
  unitText,
}: BuildOfferOptions) {
  return {
    "@type": "Offer" as const,
    url,
    priceCurrency: "VND",
    price,
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller,
    shippingDetails: merchantShippingDetails,
    hasMerchantReturnPolicy: merchantReturnPolicy,
    ...(unitText
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price,
            priceCurrency: "VND",
            unitText,
          },
        }
      : {}),
  };
}

export function buildProductSchemaOffer(product: CatalogProduct, productUrl: string) {
  const price = getProductOfferPrice(product);
  const unitText = product.pricePerKg
    ? "kg"
    : product.id === "steel-seals"
      ? "cái"
      : undefined;

  return buildMerchantOffer({ price, url: productUrl, unitText });
}

/** Một mục trong OfferCatalog (trang SEO / báo giá). */
export function buildOfferCatalogItem(
  productName: string,
  price: number,
  options?: { url?: string; unitText?: string },
) {
  return {
    ...buildMerchantOffer({
      price,
      url: options?.url ?? `${siteConfig.url}/lien-he`,
      unitText: options?.unitText,
    }),
    itemOffered: {
      "@type": "Product" as const,
      name: productName,
    },
  };
}

import { siteConfig } from "@/config/site";

const { company } = siteConfig;

/** PostalAddress dùng chung cho mọi JSON-LD — giữ NAP đồng nhất toàn site. */
export const postalAddressJsonLd = {
  "@type": "PostalAddress" as const,
  streetAddress: `${company.streetAddress}, ${company.ward}`,
  addressLocality: company.city,
  addressRegion: company.city,
  addressCountry: "VN",
};

export const geoJsonLd = {
  "@type": "GeoCoordinates" as const,
  latitude: company.geo.latitude,
  longitude: company.geo.longitude,
};

/** Thuộc tính vị trí cho LocalBusiness: address + geo + hasMap. */
export const localBusinessLocationJsonLd = {
  address: postalAddressJsonLd,
  geo: geoJsonLd,
  hasMap: company.mapsUrl,
};

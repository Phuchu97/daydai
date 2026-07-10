import type { Article } from "@/data/articles";
import { catalogProducts } from "@/data/products";
import { siteConfig } from "@/config/site";

export function getArticleOgImageUrl(article: Article): string {
  for (const productId of article.relatedProductIds) {
    const product = catalogProducts.find((item) => item.id === productId);
    const imageSrc = product?.images[0]?.src;
    if (imageSrc) {
      return `${siteConfig.url}${imageSrc}`;
    }
  }
  return `${siteConfig.url}${siteConfig.ogImage}`;
}

export function formatSeoDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

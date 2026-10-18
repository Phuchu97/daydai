import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { PRICE_PAGE_LAST_UPDATED } from "@/config/pricing";
import { catalogProducts } from "@/data/products";
import { hasCanonicalOverride } from "@/lib/product-canonical";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/gioi-thieu`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/lien-he`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/san-pham`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/bao-gia-day-dai-thep`,
      lastModified: new Date(PRICE_PAGE_LAST_UPDATED),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${siteConfig.url}/day-dai-thep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${siteConfig.url}/khoa-dai-thep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/bo-sat`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/bo-dung-cu-dong-dai-thep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/siet-day-thep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-16mm-19mm-32mm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-16mm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.89,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-19mm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.89,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-25mm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.89,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-32mm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.89,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-dau`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-ma-kem`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-son-tinh-dien`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-dong-pallet`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-dong-hang`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-ha-noi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-thep-mien-bac`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/day-dai-sat`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${siteConfig.url}/day-dai-sat-gia-re`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${siteConfig.url}/dai-thep-cong-nghiep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${siteConfig.url}/nha-cung-cap-day-dai-thep`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${siteConfig.url}/chinh-sach-bao-mat`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: `${siteConfig.url}/dieu-khoan-su-dung`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = catalogProducts
    .filter((product) => !hasCanonicalOverride(product))
    .map((product) => ({
      url: `${siteConfig.url}${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  const consultingRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/tu-van`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${siteConfig.url}/tu-van/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return [...baseRoutes, ...productRoutes, ...consultingRoutes];
}


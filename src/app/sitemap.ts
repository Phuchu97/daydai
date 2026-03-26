import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { catalogProducts } from "@/data/products";
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
  ];

  const productRoutes: MetadataRoute.Sitemap = catalogProducts.map((product) => ({
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


import type { Metadata } from "next";
import { SizeLandingPage } from "@/components/seo/SizeLandingPage";
import { siteConfig } from "@/config/site";
import { getSizeGuide } from "@/data/steel-strapping-guide";

const guide = getSizeGuide("day-dai-thep-25mm")!;

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  keywords: guide.keywords,
  alternates: { canonical: `${siteConfig.url}/${guide.slug}` },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: `${siteConfig.url}/${guide.slug}`,
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: guide.name,
      },
    ],
  },
};

export default function Page() {
  return <SizeLandingPage guide={guide} />;
}

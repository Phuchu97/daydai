import type { Metadata } from "next";
import { SurfaceLandingPage } from "@/components/seo/SurfaceLandingPage";
import { siteConfig } from "@/config/site";
import { getSurfaceGuide } from "@/data/steel-strapping-guide";

const guide = getSurfaceGuide("day-dai-thep-ma-kem")!;

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
  return <SurfaceLandingPage guide={guide} />;
}

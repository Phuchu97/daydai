import type { ProductImage } from "@/data/products";

export function isProductVideo(src: string): boolean {
  return /\.mp4(\?|#|$)/i.test(src);
}

/** Poster cho thumbnail video — lấy ảnh gần nhất trong danh sách. */
export function getVideoPosterSrc(
  images: ProductImage[],
  videoIndex: number,
): string | undefined {
  for (let i = 0; i < images.length; i++) {
    if (i === videoIndex) continue;
    if (!isProductVideo(images[i].src)) return images[i].src;
  }
  return undefined;
}

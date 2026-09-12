import Image from "next/image";

export type SeoImage = {
  src: string;
  alt: string;
  caption?: string;
};

type SeoPageGalleryProps = {
  hero: SeoImage;
  gallery?: SeoImage[];
  priority?: boolean;
  /** editorial = 1 lớn + phụ bên; strip = chỉ hero gọn; stack = hero + hàng phụ nhỏ */
  variant?: "editorial" | "strip" | "stack";
};

export function SeoPageGallery({
  hero,
  gallery = [],
  priority = true,
  variant = "editorial",
}: SeoPageGalleryProps) {
  const sideImages = gallery.slice(0, 2);
  const stripImages = gallery.slice(0, 3);

  if (variant === "strip" || gallery.length === 0) {
    return (
      <figure className="seo-media">
        <div className="seo-media-shell">
          <div className="seo-media-frame relative aspect-[2.2/1] overflow-hidden sm:aspect-[2.6/1]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 960px"
              priority={priority}
            />
          </div>
        </div>
        {hero.caption ? (
          <figcaption className="seo-media-caption">{hero.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (variant === "stack") {
    return (
      <figure className="seo-media space-y-2.5">
        <div className="seo-media-shell">
          <div className="seo-media-frame relative aspect-[2/1] overflow-hidden sm:aspect-[2.4/1]">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 960px"
              priority={priority}
            />
          </div>
        </div>
        {stripImages.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {stripImages.map((image) => (
              <div key={image.src} className="seo-media-shell">
                <div className="seo-media-frame relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 33vw, 220px"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {hero.caption ? (
          <figcaption className="seo-media-caption">{hero.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  // editorial: main + side stack (desktop), stacked on mobile
  return (
    <figure className="seo-media">
      <div className="grid gap-2.5 md:grid-cols-[1.7fr_1fr] md:gap-3">
        <div className="seo-media-shell">
          <div className="seo-media-frame relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[280px] md:h-full">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.015]"
              sizes="(max-width: 768px) 100vw, 640px"
              priority={priority}
            />
          </div>
        </div>

        {sideImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-1 md:h-full md:min-h-[280px] md:gap-3">
            {sideImages.map((image) => (
              <div key={image.src} className="seo-media-shell md:min-h-0 md:h-full">
                <div className="seo-media-frame relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[132px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {hero.caption ? (
        <figcaption className="seo-media-caption">{hero.caption}</figcaption>
      ) : null}
    </figure>
  );
}

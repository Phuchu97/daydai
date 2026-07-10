"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductImage } from "@/data/products";
import {
  getVideoPosterSrc,
  isProductVideo,
} from "@/lib/product-media";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "./GalleryNavIcons";

type Props = {
  images: ProductImage[];
};

const THUMB_SIZE_MOBILE = 64;
const THUMB_GAP_PX = 8;

function GalleryNavButton({
  direction,
  onClick,
  disabled,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  label: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-white/95 text-foreground shadow-[0_8px_20px_-12px_rgba(22,67,126,0.45)] backdrop-blur-sm transition",
        "hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-35",
        className
      )}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function GalleryVideoThumb({
  poster,
  alt,
}: {
  poster?: string;
  alt: string;
}) {
  return (
    <div className="relative h-full w-full bg-muted">
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover"
          sizes="76px"
          aria-hidden
        />
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold text-primary shadow-sm"
          aria-hidden
        >
          ▶
        </span>
      </div>
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export function ProductGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const thumbTrackRef = useRef<HTMLDivElement>(null);
  const thumbButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const active = images[activeIndex] ?? images[0];
  const activeIsVideo = active ? isProductVideo(active.src) : false;
  const hasMultiple = images.length > 1;

  const updateThumbScrollState = useCallback(() => {
    const track = thumbTrackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  const scrollThumbs = useCallback((direction: "prev" | "next") => {
    const track = thumbTrackRef.current;
    if (!track) return;
    const firstThumb = track.querySelector<HTMLElement>('[role="tab"]');
    const thumbWidth = firstThumb?.offsetWidth ?? THUMB_SIZE_MOBILE;
    const step = (thumbWidth + THUMB_GAP_PX) * 3;
    track.scrollBy({
      left: direction === "prev" ? -step : step,
      behavior: "smooth",
    });
  }, []);

  const goToImage = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }, [images.length]);

  useEffect(() => {
    mainVideoRef.current?.pause();
  }, [activeIndex]);

  useEffect(() => {
    const track = thumbTrackRef.current;
    const thumb = thumbButtonRefs.current[activeIndex];
    if (!track || !thumb) return;

    const frame = window.requestAnimationFrame(() => {
      const trackRect = track.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();
      const overflowLeft = thumbRect.left < trackRect.left;
      const overflowRight = thumbRect.right > trackRect.right;

      if (overflowLeft || overflowRight) {
        thumb.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    const track = thumbTrackRef.current;
    if (!track) return;

    updateThumbScrollState();

    const onScroll = () => updateThumbScrollState();
    track.addEventListener("scroll", onScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => updateThumbScrollState());
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, [images.length, updateThumbScrollState]);

  if (!active) return null;

  return (
    <div className="min-w-0 space-y-3">
      <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_20px_44px_-32px_rgba(22,67,126,0.35)]">
        {activeIsVideo ? (
          <video
            key={active.src}
            ref={mainVideoRef}
            src={active.src}
            className="h-full w-full object-contain p-3 sm:p-5"
            controls
            playsInline
            preload="metadata"
            poster={getVideoPosterSrc(images, activeIndex)}
            aria-label={active.alt}
          />
        ) : (
          <Image
            key={active.src}
            src={active.src}
            alt={active.alt}
            fill
            className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.02] sm:p-6"
            sizes="(min-width: 1024px) 480px, 100vw"
            priority={activeIndex === 0}
          />
        )}

        {hasMultiple ? (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between bg-gradient-to-b from-black/25 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 md:opacity-100">
              <span className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                {activeIsVideo ? "Video" : "Ảnh"} {activeIndex + 1} / {images.length}
              </span>
            </div>

            <GalleryNavButton
              direction="prev"
              onClick={goPrev}
              disabled={false}
              label="Mục trước"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
            />
            <GalleryNavButton
              direction="next"
              onClick={goNext}
              disabled={false}
              label="Mục sau"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
            />
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div className="grid min-w-0 grid-cols-[auto_1fr_auto] items-center gap-1.5 sm:gap-2">
          <GalleryNavButton
            direction="prev"
            onClick={() => scrollThumbs("prev")}
            disabled={!canScrollLeft}
            label="Cuộn ảnh nhỏ sang trái"
            className="h-8 w-8 md:h-9 md:w-9"
          />

          <div
            ref={thumbTrackRef}
            className="gallery-thumb-track min-w-0 flex w-full gap-2 overflow-x-auto scroll-smooth py-1"
            role="tablist"
            aria-label="Danh sách ảnh và video sản phẩm"
          >
            {images.map((item, index) => {
              const isActive = index === activeIndex;
              const itemIsVideo = isProductVideo(item.src);
              return (
                <button
                  key={`${item.src}-${index}`}
                  ref={(node) => {
                    thumbButtonRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={
                    itemIsVideo
                      ? `Xem video: ${item.alt}`
                      : `Xem hình ${index + 1}: ${item.alt}`
                  }
                  onClick={() => goToImage(index)}
                  className={cn(
                    "relative h-16 w-16 shrink-0 snap-center overflow-hidden rounded-xl border-2 transition duration-200 md:h-[76px] md:w-[76px]",
                    isActive
                      ? "border-primary shadow-[0_0_0_3px_hsl(var(--color-primary)/0.18)]"
                      : "border-border/80 opacity-80 hover:border-primary/35 hover:opacity-100"
                  )}
                >
                  {itemIsVideo ? (
                    <GalleryVideoThumb
                      poster={getVideoPosterSrc(images, index)}
                      alt={item.alt}
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 76px, 64px"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <GalleryNavButton
            direction="next"
            onClick={() => scrollThumbs("next")}
            disabled={!canScrollRight}
            label="Cuộn ảnh nhỏ sang phải"
            className="h-8 w-8 md:h-9 md:w-9"
          />
        </div>
      ) : null}
    </div>
  );
}

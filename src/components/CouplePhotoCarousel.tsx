"use client";

// AI Generated Code by Deloitte + Cursor (BEGIN)
import type { CoupleGalleryImage } from "@/content/weddingContent";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  heading: string;
  subheading?: string;
  images: readonly CoupleGalleryImage[];
  /** Auto-advance interval in milliseconds (default from content, e.g. 3000) */
  autoplayIntervalMs: number;
};

export function CouplePhotoCarousel({ heading, subheading, images, autoplayIntervalMs }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const len = images.length;
  const safeIndex = len > 0 ? index % len : 0;

  const go = useCallback(
    (delta: number) => {
      if (len <= 0) return;
      setIndex((i) => (i + delta + len * 10) % len);
    },
    [len],
  );

  useEffect(() => {
    if (len <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, autoplayIntervalMs);
    return () => window.clearInterval(id);
  }, [len, paused, autoplayIntervalMs]);

  if (len === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Gallery</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">
            {heading}
          </h2>
          {subheading ? <p className="mt-2 text-ink/55">{subheading}</p> : null}
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-2xl shadow-wine/10 ring-1 ring-wine/5 backdrop-blur-xl">
          <div className="relative aspect-[3/4] w-full sm:aspect-[16/10] lg:aspect-[2/1]">
            {/* Stack all slides so the next frame is already decoded — avoids blank flash on swap (no unmount/remount). */}
            {images.map((img, i) => (
              <Image
                key={img.id}
                src={img.src}
                alt={i === safeIndex ? img.alt : ""}
                fill
                className={`object-cover object-[center_30%] ${
                  i === safeIndex ? "z-[2] opacity-100" : "z-[1] opacity-0"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                priority={i === 0}
                loading="eager"
                draggable={false}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/10"
              aria-hidden
            />
          </div>

          {len > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-wine shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:left-5 md:h-12 md:w-12"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/85 text-wine shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:right-5 md:h-12 md:w-12"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </>
          ) : null}

          {len > 1 ? (
            <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === safeIndex ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
                  }`}
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === safeIndex}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
// AI Generated Code by Deloitte + Cursor (END)

"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

/*
  ImageCarousel — cycles through project screenshots with a
  CSS crossfade and subtle ken-burns zoom.

  Performance-first approach:
  - All images stay mounted (no AnimatePresence unmount/remount)
  - Transitions use CSS opacity + transform (GPU-composited, no JS per-frame)
  - Ken Burns uses a CSS animation (not framer-motion) so it doesn't
    trigger React re-renders
  - Pauses on hover
  - Dot indicators + arrow nav for multi-image projects
*/

const shimmerStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 2s ease-in-out infinite",
};

export function ImageCarousel({
  images,
  projectName,
  priority = false,
  blurDataURL,
}: {
  images: string[];
  projectName: string;
  priority?: boolean;
  blurDataURL?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  /* Navigation only — no auto-cycling */

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  /* ── No images: shimmer skeleton ── */
  if (images.length === 0) {
    return (
      <>
        <style>{`
          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
        <div className="absolute inset-0" style={shimmerStyle}>
          <span className="sr-only">Loading</span>
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white/40 tracking-widest font-mono">
          SCREENSHOT
        </span>
      </>
    );
  }

  /* ── Image carousel ── */
  return (
    <div className="absolute inset-0">
      {/* All images stay mounted — toggle opacity for crossfade */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${projectName} screenshot ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 448px"
            priority={priority && i === 0}
            loading={priority && i === 0 ? "eager" : "lazy"}
            {...(i === 0 && blurDataURL
              ? { placeholder: "blur" as const, blurDataURL }
              : {})}
          />
        </div>
      ))}

      {/* Navigation arrows + dot indicators */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={() => goTo((activeIndex - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40 hover:text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next image"
            onClick={() => goTo((activeIndex + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/40 hover:text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10"
            role="tablist"
            aria-label={`${projectName} screenshots`}
          >
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

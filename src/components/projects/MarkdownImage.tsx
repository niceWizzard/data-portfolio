"use client";

import React, { useState } from "react";
import { useImageModal } from "./ImageModalProvider";

interface MarkdownImageProps {
  src: string;
  alt?: string;
}

export default function MarkdownImage({ src, alt }: MarkdownImageProps) {
  const { openImage } = useImageModal();
  const [aspect, setAspect] = useState<"landscape" | "portrait" | "square" | null>(null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalHeight > naturalWidth * 1.15) {
      setAspect("portrait");
    } else if (naturalWidth > naturalHeight * 1.15) {
      setAspect("landscape");
    } else {
      setAspect("square");
    }
  };

  // Compact, non-intrusive container sizing:
  // - Portrait: slim, centered column (max-w-[280px] to max-w-xs)
  // - Landscape: restrained width (max-w-xl) and capped height (max-h-[340px])
  // - Square: compact box (max-w-[320px])
  const containerSizeClass =
    aspect === "portrait"
      ? "max-w-[280px] sm:max-w-xs max-h-[420px]"
      : aspect === "square"
      ? "max-w-[320px] max-h-[320px]"
      : "max-w-xl max-h-[340px]";

  return (
    <figure className="my-6 flex flex-col items-center group/img w-full">
      <div
        onClick={() => openImage(src, alt)}
        className={`relative overflow-hidden rounded-xl border border-white/10 w-full ${containerSizeClass} bg-white/5 cursor-pointer shadow-lg hover:border-primary/40 transition-all duration-300`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || "Project visual"}
          onLoad={handleImageLoad}
          className="w-full h-auto max-h-[380px] object-contain mx-auto transition-transform duration-300 group-hover/img:scale-[1.02]"
          loading="lazy"
        />

        {/* Gradient Overlay & Fullscreen Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openImage(src, alt);
            }}
            className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 hover:bg-primary hover:text-black transition-all hover:scale-105 cursor-pointer shadow-md"
            aria-label="View image fullscreen"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            Fullscreen
          </button>
        </div>
      </div>

      {alt && (
        <figcaption className="mt-2 text-xs text-center text-white/50 italic tracking-wide max-w-md">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

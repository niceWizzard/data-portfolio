"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalState {
  src: string;
  alt?: string;
}

interface ImageModalContextType {
  openImage: (src: string, alt?: string) => void;
  closeImage: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | null>(null);

export function useImageModal() {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error("useImageModal must be used within an ImageModalProvider");
  }
  return context;
}

export function ImageModalProvider({ children }: { children: React.ReactNode }) {
  const [modalImage, setModalImage] = useState<ImageModalState | null>(null);

  const openImage = (src: string, alt?: string) => {
    setModalImage({ src, alt });
  };

  const closeImage = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImage();
      }
    };

    if (modalImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalImage]);

  return (
    <ImageModalContext.Provider value={{ openImage, closeImage }}>
      {children}

      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeImage}
            className="fixed inset-0 z-500 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              aria-label="Close fullscreen image"
              className="absolute top-6 right-6 z-510 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Image Wrapper */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] flex flex-col items-center cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalImage.src}
                alt={modalImage.alt || "Fullscreen view"}
                className="max-h-[82vh] w-auto max-w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
              />

              {modalImage.alt && (
                <div className="mt-4 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs md:text-sm text-white/80 backdrop-blur-sm">
                  {modalImage.alt}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ImageModalContext.Provider>
  );
}

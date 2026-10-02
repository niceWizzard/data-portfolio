"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Mountain Back (1) moves up slower to create depth
  const yMountainBack = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  // Mountain Front (2) moves up faster
  const yMountainFront = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  // Text moves up slightly, stays above mountains longer
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="showcase"
      className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full flex flex-col items-center max-sm:justify-center pt-32 overflow-hidden bg-background"
    >
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-50 container mx-auto px-4"
      >
        <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-center leading-tight">
          Grounded Strategy. <br />
          <span className="text-primary italic">Elevated</span> Results
        </h1>
      </motion.div>

      {/* Mountains - Mountain 1 is behind Mountain 2 */}
      <motion.div
        style={{ y: yMountainBack }}
        className="absolute bottom-0 right-0 w-full h-auto pointer-events-none z-20"
      >
        <Image
          src="/images/mountain-1.png"
          alt="Mountain background"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-bottom object-cover md:object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: yMountainFront }}
        className="absolute bottom-0 right-0 w-full h-auto pointer-events-none z-55"
      >
        <Image
          src="/images/mountain-2.png"
          alt="Mountain foreground"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-bottom object-cover md:object-contain"
        />
      </motion.div>

      {/* Subtle gradient at the bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-background to-transparent z-40" />
    </section>
  );
}

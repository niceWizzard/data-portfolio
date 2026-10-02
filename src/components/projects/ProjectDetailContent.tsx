"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/src/constants/projects";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => {
    if (project.images?.length) return project.images;
    if (project.image) return [project.image];
    return [];
  }, [project.image, project.images]);

  const activeImage = images[activeIndex] ?? images[0];
  const hasMultipleImages = images.length > 1;

  const previousSlide = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const nextSlide = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <div className="container-custom">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="group flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 font-medium"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
        Go Back
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              {project.name}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group"
          >
            <div className="relative h-full w-full overflow-hidden">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={`/images/projects/${activeImage}`}
                  alt={`${project.name} screenshot ${activeIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={previousSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition-colors"
                    aria-label="Previous project image"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18 9 12l6-6" /></svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition-colors"
                    aria-label="Next project image"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </button>

                  <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeIndex ? "bg-primary" : "bg-white/30 hover:bg-white/60"}`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl font-bold tracking-tight border-b border-white/5 pb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                    <svg className="w-3.5 h-3.5 text-primary group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span className="text-white/80 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sidebar / Info */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {
              project.url ? (
                <Link
                href={project.url}
                target="_blank"
                className="btn-primary w-full py-4 text-center justify-center shadow-2xl"
              >
                Visit
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              </Link>
              ) : (
                <button
                  disabled
                  className="btn-primary w-full py-4 text-center justify-center shadow-2xl"
                >
                  Unavailable
            </button>
              )
            }
            {project.videoLink && (
              <Link
                href={project.videoLink}
                target="_blank"
                className="btn-secondary w-full py-4 text-center justify-center"
              >
                Video
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="btn-secondary w-full py-4 text-center justify-center"
              >
                GitHub Repository
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </Link>
            )}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-glass p-8 flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-white tracking-tight italic">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech.name} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70">
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact/Meta? */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
          >
            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Project Scope</p>
            <p className="text-sm text-white/60 leading-relaxed italic">
              Developed as a part of my continuous learning journey, focusing on {project.tags[0].toLowerCase()} and modern architecture patterns.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

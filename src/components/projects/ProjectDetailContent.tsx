"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/src/lib/projects";
import MarkdownRenderer from "./MarkdownRenderer";
import { ImageModalProvider, useImageModal } from "./ImageModalProvider";

interface ProjectDetailContentProps {
  project: Project;
}

function ProjectDetailView({ project }: ProjectDetailContentProps) {
  const router = useRouter();
  const { openImage } = useImageModal();

  return (
    <div className="container-custom max-w-4xl">
      {/* Top Navigation */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="group flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 font-medium cursor-pointer text-sm"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        Back to projects
      </motion.button>

      {/* Compact Header */}
      <motion.header
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-8"
      >
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold tracking-wide text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {project.name}
        </h1>

        {project.description && (
          <p className="text-lg text-white/60 leading-relaxed font-light">
            {project.description}
          </p>
        )}

        {/* Quick Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Required: Analysis File */}
          {project.analysisFile && (
            <Link
              href={project.analysisFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
                <path d="M10 9H8" />
              </svg>
              Analysis File
            </Link>
          )}

          {/* Required: Data Sources */}
          {Array.isArray(project.sources) ? (
            project.sources.map((sourceUrl, idx) => (
              <Link
                key={sourceUrl}
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2.5 px-5 rounded-lg"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
                {project.sources.length > 1
                  ? `Data Source ${idx + 1}`
                  : "Data Source"}
              </Link>
            ))
          ) : project.sources ? (
            <Link
              href={project.sources}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-5 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
              Data Source
            </Link>
          ) : null}

          {/* Optional: GitHub Repo */}
          {(project.githubRepo || project.githubUrl) && (
            <Link
              href={(project.githubRepo || project.githubUrl)!}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-5 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub Repo
            </Link>
          )}

          {/* Optional: Video Link */}
          {project.videoLink && (
            <Link
              href={project.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-5 rounded-lg"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Video
            </Link>
          )}
        </div>
      </motion.header>

      {/* Optional Compact Hero Banner if image is provided */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-video max-h-[260px] sm:max-h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 mb-8 bg-white/5 group/banner cursor-pointer"
          onClick={() => openImage(`/images/projects/${project.image}`, project.name)}
        >
          <Image
            src={`/images/projects/${project.image}`}
            alt={project.name}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover transition-transform duration-500 group-hover/banner:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />

          {/* Fullscreen Trigger Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/banner:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openImage(`/images/projects/${project.image}`, project.name);
              }}
              className="px-4 py-2 rounded-xl bg-black/70 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md flex items-center gap-2 hover:bg-primary hover:text-black transition-all hover:scale-105"
              aria-label="View cover image fullscreen"
            >
              <svg
                className="w-4 h-4"
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
        </motion.div>
      )}

      {/* Primary Markdown Content */}
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="card-glass p-6 sm:p-10 md:p-12 border border-white/10"
      >
        <MarkdownRenderer content={project.content} />
      </motion.article>
    </div>
  );
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <ImageModalProvider>
      <ProjectDetailView project={project} />
    </ImageModalProvider>
  );
}

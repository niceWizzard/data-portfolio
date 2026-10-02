"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Project } from "../constants/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block aspect-video overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all hover:border-primary/50"
      >
        {/* Image with scaling effect */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={`/images/projects/${project.images?.[0] ?? project.image}`}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-60 grayscale group-hover:grayscale-[0.3] group-hover:opacity-50 transition-all duration-700"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/20 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-sm">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-wider text-primary">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
            {project.name}
          </h3>
          <p className="text-white/60 group-hover:text-white/90 text-sm line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            View Details <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

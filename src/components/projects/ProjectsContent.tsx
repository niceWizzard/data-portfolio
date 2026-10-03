"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "../ProjectCard";
import { Project } from "@/src/lib/projects";

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="flex flex-col gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            All <span className="text-primary italic">Projects</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/50 max-w-2xl leading-relaxed font-light"
        >
          A comprehensive look at my projects across data analytics, statistical modeling, machine learning, and interactive tools. Each project represents a data-driven approach to solving complex problems.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}
      </div>

      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 pt-12 border-t border-white/5 flex justify-center"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 text-white/40 hover:text-primary transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
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
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

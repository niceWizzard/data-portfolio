"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Project } from "../lib/projects";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export default function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section id="projects" className="section-padding border-t border-white/10">
      <div className="container-custom flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-0 text-center md:text-left">
              Featured Projects
            </h2>
            <p className="text-white/40 max-w-sm text-center md:text-left text-sm">
              A collection of work spanning data analytics, statistical modeling, and interactive dashboards.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-transform"
          >
            View All Projects{" "}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

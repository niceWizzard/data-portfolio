import { getAllProjects } from "@/src/lib/projects";
import ProjectsContent from "@/src/components/projects/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Richard Manansala",
  description: "Browse data analytics, machine learning, and computational projects by Richard Manansala.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="section-padding bg-background min-h-screen">
      <ProjectsContent projects={projects} />
    </main>
  );
}

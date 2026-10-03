import { getAllProjectSlugs, getProjectBySlug } from "@/src/lib/projects";
import ProjectDetailContent from "@/src/components/projects/ProjectDetailContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Richard Manansala`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-padding bg-background min-h-screen">
      <ProjectDetailContent project={project} />
    </main>
  );
}

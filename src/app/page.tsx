import { getAllProjects } from "@/src/lib/projects";
import HomeContent from "@/src/components/HomeContent";

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.slice(0, 4);

  return <HomeContent featuredProjects={featuredProjects} />;
}
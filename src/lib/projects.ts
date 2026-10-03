import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export interface Project {
  slug: string;
  order: number;
  name: string;
  description: string;
  image?: string;
  tags: string[];
  analysisFile: string;
  sources: string | string[];
  githubRepo?: string;
  githubUrl?: string;
  url?: string;
  videoLink?: string;
  content: string;
}

/**
 * Strictly parses filenames like "1_zombrawl.md".
 * Throws an error if the file does not follow the `<order>_<slug>.md` naming rule.
 */
function parseFilename(filename: string): { order: number; slug: string } {
  const match = filename.match(/^(\d+)_([a-zA-Z0-9_-]+)\.md$/);
  if (!match) {
    throw new Error(
      `Invalid project filename "${filename}". Project files must follow the pattern: <order>_<slug>.md (e.g., "1_zombrawl.md").`
    );
  }

  return {
    order: parseInt(match[1], 10),
    slug: match[2],
  };
}

function parseProjectFile(file: string): Project {
  const { order, slug } = parseFilename(file);
  const fullPath = path.join(PROJECTS_DIR, file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const analysisFile =
    data.analysisFile || data.analysisUrl || data.analysis || data.url || "";
  if (!analysisFile) {
    throw new Error(
      `Project "${file}" is missing required frontmatter: "analysisFile" (link or path to Excel, BI, or notebook analysis file).`
    );
  }

  const rawSources = data.sources || data.sourceUrl || data.source;
  if (!rawSources || (Array.isArray(rawSources) && rawSources.length === 0)) {
    throw new Error(
      `Project "${file}" is missing required frontmatter: "sources" (link or list of sources where data was retrieved).`
    );
  }
  const sources: string | string[] = rawSources;

  const githubRepo =
    data.githubRepo || data.githubUrl || data.github || undefined;

  return {
    slug: data.slug || slug,
    order,
    name: data.name || slug,
    description: data.description || "",
    image: data.image || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    analysisFile,
    sources,
    githubRepo,
    githubUrl: githubRepo,
    url: analysisFile,
    videoLink: data.videoLink || "",
    content,
  };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => parseProjectFile(file))
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | null {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return null;
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter((file) => file.endsWith(".md"));

  const targetFile = files.find((file) => {
    try {
      const parsed = parseFilename(file);
      return parsed.slug === slug;
    } catch {
      return false;
    }
  });

  if (!targetFile) {
    return null;
  }

  return parseProjectFile(targetFile);
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => parseFilename(file).slug);
}

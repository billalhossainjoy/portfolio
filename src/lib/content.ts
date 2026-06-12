import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/* ──────────────────────────────────────────────────────────────────
 * Markdown-backed content.
 *
 * Content lives in `/content/<type>/*.md`. Each file has YAML
 * frontmatter that maps 1:1 to the types below. The markdown body is
 * currently unused (all fields live in frontmatter) but is available
 * via gray-matter if ever needed.
 * ────────────────────────────────────────────────────────────────── */

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Project = {
  id: string;
  title: string;
  dateTitle: string;
  descriptions: string[];
  tags: string[];
  link?: string;
  imgUrl: string;
  imgAlt: string;
  github?: string;
  order: number;
  published: boolean;
};

export type GalleryItem = {
  id: string;
  imgUrl: string;
  imgAlt: string;
  caption: string;
  category: string;
  order: number;
  published: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  logoUrl?: string;
  points: string[];
  tags: string[];
  order: number;
  published: boolean;
};

/** Read + parse every `.md` file in a content sub-folder. */
function readCollection(type: string): { id: string; data: Record<string, unknown> }[] {
  const dir = path.join(CONTENT_DIR, type);
  let files: string[];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return { id: file.replace(/\.md$/, ""), data };
  });
}

const str = (v: unknown, fallback = ""): string => (typeof v === "string" ? v : fallback);
const num = (v: unknown, fallback = 0): number => (typeof v === "number" ? v : fallback);
const bool = (v: unknown, fallback = true): boolean => (typeof v === "boolean" ? v : fallback);
const arr = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];

/** Published items, sorted by `order` then title/company. */
function sortPublished<T extends { published: boolean; order: number }>(
  items: T[],
  secondary: (a: T, b: T) => number,
): T[] {
  return items
    .filter((i) => i.published)
    .sort((a, b) => a.order - b.order || secondary(a, b));
}

export function getProjects(): Project[] {
  const items = readCollection("projects").map(({ id, data }) => ({
    id,
    title: str(data.title),
    dateTitle: str(data.dateTitle),
    descriptions: arr(data.descriptions),
    tags: arr(data.tags),
    link: str(data.link) || undefined,
    imgUrl: str(data.imgUrl),
    imgAlt: str(data.imgAlt),
    github: str(data.github) || undefined,
    order: num(data.order),
    published: bool(data.published),
  }));
  return sortPublished(items, (a, b) => a.title.localeCompare(b.title));
}

export function getGalleryItems(): GalleryItem[] {
  const items = readCollection("gallery").map(({ id, data }) => ({
    id,
    imgUrl: str(data.imgUrl),
    imgAlt: str(data.imgAlt),
    caption: str(data.caption),
    category: str(data.category, "general"),
    order: num(data.order),
    published: bool(data.published),
  }));
  return sortPublished(items, (a, b) => a.id.localeCompare(b.id));
}

export type About = {
  description: string;
};

export function getAbout(): About {
  const file = path.join(CONTENT_DIR, "about.md");
  try {
    const { data } = matter(fs.readFileSync(file, "utf8"));
    return { description: str(data.description) };
  } catch {
    return { description: "" };
  }
}

export function getExperiences(): Experience[] {
  const items = readCollection("experience").map(({ id, data }) => ({
    id,
    company: str(data.company),
    role: str(data.role),
    type: str(data.type, "Full-time"),
    startDate: str(data.startDate),
    endDate: str(data.endDate, "Present"),
    location: str(data.location, "Remote"),
    logoUrl: str(data.logoUrl) || undefined,
    points: arr(data.points),
    tags: arr(data.tags),
    order: num(data.order),
    published: bool(data.published),
  }));
  return sortPublished(items, (a, b) => a.company.localeCompare(b.company));
}

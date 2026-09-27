export type ProjectCategory = "Full-Stack" | "Frontend" | "Learning";

export type AccentColor = "violet" | "pink" | "cyan";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  accent: AccentColor;
  featured?: boolean;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

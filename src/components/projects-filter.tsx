"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const categories: Array<"All" | ProjectCategory> = ["All", "Full-Stack", "Frontend", "Learning"];

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = active === "All" || project.category === active;
      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [projects, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active === cat
                  ? "border-transparent bg-ink text-white"
                  : "border-hairline bg-white text-body hover:border-violet-300 hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-body/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or stack..."
            className="w-full rounded-full border border-hairline bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-dashed border-hairline py-16 text-center">
          <p className="font-mono text-sm text-body">{"// no matches — try a different filter"}</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className={project.featured ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={project.featured} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

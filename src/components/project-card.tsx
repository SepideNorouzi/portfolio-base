import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { accentStyles, cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/glow-card";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const accent = accentStyles[project.accent];
  const visibleStack = project.stack.slice(0, featured ? 6 : 4);
  const remaining = project.stack.length - visibleStack.length;

  return (
    <GlowCard className={cn("flex h-full flex-col p-6 sm:p-7", featured && "sm:p-8")}>
      <div className="flex items-center gap-2">
        <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} />
        <span className={cn("font-mono text-[11px]", accent.text)}>{project.category}</span>
      </div>

      <h3 className={cn("mt-4 font-semibold text-ink", featured ? "text-2xl" : "text-lg")}>
        {project.title}
      </h3>

      <p className={cn("mt-2.5 text-sm leading-relaxed text-body", featured && "max-w-lg")}>
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {visibleStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
        {remaining > 0 && <Tag>+{remaining} more</Tag>}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink"
      >
        View details
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </Link>
    </GlowCard>
  );
}

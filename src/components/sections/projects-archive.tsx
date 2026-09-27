import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";

export function ProjectsArchive() {
  return (
    <section id="projects" className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionHeading
            kicker="projects archive"
            title="A working record of what I've built"
            description="Real projects, with the architecture decisions included — not just the finished screenshots."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
          >
            Browse full archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 0.08}
            className={project.featured ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={project.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

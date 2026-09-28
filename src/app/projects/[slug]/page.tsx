import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import { accentStyles, cn } from "@/lib/utils";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const accent = accentStyles[project.accent];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container-page pb-24 pt-36 sm:pt-40">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-body transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} />
          <span className={cn("font-mono text-xs", accent.text)}>{project.category}</span>
        </div>
        <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
          {project.description}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Reveal delay={0.15}>
          <div className={cn("rounded-3xl border p-6 sm:p-8", accent.chipBorder, accent.chipBg)}>
            <p className="font-mono text-xs text-body">{"// highlights"}</p>
            <ul className="mt-5 space-y-4">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                  <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", accent.dot)} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-hairline bg-surface/80 p-6">
            <p className="font-mono text-xs text-violet-300">{"// more"}</p>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-3 rounded-2xl border border-hairline bg-elevated/50 p-4 transition-colors hover:border-violet-400/60"
            >
              <Github className="h-5 w-5 text-ink" />
              <span className="text-sm font-medium text-ink">View on GitHub</span>
            </a>

            <Link
              href={`/projects/${next.slug}`}
              className="group mt-3 flex items-center justify-between gap-3 rounded-2xl border border-hairline bg-elevated/50 p-4 transition-colors hover:border-violet-400/60"
            >
              <span>
                <span className="block text-xs text-body">Next project</span>
                <span className="block text-sm font-medium text-ink">{next.title}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-body transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="mt-6">
              <Button href="/#contact" className="w-full justify-center">
                Start a project
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

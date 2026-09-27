import type { Metadata } from "next";
import { projects, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsFilter } from "@/components/projects-filter";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "Every project, filterable by category and stack.",
};

export default function ProjectsPage() {
  return (
    <div className="container-page pb-24 pt-36 sm:pt-40">
      <Reveal>
        <SectionHeading
          kicker="the full archive"
          title="Every project, no scrolling required"
          description="Filter by category or search by stack to find what you're looking for."
        />
      </Reveal>
      <div className="mt-12">
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}

import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { ProjectsArchive } from "@/components/sections/projects-archive";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <ProjectsArchive />
      <CtaBanner />
      <Contact />
    </>
  );
}

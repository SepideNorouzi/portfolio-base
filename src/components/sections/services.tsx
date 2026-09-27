import { Boxes, Code2, Palette, Sparkles } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/reveal";

const icons = [Code2, Palette, Boxes, Sparkles];

export function Services() {
  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          kicker="what I do"
          title="Design and engineering, treated as one discipline"
          description="Four areas I keep coming back to — each one shows up somewhere in the projects below."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={service.title} delay={i * 0.08}>
              <GlowCard className="h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 text-violet-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

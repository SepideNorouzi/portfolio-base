import { techStack } from "@/lib/data";

export function TechMarquee() {
  const track = [...techStack, ...techStack];

  return (
    <section aria-label="Tech stack" className="border-y border-hairline bg-surface/60 py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10">
          {track.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-sm text-body/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

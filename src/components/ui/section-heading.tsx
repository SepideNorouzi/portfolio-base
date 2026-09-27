import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ kicker, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 font-mono text-sm text-violet-500">
        <span className="text-body/50">{"//"}</span> {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-body">{description}</p>
      ) : null}
    </div>
  );
}

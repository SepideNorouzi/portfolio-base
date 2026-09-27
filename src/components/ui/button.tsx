import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:-translate-y-0.5 hover:shadow-glow-lg"
      : "border border-hairline bg-white text-ink hover:-translate-y-0.5 hover:border-violet-300";

  const classes = cn(base, styles, className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

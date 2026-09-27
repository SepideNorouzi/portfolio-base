"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A card whose border/background glow follows the cursor on hover.
 * The glow position is tracked via CSS custom properties (--x, --y)
 * so the effect stays a single cheap repaint instead of re-rendering React.
 */
export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-hairline bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(124,58,237,0.10), transparent 62%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

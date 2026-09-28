import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Accent color -> literal Tailwind class lookup.
 * Written out in full so Tailwind's JIT scanner can find every class name
 * (dynamically built strings like `text-${accent}-600` are invisible to it).
 */
export const accentStyles = {
  violet: {
    text: "text-violet-300",
    chipBg: "bg-violet-500/10",
    chipBorder: "border-violet-400/30",
    dot: "bg-violet-400",
    ring: "ring-violet-400/40",
    glowFrom: "from-violet-500/25",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  pink: {
    text: "text-pink-300",
    chipBg: "bg-pink-500/10",
    chipBorder: "border-pink-400/30",
    dot: "bg-pink-400",
    ring: "ring-pink-400/40",
    glowFrom: "from-pink-500/25",
    gradient: "from-pink-500 to-rose-500",
  },
  cyan: {
    text: "text-cyan-300",
    chipBg: "bg-cyan-500/10",
    chipBorder: "border-cyan-400/30",
    dot: "bg-cyan-400",
    ring: "ring-cyan-400/40",
    glowFrom: "from-cyan-500/25",
    gradient: "from-cyan-400 to-blue-500",
  },
} as const;

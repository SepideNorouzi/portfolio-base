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
    text: "text-violet-600",
    chipBg: "bg-violet-50",
    chipBorder: "border-violet-200",
    dot: "bg-violet-500",
    ring: "ring-violet-300/60",
    glowFrom: "from-violet-500/20",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  pink: {
    text: "text-pink-600",
    chipBg: "bg-pink-50",
    chipBorder: "border-pink-200",
    dot: "bg-pink-500",
    ring: "ring-pink-300/60",
    glowFrom: "from-pink-500/20",
    gradient: "from-pink-500 to-rose-500",
  },
  cyan: {
    text: "text-cyan-600",
    chipBg: "bg-cyan-50",
    chipBorder: "border-cyan-200",
    dot: "bg-cyan-500",
    ring: "ring-cyan-300/60",
    glowFrom: "from-cyan-500/20",
    gradient: "from-cyan-500 to-blue-500",
  },
} as const;

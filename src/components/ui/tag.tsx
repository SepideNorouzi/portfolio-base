import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-hairline bg-violet-500/10 px-3 py-1 font-mono text-[11px] leading-none text-violet-200/90",
        className
      )}
    >
      {children}
    </span>
  );
}

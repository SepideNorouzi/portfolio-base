"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatChipProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatChip({ value, label, delay = 0 }: StatChipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const startsNumeric = /^\d/.test(value);
  const [display, setDisplay] = useState(startsNumeric ? "0" : value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-start gap-1 border-l border-hairline pl-4 first:border-l-0 first:pl-0"
    >
      <span className="font-mono text-2xl font-bold text-ink sm:text-3xl">{display}</span>
      <span className="text-sm text-body">{label}</span>
    </motion.div>
  );
}

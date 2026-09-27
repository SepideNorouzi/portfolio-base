"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { StatChip } from "@/components/ui/stat-chip";
import { HeroCodeWindow } from "./hero-code-window";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 animate-blob rounded-full bg-violet-200/50 blur-3xl" />
      <div
        className="pointer-events-none absolute -right-24 top-52 h-72 w-72 animate-blob rounded-full bg-cyan-200/50 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="container-page relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/80 px-4 py-1.5 text-xs font-medium text-body shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.available ? "Available for new projects" : "Currently booked"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl"
          >
            <span className="text-gradient">{siteConfig.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-body sm:text-lg"
          >
            {siteConfig.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="/projects">
                View my projects
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="/#contact" variant="secondary">
                <MessageCircle className="h-4 w-4" />
                Let&apos;s talk
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-4"
          >
            {stats.map((stat, i) => (
              <StatChip key={stat.label} value={stat.value} label={stat.label} delay={0.5 + i * 0.08} />
            ))}
          </motion.div>
        </div>

        <HeroCodeWindow />
      </div>
    </section>
  );
}

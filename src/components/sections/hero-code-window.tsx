"use client";

import { motion } from "framer-motion";
import { Figma, Heart, Sparkles } from "lucide-react";

const codeLines = [
  { indent: 0, tokens: [{ t: "type", c: "text-violet-600" }, { t: " ApiBook", c: "text-pink-600" }, { t: " = {", c: "text-body" }] },
  { indent: 1, tokens: [{ t: "title", c: "text-ink" }, { t: ": ", c: "text-body" }, { t: "string", c: "text-cyan-600" }, { t: ";", c: "text-body" }] },
  { indent: 1, tokens: [{ t: "author_name", c: "text-ink" }, { t: ": ", c: "text-body" }, { t: "string", c: "text-cyan-600" }, { t: ";", c: "text-body" }] },
  { indent: 0, tokens: [{ t: "};", c: "text-body" }] },
  { indent: 0, tokens: [{ t: "", c: "text-body" }] },
  { indent: 0, tokens: [{ t: "const", c: "text-violet-600" }, { t: " toBook = (", c: "text-body" }, { t: "raw", c: "text-ink" }, { t: ": ", c: "text-body" }, { t: "ApiBook", c: "text-pink-600" }, { t: ") => ({", c: "text-body" }] },
  { indent: 1, tokens: [{ t: "title", c: "text-ink" }, { t: ": raw.title,", c: "text-body" }] },
  { indent: 1, tokens: [{ t: "author", c: "text-ink" }, { t: ": raw.author_name,", c: "text-body" }] },
  { indent: 0, tokens: [{ t: "});", c: "text-body" }] },
];

export function HeroCodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      {/* ambient gradient blobs behind the window */}
      <div className="absolute -inset-10 -z-10">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-violet-300/30 blur-3xl" />
        <div
          className="absolute right-0 top-0 h-48 w-48 animate-blob rounded-full bg-pink-300/30 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-0 h-48 w-48 animate-blob rounded-full bg-cyan-300/30 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{ ["--float-rot" as string]: "-6deg" }}
        className="absolute -left-6 -top-6 z-20 hidden animate-float items-center gap-1.5 rounded-2xl border border-hairline bg-white px-3 py-2 text-xs font-semibold text-ink shadow-glow sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-cyan-500" /> React
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        style={{ ["--float-rot" as string]: "4deg" }}
        className="absolute -right-4 top-10 z-20 hidden animate-float-slow items-center gap-1.5 rounded-2xl border border-hairline bg-white px-3 py-2 text-xs font-semibold text-ink shadow-glow sm:flex"
      >
        <span className="h-2 w-2 rounded-full bg-violet-500" /> TypeScript
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -bottom-6 left-6 z-20 hidden animate-float-slower items-center gap-1.5 rounded-2xl border border-hairline bg-white px-3 py-2 text-xs font-semibold text-ink shadow-glow-pink sm:flex"
      >
        <Figma className="h-3.5 w-3.5 text-pink-500" /> Figma
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -right-3 -bottom-4 z-20 hidden h-11 w-11 animate-float items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-glow-pink sm:flex"
      >
        <Heart className="h-4 w-4 fill-white" />
      </motion.div>

      {/* the editor window itself */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 overflow-hidden rounded-3xl border border-hairline bg-white/95 shadow-glow-lg backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-hairline bg-violet-50/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 font-mono text-[11px] text-body">mapBookToDomain.ts</span>
          <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-violet-500">
            <Sparkles className="h-3 w-3" /> vibe: focused
          </span>
        </div>

        <div className="space-y-1.5 px-5 py-6 font-mono text-[12.5px] leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.09, duration: 0.35 }}
              style={{ paddingLeft: `${line.indent * 16}px` }}
              className="whitespace-pre"
            >
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + codeLines.length * 0.09 }}
            className="inline-block h-4 w-1.5 translate-y-0.5 animate-blink bg-violet-500"
          />
        </div>
      </motion.div>
    </div>
  );
}

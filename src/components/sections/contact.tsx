"use client";

import { useState, type FormEvent } from "react";
import { ChevronRight, FileDown, Github, Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

const inputClasses =
  "w-full rounded-2xl border border-hairline bg-elevated/80 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-body/50 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30";

const quickLinks = [
  {
    icon: FileDown,
    title: "Download résumé",
    description: "The full PDF — experience, stack, and education in one place.",
    href: siteConfig.resumeUrl,
  },
  {
    icon: Github,
    title: "Browse GitHub",
    description: "Source for the projects below, plus everything still in progress.",
    href: siteConfig.github,
  },
  {
    icon: Mail,
    title: "Email directly",
    description: "Skip the form and land straight in my inbox.",
    href: `mailto:${siteConfig.email}`,
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="container-page py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          kicker="get in touch"
          title="Tell me what you're building"
          description="Fill this out and it opens straight in your email client, addressed to me — no backend required."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal delay={0.1}>
          <GlowCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-body">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Lovelace"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-body">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-body">
                  Project details
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <Magnetic className="block w-full">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-contrast px-6 py-3.5 text-sm font-semibold text-canvas transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </Magnetic>

              <p
                className={`text-center text-xs transition-opacity duration-300 ${
                  sent ? "text-violet-300 opacity-100" : "text-body/60 opacity-100"
                }`}
              >
                {sent
                  ? "Opening your email client now — thank you!"
                  : "Opens your email client with everything pre-filled."}
              </p>
            </form>
          </GlowCard>
        </Reveal>

        <div className="flex flex-col gap-4">
          {quickLinks.map((link, i) => (
            <Reveal key={link.title} delay={0.15 + i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-hairline bg-surface/80 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 text-violet-300">
                  <link.icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">{link.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-body">
                    {link.description}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-body/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

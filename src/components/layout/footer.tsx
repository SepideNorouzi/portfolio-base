import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface/70">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 font-mono text-xs font-bold text-white">
              {siteConfig.initials}
            </span>
            <span className="text-sm font-semibold text-ink">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
            {siteConfig.role} — building interfaces that are as considered underneath as they
            look on screen.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-violet-300">{"// navigate"}</p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-body transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-violet-300">{"// connect"}</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-body/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &amp; Tailwind
            CSS.
          </p>
          <p className="font-mono">
            status: <span className="text-emerald-400">online</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

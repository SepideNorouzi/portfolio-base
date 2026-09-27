import type { Project, ServiceItem } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME
 *  This is the only file you should need to touch to make this
 *  portfolio yours: swap the copy, contact links, and projects.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Sepide Norouzi",
  initials: "S.",
  role: "Frontend Developer & UI/UX Designer",
  headline: "I design the interface, then I make the types keep every promise.",
  subhead:
    "Frontend developer and UI/UX designer studying computer engineering. I move from Figma frames to production React and TypeScript, with state architecture and motion that actually behaves.",
  location: "Computer Engineering student, building on the side",
  available: true,
  // TODO: swap these for your real links before you deploy
  email: "hello@example.com",
  github: "https://github.com/SepideNorouzi",
  linkedin: "#",
  resumeUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "5+", label: "Projects shipped" },
  { value: "13", label: "Tools & stacks" },
  { value: "100%", label: "Figma-first" },
  { value: "∞", label: "Always learning" },
];

export const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Vite",
  "TanStack Query",
  "Zustand",
  "Figma",
  "Django REST",
  "MongoDB",
  "Framer Motion",
  "Vitest",
  "Git",
];

export const services: ServiceItem[] = [
  {
    title: "Frontend Engineering",
    description:
      "React and TypeScript component architecture, with wire types mapped cleanly to domain types all the way from the API to the UI.",
  },
  {
    title: "UI/UX Design",
    description:
      "Figma-first design systems and layouts, refined through self-study of Refactoring UI and the real constraints of shipped components.",
  },
  {
    title: "State & Data Architecture",
    description:
      "TanStack Query for server state, Zustand for client state — dual-mode repository patterns that keep demo data and live data honest.",
  },
  {
    title: "Motion & Interaction",
    description:
      "Framer Motion micro-interactions, from 3D card flips to layout-aware transitions that don't fight the rest of the interface.",
  },
];

export const projects: Project[] = [
  {
    slug: "readers-nook",
    title: "Reader's Nook",
    category: "Full-Stack",
    accent: "violet",
    featured: true,
    summary:
      "A full-stack book-tracking app with a Django REST backend and a React + TypeScript frontend, built around a strict wire-type to domain-type architecture.",
    description:
      "Reader's Nook tracks books, quotes, and collections behind a JWT-authenticated API. Every resource is split into snake_case wire types and camelCase domain types, connected by explicit mapper functions, so the UI never touches a raw API shape directly. A dual-mode repository facade lets the same components run against Zustand-backed demo data or TanStack Query-backed live data without branching UI logic.",
    stack: ["React", "TypeScript", "Django REST", "TanStack Query", "Zustand", "Vitest"],
    highlights: [
      "Dual-mode demo/admin repository facade — Zustand for demo state, TanStack Query for server state, both branches always called to respect the Rules of Hooks",
      "Wire type → domain type derivation (ApiBook → Book), mapping snake_case to camelCase and numeric IDs to strings",
      "JWT auth with a single-flight refresh interceptor, guarding concurrent 401s behind one shared refresh promise",
      "A quotes feature rebuilt from the OpenAPI spec, with payload types derived using Pick and Omit instead of hand-duplicated shapes",
      "A testing strategy layered with Vitest, MSW, and React Testing Library, starting from the Collections feature outward",
    ],
  },
  {
    slug: "classroom-app",
    title: "Classroom App",
    category: "Frontend",
    accent: "pink",
    summary:
      "A classroom membership app rebuilt on TanStack Query and Zustand, with careful attention to join and leave flows.",
    description:
      "This classroom membership tool migrated off React Redux entirely. Auth tokens now live in a single Zustand store instead of cookies, read through a getState() pattern for logic outside components, while server state — classrooms, membership, rosters — is owned by TanStack Query behind a typed query-key factory.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand"],
    highlights: [
      "Migrated auth and classroom state from React Redux to TanStack Query + Zustand",
      "Auto-join-on-visit flow using useEffect guarded by a useRef, so revisiting a join link never double-fires the mutation",
      "Leave-and-navigate flow built on mutateAsync, so the redirect only fires once the mutation actually resolves",
      "A classroomKeys query-key factory keeping cache invalidation consistent across the feature",
    ],
  },
  {
    slug: "flashlingo",
    title: "FlashLingo",
    category: "Frontend",
    accent: "pink",
    summary:
      "A flashcard app with a true 3D card-flip interface, built on CSS transforms and Framer Motion.",
    description:
      "FlashLingo renders each flashcard as a real 3D object — preserve-3d and backface-visibility handle the flip, while Framer Motion drives the interaction layer on top. Getting AnimatePresence's exit animation to feel right meant moving its MotionValues out of declarative props and updating them imperatively through style.",
    stack: ["React", "TypeScript", "Framer Motion", "CSS 3D Transforms"],
    highlights: [
      "3D flip UI built with preserve-3d and backface-visibility, rather than a faked 2D flip",
      "AnimatePresence exit-animation timing fixed by binding MotionValues imperatively via style",
      "Layout reserved for action buttons so the card never jumps as controls appear",
      "A useFlashcardSession hook separating session progress from the core useFlashcards data logic",
    ],
  },
  {
    slug: "cafe-menu",
    title: "Café Menu & Admin Dashboard",
    category: "Learning",
    accent: "cyan",
    summary:
      "A Next.js and MongoDB café menu app with a public menu and an admin dashboard for toggling item availability.",
    description:
      "Built as a deliberate learning project inspired by a real café's site, this app pairs a public-facing menu — complete with sold-out badges — with an authenticated dashboard for toggling availability in real time. It's the project that pushed React Server Components, Client Components, and Next.js API routes from theory into muscle memory.",
    stack: ["Next.js", "MongoDB", "Mongoose", "TypeScript"],
    highlights: [
      "Public menu page with live sold-out badges driven by MongoDB state",
      "Admin dashboard for toggling item availability without a redeploy",
      "First hands-on comparison of Server Components vs. Client Components in a real app",
      "Implemented the global.mongooseCache pattern to keep database connections safe across hot reloads",
    ],
  },
  {
    slug: "pomodoro-timer",
    title: "Pomodoro Timer",
    category: "Frontend",
    accent: "cyan",
    summary:
      "A Figma-first Pomodoro timer, and the first substantial solo project built end to end.",
    description:
      "Every screen of this timer was designed in Figma before a single component was written. It's a small app, but it's where a personal workflow for component structure, design tokens, and Tailwind conventions actually took shape.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    highlights: [
      "Designed first in Figma, then translated into React with matching design tokens",
      "First full solo project — from empty repo to a finished, working app",
      "Built on Tailwind CSS v4 and Vite for a fast, modern local dev loop",
    ],
  },
];

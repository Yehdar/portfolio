"use client";

import { Code2, Globe, Cpu } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Project {
  icon: React.ElementType;
  name: string;
  description: string;
  tech: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    icon: Code2,
    name: "Arsenal (Fintech App)",
    description: "AI Credit Card Optimizer",
    tech: "Go / Next.js",
  },
  {
    icon: Globe,
    name: "Student Gov Website",
    description: "Centralized Resource Portal",
    tech: "React",
  },
  {
    icon: Cpu,
    name: "FIRST Robotics",
    description: "Lead & Fundraiser",
    tech: "Leadership",
  },
];

// ─── Credit Card Graphic ───────────────────────────────────────────────────────
function CreditCard() {
  return (
    <div className="mx-5 mt-10 rounded-2xl overflow-hidden shadow-2xl h-[196px] relative bg-gradient-to-br from-[#0f0a1e] via-[#1e0a3c] to-[#0a1a0d]">
      {/* Decorative glare */}
      <div className="absolute -top-20 -left-10 w-64 h-64 rounded-full bg-purple-500/10" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-emerald-500/10" />
      <div className="absolute top-6 right-8 w-24 h-24 rounded-full bg-purple-400/5" />

      {/* Shimmer stripe */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-purple-400/[0.04] to-emerald-400/[0.03]" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top row — bank name + network mark */}
        <div className="flex items-start justify-between">
          <span className="text-white text-xl font-black tracking-[0.15em]">BUILD</span>
          {/* Overlapping circles (Mastercard-style) */}
          <div className="flex -space-x-2 mt-0.5">
            <div className="w-6 h-6 rounded-full bg-purple-500/70" />
            <div className="w-6 h-6 rounded-full bg-emerald-500/70" />
          </div>
        </div>

        {/* Chip */}
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-600 shadow-lg">
          <div className="w-full h-full rounded-md grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-emerald-800/30" />
            ))}
          </div>
        </div>

        {/* Bottom — card number + holder + label */}
        <div className="space-y-2">
          <p className="text-white/40 text-[13px] tracking-[0.25em] font-mono">
            •••• &nbsp;•••• &nbsp;•••• &nbsp;2025
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
              <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">
                Radhey Patel
              </p>
            </div>
            {/* Debit label in lieu of card network */}
            <span className="text-white/50 text-xs font-bold tracking-widest uppercase">
              Debit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Project Row ───────────────────────────────────────────────────────────────
function ProjectRow({ icon: Icon, name, description, tech }: Project) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 px-2 -mx-2 rounded-xl transition-colors">
      {/* Icon bubble */}
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon size={17} className="text-emerald-400" strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">{name}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5">{description}</p>
      </div>

      {/* Tech badge */}
      <div className="shrink-0">
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 whitespace-nowrap">
          {tech}
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ProjectsCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      {/* Credit card graphic */}
      <CreditCard />

      {/* Section header */}
      <div className="px-6 pt-5 pb-1 shrink-0">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">
          Latest Transactions
        </p>
      </div>

      {/* Project list */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

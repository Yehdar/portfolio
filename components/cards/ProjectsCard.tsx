"use client";

import { Code2, Globe, Cpu } from "lucide-react";

interface Project {
  icon: React.ElementType;
  name: string;
  description: string;
  tech: string;
  href: string;
}

const PROJECTS: Project[] = [
  { icon: Code2, name: "Arsenal (Fintech App)",  description: "AI Credit Card Optimizer",   tech: "Go / Next.js", href: "https://github.com/radhey-patel/arsenal"       },
  { icon: Globe,  name: "Student Gov Website",   description: "Centralized Resource Portal", tech: "React",        href: "https://github.com/radhey-patel/student-gov"  },
  { icon: Cpu,    name: "FIRST Robotics",         description: "Lead & Fundraiser",           tech: "Leadership",   href: "https://www.firstinspires.org/"               },
];

// ─── Full-bleed credit card face ───────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 bg-gradient-to-br from-[#1a003e] via-[#3d0080] to-[#0a1f0e] overflow-hidden">
      {/* Glare */}
      <div className="absolute -top-14 -left-8  w-56 h-56 rounded-full bg-purple-400/[0.08]" />
      <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-emerald-400/[0.07]" />
      <div className="absolute top-6 right-12   w-28 h-28 rounded-full bg-purple-300/[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: bank name + overlapping circles */}
        <div className="flex items-start justify-between">
          <span className="text-white text-xl font-black tracking-[0.15em]">BUILD</span>
          <div className="flex -space-x-2 mt-0.5">
            <div className="w-6 h-6 rounded-full bg-purple-500/80" />
            <div className="w-6 h-6 rounded-full bg-emerald-500/80" />
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

        {/* Bottom */}
        <div className="space-y-1.5">
          <p className="text-white/40 text-[12px] tracking-[0.25em] font-mono">•••• &nbsp;•••• &nbsp;•••• &nbsp;2025</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
              <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">Radhey Patel</p>
            </div>
            <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Debit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Project Row ───────────────────────────────────────────────────────────────
function ProjectRow({ icon: Icon, name, description, tech, href }: Project) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-4 py-3.5 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon size={17} className="text-emerald-400" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">{name}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5">{description}</p>
      </div>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 bg-purple-500/15 text-purple-300 whitespace-nowrap">
        {tech}
      </span>
    </a>
  );
}

export default function ProjectsCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      <CardFace />
      <div className="px-5 pt-4 pb-1 shrink-0">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">Latest Transactions</p>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {PROJECTS.map((p) => <ProjectRow key={p.name} {...p} />)}
      </div>
    </div>
  );
}

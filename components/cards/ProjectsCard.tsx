"use client";

import { Code2, Globe, Cpu } from "lucide-react";

interface Project {
  icon: React.ElementType;
  name: string;
  description: string;
  tech: string;
  href: string;
}

export const PROJECTS: Project[] = [
  { icon: Code2, name: "Arsenal (Fintech App)", description: "AI Credit Card Optimizer",    tech: "Go / Next.js", href: "https://github.com/radhey-patel/arsenal"      },
  { icon: Globe, name: "Student Gov Website",   description: "Centralized Resource Portal", tech: "React",        href: "https://github.com/radhey-patel/student-gov" },
  { icon: Cpu,   name: "FIRST Robotics",         description: "Lead & Fundraiser",           tech: "Leadership",   href: "https://www.firstinspires.org/"              },
];

// ─── Chase Freedom card face ───────────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 bg-gradient-to-br from-[#003087] via-[#004abf] to-[#0066b3] overflow-hidden">
      {/* Glare orbs */}
      <div className="absolute -top-14 -right-14 w-56 h-56 rounded-full bg-white/[0.06]" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-200/[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: Chase label + freedom wordmark + octagon */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-semibold mb-0.5">
              Chase
            </p>
            <p className="text-white text-[26px] font-black italic tracking-tight leading-none">
              freedom
            </p>
          </div>
          {/* Chase octagon logo */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 opacity-30 mt-0.5" fill="white">
            <path d="M14 2h12l12 12v12L26 38H14L2 26V14z" />
          </svg>
        </div>

        {/* Chip */}
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg">
          <div className="w-full h-full rounded-md grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-700/30" />
            ))}
          </div>
        </div>

        {/* Bottom: cardholder + Visa */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
            <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">
              Radhey Patel
            </p>
          </div>
          <span className="text-white/70 text-lg font-black italic tracking-tight">VISA</span>
        </div>
      </div>
    </div>
  );
}

// ─── Project Row ───────────────────────────────────────────────────────────────
function ProjectRow({ icon: Icon, name, description, tech, href, desktop }: Project & { desktop?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer
        ${desktop ? "py-5 gap-5" : "py-3.5 gap-4"}`}
    >
      <div className={`rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors
        ${desktop ? "w-12 h-12" : "w-10 h-10"}`}>
        <Icon size={desktop ? 20 : 17} className="text-blue-400" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-white font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`}>{name}</p>
        <p className={`text-zinc-400 leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`}>{description}</p>
      </div>
      <span className={`font-semibold px-2 py-0.5 rounded-full shrink-0 bg-blue-500/15 text-blue-300 whitespace-nowrap ${desktop ? "text-sm" : "text-xs"}`}>
        {tech}
      </span>
    </a>
  );
}

export default function ProjectsCard({ desktop }: { desktop?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      <CardFace />
      <div className={`shrink-0 ${desktop ? "px-6 pt-6 pb-2" : "px-5 pt-4 pb-1"}`}>
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">
          Projects
        </p>
      </div>
      <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} {...p} desktop={desktop} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { Code2 } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.projects;

interface Project {
  icon: React.ElementType;
  logo?: string;
  name: string;
  description: string;
  tech: string;
  href: string;
}

export const PROJECTS: Project[] = [
  { icon: Code2, logo: "/pointsoptimizer.png", name: "Points Optimizer", description: "AI Credit Card Points Optimizer", tech: "Next.js / Kotlin", href: "https://github.com/Yehdar/Canadian-Credit-Card-Points-Optimizer" },
];

function SpaceLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pirates.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 70%" }}
    />
  );
}

function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div className={`w-full relative overflow-hidden ${fill ? "flex-1" : "h-[300px] flex-shrink-0"}`}>
      <SpaceLandscape />
      {desktop && <div className="absolute inset-0 bg-black/50" />}
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-start justify-between">
          <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
            {theme.category}
          </p>
          <div
            className="px-2 rounded text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#a5b4fc" }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ icon: Icon, logo, name, description, tech, href, desktop, onRowClick }: Project & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(name); } }}
      className={`flex items-center border-b-2 last:border-0 group active:scale-[0.98] px-3 rounded-none transition-all cursor-pointer
        ${desktop ? "py-7 gap-5" : "py-5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
      onMouseEnter={desktop ? (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; } : undefined}
      onMouseLeave={desktop ? (e) => { e.currentTarget.style.background = ""; } : undefined}
    >
      <div
        className={`shrink-0 overflow-hidden flex items-center justify-center ${logo ? (desktop ? "w-32 h-20" : "w-24 h-16") : (desktop ? "w-12 h-12" : "w-10 h-10")}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {logo
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={logo} alt={name} className="w-full h-full object-cover object-top" />
          : <Icon size={desktop ? 20 : 17} style={{ color: theme.rowIconColor }} strokeWidth={1.8} />
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{name}</p>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: theme.rowSubtext }}>{description}</p>
      </div>
      <span
        className={`font-semibold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${desktop ? "text-sm" : "text-xs"}`}
        style={{ background: theme.badgeBg, color: theme.badgeFg }}
      >
        {tech}
      </span>
    </a>
  );
}

export default function ProjectsCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      <CardFace desktop={desktop} fill={!desktop && !onRowClick} />
      {(desktop || onRowClick) && (<>
        <div className={`shrink-0 ${desktop ? "px-5 pt-6 pb-2" : "px-4 pt-4 pb-1"}`}>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>Click on them to find more details</p>
        </div>
        <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
          {PROJECTS.map((p) => (
            <ProjectRow key={p.name} {...p} desktop={desktop} onRowClick={onRowClick} />
          ))}
        </div>
      </>)}
    </div>
  );
}

"use client";

import { Code2, Globe, Cpu } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.projects;

interface Project {
  icon: React.ElementType;
  name: string;
  description: string;
  tech: string;
  href: string;
}

export const PROJECTS: Project[] = [
  { icon: Code2, name: "Arsenal (Fintech App)", description: "AI Credit Card Optimizer",    tech: "Go / Next.js", href: "https://github.com/yehdar/arsenal"      },
  { icon: Globe, name: "Student Gov Website",   description: "Centralized Resource Portal", tech: "React",        href: "https://github.com/yehdar/student-gov" },
  { icon: Cpu,   name: "FIRST Robotics",         description: "Lead & Fundraiser",           tech: "Leadership",   href: "https://www.firstinspires.org/"              },
];

// ─── Arizona landscape SVG ─────────────────────────────────────────────────────
function ArizonaLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="az-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0533" />
          <stop offset="35%" stopColor="#4c1d95" />
          <stop offset="65%" stopColor="#a855f7" />
          <stop offset="85%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="210" fill="url(#az-sky)" />

      {/* Sun on horizon */}
      <ellipse cx="200" cy="162" rx="55" ry="18" fill="#fde68a" opacity="0.35" />
      <circle cx="200" cy="160" r="22" fill="#fde68a" opacity="0.7" />
      <circle cx="200" cy="160" r="14" fill="#fef9c3" opacity="0.9" />

      {/* Distant mesa silhouettes */}
      <path d="M0 130 L60 110 L80 125 L120 100 L150 120 L200 105 L240 118 L280 98 L310 115 L360 105 L400 120 L400 155 L0 155Z"
        fill="#431407" opacity="0.7" />

      {/* Desert floor */}
      <rect x="0" y="155" width="400" height="55" fill="#78350f" />

      {/* Ground texture */}
      <path d="M0 168 Q50 163 100 168 Q150 173 200 168 Q250 163 300 168 Q350 173 400 168"
        stroke="#92400e" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Saguaro cactus 1 — left */}
      <rect x="62" y="108" width="8" height="52" rx="4" fill="#14532d" />
      <rect x="38" y="123" width="24" height="7" rx="3.5" fill="#14532d" />
      <rect x="38" y="110" width="7" height="20" rx="3.5" fill="#14532d" />

      {/* Saguaro cactus 2 — center-right */}
      <rect x="295" y="100" width="10" height="60" rx="5" fill="#166534" />
      <rect x="270" y="118" width="25" height="8" rx="4" fill="#166534" />
      <rect x="270" y="104" width="8" height="22" rx="4" fill="#166534" />
      <rect x="305" y="114" width="22" height="7" rx="3.5" fill="#166534" />
      <rect x="319" y="100" width="8" height="21" rx="4" fill="#166534" />

      {/* Saguaro cactus 3 — far right */}
      <rect x="355" y="120" width="7" height="40" rx="3.5" fill="#14532d" />
      <rect x="340" y="132" width="15" height="6" rx="3" fill="#14532d" />
      <rect x="340" y="120" width="6" height="18" rx="3" fill="#14532d" />
    </svg>
  );
}

// ─── State Seal ────────────────────────────────────────────────────────────────
function StateSeal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10" aria-hidden>
      <circle cx="22" cy="22" r="20" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <circle cx="22" cy="22" r="15" fill="none" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <text x="22" y="19" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" fontFamily="sans-serif" opacity="0.85">YORK</text>
      <text x="22" y="27" textAnchor="middle" fill={color} fontSize="6" fontFamily="sans-serif" opacity="0.7">UNIV.</text>
      <text x="22" y="34" textAnchor="middle" fill={color} fontSize="5" fontFamily="sans-serif" opacity="0.5">EST. 1959</text>
    </svg>
  );
}

// ─── ID Card Face ──────────────────────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 overflow-hidden">
      <ArizonaLandscape />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              ARIZONA
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#d8b4fe" }}
          >
            ID CARD
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">
          <div
            className="rounded-lg px-3 py-2"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
          >
            <p className="text-white/50 text-[7px] tracking-[0.2em] uppercase mb-0.5">CARDHOLDER</p>
            <p className="text-white font-bold text-[15px] tracking-tight leading-none drop-shadow">
              Radhey Patel
            </p>
            <p className="text-white/50 text-[8px] tracking-wider mt-0.5 uppercase">Software Engineer</p>
          </div>
          <StateSeal color="#c084fc" />
        </div>
      </div>
    </div>
  );
}

// ─── Project Row ───────────────────────────────────────────────────────────────
function ProjectRow({ icon: Icon, name, description, tech, href, desktop, onRowClick }: Project & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(name); } }}
      className={`flex items-center border-b last:border-0 group active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer
        ${desktop ? "py-5 gap-5" : "py-3.5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
    >
      <div
        className={`rounded-full flex items-center justify-center shrink-0 transition-colors ${desktop ? "w-12 h-12" : "w-10 h-10"}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <Icon size={desktop ? 20 : 17} style={{ color: theme.rowIconColor }} strokeWidth={1.8} />
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
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: theme.rowBg }}>
      <CardFace />
      <div className={`shrink-0 ${desktop ? "px-6 pt-6 pb-2" : "px-5 pt-4 pb-1"}`}>
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: theme.rowSubtext }}>
          ID Records
        </p>
      </div>
      <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
        {PROJECTS.map((p) => (
          <ProjectRow key={p.name} {...p} desktop={desktop} onRowClick={onRowClick} />
        ))}
      </div>
    </div>
  );
}

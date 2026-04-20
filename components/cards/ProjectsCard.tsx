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

// ─── Space with planets & astronauts SVG ──────────────────────────────────────
function SpaceLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="60%" stopColor="#0f0a2e" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <radialGradient id="sp-planet1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="60%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id="sp-planet2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
        <radialGradient id="sp-planet3" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="55%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </radialGradient>
        <radialGradient id="sp-nebula" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Deep space background */}
      <rect width="400" height="210" fill="url(#sp-bg)" />

      {/* Nebula cloud */}
      <ellipse cx="300" cy="80" rx="110" ry="70" fill="url(#sp-nebula)" />
      <ellipse cx="80" cy="140" rx="80" ry="50" fill="#7c3aed" opacity="0.07" />

      {/* Stars — varied sizes */}
      {[
        [15,10,1.2],[40,28,0.8],[68,8,1],[95,22,0.7],[130,5,1.1],[158,18,0.8],
        [192,9,1],[225,30,0.9],[258,14,1.2],[288,6,0.7],[315,25,1],[345,10,0.8],
        [375,20,1.1],[22,55,0.7],[58,42,1],[88,62,0.8],[120,48,1.2],[155,38,0.7],
        [195,58,0.9],[235,45,1],[270,55,0.8],[305,40,1.1],[340,52,0.7],[380,44,1],
        [10,80,0.8],[50,75,1],[100,85,0.7],[145,72,1.1],[200,78,0.9],[250,82,0.8],
        [295,70,1],[350,80,0.7],[390,75,1.2],
      ].map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="white" opacity={0.4 + (i % 4) * 0.15} />
      ))}

      {/* Shooting star */}
      <line x1="50" y1="30" x2="80" y2="20" stroke="white" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="30" x2="45" y2="32" stroke="white" strokeWidth="0.5" opacity="0.2" />

      {/* ── Large ringed planet (Saturn-like) — right ── */}
      <circle cx="310" cy="75" r="38" fill="url(#sp-planet1)" />
      {/* Cloud bands */}
      <ellipse cx="310" cy="68" rx="38" ry="6" fill="#ea580c" opacity="0.3" />
      <ellipse cx="310" cy="78" rx="38" ry="5" fill="#7c2d12" opacity="0.25" />
      <ellipse cx="310" cy="88" rx="35" ry="4" fill="#9a3412" opacity="0.2" />
      {/* Ring */}
      <ellipse cx="310" cy="75" rx="62" ry="12" fill="none" stroke="#fbbf24" strokeWidth="5" opacity="0.35" />
      <ellipse cx="310" cy="75" rx="62" ry="12" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.2" />
      {/* Ring occludes planet bottom — mask effect via colored ellipse */}
      <ellipse cx="310" cy="80" rx="38" ry="16" fill="url(#sp-planet1)" opacity="0.95" />

      {/* ── Medium purple planet — upper left ── */}
      <circle cx="65" cy="48" r="24" fill="url(#sp-planet2)" />
      {/* Surface detail */}
      <ellipse cx="62" cy="42" rx="20" ry="5" fill="#6d28d9" opacity="0.4" />
      <ellipse cx="68" cy="54" rx="18" ry="4" fill="#4c1d95" opacity="0.35" />
      {/* Small moon */}
      <circle cx="100" cy="28" r="7" fill="#c4b5fd" opacity="0.6" />
      <ellipse cx="98" cy="26" rx="4" ry="2" fill="#7c3aed" opacity="0.4" />

      {/* ── Small cyan planet — lower center ── */}
      <circle cx="185" cy="155" r="18" fill="url(#sp-planet3)" />
      <ellipse cx="183" cy="150" rx="15" ry="3" fill="#06b6d4" opacity="0.35" />

      {/* ── Astronaut 1 — floating center ── */}
      <g transform="translate(168, 60) rotate(-15)">
        {/* Helmet */}
        <circle cx="0" cy="0" r="10" fill="#e2e8f0" />
        <circle cx="0" cy="0" r="8" fill="#0f172a" opacity="0.85" />
        {/* Visor shine */}
        <ellipse cx="-2" cy="-2" rx="4" ry="3" fill="#818cf8" opacity="0.4" />
        {/* Body / suit */}
        <rect x="-8" y="9" width="16" height="14" rx="5" fill="#e2e8f0" />
        {/* Suit details */}
        <rect x="-3" y="11" width="6" height="4" rx="1" fill="#94a3b8" />
        {/* Arms */}
        <rect x="-16" y="11" width="9" height="5" rx="2.5" fill="#e2e8f0" />
        <rect x="7" y="11" width="9" height="5" rx="2.5" fill="#e2e8f0" />
        {/* Legs */}
        <rect x="-7" y="22" width="5" height="9" rx="2.5" fill="#cbd5e1" />
        <rect x="2" y="22" width="5" height="9" rx="2.5" fill="#cbd5e1" />
        {/* Tether */}
        <path d="M8 14 Q25 8 35 15" stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.6" />
      </g>

      {/* ── Astronaut 2 — small, far right lower ── */}
      <g transform="translate(355, 148) rotate(20) scale(0.65)">
        <circle cx="0" cy="0" r="10" fill="#e2e8f0" />
        <circle cx="0" cy="0" r="8" fill="#0f172a" opacity="0.85" />
        <ellipse cx="-2" cy="-2" rx="4" ry="3" fill="#67e8f9" opacity="0.4" />
        <rect x="-8" y="9" width="16" height="14" rx="5" fill="#e2e8f0" />
        <rect x="-16" y="11" width="9" height="5" rx="2.5" fill="#e2e8f0" />
        <rect x="7" y="11" width="9" height="5" rx="2.5" fill="#e2e8f0" />
        <rect x="-7" y="22" width="5" height="9" rx="2.5" fill="#cbd5e1" />
        <rect x="2" y="22" width="5" height="9" rx="2.5" fill="#cbd5e1" />
      </g>

      {/* ── Distant galaxy swirl ── */}
      <ellipse cx="200" cy="110" rx="30" ry="8" fill="#818cf8" opacity="0.06" transform="rotate(-20, 200, 110)" />
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
      <SpaceLandscape />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              DEEP SPACE
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#a5b4fc" }}
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
          <StateSeal color="#818cf8" />
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

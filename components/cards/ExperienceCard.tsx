"use client";

import { Briefcase, Landmark, Building2, Building } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.experience;

interface Transaction {
  icon: React.ElementType;
  company: string;
  role: string;
  date: string;
  href: string;
  current?: boolean;
}

export const TRANSACTIONS: Transaction[] = [
  { icon: Briefcase, company: "Manulife",             role: "Technology Intern",           date: "Winter 2026", href: "https://www.linkedin.com/company/manulife/",              current: true },
  { icon: Landmark,  company: "RBC",                  role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/rbc/"                              },
  { icon: Building2, company: "Citi",                 role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/citi/"                             },
  { icon: Building,  company: "Government of Canada", role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/government-of-canada/"             },
];

// ─── Ocean with islands & pirate ships SVG ────────────────────────────────────
function OceanLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="oc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="50%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="oc-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="50%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="oc-island1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#c2a35a" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="105" fill="url(#oc-sky)" />

      {/* Clouds */}
      <ellipse cx="70" cy="25" rx="40" ry="10" fill="white" opacity="0.18" />
      <ellipse cx="90" cy="20" rx="28" ry="8" fill="white" opacity="0.13" />
      <ellipse cx="280" cy="18" rx="45" ry="10" fill="white" opacity="0.15" />
      <ellipse cx="300" cy="14" rx="30" ry="7" fill="white" opacity="0.1" />
      <ellipse cx="180" cy="35" rx="35" ry="8" fill="white" opacity="0.1" />

      {/* Sun */}
      <circle cx="330" cy="38" r="18" fill="#fde68a" opacity="0.3" />
      <circle cx="330" cy="38" r="11" fill="#fef9c3" opacity="0.55" />

      {/* Ocean */}
      <rect x="0" y="102" width="400" height="108" fill="url(#oc-sea)" />

      {/* Ocean waves */}
      {[108,118,128,140,152,164,178].map((y,i) => (
        <path key={i} d={`M0 ${y} Q50 ${y-5} 100 ${y} Q150 ${y+5} 200 ${y} Q250 ${y-5} 300 ${y} Q350 ${y+5} 400 ${y}`}
          stroke="#22d3ee" strokeWidth="0.8" fill="none" opacity={0.1 + i * 0.02} />
      ))}

      {/* ── Island 1 — left, lush tropical ── */}
      <ellipse cx="85" cy="105" rx="52" ry="14" fill="#c2a35a" />
      <ellipse cx="85" cy="102" rx="48" ry="10" fill="#d4b96a" />
      <path d="M55 102 Q85 65 115 102Z" fill="#15803d" />
      <path d="M62 102 Q85 72 108 102Z" fill="#16a34a" opacity="0.8" />
      {/* Palm tree */}
      <rect x="83" y="75" width="3" height="28" rx="1" fill="#92400e" />
      <path d="M84 75 Q75 62 65 65" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M84 75 Q95 60 105 62" stroke="#166534" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M84 75 Q78 68 72 72" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Coconuts */}
      <circle cx="65" cy="65" r="2.5" fill="#92400e" />
      <circle cx="105" cy="62" r="2.5" fill="#92400e" />

      {/* ── Island 2 — center-right, rocky ── */}
      <ellipse cx="265" cy="108" rx="38" ry="10" fill="#c2a35a" />
      <ellipse cx="265" cy="105" rx="34" ry="8" fill="#d4b96a" />
      <path d="M238 105 Q255 80 272 105Z" fill="#374151" />
      <path d="M258 105 Q268 82 278 105Z" fill="#4b5563" />
      {/* Palm tree on rocky island */}
      <rect x="263" y="83" width="3" height="22" rx="1" fill="#92400e" />
      <path d="M264 83 Q256 73 248 75" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M264 83 Q272 71 280 73" stroke="#166534" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ── Pirate ship 1 — foreground left ── */}
      {/* Hull */}
      <path d="M30 148 Q32 158 75 160 Q118 162 120 148Z" fill="#1c1917" />
      <path d="M35 148 L30 148 Q32 158 75 160 Q118 162 120 148 L115 148Z" fill="#292524" />
      {/* Deck */}
      <rect x="38" y="142" width="74" height="7" rx="1" fill="#292524" />
      {/* Main mast */}
      <rect x="74" y="98" width="3" height="46" fill="#44403c" />
      {/* Crow's nest */}
      <rect x="70" y="108" width="11" height="8" rx="2" fill="#292524" />
      {/* Main sail — black with skull */}
      <path d="M77 99 L77 135 L112 125 L112 89Z" fill="#1c1917" />
      <path d="M77 99 L77 135 L112 125 L112 89Z" fill="none" stroke="#44403c" strokeWidth="0.5" />
      {/* Skull on sail */}
      <circle cx="95" cy="112" r="5" fill="white" opacity="0.7" />
      <rect x="91" y="116" width="8" height="4" rx="1" fill="white" opacity="0.7" />
      <circle cx="93" cy="111" r="1.2" fill="#1c1917" opacity="0.9" />
      <circle cx="97" cy="111" r="1.2" fill="#1c1917" opacity="0.9" />
      {/* Crossbones */}
      <line x1="92" y1="118" x2="98" y2="120" stroke="#1c1917" strokeWidth="0.8" opacity="0.9" />
      <line x1="98" y1="118" x2="92" y2="120" stroke="#1c1917" strokeWidth="0.8" opacity="0.9" />
      {/* Fore mast */}
      <rect x="50" y="110" width="2.5" height="34" fill="#44403c" />
      <path d="M52 111 L52 130 L78 125 L78 106Z" fill="#1c1917" opacity="0.85" />
      {/* Flag */}
      <rect x="77" y="98" width="2" height="1" fill="#44403c" />
      <path d="M79 96 L89 98 L79 100Z" fill="#1c1917" />
      {/* Cannon ports */}
      {[55,70,85,100].map((x,i) => (
        <circle key={i} cx={x} cy="153" r="2.5" fill="#0c0a09" opacity="0.8" />
      ))}
      {/* Ship reflection */}
      <path d="M35 160 Q75 165 115 160 L118 170 Q75 175 32 170Z" fill="#0e7490" opacity="0.15" />

      {/* ── Pirate ship 2 — background right, smaller ── */}
      <path d="M295 130 Q297 138 328 140 Q359 142 361 130Z" fill="#1c1917" opacity="0.85" />
      <rect x="300" y="126" width="54" height="5" rx="1" fill="#292524" opacity="0.85" />
      <rect x="325" y="97" width="2.5" height="31" fill="#44403c" opacity="0.85" />
      <path d="M327 98 L327 122 L352 117 L352 93Z" fill="#1c1917" opacity="0.75" />
      <rect x="310" y="106" width="2" height="22" fill="#44403c" opacity="0.75" />
      <path d="M312 107 L312 122 L325 119 L325 104Z" fill="#1c1917" opacity="0.65" />
      {/* Skull on far ship */}
      <circle cx="340" cy="107" r="3.5" fill="white" opacity="0.45" />

      {/* ── Seagulls ── */}
      {[[150,55],[165,50],[175,58],[340,65],[355,60]].map(([x,y],i) => (
        <path key={i} d={`M${x} ${y} Q${x+5} ${y-4} ${x+10} ${y}`} stroke="white" strokeWidth="1.2" fill="none" opacity="0.5" />
      ))}

      {/* Horizon shimmer */}
      <line x1="0" y1="103" x2="400" y2="103" stroke="#7dd3fc" strokeWidth="0.5" opacity="0.3" />
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
      <OceanLandscape />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              THE HIGH SEAS
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#67e8f9" }}
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
          <StateSeal color="#22d3ee" />
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Row ───────────────────────────────────────────────────────────
function TransactionRow({
  icon: Icon, company, role, date, href, current, desktop, onRowClick,
}: Transaction & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(company); } }}
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
        <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{company}</p>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: theme.rowSubtext }}>{role}</p>
      </div>
      <span
        className={`font-semibold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${desktop ? "text-sm" : "text-xs"}`}
        style={current
          ? { background: theme.badgeActiveBg, color: theme.badgeActiveFg }
          : { background: theme.badgeBg, color: theme.badgeFg }}
      >
        {date}
      </span>
    </a>
  );
}

export default function ExperienceCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: theme.rowBg }}>
      <CardFace />
      <div className={`shrink-0 ${desktop ? "px-6 pt-6 pb-2" : "px-5 pt-4 pb-1"}`}>
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: theme.rowSubtext }}>
          ID Records
        </p>
      </div>
      <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
        {TRANSACTIONS.map((tx) => (
          <TransactionRow key={tx.company} {...tx} desktop={desktop} onRowClick={onRowClick} />
        ))}
      </div>
    </div>
  );
}

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

// ─── Colorado landscape SVG ────────────────────────────────────────────────────
function ColoradoLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="co-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2744" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="75%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="210" fill="url(#co-sky)" />

      {/* Stars */}
      {[[30,20],[80,12],[140,8],[200,15],[260,9],[320,22],[370,14],[50,40],[160,35],[290,38],[350,42]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="1" fill="white" opacity="0.7" />
      ))}

      {/* Back mountain range (lightest) */}
      <path d="M0 130 L50 85 L100 110 L150 65 L200 95 L250 70 L300 100 L350 75 L400 105 L400 210 L0 210Z"
        fill="#334155" opacity="0.6" />

      {/* Mid mountain range */}
      <path d="M0 155 L60 105 L110 130 L170 80 L220 115 L280 85 L330 120 L380 90 L400 115 L400 210 L0 210Z"
        fill="#1e3a5f" opacity="0.85" />

      {/* Snow caps on mid mountains */}
      <path d="M170 80 L185 95 L155 95Z" fill="white" opacity="0.75" />
      <path d="M280 85 L295 100 L265 100Z" fill="white" opacity="0.7" />
      <path d="M60 105 L73 118 L47 118Z" fill="white" opacity="0.65" />

      {/* Foreground treeline */}
      <path d="M0 175 Q30 160 60 170 Q90 180 120 165 Q150 152 180 168 Q210 182 240 167 Q270 155 300 170 Q330 182 360 168 Q380 160 400 170 L400 210 L0 210Z"
        fill="#0f2744" />

      {/* Pine tree silhouettes */}
      {[20,55,90,130,165,200,240,275,310,350,385].map((x,i) => (
        <g key={i} transform={`translate(${x}, 160)`}>
          <polygon points="0,-22 6,0 -6,0" fill="#0f4c81" opacity="0.8" />
          <polygon points="0,-32 8,0 -8,0" fill="#0c3461" opacity="0.6" />
        </g>
      ))}

      {/* Moon */}
      <circle cx="350" cy="30" r="12" fill="#dbeafe" opacity="0.6" />
      <circle cx="356" cy="27" r="11" fill="#1d4ed8" opacity="0.9" />
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
      <ColoradoLandscape />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              COLORADO
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#93c5fd" }}
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
          <StateSeal color="#60a5fa" />
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

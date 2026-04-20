"use client";

import { ExternalLink } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.connections;

// ─── Brand SVG icons ───────────────────────────────────────────────────────────
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Link {
  icon: React.ElementType;
  label: string;
  handle: string;
  href: string;
  iconColor: string;
}

export const LINKS: Link[] = [
  { icon: GithubIcon,   label: "GitHub",   handle: "github.com/yehdar",              href: "https://github.com/yehdar",           iconColor: "text-white"    },
  { icon: LinkedinIcon, label: "LinkedIn", handle: "linkedin.com/in/radhey-patel-",  href: "https://linkedin.com/in/radhey-patel-", iconColor: "text-sky-400" },
];

// ─── Georgia landscape SVG ─────────────────────────────────────────────────────
function GeorgiaLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="ga-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="40%" stopColor="#f9a8d4" />
          <stop offset="75%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="210" fill="url(#ga-sky)" />

      {/* Soft clouds */}
      <ellipse cx="80" cy="50" rx="50" ry="14" fill="white" opacity="0.25" />
      <ellipse cx="100" cy="44" rx="35" ry="12" fill="white" opacity="0.2" />
      <ellipse cx="300" cy="35" rx="55" ry="12" fill="white" opacity="0.2" />
      <ellipse cx="320" cy="30" rx="40" ry="10" fill="white" opacity="0.15" />

      {/* Rolling hills — back */}
      <path d="M0 140 Q80 100 160 125 Q240 148 320 115 Q360 100 400 130 L400 210 L0 210Z"
        fill="#166534" opacity="0.5" />

      {/* Rolling hills — front */}
      <path d="M0 165 Q60 145 120 158 Q180 170 240 150 Q300 133 360 155 Q380 162 400 158 L400 210 L0 210Z"
        fill="#14532d" />

      {/* Peach trees — row of 5 */}
      {[40, 110, 190, 270, 340].map((x, i) => (
        <g key={i} transform={`translate(${x}, 142)`}>
          {/* Trunk */}
          <rect x="-3" y="0" width="6" height="22" rx="3" fill="#78350f" opacity="0.8" />
          {/* Crown */}
          <circle cx="0" cy="-4" r="16" fill="#4ade80" opacity="0.7" />
          <circle cx="-6" cy="-2" r="12" fill="#22c55e" opacity="0.55" />
          {/* Peaches */}
          <circle cx="5" cy="2" r="4" fill="#fb923c" opacity="0.85" />
          <circle cx="-4" cy="-8" r="3.5" fill="#fdba74" opacity="0.8" />
          <circle cx="8" cy="-6" r="3" fill="#fb923c" opacity="0.75" />
        </g>
      ))}

      {/* Fireflies / soft bokeh */}
      {[[55,90],[130,75],[200,95],[300,80],[360,100],[90,130],[240,120],[340,125]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="#fde68a" opacity="0.45" />
      ))}
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
      <GeorgiaLandscape />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase leading-none mb-1" style={{ color: "rgba(20,83,45,0.8)" }}>
              {theme.category}
            </p>
            <p className="text-[15px] font-bold tracking-wide leading-none drop-shadow-sm" style={{ color: "#14532d" }}>
              GEORGIA
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(4px)", color: "#14532d" }}
          >
            ID CARD
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">
          <div
            className="rounded-lg px-3 py-2"
            style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(8px)" }}
          >
            <p className="text-white/60 text-[7px] tracking-[0.2em] uppercase mb-0.5">CARDHOLDER</p>
            <p className="text-white font-bold text-[15px] tracking-tight leading-none drop-shadow">
              Radhey Patel
            </p>
            <p className="text-white/55 text-[8px] tracking-wider mt-0.5 uppercase">Software Engineer</p>
          </div>
          <StateSeal color="#4ade80" />
        </div>
      </div>
    </div>
  );
}

// ─── Mobile list row ───────────────────────────────────────────────────────────
function LinkRow({ icon: Icon, label, handle, href, onRowClick }: Link & { onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(label); } }}
      className="flex items-center gap-4 py-3.5 border-b last:border-0 group active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer"
      style={{ borderColor: theme.rowBorder }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <Icon className="w-[17px] h-[17px]" style={{ color: theme.rowIconColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight" style={{ color: theme.rowText }}>{label}</p>
        <p className="text-xs leading-snug truncate mt-0.5" style={{ color: theme.rowSubtext }}>{handle}</p>
      </div>
      <ExternalLink size={15} style={{ color: theme.rowSubtext }} strokeWidth={1.8} />
    </a>
  );
}

// ─── Desktop bento box ─────────────────────────────────────────────────────────
function BentoLink({
  icon: Icon, label, handle, href, bg, iconStyle, textStyle, subStyle, onRowClick,
}: Link & { bg: string; iconStyle: React.CSSProperties; textStyle: React.CSSProperties; subStyle: React.CSSProperties; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(label); } }}
      className={`${bg} rounded-3xl p-8 flex flex-col justify-between min-h-[220px] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer`}
    >
      <Icon className="w-12 h-12" style={iconStyle} />
      <div>
        <p className="text-xl font-bold leading-tight" style={textStyle}>{label}</p>
        <p className="text-sm mt-1 break-all" style={subStyle}>{handle}</p>
      </div>
    </a>
  );
}

const BENTO_META = [
  {
    id: "GitHub",
    bg: "bg-zinc-900",
    iconStyle: { color: "white" },
    textStyle: { color: "white" },
    subStyle: { color: "#71717a" },
  },
  {
    id: "LinkedIn",
    bg: "bg-[#0a66c2]",
    iconStyle: { color: "white" },
    textStyle: { color: "white" },
    subStyle: { color: "#bfdbfe" },
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ConnectionsCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: theme.rowBg }}>
      <CardFace />

      {desktop ? (
        <div className="flex-1 px-6 pt-6 pb-8 overflow-y-auto hide-scrollbar">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5" style={{ color: theme.rowSubtext }}>ID Records</p>
          <div className="grid grid-cols-2 gap-4">
            {LINKS.map((link) => {
              const meta = BENTO_META.find((m) => m.id === link.label)!;
              return (
                <BentoLink
                  key={link.label}
                  {...link}
                  bg={meta.bg}
                  iconStyle={meta.iconStyle}
                  textStyle={meta.textStyle}
                  subStyle={meta.subStyle}
                  onRowClick={onRowClick}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="px-5 pt-4 pb-1 shrink-0">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: theme.rowSubtext }}>ID Records</p>
          </div>
          <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
            {LINKS.map((link) => (
              <LinkRow key={link.label} {...link} onRowClick={onRowClick} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

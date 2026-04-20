"use client";

import { FileText, Mail } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.about;

// ─── California landscape SVG ──────────────────────────────────────────────────
function CaliforniaLandscape() {
  return (
    <svg
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="ca-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="45%" stopColor="#ea580c" />
          <stop offset="80%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
        <linearGradient id="ca-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="210" fill="url(#ca-sky)" />

      {/* Sun glow */}
      <circle cx="300" cy="155" r="38" fill="#fde68a" opacity="0.25" />
      <circle cx="300" cy="155" r="22" fill="#fde68a" opacity="0.45" />
      <circle cx="300" cy="155" r="13" fill="#fef9c3" opacity="0.7" />

      {/* Distant hills */}
      <path d="M0 145 Q80 110 160 130 Q240 148 320 120 Q360 108 400 125 L400 210 L0 210Z" fill="#7c2d12" opacity="0.55" />

      {/* Water */}
      <rect x="0" y="162" width="400" height="48" fill="url(#ca-water)" />
      {/* Water shimmer */}
      <path d="M40 170 Q70 167 100 170 Q130 173 160 170" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.35" />
      <path d="M180 175 Q220 172 260 175 Q290 178 320 175" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.25" />

      {/* Golden Gate Bridge — left tower */}
      <rect x="108" y="108" width="10" height="55" fill="#7f1d1d" />
      <rect x="104" y="108" width="18" height="4" fill="#991b1b" />
      <rect x="104" y="118" width="18" height="4" fill="#991b1b" />
      <rect x="104" y="128" width="18" height="4" fill="#991b1b" />

      {/* Golden Gate Bridge — right tower */}
      <rect x="178" y="108" width="10" height="55" fill="#7f1d1d" />
      <rect x="174" y="108" width="18" height="4" fill="#991b1b" />
      <rect x="174" y="118" width="18" height="4" fill="#991b1b" />
      <rect x="174" y="128" width="18" height="4" fill="#991b1b" />

      {/* Main cables */}
      <path d="M80 135 Q148 108 218 135" stroke="#b91c1c" strokeWidth="2.5" fill="none" />
      {/* Deck */}
      <line x1="80" y1="155" x2="218" y2="155" stroke="#991b1b" strokeWidth="3" />
      {/* Vertical hangers */}
      {[90,103,116,129,142,155,168,181,194,207].map((x, i) => {
        const t = (x - 80) / 138;
        const approxCableY = 108 + 27 * 4 * t * (1 - t);
        return <line key={i} x1={x} y1={approxCableY} x2={x} y2="155" stroke="#991b1b" strokeWidth="0.9" opacity="0.7" />;
      })}

      {/* Fog wisps */}
      <ellipse cx="60" cy="148" rx="45" ry="12" fill="white" opacity="0.07" />
      <ellipse cx="340" cy="140" rx="50" ry="10" fill="white" opacity="0.06" />
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

// ─── Action Button ─────────────────────────────────────────────────────────────
function ActionButton({
  href, icon: Icon, title, sub, onRowClick, id,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  sub: string;
  onRowClick?: (id: string) => void;
  id?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick && id) { e.preventDefault(); onRowClick(id); } }}
      className="flex-1 flex flex-col items-center justify-center gap-2 rounded-2xl py-4 px-3 active:scale-95 transition-all"
      style={{
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Icon style={{ color: theme.accentColor }} size={22} strokeWidth={1.6} />
      <div className="flex flex-col items-center">
        <span className="text-sm font-semibold leading-tight text-white">{title}</span>
        <span className="text-xs leading-tight text-white/50">{sub}</span>
      </div>
    </a>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AboutCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Landscape fills the full card */}
      <CaliforniaLandscape />

      {/* All content overlaid on top */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top: category + state name + badge */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              CALIFORNIA
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#fde68a" }}
          >
            ID CARD
          </div>
        </div>

        {/* Bottom: name block + seal + action buttons */}
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <div
              className="rounded-lg px-3 py-2"
              style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
            >
              <p className="text-white/50 text-[7px] tracking-[0.2em] uppercase mb-0.5">CARDHOLDER</p>
              <p className="text-white font-bold text-[15px] tracking-tight leading-none drop-shadow">
                Radhey Patel
              </p>
              <p className="text-white/50 text-[8px] tracking-wider mt-0.5 uppercase">Software Engineer</p>
            </div>
            <StateSeal color="#fbbf24" />
          </div>

          {/* Action Buttons overlaid at bottom */}
          <div className={`flex gap-3 ${desktop ? "gap-4" : ""}`}>
            <ActionButton href="/resume.pdf"                    icon={FileText} title="Resume"  sub="View PDF"  id="resume"  onRowClick={onRowClick} />
            <ActionButton href="mailto:radheypatel@example.com" icon={Mail}     title="Contact" sub="Email Me" id="contact" onRowClick={onRowClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

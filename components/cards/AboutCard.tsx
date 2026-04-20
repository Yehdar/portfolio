"use client";

import { FileText, Mail } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.about;

// ─── Toronto downtown skyline SVG ──────────────────────────────────────────────
function TorontoLandscape() {
  return (
    <svg
      viewBox="0 0 400 270"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="to-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="35%" stopColor="#0f172a" />
          <stop offset="70%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="to-lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient id="to-cn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="400" height="270" fill="url(#to-sky)" />

      {/* Stars */}
      {[[20,15],[55,8],[90,20],[140,6],[185,18],[230,10],[275,5],[320,16],[365,9],[42,35],[110,28],[200,32],[310,25],[380,38]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.2 : 0.7} fill="white" opacity={0.5 + (i % 3) * 0.15} />
      ))}

      {/* Moon */}
      <circle cx="340" cy="30" r="14" fill="#dbeafe" opacity="0.5" />
      <circle cx="346" cy="27" r="13" fill="#0f172a" opacity="0.85" />

      {/* Lake Ontario */}
      <rect x="0" y="185" width="400" height="85" fill="url(#to-lake)" />

      {/* Lake ripple reflections */}
      {[30,80,140,200,260,320,370].map((x,i) => (
        <ellipse key={i} cx={x} cy={198 + (i % 3) * 6} rx={18 + (i % 2) * 8} ry="2" fill="#38bdf8" opacity="0.08" />
      ))}

      {/* City light glow on water */}
      <ellipse cx="200" cy="190" rx="160" ry="20" fill="#f59e0b" opacity="0.06" />
      <ellipse cx="170" cy="193" rx="60" ry="12" fill="#38bdf8" opacity="0.07" />

      {/* ── CN Tower ── */}
      {/* Base legs */}
      <polygon points="172,185 178,130 182,130 188,185" fill="#374151" />
      {/* Main shaft */}
      <rect x="179" y="55" width="6" height="75" fill="url(#to-cn)" />
      {/* Pod */}
      <ellipse cx="182" cy="90" rx="11" ry="6" fill="#4b5563" />
      <rect x="177" y="84" width="10" height="12" rx="2" fill="#374151" />
      {/* Antenna */}
      <rect x="181" y="20" width="2" height="35" fill="#9ca3af" />
      {/* Pod windows */}
      {[178,182,186].map((x,i) => (
        <rect key={i} x={x} y="87" width="2" height="4" rx="1" fill="#fde68a" opacity="0.8" />
      ))}
      {/* Tower light */}
      <circle cx="182" cy="20" r="2" fill="#f87171" opacity="0.9" />

      {/* ── Buildings left of CN Tower ── */}
      {/* Tall glass tower far left */}
      <rect x="20" y="120" width="22" height="65" fill="#1e3a5f" />
      <rect x="20" y="120" width="22" height="65" fill="none" stroke="#38bdf8" strokeWidth="0.3" opacity="0.3" />
      {[125,135,145,155,165].map((y,i) => (
        <rect key={i} x="22" y={y} width="18" height="6" fill="#fde68a" opacity={0.12 + (i % 2) * 0.1} />
      ))}

      {/* Mid tower */}
      <rect x="48" y="105" width="28" height="80" fill="#0f172a" />
      <rect x="48" y="105" width="28" height="80" fill="none" stroke="#60a5fa" strokeWidth="0.3" opacity="0.25" />
      {[108,118,128,138,148,158,168].map((y,i) => (
        <g key={i}>
          <rect x="51" y={y} width="8" height="6" fill="#fde68a" opacity={i % 2 === 0 ? 0.2 : 0.06} />
          <rect x="63" y={y} width="8" height="6" fill="#fde68a" opacity={i % 2 === 1 ? 0.18 : 0.05} />
        </g>
      ))}

      {/* Short building */}
      <rect x="82" y="138" width="20" height="47" fill="#1e293b" />
      {[140,150,160,170].map((y,i) => (
        <rect key={i} x="85" y={y} width="14" height="6" fill="#7dd3fc" opacity="0.1" />
      ))}

      {/* Curved glass skyscraper */}
      <rect x="108" y="95" width="24" height="90" rx="2" fill="#0c4a6e" />
      {[98,108,118,128,138,148,158,168].map((y,i) => (
        <rect key={i} x="110" y={y} width="20" height="7" fill="#7dd3fc" opacity={0.08 + (i % 3) * 0.04} />
      ))}

      {/* ── Buildings right of CN Tower ── */}
      {/* Royal Bank Plaza style */}
      <rect x="198" y="110" width="26" height="75" fill="#1e3a5f" />
      {[113,123,133,143,153,163,173].map((y,i) => (
        <g key={i}>
          <rect x="200" y={y} width="10" height="7" fill="#fde68a" opacity={i % 2 === 0 ? 0.15 : 0.05} />
          <rect x="212" y={y} width="10" height="7" fill="#fde68a" opacity={i % 2 === 1 ? 0.15 : 0.04} />
        </g>
      ))}

      {/* Bay-Adelaide */}
      <rect x="230" y="100" width="20" height="85" fill="#0f172a" />
      <rect x="230" y="100" width="20" height="85" fill="none" stroke="#38bdf8" strokeWidth="0.4" opacity="0.2" />
      {[103,113,123,133,143,153,163,173].map((y,i) => (
        <rect key={i} x="232" y={y} width="16" height="7" fill="#38bdf8" opacity={0.07 + (i % 2) * 0.04} />
      ))}

      {/* Scotia Plaza */}
      <rect x="256" y="88" width="30" height="97" fill="#1e3a5f" />
      <polygon points="256,88 271,70 286,88" fill="#374151" />
      {[92,102,112,122,132,142,152,162,172].map((y,i) => (
        <g key={i}>
          <rect x="258" y={y} width="12" height="7" fill="#fde68a" opacity={i % 3 === 0 ? 0.18 : 0.06} />
          <rect x="272" y={y} width="12" height="7" fill="#fde68a" opacity={i % 3 === 1 ? 0.16 : 0.05} />
        </g>
      ))}

      {/* First Canadian Place */}
      <rect x="292" y="75" width="24" height="110" fill="#0f172a" />
      <rect x="292" y="75" width="24" height="110" fill="none" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3" />
      {[78,88,98,108,118,128,138,148,158,168].map((y,i) => (
        <rect key={i} x="294" y={y} width="20" height="7" fill="#93c5fd" opacity={0.06 + (i % 2) * 0.04} />
      ))}

      {/* Smaller background buildings */}
      <rect x="330" y="130" width="18" height="55" fill="#1e293b" opacity="0.8" />
      <rect x="352" y="120" width="22" height="65" fill="#0f172a" opacity="0.8" />
      {[122,132,142,152,162].map((y,i) => (
        <rect key={i} x="354" y={y} width="18" height="7" fill="#fde68a" opacity="0.08" />
      ))}

      {/* Ground / road strip */}
      <rect x="0" y="183" width="400" height="4" fill="#374151" opacity="0.6" />

      {/* Street light reflections on water */}
      <line x1="182" y1="185" x2="182" y2="225" stroke="#f59e0b" strokeWidth="1.5" opacity="0.12" />
      <line x1="271" y1="185" x2="271" y2="220" stroke="#fde68a" strokeWidth="1" opacity="0.1" />
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
      <TorontoLandscape />

      {/* All content overlaid on top */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top: category + state name + badge */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.35em] font-bold uppercase text-white/60 leading-none mb-1">
              {theme.category}
            </p>
            <p className="text-white text-[15px] font-bold tracking-wide leading-none drop-shadow-sm">
              TORONTO
            </p>
          </div>
          <div
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#7dd3fc" }}
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
            <StateSeal color="#38bdf8" />
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

"use client";

import { ArrowUpRight } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.connections;

interface Link {
  icon?: React.ElementType;
  logo?: string;
  label: string;
  handle: string;
  href: string;
}

export const LINKS: Link[] = [
  { logo: "/links/linkedin.png", label: "LinkedIn", handle: "linkedin.com/in/radhey-patel-", href: "https://linkedin.com/in/radhey-patel-" },
  { logo: "/links/github.png",   label: "GitHub",   handle: "github.com/yehdar",             href: "https://github.com/yehdar"            },
];

// ─── Landscape ────────────────────────────────────────────────────────────────
function MountainLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/cards/yeti.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 90%" }}
    />
  );
}

// ─── ID Card Face ──────────────────────────────────────────────────────────────
function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div
      className={`w-full relative overflow-hidden ${fill ? "flex-1" : "flex-shrink-0"}`}
      style={!fill ? { height: desktop ? "clamp(160px, 30dvh, 300px)" : "300px" } : undefined}
    >
      <MountainLandscape />
      {desktop && <div className="absolute inset-0 bg-black/50" />}
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-start justify-between">
          <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
            {theme.category}
          </p>
          <div
            className="px-2 rounded text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#6ee7b7" }}
          >
            4
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Link Row ─────────────────────────────────────────────────────────────────
function LinkRow({ icon: Icon, logo, label, handle, href, desktop }: Link & { desktop?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center border-b-2 last:border-0 group active:scale-[0.98] px-3 rounded-none transition-all cursor-pointer
        ${desktop ? "py-7 gap-5" : "py-5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = ""; }}
    >
      <div
        className={`shrink-0 overflow-hidden flex items-center justify-center ${desktop ? "w-12 h-12" : "w-10 h-10"}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {logo
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={logo} alt={label} className="w-full h-full object-contain" />
          : Icon && <Icon className={desktop ? "w-6 h-6" : "w-[17px] h-[17px]"} style={{ color: theme.rowIconColor }} />
        }
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{label}</p>
          <ArrowUpRight size={14} className="shrink-0 text-white/50" strokeWidth={2} />
        </div>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: theme.rowSubtext }}>{handle}</p>
      </div>
    </a>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ConnectionsCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      <CardFace desktop={desktop} fill={!desktop && !onRowClick} />

      {(desktop || onRowClick) && (
        <div className={`flex-1 overflow-y-auto card-scrollbar pb-6 ${desktop ? "px-5 pt-6" : "px-4 pt-4"}`}
            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 82%, transparent 100%)" }}
        >
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255)" }}>How to Reach Me</p>
          {LINKS.map((link) => (
            <LinkRow key={link.label} {...link} desktop={desktop} />
          ))}
          {!desktop && <div className="h-64 shrink-0" />}
        </div>
      )}
    </div>
  );
}

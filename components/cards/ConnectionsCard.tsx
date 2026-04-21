"use client";

import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.connections;

// ─── Brand SVG icons (fallback) ────────────────────────────────────────────────
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
  icon?: React.ElementType;
  logo?: string;
  label: string;
  handle: string;
  href: string;
  iconColor: string;
}

export const LINKS: Link[] = [
  { logo: "/github.png",   label: "GitHub",   handle: "github.com/yehdar",             href: "https://github.com/yehdar",            iconColor: "text-white"    },
  { logo: "/linkedin.png", label: "LinkedIn", handle: "linkedin.com/in/radhey-patel-", href: "https://linkedin.com/in/radhey-patel-", iconColor: "text-sky-400" },
];

// ─── Landscape ────────────────────────────────────────────────────────────────
function MountainLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/yeti.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 90%" }}
    />
  );
}

// ─── ID Card Face ──────────────────────────────────────────────────────────────
function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div className={`w-full relative overflow-hidden ${fill ? "flex-1" : "h-[300px] flex-shrink-0"}`}>
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
function LinkRow({ icon: Icon, logo, label, handle, href, desktop, onRowClick }: Link & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(label); } }}
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
        <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{label}</p>
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

      {(desktop || onRowClick) && (<>
        <div className={`shrink-0 ${desktop ? "px-5 pt-6 pb-2" : "px-4 pt-4 pb-1"}`}>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>Click on them to find more details</p>
        </div>
        <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
          {LINKS.map((link) => (
            <LinkRow key={link.label} {...link} desktop={desktop} onRowClick={onRowClick} />
          ))}
        </div>
      </>)}
    </div>
  );
}

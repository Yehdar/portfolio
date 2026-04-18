"use client";

import { ExternalLink } from "lucide-react";

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
  { icon: GithubIcon,   label: "GitHub",   handle: "github.com/yehdar",      href: "https://github.com/yehdar",      iconColor: "text-zinc-900" },
  { icon: LinkedinIcon, label: "LinkedIn", handle: "linkedin.com/in/radhey-patel-", href: "https://linkedin.com/in/radhey-patel-", iconColor: "text-sky-400"  },
];

// ─── Amex World card face ──────────────────────────────────────────────────────
function CardFace() {
  return (
    <div
      className="w-full h-[210px] relative flex-shrink-0 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #c5cdd8 0%, #a8b3bf 35%, #8d9baa 65%, #7a8899 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 5px)",
        }}
      />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/15" />

      <div className="relative h-full flex flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <span className="text-white font-black tracking-[0.35em] text-sm uppercase drop-shadow-sm">
            CONTACT
          </span>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white/30 mt-0.5">
            <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" />
          </svg>
        </div>

        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 shadow-md">
          <div className="w-full h-full rounded-md grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-700/30" />
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/50 text-[8px] tracking-[0.25em] uppercase">Card Holder</p>
            <p className="text-white text-[11px] font-semibold tracking-[0.15em] uppercase drop-shadow-sm">
              Radhey Patel
            </p>
          </div>
          <span className="text-white/80 text-[10px] font-black tracking-[0.25em] uppercase drop-shadow-sm">
            WORLD
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile list row ───────────────────────────────────────────────────────────
function LinkRow({ icon: Icon, label, handle, href, iconColor, onRowClick }: Link & { onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(label); } }}
      className="flex items-center gap-4 py-3.5 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon className={`w-[17px] h-[17px] ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight">{label}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5 group-hover:text-zinc-300 transition-colors">
          {handle}
        </p>
      </div>
      <ExternalLink size={15} className="text-zinc-600 group-hover:text-zinc-400 shrink-0 transition-colors" strokeWidth={1.8} />
    </a>
  );
}

// ─── Desktop bento box ─────────────────────────────────────────────────────────
function BentoLink({
  icon: Icon,
  label,
  handle,
  href,
  bg,
  iconClass,
  textClass,
  subClass,
  onRowClick,
}: Link & { bg: string; iconClass: string; textClass: string; subClass: string; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(label); } }}
      className={`${bg} rounded-3xl p-8 flex flex-col justify-between
        min-h-[220px] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer`}
    >
      <Icon className={`w-12 h-12 ${iconClass}`} />
      <div>
        <p className={`text-xl font-bold leading-tight ${textClass}`}>{label}</p>
        <p className={`text-sm mt-1 break-all ${subClass}`}>{handle}</p>
      </div>
    </a>
  );
}

const BENTO_META = [
  { id: "GitHub",   bg: "bg-zinc-900",     iconClass: "text-white",         textClass: "text-white",         subClass: "text-zinc-400"  },
  { id: "LinkedIn", bg: "bg-[#0a66c2]",    iconClass: "text-white",         textClass: "text-white",         subClass: "text-blue-200"  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ConnectionsCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      <CardFace />

      {desktop ? (
        /* ── Desktop: bento grid ───────────────────────────────── */
        <div className="flex-1 px-6 pt-6 pb-8 overflow-y-auto hide-scrollbar">
          <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">Links</p>
          <div className="grid grid-cols-2 gap-4">
            {LINKS.map((link) => {
              const meta = BENTO_META.find((m) => m.id === link.label)!;
              return (
                <BentoLink
                  key={link.label}
                  {...link}
                  bg={meta.bg}
                  iconClass={meta.iconClass}
                  textClass={meta.textClass}
                  subClass={meta.subClass}
                  onRowClick={onRowClick}
                />
              );
            })}
          </div>
        </div>
      ) : (
        /* ── Mobile: list rows ─────────────────────────────────── */
        <>
          <div className="px-5 pt-4 pb-1 shrink-0">
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">Links</p>
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

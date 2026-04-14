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

// ─── Data — replace hrefs with your real URLs ──────────────────────────────────
const LINKS: Link[] = [
  { icon: GithubIcon,   label: "GitHub",   handle: "github.com/radhey-patel",      href: "https://github.com/radhey-patel",      iconColor: "text-white"    },
  { icon: LinkedinIcon, label: "LinkedIn", handle: "linkedin.com/in/radhey-patel", href: "https://linkedin.com/in/radhey-patel", iconColor: "text-sky-400"  },
];

// ─── Full-bleed credit card face ───────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 bg-gradient-to-br from-[#7c1a00] via-[#c0390a] to-[#e85d04] overflow-hidden">
      {/* Glare */}
      <div className="absolute -top-14 -right-14 w-56 h-56 rounded-full bg-yellow-300/[0.10]" />
      <div className="absolute -bottom-8  -left-8  w-44 h-44 rounded-full bg-red-900/30"       />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="text-white text-xl font-black tracking-[0.15em]">LINKS</span>
          <svg width="22" height="22" viewBox="0 0 24 24" className="text-white/60 mt-0.5">
            <path d="M6.5 12a5.5 5.5 0 0 1 5.5-5.5M9 12a3 3 0 0 1 3-3M11.5 12a.5.5 0 0 1 .5-.5"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Chip */}
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg">
          <div className="w-full h-full rounded-md grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-700/30" />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="space-y-1.5">
          <p className="text-white/40 text-[12px] tracking-[0.25em] font-mono">•••• &nbsp;•••• &nbsp;•••• &nbsp;2025</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
              <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">Radhey Patel</p>
            </div>
            <span className="text-white/70 text-lg font-black italic tracking-tight">VISA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Link Row ──────────────────────────────────────────────────────────────────
function LinkRow({ icon: Icon, label, handle, href, iconColor }: Link) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-4 py-3.5 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 px-2 -mx-2 rounded-xl transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon className={`w-[17px] h-[17px] ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight">{label}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5 group-hover:text-zinc-300 transition-colors">{handle}</p>
      </div>
      <ExternalLink size={15} className="text-zinc-600 group-hover:text-orange-400 shrink-0 transition-colors" strokeWidth={1.8} />
    </a>
  );
}

export default function ConnectionsCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      <CardFace />
      <div className="px-5 pt-4 pb-1 shrink-0">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">Latest Transactions</p>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {LINKS.map((link) => <LinkRow key={link.label} {...link} />)}
      </div>
    </div>
  );
}

"use client";

import { FileText, Mail } from "lucide-react";

// ─── Apple Cash card face ──────────────────────────────────────────────────────
function CardFace() {
  return (
    <div
      className="w-full h-[210px] relative flex-shrink-0 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #1c1c1e 0%, #2c2c2e 45%, #48484a 75%, #636366 100%)" }}
    >
      {/* Glare orbs */}
      <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/[0.04]" />
      <div className="absolute top-1/2 -left-20 w-52 h-52 rounded-full bg-white/[0.02]" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: Apple logo + Cash wordmark */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white flex-shrink-0">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span className="text-white text-[19px] font-semibold tracking-tight">Cash</span>
        </div>

        {/* Middle: name */}
        <div>
          <p className="text-white/40 text-[9px] tracking-[0.28em] uppercase font-semibold mb-1">
            Portfolio
          </p>
          <p className="text-white text-[28px] font-bold tracking-tight leading-none">
            Radhey Patel
          </p>
        </div>

        {/* Bottom: stats row */}
        <div className="flex items-center gap-5">
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-0.5">Age</p>
            <p className="text-white text-sm font-semibold">21</p>
          </div>
          <div className="w-px h-6 bg-white/15 flex-shrink-0" />
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-0.5">Edu</p>
            <p className="text-white text-sm font-semibold">York Univ.</p>
          </div>
          <div className="w-px h-6 bg-white/15 flex-shrink-0" />
          <div>
            <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-0.5">Loc</p>
            <p className="text-white text-sm font-semibold">Toronto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Action Button ─────────────────────────────────────────────────────────────
function ActionButton({
  href,
  icon: Icon,
  title,
  sub,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex-1 flex flex-col items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.13] active:scale-95 transition-all rounded-2xl py-5 px-3"
    >
      <Icon className="text-white" size={26} strokeWidth={1.6} />
      <div className="flex flex-col items-center">
        <span className="text-white text-sm font-semibold leading-tight">{title}</span>
        <span className="text-white/50 text-xs leading-tight">{sub}</span>
      </div>
    </a>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AboutCard() {
  return (
    <div className="w-full h-full flex flex-col bg-[#1c1c1e] overflow-hidden">
      <CardFace />

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="relative flex items-center px-3 py-4 h-0 mt-6">
        <div className="absolute -left-3 w-6 h-6 rounded-full bg-white/10 z-10" />
        <div className="absolute -right-3 w-6 h-6 rounded-full bg-white/10 z-10" />
        <div className="w-full border-t border-dashed border-white/10" />
      </div>

      {/* ── Role label ───────────────────────────────────────────── */}
      <div className="px-6 pt-6 pb-2">
        <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
          Software Engineer
        </p>
      </div>

      <div className="flex-1" />

      {/* ── Action Buttons ───────────────────────────────────────── */}
      <div className="flex gap-3 px-6 pb-8">
        <ActionButton href="/resume.pdf"                    icon={FileText} title="Resume"  sub="View PDF"  />
        <ActionButton href="mailto:radheypatel@example.com" icon={Mail}     title="Contact" sub="Email Me" />
      </div>
    </div>
  );
}

"use client";

import { FileText, Mail } from "lucide-react";

// ─── Ticket Divider ────────────────────────────────────────────────────────────
function TicketDivider() {
  return (
    <div className="relative flex items-center px-0 py-0 h-0">
      {/* Left notch */}
      <div className="absolute -left-3 w-6 h-6 rounded-full bg-black z-10" />
      {/* Right notch */}
      <div className="absolute -right-3 w-6 h-6 rounded-full bg-black z-10" />
      {/* Dashed tear line */}
      <div className="w-full border-t-2 border-dashed border-zinc-700" />
    </div>
  );
}

// ─── Stat Column ──────────────────────────────────────────────────────────────
function StatCol({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <span className="text-zinc-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
        {label}
      </span>
      <span className="text-white text-xl font-bold tracking-tight">{value}</span>
    </div>
  );
}

// ─── Action Button ────────────────────────────────────────────────────────────
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
      className="flex-1 flex flex-col items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-all rounded-2xl py-5 px-3"
    >
      <Icon className="text-white" size={26} strokeWidth={1.6} />
      <div className="flex flex-col items-center">
        <span className="text-white text-sm font-semibold leading-tight">{title}</span>
        <span className="text-zinc-400 text-xs leading-tight">{sub}</span>
      </div>
    </a>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AboutCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      {/* ── Hero / Image Section ──────────────────────────────────── */}
      <div className="relative flex-shrink-0 h-[210px] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
        {/*
          Drop your own photo here:
          <Image src="/profile.jpg" alt="Radhey Patel" fill className="object-cover opacity-40" />
        */}

        {/* Subtle grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient fade to ticket body */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/60" />

        {/* Name + title — bottom-left of the hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-12">
          <p className="text-blue-300 text-[11px] font-bold tracking-[0.3em] uppercase mb-1">
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-white text-4xl font-black tracking-tight leading-none">
            RADHEY PATEL
          </h1>
        </div>
      </div>

      {/* ── Ticket Divider ────────────────────────────────────────── */}
      <div className="px-3 py-4">
        <TicketDivider />
      </div>

      {/* ── Ticket Stat Row ───────────────────────────────────────── */}
      <div className="flex items-center px-6 py-2">
        <StatCol label="Age" value="21" />
        <div className="w-px h-10 bg-zinc-700 flex-shrink-0" />
        <StatCol label="Edu" value="York Univ." />
        <div className="w-px h-10 bg-zinc-700 flex-shrink-0" />
        <StatCol label="Loc" value="Toronto" />
      </div>

      {/* ── Spacer ────────────────────────────────────────────────── */}
      <div className="flex-1" />

      {/* ── Action Buttons ────────────────────────────────────────── */}
      <div className="flex gap-3 px-6 pb-8">
        <ActionButton
          href="/resume.pdf"
          icon={FileText}
          title="Resume"
          sub="View PDF"
        />
        <ActionButton
          href="mailto:radheypatel@example.com"
          icon={Mail}
          title="Contact"
          sub="Email Me"
        />
      </div>
    </div>
  );
}

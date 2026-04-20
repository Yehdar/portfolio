"use client";

import { FileText, Mail } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.about;

function TorontoLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/toronto.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 25%" }}
    />
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
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      {/* Image section — same fixed height as other cards */}
      <div className={`w-full relative overflow-hidden ${(desktop || onRowClick) ? "h-[300px] flex-shrink-0" : "flex-1"}`}>
        <TorontoLandscape />
        {desktop && <div className="absolute inset-0 bg-black/50" />}
        <div className="absolute inset-0 flex flex-col p-4">
          <div className="flex items-start justify-between">
            <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
              {theme.category}
            </p>
            <div
              className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#7dd3fc" }}
            >
              1
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons below image */}
      {(desktop || onRowClick) && (
        <div className={`flex gap-3 p-4 ${desktop ? "px-5 pt-6" : ""}`}>
          <ActionButton href="/resume.pdf"                    icon={FileText} title="Resume"  sub="View PDF"  id="resume"  onRowClick={onRowClick} />
          <ActionButton href="mailto:radheypatel@example.com" icon={Mail}     title="Contact" sub="Email Me" id="contact" onRowClick={onRowClick} />
        </div>
      )}
    </div>
  );
}

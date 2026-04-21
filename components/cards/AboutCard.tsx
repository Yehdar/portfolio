"use client";

import { FileText, Mail } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.about;

function TorontoLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/cards/toronto.png"
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
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.35)"; }}
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
      <div
        className={`w-full relative overflow-hidden ${(desktop || onRowClick) ? "flex-shrink-0" : "flex-1"}`}
        style={(desktop || onRowClick) ? { height: desktop ? "clamp(160px, 30dvh, 300px)" : "300px" } : undefined}
      >
        <TorontoLandscape />
        {desktop && <div className="absolute inset-0 bg-black/50" />}
        <div className="absolute inset-0 flex flex-col p-4">
          <div className="flex items-start justify-between">
            <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
              {theme.category}
            </p>
            <div
              className="px-2 rounded text-[10px] font-bold tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#7dd3fc" }}
            >
              1
            </div>
          </div>
        </div>
      </div>

      {/* Bio text + action buttons */}
      {(desktop || onRowClick) && (
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className={`flex-1 overflow-y-auto card-scrollbar px-5 ${desktop ? "pt-6" : "pt-4"} pb-2`}>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Who I Am</p>
            <p className={`leading-relaxed ${desktop ? "text-2xl" : "text-lg"}`} style={{ color: "rgba(255,255,255,0.85)" }}>
              Hey, I'm Radhey (aka Rod)!
              <br></br>
              Fintech enthusiast, software engineer, and lifelong learner.
              <br></br><br></br>
              Currently, I'm interning as a software engineer at Citibank, leading the data engineering pipelines for consumer banking.
              <br></br><br></br>
              Before that, I was fortunate enough to stay in the finance and technology world by interning as an engineer at Manulife and Royal Bank of Canada.
              <br></br><br></br>
              Outside of work, you can find me building cool projects, learning new skills, and exploring the world with my loved ones.
              <br></br><br></br>
              Anyway, feel free to explore the rest of the site and reach out if you want to connect!
            </p>
          </div>
          {/* DONT DELETE THIS */}
          {/* <div className={`flex gap-3 p-4 shrink-0 ${desktop ? "px-5 pb-6" : ""}`}>
            <ActionButton href="/resume.pdf"                    icon={FileText} title="Resume"  sub="View PDF"  id="resume"  onRowClick={onRowClick} />
            <ActionButton href="mailto:radheypatel@example.com" icon={Mail}     title="Contact" sub="Email Me" id="contact" onRowClick={onRowClick} />
          </div> */}
        </div>
      )}
    </div>
  );
}

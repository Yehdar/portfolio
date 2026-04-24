"use client";

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

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AboutCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
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

      {(desktop || onRowClick) && (
        <div className="flex flex-col flex-1 overflow-hidden ">
          <div
            className={`flex-1 overflow-y-auto card-scrollbar px-5 ${desktop ? "pt-6" : "pt-4"} pb-2`}
            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)" }}
          >
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "rgb(255, 255, 255)" }}>Who I Am</p>
            <div
              className={`space-y-4 leading-relaxed font-serif mb-8 ${desktop ? "text-xl" : "text-base"}`}
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              <p>Hey, I'm Radhey, but most people call me <em>Rod</em>.</p>
              <p>I'm a software engineer obsessed with the intersection of <em>finance and technology</em> — currently building data pipelines at Citi for consumer banking.</p>
              <p>Before that, I managed infrastructure at Manulife, rebuilt internal tools at RBC, and ingested threat intelligence data for Canada's cyber security agency.</p>
              <p>Outside of work, I'm usually staying active, building new projects, and spending time with the people who matter most.</p>
              <p>Glad you stopped by. Feel free to look around and reach out!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

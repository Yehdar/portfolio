"use client";

import { useEffect, useRef, useState } from "react";
import WalletCard, { CardDef } from "./WalletCard";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";

// ─── Placeholder card faces ────────────────────────────────────────────────────

function DiscoverFace() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#4a1010] to-[#8b2020] relative overflow-hidden flex flex-col justify-between p-5">
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-orange-500/15" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-red-900/40" />
      <div className="flex items-start justify-between">
        <span className="text-white text-xl font-black tracking-[0.12em]">DISCOVER</span>
        <span className="text-white/50 text-xs font-bold tracking-widest uppercase mt-1">it</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-white/40 text-[11px] tracking-[0.2em] font-mono">•••• •••• •••• 2024</span>
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-red-500/80" />
          <div className="w-7 h-7 rounded-full bg-orange-400/80" />
        </div>
      </div>
    </div>
  );
}

function VisaFace() {
  return (
    <div className="w-full h-full bg-[#1a6b3a] relative overflow-hidden flex flex-col justify-between p-5">
      <div className="absolute -bottom-14 -right-14 w-52 h-52 rounded-full bg-white/5" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-white/[0.03]" />
      <span className="text-white/60 text-[10px] tracking-widest uppercase font-semibold">
        Radhey Patel
      </span>
      <span className="text-white text-3xl font-black italic tracking-tight self-end">VISA</span>
    </div>
  );
}

function AppleCardFace() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#e8d5f0] via-[#f5b8c4] to-[#fde8d0] relative overflow-hidden flex flex-col items-center justify-center gap-2">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/5" />
      {/* Apple logo */}
      <svg viewBox="0 0 24 24" className="relative w-12 h-12 fill-white/75">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <span className="relative text-white/70 text-sm font-semibold tracking-wide">Apple Card</span>
    </div>
  );
}

// ─── Card definitions (back → front) ──────────────────────────────────────────

const CARDS: CardDef[] = [
  { id: "discover",    label: "Discover",   placeholder: true },  // index 0 — back
  { id: "visa",        label: "Visa",       placeholder: true },  // index 1
  { id: "apple-card",  label: "Apple Card", placeholder: true },  // index 2
  { id: "connections", label: "Links"                         },  // index 3 — Amex World
  { id: "projects",    label: "Projects"                      },  // index 4 — Freedom
  { id: "experience",  label: "Experience"                    },  // index 5 — SoFi
  { id: "about",       label: "About Me"                      },  // index 6 — front, Apple Cash
];

// ─── Stack layout constants ────────────────────────────────────────────────────

/** Pixels each card peeks below the one above it. */
const PEEK = 54;

/** Distance (px) from container top to the frontmost card — status bar (44px) + nav bar (66px). */
const STACK_TOP = 110;

/** Gap between the last card peek and the container bottom. */
const BOTTOM_MARGIN = 24;

// ──────────────────────────────────────────────────────────────────────────────

export default function WalletStack() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(800);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerHeight(el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /**
   * Derived so every peek fits on screen:
   *   STACK_TOP + cardHeight + (N-1)*PEEK + BOTTOM_MARGIN = containerHeight
   *   → cardHeight = containerHeight - STACK_TOP - (N-1)*PEEK - BOTTOM_MARGIN
   */
  const cardHeight = Math.max(
    260,
    Math.floor(containerHeight - STACK_TOP - (CARDS.length - 1) * PEEK - BOTTOM_MARGIN)
  );

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-white">
      {/* ── Header (temporary — replaced in Phase 3) ───────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[110px] flex items-end px-6 pb-3 z-10 pointer-events-none">
        <span
          className="text-black text-[34px] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Portfolio
        </span>
      </div>

      {/* ── Backdrop (tap outside expanded card to close) ──────────── */}
      {expandedId && (
        <div className="absolute inset-0 z-40" onClick={() => setExpandedId(null)} />
      )}

      {/* ── Cards ──────────────────────────────────────────────────── */}
      {CARDS.map((card, index) => {
        const stackedY = STACK_TOP + index * PEEK;
        const zIndex   = index + 1; // Discover=1 (back) → About=7 (front)

        return (
          <WalletCard
            key={card.id}
            card={card}
            stackedY={stackedY}
            cardHeight={cardHeight}
            containerHeight={containerHeight}
            zIndex={zIndex}
            isExpanded={expandedId === card.id}
            hasAnyExpanded={expandedId !== null}
            onClick={() => setExpandedId(card.id)}
            onClose={() => setExpandedId(null)}
          >
            {card.id === "discover"    && <DiscoverFace />}
            {card.id === "visa"        && <VisaFace />}
            {card.id === "apple-card"  && <AppleCardFace />}
            {card.id === "connections" && <ConnectionsCard />}
            {card.id === "projects"    && <ProjectsCard />}
            {card.id === "experience"  && <ExperienceCard />}
            {card.id === "about"       && <AboutCard />}
          </WalletCard>
        );
      })}
    </div>
  );
}

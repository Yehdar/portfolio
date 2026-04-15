"use client";

import { useEffect, useRef, useState } from "react";
import WalletCard, { CardDef } from "./WalletCard";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";

const CARDS: CardDef[] = [
  { id: "connections", label: "Links",        gradient: "from-orange-700 to-red-800"    },
  { id: "projects",    label: "Projects",     gradient: "from-violet-900 to-emerald-950" },
  { id: "experience",  label: "Career",       gradient: "from-blue-800 to-blue-950"     },
  { id: "about",       label: "Introduction", gradient: "from-slate-900 to-indigo-950"  },
];

// ─── Stack layout constants ────────────────────────────────────────────────────

/** Pixels each card peeks below the one above it. */
const PEEK = 54;

/** Distance (px) from container top to the top of the frontmost card. */
const STACK_TOP = 68;

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
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-[#0a0f1e]">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[68px] flex items-center px-6 z-10 pointer-events-none">
        <span className="text-white text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans)" }}>
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
        const zIndex   = index + 1; // Links=1 (back/top-tab) → Introduction=4 (front)

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
            {card.id === "about"       && <AboutCard />}
            {card.id === "experience"  && <ExperienceCard />}
            {card.id === "projects"    && <ProjectsCard />}
            {card.id === "connections" && <ConnectionsCard />}
          </WalletCard>
        );
      })}
    </div>
  );
}

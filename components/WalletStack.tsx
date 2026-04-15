"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WalletCard, { CardDef } from "./WalletCard";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";

// ─── Card definitions (back → front) ──────────────────────────────────────────

const CARDS: CardDef[] = [
  { id: "connections", label: "Links"       },  // index 0 — Amex World
  { id: "projects",    label: "Projects"    },  // index 1 — Freedom
  { id: "experience",  label: "Experience"  },  // index 2 — SoFi
  { id: "about",       label: "About Me"    },  // index 3 — front, Apple Cash
];

// ─── Stack layout constants ────────────────────────────────────────────────────

/** Pixels each card peeks below the one above it. */
const PEEK = 54;

/** Distance (px) from container top to the frontmost card — nav bar only (66px). */
const STACK_TOP = 66;

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
      {/* ── Nav Bar ────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[66px] flex items-center justify-between px-5 z-10">
        {/* "Wallet" large title */}
        <span
          className="text-black text-[34px] font-bold tracking-tight leading-none"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Welcome!
        </span>
        {/* "+" circular button */}
        <button className="w-9 h-9 rounded-full bg-[#e5e5ea] flex items-center justify-center active:bg-[#d1d1d6] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
      </div>

      {/* ── Backdrop (tap outside expanded card to close) ──────────── */}
      <AnimatePresence>
        {expandedId && (
          <motion.div
            className="absolute inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>

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

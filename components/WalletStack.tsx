"use client";

import { useEffect, useRef, useState } from "react";
import WalletCard, { CardDef } from "./WalletCard";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";

const CARDS: CardDef[] = [
  { id: "about",       label: "About Me",    gradient: "from-slate-900 to-indigo-950"   },
  { id: "experience",  label: "Experience",  gradient: "from-blue-900 to-slate-900"     },
  { id: "projects",    label: "Projects",    gradient: "from-purple-950 to-emerald-950"  },
  { id: "connections", label: "Connections", gradient: "from-orange-400 to-rose-500"    },
];

// ─── Stack layout constants ────────────────────────────────────────────────────
/**
 * How many pixels of each underlying card peek below the card above it.
 * Smaller = tighter stack; larger = more card-fan effect.
 */
const PEEK = 58;

/**
 * Distance (px) from the container top to the top of the frontmost card.
 * This creates space for the "Portfolio" header.
 */
const STACK_TOP = 68;

/**
 * The card height as a fraction of the container height.
 * Chosen so the bottommost peek sits a comfortable margin from the screen bottom.
 */
const CARD_HEIGHT_RATIO = 0.82;

// ──────────────────────────────────────────────────────────────────────────────

export default function WalletStack() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Measure the container so we can compute pixel positions for framer-motion
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

  const cardHeight = Math.floor(containerHeight * CARD_HEIGHT_RATIO);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black"
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[68px] flex items-center px-6 z-10 pointer-events-none">
        <span
          className="text-white text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Portfolio
        </span>
      </div>

      {/* ── Backdrop (tap outside to close) ────────────────────────── */}
      {expandedId && (
        <div
          className="absolute inset-0 z-40"
          onClick={() => setExpandedId(null)}
        />
      )}

      {/* ── Cards ──────────────────────────────────────────────────── */}
      {CARDS.map((card, index) => {
        /**
         * Stack position maths
         * ─────────────────────
         * Card 0 (top/front, highest z-index) sits at y = STACK_TOP.
         * Each subsequent card is PEEK px lower, so only PEEK px of it
         * are visible below the card above — identical to Apple Wallet.
         *
         * z-index is inverted: card 0 = highest, card N-1 = lowest,
         * so each card properly covers the ones "behind" it.
         */
        const stackedY = STACK_TOP + index * PEEK;
        const zIndex = CARDS.length - index;          // 4, 3, 2, 1

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
            {card.id === "about" && <AboutCard />}
            {card.id === "experience" && <ExperienceCard />}
            {card.id === "projects" && <ProjectsCard />}
          </WalletCard>
        );
      })}
    </div>
  );
}

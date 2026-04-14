"use client";

import { motion } from "framer-motion";

export interface CardDef {
  id: string;
  label: string;
  gradient: string;
}

interface WalletCardProps {
  card: CardDef;
  /** CSS top value (px) when the card is sitting in the stack */
  stackedY: number;
  /** Height (px) when the card is in the stack */
  cardHeight: number;
  /** Full container height (px) — used for the expanded state */
  containerHeight: number;
  /** CSS z-index when not expanded */
  zIndex: number;
  isExpanded: boolean;
  hasAnyExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
  children?: React.ReactNode;
}

const SPRING = { type: "spring", damping: 32, stiffness: 280 } as const;

export default function WalletCard({
  card,
  stackedY,
  cardHeight,
  containerHeight,
  zIndex,
  isExpanded,
  hasAnyExpanded,
  onClick,
  onClose,
  children,
}: WalletCardProps) {
  /**
   * Animate `top` + `height` as CSS layout properties (not transforms).
   * This is reliable in framer-motion v12 where animating `y` (a transform)
   * alongside `height` in a single `animate` object is broken.
   *
   * Three states:
   *  expanded  – fills the full container (top:0, height:100%)
   *  hidden    – another card is expanded; slide below the fold
   *  stacked   – normal wallet pile position
   */
  const animate = isExpanded
    ? { top: 0,                   height: containerHeight }
    : hasAnyExpanded
    ? { top: containerHeight + 40, height: cardHeight }
    : { top: stackedY,            height: cardHeight };

  return (
    <motion.div
      // No `top-*` Tailwind class here — framer-motion owns `top` via animate
      className="absolute left-0 right-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20"
      style={{
        zIndex: isExpanded ? 50 : zIndex,
        cursor: isExpanded ? "default" : "pointer",
      }}
      // initial={false} → snap to position on mount, no fly-in animation
      initial={false}
      animate={animate}
      transition={SPRING}
      onClick={!isExpanded ? onClick : undefined}
    >
      {/* ── Scrollable card body ──────────────────────────────────── */}
      <div
        className={`w-full h-full hide-scrollbar ${
          isExpanded ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        {children ?? (
          <div
            className={`w-full h-full bg-gradient-to-br ${card.gradient} flex items-start p-6`}
          >
            <span className="text-white/90 text-2xl font-bold tracking-tight">
              {card.label}
            </span>
          </div>
        )}
      </div>

      {/* ── Done button — pinned, never scrolls ──────────────────── */}
      {isExpanded && (
        <button
          className="absolute top-5 right-5 z-20 bg-black/30 backdrop-blur-md text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-black/50 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Done
        </button>
      )}
    </motion.div>
  );
}

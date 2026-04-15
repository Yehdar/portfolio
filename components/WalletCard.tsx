"use client";

import { motion } from "framer-motion";

export interface CardDef {
  id: string;
  label: string;
  placeholder?: boolean;
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

const SPRING = { type: "spring", damping: 30, stiffness: 300 } as const;

/** Border radius in px: rounded when stacked, flush when filling the screen. */
const R_STACKED  = 24;
const R_EXPANDED = 0;

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
   * Three states:
   *  expanded  – fills the full container (top:0, height:containerHeight)
   *  hidden    – another card is expanded; slide below the fold
   *  stacked   – normal wallet pile position
   */
  const animate = isExpanded
    ? { top: 0,                    height: containerHeight, borderRadius: R_EXPANDED }
    : hasAnyExpanded
    ? { top: containerHeight + 40, height: cardHeight,      borderRadius: R_STACKED  }
    : { top: stackedY,             height: cardHeight,      borderRadius: R_STACKED  };

  return (
    <motion.div
      className="absolute left-0 right-0 overflow-hidden shadow-xl shadow-black/15 ring-1 ring-black/8"
      style={{
        zIndex: isExpanded ? 50 : zIndex,
        cursor: isExpanded || card.placeholder ? "default" : "pointer",
      }}
      initial={false}
      animate={animate}
      transition={SPRING}
      // All non-expanded cards get a subtle lift; only non-placeholders expand on click
      whileHover={!isExpanded ? { scale: 1.012 } : undefined}
      whileTap={!isExpanded ? { scale: 0.98 } : undefined}
      onClick={!isExpanded && !card.placeholder ? onClick : undefined}
    >
      {/* ── Scrollable card body ──────────────────────────────────── */}
      <div
        className={`w-full h-full hide-scrollbar ${
          isExpanded ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        {children ?? (
          <div className="w-full h-full bg-zinc-800 flex items-start p-6">
            <span className="text-white/90 text-2xl font-bold tracking-tight">
              {card.label}
            </span>
          </div>
        )}
      </div>

      {/* ── Done button — pinned, never scrolls ──────────────────── */}
      {isExpanded && (
        <button
          className="absolute top-5 right-5 z-20 bg-white text-[#007aff] text-[15px] font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-white/90 transition-colors"
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

"use client";

import { motion } from "framer-motion";

export interface CardDef {
  id: string;
  label: string;
  /** Tailwind gradient classes used for the placeholder and stack-peek colour */
  gradient: string;
}

interface WalletCardProps {
  card: CardDef;
  /** Y position (px from container top) when the card is in the stack */
  stackedY: number;
  /** Height (px) when the card is in the stack */
  cardHeight: number;
  /** Full container height (px) — used for expanded state */
  containerHeight: number;
  /** CSS z-index when not expanded */
  zIndex: number;
  isExpanded: boolean;
  /** True when ANY card (not this one) is expanded */
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
  const animate = isExpanded
    ? { y: 0, height: containerHeight }
    : hasAnyExpanded
    ? { y: containerHeight, height: cardHeight }
    : { y: stackedY, height: cardHeight };

  return (
    <motion.div
      // `absolute` makes this a positioning context for the Done button
      className="absolute left-0 right-0 top-0 rounded-3xl overflow-hidden shadow-2xl"
      style={{ zIndex: isExpanded ? 50 : zIndex, cursor: isExpanded ? "default" : "pointer" }}
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
          /* Phase-1 / fallback gradient placeholder */
          <div
            className={`w-full h-full bg-gradient-to-br ${card.gradient} flex items-start p-6`}
          >
            <span className="text-white/90 text-2xl font-bold tracking-tight">
              {card.label}
            </span>
          </div>
        )}
      </div>

      {/* ── Done button — pinned top-right, never scrolls away ───── */}
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

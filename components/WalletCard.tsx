"use client";

import { motion } from "framer-motion";

export interface CardDef {
  id: string;
  label: string;
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
  /**
   * Three animation states:
   *  expanded  – card fills the full container
   *  hidden    – another card is expanded; slide off-screen below
   *  stacked   – default wallet pile position
   */
  const animate = isExpanded
    ? { y: 0, height: containerHeight }
    : hasAnyExpanded
    ? { y: containerHeight, height: cardHeight }
    : { y: stackedY, height: cardHeight };

  return (
    <motion.div
      className="absolute left-0 right-0 top-0 rounded-3xl overflow-hidden shadow-2xl"
      style={{ zIndex: isExpanded ? 50 : zIndex, cursor: isExpanded ? "default" : "pointer" }}
      animate={animate}
      transition={SPRING}
      onClick={!isExpanded ? onClick : undefined}
    >
      <div className={`w-full h-full bg-gradient-to-br ${card.gradient} flex flex-col`}>
        {/* Done button — only visible when expanded */}
        {isExpanded && (
          <div className="flex justify-end px-5 pt-5 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="bg-black/30 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-black/50 transition-colors"
            >
              Done
            </button>
          </div>
        )}

        {/* Card content */}
        <div
          className={`flex-1 hide-scrollbar ${
            isExpanded ? "overflow-y-auto" : "overflow-hidden"
          }`}
        >
          {children ?? (
            /* Placeholder shown in Phase 1 */
            <div className="h-full flex items-start p-6">
              <span className="text-white/90 text-2xl font-bold tracking-tight">
                {card.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

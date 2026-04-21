"use client";

import { motion } from "framer-motion";

export interface CardDef {
  id: string;
  label: string;
  placeholder?: boolean;
}

interface WalletCardProps {
  card: CardDef;
  stackedY: number;
  cardHeight: number;
  containerHeight: number;
  zIndex: number;
  isExpanded: boolean;
  hasAnyExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
  children?: React.ReactNode;
}

const TRANSITION = { type: "spring", damping: 30, stiffness: 300 } as const;
const CARD_PAD  = 12;
const CARD_TOP  = 10;
const STACK_PAD = 12;
const R         = 24;

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
    ? { top: CARD_TOP, left: CARD_PAD, right: CARD_PAD, height: containerHeight - CARD_TOP - CARD_PAD, borderRadius: R }
    : hasAnyExpanded
    ? { top: containerHeight + 40, left: STACK_PAD, right: STACK_PAD, height: cardHeight, borderRadius: R }
    : { top: stackedY, left: STACK_PAD, right: STACK_PAD, height: cardHeight, borderRadius: R };

  return (
    <motion.div
      className="absolute overflow-hidden shadow-xl shadow-black/15 ring-1 ring-black/8"
      style={{
        zIndex: isExpanded ? 50 : zIndex,
        cursor: isExpanded || card.placeholder ? "default" : "pointer",
      }}
      initial={false}
      animate={animate}
      transition={TRANSITION}
      whileHover={!isExpanded ? { scale: 1.012 } : undefined}
      whileTap={!isExpanded ? { scale: 0.98 } : undefined}
      onClick={!isExpanded && !card.placeholder ? onClick : undefined}
    >
      <div className={`w-full h-full hide-scrollbar ${isExpanded ? "overflow-y-auto" : "overflow-hidden"}`}>
        {children ?? (
          <div className="w-full h-full bg-zinc-800 flex items-start p-6">
            <span className="text-white/90 text-2xl font-bold tracking-tight">{card.label}</span>
          </div>
        )}
      </div>

      {isExpanded && (
        <button
          className="absolute top-5 right-5 z-20 bg-white text-[#007aff] text-[15px] font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-white/90 transition-colors"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          Done
        </button>
      )}
    </motion.div>
  );
}

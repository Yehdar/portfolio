"use client";

import { useEffect } from "react";
import { MotionValue, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  /** Motion value driving extra spacing between stacked cards */
  peekMv?: MotionValue<number>;
  cardIndex?: number;
}

const TRANSITION  = { type: "tween", duration: 0.28, ease: [0.32, 0.72, 0, 1] } as const;
const SNAP_BACK   = { type: "spring", stiffness: 420, damping: 32 } as const;
const CARD_PAD    = 12;
const CARD_TOP    = 10;
const STACK_PAD   = 12;
const R           = 24;
const DISMISS_PX  = 90;

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
  peekMv,
  cardIndex = 0,
}: WalletCardProps) {
  const pullY = useMotionValue(0);

  // Fallback so useTransform is always called unconditionally
  const fallbackPeek = useMotionValue(0);
  const dynamicTop = useTransform(
    peekMv ?? fallbackPeek,
    (extra) => stackedY + cardIndex * extra,
  );

  useEffect(() => {
    if (!isExpanded) pullY.set(0);
  }, [isExpanded, pullY]);

  // When stacked, omit top from animate — let style/dynamicTop control it.
  // When expanded or hidden, animate.top takes over and overrides style.
  const animateTarget = isExpanded
    ? { top: CARD_TOP,            left: CARD_PAD,  right: CARD_PAD,  height: containerHeight - CARD_TOP - CARD_PAD, borderRadius: R }
    : hasAnyExpanded
    ? { top: containerHeight + 40, left: STACK_PAD, right: STACK_PAD, height: cardHeight, borderRadius: R }
    : {                            left: STACK_PAD, right: STACK_PAD, height: cardHeight, borderRadius: R };

  return (
    <motion.div
      className="absolute overflow-hidden shadow-xl shadow-black/15 ring-1 ring-black/8"
      style={{
        zIndex: isExpanded ? 50 : zIndex,
        cursor: isExpanded || card.placeholder ? "default" : "pointer",
        y: pullY,
        top: dynamicTop,
      }}
      initial={false}
      animate={animateTarget}
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
        <motion.div
          className="absolute top-0 inset-x-0 h-[300px] z-30 flex flex-col items-center justify-start pt-2 gap-0.5 touch-none select-none"
          onPan={(_, info) => {
            pullY.set(Math.max(0, info.offset.y * 0.45));
          }}
          onPanEnd={(_, info) => {
            if (info.offset.y > DISMISS_PX) {
              onClose();
            } else {
              animate(pullY, 0, SNAP_BACK);
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="text-white/40" strokeWidth={2.5} />
          </motion.div>
          <p className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">drag down</p>
        </motion.div>
      )}
    </motion.div>
  );
}

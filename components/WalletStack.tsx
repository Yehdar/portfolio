"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useMotionValue } from "framer-motion";
import WalletCard from "./WalletCard";
import DesktopLayout from "./DesktopLayout";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { ID_THEMES } from "./idThemes";
import { CARDS, CardComp } from "./cardDefs";

const CARD_MAP: Record<string, CardComp> = {
  connections: ConnectionsCard,
  projects:    ProjectsCard,
  experience:  ExperienceCard,
  about:       AboutCard,
};

const PEEK          = 72;
const NAV_HEIGHT    = 100;
const BOTTOM_MARGIN = 24;

export default function WalletStack() {
  const [activeCard, setActiveCard] = useState<string>("about");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const cb = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  if (isDesktop === null) return null;
  if (isDesktop) {
    return (
      <DesktopLayout
        activeCard={activeCard}
        onCardSelect={setActiveCard}
      />
    );
  }

  return <MobileStack selectedId={selectedId} setSelectedId={setSelectedId} />;
}

function MobileStack({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(800);

  const activeCard = selectedId ?? "about";
  const theme      = ID_THEMES[activeCard] ?? ID_THEMES.about;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerHeight(el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const availableHeight  = containerHeight - NAV_HEIGHT - BOTTOM_MARGIN;
  const cardHeight       = Math.min(360, Math.max(220, Math.floor((availableHeight - (CARDS.length - 1) * PEEK) * 0.85)));
  const totalStackHeight = (CARDS.length - 1) * PEEK + cardHeight;
  const stackTop         = NAV_HEIGHT + Math.max(0, Math.floor((availableHeight - totalStackHeight) / 2));

  const peekMv    = useMotionValue(0);
  const SNAP_BACK = { type: "spring", stiffness: 420, damping: 32 } as const;

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black"
      onPan={selectedId === null ? (_, info) => {
        peekMv.set(Math.max(-12, Math.min(48, info.offset.y * 0.12)));
      } : undefined}
      onPanEnd={selectedId === null ? () => {
        animate(peekMv, 0, SNAP_BACK);
      } : undefined}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={activeCard + "-mobilebg"}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{ background: theme.dominantBg }}
        />
      </AnimatePresence>

      <div className="absolute top-0 left-0 right-0 h-[90px] pt-14 flex items-center px-5 z-10"
        style={{ fontFamily: "var(--font-geist-sans)" }}>
        <div>
          <p className="text-white text-[36px] font-bold tracking-tight leading-tight">Welcome!</p>
          <p className="text-white/60 text-[15px] font-medium leading-tight">Press a card to learn more about me</p>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      {CARDS.map((card, index) => {
        const CardContent = CARD_MAP[card.id];
        const isExpanded  = selectedId === card.id;
        return (
          <WalletCard
            key={card.id}
            card={card}
            stackedY={stackTop + index * PEEK}
            cardHeight={cardHeight}
            containerHeight={containerHeight}
            zIndex={index + 1}
            isExpanded={isExpanded}
            hasAnyExpanded={selectedId !== null}
            onClick={() => setSelectedId(card.id)}
            onClose={() => setSelectedId(null)}
            peekMv={peekMv}
            cardIndex={index}
          >
            {CardContent && <CardContent expanded={isExpanded} />}
          </WalletCard>
        );
      })}
    </motion.div>
  );
}

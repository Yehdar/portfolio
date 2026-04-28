"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

// ─── Stack geometry ────────────────────────────────────────────────────────────

const PEEK       = 90;
const FRONT_SHOW = 64;
const FACE_H     = 270;
const stackH     = (CARDS.length - 1) * PEEK + FRONT_SHOW + FACE_H;

// ─── Left column: NavCard ──────────────────────────────────────────────────────

function NavCard({
  id,
  index,
  activeIndex,
  onClick,
}: {
  id: string;
  index: number;
  activeIndex: number;
  onClick: () => void;
}) {
  const isActive = index === activeIndex;
  const [hovered, setHovered] = useState(false);

  const targetTop = isActive
    ? (CARDS.length - 1) * PEEK
    : index > activeIndex
    ? (index - 1) * PEEK
    : index * PEEK;

  return (
    <motion.button
      className="absolute left-0 right-0 overflow-hidden rounded-2xl cursor-pointer text-left focus:outline-none"
      style={{
        height: FACE_H,
        zIndex: isActive ? CARDS.length + 2 : index + 1,
      }}
      animate={{
        top: targetTop,
        x: !isActive && hovered ? 20 : 0,
        boxShadow: isActive
          ? "0 0 0 3px rgba(255,255,255,0.95), 0 20px 50px rgba(0,0,0,0.6)"
          : "0 2px 8px rgba(0,0,0,0.25)",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onClick}
    >
      <div className="w-full pointer-events-none" style={{ height: FACE_H }}>
        {(() => { const C = CARD_MAP[id]; return C ? <C /> : null; })()}
      </div>
    </motion.button>
  );
}

// ─── Desktop layout ───────────────────────────────────────────────────────────

interface DesktopLayoutProps {
  activeCard: string;
  onCardSelect: (id: string) => void;
}

export default function DesktopLayout({ activeCard, onCardSelect }: DesktopLayoutProps) {
  const theme = ID_THEMES[activeCard] ?? ID_THEMES.about;

  const stackAreaRef = useRef<HTMLDivElement>(null);
  const [stackScale, setStackScale] = useState(1);
  useEffect(() => {
    const el = stackAreaRef.current;
    if (!el) return;
    const update = () => setStackScale(Math.min(1, (el.clientHeight - 24) / stackH));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const activeIndex = CARDS.findIndex(c => c.id === activeCard);

  return (
    <div className="w-full h-dvh relative overflow-hidden bg-black">

      <motion.div
        key={activeCard + "-bg"}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ background: theme.dominantBg }}
      />

      <div className="relative z-10 w-full h-full grid overflow-hidden" style={{ gridTemplateColumns: "480px 1fr" }}>

        <div className="border-r flex flex-col overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="h-[90px] flex items-end px-12 pb-4 pt-24 flex-shrink-0">
            <div style={{ fontFamily: "var(--font-geist-sans)" }}>
              <p className="text-white text-[36px] font-bold tracking-tight leading-tight">Welcome!</p>
              <p className="text-white/60 text-[15px] font-medium leading-tight">Press a card to learn more about me</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-10 pb-6" ref={stackAreaRef}>
            <div className="relative w-full" style={{ height: stackH, transform: `scale(${stackScale})`, transformOrigin: "center center" }}>
              {CARDS.map((card, index) => (
                <NavCard
                  key={card.id}
                  id={card.id}
                  index={index}
                  activeIndex={activeIndex}
                  onClick={() => onCardSelect(card.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden p-4">
          <div className="flex-1 relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ type: "spring", damping: 22, stiffness: 300 }}
                className="absolute inset-0 overflow-hidden"
              >
                {(() => { const C = CARD_MAP[activeCard]; return C ? <C desktop /> : null; })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}

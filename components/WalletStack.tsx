"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WalletCard, { CardDef } from "./WalletCard";
import DesktopLayout from "./DesktopLayout";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";

// ─── Card definitions (back → front) ──────────────────────────────────────────

export const CARDS: CardDef[] = [
  { id: "connections", label: "Links"      },  // index 0 — Amex World
  { id: "projects",    label: "Projects"   },  // index 1 — Freedom
  { id: "experience",  label: "Experience" },  // index 2 — SoFi
  { id: "about",       label: "About Me"   },  // index 3 — front, Apple Cash
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
  // Unified selection state — drives expandedId on mobile, active viewport on desktop
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Desktop breakpoint detection (useLayoutEffect → fires before paint to minimise flash)
  const [isDesktop, setIsDesktop] = useState(false);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const cb = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  // ── Desktop layout ──────────────────────────────────────────────────────────
  if (isDesktop) {
    return (
      <DesktopLayout
        selectedId={selectedId ?? "about"}
        onSelect={setSelectedId}
      />
    );
  }

  // ── Mobile layout ───────────────────────────────────────────────────────────
  return <MobileStack selectedId={selectedId} setSelectedId={setSelectedId} />;
}

// ─── Mobile wallet stack ───────────────────────────────────────────────────────

function MobileStack({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}) {
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

  const cardHeight = Math.max(
    260,
    Math.floor(containerHeight - STACK_TOP - (CARDS.length - 1) * PEEK - BOTTOM_MARGIN)
  );

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-white">
      {/* ── Nav Bar ──────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[66px] flex items-center justify-between px-5 z-10">
        <span
          className="text-black text-[34px] font-bold tracking-tight leading-none"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Welcome!
        </span>
        <button className="w-9 h-9 rounded-full bg-[#e5e5ea] flex items-center justify-center active:bg-[#d1d1d6] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
      </div>

      {/* ── Backdrop ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Cards ────────────────────────────────────────────────── */}
      {CARDS.map((card, index) => {
        const stackedY = STACK_TOP + index * PEEK;
        const zIndex   = index + 1;

        return (
          <WalletCard
            key={card.id}
            card={card}
            stackedY={stackedY}
            cardHeight={cardHeight}
            containerHeight={containerHeight}
            zIndex={zIndex}
            isExpanded={selectedId === card.id}
            hasAnyExpanded={selectedId !== null}
            onClick={() => setSelectedId(card.id)}
            onClose={() => setSelectedId(null)}
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

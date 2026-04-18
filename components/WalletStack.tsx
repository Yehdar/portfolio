"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import WalletCard, { CardDef } from "./WalletCard";
import DesktopLayout, { DETAIL_DATA, ItemDetail } from "./DesktopLayout";
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
  // Desktop: activeCard drives the ledger column; selectedItem drives the deep-dive column
  const [activeCard, setActiveCard]     = useState<string>("about");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Mobile: single selection drives card expansion
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const FIRST_ITEM: Record<string, string> = {
    about:       "resume",
    experience:  "Manulife",
    projects:    "Arsenal (Fintech App)",
    connections: "GitHub",
  };

  const handleCardSelect = (id: string) => {
    setActiveCard(id);
    setSelectedItem(FIRST_ITEM[id] ?? null);
  };

  // Desktop breakpoint detection (useLayoutEffect → fires before paint to minimise flash)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const cb = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  // ── Desktop layout ──────────────────────────────────────────────────────────
  if (isDesktop === null) return null;   // wait for breakpoint detection before any render
  if (isDesktop) {
    return (
      <DesktopLayout
        activeCard={activeCard}
        selectedItem={selectedItem}
        onCardSelect={handleCardSelect}
        onItemSelect={setSelectedItem}
      />
    );
  }

  // ── Mobile layout ───────────────────────────────────────────────────────────
  return <MobileStack selectedId={selectedId} setSelectedId={setSelectedId} />;
}

// ─── Mobile wallet stack ───────────────────────────────────────────────────────

function MobileDetailSheet({ item, onClose }: { item: ItemDetail; onClose: () => void }) {
  return (
    <motion.div
      className="absolute inset-x-4 z-60 rounded-3xl overflow-hidden shadow-2xl"
      style={{
        top: "50%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
      }}
      initial={{ opacity: 0, y: "-35%", scale: 0.95 }}
      animate={{ opacity: 1, y: "-50%", scale: 1 }}
      exit={{ opacity: 0, y: "-35%", scale: 0.95 }}
      transition={{ type: "spring", damping: 28, stiffness: 340 }}
    >
      <div className="max-h-[72vh] overflow-y-auto hide-scrollbar px-6 py-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 leading-tight">{item.title}</h2>
            <p className="text-zinc-500 text-sm mt-0.5">{item.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 active:bg-zinc-200 transition-colors"
          >
            <X size={14} className="text-zinc-600" strokeWidth={2} />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {item.tech.map((t) => (
            <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100/80 text-zinc-600">{t}</span>
          ))}
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.status === "Active" ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-500"}`}>
            {item.status}
          </span>
          {item.date && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-500">{item.date}</span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200/60 mb-5" />

        {/* Bullets */}
        <div className="space-y-3 mb-6">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-[7px] flex-shrink-0" />
              <p className="text-zinc-700 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            {item.hrefLabel}
            <ExternalLink size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.div>
  );
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
  const [mobileSelectedItem, setMobileSelectedItem] = useState<string | null>(null);

  const detailItem = DETAIL_DATA.find((d) => d.id === mobileSelectedItem) ?? null;

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

      {/* ── Backdrop: dims cards when any card is expanded ────────── */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => { if (!mobileSelectedItem) setSelectedId(null); }}
          />
        )}
      </AnimatePresence>

      {/* ── Backdrop: blurs expanded card when detail sheet is open ── */}
      <AnimatePresence>
        {mobileSelectedItem && (
          <motion.div
            className="absolute inset-0 z-55 bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileSelectedItem(null)}
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
            {card.id === "connections" && <ConnectionsCard onRowClick={setMobileSelectedItem} />}
            {card.id === "projects"    && <ProjectsCard    onRowClick={setMobileSelectedItem} />}
            {card.id === "experience"  && <ExperienceCard  onRowClick={setMobileSelectedItem} />}
            {card.id === "about"       && <AboutCard       onRowClick={setMobileSelectedItem} />}
          </WalletCard>
        );
      })}

      {/* ── Mobile detail sheet ───────────────────────────────────── */}
      <AnimatePresence>
        {detailItem && (
          <MobileDetailSheet item={detailItem} onClose={() => setMobileSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

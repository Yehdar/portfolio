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
import { ID_THEMES } from "./idThemes";

// ─── Card definitions (back → front) ──────────────────────────────────────────

export const CARDS: CardDef[] = [
  { id: "connections", label: "Links"      },
  { id: "projects",    label: "Projects"   },
  { id: "experience",  label: "Experience" },
  { id: "about",       label: "About Me"   },
];

// ─── Stack layout constants ────────────────────────────────────────────────────

const PEEK         = 72;
const MIN_TOP      = 24;
const BOTTOM_MARGIN = 24;

// ──────────────────────────────────────────────────────────────────────────────

export default function WalletStack() {
  const [activeCard, setActiveCard]     = useState<string>("about");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedId, setSelectedId]     = useState<string | null>(null);

  const handleCardSelect = (id: string) => {
    setActiveCard(id);
    setSelectedItem(null);
  };

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
        selectedItem={selectedItem}
        onCardSelect={handleCardSelect}
        onItemSelect={setSelectedItem}
      />
    );
  }

  return <MobileStack selectedId={selectedId} setSelectedId={setSelectedId} />;
}

// ─── Mobile wallet stack ───────────────────────────────────────────────────────

function MobileDetailSheet({ item, onClose, accentColor }: { item: ItemDetail; onClose: () => void; accentColor: string }) {
  return (
    <motion.div
      className="absolute inset-x-4 z-60 rounded-3xl overflow-hidden shadow-2xl"
      style={{
        top: "50%",
        background: "rgba(15,15,20,0.88)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: `1px solid ${accentColor}33`,
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
            <h2 className="text-xl font-bold text-white leading-tight">{item.title}</h2>
            <p className="text-white/50 text-sm mt-0.5">{item.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-all"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <X size={14} className="text-white" strokeWidth={2} />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
            >
              {t}
            </span>
          ))}
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={item.status === "Active"
              ? { background: accentColor + "33", color: accentColor }
              : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
          >
            {item.status}
          </span>
          {item.date && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
            >
              {item.date}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t mb-5" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bullets */}
        <div className="space-y-3 mb-6">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div
                className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                style={{ background: accentColor }}
              />
              <p className="text-white/70 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all active:scale-95"
            style={{ background: accentColor + "33", border: `1px solid ${accentColor}55` }}
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
  const [containerHeight, setContainerHeight]     = useState(800);
  const [mobileSelectedItem, setMobileSelectedItem] = useState<string | null>(null);
  const [activeCard, setActiveCard]               = useState<string>("about");

  const detailItem = DETAIL_DATA.find((d) => d.id === mobileSelectedItem) ?? null;
  const theme = ID_THEMES[activeCard] ?? ID_THEMES.about;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerHeight(el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cardHeight = Math.min(360, Math.max(220, Math.floor(
    (containerHeight - BOTTOM_MARGIN - MIN_TOP - (CARDS.length - 1) * PEEK) * 0.85
  )));
  const totalStackHeight = (CARDS.length - 1) * PEEK + cardHeight;
  const stackTop = Math.max(MIN_TOP, Math.floor((containerHeight - totalStackHeight) / 2));

  const handleCardClick = (id: string) => {
    setSelectedId(id);
    setActiveCard(id);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">

      {/* ── Animated background ───────────────────────────────────── */}
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

      {/* ── Nav Bar ──────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[66px] flex items-center justify-between px-5 z-10">
        <span
          className="text-white text-[34px] font-bold tracking-tight leading-none"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Welcome!
        </span>
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center active:scale-95 transition-all"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
      </div>

      {/* ── Backdrop: dims cards when any card is expanded ────────── */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => { if (!mobileSelectedItem) { setSelectedId(null); setActiveCard("about"); } }}
          />
        )}
      </AnimatePresence>

      {/* ── Backdrop: blurs expanded card when detail sheet is open ── */}
      <AnimatePresence>
        {mobileSelectedItem && (
          <motion.div
            className="absolute inset-0 z-55 bg-black/40 backdrop-blur-md"
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
        const stackedY = stackTop + index * PEEK;
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
            onClick={() => handleCardClick(card.id)}
            onClose={() => { setSelectedId(null); setActiveCard("about"); }}
          >
            {card.id === "connections" && <ConnectionsCard onRowClick={selectedId === card.id ? setMobileSelectedItem : undefined} />}
            {card.id === "projects"    && <ProjectsCard    onRowClick={selectedId === card.id ? setMobileSelectedItem : undefined} />}
            {card.id === "experience"  && <ExperienceCard  onRowClick={selectedId === card.id ? setMobileSelectedItem : undefined} />}
            {card.id === "about"       && <AboutCard       onRowClick={selectedId === card.id ? setMobileSelectedItem : undefined} />}
          </WalletCard>
        );
      })}

      {/* ── Mobile detail sheet ───────────────────────────────────── */}
      <AnimatePresence>
        {detailItem && (
          <MobileDetailSheet
            item={detailItem}
            onClose={() => setMobileSelectedItem(null)}
            accentColor={theme.accentColor}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

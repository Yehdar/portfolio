"use client";

import { ComponentType, useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useMotionValue } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import WalletCard, { CardDef } from "./WalletCard";
import DesktopLayout, { DETAIL_DATA, ItemDetail } from "./DesktopLayout";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { ID_THEMES } from "./idThemes";

export const CARDS: CardDef[] = [
  { id: "connections", label: "Links"      },
  { id: "projects",    label: "Projects"   },
  { id: "experience",  label: "Experience" },
  { id: "about",       label: "About Me"   },
];

type CardComp = ComponentType<{ onRowClick?: (id: string) => void }>;
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
  const [activeCard, setActiveCard]     = useState<string>("about");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedId, setSelectedId]     = useState<string | null>(null);

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
        onCardSelect={(id) => { setActiveCard(id); setSelectedItem(null); }}
        onItemSelect={setSelectedItem}
      />
    );
  }

  return <MobileStack selectedId={selectedId} setSelectedId={setSelectedId} />;
}

function MobileDetailSheet({ item, onClose, accentColor, detailBg }: {
  item: ItemDetail;
  onClose: () => void;
  accentColor: string;
  detailBg: string;
}) {
  return (
    <motion.div
      className="absolute inset-x-4 z-60 rounded-3xl overflow-hidden shadow-2xl"
      style={{
        top: "50%",
        background: detailBg,
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
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {item.logo && (
              <div className="w-12 h-12 shrink-0 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">{item.title}</h2>
              <p className="text-white/50 text-sm mt-0.5">{item.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-all"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <X size={14} className="text-white" strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {item.tech.map((t) => (
            <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
              {t}
            </span>
          ))}
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={item.status === "Active"
              ? { background: accentColor + "33", color: accentColor }
              : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
            {item.status}
          </span>
          {item.date && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
              {item.date}
            </span>
          )}
        </div>

        <div className="border-t mb-5" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

        <div className="space-y-3 mb-6">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: accentColor }} />
              <p className="text-white/70 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

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
  const [containerHeight, setContainerHeight]       = useState(800);
  const [mobileSelectedItem, setMobileSelectedItem] = useState<string | null>(null);

  const activeCard = selectedId ?? "about";
  const detailItem = DETAIL_DATA.find((d) => d.id === mobileSelectedItem) ?? null;
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

  const peekMv   = useMotionValue(0);
  const SNAP_BACK = { type: "spring", stiffness: 420, damping: 32 } as const;

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onPan={selectedId === null ? (_, info) => {
        // Down → spread cards apart; up → pull closer (clamped)
        peekMv.set(Math.max(-12, Math.min(48, info.offset.y * 0.25)));
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

      <div className="absolute top-0 left-0 right-0 h-[90px] pt-14 flex items-center justify-between px-5 z-10">
        <div style={{ fontFamily: "var(--font-geist-sans)" }}>
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
            onClick={() => { if (!mobileSelectedItem) setSelectedId(null); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileSelectedItem && (
          <motion.div
            className="absolute inset-0 z-55 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileSelectedItem(null)}
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
            {CardContent && (
              <CardContent onRowClick={isExpanded ? setMobileSelectedItem : undefined} />
            )}
          </WalletCard>
        );
      })}

      <AnimatePresence>
        {detailItem && (
          <MobileDetailSheet
            item={detailItem}
            onClose={() => setMobileSelectedItem(null)}
            accentColor={theme.accentColor}
            detailBg={theme.detailBg}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

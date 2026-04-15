"use client";

import { AnimatePresence, motion } from "framer-motion";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { CARDS } from "./WalletStack";

// ─── Sidebar card — clips the card's face to a 72px strip ─────────────────────

function SidebarCard({
  id,
  isSelected,
  onClick,
}: {
  id: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={`w-full rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 text-left
        shadow-md ring-2 transition-shadow duration-200
        ${isSelected ? "ring-black/20 shadow-xl" : "ring-transparent"}`}
      style={{ height: 72 }}
      whileHover={{ x: 10, transition: { duration: 0.15, ease: "easeOut" } }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {/*
        Render the real card component but clip to 72px — shows just the top
        of the card face (logo, branding colour) as the sidebar identifier.
      */}
      <div className="w-full pointer-events-none" style={{ height: 210 }}>
        {id === "about"       && <AboutCard />}
        {id === "experience"  && <ExperienceCard />}
        {id === "projects"    && <ProjectsCard />}
        {id === "connections" && <ConnectionsCard />}
      </div>
    </motion.button>
  );
}

// ─── Desktop split-pane layout ────────────────────────────────────────────────

interface DesktopLayoutProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function DesktopLayout({ selectedId, onSelect }: DesktopLayoutProps) {
  // Show cards front-to-back in sidebar (About at top — most prominent)
  const sidebarCards = [...CARDS].reverse();

  return (
    <div className="w-full h-dvh bg-[#f5f5f7] flex flex-col overflow-hidden">
      {/* ── Nav Bar ──────────────────────────────────────────────────── */}
      <div className="h-[72px] flex items-center justify-between px-8 flex-shrink-0">
        <span
          className="text-black text-4xl xl:text-5xl font-bold tracking-tight leading-none"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          Welcome!
        </span>
        <button className="w-10 h-10 rounded-full bg-[#e5e5ea] flex items-center justify-center hover:bg-[#d1d1d6] active:bg-[#c7c7cc] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="flex-1 flex gap-5 px-8 pb-8 overflow-hidden">

        {/* ── Left Sidebar ───────────────────────────────────────────── */}
        <div className="w-[280px] xl:w-[320px] flex-shrink-0 flex flex-col gap-3 overflow-y-auto hide-scrollbar pt-1">
          {sidebarCards.map((card) => (
            <SidebarCard
              key={card.id}
              id={card.id}
              isSelected={selectedId === card.id}
              onClick={() => onSelect(card.id)}
            />
          ))}
        </div>

        {/* ── Right Viewport ─────────────────────────────────────────── */}
        <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="absolute inset-0 overflow-y-auto hide-scrollbar"
            >
              {selectedId === "about"       && <AboutCard desktop />}
              {selectedId === "experience"  && <ExperienceCard desktop />}
              {selectedId === "projects"    && <ProjectsCard desktop />}
              {selectedId === "connections" && <ConnectionsCard desktop />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

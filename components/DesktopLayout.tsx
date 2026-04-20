"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FileText, Mail, X } from "lucide-react";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { TRANSACTIONS } from "./cards/ExperienceCard";
import { PROJECTS } from "./cards/ProjectsCard";
import { LINKS } from "./cards/ConnectionsCard";
import { ID_THEMES } from "./idThemes";

// Mirrors CARDS in WalletStack — defined locally to avoid circular import
const CARDS = [
  { id: "connections", label: "Links"       },
  { id: "projects",    label: "Projects"    },
  { id: "experience",  label: "Experience"  },
  { id: "about",       label: "About Me"    },
];

// ─── Types ─────────────────────────────────────────────────────────────────────

interface LedgerItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  badge: string;
  badgeActive?: boolean;
}

export interface ItemDetail {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  status: "Active" | "Completed";
  tech: string[];
  bullets: string[];
  href: string;
  hrefLabel: string;
}

// ─── Rich detail data ──────────────────────────────────────────────────────────

export const DETAIL_DATA: ItemDetail[] = [
  {
    id: "Manulife", category: "experience", title: "Manulife",
    subtitle: "Technology Intern", date: "Winter 2026", status: "Active",
    tech: ["Go", "AWS", "Kafka"],
    bullets: [
      "Built microservices handling 10k+ daily financial transactions",
      "Reduced data pipeline latency by 40% through query optimization",
      "Contributed to claims processing architecture review with senior engineers",
    ],
    href: "https://www.linkedin.com/company/manulife/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "RBC", category: "experience", title: "RBC",
    subtitle: "Software Engineering Intern", date: "Past", status: "Completed",
    tech: ["Java", "Spring Boot", "SQL"],
    bullets: [
      "Developed internal tooling reducing manual reconciliation by 3 hrs/week",
      "Wrote integration tests covering 85% of new service endpoints",
      "Participated in agile sprint ceremonies and bi-weekly design reviews",
    ],
    href: "https://www.linkedin.com/company/rbc/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Citi", category: "experience", title: "Citi",
    subtitle: "Software Engineering Intern", date: "Past", status: "Completed",
    tech: ["Python", "React", "PostgreSQL"],
    bullets: [
      "Built a real-time dashboard for monitoring FX transaction anomalies",
      "Collaborated cross-functionally with risk and compliance teams",
      "Shipped 3 features across a 12-week internship cycle",
    ],
    href: "https://www.linkedin.com/company/citi/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Government of Canada", category: "experience", title: "Government of Canada",
    subtitle: "Software Engineering Intern", date: "Past", status: "Completed",
    tech: ["Node.js", "TypeScript", "GCP"],
    bullets: [
      "Modernized a legacy public-facing portal serving 50k+ users",
      "Implemented WCAG 2.1 AA accessibility standards site-wide",
      "Deployed CI/CD pipeline cutting release cycle from 2 weeks to 2 days",
    ],
    href: "https://www.linkedin.com/company/government-of-canada/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Arsenal (Fintech App)", category: "projects", title: "Arsenal",
    subtitle: "AI Credit Card Statement Analyzer", date: "2024", status: "Active",
    tech: ["Go", "Next.js", "OpenAI"],
    bullets: [
      "Parses multi-bank PDF statements and categorizes spend using GPT-4o",
      "Full-stack: Go REST API backend with a Next.js + Tailwind frontend",
      "Detects recurring charges, subscription creep, and spending anomalies",
    ],
    href: "https://github.com/yehdar/arsenal", hrefLabel: "View on GitHub",
  },
  {
    id: "Student Gov Website", category: "projects", title: "Student Gov Website",
    subtitle: "Centralized Resource Portal", date: "2023", status: "Completed",
    tech: ["React", "Vite", "Firebase"],
    bullets: [
      "Built official site for York University engineering student government",
      "Resource hub serving 4,000+ students with events and job postings",
      "Reduced admin content-update time from hours to minutes",
    ],
    href: "https://github.com/yehdar/student-gov", hrefLabel: "View on GitHub",
  },
  {
    id: "FIRST Robotics", category: "projects", title: "FIRST Robotics",
    subtitle: "Team Lead & Fundraiser", date: "2022", status: "Completed",
    tech: ["Leadership", "Java", "FRC"],
    bullets: [
      "Led a 20-person robotics team to regional competition finals",
      "Raised $12k in sponsorships through targeted outreach and grant applications",
      "Programmed autonomous drive routines in Java using WPILib",
    ],
    href: "https://www.firstinspires.org/", hrefLabel: "View on FIRST",
  },
  {
    id: "GitHub", category: "connections", title: "GitHub",
    subtitle: "github.com/yehdar", date: "", status: "Active",
    tech: [],
    bullets: [
      "Open-source contributions and personal projects",
      "Primarily Go, TypeScript, and Python repositories",
    ],
    href: "https://github.com/yehdar", hrefLabel: "Open GitHub",
  },
  {
    id: "LinkedIn", category: "connections", title: "LinkedIn",
    subtitle: "linkedin.com/in/radhey-patel-", date: "", status: "Active",
    tech: [],
    bullets: [
      "500+ connections across tech and finance",
      "Regular posts on engineering and internship experiences",
    ],
    href: "https://linkedin.com/in/radhey-patel-", hrefLabel: "Open LinkedIn",
  },
  {
    id: "resume", category: "about", title: "Resume",
    subtitle: "Full CV — PDF", date: "", status: "Active",
    tech: [],
    bullets: [
      "One-page summary of experience, skills, and education",
      "Available as a downloadable PDF",
    ],
    href: "/resume.pdf", hrefLabel: "Download PDF",
  },
  {
    id: "contact", category: "about", title: "Contact",
    subtitle: "Email Radhey", date: "", status: "Active",
    tech: [],
    bullets: [
      "Open to internship and full-time opportunities",
      "Fastest response via email",
    ],
    href: "mailto:radheypatel@example.com", hrefLabel: "Send Email",
  },
];

// ─── Ledger item map ───────────────────────────────────────────────────────────

const LEDGER_MAP: Record<string, LedgerItem[]> = {
  experience: TRANSACTIONS.map((t) => ({
    id: t.company,
    icon: t.icon,
    title: t.company,
    subtitle: t.role,
    badge: t.date,
    badgeActive: t.current,
  })),
  projects: PROJECTS.map((p) => ({
    id: p.name,
    icon: p.icon,
    title: p.name,
    subtitle: p.description,
    badge: p.tech,
  })),
  connections: LINKS.map((l) => ({
    id: l.label,
    icon: l.icon,
    title: l.label,
    subtitle: l.handle,
    badge: "",
  })),
  about: [
    { id: "resume",  icon: FileText, title: "Resume",  subtitle: "View PDF",  badge: "PDF"   },
    { id: "contact", icon: Mail,     title: "Contact", subtitle: "Email Me",  badge: "Email" },
  ],
};

// ─── Stack geometry (left mini-wallet) ────────────────────────────────────────

const PEEK       = 80;
const FRONT_SHOW = 64;
const FACE_H     = 270;
const stackH     = (CARDS.length - 1) * PEEK + FRONT_SHOW + FACE_H;

// ─── Left column: NavCard ──────────────────────────────────────────────────────

function NavCard({
  id,
  index,
  isActive,
  onClick,
}: {
  id: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className="absolute left-0 right-0 overflow-hidden rounded-2xl cursor-pointer text-left focus:outline-none"
      style={{
        top: index * PEEK,
        height: FACE_H,
        zIndex: index + 1,
      }}
      animate={{
        boxShadow: isActive
          ? "0 0 0 2px rgba(255,255,255,0.2), 0 16px 40px rgba(0,0,0,0.5)"
          : index === CARDS.length - 1
          ? "0 8px 20px rgba(0,0,0,0.35)"
          : "0 2px 8px rgba(0,0,0,0.25)",
      }}
      whileHover={{ x: 20 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onClick}
    >
      <div className="w-full pointer-events-none" style={{ height: FACE_H }}>
        {id === "about"       && <AboutCard />}
        {id === "experience"  && <ExperienceCard />}
        {id === "projects"    && <ProjectsCard />}
        {id === "connections" && <ConnectionsCard />}
      </div>
    </motion.button>
  );
}

// ─── Middle column: Ledger row ─────────────────────────────────────────────────

function LedgerRow({
  item,
  isSelected,
  onClick,
  accentColor,
}: {
  item: LedgerItem;
  isSelected: boolean;
  onClick: () => void;
  accentColor: string;
}) {
  const Icon = item.icon;
  return (
    <motion.button
      className="w-full flex items-center gap-5 px-8 py-5 text-left transition-colors relative focus:outline-none"
      style={{ borderLeft: isSelected ? `2px solid ${accentColor}` : "2px solid transparent" }}
      animate={{ backgroundColor: isSelected ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)" }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      transition={{ duration: 0.12 }}
      onClick={onClick}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <Icon size={20} style={{ color: accentColor }} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-base font-semibold leading-tight truncate">{item.title}</p>
        <p className="text-white/40 text-sm leading-snug mt-0.5 truncate">{item.subtitle}</p>
      </div>
      {item.badge && (
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full shrink-0 whitespace-nowrap"
          style={item.badgeActive
            ? { background: accentColor + "33", color: accentColor }
            : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
        >
          {item.badge}
        </span>
      )}
    </motion.button>
  );
}

// ─── Desktop detail modal ─────────────────────────────────────────────────────

function DesktopDetailModal({
  item,
  accentColor,
  onClose,
}: {
  item: ItemDetail;
  accentColor: string;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 z-20 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="absolute z-30 rounded-3xl overflow-hidden shadow-2xl"
        style={{
          top: "50%",
          left: "50%",
          width: "min(560px, 90%)",
          background: "rgba(10,10,18,0.92)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: `1px solid ${accentColor}33`,
        }}
        initial={{ opacity: 0, x: "-50%", y: "-44%", scale: 0.96 }}
        animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
        exit={{ opacity: 0, x: "-50%", y: "-44%", scale: 0.96 }}
        transition={{ type: "spring", damping: 28, stiffness: 340 }}
      >
        <div className="max-h-[78vh] overflow-y-auto hide-scrollbar px-8 py-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: accentColor + "99" }}>
                {item.category.toUpperCase()}
              </p>
              <h2 className="text-2xl font-bold text-white leading-tight">{item.title}</h2>
              <p className="text-white/50 text-sm mt-1">{item.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 active:scale-95 transition-all mt-0.5"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <X size={15} className="text-white" strokeWidth={2} />
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
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

          {/* Divider */}
          <div className="border-t mb-6" style={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Bullets */}
          <div className="space-y-4 mb-8">
            {item.bullets.map((b, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full mt-[9px] flex-shrink-0" style={{ background: accentColor }} />
                <p className="text-white/70 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all active:scale-95"
            style={{ background: accentColor + "33", border: `1px solid ${accentColor}55` }}
          >
            {item.hrefLabel}
            <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>
      </motion.div>
    </>
  );
}

// ─── Desktop layout ───────────────────────────────────────────────────────────

interface DesktopLayoutProps {
  activeCard: string;
  selectedItem: string | null;
  onCardSelect: (id: string) => void;
  onItemSelect: (id: string | null) => void;
}

export default function DesktopLayout({
  activeCard,
  selectedItem,
  onCardSelect,
  onItemSelect,
}: DesktopLayoutProps) {
  const ledgerItems = LEDGER_MAP[activeCard] ?? [];
  const detailItem  = DETAIL_DATA.find((d) => d.id === selectedItem) ?? null;
  const theme       = ID_THEMES[activeCard] ?? ID_THEMES.about;

  return (
    <div className="w-full h-dvh relative overflow-hidden">

      {/* ── Animated background ─────────────────────────────────────── */}
      <motion.div
        key={activeCard + "-bg"}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ background: theme.dominantBg }}
      />

      {/* ── 2-column grid (on top of background) ────────────────────── */}
      <div className="relative z-10 w-full h-full grid overflow-hidden" style={{ gridTemplateColumns: "480px 1fr" }}>

        {/* ── Col 1: Mini-Wallet navigation ──────────────────────────── */}
        <div className="border-r flex flex-col overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {/* Nav bar */}
          <div className="h-[72px] flex items-center px-8 flex-shrink-0">
            <span className="text-white text-3xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-geist-sans)" }}>
              Welcome!
            </span>
          </div>

          {/* Card stack */}
          <div className="flex-1 flex items-center justify-center px-10 pb-6">
            <div className="relative w-full" style={{ height: stackH }}>
              {CARDS.map((card, index) => (
                <NavCard
                  key={card.id}
                  id={card.id}
                  index={index}
                  isActive={activeCard === card.id}
                  onClick={() => onCardSelect(card.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Col 2: Expanded card (pop animation) ──────────────────── */}
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
                {activeCard === "about"       && <AboutCard       desktop onRowClick={onItemSelect} />}
                {activeCard === "experience"  && <ExperienceCard  desktop onRowClick={onItemSelect} />}
                {activeCard === "projects"    && <ProjectsCard    desktop onRowClick={onItemSelect} />}
                {activeCard === "connections" && <ConnectionsCard desktop onRowClick={onItemSelect} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* ── Detail modal (overlays entire layout) ───────────────────── */}
      <AnimatePresence>
        {detailItem && (
          <DesktopDetailModal
            item={detailItem}
            accentColor={theme.accentColor}
            onClose={() => onItemSelect(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

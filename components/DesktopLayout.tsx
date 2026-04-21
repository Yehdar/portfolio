"use client";

import { ComponentType, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { ID_THEMES } from "./idThemes";

// Mirrors CARDS in WalletStack — defined locally to avoid circular import
const CARDS = [
  { id: "connections", label: "Links"       },
  { id: "projects",    label: "Projects"    },
  { id: "experience",  label: "Experience"  },
  { id: "about",       label: "About Me"    },
];

type CardComp = ComponentType<{ desktop?: boolean; onRowClick?: (id: string) => void }>;
const CARD_MAP: Record<string, CardComp> = {
  connections: ConnectionsCard,
  projects:    ProjectsCard,
  experience:  ExperienceCard,
  about:       AboutCard,
};

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface ItemDetail {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
  tech: string[];
  bullets: string[];
  href: string;
  hrefLabel: string;
  logo?: string;
}

// ─── Rich detail data ──────────────────────────────────────────────────────────

export const DETAIL_DATA: ItemDetail[] = [
    {
    id: "Citi", category: "experience", title: "Citi", logo: "/experience/citi.png",
    subtitle: "Software Engineering Intern", date: "Summer 2026", status: "Data Engineering",
    tech: ["Python"],
    bullets: [
      "soon to come!",
    ],
    href: "https://www.linkedin.com/company/citi/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Manulife", category: "experience", title: "Manulife", logo: "/experience/manulife.png",
    subtitle: "Technology Intern", date: "Winter 2026", status: "Mobile Development",
    tech: ["React", "Kotlin", "MongoDB", "Mobile"],
    bullets: [
      "Led the migration of payment processing systems from third-party vendors to an internal application using React, TypeScript, Kotlin, and Ktor",
      "Refined cache invalidation logic to ensure high-fidelity synchronization with the MongoDB database",
      "Extended backend functionality to include storage metadata in asset response headers, improving debugging and developer visibility",
    ],
    href: "https://www.linkedin.com/company/manulife/", hrefLabel: "View on LinkedIn",
  },
    {
    id: "John Hancock", category: "experience", title: "John Hancock", logo: "/experience/johnhancock.jpg",
    subtitle: "Technology Intern", date: "Summer 2025", status: "Java Developer",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Microservices"],
    bullets: [
      "Maintained a Java Spring Boot project featuring 40+ Jakarta EE servlets and 60+ DTOs, delivering client insurance claims data to internal business applications",
      "Refactored Java microservices from a legacy event bus to Apache Kafka by implementing producer and consumer logic for event processing",
    ],
    href: "https://www.linkedin.com/company/john-hancock/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Royal Bank of Canada", category: "experience", title: "Royal Bank of Canada", logo: "/experience/rbc.png",
    subtitle: "Software Engineering Intern", date: "Winter 2025", status: "Full-Stack Development",
    tech: ["React", "Node.js", "Microsoft SQL Server", "REST APIs"],
    bullets: [
      "Reduced data entry time by 80% for cybersecurity analysts by developing an internal tool using React, Node.js, and Microsoft SQL Server",
      "Engineered REST API endpoints using Express and Prisma ORM to manage server-side logic and Axios for seamless frontend communication",
    ],
    href: "https://www.linkedin.com/company/rbc/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Government of Canada", category: "experience", title: "Government of Canada", logo: "/experience/canada.png",
    subtitle: "Software Engineering Intern", date: "Fall 2024", status: "Data Engineering",
    tech: ["Python", "Apache Spark", "Apache Airflow", "Extract, Transform, Load (ETL)"],
    bullets: [
      "Ingested 120% more threat intelligence data for the Canadian National Security Agency using Python, REST APIs, and Apache Spark, storing it as Apache Iceberg tables in a Microsoft Azure data lake",
      "Maintained post-ingestion analysis with Trino using Apache Hadoop and JDBC connectors",
      "Employed Docker in Apache Airflow jobs to reduce the virtual environment boot-up time by 93% and streamline ETL pipelines",
    ],
    href: "https://www.linkedin.com/company/cse-cst", hrefLabel: "View on LinkedIn",
  },
  {
    id: "York University", category: "experience", title: "York University", logo: "/experience/yorku.jpg",
    subtitle: "Software Engineering Intern", date: "Summer 2024", status: "Machine Learning",
    tech: ["Python", "TensorFlow", "Keras", "Deep Neural Networks (DNNs)"],
    bullets: [
      "Trained a deep neural network (DNN) using Python, TensorFlow, and Keras to optimize truck logistics routing and load strategies, reducing CO2 emissions by 30%.",
      "Contributed to the simulation by leveraging Pandas for data analysis, NumPy for mathematical modeling, and Matplotlib for visualizing predictions.",
      "Presented findings to a panel of professors and industry experts, receiving positive feedback for the innovative approach to sustainability in logistics",
    ],
    href: "https://www.linkedin.com/company/bestlab-lassonde/", hrefLabel: "View on LinkedIn",
  },
  {
    id: "Points Optimizer", category: "projects", title: "Points Optimizer", logo: "/projects/pointsoptimizer.png",
    subtitle: "AI Credit Card Points Optimizer", date: "2024", status: "Active",
    tech: ["Go", "Next.js", "OpenAI"],
    bullets: [
      "Parses multi-bank PDF statements and categorizes spend using GPT-4o",
      "Full-stack: Go REST API backend with a Next.js + Tailwind frontend",
      "Detects recurring charges, subscription creep, and spending anomalies",
    ],
    href: "https://github.com/yehdar/arsenal", hrefLabel: "View on GitHub",
  },
    {
    id: "Email Address Validator", category: "projects", title: "Email Address Validator", logo: "/projects/emailaddressvalidator.png",
    subtitle: "Email Validation Tool", date: "2024", status: "Active",
    tech: ["Go", "Next.js", "OpenAI"],
    bullets: [
      "Parses multi-bank PDF statements and categorizes spend using GPT-4o",
      "Full-stack: Go REST API backend with a Next.js + Tailwind frontend",
      "Detects recurring charges, subscription creep, and spending anomalies",
    ],
    href: "https://github.com/yehdar/arsenal", hrefLabel: "View on GitHub",
  },
  {
    id: "GitHub", category: "connections", title: "GitHub", logo: "/links/github.png",
    subtitle: "github.com/yehdar", date: "", status: "Active",
    tech: [],
    bullets: [
      "Open-source contributions and personal projects",
      "Primarily Go, TypeScript, and Python repositories",
    ],
    href: "https://github.com/yehdar", hrefLabel: "Open GitHub",
  },
  {
    id: "LinkedIn", category: "connections", title: "LinkedIn", logo: "/links/linkedin.png",
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

// ─── Stack geometry (left mini-wallet) ────────────────────────────────────────

const PEEK       = 80;
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


// ─── Desktop detail modal ─────────────────────────────────────────────────────

function DesktopDetailModal({
  item,
  accentColor,
  detailBg,
  onClose,
}: {
  item: ItemDetail;
  accentColor: string;
  detailBg: string;
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
          background: detailBg,
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: `1px solid ${accentColor}33`,
        }}
        initial={{ opacity: 0, x: "-50%", y: "-44%", scale: 0.96 }}
        animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
        exit={{ opacity: 0, x: "-50%", y: "-44%", scale: 0.96 }}
        transition={{ type: "spring", damping: 28, stiffness: 340 }}
      >
        <div className="max-h-[78vh] overflow-y-auto card-scrollbar px-8 py-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {item.logo && (
                <div className="w-14 h-14 shrink-0 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
                </div>
              )}
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: accentColor + "99" }}>
                  {item.category.toUpperCase()}
                </p>
                <h2 className="text-2xl font-bold text-white leading-tight">{item.title}</h2>
                <p className="text-white/50 text-sm mt-1">{item.subtitle}</p>
              </div>
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
  const detailItem  = DETAIL_DATA.find((d) => d.id === selectedItem) ?? null;
  const theme       = ID_THEMES[activeCard] ?? ID_THEMES.about;

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
          <div className="h-[90px] flex items-end px-12 pb-4 pt-24 flex-shrink-0">
            <div style={{ fontFamily: "var(--font-geist-sans)" }}>
              <p className="text-white text-[36px] font-bold tracking-tight leading-tight">Welcome!</p>
              <p className="text-white/60 text-[15px] font-medium leading-tight">Press a card to learn more about me</p>
            </div>
          </div>

          {/* Card stack */}
          <div className="flex-1 flex items-center justify-center px-10 pb-6" ref={stackAreaRef}>
            <div className="relative w-full" style={{ height: stackH, transform: `scale(${stackScale})`, transformOrigin: "center center" }}>
              {CARDS.map((card, index) => (
                <NavCard
                  key={card.id}
                  id={card.id}
                  index={index}
                  activeIndex={CARDS.findIndex(c => c.id === activeCard)}
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
                {(() => { const C = CARD_MAP[activeCard]; return C ? <C desktop onRowClick={onItemSelect} /> : null; })()}
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
            detailBg={theme.detailBg}
            onClose={() => onItemSelect(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}

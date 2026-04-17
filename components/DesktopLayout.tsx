"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Briefcase, Landmark, Building2, Building, Code2, Globe, Cpu, FileText, Mail } from "lucide-react";
import AboutCard from "./cards/AboutCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectsCard from "./cards/ProjectsCard";
import ConnectionsCard from "./cards/ConnectionsCard";
import { TRANSACTIONS } from "./cards/ExperienceCard";
import { PROJECTS } from "./cards/ProjectsCard";
import { LINKS } from "./cards/ConnectionsCard";

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

interface ItemDetail {
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

const DETAIL_DATA: ItemDetail[] = [
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
    href: "https://github.com/radhey-patel/arsenal", hrefLabel: "View on GitHub",
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
    href: "https://github.com/radhey-patel/student-gov", hrefLabel: "View on GitHub",
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
    subtitle: "github.com/radhey-patel", date: "", status: "Active",
    tech: [],
    bullets: [
      "Open-source contributions and personal projects",
      "Primarily Go, TypeScript, and Python repositories",
    ],
    href: "https://github.com/radhey-patel", hrefLabel: "Open GitHub",
  },
  {
    id: "LinkedIn", category: "connections", title: "LinkedIn",
    subtitle: "linkedin.com/in/radhey-patel", date: "", status: "Active",
    tech: [],
    bullets: [
      "500+ connections across tech and finance",
      "Regular posts on engineering and internship experiences",
    ],
    href: "https://linkedin.com/in/radhey-patel", hrefLabel: "Open LinkedIn",
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

const LEDGER_LABEL: Record<string, string> = {
  experience:  "Experience",
  projects:    "Projects",
  connections: "Links",
  about:       "About Me",
};

// ─── Stack geometry (left mini-wallet) ────────────────────────────────────────

const PEEK       = 40;
const FRONT_SHOW = 52;
const FACE_H     = 210;
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
          ? "0 0 0 2px rgba(0,0,0,0.15), 0 16px 40px rgba(0,0,0,0.28)"
          : index === CARDS.length - 1
          ? "0 8px 20px rgba(0,0,0,0.14)"
          : "0 2px 8px rgba(0,0,0,0.08)",
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
}: {
  item: LedgerItem;
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <motion.button
      className="w-full flex items-center gap-5 px-8 py-5 text-left transition-colors relative focus:outline-none"
      style={{ borderLeft: isSelected ? "2px solid #000" : "2px solid transparent" }}
      animate={{ backgroundColor: isSelected ? "rgb(248,248,248)" : "rgb(255,255,255)" }}
      whileHover={{ backgroundColor: "rgb(248,248,248)" }}
      transition={{ duration: 0.12 }}
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-zinc-600" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-zinc-900 text-base font-semibold leading-tight truncate">{item.title}</p>
        <p className="text-zinc-400 text-sm leading-snug mt-0.5 truncate">{item.subtitle}</p>
      </div>
      {item.badge && (
        <span className={`text-sm font-semibold px-3 py-1 rounded-full shrink-0 whitespace-nowrap ${
          item.badgeActive ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-500"
        }`}>
          {item.badge}
        </span>
      )}
    </motion.button>
  );
}

// ─── Right column: Empty state ─────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 select-none">
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-zinc-200">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <p className="text-zinc-400 text-sm font-medium">Select a transaction to view details</p>
    </div>
  );
}

// ─── Right column: Item detail ─────────────────────────────────────────────────

function ItemDetail({ item }: { item: ItemDetail }) {
  const iconMap: Record<string, React.ElementType> = {
    Manulife: Briefcase,
    RBC: Landmark,
    Citi: Building2,
    "Government of Canada": Building,
    "Arsenal (Fintech App)": Code2,
    "Student Gov Website": Globe,
    "FIRST Robotics": Cpu,
    GitHub: Code2,
    LinkedIn: Globe,
    resume: FileText,
    contact: Mail,
  };
  const Icon = iconMap[item.id] ?? Briefcase;

  return (
    <div className="h-full overflow-y-auto hide-scrollbar px-12 py-12">
      {/* Header */}
      <div className="flex items-center gap-6 mb-10">
        <div className="w-20 h-20 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0">
          <Icon size={36} className="text-zinc-700" strokeWidth={1.6} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 leading-tight">{item.title}</h1>
          <p className="text-zinc-500 mt-1.5 text-base">{item.subtitle}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-10">
        {item.tech.map((t) => (
          <span key={t} className="text-sm font-semibold px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600">
            {t}
          </span>
        ))}
        <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
          item.status === "Active" ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-500"
        }`}>
          {item.status}
        </span>
        {item.date && (
          <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-500">
            {item.date}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-100 mb-10" />

      {/* Bullet points */}
      <div className="space-y-5 mb-12">
        {item.bullets.map((b, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-[11px] flex-shrink-0" />
            <p className="text-zinc-700 leading-relaxed text-base">{b}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-800 text-white text-base font-semibold px-6 py-3.5 rounded-xl transition-colors"
      >
        {item.hrefLabel}
        <ExternalLink size={16} strokeWidth={2} />
      </a>
    </div>
  );
}

// ─── Desktop 3-column layout ───────────────────────────────────────────────────

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

  return (
    <div className="w-full h-dvh bg-white grid overflow-hidden" style={{ gridTemplateColumns: "400px 1fr 1fr" }}>

      {/* ── Col 1: Mini-Wallet navigation ──────────────────────────── */}
      <div className="border-r border-slate-100 flex flex-col overflow-hidden">
        {/* Nav bar */}
        <div className="h-[72px] flex items-center px-8 flex-shrink-0">
          <span className="text-black text-3xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-geist-sans)" }}>
            Welcome!
          </span>
        </div>

        {/* Card stack */}
        <div className="flex-1 flex items-center justify-center px-6 pb-8">
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

      {/* ── Col 2: Ledger ──────────────────────────────────────────── */}
      <div className="border-r border-slate-100 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-[72px] flex flex-col justify-center px-8 border-b border-slate-100 flex-shrink-0">
          <p className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
            {LEDGER_LABEL[activeCard]}
          </p>
          <h2 className="text-xl font-bold text-zinc-900 mt-0.5">Latest Transactions</h2>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-y-auto hide-scrollbar py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {ledgerItems.map((item) => (
                <LedgerRow
                  key={item.id}
                  item={item}
                  isSelected={selectedItem === item.id}
                  onClick={() => onItemSelect(selectedItem === item.id ? null : item.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Col 3: Deep Dive ───────────────────────────────────────── */}
      <div className="flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-[72px] flex items-center px-8 border-b border-slate-100 flex-shrink-0">
          <h2 className="text-xl font-bold text-zinc-900">Detail View</h2>
        </div>

        {/* Content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem ?? "__empty__"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {detailItem ? <ItemDetail item={detailItem} /> : <EmptyState />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}

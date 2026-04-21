"use client";

import { ArrowUpRight } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.experience;

interface Transaction {
  logo: string;
  company: string;
  role: string;
  date: string;
  href: string;
  current?: boolean;
}

export const TRANSACTIONS: Transaction[] = [
  { logo: "/citi.png",     company: "Citi",                 role: "Software Engineer Intern", date: "Current",        href: "https://www.linkedin.com/company/citi/",                             current: true},
  { logo: "/manulife.png", company: "Manulife",             role: "Software Engineer Intern",           date: "2026", href: "https://www.linkedin.com/company/manulife/",              },
  { logo: "/johnhancock.jpg", company: "John Hancock",                   role: "Software Engineer Intern", date: "2025",        href: "https://www.linkedin.com/company/rbc/"                              },
  { logo: "/rbc.png",      company: "Royal Bank of Canada",              role: "Software Engineer Intern",           date: "2025", href: "https://www.linkedin.com/company/john-hancock/",              },
  { logo: "/canada.png",   company: "Government of Canada", role: "Software Engineer Intern", date: "2024",        href: "https://www.linkedin.com/company/government-of-canada/"             },
  { logo: "/yorku.jpg",   company: "York University",      role: "Undergraduate Research Assistant", date: "2024",        href: "https://www.linkedin.com/company/york-university/"                    },
];

function OceanLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/space.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div className={`w-full relative overflow-hidden ${fill ? "flex-1" : "h-[300px] flex-shrink-0"}`}>
      <OceanLandscape />
      {desktop && <div className="absolute inset-0 bg-black/50" />}
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
              {theme.category}
            </p>
          </div>
          <div
            className="px-2 rounded text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#fca5a5" }}
          >
            2
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Row ───────────────────────────────────────────────────────────
function TransactionRow({
  logo, company, role, date, href, current, desktop, onRowClick,
}: Transaction & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(company); } }}
      className={`flex items-center border-b-2 last:border-0 group active:scale-[0.98] px-3 rounded-none transition-all cursor-pointer
        ${desktop ? "py-7 gap-5" : "py-5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
      onMouseEnter={desktop ? (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; } : undefined}
      onMouseLeave={desktop ? (e) => { e.currentTarget.style.background = ""; } : undefined}
    >
      <div
        className={`shrink-0 overflow-hidden ${desktop ? "w-12 h-12" : "w-10 h-10"}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={company} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{company}</p>
          {onRowClick && <ArrowUpRight size={14} className="shrink-0 text-white/50" strokeWidth={2} />}
        </div>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: theme.rowSubtext }}>{role}</p>
      </div>
      <span
        className={`font-semibold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${desktop ? "text-sm" : "text-xs"}`}
        style={current
          ? { background: theme.badgeActiveBg, color: theme.badgeActiveFg }
          : { background: theme.badgeBg, color: theme.badgeFg }}
      >
        {date}
      </span>
    </a>
  );
}

export default function ExperienceCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      <CardFace desktop={desktop} fill={!desktop && !onRowClick} />
      {(desktop || onRowClick) && (<>
        <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"} ${desktop ? "pt-6" : "pt-4"}`}>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Where I've Worked</p>
          {TRANSACTIONS.map((tx) => (
            <TransactionRow key={tx.company} {...tx} desktop={desktop} onRowClick={onRowClick} />
          ))}
        </div>
      </>)}
    </div>
  );
}

"use client";

import { Briefcase, Landmark, Building2, Building } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.experience;

interface Transaction {
  icon: React.ElementType;
  company: string;
  role: string;
  date: string;
  href: string;
  current?: boolean;
}

export const TRANSACTIONS: Transaction[] = [
  { icon: Briefcase, company: "Manulife",             role: "Technology Intern",           date: "Winter 2026", href: "https://www.linkedin.com/company/manulife/",              current: true },
  { icon: Landmark,  company: "RBC",                  role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/rbc/"                              },
  { icon: Building2, company: "Citi",                 role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/citi/"                             },
  { icon: Building,  company: "Government of Canada", role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/government-of-canada/"             },
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

// ─── State Seal ────────────────────────────────────────────────────────────────
// ─── ID Card Face ──────────────────────────────────────────────────────────────
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
            className="px-2 py-0.5 rounded text-[7px] font-bold tracking-widest uppercase"
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
  icon: Icon, company, role, date, href, current, desktop, onRowClick,
}: Transaction & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.stopPropagation(); if (onRowClick) { e.preventDefault(); onRowClick(company); } }}
      className={`flex items-center border-b last:border-0 group active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer
        ${desktop ? "py-5 gap-5" : "py-3.5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
    >
      <div
        className={`rounded-full flex items-center justify-center shrink-0 transition-colors ${desktop ? "w-12 h-12" : "w-10 h-10"}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <Icon size={desktop ? 20 : 17} style={{ color: theme.rowIconColor }} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{company}</p>
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
        <div className={`shrink-0 ${desktop ? "px-6 pt-6 pb-2" : "px-5 pt-4 pb-1"}`}>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: theme.rowSubtext }}>ID Records</p>
        </div>
        <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
          {TRANSACTIONS.map((tx) => (
            <TransactionRow key={tx.company} {...tx} desktop={desktop} onRowClick={onRowClick} />
          ))}
        </div>
      </>)}
    </div>
  );
}

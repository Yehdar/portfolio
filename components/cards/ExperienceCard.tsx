"use client";

import { ArrowUpRight } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.experience;

interface Transaction {
  logo: string;
  company: string;
  role: string;
  stack: string;
  date: string;
  href: string;
  current?: boolean;
}

export const TRANSACTIONS: Transaction[] = [
  { logo: "/experience/citi.png",        company: "Citi",                 role: "Software Engineer Intern,",         stack: "Banking Technology",       date: "Current", href: "https://www.linkedin.com/company/citi/",                  },
  { logo: "/experience/manulife.png",    company: "Manulife",             role: "Software Engineer Intern,",         stack: "Global Wealth & Asset Management",      date: "2026",    href: "https://www.linkedin.com/company/manulife/"                         },
  { logo: "/experience/johnhancock.jpg", company: "John Hancock",         role: "Software Engineer Intern,",         stack: "Manulife US Segment",    date: "2025",    href: "https://www.linkedin.com/company/john-hancock/"                     },
  { logo: "/experience/rbc.png",         company: "Royal Bank of Canada", role: "Software Engineer Intern,",         stack: "Global Cyber Security Services",         date: "2025",    href: "https://www.linkedin.com/company/rbc/"                              },
  { logo: "/experience/canada.png",      company: "Government of Canada", role: "Software Engineer Intern,",         stack: "Canadian Centre for Cyber Security",      date: "2024",    href: "https://www.linkedin.com/company/government-of-canada/"             },
  { logo: "/experience/yorku.jpg",       company: "York University",      role: "Undergraduate Research Assistant,", stack: "Trucking Logistics",   date: "2024",    href: "https://www.linkedin.com/company/york-university/"                  },
];

function OceanLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/cards/space.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div
      className={`w-full relative overflow-hidden ${fill ? "flex-1" : "flex-shrink-0"}`}
      style={!fill ? { height: desktop ? "clamp(160px, 30dvh, 300px)" : "300px" } : undefined}
    >
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
  logo, company, role, stack, date, href, current, desktop,
}: Transaction & { desktop?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center border-b-2 last:border-0 group active:scale-[0.98] px-3 rounded-none transition-all cursor-pointer
        ${desktop ? "py-5 gap-5" : "py-4 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
      onMouseEnter={desktop ? (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; } : undefined}
      onMouseLeave={desktop ? (e) => { e.currentTarget.style.background = ""; } : undefined}
    >
      <div
        className={`shrink-0 overflow-hidden ${desktop ? "w-14 h-14" : "w-12 h-12"}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={company} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{company}</p>
          <span className="text-white/30 text-xs shrink-0">·</span>
          <span
            className="text-xs font-semibold shrink-0"
            style={current ? { color: theme.badgeActiveFg } : { color: "rgba(255,255,255,0.4)" }}
          >{date}</span>
          <ArrowUpRight size={13} className="shrink-0 text-white/40 ml-auto" strokeWidth={2} />
        </div>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: "rgba(255, 255, 255, 0.86)" }}>{role}</p>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-xs" : "text-[11px]"}`} style={{ color: "rgba(255, 255, 255, 0.78)" }}>{stack}</p>
      </div>
    </a>
  );
}

export default function ExperienceCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      <CardFace desktop={desktop} fill={!desktop && !onRowClick} />
      {(desktop || onRowClick) && (<>
        <div className={`flex-1 overflow-y-auto card-scrollbar pb-6 ${desktop ? "px-5" : "px-4"} ${desktop ? "pt-6" : "pt-4"}`}>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Where I've Worked</p>
          {TRANSACTIONS.map((tx) => (
            <TransactionRow key={tx.company} {...tx} desktop={desktop} />
          ))}
        </div>
      </>)}
    </div>
  );
}

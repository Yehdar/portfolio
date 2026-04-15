"use client";

import { Briefcase, Landmark, Building2, Building } from "lucide-react";

interface Transaction {
  icon: React.ElementType;
  company: string;
  role: string;
  date: string;
  href: string;
  current?: boolean;
}

const TRANSACTIONS: Transaction[] = [
  { icon: Briefcase, company: "Manulife",             role: "Technology Intern",           date: "Winter 2026", href: "https://www.linkedin.com/company/manulife/",              current: true },
  { icon: Landmark,  company: "RBC",                  role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/rbc/"                              },
  { icon: Building2, company: "Citi",                 role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/citi/"                             },
  { icon: Building,  company: "Government of Canada", role: "Software Engineering Intern", date: "Past",        href: "https://www.linkedin.com/company/government-of-canada/"             },
];

// ─── SoFi card face ────────────────────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 bg-white overflow-hidden border-b border-zinc-100">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #0070ba 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Glare top-right */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#0070ba]/[0.04]" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: SoFi wordmark + dot-matrix logo */}
        <div className="flex items-center gap-3">
          <span className="text-[#0070ba] text-[32px] font-black tracking-tight leading-none">
            SoFi
          </span>
          {/* 3×3 dot grid mark */}
          <div className="grid grid-cols-3 gap-[3px] mt-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#0070ba]/60" />
            ))}
          </div>
        </div>

        {/* Middle: tagline */}
        <p className="text-zinc-400 text-[11px] font-medium tracking-wide">
          Career History
        </p>

        {/* Bottom: cardholder */}
        <div>
          <p className="text-zinc-400 text-[9px] tracking-[0.25em] uppercase font-semibold mb-0.5">
            Member
          </p>
          <p className="text-zinc-700 text-[13px] font-semibold tracking-wide uppercase">
            Radhey Patel
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Row (light theme) ────────────────────────────────────────────
function TransactionRow({
  icon: Icon, company, role, date, href, current, desktop,
}: Transaction & { desktop?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center gap-4 border-b border-zinc-100 last:border-0 group hover:bg-zinc-50 active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer
        ${desktop ? "py-5 gap-5" : "py-3.5"}`}
    >
      <div className={`rounded-full bg-zinc-100 group-hover:bg-zinc-200 flex items-center justify-center shrink-0 transition-colors
        ${desktop ? "w-12 h-12" : "w-10 h-10"}`}>
        <Icon size={desktop ? 20 : 17} className="text-[#0070ba]" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-zinc-900 font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`}>{company}</p>
        <p className={`text-zinc-500 leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`}>{role}</p>
      </div>
      <span className={`font-semibold px-2 py-0.5 rounded-full shrink-0 ${desktop ? "text-sm" : "text-xs"} ${
        current ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-500"
      }`}>
        {date}
      </span>
    </a>
  );
}

export default function ExperienceCard({ desktop }: { desktop?: boolean }) {
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      <CardFace />
      <div className={`shrink-0 ${desktop ? "px-6 pt-6 pb-2" : "px-5 pt-4 pb-1"}`}>
        <p className="text-zinc-400 text-[10px] font-bold tracking-[0.25em] uppercase">
          Experience
        </p>
      </div>
      <div className={`flex-1 overflow-y-auto hide-scrollbar pb-6 ${desktop ? "px-5" : "px-4"}`}>
        {TRANSACTIONS.map((tx) => (
          <TransactionRow key={tx.company} {...tx} desktop={desktop} />
        ))}
      </div>
    </div>
  );
}

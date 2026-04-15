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
  { icon: Briefcase, company: "Manulife",              role: "Technology Intern",              date: "Winter 2026", href: "https://www.linkedin.com/company/manulife/",               current: true },
  { icon: Landmark,  company: "RBC",                   role: "Software Engineering Intern",    date: "Past",        href: "https://www.linkedin.com/company/rbc/"                               },
  { icon: Building2, company: "Citi",                  role: "Software Engineering Intern",    date: "Past",        href: "https://www.linkedin.com/company/citi/"                              },
  { icon: Building,  company: "Government of Canada",  role: "Software Engineering Intern",    date: "Past",        href: "https://www.linkedin.com/company/government-of-canada/"              },
];

// ─── Full-bleed credit card face ───────────────────────────────────────────────
function CardFace() {
  return (
    <div className="w-full h-[210px] relative flex-shrink-0 bg-gradient-to-br from-[#0a1f6e] via-[#1040b0] to-[#071650] overflow-hidden">
      {/* Glare circles */}
      <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-white/[0.05]" />
      <div className="absolute top-10 -right-6  w-36 h-36 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-10 -left-6 w-40 h-40 rounded-full bg-blue-300/[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: bank name + contactless */}
        <div className="flex items-start justify-between">
          <span className="text-white text-xl font-black tracking-[0.15em]">CAREER</span>
          <svg width="22" height="22" viewBox="0 0 24 24" className="text-white/50 mt-0.5">
            <path d="M6.5 12a5.5 5.5 0 0 1 5.5-5.5M9 12a3 3 0 0 1 3-3M11.5 12a.5.5 0 0 1 .5-.5"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Chip */}
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg">
          <div className="w-full h-full rounded-md grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-700/30" />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="space-y-1.5">
          <p className="text-white/40 text-[12px] tracking-[0.25em] font-mono">•••• &nbsp;•••• &nbsp;•••• &nbsp;2026</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
              <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">Radhey Patel</p>
            </div>
            <span className="text-white/70 text-lg font-black italic tracking-tight">VISA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Row ───────────────────────────────────────────────────────────
function TransactionRow({ icon: Icon, company, role, date, href, current }: Transaction) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="flex items-center gap-4 py-3.5 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 active:scale-[0.98] px-2 -mx-2 rounded-xl transition-all cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon size={17} className="text-blue-400" strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">{company}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5">{role}</p>
      </div>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
        current ? "bg-green-500/15 text-green-400" : "bg-zinc-800 text-zinc-400"
      }`}>
        {date}
      </span>
    </a>
  );
}

export default function ExperienceCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      <CardFace />
      <div className="px-5 pt-4 pb-1 shrink-0">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">Latest Transactions</p>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {TRANSACTIONS.map((tx) => <TransactionRow key={tx.company} {...tx} />)}
      </div>
    </div>
  );
}

"use client";

import { Briefcase, Landmark, Building2, Building } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Transaction {
  icon: React.ElementType;
  company: string;
  role: string;
  date: string;
  current?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const TRANSACTIONS: Transaction[] = [
  {
    icon: Briefcase,
    company: "Manulife",
    role: "Technology Intern",
    date: "Winter 2026",
    current: true,
  },
  {
    icon: Landmark,
    company: "RBC",
    role: "Software Engineering Intern",
    date: "Past",
  },
  {
    icon: Building2,
    company: "Citi",
    role: "Software Engineering Intern",
    date: "Past",
  },
  {
    icon: Building,
    company: "Government of Canada",
    role: "Software Engineering Intern",
    date: "Past",
  },
];

// ─── Credit Card Graphic ───────────────────────────────────────────────────────
function CreditCard() {
  return (
    <div className="mx-5 mt-10 rounded-2xl overflow-hidden shadow-2xl h-[196px] relative bg-gradient-to-br from-[#0f1b4c] via-[#173a82] to-[#0b2461]">
      {/* Decorative glare circles */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/[0.04]" />
      <div className="absolute top-12 -right-8 w-36 h-36 rounded-full bg-white/[0.04]" />
      <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-blue-400/10" />

      {/* Subtle horizontal stripe */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/20" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top row — bank name + contactless */}
        <div className="flex items-start justify-between">
          <span className="text-white text-xl font-black tracking-[0.15em]">CAREER</span>
          {/* Contactless / NFC rings */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-white/50 mt-0.5">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
              opacity="0"
            />
            <path
              d="M6.5 12a5.5 5.5 0 0 1 5.5-5.5M9 12a3 3 0 0 1 3-3M11.5 12a.5.5 0 0 1 .5-.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Chip */}
        <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-lg">
          <div className="w-full h-full rounded-md opacity-60 bg-gradient-to-br from-yellow-100/40 to-transparent grid grid-cols-3 p-0.5 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[1px] bg-yellow-700/30" />
            ))}
          </div>
        </div>

        {/* Bottom — card number + holder + network */}
        <div className="space-y-2">
          <p className="text-white/50 text-[13px] tracking-[0.25em] font-mono">
            •••• &nbsp;•••• &nbsp;•••• &nbsp;2026
          </p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Card Holder</p>
              <p className="text-white/80 text-[11px] font-semibold tracking-[0.12em] uppercase">
                Radhey Patel
              </p>
            </div>
            {/* Visa wordmark */}
            <span className="text-white/70 text-lg font-black italic tracking-tight">VISA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Transaction Row ───────────────────────────────────────────────────────────
function TransactionRow({ icon: Icon, company, role, date, current }: Transaction) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-zinc-800/60 last:border-0 group hover:bg-zinc-900/40 px-2 -mx-2 rounded-xl transition-colors">
      {/* Icon bubble */}
      <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center shrink-0 transition-colors">
        <Icon size={17} className="text-blue-400" strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">{company}</p>
        <p className="text-zinc-400 text-xs leading-snug truncate mt-0.5">{role}</p>
      </div>

      {/* Date badge */}
      <div className="shrink-0 text-right">
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            current
              ? "bg-green-500/15 text-green-400"
              : "bg-zinc-800 text-zinc-400"
          }`}
        >
          {date}
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ExperienceCard() {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
      {/* Credit card graphic */}
      <CreditCard />

      {/* Section header */}
      <div className="px-6 pt-5 pb-1 shrink-0">
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase">
          Latest Transactions
        </p>
      </div>

      {/* Transaction list */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-6">
        {TRANSACTIONS.map((tx) => (
          <TransactionRow key={tx.company} {...tx} />
        ))}
      </div>
    </div>
  );
}

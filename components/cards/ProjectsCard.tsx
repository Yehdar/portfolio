"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { ID_THEMES } from "../idThemes";

const theme = ID_THEMES.projects;

interface Project {
  icon: React.ElementType;
  logo?: string;
  name: string;
  description: string;
  tech: string;
  href: string;
}

export const PROJECTS: Project[] = [
  { icon: Code2, logo: "/projects/pointsoptimizer.png",     name: "Points Optimizer ⭐",      description: "AI Credit Card Points Optimizer",                            tech: "Kotlin, Next.js (TypeScript), PostgreSQL, Gemini Flash", href: "https://www.linkedin.com/posts/radhey-patel-_most-of-us-use-credit-cards-that-dont-actually-activity-7449541890422489088-LjLC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvE724Bs3MbkG650lKiVaEA_BbmCaWxikY" },
  { icon: Code2, logo: "/projects/statements.png",                name: "Credit Statement Wrapped",         description: "\"Spotify Wrapped\" credit statement analyzer", tech: "Go, Next.js (TypeScript), PostgreSQL, Gemini Flash",            href: "https://github.com/yehdar/Credit-Card-Statement-Processor"            },
  { icon: Code2, logo: "/projects/lsc.png",                name: "lascongress.ca",         description: "YorkU Eng. Student Gov. Website", tech: "React (JavaScript)",            href: "https://github.com/lascongress/lascongress.github.io"            },
  { icon: Code2, logo: "/projects/aws.png",                name: "Polyglot",               description: "Serverless Machine Code Translator",                   tech: "Python, AWS",     href: "https://github.com/Yehdar/Polyglot"                              },
  { icon: Code2, logo: "/projects/emailaddressvalidator.png", name: "Email Address Validator", description: "CLI Tool to Validate Emails",                                 tech: "Go",           href: "https://github.com/The-Golang-Way/Email-Address-Validator"       },
  { icon: Code2, logo: "/projects/hermes.png",             name: "Hermes",                 description: "LAN Chat Application",                                    tech: "Python",           href: "https://github.com/Yehdar/hermes"                 },
  { icon: Code2, logo: "/projects/steady.png",             name: "Steady",                 description: "JIRA Clone (backend-only)",                                                  tech: "Python, Flask, React (TypeScript), PostgreSQL, Docker",           href: "https://github.com/Yehdar/steady"                 },
  { icon: Code2, logo: "/projects/google.png",             name: "Google Photos Script",   description: "Script to Modify Google Photos",            tech: "Python",           href: "https://github.com/Yehdar/google-photos-script"                 },
  { icon: Code2, logo: "/projects/watchdogs.png",          name: "Watchdogs",              description: "Serverless Streaming Application",                                tech: "Go,  JavaScript, AWS",           href: "https://github.com/Yehdar/watchdogs"                 },
  { icon: Code2, logo: "/projects/overseer.png",           name: "Overseer",               description: "CPU Monitoring Tool",                                tech: "Python, Flask, JavaScript, AWS, Docker",           href: "https://github.com/Yehdar/overseer"                 },
  { icon: Code2, logo: "/projects/vaultmonster.png",       name: "Vault Monster",          description: "File Storage System",                                tech: "React (TypeScript), Go",           href: "https://github.com/Yehdar/vaultmonster"                 },
  { icon: Code2, logo: "/projects/broblox.png",            name: "Broblox",                description: "Turn-based Strategy Game",                                tech: "JavaScript, HTML, CSS",           href: "https://github.com/Yehdar/broblox"                 },
  { icon: Code2, logo: "/projects/raincheck.png",          name: "Rain Check",             description: "CLI Tool to Check Weather",                                tech: "Go",           href: "https://github.com/The-Golang-Way/raincheck"                 },
  { icon: Code2, logo: "/projects/remindme.png",           name: "Remind Me",              description: "CLI Tool to Set Reminders",                                tech: "Go",           href: "https://github.com/The-Golang-Way/remindme"                 },
  { icon: Code2, logo: "/projects/stream.png",             name: "Stream",                 description: "Live Streaming Application",                                tech: "Rust",           href: "https://github.com/Yehdar/stream"                 },
  { icon: Code2, logo: "/projects/kanine.png",             name: "Kanine",                 description: "NMAP Clone",                                tech: "Rust",           href: "https://github.com/Yehdar/kanine"                 },
  { icon: Code2, logo: "/projects/sentient.png",           name: "Sentient",               description: "Browser From Scratch",                                tech: "Rust",           href: "https://github.com/Yehdar/sentient"                 },
  { icon: Code2, logo: "/projects/slither.jpeg",           name: "Slither",                description: "Web Crawler",                                tech: "Rust",           href: "https://github.com/Yehdar/slither"                 },
];




function SpaceLandscape() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/cards/pirates.png"
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 70%" }}
    />
  );
}

function CardFace({ desktop, fill }: { desktop?: boolean; fill?: boolean }) {
  return (
    <div
      className={`w-full relative overflow-hidden ${fill ? "flex-1" : "flex-shrink-0"}`}
      style={!fill ? { height: desktop ? "clamp(160px, 30dvh, 300px)" : "300px" } : undefined}
    >
      <SpaceLandscape />
      {desktop && <div className="absolute inset-0 bg-black/50" />}
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-start justify-between">
          <p className="text-[12px] tracking-[0.35em] font-bold uppercase text-white/90 leading-none mb-1">
            {theme.category}
          </p>
          <div
            className="px-2 rounded text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", color: "#d7dbf0" }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ icon: Icon, logo, name, description, tech, href, desktop, onRowClick }: Project & { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center border-b-2 last:border-0 group active:scale-[0.98] px-3 rounded-none transition-all cursor-pointer
        ${desktop ? "py-7 gap-5" : "py-5 gap-4"}`}
      style={{ borderColor: theme.rowBorder }}
      onMouseEnter={desktop ? (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; } : undefined}
      onMouseLeave={desktop ? (e) => { e.currentTarget.style.background = ""; } : undefined}
    >
      <div
        className={`shrink-0 overflow-hidden flex items-center justify-center ${logo ? (desktop ? "w-32 h-20" : "w-24 h-16") : (desktop ? "w-12 h-12" : "w-10 h-10")}`}
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {logo
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={logo} alt={name} className="w-full h-full object-cover object-top" />
          : <Icon size={desktop ? 20 : 17} style={{ color: theme.rowIconColor }} strokeWidth={1.8} />
        }
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className={`font-semibold leading-tight truncate ${desktop ? "text-base" : "text-sm"}`} style={{ color: theme.rowText }}>{name}</p>
          <ArrowUpRight size={13} className="shrink-0 text-white/40 ml-auto" strokeWidth={2} />
        </div>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-sm" : "text-xs"}`} style={{ color: "rgba(255,255,255,0.86)" }}>{description}</p>
        <p className={`leading-snug truncate mt-0.5 ${desktop ? "text-xs" : "text-[11px]"}`} style={{ color: "rgba(255,255,255,0.78)" }}>{tech}</p>
      </div>
    </a>
  );
}

export default function ProjectsCard({ desktop, onRowClick }: { desktop?: boolean; onRowClick?: (id: string) => void }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: (desktop || onRowClick) ? theme.rowBg : "transparent" }}>
      <CardFace desktop={desktop} fill={!desktop && !onRowClick} />
      {(desktop || onRowClick) && (
        <div
          className={`flex-1 overflow-y-auto card-scrollbar pb-14 ${desktop ? "px-5 pt-6" : "px-4 pt-4"}`}
            style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)" }}
        >
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255)" }}>What I've Built</p>
          {PROJECTS.map((p) => (
            <ProjectRow key={p.name} {...p} desktop={desktop} />
          ))}
        </div>
      )}
    </div>
  );
}

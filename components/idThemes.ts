export interface IDTheme {
  category: string;
  dominantBg: string;
  cardGradient: string;
  accentColor: string;
  textColor: "light" | "dark";
  rowBg: string;
  rowText: string;
  rowSubtext: string;
  rowIconColor: string;
  rowBorder: string;
  rowHover: string;
  badgeActiveBg: string;
  badgeActiveFg: string;
  badgeBg: string;
  badgeFg: string;
  selectedBorder: string;
}

export const ID_THEMES: Record<string, IDTheme> = {
  about: {
    category: "ABOUT ME",
    dominantBg: "linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0369a1 100%)",
    cardGradient: "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0369a1 100%)",
    accentColor: "#38bdf8",
    textColor: "light",
    rowBg: "#0a0f1a",
    rowText: "#e0f2fe",
    rowSubtext: "#0369a1",
    rowIconColor: "#38bdf8",
    rowBorder: "#0f1f3d",
    rowHover: "#0d1a35",
    badgeActiveBg: "#0369a1",
    badgeActiveFg: "#e0f2fe",
    badgeBg: "#0f1f3d",
    badgeFg: "#38bdf8",
    selectedBorder: "#38bdf8",
  },
  experience: {
    category: "EXPERIENCE",
    dominantBg: "linear-gradient(160deg, #1a0005 0%, #4c0519 50%, #7f1d1d 100%)",
    cardGradient: "linear-gradient(160deg, #1a0005 0%, #4c0519 60%, #9f1239 100%)",
    accentColor: "#f43f5e",
    textColor: "light",
    rowBg: "#0d0205",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#fb7185",
    rowBorder: "#2d0a10",
    rowHover: "#1f0608",
    badgeActiveBg: "#9f1239",
    badgeActiveFg: "#ffe4e6",
    badgeBg: "#2d0a10",
    badgeFg: "#fb7185",
    selectedBorder: "#f43f5e",
  },
  projects: {
    category: "PROJECTS",
    dominantBg: "linear-gradient(160deg, #020617 0%, #0f0a2e 50%, #1e1b4b 100%)",
    cardGradient: "linear-gradient(160deg, #020617 0%, #0f0a2e 60%, #4338ca 100%)",
    accentColor: "#818cf8",
    textColor: "light",
    rowBg: "#030108",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#818cf8",
    rowBorder: "#0d0a20",
    rowHover: "#0a0818",
    badgeActiveBg: "#3730a3",
    badgeActiveFg: "#e0e7ff",
    badgeBg: "#0d0a20",
    badgeFg: "#818cf8",
    selectedBorder: "#818cf8",
  },
  connections: {
    category: "LINKS",
    dominantBg: "linear-gradient(160deg, #052e16 0%, #14532d 40%, #1e3a5f 100%)",
    cardGradient: "linear-gradient(160deg, #052e16 0%, #166534 50%, #1e3a5f 100%)",
    accentColor: "#4ade80",
    textColor: "light",
    rowBg: "#030a06",
    rowText: "#dcfce7",
    rowSubtext: "#166534",
    rowIconColor: "#4ade80",
    rowBorder: "#0a2010",
    rowHover: "#081a0c",
    badgeActiveBg: "#14532d",
    badgeActiveFg: "#dcfce7",
    badgeBg: "#0a2010",
    badgeFg: "#22c55e",
    selectedBorder: "#4ade80",
  },
};

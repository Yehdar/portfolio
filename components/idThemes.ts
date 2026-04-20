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
    dominantBg: "linear-gradient(160deg, #0c4a6e 0%, #0369a1 50%, #065f46 100%)",
    cardGradient: "linear-gradient(160deg, #0c4a6e 0%, #0ea5e9 50%, #06b6d4 100%)",
    accentColor: "#06b6d4",
    textColor: "light",
    rowBg: "#040d14",
    rowText: "#cffafe",
    rowSubtext: "#0e7490",
    rowIconColor: "#22d3ee",
    rowBorder: "#082030",
    rowHover: "#061a28",
    badgeActiveBg: "#0e7490",
    badgeActiveFg: "#cffafe",
    badgeBg: "#082030",
    badgeFg: "#22d3ee",
    selectedBorder: "#06b6d4",
  },
  projects: {
    category: "PROJECTS",
    dominantBg: "linear-gradient(160deg, #020617 0%, #0f0a2e 50%, #1e1b4b 100%)",
    cardGradient: "linear-gradient(160deg, #020617 0%, #0f0a2e 60%, #4338ca 100%)",
    accentColor: "#818cf8",
    textColor: "light",
    rowBg: "#030108",
    rowText: "#e0e7ff",
    rowSubtext: "#4338ca",
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

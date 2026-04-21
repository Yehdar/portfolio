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
  detailBg: string;
}

export const ID_THEMES: Record<string, IDTheme> = {
  about: {
    category: "ABOUT ME",
    dominantBg: "linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0369a1 100%)",
    cardGradient: "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0369a1 100%)",
    accentColor: "#38bdf8",
    textColor: "light",
    rowBg: "#0d2d4a",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#38bdf8",
    rowBorder: "rgba(56,189,248,0.25)",
    rowHover: "#0d1a35",
    badgeActiveBg: "#0369a1",
    badgeActiveFg: "#e0f2fe",
    badgeBg: "#0f1f3d",
    badgeFg: "#38bdf8",
    selectedBorder: "#38bdf8",
    detailBg: "rgba(3, 20, 50, 0.95)",
  },
  experience: {
    category: "EXPERIENCE",
    dominantBg: "linear-gradient(160deg, #0d0020 0%, #2d0060 50%, #5b21b6 100%)",
    cardGradient: "linear-gradient(160deg, #0d0020 0%, #2d0060 60%, #7c3aed 100%)",
    accentColor: "#a78bfa",
    textColor: "light",
    rowBg: "#1a0a38",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#c4b5fd",
    rowBorder: "rgba(167,139,250,0.25)",
    rowHover: "#220d4a",
    badgeActiveBg: "#5b21b6",
    badgeActiveFg: "#ede9fe",
    badgeBg: "#2e1060",
    badgeFg: "#c4b5fd",
    selectedBorder: "#a78bfa",
    detailBg: "rgba(18, 5, 45, 0.95)",
  },
  projects: {
    category: "PROJECTS",
    dominantBg: "linear-gradient(160deg, #001a1f 0%, #003d4a 50%, #0e7490 100%)",
    cardGradient: "linear-gradient(160deg, #001a1f 0%, #003d4a 60%, #0e7490 100%)",
    accentColor: "#22d3ee",
    textColor: "light",
    rowBg: "#00252e",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#67e8f9",
    rowBorder: "rgba(34,211,238,0.25)",
    rowHover: "#003040",
    badgeActiveBg: "#0e7490",
    badgeActiveFg: "#cffafe",
    badgeBg: "#003a47",
    badgeFg: "#22d3ee",
    selectedBorder: "#22d3ee",
    detailBg: "rgba(0, 25, 32, 0.95)",
  },
  connections: {
    category: "LINKS",
    dominantBg: "linear-gradient(160deg, #1a1a1a 0%, #2c2c2e 50%, #3f3f46 100%)",
    cardGradient: "linear-gradient(160deg, #1a1a1a 0%, #2c2c2e 60%, #52525b 100%)",
    accentColor: "#d4d4d8",
    textColor: "light",
    rowBg: "#2c2c2e",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#d4d4d8",
    rowBorder: "rgba(255,255,255,0.18)",
    rowHover: "#28282a",
    badgeActiveBg: "#3a3a3c",
    badgeActiveFg: "#ffffff",
    badgeBg: "#2c2c2e",
    badgeFg: "#a1a1aa",
    selectedBorder: "#71717a",
    detailBg: "rgba(15, 15, 15, 0.95)",
  },
};

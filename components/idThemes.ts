export interface IDTheme {
  category: string;
  dominantBg: string;
  accentColor: string;
  textColor: "light" | "dark";
  rowBg: string;
  rowText: string;
  rowSubtext: string;
  rowIconColor: string;
  rowBorder: string;
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
    accentColor: "#38bdf8",
    textColor: "light",
    rowBg: "#0d2d4a",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#38bdf8",
    rowBorder: "rgba(56,189,248,0.25)",
    badgeActiveBg: "#0369a1",
    badgeActiveFg: "#e0f2fe",
    badgeBg: "#0f1f3d",
    badgeFg: "#38bdf8",
    selectedBorder: "#38bdf8",
    detailBg: "rgba(3, 20, 50, 0.95)",
  },
  experience: {
    category: "EXPERIENCE",
    dominantBg: "linear-gradient(160deg, #1e1a2e 0%, #3d3468 50%, #7b6ea8 100%)",
    accentColor: "#c9b8f0",
    textColor: "light",
    rowBg: "#2a2340",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#ddd6fe",
    rowBorder: "rgba(201,184,240,0.25)",
    badgeActiveBg: "#6d5fa0",
    badgeActiveFg: "#f3eeff",
    badgeBg: "#362d58",
    badgeFg: "#ddd6fe",
    selectedBorder: "#c9b8f0",
    detailBg: "rgba(28, 22, 50, 0.95)",
  },
  projects: {
    category: "PROJECTS",
    dominantBg: "linear-gradient(160deg, #001a1f 0%, #003d4a 50%, #0e7490 100%)",
    accentColor: "#22d3ee",
    textColor: "light",
    rowBg: "#00252e",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#67e8f9",
    rowBorder: "rgba(34,211,238,0.25)",
    badgeActiveBg: "#0e7490",
    badgeActiveFg: "#cffafe",
    badgeBg: "#003a47",
    badgeFg: "#22d3ee",
    selectedBorder: "#22d3ee",
    detailBg: "rgba(0, 25, 32, 0.95)",
  },
  connections: {
    category: "LINKS",
    dominantBg: "linear-gradient(160deg, #0a1628 0%, #0e2a4a 50%, #1a4a6e 100%)",
    accentColor: "#a8d8ea",
    textColor: "light",
    rowBg: "#0d2038",
    rowText: "#ffffff",
    rowSubtext: "rgba(255,255,255,0.5)",
    rowIconColor: "#bde8f5",
    rowBorder: "rgba(168,216,234,0.25)",
    badgeActiveBg: "#1a4a6e",
    badgeActiveFg: "#e0f4fc",
    badgeBg: "#102840",
    badgeFg: "#bde8f5",
    selectedBorder: "#a8d8ea",
    detailBg: "rgba(8, 18, 35, 0.95)",
  },
};

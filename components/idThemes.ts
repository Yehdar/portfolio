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
    dominantBg: "linear-gradient(160deg, #78350f 0%, #9a3412 35%, #1e3a5f 100%)",
    cardGradient: "linear-gradient(160deg, #f59e0b 0%, #ea580c 40%, #c2410c 70%, #1e3a5f 100%)",
    accentColor: "#f59e0b",
    textColor: "light",
    rowBg: "#1a1206",
    rowText: "#fef3c7",
    rowSubtext: "#92400e",
    rowIconColor: "#fbbf24",
    rowBorder: "#2d1f08",
    rowHover: "#261a08",
    badgeActiveBg: "#92400e",
    badgeActiveFg: "#fef3c7",
    badgeBg: "#2d1f08",
    badgeFg: "#d97706",
    selectedBorder: "#f59e0b",
  },
  experience: {
    category: "EXPERIENCE",
    dominantBg: "linear-gradient(160deg, #0f2744 0%, #1e3a5f 50%, #1e3a5f 100%)",
    cardGradient: "linear-gradient(160deg, #0f4c81 0%, #1d4ed8 40%, #2563eb 70%, #bfdbfe 100%)",
    accentColor: "#2563eb",
    textColor: "light",
    rowBg: "#0a0f1a",
    rowText: "#dbeafe",
    rowSubtext: "#1e40af",
    rowIconColor: "#60a5fa",
    rowBorder: "#0f1f3d",
    rowHover: "#0d1a35",
    badgeActiveBg: "#1e40af",
    badgeActiveFg: "#dbeafe",
    badgeBg: "#0f1f3d",
    badgeFg: "#3b82f6",
    selectedBorder: "#2563eb",
  },
  projects: {
    category: "PROJECTS",
    dominantBg: "linear-gradient(160deg, #1a0533 0%, #4c1d95 40%, #7c2d12 100%)",
    cardGradient: "linear-gradient(160deg, #7c3aed 0%, #a855f7 30%, #ea580c 70%, #fbbf24 100%)",
    accentColor: "#a855f7",
    textColor: "light",
    rowBg: "#120820",
    rowText: "#f3e8ff",
    rowSubtext: "#6b21a8",
    rowIconColor: "#c084fc",
    rowBorder: "#1e0d35",
    rowHover: "#1a0b2e",
    badgeActiveBg: "#6b21a8",
    badgeActiveFg: "#f3e8ff",
    badgeBg: "#1e0d35",
    badgeFg: "#a855f7",
    selectedBorder: "#a855f7",
  },
  connections: {
    category: "LINKS",
    dominantBg: "linear-gradient(160deg, #052e16 0%, #14532d 50%, #4a044e 100%)",
    cardGradient: "linear-gradient(160deg, #f9a8d4 0%, #fbcfe8 25%, #86efac 65%, #14532d 100%)",
    accentColor: "#4ade80",
    textColor: "light",
    rowBg: "#061208",
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

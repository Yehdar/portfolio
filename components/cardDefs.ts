import { ComponentType } from "react";

export interface CardDef {
  id: string;
  label: string;
  placeholder?: boolean;
}

export const CARDS: CardDef[] = [
  { id: "connections", label: "Links"      },
  { id: "projects",    label: "Projects"   },
  { id: "experience",  label: "Experience" },
  { id: "about",       label: "About Me"   },
];

export type CardProps = { desktop?: boolean; expanded?: boolean };
export type CardComp  = ComponentType<CardProps>;

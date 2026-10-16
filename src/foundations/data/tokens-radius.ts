/**
 * Tokens de rayon de bordure extraits de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "⚪ 3.1 Tokens/Radius — Web", mode "Value").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * Chaque token alias une primitive de la collection Primitives/Size
 * (Size-N, N en pixels) ; la primitive résolue est indiquée dans `primitive`.
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface RadiusToken {
  name: string;
  description: string;
  px: number;
  primitive: string;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  { name: "none", description: "Angles droits", px: 0, primitive: "Size-0" },
  { name: "xs", description: "Micro-arrondi — contrôles fins (chips, tags)", px: 4, primitive: "Size-4" },
  { name: "sm", description: "Arrondi standard — inputs, boutons", px: 8, primitive: "Size-8" },
  { name: "md", description: "Arrondi médian — cards, panneaux", px: 12, primitive: "Size-12" },
  { name: "lg", description: "Arrondi ample — modales, dialogs", px: 16, primitive: "Size-16" },
  { name: "xl", description: "Arrondi prononcé — hero, containers marketing", px: 24, primitive: "Size-24" },
  { name: "2xl", description: "Arrondi très prononcé — usages exceptionnels", px: 32, primitive: "Size-32" },
  { name: "pill", description: "Pill / full — avatars, boutons pill, chips ronds", px: 999, primitive: "Size-999" },
];

/**
 * Styles de texte "Web" extraits de la librairie Figma "Fondamentaux v0.1"
 * (styles de texte locaux, préfixe "Web/"). Les variantes Android et Apple
 * (iOS) de la même bibliothèque sont explicitement hors scope.
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * Chaque style est un token composite construit uniquement à partir des
 * primitives typographiques (voir primitives-typography.ts) : fontFamily
 * (toujours Manrope pour le Web), fontWeight, fontSize, lineHeight.
 * Letter-spacing est 0 sur tous les styles Web ; text-case est "original"
 * (pas de transformation de casse).
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface TextStyleToken {
  name: string;
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  textDecoration: "NONE" | "UNDERLINE";
}

export interface TextStyleTier {
  name: string;
  styles: TextStyleToken[];
}

function tier(name: string, fontSize: number, lineHeight: number): TextStyleTier {
  return {
    name,
    styles: [
      { name: "Regular", fontFamily: "Manrope", fontWeight: 400, fontSize, lineHeight, textDecoration: "NONE" },
      { name: "Regular Underline", fontFamily: "Manrope", fontWeight: 400, fontSize, lineHeight, textDecoration: "UNDERLINE" },
      { name: "Emphasized", fontFamily: "Manrope", fontWeight: 700, fontSize, lineHeight, textDecoration: "NONE" },
      { name: "Emphasized Underline", fontFamily: "Manrope", fontWeight: 700, fontSize, lineHeight, textDecoration: "UNDERLINE" },
    ],
  };
}

export const DISPLAY_TIERS: TextStyleTier[] = [
  tier("XL", 80, 120),
  tier("LG", 72, 108),
  tier("MD", 64, 96),
  tier("SM", 56, 84),
  tier("XS", 48, 72),
];

export const TITLE_STYLES: TextStyleToken[] = [
  { name: "H1", fontFamily: "Manrope", fontWeight: 700, fontSize: 40, lineHeight: 60, textDecoration: "NONE" },
  { name: "H2", fontFamily: "Manrope", fontWeight: 700, fontSize: 32, lineHeight: 48, textDecoration: "NONE" },
  { name: "H3", fontFamily: "Manrope", fontWeight: 700, fontSize: 28, lineHeight: 42, textDecoration: "NONE" },
  { name: "H4", fontFamily: "Manrope", fontWeight: 700, fontSize: 24, lineHeight: 36, textDecoration: "NONE" },
  { name: "H5", fontFamily: "Manrope", fontWeight: 700, fontSize: 22, lineHeight: 32, textDecoration: "NONE" },
  { name: "H6", fontFamily: "Manrope", fontWeight: 700, fontSize: 20, lineHeight: 30, textDecoration: "NONE" },
];

export const BODY_TIERS: TextStyleTier[] = [
  tier("XL", 20, 30),
  tier("LG", 18, 27),
  tier("MD", 16, 24),
  tier("SM", 14, 21),
  tier("XS", 12, 18),
];

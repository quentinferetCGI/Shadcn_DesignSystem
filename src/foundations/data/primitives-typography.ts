/**
 * Primitives typographiques extraites de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "Primitives/Typography", mode "Value").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * Seules les variables LineHeight NewSNCF/* sont reprises : les variables
 * LineHeight (Legacy)/* existent dans la même collection mais sont hors
 * scope (ancien système, en cours de remplacement).
 *
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface FontFamilyToken {
  name: string;
  value: string;
}

export interface FontStyleToken {
  name: string;
  value: string;
}

export interface FontWeightToken {
  name: string;
  value: number;
}

export const FONT_FAMILIES: FontFamilyToken[] = [
  { name: "Avenir LT Std", value: "Avenir LT Std" },
  { name: "Manrope", value: "Manrope" },
  { name: "Achemine", value: "Achemine" },
];

export const FONT_STYLES: FontStyleToken[] = [
  { name: "Normal", value: "normal" },
  { name: "Italic", value: "italic" },
];

export const FONT_WEIGHTS: FontWeightToken[] = [
  { name: "Light", value: 300 },
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "Semibold", value: 600 },
  { name: "Bold", value: 700 },
  { name: "Extrabold", value: 800 },
  { name: "Black", value: 900 },
];

/** Chaque valeur correspond à une variable FontSize/<px> (px en 0-1 ratio direct). */
export const FONT_SIZES: number[] = [
  12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160,
];

/** Chaque valeur correspond à une variable LineHeight NewSNCF/<px>. */
export const LINE_HEIGHTS: number[] = [
  16, 18, 20, 21, 24, 27, 28, 30, 32, 33, 36, 42, 48, 54, 60, 64, 66, 72, 84, 96, 108, 120, 144,
  168, 192, 216, 240,
];

/**
 * Primitives d'ombre extraites de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "Primitives/Shadow").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * 5 paliers d'opacité d'une même couleur neutre (#202020), du plus léger
 * (012 = 12%) au plus marqué (025 = 25%). C'est la couleur brute dans
 * laquelle puisent les ombres portées (effect styles Desktop/0…4,
 * App/Shadow/*) — pas encore une ombre composée (offset, flou, étendue).
 *
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface PrimitiveShadow {
  name: string;
  figmaVariable: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export const PRIMITIVE_SHADOWS: PrimitiveShadow[] = [
  { name: "Neutral/012", figmaVariable: "VariableID:2453:118", r: 0.125, g: 0.125, b: 0.125, a: 0.12 },
  { name: "Neutral/015", figmaVariable: "VariableID:2455:117", r: 0.125, g: 0.125, b: 0.125, a: 0.15 },
  { name: "Neutral/018", figmaVariable: "VariableID:2455:118", r: 0.125, g: 0.125, b: 0.125, a: 0.18 },
  { name: "Neutral/020", figmaVariable: "VariableID:2455:119", r: 0.125, g: 0.125, b: 0.125, a: 0.2 },
  { name: "Neutral/025", figmaVariable: "VariableID:2455:120", r: 0.125, g: 0.125, b: 0.125, a: 0.25 },
];

export function toRgba({ r, g, b, a }: PrimitiveShadow): string {
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}

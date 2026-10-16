/**
 * Tokens d'espacement extraits de la librairie Figma "Fondamentaux v0.1"
 * (collection de variables "📏 4 Tokens/Spacing", mode "Value").
 *
 * https://www.figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
 *
 * 4 catégories d'usage : Inline (padding interne), Stack (espace entre
 * éléments proches), Layout (respiration entre sections) et Negative
 * (chevauchement volontaire). Chaque token alias une primitive de taille
 * (Size-N, N en pixels, négatif pour Negative).
 * Valeurs figées au moment de l'extraction — à resynchroniser manuellement
 * si la librairie Figma évolue.
 */

export interface SpacingToken {
  name: string;
  px: number;
  usage: string;
  primitive: string;
}

export interface SpacingCategory {
  name: string;
  description: string;
  tokens: SpacingToken[];
}

export const SPACING_CATEGORIES: SpacingCategory[] = [
  {
    name: "Inline",
    description: "Padding interne d'un élément (haut, bas, gauche, droite).",
    tokens: [
      { name: "2xs", px: 2, usage: "Padding minimal, comme dans un badge ou un indicateur compact.", primitive: "Size-2" },
      { name: "xs", px: 4, usage: "Padding serré, comme dans une chip ou un petit bouton icône.", primitive: "Size-4" },
      { name: "sm", px: 8, usage: "Padding vertical standard d'un bouton medium, ou padding d'un champ compact.", primitive: "Size-8" },
      { name: "md", px: 12, usage: "Padding horizontal standard d'un bouton medium, ou padding confortable d'un champ de saisie.", primitive: "Size-12" },
      { name: "lg", px: 16, usage: "Padding d'un bouton large, ou padding horizontal d'une carte.", primitive: "Size-16" },
      { name: "xl", px: 24, usage: "Padding généreux d'une grande carte ou d'un bloc hero.", primitive: "Size-24" },
    ],
  },
  {
    name: "Stack",
    description: "Espace entre éléments proches, alignés côte à côte ou empilés.",
    tokens: [
      { name: "2xs", px: 4, usage: "Espace minimal entre deux éléments très liés, comme un label et son texte d'aide.", primitive: "Size-4" },
      { name: "xs", px: 8, usage: "Espace serré entre les options d'un groupe de cases à cocher ou de boutons radio, ou entre deux actions rapprochées.", primitive: "Size-8" },
      { name: "sm", px: 16, usage: "Espace standard entre les champs d'un formulaire, les lignes d'une liste, ou des actions alignées horizontalement.", primitive: "Size-16" },
      { name: "md", px: 24, usage: "Espace confortable entre les sous-sections d'une carte.", primitive: "Size-24" },
      { name: "lg", px: 32, usage: "Espace ample entre les blocs d'une même section.", primitive: "Size-32" },
      { name: "xl", px: 48, usage: "Espace large entre des blocs importants.", primitive: "Size-48" },
    ],
  },
  {
    name: "Layout",
    description: "Respiration entre sections de page.",
    tokens: [
      { name: "sm", px: 64, usage: "Rapproche deux sections voisines.", primitive: "Size-64" },
      { name: "md", px: 96, usage: "Sépare deux sections standard.", primitive: "Size-96" },
      { name: "lg", px: 128, usage: "Espace deux sections bien distinctes.", primitive: "Size-128" },
      { name: "xl", px: 160, usage: "Grande respiration, en haut de page ou entre deux blocs majeurs (hero break).", primitive: "Size-160" },
    ],
  },
  {
    name: "Negative",
    description: "Chevauchement volontaire entre éléments.",
    tokens: [
      { name: "sm", px: -4, usage: "Léger recouvrement pour un ajustement optique fin.", primitive: "Size-Negative-4" },
      { name: "md", px: -8, usage: "Recouvrement moyen, typique d'une pile d'avatars.", primitive: "Size-Negative-8" },
      { name: "lg", px: -16, usage: "Recouvrement prononcé, pour un chevauchement marqué entre composants marketing.", primitive: "Size-Negative-16" },
    ],
  },
];

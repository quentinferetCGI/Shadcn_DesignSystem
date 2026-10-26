import type { FoundationPage } from "./types";
import { TypographyPage } from "./pages/typography";
import { PrimitivesColorsPage } from "./pages/primitives-colors";
import { PrimitivesTypographyPage } from "./pages/primitives-typography";
import { PrimitivesShadowPage } from "./pages/primitives-shadow";
import { TokensPage } from "./pages/tokens";
import { TokensRadiusPage } from "./pages/tokens-radius";
import { TokensSpacingPage } from "./pages/tokens-spacing";
import { SpacingPage } from "./pages/spacing";
import { MockupsPage } from "./pages/mockups";
import { ImageRatiosPage } from "./pages/image-ratios";

export const foundations: FoundationPage[] = [
  {
    slug: "fondamentaux-typographie",
    name: "Typographie",
    description: "Police, échelle de tailles et graisses disponibles.",
    render: TypographyPage,
  },
  {
    slug: "fondamentaux-primitives-couleurs",
    name: "Primitives Couleurs",
    description: "Nuancier de marque brut (Figma NewSNCF).",
    render: PrimitivesColorsPage,
  },
  {
    slug: "fondamentaux-primitives-typographie",
    name: "Primitives Typographie",
    description: "Familles, styles, graisses, tailles et hauteurs de ligne brutes (Figma).",
    render: PrimitivesTypographyPage,
  },
  {
    slug: "fondamentaux-primitives-shadow",
    name: "Primitives Shadow",
    description: "Couleur d'ombre brute et ses paliers d'opacité (Figma).",
    render: PrimitivesShadowPage,
  },
  {
    slug: "fondamentaux-tokens-color",
    name: "Tokens Color",
    description: "Couche sémantique : tokens Figma (Cobalt) et tokens du code.",
    render: TokensPage,
  },
  {
    slug: "fondamentaux-tokens-radius",
    name: "Tokens Radius",
    description: "Échelle de rayons de bordure sémantique (Figma).",
    render: TokensRadiusPage,
  },
  {
    slug: "fondamentaux-tokens-spacing",
    name: "Tokens Spacing",
    description: "Échelle d'espacement sémantique (Figma).",
    render: TokensSpacingPage,
  },
  {
    slug: "fondamentaux-espacements",
    name: "Espacements",
    description: "Échelle d'espacement et rayons de bordure.",
    render: SpacingPage,
  },
  {
    slug: "fondamentaux-mockups",
    name: "Mockups",
    description: "Seuils de rupture et cadres d'appareils de référence.",
    render: MockupsPage,
  },
  {
    slug: "fondamentaux-ratios-image",
    name: "Ratios d'image",
    description: "Formats d'image universels recommandés.",
    render: ImageRatiosPage,
  },
];

export type { FoundationPage };

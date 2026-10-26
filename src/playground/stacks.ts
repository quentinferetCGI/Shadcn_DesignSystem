/**
 * Technologie sous-jacente de chaque composant, déterminée à partir des
 * imports du fichier source dans src/components/ui/ :
 * - "Radix" : construit directement sur une primitive Radix UI (radix-ui).
 * - "React" : construit sur une autre librairie React tierce (non Radix) —
 *   embla-carousel-react, recharts, cmdk, vaul, input-otp, react-day-picker,
 *   react-resizable-panels, sonner...
 * - "Base" : React/HTML natif uniquement (éventuellement avec `Slot` de
 *   radix-ui pour le pattern `asChild`, ou class-variance-authority pour les
 *   variantes), sans librairie headless externe.
 */

export type ComponentStack = "Base" | "React" | "Radix";

export const COMPONENT_STACK: Record<string, ComponentStack> = {
  // Radix UI
  accordion: "Radix",
  "alert-dialog": "Radix",
  "aspect-ratio": "Radix",
  avatar: "Radix",
  checkbox: "Radix",
  collapsible: "Radix",
  "context-menu": "Radix",
  dialog: "Radix",
  "dropdown-menu": "Radix",
  "hover-card": "Radix",
  label: "Radix",
  menubar: "Radix",
  "navigation-menu": "Radix",
  popover: "Radix",
  progress: "Radix",
  "radio-group": "Radix",
  "scroll-area": "Radix",
  select: "Radix",
  separator: "Radix",
  sheet: "Radix",
  slider: "Radix",
  switch: "Radix",
  tabs: "Radix",
  "toggle-group": "Radix",
  toggle: "Radix",
  tooltip: "Radix",

  // Librairie React tierce (non Radix)
  "date-range-picker": "React",
  "input-otp": "React",
  resizable: "React",
  carousel: "React",
  calendar: "React",
  chart: "React",
  drawer: "React",
  command: "React",
  sonner: "React",

  // React/HTML natif
  button: "Base",
  badge: "Base",
  input: "Base",
  textarea: "Base",
  "segmented-control": "Base",
  "native-select": "Base",
  "multi-select": "Base",
  "file-upload": "Base",
  "input-group": "Base",
  field: "Base",
  form: "Base",
  card: "Base",
  skeleton: "Base",
  spinner: "Base",
  table: "Base",
  kbd: "Base",
  item: "Base",
  empty: "Base",
  "button-group": "Base",
  "side-panel": "Base",
  "internal-link": "Base",
  "external-link": "Base",
  "download-link": "Base",
  "inline-link": "Base",
  breadcrumb: "Base",
  pagination: "Base",
  sidebar: "Base",
  alert: "Base",
};

export function getComponentStack(slug: string): ComponentStack | undefined {
  return COMPONENT_STACK[slug];
}

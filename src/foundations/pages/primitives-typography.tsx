import { PageHeader, Section, Callout } from "../ui";
import {
  FONT_FAMILIES,
  FONT_STYLES,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
} from "../data/primitives-typography";

const LOADED_FAMILIES = new Set(["Manrope"]);

function FontFamilyRow() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      {FONT_FAMILIES.map((f) => (
        <div key={f.name} className="flex items-center justify-between gap-4 px-5 py-4">
          <span className="text-lg" style={{ fontFamily: `"${f.value}", sans-serif` }}>
            {f.name} — Aa Bb Cc
          </span>
          <div className="flex items-center gap-2">
            <code className="text-muted-foreground font-mono text-xs">{f.value}</code>
            {!LOADED_FAMILIES.has(f.value) && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:text-amber-400">
                Non chargée
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FontStyleRow() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      {FONT_STYLES.map((s) => (
        <div key={s.name} className="flex items-center justify-between gap-4 px-5 py-4">
          <span className="font-manrope text-lg" style={{ fontStyle: s.value }}>
            Composer une interface claire
          </span>
          <code className="text-muted-foreground font-mono text-xs">{s.value}</code>
        </div>
      ))}
    </div>
  );
}

function FontWeightRow() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      {FONT_WEIGHTS.map((w) => (
        <div key={w.name} className="flex items-center justify-between gap-4 px-5 py-4">
          <span className="font-manrope text-lg" style={{ fontWeight: w.value }}>
            Aa Bb Cc 123
          </span>
          <div className="flex items-center gap-3">
            <code className="text-muted-foreground font-mono text-xs">{w.name}</code>
            <span className="text-muted-foreground text-xs tabular-nums">{w.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FontSizeRow() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      {FONT_SIZES.map((px) => (
        <div key={px} className="flex items-baseline justify-between gap-4 px-5 py-3">
          <span className="font-manrope truncate" style={{ fontSize: px }}>
            Aa Bb Cc
          </span>
          <code className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">{px}px</code>
        </div>
      ))}
    </div>
  );
}

function LineHeightRow() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      {LINE_HEIGHTS.map((px) => (
        <div key={px} className="flex items-center gap-4 px-5 py-2">
          <code className="text-foreground w-14 shrink-0 font-mono text-xs">{px}px</code>
          <div className="bg-primary h-2 shrink-0 rounded-sm" style={{ width: px }} />
        </div>
      ))}
    </div>
  );
}

function PrimitivesTypographyPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Primitives Typographie"
        description="Valeurs brutes de typographie — familles, styles, graisses, tailles et hauteurs de ligne — avant toute signification d'usage. Équivalent, côté police, de la page Primitives Couleurs."
      />

      <Section
        title="Familles (FontFamily)"
        description="3 familles déclarées dans la librairie. Seule Manrope est chargée via Google Fonts dans ce projet (voir la page Typographie) ; les deux autres s'affichent avec la police système de secours."
      >
        <FontFamilyRow />
      </Section>

      <Section title="Styles (FontStyle)" description="Rendu avec font-manrope.">
        <FontStyleRow />
      </Section>

      <Section
        title="Graisses (FontWeight)"
        description="7 paliers, de Light (300) à Black (900). Rendu avec font-manrope — seuls les poids 400 et 700 sont réellement chargés (voir la page Typographie) : les autres s'affichent en faux-gras ou retombent sur 400/700 selon le navigateur."
      >
        <FontWeightRow />
      </Section>

      <Section
        title="Tailles (FontSize)"
        description="22 paliers, de 12px à 160px. Échelle brute de la librairie — plus fine que l'échelle text-xs…text-4xl de Tailwind utilisée dans le reste du code (voir Typographie)."
      >
        <FontSizeRow />
      </Section>

      <Section
        title="Hauteurs de ligne (LineHeight NewSNCF)"
        description="27 paliers, de 16px à 240px. Seules les variables NewSNCF sont reprises ici ; les variables LineHeight (Legacy) de la même collection sont hors scope."
      >
        <LineHeightRow />
      </Section>

      <Callout>
        Source :{" "}
        <code className="text-foreground font-mono text-xs">
          figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
        </code>{" "}
        — collection <code className="text-foreground font-mono text-xs">Primitives/Typography</code>,
        mode <code className="text-foreground font-mono text-xs">Value</code>. Valeurs figées lors de
        l'extraction (
        <code className="text-foreground font-mono text-xs">
          src/foundations/data/primitives-typography.ts
        </code>
        ) — à resynchroniser manuellement si la librairie évolue. Pas (encore) câblées dans le code.
      </Callout>
    </div>
  );
}

export { PrimitivesTypographyPage };

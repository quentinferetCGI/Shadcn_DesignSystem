import { PageHeader, Section, Callout } from "../ui";
import { PRIMITIVE_SHADOWS, toRgba } from "../data/primitives-shadow";

function SwatchRow() {
  return (
    <div className="flex flex-wrap gap-3">
      {PRIMITIVE_SHADOWS.map((s) => (
        <div key={s.figmaVariable} className="flex w-28 flex-col gap-1.5">
          <div className="border-border h-12 rounded-md border" style={{ background: toRgba(s) }} />
          <div className="flex flex-col">
            <code className="text-foreground font-mono text-[11px]">{s.name}</code>
            <span className="text-muted-foreground font-mono text-[10px]">{toRgba(s)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ShadowPreviewRow() {
  return (
    <div className="bg-muted/40 flex flex-wrap gap-6 rounded-lg p-8">
      {PRIMITIVE_SHADOWS.map((s) => (
        <div key={s.figmaVariable} className="flex flex-col items-center gap-2">
          <div
            className="bg-card flex size-20 items-center justify-center rounded-lg text-xs font-medium"
            style={{ boxShadow: `0 4px 12px 0 ${toRgba(s)}` }}
          >
            {s.name.split("/")[1]}
          </div>
          <code className="text-muted-foreground font-mono text-[10px]">{s.name}</code>
        </div>
      ))}
    </div>
  );
}

function PrimitivesShadowPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Primitives Shadow"
        description="Couleur d'ombre brute, avant toute composition en ombre portée. 5 paliers d'opacité d'une même couleur neutre (#202020) — c'est la matière première dans laquelle puisent les effect styles d'ombre (Desktop/0…4, App/Shadow/*), au même titre que les primitives couleurs pour les tokens de couleur."
      />

      <Section
        title="Opacité (Neutral)"
        description="5 paliers, du plus léger (012 = 12 %) au plus marqué (025 = 25 %)."
      >
        <SwatchRow />
      </Section>

      <Section
        title="Aperçu en tant qu'ombre portée"
        description="Même couleur appliquée en box-shadow, pour visualiser l'effet réel de chaque palier."
      >
        <ShadowPreviewRow />
      </Section>

      <Callout>
        Source :{" "}
        <code className="text-foreground font-mono text-xs">
          figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
        </code>{" "}
        — collection de variables{" "}
        <code className="text-foreground font-mono text-xs">Primitives/Shadow</code>. Valeurs figées lors
        de l'extraction (
        <code className="text-foreground font-mono text-xs">src/foundations/data/primitives-shadow.ts</code>
        ). Pas (encore) câblées dans le code — ni en variables CSS, ni en tokens d'ombre composés
        (offset, flou, étendue).
      </Callout>
    </div>
  );
}

export { PrimitivesShadowPage };

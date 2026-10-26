import { PageHeader, Section, Callout } from "../ui";
import { DISPLAY_TIERS, TITLE_STYLES, BODY_TIERS, type TextStyleToken, type TextStyleTier } from "../data/text-styles";

function StyleRow({ style, label }: { style: TextStyleToken; label: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
      <span
        style={{
          fontFamily: `"${style.fontFamily}", sans-serif`,
          fontWeight: style.fontWeight,
          fontSize: style.fontSize,
          lineHeight: `${style.lineHeight}px`,
          textDecoration: style.textDecoration === "UNDERLINE" ? "underline" : "none",
        }}
      >
        Composer une interface claire
      </span>
      <div className="text-muted-foreground flex shrink-0 flex-wrap items-center gap-3 text-xs tabular-nums">
        <code className="text-foreground font-mono">{label}</code>
        <span>{style.fontWeight}</span>
        <span>{style.fontSize}px</span>
        <span>lh {style.lineHeight}px</span>
      </div>
    </div>
  );
}

function TierSection({ tiers }: { tiers: TextStyleTier[] }) {
  return (
    <div className="flex flex-col gap-6">
      {tiers.map((t) => (
        <div key={t.name} className="flex flex-col gap-2">
          <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{t.name}</span>
          <div className="border-border divide-border divide-y rounded-lg border">
            {t.styles.map((s) => (
              <StyleRow key={s.name} style={s} label={s.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TypographyPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Typographie"
        description="Styles de texte « Web » de la librairie Figma « Fondamentaux v0.1 » : des tokens composites (famille, graisse, taille, hauteur de ligne) construits uniquement à partir des primitives typographiques — voir Primitives Typographie. Les variantes Android et Apple (iOS) de la même bibliothèque ne sont pas reprises ici."
      />

      <Callout>
        Tous les styles Web utilisent <code className="text-foreground font-mono text-xs">Manrope</code>,
        seule famille chargée dans ce projet (voir la page Primitives Typographie), et uniquement les
        poids 400 (Regular) et 700 (Emphasized) — les seuls réellement embarqués via Google Fonts. Letter
        spacing est 0 sur tous les styles ; aucune transformation de casse.
      </Callout>

      <Section
        title="Display"
        description="Grands titres (hero, pages d'accueil). 5 paliers (XL → XS), chacun décliné en 4 variantes : Regular / Regular Underline / Emphasized / Emphasized Underline."
      >
        <TierSection tiers={DISPLAY_TIERS} />
      </Section>

      <Section
        title="Title"
        description="Titres de section (H1 → H6), toujours en graisse Emphasized (700), sans variante soulignée."
      >
        <div className="border-border divide-border divide-y rounded-lg border">
          {TITLE_STYLES.map((s) => (
            <StyleRow key={s.name} style={s} label={s.name} />
          ))}
        </div>
      </Section>

      <Section
        title="Body"
        description="Texte courant. 5 paliers (XL → XS), chacun décliné en 4 variantes : Regular / Regular Underline / Emphasized / Emphasized Underline."
      >
        <TierSection tiers={BODY_TIERS} />
      </Section>

      <Callout>
        Source :{" "}
        <code className="text-foreground font-mono text-xs">
          figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
        </code>{" "}
        — styles de texte locaux, préfixe <code className="text-foreground font-mono text-xs">Web/</code>.
        46 styles au total (
        <code className="text-foreground font-mono text-xs">src/foundations/data/text-styles.ts</code>
        ). Pas (encore) câblés dans le code sous forme de classes ou composants réutilisables.
      </Callout>
    </div>
  );
}

export { TypographyPage };

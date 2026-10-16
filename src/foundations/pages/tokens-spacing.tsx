import { PageHeader, Section, Callout } from "../ui";
import { SPACING_CATEGORIES, type SpacingToken } from "../data/tokens-spacing";

function PositiveRow({ token }: { token: SpacingToken }) {
  return (
    <div className="flex items-center gap-4 px-1 py-2" title={token.usage}>
      <div className="flex w-16 shrink-0 items-center gap-2">
        <code className="text-foreground font-mono text-xs">{token.name}</code>
      </div>
      <div className="bg-primary h-3 shrink-0 rounded-sm" style={{ width: token.px }} />
      <div className="text-muted-foreground flex shrink-0 items-center gap-3 text-xs tabular-nums">
        <span>{token.px}px</span>
        <span className="text-muted-foreground/70 font-mono">→ {token.primitive}</span>
      </div>
      <span className="text-muted-foreground hidden flex-1 truncate text-xs sm:block">{token.usage}</span>
    </div>
  );
}

function NegativeRow({ token }: { token: SpacingToken }) {
  const overlap = Math.abs(token.px);
  return (
    <div className="flex items-center gap-4 px-1 py-2" title={token.usage}>
      <div className="flex w-16 shrink-0 items-center gap-2">
        <code className="text-foreground font-mono text-xs">{token.name}</code>
      </div>
      <div className="flex h-8 w-20 shrink-0 items-center">
        <div className="bg-primary size-8 rounded-full ring-2 ring-background" />
        <div
          className="bg-primary/60 size-8 rounded-full ring-2 ring-background"
          style={{ marginLeft: -overlap }}
        />
      </div>
      <div className="text-muted-foreground flex shrink-0 items-center gap-3 text-xs tabular-nums">
        <span>{token.px}px</span>
        <span className="text-muted-foreground/70 font-mono">→ {token.primitive}</span>
      </div>
      <span className="text-muted-foreground hidden flex-1 truncate text-xs sm:block">{token.usage}</span>
    </div>
  );
}

function TokensSpacingPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Tokens Spacing"
        description="Échelle d'espacement sémantique, en 4 catégories d'usage (Inline, Stack, Layout, Negative). Couche cible issue de Figma — voir la page Espacements pour l'échelle brute p-*/gap-* réellement utilisée dans le code aujourd'hui."
      />

      {SPACING_CATEGORIES.map((category) => (
        <Section key={category.name} title={category.name} description={category.description}>
          <div className="border-border divide-border divide-y rounded-lg border">
            {category.tokens.map((t) =>
              category.name === "Negative" ? (
                <NegativeRow key={t.name} token={t} />
              ) : (
                <PositiveRow key={t.name} token={t} />
              )
            )}
          </div>
        </Section>
      ))}

      <Callout>
        Source :{" "}
        <code className="text-foreground font-mono text-xs">
          figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
        </code>{" "}
        — collection <code className="text-foreground font-mono text-xs">📏 4 Tokens/Spacing</code>,
        mode <code className="text-foreground font-mono text-xs">Value</code>. 19 tokens, chacun aliasant
        une primitive de taille (
        <code className="text-foreground font-mono text-xs">
          src/foundations/data/tokens-spacing.ts
        </code>
        ). Pas (encore) câblés dans le code — les classes Tailwind p-*/gap-* restent l'échelle
        actuellement utilisée (voir Espacements).
      </Callout>
    </div>
  );
}

export { TokensSpacingPage };

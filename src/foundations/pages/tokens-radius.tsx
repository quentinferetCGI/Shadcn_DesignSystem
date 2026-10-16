import { PageHeader, Section, Callout } from "../ui";
import { cn } from "@/lib/utils";
import { RADIUS_TOKENS, type RadiusToken } from "../data/tokens-radius";

function RadiusCard({ token }: { token: RadiusToken }) {
  const isPill = token.name === "pill";
  return (
    <div className="flex flex-col gap-2" title={token.description}>
      <div
        className={cn(
          "bg-muted border-border flex items-center justify-center border",
          isPill ? "h-12 w-24" : "size-20"
        )}
        style={{ borderRadius: token.px > 64 ? 9999 : token.px }}
      />
      <div className="flex flex-col">
        <code className="text-foreground font-mono text-sm">{token.name}</code>
        <span className="text-muted-foreground font-mono text-xs">
          {token.px}px
        </span>
        <span className="text-muted-foreground/70 font-mono text-[10px]">→ {token.primitive}</span>
        <span className="text-muted-foreground mt-1 text-xs">{token.description}</span>
      </div>
    </div>
  );
}

function TokensRadiusPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Tokens Radius"
        description="Échelle de rayons de bordure sémantique : 8 paliers nommés (none → pill), chacun avec un usage recommandé. Couche cible issue de Figma — voir la page Espacements pour ce qui est réellement câblé dans globals.css aujourd'hui (--radius et ses 4 dérivés)."
      />

      <Section
        title="Rayons (Web)"
        description="Extrait de la collection de variables « ⚪ 3.1 Tokens/Radius — Web » de la librairie Fondamentaux v0.1, mode Value."
      >
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-5">
          {RADIUS_TOKENS.map((t) => (
            <RadiusCard key={t.name} token={t} />
          ))}
        </div>
        <Callout>
          Source :{" "}
          <code className="text-foreground font-mono text-xs">
            figma.com/design/5e6pOrFc8dZ6QzdYUGsQ4B/Fondamentaux-v0.1
          </code>{" "}
          — collection <code className="text-foreground font-mono text-xs">⚪ 3.1 Tokens/Radius — Web</code>,
          mode <code className="text-foreground font-mono text-xs">Value</code>. Chaque token alias une
          primitive de taille (
          <code className="text-foreground font-mono text-xs">
            src/foundations/data/tokens-radius.ts
          </code>
          ). Pas (encore) câblés dans globals.css.
        </Callout>
      </Section>
    </div>
  );
}

export { TokensRadiusPage };

import { CopyButton } from "@/components/copy-button"
import { Kicker, Lead, Title } from "@/components/book/kicker"
import { coreColors, cssTokens, supportColors } from "@/content/brand"

function Band({
  name,
  hex,
  ink,
  role,
  use,
}: {
  name: string
  hex: string
  ink: "dark" | "light"
  role: string
  use: string
}) {
  const dark = ink === "dark"
  return (
    <article
      className="grid gap-4 px-5 py-8 md:grid-cols-12 md:items-end md:px-10 md:py-10"
      style={{ background: hex, color: dark ? "#12100E" : "#FBF8F4" }}
    >
      <div className="md:col-span-4">
        <h3 className="font-display text-4xl tracking-[-0.02em] md:text-5xl">{name}</h3>
        <p className="mt-2 font-mono text-sm tracking-[0.1em]">{hex}</p>
      </div>
      <p className="text-base leading-relaxed text-pretty md:col-span-5 md:text-lg">{role}</p>
      <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
        <p className="text-sm leading-relaxed md:text-right">{use}</p>
        <CopyButton
          value={hex}
          label="Copiar"
          toastMessage={`${name} copiado · ${hex}`}
          variant={dark ? "outline" : "secondary"}
          className={dark ? "border-onix/30 bg-transparent text-onix hover:bg-onix hover:text-crema" : ""}
        />
      </div>
    </article>
  )
}

export function Palette() {
  return (
    <section id="color" className="scroll-mt-20 border-t border-onix/10 xl:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <Kicker n="02">Colores</Kicker>
        <Title>Cuatro colores, y casi todo es marfil.</Title>
        <Lead>
          El texto va en ónix sobre marfil. El granate se usa poco y el bronce es solo una línea. Si algo queda dorado, está mal.
        </Lead>
        <CopyButton
          value={cssTokens}
          label="Copiar para Shopify"
          toastMessage="Colores copiados. Se pegan en el tema de Shopify."
          className="mt-8"
        />
      </div>

      <div>
        {coreColors.map((color) => (
          <Band key={color.hex} {...color} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10">
        <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-sombra">Apoyo</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {supportColors.map((color) => (
            <li
              key={color.hex}
              className="flex items-center justify-between gap-4 border border-onix/10 bg-crema px-4 py-3"
            >
              <span className="flex items-center gap-4">
                <span
                  className="size-10 shrink-0 border border-onix/15"
                  style={{ background: color.hex }}
                  aria-hidden
                />
                <span>
                  <span className="block font-display text-2xl tracking-[-0.02em]">{color.name}</span>
                  <span className="text-sm text-sombra">{color.role}</span>
                </span>
              </span>
              <CopyButton
                value={color.hex}
                label={color.hex}
                toastMessage={`${color.name} copiado · ${color.hex}`}
                variant="outline"
                className="h-9 shrink-0 border-onix/20 px-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

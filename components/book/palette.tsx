import { CopyButton } from "@/components/copy-button"
import { Kicker } from "@/components/book/kicker"
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
      style={{ background: hex, color: dark ? "#1A1613" : "#F3EEE6" }}
    >
      <div className="md:col-span-5">
        <h3 className="font-display text-4xl tracking-[-0.04em] md:text-5xl">{name}</h3>
        <p className="mt-2 font-mono text-sm tracking-[0.14em]">{hex}</p>
      </div>
      <p className="text-base leading-relaxed text-pretty md:col-span-4 md:text-lg" style={{ opacity: 0.88 }}>
        {role}
      </p>
      <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
        <p className="text-sm leading-relaxed md:text-right" style={{ opacity: 0.8 }}>
          {use}
        </p>
        <CopyButton
          value={hex}
          label="Copiar hex"
          toastMessage={`${name} copiado · ${hex}`}
          variant={dark ? "outline" : "secondary"}
          className={dark ? "border-tinta/30 bg-transparent text-tinta hover:bg-tinta hover:text-hueso" : ""}
        />
      </div>
    </article>
  )
}

export function Palette() {
  return (
    <section id="color" className="scroll-mt-20 border-t border-tinta/10 xl:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <Kicker n="02">Color</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
          Cuatro colores.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
          Mucho marfil, texto en ónix, granate en poca cantidad, bronce en una línea. Si queda dorado, está mal.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CopyButton
            value={cssTokens}
            label="Copiar tokens CSS"
            toastMessage="Tokens copiados. Sirven para el tema de Shopify."
          />
        </div>
      </div>

      <div>
        <p className="mx-auto max-w-6xl px-5 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-humo md:px-10">
          Los cuatro
        </p>
        {coreColors.map((color) => (
          <Band key={color.hex} {...color} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-humo">Para armar la tienda</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {supportColors.map((color) => (
            <li key={color.hex} className="flex items-center justify-between gap-4 border border-tinta/10 bg-hueso px-4 py-3">
              <span>
                <span className="block font-display text-2xl tracking-[-0.03em]">{color.name}</span>
                <span className="text-sm text-humo">{color.role}</span>
              </span>
              <CopyButton
                value={color.hex}
                label={color.hex}
                toastMessage={`${color.name} copiado · ${color.hex}`}
                variant="outline"
                className="h-9 shrink-0 border-tinta/20 px-3"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

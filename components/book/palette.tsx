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
        <Kicker n="08">Color</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
          Tinta, papel, un corte.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
          Se recuerdan cuatro colores. Los demás existen para que se pueda leer o para etiquetar una sala. El azafrán no se administra: aparece una vez, como el corte de la caña.
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
          Los cuatro que se recuerdan
        </p>
        {coreColors.map((color) => (
          <Band key={color.hex} {...color} />
        ))}
      </div>

      <div className="mt-16">
        <p className="mx-auto max-w-6xl px-5 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-humo md:px-10">
          Soporte y rótulos de sala
        </p>
        {supportColors.map((color) => (
          <Band key={color.hex} {...color} />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10">
        <h3 className="font-display text-3xl tracking-[-0.03em]">Proporción, no fórmula.</h3>
        <p className="mt-3 max-w-2xl text-humo">
          En una pieza tranquila el papel manda, la tinta escribe y el cardenillo firma. Resina y hiel solo rotulan. El azafrán es una línea.
        </p>
        <div className="mt-6 flex h-8 overflow-hidden" aria-hidden>
          <span className="bg-papel" style={{ width: "58%", boxShadow: "inset 0 0 0 1px rgba(26,22,19,0.15)" }} />
          <span className="bg-tinta" style={{ width: "22%" }} />
          <span className="bg-cardenillo" style={{ width: "10%" }} />
          <span className="bg-cana" style={{ width: "6%" }} />
          <span className="bg-resina" style={{ width: "2%" }} />
          <span className="bg-hiel" style={{ width: "1.4%" }} />
          <span className="bg-azafran" style={{ width: "0.6%" }} />
        </div>
        <ul className="mt-8 grid gap-3 text-sm leading-relaxed sm:grid-cols-2">
          <li>Tinta sobre papel, hueso o caña: el texto corrido.</li>
          <li>Humo sobre papel o hueso: el texto secundario.</li>
          <li>Hueso sobre tinta, cardenillo, resina o azul de hiel.</li>
          <li>Cardenillo profundo para un enlace chico. El cardenillo vivo, para botón y titular.</li>
          <li>Azafrán nunca como texto pequeño. Si alguna vez es fondo, la letra es tinta y grande.</li>
          <li>Miel (#8A5A32) solo en la mancha de una foto de blotter. No entra a botones ni a fondos.</li>
        </ul>
      </div>
    </section>
  )
}

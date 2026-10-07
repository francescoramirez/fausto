import { ReedMark } from "@/components/reed-mark"
import { Kicker } from "@/components/book/kicker"

const versions = [
  { title: "A color", ink: "color" as const, ground: "bg-papel", note: "Granate y bronce mate." },
  { title: "Una tinta", ink: "mono" as const, ground: "bg-hueso text-tinta", note: "Todo del mismo color." },
  { title: "En claro", ink: "mono" as const, ground: "bg-tinta text-hueso", note: "Para fondos oscuros." },
]

const refuses = [
  "En mayúsculas: «MIRRA»",
  "En letra manuscrita",
  "Con corona, gota o diamante",
  "Estirado para llenar un cuadro",
  "Sobre foil o mármol veteado",
  "Con caligrafía de adorno",
]

export function Symbol() {
  return (
    <section id="simbolo" className="scroll-mt-20 bg-tinta text-hueso xl:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
        <Kicker n="04" tone="ink">
          Logo
        </Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
          Una piedra y un engarce.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-cana">
          El logo final se dibuja después. Esta es la dirección: granate liso, bronce mate debajo. Se puede simplificar. No se puede cambiar la idea.
        </p>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <div className="flex aspect-square items-center justify-center bg-papel lg:col-span-7">
            <ReedMark className="size-[72%] max-w-md" />
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">Construcción</p>
            <ul className="mt-4 space-y-4 text-base leading-relaxed">
              <li>Piedra granate, lisa, sin facetas.</li>
              <li>Un arco de bronce mate que la sostiene. Nada más de metal.</li>
              <li>Tiene que entenderse chico, en un avatar.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {versions.map((version) => (
            <article key={version.title} className={`p-5 ${version.ground}`}>
              <ReedMark
                ink={version.ink}
                className="size-24"
                title={`Estudio, versión ${version.title}`}
              />
              <h3 className="mt-6 font-display text-2xl tracking-[-0.03em]">{version.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{version.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-hueso/15 pt-8">
          <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em]">Mirra</p>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.28em] text-cana">Casa de perfume</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cana">
            Así se escribe el nombre hasta que el símbolo esté listo. Hay que entregar el símbolo, el nombre junto al símbolo, y una versión en un solo color.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-3xl tracking-[-0.03em]">Esto no.</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {refuses.map((item) => (
              <li key={item} className="border border-azafran/50 px-4 py-4 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cana">No</span>
                <span className="mt-2 block text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

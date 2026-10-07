import { ReedMark } from "@/components/reed-mark"
import { Kicker } from "@/components/book/kicker"

const versions = [
  { title: "Color firma", ink: "color" as const, ground: "bg-papel", note: "Cardenillo y un corte de azafrán. Es la versión que se recuerda." },
  { title: "Una tinta", ink: "mono" as const, ground: "bg-hueso text-tinta", note: "El corte es el vacío. No se reemplaza el azafrán por un gris." },
  { title: "Reversa", ink: "mono" as const, ground: "bg-tinta text-hueso", note: "Sobre tinta, para sello, avatar oscuro y la página del relato." },
]

const refuses = [
  "Sin acento: «Calamo»",
  "En script o en Didot",
  "Con corona, gota o frasco",
  "Estirado para llenar un cuadro",
  "Sobre oro o mármol",
  "Con caligrafía de adorno",
]

export function Symbol() {
  return (
    <section id="simbolo" className="scroll-mt-20 bg-tinta text-hueso xl:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <Kicker n="10" tone="ink">
          Símbolo
        </Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
          Hipótesis de isotipo, lista para dibujar.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-cana">
          Esto no es el logo. Es el encargo hecho visible: una caña hueca y un solo corte. Quien dibuje puede alejarse de esta geometría. No puede alejarse de la idea.
        </p>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <div className="flex aspect-square items-center justify-center bg-papel lg:col-span-7">
            <ReedMark className="size-[72%] max-w-md" />
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">Construcción</p>
            <ul className="mt-4 space-y-4 text-base leading-relaxed">
              <li>Círculo hueco. El tubo de la caña, no un anillo de joyería.</li>
              <li>Abertura hacia abajo a la derecha, de unos cincuenta grados. Es la boca del cálamo.</li>
              <li>El corte, en azafrán, sigue la diagonal de esa boca. Es lo único en ese color.</li>
              <li>Aire libre: la mitad del radio, por los cuatro lados.</li>
              <li>Mínimo: 16 px en pantalla, 8 mm en impresión. Si a ese tamaño no se entiende, está de más.</li>
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

        <div className="mt-14 grid gap-8 border-t border-hueso/15 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-6xl leading-[0.85] tracking-[-0.045em] text-hueso">Cálamo</p>
            <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.28em] text-cana">Casa de perfume</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cana">
              Lockup de trabajo, armado con la fuente. El dibujo final puede ajustar el espacio entre símbolo y nombre. El acento se queda. El cardenillo no se sube a la letra.
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">Se entrega</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Isotipo a color",
                "Isotipo a una tinta y en reversa",
                "Wordmark solo",
                "Lockup horizontal",
                "Lockup vertical",
                "Favicon y avatar",
                "Sello de caja",
                "Cinco mockups, no una biblia",
              ].map((item) => (
                <li key={item} className="border border-hueso/15 px-3 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-3xl tracking-[-0.03em]">Lo que el símbolo no va a ser.</h3>
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

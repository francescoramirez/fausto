import { Kicker } from "@/components/book/kicker"

export function Idea() {
  return (
    <section id="idea" className="scroll-mt-20 border-t border-tinta/10 xl:scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <Kicker n="01">La idea</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
          Dos salas. Ninguna es el cajón de ofertas.
        </h2>
        <div className="mt-8 grid gap-6 text-lg leading-relaxed text-pretty md:grid-cols-2">
          <p>
            Hay perfumes que se firman: el frasco de una casa de moda, el nombre que ya escuchaste, la conversación que el mundo ya está teniendo.
          </p>
          <p>
            Y hay perfumes de otra escritura: oud, ámbar, rosa, dátil, almizcle, aceite. Entran en la ropa y se quedan. Durante años se mostraron aquí como el combo, la imitación, el dorado sobre negro.
          </p>
        </div>
      </div>

      <div className="grid gap-3 bg-papel px-3 pb-3 md:grid-cols-2 md:px-4">
        <article className="flex min-h-[22rem] flex-col justify-between bg-hiel px-6 py-8 text-hueso md:px-10 md:py-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cana">Sala Firma</p>
          <div>
            <h3 className="font-display text-5xl tracking-[-0.04em] md:text-7xl">Firma</h3>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-hueso/85">
              Las casas de diseñador. Se leen sin el teatro de la vitrina y sin tratarlas como el único perfume de verdad.
            </p>
          </div>
        </article>
        <article className="flex min-h-[22rem] flex-col justify-between bg-resina px-6 py-8 text-hueso md:px-10 md:py-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cana">Sala Attar</p>
          <div>
            <h3 className="font-display text-5xl tracking-[-0.03em] md:text-7xl">Attar</h3>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-hueso/85">
              Las casas árabes. Misma mesa, misma luz. No son la versión económica de la sala de al lado.
            </p>
          </div>
        </article>
      </div>
      <p className="mx-auto max-w-6xl px-5 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-humo md:px-10">
        El papel entre las dos salas es la casa. No se funden en un degradado.
      </p>
    </section>
  )
}

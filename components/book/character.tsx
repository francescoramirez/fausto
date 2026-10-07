import { Kicker, Shell } from "@/components/book/kicker"
import { traits } from "@/content/brand"

export function Character() {
  return (
    <Shell id="caracter">
      <Kicker n="05">Carácter</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Cómo se comporta esta casa.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        No es un lujo frío ni una amiga que te dice reina. Habla como alguien que olió el perfume y no necesita convencerte con adjetivos.
      </p>
      <div className="mt-12 grid gap-px bg-tinta/15 sm:grid-cols-2">
        {traits.map((trait) => (
          <article key={trait.word} className="bg-papel p-6 md:p-8">
            <h3 className="font-display text-5xl tracking-[-0.04em] md:text-6xl">{trait.word}</h3>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-pretty text-humo">{trait.line}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

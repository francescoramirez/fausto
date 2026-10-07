import { Kicker, Shell } from "@/components/book/kicker"

const steps = [
  { from: "Griego", word: "kálamos", note: "la caña" },
  { from: "Latín", word: "calamus", note: "la misma caña" },
  { from: "Español", word: "cálamo", note: "el nombre de la casa" },
]

export function Name() {
  return (
    <Shell id="nombre" className="bg-hueso/50">
      <Kicker n="02">El nombre</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        La caña, en las dos lenguas.
      </h2>

      <div className="mt-12 grid items-end gap-10 border-y border-tinta/15 py-10 lg:grid-cols-2">
        <p className="font-display text-[clamp(4rem,10vw,7.5rem)] leading-[0.8] tracking-[-0.05em]">
          Cálamo
        </p>
        <div>
          <p lang="ar" dir="rtl" className="font-arabic text-7xl leading-none md:text-8xl">
            قلم
          </p>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-pretty text-humo">
            Qalam. No es un nombre árabe pegado por estética. Es el pariente de la misma palabra.
          </p>
        </div>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.word} className="border-t border-tinta/15 pt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-humo">
              0{index + 1} · {step.from}
            </p>
            <p className="mt-3 font-display text-3xl tracking-[-0.03em]">{step.word}</p>
            <p className="mt-2 text-humo">{step.note}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-pretty">
            El español <em>cálamo</em> viene del latín <em>calamus</em>, y ese del griego <em>kálamos</em>: la caña hueca con la que se escribía. El árabe <span lang="ar" className="font-arabic">قلم</span> nombra esa misma caña; llegó desde el griego. Las dos escrituras de esta tienda usaron el mismo instrumento.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-humo">
            El oficio ya habla árabe aunque la tienda hable español: alcohol, alambique, elixir, ámbar, almizcle. Cálamo no disfraza eso de exotismo. Lo recuerda.
          </p>
        </div>
        <aside className="border border-tinta/15 bg-papel p-6 md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cardenillo-ink">
            La frase
          </p>
          <p className="mt-4 font-display text-3xl leading-[1.15] tracking-[-0.03em] text-balance">
            «Es la caña con la que se escribía: cálamo en español, qalam en árabe.»
          </p>
          <dl className="mt-6 space-y-3 text-sm leading-relaxed text-humo">
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">Se pronuncia</dt>
              <dd>CÁ-la-mo. Qalam se dice ká-lam, no cuá-lam.</dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">Se escribe</dt>
              <dd>Siempre con acento. En el dominio y en el usuario, sin acento: calamo.</dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">No se dice</dt>
              <dd>«La Cálamo». Se dice «en Cálamo», como se dice en una casa.</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-12">
        <h3 className="font-sans text-[12px] uppercase tracking-[0.18em] text-humo">
          Nombres que no iban a servir
        </h3>
        <ul className="mt-4 grid gap-3 text-[15px] leading-relaxed md:grid-cols-3">
          <li className="bg-papel p-4">
            <span className="font-display text-xl">Oud, ámbar, gold, luxe.</span>
            <span className="mt-2 block text-humo">Describen la góndola, no la casa. Mañana los usa cualquiera.</span>
          </li>
          <li className="bg-papel p-4">
            <span className="font-display text-xl">Maison y compañía.</span>
            <span className="mt-2 block text-humo">Un acento francés prestado. Esta casa habla español.</span>
          </li>
          <li className="bg-papel p-4">
            <span className="font-display text-xl">Sheikh, oasis, sultan.</span>
            <span className="mt-2 block text-humo">Disfraz. Qalam se reserva para la sala, donde se puede explicar.</span>
          </li>
        </ul>
      </div>
    </Shell>
  )
}

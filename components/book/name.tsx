import { Kicker, Shell } from "@/components/book/kicker"

const steps = [
  { from: "Árabe", word: "murr", note: "la resina" },
  { from: "Griego", word: "myrrha", note: "el mismo material" },
  { from: "Español", word: "mirra", note: "el nombre de la casa" },
]

export function Name() {
  return (
    <Shell id="nombre" className="bg-hueso/50">
      <Kicker n="02">El nombre</Kicker>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.03em] text-balance md:text-6xl">
        Una resina que ya se sabe decir.
      </h2>

      <div className="mt-12 grid items-end gap-10 border-y border-tinta/15 py-10 lg:grid-cols-2">
        <p className="font-display text-[clamp(4rem,10vw,7.5rem)] font-semibold leading-[0.8] tracking-[-0.03em]">
          Mirra
        </p>
        <div>
          <p lang="ar" dir="rtl" className="font-arabic text-7xl leading-none md:text-8xl">
            مُرّ
          </p>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-pretty text-humo">
            Murr. No es un adorno. Es el nombre árabe de la misma resina.
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
            Mirra se oye una vez y se queda: dos sílabas, erre fuerte, y ya huele a perfume. La palabra española viene del griego <em>myrrha</em>, y esa de una raíz semítica. En árabe la resina se llama <span lang="ar" className="font-arabic">مُرّ</span>, murr. Las dos salas de esta casa ya la usan.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-humo">
            Cálamo, el nombre anterior, pedía una clase para poder decirse. Mirra no. Es memorable sin disfrazarse de París y sin gritar oro.
          </p>
        </div>
        <aside className="border border-tinta/15 bg-papel p-6 md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cardenillo-ink">
            La frase
          </p>
          <p className="mt-4 font-display text-3xl leading-[1.15] tracking-[-0.03em] text-balance">
            «Es una resina. Viajó de Arabia a los perfumes de aquí. No brilla: se queda.»
          </p>
          <dl className="mt-6 space-y-3 text-sm leading-relaxed text-humo">
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">Se pronuncia</dt>
              <dd>MI-rra. La erre es fuerte. Attar, la otra sala, se dice Á-tar.</dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">Se escribe</dt>
              <dd>Mirra, sin acento. En el usuario, igual: @mirra.</dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.16em] text-tinta">No se dice</dt>
              <dd>«La Mirra». Se dice «en Mirra», como se dice en una casa.</dd>
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
            <span className="font-display text-xl">Oud, gold, luxe.</span>
            <span className="mt-2 block text-humo">Describen la góndola, no la casa. Mañana los usa cualquiera.</span>
          </li>
          <li className="bg-papel p-4">
            <span className="font-display text-xl">Maison y compañía.</span>
            <span className="mt-2 block text-humo">Un acento francés prestado. Esta casa habla español.</span>
          </li>
          <li className="bg-papel p-4">
            <span className="font-display text-xl">Sheikh, oasis, sultan.</span>
            <span className="mt-2 block text-humo">Disfraz. Attar nombra la sala, con una palabra que el oficio ya usa.</span>
          </li>
        </ul>
      </div>
    </Shell>
  )
}

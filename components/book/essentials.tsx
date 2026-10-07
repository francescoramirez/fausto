import { Kicker, Shell } from "@/components/book/kicker"

const facts = [
  ["Nombre", "Mirra. Se pronuncia MI-rra."],
  ["Cómo se escribe", "Mirra, y debajo: casa de perfume. Nunca en mayúsculas."],
  ["Qué vende", "Perfumes de diseñador y perfumes árabes."],
  ["Cómo se ordena", "Dos puertas: Diseñador y Árabes. Las tiras son el mismo perfume, en 5 o 10 ml."],
  ["Cómo se ve", "Mucho marfil. Texto en ónix. Granate en el botón y en el símbolo. Bronce solo en una línea."],
  ["Cómo se habla", "Concreto: marca, nombre, concentración y mililitros. El precio es un número."],
  ["El logo", "Todavía no está. Hasta que exista, se usa la palabra Mirra. El encargo está al final de este manual."],
]

export function Essentials() {
  return (
    <Shell id="esencial">
      <Kicker n="01">Esencial</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
        Lo que hay que saber.
      </h2>
      <dl className="mt-10 border-t border-tinta/15">
        {facts.map(([label, value]) => (
          <div key={label} className="grid gap-2 border-b border-tinta/15 py-5 md:grid-cols-12 md:gap-8">
            <dt className="font-sans text-[13px] uppercase tracking-[0.16em] text-cardenillo-ink md:col-span-3">
              {label}
            </dt>
            <dd className="text-lg leading-relaxed text-pretty md:col-span-9">{value}</dd>
          </div>
        ))}
      </dl>
    </Shell>
  )
}

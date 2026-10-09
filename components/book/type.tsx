import { Kicker, Lead, Shell, Title } from "@/components/book/kicker"

const faces = [
  {
    name: "Cormorant Garamond",
    job: "El nombre y los títulos",
    sample: "Aromas Donofrio",
    className: "font-display text-5xl tracking-[-0.02em] md:text-7xl",
    note: "Peso 600, redonda. Nunca en mayúsculas ni en cursiva.",
  },
  {
    name: "Literata",
    job: "Descripciones",
    sample: "Dátil, canela y tonka. Se queda en la ropa hasta el día siguiente.",
    className: "font-reading text-xl leading-relaxed md:text-2xl",
    note: "La frase de cada perfume y todo texto corrido.",
  },
  {
    name: "Outfit",
    job: "Menú, botones y precios",
    sample: "Diseñador   Árabes   $ 59.000",
    className: "font-sans text-lg tracking-wide md:text-xl",
    note: "Lo que se toca o se compara.",
  },
  {
    name: "DM Mono",
    job: "Los datos del frasco",
    sample: "EDP · 100 ml · tester",
    className: "font-mono text-base uppercase tracking-[0.14em] md:text-lg",
    note: "Concentración, mililitros y si es tester. Nada más.",
  },
]

export function TypeSpecimen() {
  return (
    <Shell id="tipo" className="bg-crema/60">
      <Kicker n="03">Letras</Kicker>
      <Title>Cuatro letras, cada una con su uso.</Title>
      <Lead>
        Donde no se puede elegir la letra, como WhatsApp o Instagram, alcanza con escribir bien el nombre: «Aromas Donofrio».
      </Lead>

      <div className="mt-12 space-y-4">
        {faces.map((face) => (
          <article key={face.name} className="grid gap-6 border border-onix/10 bg-marfil p-6 md:grid-cols-12 md:p-8">
            <div className="md:col-span-4">
              <h3 className="font-display text-3xl tracking-[-0.02em]">{face.name}</h3>
              <p className="mt-2 font-sans text-[13px] uppercase tracking-[0.12em] text-granate-profundo">
                {face.job}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sombra">{face.note}</p>
            </div>
            <p className={`text-balance md:col-span-8 md:self-center ${face.className}`}>{face.sample}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

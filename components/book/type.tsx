import { Kicker, Shell } from "@/components/book/kicker"

const faces = [
  {
    name: "Cormorant Garamond",
    job: "Display y wordmark",
    sample: "Lujo en voz baja.",
    className: "font-display text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl",
    note: "El nombre y los títulos. Peso 600. No en mayúsculas.",
  },
  {
    name: "Literata",
    job: "Texto largo",
    sample: "Khamrah, de Lattafa. Dátil, canela y tonka. Se queda en la ropa.",
    className: "font-reading text-xl leading-relaxed md:text-2xl",
    note: "Descripciones de producto.",
  },
  {
    name: "Outfit",
    job: "Interfaz, precio, navegación",
    sample: "Diseñador    Árabes    Tiras",
    className: "font-sans text-lg tracking-wide md:text-xl",
    note: "Menú, botones y precios.",
  },
  {
    name: "DM Mono",
    job: "Datos",
    sample: "EDP  ·  100 ml  ·  tester",
    className: "font-mono text-sm uppercase tracking-[0.18em] md:text-base",
    note: "Concentración, mililitros y si es tester.",
  },
]

export function TypeSpecimen() {
  return (
    <Shell id="tipo" className="bg-hueso/45">
      <Kicker n="03">Letras</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
        Cuatro letras, cada una con un uso.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        El nombre va en Cormorant. No se cambia por una letra script.
      </p>

      <div className="mt-12 space-y-4">
        {faces.map((face) => (
          <article key={face.name} className="grid gap-6 border border-tinta/10 bg-papel p-6 md:grid-cols-12 md:p-8">
            <div className="md:col-span-4">
              <h3 className="font-display text-3xl tracking-[-0.03em]">{face.name}</h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cardenillo-ink">
                {face.job}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-humo">{face.note}</p>
            </div>
            <p className={`text-balance md:col-span-8 md:self-center ${face.className}`}>
              {face.sample}
            </p>
          </article>
        ))}
      </div>

    </Shell>
  )
}

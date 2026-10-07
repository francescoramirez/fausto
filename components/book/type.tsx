import { Kicker, Shell } from "@/components/book/kicker"

const faces = [
  {
    name: "Cormorant Garamond",
    job: "Display y wordmark",
    sample: "Lujo en voz baja.",
    className: "font-display text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl",
    note: "Contraste alto, pero en romana y con aire. El logo va en peso 600. La itálica es una frase, no el sistema. No es una script ni un Didot de vitrina.",
  },
  {
    name: "Literata",
    job: "Texto largo",
    sample: "El perfume ocurre en la ropa, no en la vitrina. Por eso la ficha se lee como una nota, no como un anuncio.",
    className: "font-reading text-xl leading-relaxed md:text-2xl",
    note: "Es un tipo de libro. Aguanta un párrafo de verdad.",
  },
  {
    name: "Outfit",
    job: "Interfaz, precio, navegación",
    sample: "Firma    Attar    Tiras    Cuaderno",
    className: "font-sans text-lg tracking-wide md:text-xl",
    note: "La voz de la tienda cuando hay que elegir, pagar o filtrar. Geométrica, sin gritar.",
  },
  {
    name: "DM Mono",
    job: "La fórmula",
    sample: "EDP  ·  100 ml  ·  tester",
    className: "font-mono text-sm uppercase tracking-[0.18em] md:text-base",
    note: "Concentración, mililitros, tester, familias. Lo que no admite adjetivos.",
  },
  {
    name: "Noto Naskh Arabic",
    job: "Árabe de verdad",
    sample: "قلم",
    className: "font-arabic text-6xl leading-none md:text-7xl",
    dir: "rtl" as const,
    lang: "ar",
    note: "Solo cuando la palabra es árabe. No se estira para decorar un fondo.",
  },
]

export function TypeSpecimen() {
  return (
    <Shell id="tipo" className="bg-hueso/45">
      <Kicker n="09">Tipo</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Una voz para leer, otra para vender.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Cinco fuentes, cada una con un trabajo. Cormorant no se cambia por una script, ni por Playfair, ni por un Didot más flaco. La elegancia está en el aire alrededor de la letra.
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
            <p
              className={`text-balance md:col-span-8 md:self-center ${face.className}`}
              dir={face.dir}
              lang={face.lang}
            >
              {face.sample}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <p className="border border-tinta/10 p-5 text-sm leading-relaxed">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cardenillo-ink">Escala</span>
          <span className="mt-3 block">Titular de portada enorme. Sección en cuatro o cinco rem. Cuerpo en dieciocho. Datos en once, mono, con tracking.</span>
        </p>
        <p className="border border-tinta/10 p-5 text-sm leading-relaxed">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cardenillo-ink">Caja</span>
          <span className="mt-3 block">El wordmark va en «Mirra», no en mayúsculas. La caja alta se reserva para la categoría y para los rótulos mono.</span>
        </p>
        <p className="border border-tinta/10 p-5 text-sm leading-relaxed">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cardenillo-ink">Acento</span>
          <span className="mt-3 block">Mirra no lleva acento. La erre se pronuncia fuerte. En la red, @mirra. La categoría «casa de perfume» evita que se lea como otra cosa.</span>
        </p>
      </div>
    </Shell>
  )
}

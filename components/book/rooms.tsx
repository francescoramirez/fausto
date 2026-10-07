import { Kicker, Shell } from "@/components/book/kicker"
import { families, rooms } from "@/content/brand"

const essays = [
  {
    title: "Qué es un attar",
    text: "Es aceite, no un eau de parfum aguado ni uno más fuerte. Se pone en puntos de pulso, con menos cantidad, y dura de otra manera.",
  },
  {
    title: "Los primeros diez minutos mienten un poco",
    text: "La salida es la presentación. La lectura de verdad aparece cuando el alcohol se fue. Por eso existe la tira.",
  },
  {
    title: "Oud no es una sola cosa",
    text: "Puede ir a madera limpia, a establo, a humo o a rosa. Decir solo «oud» es no haberlo olido.",
  },
]

export function Rooms() {
  return (
    <Shell id="salas" className="bg-hueso/40">
      <Kicker n="06">Salas</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        La arquitectura de la marca.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Cuatro nombres y ninguno más, hasta que la casa los necesite de verdad. Firma y Qalam son salas. Tiras es un formato. Cuaderno es la voz que enseña.
      </p>

      <div className="mt-12 space-y-4">
        {rooms.map((room) => (
          <article key={room.id} className="grid gap-6 border border-tinta/10 bg-papel p-6 md:grid-cols-12 md:p-8">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-humo">{room.n}</p>
              <h3 className="mt-2 font-display text-5xl tracking-[-0.04em]">{room.name}</h3>
              <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
                <span className="inline-block size-2.5" style={{ background: room.hex }} aria-hidden />
                {room.accent}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-cardenillo-ink">
                {room.pronoun}
              </p>
              <p className="mt-3 text-lg leading-relaxed">{room.promise}</p>
              <p className="mt-3 leading-relaxed text-humo">{room.not}</p>
              <p className="mt-5 border-t border-tinta/10 pt-4 font-display text-2xl leading-snug tracking-[-0.03em] text-balance">
                {room.sentence}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="font-display text-3xl tracking-[-0.03em]">Familias, no un género.</h3>
          <p className="mt-4 leading-relaxed text-pretty text-humo">
            La tienda no se parte en hombre y mujer. Si una casa comercializó un perfume para alguien, eso se anota al pie de la ficha, en mono, como dato. La puerta son las notas, la hora y la sala. Oud tiene familia propia: esconderlo dentro de «madera» es no conocer a quien busca.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 lg:col-span-7">
          {families.map((family, index) => (
            <li key={family} className="flex items-baseline gap-3 bg-papel px-4 py-3">
              <span className="font-mono text-[10px] tracking-[0.14em] text-cardenillo-ink">0{index + 1}</span>
              <span className="font-sans text-sm">{family}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <h3 className="font-display text-3xl tracking-[-0.03em]">Las tres primeras páginas del cuaderno.</h3>
        <p className="mt-3 max-w-2xl text-humo">
          El cuaderno arranca vacío. Estos títulos ya tienen voz. No hace falta publicar los tres el mismo día.
        </p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {essays.map((essay, index) => (
            <li key={essay.title} className="border-t-2 border-tinta pt-4">
              <p className="font-mono text-[11px] text-humo">0{index + 1}</p>
              <h4 className="mt-2 font-display text-2xl leading-tight tracking-[-0.03em]">{essay.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-humo">{essay.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  )
}

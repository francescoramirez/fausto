import { Kicker, Shell } from "@/components/book/kicker"

const shots = [
  { ratio: "4:5", name: "El frasco", text: "Una botella, luz de lado, fondo de papel. Sin halo, sin láser, sin humo." },
  { ratio: "1:1", name: "La mesa", text: "Yeso cálido o lino marfil, un hilo de bronce mate, la piedra granate. Los dos tipos de frasco, misma mesa." },
  { ratio: "9:16", name: "La lectura", text: "Historia: el nombre, tres notas, una frase. Poco movimiento. Nada de texto en script." },
]

export function ImageDirection() {
  return (
    <Shell id="imagen">
      <Kicker n="11">Imagen</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        La misma luz para los dos frascos.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Si el perfume árabe se fotografía entre linternas y el de diseñador sobre mármol, la marca ya eligió un bando. Los dos se sientan en papel, con luz de ventana.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {shots.map((shot) => (
          <article key={shot.name}>
            <div className="flex aspect-[4/5] flex-col justify-between bg-hueso p-5">
              <p className="font-mono text-[11px] tracking-[0.16em] text-humo">{shot.ratio}</p>
              <div>
                <div className="mb-6 h-24 w-10 rounded-[2px] bg-tinta/80" aria-hidden />
                <div className="h-[3px] w-10 bg-azafran" aria-hidden />
              </div>
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">{shot.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-humo">{shot.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="bg-hueso p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cardenillo-ink">Sí</p>
          <ul className="mt-4 space-y-3 leading-relaxed">
            <li>Luz lateral, sombra suave, papel o madera clara.</li>
            <li>Manos sin logo de joyería. Distintas pieles. Uñas que no compiten.</li>
            <li>La tira de blotter como objeto, no solo el frasco-relicario.</li>
            <li>Materiales con nombre: mirra, granate, lino, bronce mate. Si hay una rosa, es una rosa que se está mostrando, no un relleno.</li>
            <li>El mismo recorte para las dos salas. Si uno es rectángulo, el otro también.</li>
          </ul>
        </article>
        <article className="relative overflow-hidden bg-tinta p-6 text-hueso md:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at 20% 0%, #e7c36a, transparent 40%), radial-gradient(circle at 90% 80%, #6b4a1e, transparent 42%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-hueso">Esto no</p>
            <p className="mt-6 font-display text-4xl italic tracking-wide text-[#f3e2b0]">Luxe Parfum</p>
            <p className="mt-2 text-sm tracking-[0.3em] text-[#e7c36a]">COMBO 3×2 · REINA</p>
            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-hueso/90">
              <li>Mármol, terciopelo, foil, destello.</li>
              <li>Humo de estudio atravesando el vidrio.</li>
              <li>Mezquita, camello, luna o caligrafía de stock.</li>
              <li>Una sala en círculo y la otra en rectángulo.</li>
            </ul>
          </div>
        </article>
      </div>
    </Shell>
  )
}

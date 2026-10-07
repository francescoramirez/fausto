import { Drydown } from "@/components/book/drydown"
import { Kicker, Shell } from "@/components/book/kicker"
import { ReedMark } from "@/components/reed-mark"

const posts = [
  {
    type: "La lectura",
    rhythm: "Un frasco. Tres notas. Una frase honesta.",
    lines: ["Khamrah", "Lattafa · EDP", "Dátil, canela, tonka.", "Se queda en la ropa.", "No es un oud."],
  },
  {
    type: "Las dos salas",
    rhythm: "No un dupe: un guardarropa.",
    lines: ["No se reemplazan.", "Día — Terre d’Hermès", "Sobremesa — Khamrah", "Una piel puede querer", "las dos escrituras."],
  },
  {
    type: "El cuaderno",
    rhythm: "Enseña sin hablar hacia abajo.",
    lines: ["Attar", "Es aceite.", "No es un eau de parfum", "más fuerte.", "Se pone menos."],
  },
]

export function Pieces() {
  return (
    <Shell id="piezas" className="bg-hueso/40">
      <Kicker n="12">Piezas</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Caja, red, lectura.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Tres formatos alcanzan para verse como casa antes de que exista la tienda. El empaque se siente como un cuaderno, no como una joyería.
      </p>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        <article className="border border-tinta/15 bg-papel p-8 md:p-12">
          <ReedMark className="size-12" title="Sello de caja, estudio" />
          <p className="mt-8 font-display text-5xl tracking-[-0.04em]">Cálamo</p>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.24em] text-humo">Casa de perfume</p>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-resina">Sala Qalam</p>
          <p className="mt-3 font-display text-4xl tracking-[-0.03em]">Khamrah</p>
          <p className="mt-1 font-sans text-sm text-humo">Lattafa</p>
          <div className="mt-10 h-[3px] w-16 bg-azafran" aria-hidden />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em]">Eau de parfum · 100 ml</p>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-humo">
            Cartón sin estucar, color papel de tira. Impresión en tinta. El cierre es un hilo de azafrán, no una calcomanía dorada.
          </p>
        </article>

        <article className="bg-tinta p-8 text-hueso md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">Tarjeta de lectura</p>
          <h3 className="mt-4 font-display text-4xl tracking-[-0.03em]">Khamrah</h3>
          <dl className="mt-8 space-y-4">
            {[
              ["Salida", "Canela, nuez moscada"],
              ["Corazón", "Dátil, praliné"],
              ["Fondo", "Tonka, vainilla, mirra"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[6rem_1fr] gap-3 border-t border-hueso/15 pt-3">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-cana">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-lg leading-relaxed">
            Se queda en la ropa hasta el día siguiente. No es un oud. Es una sobremesa.
          </p>
        </article>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-3xl tracking-[-0.03em]">Tres posts. Nada más, hasta que hagan falta.</h3>
        <p className="mt-3 max-w-2xl text-humo">
          El papel manda en la grilla. No van dos fondos oscuros seguidos. El azafrán aparece, como mucho, una vez cada nueve piezas.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.type}>
              <div className="flex aspect-square flex-col justify-between bg-papel p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-humo">{post.type}</p>
                <div>
                  {post.lines.map((line, index) => (
                    <p
                      key={line}
                      className={
                        index === 0
                          ? "font-display text-3xl tracking-[-0.03em]"
                          : "mt-1 text-sm leading-snug text-humo"
                      }
                    >
                      {line}
                    </p>
                  ))}
                  <div className="mt-5 h-[3px] w-8 bg-azafran" aria-hidden />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-humo">{post.rhythm}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-3xl tracking-[-0.03em]">La ficha se lee en el tiempo.</h3>
        <div className="mt-6">
          <Drydown />
        </div>
      </div>
    </Shell>
  )
}

import { Kicker, Shell } from "@/components/book/kicker"
import { refusals } from "@/content/brand"

export function Limits() {
  return (
    <Shell id="limites">
      <Kicker n="15">Límites</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Lo que esta marca se niega a ser.
      </h2>
      <ul className="mt-12 max-w-3xl">
        {refusals.map((refusal, index) => (
          <li key={refusal} className="grid grid-cols-[3rem_1fr] gap-3 border-t border-tinta/15 py-5">
            <span className="font-mono text-[11px] tracking-[0.14em] text-cardenillo-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-lg leading-relaxed text-pretty">{refusal}</span>
          </li>
        ))}
      </ul>

      <footer className="mt-16 bg-tinta px-6 py-10 text-hueso md:px-10">
        <p className="font-display text-4xl tracking-[-0.04em]">Cálamo</p>
        <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.22em] text-cana">
          Casa de perfume · manual de identidad · versión 1
        </p>
        <div className="mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-cana">
          <p>
            Preparado para construir la casa antes de la tienda. El nombre es una propuesta. Si el emprendimiento ya tiene un nombre que la gente reconoce, no se tira por terquedad: este sistema se puede vestir con ese nombre, siempre que aguante esta voz. Si el nombre actual es genérico —luxe, gold, importados, árabes— Cálamo es el reemplazo.
          </p>
          <p>
            Antes de imprimir cajas o comprar el dominio, conviene buscar la marca en la clase 3, perfumería, del país donde se va a vender. Este manual no certifica que el nombre esté libre.
          </p>
          <p>
            Siguiente paso: copiar el brief y encargar el isotipo, el wordmark y el sello. Después, la tienda.
          </p>
        </div>
      </footer>
    </Shell>
  )
}

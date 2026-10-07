import { Kicker, Shell } from "@/components/book/kicker"
import { StoreDraft } from "@/components/book/store-draft"
import { refusals } from "@/content/brand"

const rules = [
  {
    title: "Menú",
    text: "Diseñador, Árabes y Tiras. No se abre con «árabes desde…».",
  },
  {
    title: "Ficha",
    text: "Marca, nombre, concentración, mililitros, una frase y el precio. Si es tester, se dice ahí.",
  },
  {
    title: "Precio",
    text: "Un número. Si hay oferta, va en una línea aparte, no tachada al lado del nombre.",
  },
]

export function Shop() {
  return (
    <Shell id="tienda">
      <Kicker n="06">Tienda</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
        Cómo se va a ver la tienda.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Todavía no está hecha. El menú y la ficha ya sí.
      </p>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <StoreDraft />
        </div>
        <div className="lg:col-span-7">
          <ul className="space-y-6">
            {rules.map((rule) => (
              <li key={rule.title}>
                <h3 className="font-display text-2xl tracking-[-0.03em]">{rule.title}</h3>
                <p className="mt-2 leading-relaxed text-pretty text-humo">{rule.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-display text-2xl tracking-[-0.03em]">No hacer</h3>
          <ul className="mt-4 border-t border-tinta/15">
            {refusals.map((item) => (
              <li key={item} className="border-b border-tinta/15 py-3 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Shell>
  )
}

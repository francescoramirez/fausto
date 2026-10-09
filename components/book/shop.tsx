import { Kicker, Lead, Shell, Title } from "@/components/book/kicker"
import { StoreDraft } from "@/components/book/store-draft"

const rules = [
  {
    title: "El orden de la ficha",
    text: "Marca, nombre, concentración y mililitros, una frase, precio. Siempre en ese orden.",
  },
  {
    title: "El título",
    text: "El nombre del frasco: «Khamrah», no «tipo [otra marca]». La marca va arriba, aparte.",
  },
  {
    title: "Tester",
    text: "Se dice en los datos del frasco, antes del precio: «EDT · 100 ml · tester».",
  },
  {
    title: "Precio",
    text: "Un número. Si hay rebaja, una línea aparte, sin tachar al lado del nombre.",
  },
  {
    title: "Menú",
    text: "Diseñador y Árabes. Los testers van en su sección, con «tester» en la ficha. Ni hombre y mujer, ni «árabes desde…».",
  },
]

export function Shop() {
  return (
    <Shell id="producto">
      <Kicker n="04">Un producto</Kicker>
      <Title>Así se escribe un frasco.</Title>
      <Lead>La tienda todavía no está hecha. La ficha y el menú ya están decididos.</Lead>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <StoreDraft />
        </div>
        <ul className="lg:col-span-7">
          {rules.map((rule) => (
            <li key={rule.title} className="border-t border-onix/15 py-5 first:border-t-0 first:pt-0">
              <h3 className="font-display text-2xl tracking-[-0.02em]">{rule.title}</h3>
              <p className="mt-2 leading-relaxed text-pretty text-sombra">{rule.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  )
}

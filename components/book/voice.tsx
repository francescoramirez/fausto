import { CopyButton } from "@/components/copy-button"
import { Kicker, Shell } from "@/components/book/kicker"
import { say } from "@/content/brand"

const whatsapp = `Hola. Soy de Mirra, casa de perfume.

Cuéntame qué usas y a qué hora del día. Te propongo dos: uno de diseñador y uno árabe.

El frasco va con su marca y su nombre. Si es tester o de 10 ml, te lo digo antes del precio.`

const answers = [
  {
    q: "¿Es original?",
    a: "Sí. Cada perfume se vende con el nombre de su marca. Si no lo tengo, no invento un parecido.",
  },
  {
    q: "¿A qué se parece?",
    a: "Primero digo cómo huele y para qué momento sirve. El parecido, si hace falta, va después.",
  },
  {
    q: "¿Tienes árabes baratos?",
    a: "Tengo perfumes árabes, con precios distintos, igual que los de diseñador. No son la oferta de la tienda.",
  },
]

export function Voice() {
  return (
    <Shell id="voz">
      <Kicker n="05">Cómo se habla</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
        Claro, y con el nombre del frasco.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Marca, nombre, concentración y mililitros. El ejemplo de abajo no es el catálogo: es el tono.
      </p>

      <div className="mt-12 overflow-hidden border border-tinta/10">
        <div className="grid grid-cols-2 bg-tinta text-hueso">
          <p className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] md:px-6">Se dice</p>
          <p className="border-l border-hueso/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] md:px-6">
            No se dice
          </p>
        </div>
        {say.map(([yes, no]) => (
          <div key={yes} className="grid grid-cols-2 border-t border-tinta/10 text-sm leading-snug md:text-base">
            <p className="bg-hueso px-4 py-4 md:px-6">{yes}</p>
            <p className="border-l border-tinta/10 px-4 py-4 text-humo line-through decoration-azafran/80 md:px-6">
              {no}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <article className="bg-cana/40 p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-humo">Así no</p>
          <p className="mt-4 text-lg leading-relaxed text-pretty">
            Una fragancia exquisita y seductora que despertará tus sentidos con notas de lujo árabe. El complemento perfecto para la mujer empoderada. Combo 3×2.
          </p>
        </article>
        <article className="bg-cardenillo p-6 text-hueso md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">Así</p>
          <p className="mt-4 text-lg leading-relaxed text-pretty">
            Khamrah, de Lattafa, es un eau de parfum de dátil, canela y tonka. Proyecta al principio y después se queda en la ropa hasta el día siguiente. Si buscas oud, este no es tu frasco. Si buscas una sobremesa dulce, entra por aquí.
          </p>
        </article>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="font-display text-3xl tracking-[-0.03em]">WhatsApp</h3>
          <p className="mt-4 leading-relaxed text-pretty text-humo">
            Primer mensaje: preguntar qué usa y ofrecer dos opciones. El precio va cuando ya se sabe qué frasco es.
          </p>
          <CopyButton
            value={whatsapp}
            label="Copiar mensaje"
            toastMessage="Mensaje copiado."
            className="mt-6"
          />
        </div>
        <pre className="overflow-x-auto border border-tinta/15 bg-hueso p-6 font-reading text-base leading-relaxed whitespace-pre-wrap text-tinta lg:col-span-7">
          {whatsapp}
        </pre>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {answers.map((item) => (
          <article key={item.q} className="border-t-2 border-tinta pt-4">
            <h3 className="font-display text-2xl tracking-[-0.03em]">{item.q}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-humo">{item.a}</p>
          </article>
        ))}
      </div>

    </Shell>
  )
}

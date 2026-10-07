import { CopyButton } from "@/components/copy-button"
import { Kicker, Shell } from "@/components/book/kicker"
import { say } from "@/content/brand"

const whatsapp = `Hola. Soy de Cálamo, casa de perfume.

Si me cuentas qué usas ahora y a qué hora del día lo usas, te propongo dos lecturas: una de Firma y una de Qalam. No tienen que parecerse. Tienen que servirte.

El frasco se llama como se llama. Si es tester o tira, te lo digo antes del precio.`

const answers = [
  {
    q: "¿Es original?",
    a: "Sí. En Firma está el perfume de esa casa. En Qalam está el perfume de esa casa árabe, con su nombre, no como imitación de otra. Si algo no está, no invento un parecido para cerrar la venta.",
  },
  {
    q: "¿A qué se parece?",
    a: "Te digo la familia y la hora del día. Si de verdad se acerca a algo que ya conoces, lo digo como referencia, después de describirlo. Nunca en lugar del nombre.",
  },
  {
    q: "¿Tienes árabes baratos?",
    a: "Tengo la Sala Qalam. Hay precios distintos, como en Firma. No es el cajón de ofertas: es la otra escritura.",
  },
]

export function Voice() {
  return (
    <Shell id="voz">
      <Kicker n="07">Voz</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Cómo se habla. Cómo no.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        Se tutea. Se nombran los materiales. No se seduce, no se corona a nadie y no se escribe como un anuncio de combo. Los ejemplos usan perfumes reales para que se oiga la voz: no son el surtido.
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
            El primer mensaje no pide el combo ni manda doce fotos. Pregunta la hora del día y ofrece dos lecturas. El precio llega cuando ya se sabe qué frasco es.
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

      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-humo">
        Las notas de los ejemplos siguen las fichas públicas de cada perfume —Terre d’Hermès eau de toilette: naranja, toronja, pimienta, pedernal, vetiver; Khamrah eau de parfum: canela, nuez moscada, dátil, praliné, tonka, vainilla, mirra—. Sirven para ensayar la voz, no como certificado de laboratorio. Si vendes testers, la palabra es tester, en la misma frase que los mililitros.
      </p>
    </Shell>
  )
}

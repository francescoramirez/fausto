import { CopyButton } from "@/components/copy-button"
import { Kicker, Lead, Shell, Title } from "@/components/book/kicker"
import { say } from "@/content/brand"

const channels = [
  {
    title: "WhatsApp · primer mensaje",
    hint: "Preguntá qué usa y ofrecé dos. El precio va cuando ya se sabe cuál es el frasco.",
    text: `Hola, ¿cómo estás? Soy de Aromas Donofrio, casa de perfume.

Contame qué perfume usás y para qué momento del día. Te propongo dos: uno de diseñador y uno árabe.`,
  },
  {
    title: "WhatsApp · con el precio",
    hint: "Marca, nombre, concentración, mililitros, precio. Si es tester, va en la primera línea.",
    text: `Khamrah, de Lattafa.
Eau de parfum, 100 ml. $ 59.000.

Dátil, canela y tonka: dulce, para la noche. Es sellado, en su caja.`,
  },
  {
    title: "Instagram · publicación",
    hint: "Foto del frasco sobre marfil o piedra, con luz natural. Sin promo en la imagen.",
    text: `Khamrah, de Lattafa
Eau de parfum · 100 ml · $ 59.000

Dátil, canela y tonka. Dulce, para la noche.
Pedilo por WhatsApp.`,
  },
  {
    title: "Instagram · perfil",
    hint: "Foto de perfil: el nombre en dos líneas, «Aromas» y «Donofrio», en ónix sobre marfil, centrado. Hasta que exista el logo. En el campo «Nombre» de Instagram: Aromas Donofrio · Casa de perfume. Usuario: @aromasdonofrio.",
    text: `Aromas Donofrio, casa de perfume.
Perfumes de diseñador y árabes.
Lujo en voz baja.
Pedidos por WhatsApp.`,
  },
]

const answers = [
  {
    q: "¿Es original?",
    a: "Sí. Cada perfume se vende con el nombre de su marca. Si es tester, te lo digo antes. Si no lo tengo, no invento un parecido.",
  },
  {
    q: "¿A qué se parece?",
    a: "Primero cuento cómo huele y para qué momento sirve. El parecido, si hace falta, va después.",
  },
  {
    q: "¿Tenés árabes baratos?",
    a: "Tengo árabes de distintos precios, igual que de diseñador. No son la oferta de la tienda.",
  },
]

export function Voice() {
  return (
    <Shell id="mensajes" className="bg-crema/60">
      <Kicker n="05">Mensajes</Kicker>
      <Title>De vos, claro, y con el nombre del frasco.</Title>
      <Lead>
        Marca, nombre, concentración y mililitros. Cuando algo es tester, se dice antes del precio.
      </Lead>

      <div className="mt-12 overflow-hidden border border-onix/10">
        <div className="grid grid-cols-2 bg-onix text-crema">
          <p className="px-4 py-3 font-sans text-[13px] uppercase tracking-[0.12em] md:px-6">Se dice</p>
          <p className="border-l border-crema/15 px-4 py-3 font-sans text-[13px] uppercase tracking-[0.12em] md:px-6">
            No se dice
          </p>
        </div>
        {say.map(([yes, no]) => (
          <div key={yes} className="grid grid-cols-2 border-t border-onix/10 text-sm leading-snug md:text-base">
            <p className="bg-crema px-4 py-4 md:px-6">{yes}</p>
            <p className="border-l border-onix/10 px-4 py-4 text-sombra line-through decoration-bronce/80 md:px-6">
              {no}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="bg-piedra/40 p-6 md:p-8">
          <p className="font-sans text-[13px] uppercase tracking-[0.12em] text-sombra">Así no</p>
          <p className="mt-4 text-lg leading-relaxed text-pretty">
            Una fragancia exquisita y seductora que despertará tus sentidos con notas de lujo árabe. El complemento perfecto para la mujer empoderada. ¡Combo 3×2!
          </p>
        </article>
        <article className="border-l-2 border-bronce bg-crema p-6 md:p-8">
          <p className="font-sans text-[13px] uppercase tracking-[0.12em] text-granate-profundo">Así</p>
          <p className="mt-4 text-lg leading-relaxed text-pretty">
            Khamrah, de Lattafa, es un eau de parfum de dátil, canela y tonka. Proyecta al principio y después se queda en la ropa hasta el día siguiente. Si buscás oud, este no es tu frasco. Si buscás algo dulce para la noche, entrá por acá.
          </p>
        </article>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <article key={channel.title} className="flex flex-col border border-onix/15 bg-marfil p-6">
            <h3 className="font-display text-2xl tracking-[-0.02em]">{channel.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-sombra">{channel.hint}</p>
            <pre className="mt-4 flex-1 font-reading text-base leading-relaxed whitespace-pre-wrap">
              {channel.text}
            </pre>
            <CopyButton
              value={channel.text}
              label="Copiar"
              toastMessage="Texto copiado."
              className="mt-5 self-start"
            />
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {answers.map((item) => (
          <article key={item.q} className="border-t-2 border-onix pt-4">
            <h3 className="font-display text-2xl tracking-[-0.02em]">{item.q}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-sombra">{item.a}</p>
          </article>
        ))}
      </div>
    </Shell>
  )
}

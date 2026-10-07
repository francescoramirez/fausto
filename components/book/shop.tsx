import { Kicker, Shell } from "@/components/book/kicker"
import { StoreDraft } from "@/components/book/store-draft"
import { Separator } from "@/components/ui/separator"

const rules = [
  {
    title: "Navegación",
    text: "Firma, Attar, Tiras, Cuaderno. La búsqueda existe, el género no es una puerta. El hero no dice «árabes desde…». Eso convierte a Attar en el cajón de ofertas.",
  },
  {
    title: "Ficha",
    text: "Sala, casa, nombre, concentración y mililitros, una frase, salida corazón fondo, precio, agregar. Tester o tira, si aplica, en mono junto a los mililitros. El género comercializado, si hace falta, va al pie.",
  },
  {
    title: "Precio",
    text: "Outfit, sin un precio tachado al lado. Si hay una oferta, se dice en una línea al final, no en el nombre de la marca.",
  },
  {
    title: "Fuentes en Shopify",
    text: "Si el tema no trae Cormorant Garamond, Literata, Outfit y DM Mono, se cargan. No se cambia Cormorant por una script para salir del paso. Los colores del tema usan los tokens, con los mismos nombres.",
  },
]

export function Shop() {
  return (
    <Shell id="tienda">
      <Kicker n="13">Tienda</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Cuando esto se vuelva Shopify.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        La tienda todavía no se construye. Esta es la forma en que tiene que sentirse, para no redibujar la marca cuando llegue el tema.
      </p>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
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
          <Separator className="my-8 bg-tinta/15" />
          <p className="text-sm leading-relaxed text-humo">
            Colecciones: Firma, Attar, Tiras. Páginas: La casa, Cuaderno, Contacto. En el correo de envío: «Tu pedido ya salió de Mirra. Adentro va la lectura de cada frasco. Pruébalo en piel, no solo en la tapa.»
          </p>
        </div>
      </div>
    </Shell>
  )
}

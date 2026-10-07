import { Kicker, Shell } from "@/components/book/kicker"
import { cn } from "@/lib/utils"

const territories = [
  {
    axis: "Disfraz · una sola cultura",
    title: "El rincón prestado",
    text: "O se viste de París o se viste de zoco. Una cultura, contada con utilería.",
    ours: false,
  },
  {
    axis: "Oficio · una sola cultura",
    title: "El especialista",
    text: "Una sala excelente. Respetable, y no es esta casa: aquí se leen dos escrituras.",
    ours: false,
  },
  {
    axis: "Disfraz · dos culturas",
    title: "La tienda combo",
    text: "Negro, oro, «árabes y diseñador», la misma voz para todo. Las dos culturas aplastadas en una promo.",
    ours: false,
  },
  {
    axis: "Oficio · dos culturas",
    title: "Mirra",
    text: "Las dos salas, con nombre propio, la misma luz y ninguna por encima de la otra.",
    ours: true,
  },
]

export function Position() {
  return (
    <Shell id="posicion">
      <Kicker n="03">Posición</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        El lugar que las otras tiendas dejaron vacío.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">
        El mapa no es un estudio de mercado. Es el terreno verbal: de un lado el disfraz, del otro el oficio. Arriba, una sola cultura. Abajo, las dos.
      </p>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {territories.map((territory) => (
          <article
            key={territory.title}
            className={cn(
              "flex min-h-52 flex-col justify-between p-6",
              territory.ours ? "bg-cardenillo text-hueso" : "bg-hueso text-tinta",
            )}
          >
            <p
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.18em]",
                territory.ours ? "text-cana" : "text-humo",
              )}
            >
              {territory.axis}
            </p>
            <div className="mt-8">
              <h3 className="font-display text-4xl tracking-[-0.03em]">{territory.title}</h3>
              <p className={cn("mt-3 max-w-sm leading-relaxed", territory.ours ? "text-hueso/90" : "text-humo")}>
                {territory.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 max-w-3xl border-l-[3px] border-azafran pl-5">
        <p className="font-display text-2xl leading-snug tracking-[-0.03em] text-balance md:text-3xl">
          Muchas casas árabes dialogan con perfumes europeos famosos. En Mirra ese diálogo, si se menciona, va después de describir el frasco. Nunca en el título.
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-humo">
          Si hoy la venta vive de decir «tipo Baccarat», esta marca pide cambiar el orden de las palabras. El perfume puede ser el mismo. El título es el nombre del frasco que vendes: su casa, su concentración, su carácter. El parecido es una ayuda, no la identidad.
        </p>
      </div>
    </Shell>
  )
}

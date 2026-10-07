export type BriefBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

export type BriefSection = {
  heading: string
  blocks: BriefBlock[]
}

export const briefIntro =
  "Brief para dibujar el símbolo de Mirra. La estrategia, la paleta y la tipografía ya están decididas. El encargo es el isotipo, el wordmark y las aplicaciones. No hace falta proponer otra personalidad ni otra paleta."

export const briefSections: BriefSection[] = [
  {
    heading: "La casa",
    blocks: [
      {
        type: "p",
        text: "Mirra es una casa de perfume en español. Vende dos categorías con la misma seriedad: perfumes de diseñador (Sala Firma) y perfumes de casas árabes (Sala Attar). El lujo de esta marca es en voz baja: elegante, cercano, sin dorado de más y sin disfraz de París ni de zoco.",
      },
      {
        type: "p",
        text: "Idioma de todas las piezas: español. El árabe se escribe solo cuando es una palabra real —مُرّ, el nombre de una casa, un material que se dice así—. Nunca como ornamentación.",
      },
    ],
  },
  {
    heading: "El nombre",
    blocks: [
      {
        type: "ul",
        items: [
          "Escritura correcta: Mirra. Sin acento. Con erre fuerte.",
          "Pronunciación: MI-rra. Dos sílabas, fuerza en la primera.",
          "No se dice «la Mirra». Se dice «Mirra», como una casa: «en Mirra».",
          "En piezas comerciales el nombre va con la categoría «casa de perfume», salvo en el sello chico de una caja que ya dice perfume.",
          "En árabe, la misma resina se llama murr y se escribe مُرّ. Puede acompañar al símbolo como leyenda, no como adorno.",
          "Hasta que el isotipo exista, la marca pública es la palabra Mirra en Cormorant Garamond. No se inventa un logo provisorio.",
        ],
      },
    ],
  },
  {
    heading: "Idea del símbolo",
    blocks: [
      {
        type: "p",
        text: "La mirra es una resina. Viajó desde el sur de Arabia hasta la perfumería europea y se quedó en las dos tradiciones que esta tienda vende. No brilla. Huele, y se queda. El español mirra y el árabe murr (مُرّ) son la misma materia.",
      },
      {
        type: "p",
        text: "El isotipo es esa resina como joya en voz baja: un cabujón de granate (piedra pulida, sin facetas de brillantina) sostenido por un engarce de bronce mate. El bronce es el único metal del símbolo. No hay diamante, ni corona, ni gota de perfume.",
      },
      {
        type: "p",
        text: "En el manual hay un estudio: una elipse granate y un arco de bronce debajo, como la montura que abraza la piedra. Es una hipótesis. Si aparece un cabujón más simple o más memorable, se sigue. Lo que no se negocia: una sola piedra, un solo metal mate, nada de foil, y lectura clara a 16 px.",
      },
    ],
  },
  {
    heading: "Qué no es el logo",
    blocks: [
      {
        type: "ul",
        items: [
          "No es una gota, un frasco ni una corona.",
          "No es un diamante facetado, un brillante ni un monograma con laurel.",
          "No es caligrafía árabe decorativa.",
          "No lleva mármol, humo, destellos, glitter ni foil de oro.",
          "No va en script inglesa ni en mayúsculas como versión principal.",
          "El dorado no es un color de relleno. El metal, si aparece, es bronce mate y es una línea.",
        ],
      },
    ],
  },
  {
    heading: "Wordmark",
    blocks: [
      {
        type: "ul",
        items: [
          "Fuente: Cormorant Garamond, romana, peso 600.",
          "Caja: «Mirra», mayúscula inicial. No «MIRRA».",
          "Tracking ligeramente abierto o neutro. Esta letra no se aprieta hasta que las erres se peguen.",
          "El color del wordmark es ónix, o crema cuando el fondo es ónix. El granate vive en el isotipo, no en una letra pintada.",
          "Debajo, en Outfit, caja alta, tracking amplio, tamaño pequeño: CASA DE PERFUME.",
          "La itálica se reserva para la frase «Lujo en voz baja». No para el logo.",
        ],
      },
    ],
  },
  {
    heading: "Piezas a entregar",
    blocks: [
      {
        type: "ul",
        items: [
          "Isotipo a color: granate con engarce en bronce mate.",
          "Isotipo a una tinta, sobre marfil y en reversa sobre ónix.",
          "Wordmark solo.",
          "Lockup horizontal: isotipo, wordmark y «casa de perfume».",
          "Lockup vertical.",
          "Favicon y avatar. Tiene que leerse a 16 px y a 32 px.",
          "Sello de caja: isotipo chico, sin slogan.",
          "Aplicaciones de muestra: avatar, encabezado de tienda, cara de caja, tarjeta de lectura y una plantilla de historia.",
        ],
      },
    ],
  },
  {
    heading: "Color, ya cerrado",
    blocks: [
      {
        type: "p",
        text: "No propongas otra paleta. Cuatro colores se recuerdan. El lujo está en la proporción: mucho marfil, ónix para escribir, granate en poca cantidad, bronce en un hilo.",
      },
      {
        type: "ul",
        items: [
          "Marfil #F3EEE6 — fondo principal.",
          "Ónix #12100E — texto y wordmark.",
          "Granate #6B2434 — color firma, isotipo, botones.",
          "Bronce mate #8F785C — solo un hilo, un engarce, un filete. Nunca un fondo. Nunca foil.",
          "Crema #FBF8F4 — fichas y reverso.",
          "Piedra #D4CBBF — filetes y fondos quietos.",
          "Sombra #5E564E — texto secundario sobre marfil.",
          "Granate profundo #5C1E2C — enlaces y texto chico sobre marfil.",
          "Cuero #5C4038 — rótulo de la Sala Attar, nada más.",
          "Noche #1C2433 — rótulo de la Sala Firma, nada más.",
        ],
      },
      {
        type: "p",
        text: "Proporción aproximada: sesenta y cinco por ciento marfil, veinticinco ónix, ocho granate. El bronce aparece una sola vez por pieza. Si una mockup se puede describir como dorada, está mal.",
      },
    ],
  },
  {
    heading: "Tipografía, ya cerrada",
    blocks: [
      {
        type: "ul",
        items: [
          "Display y wordmark: Cormorant Garamond.",
          "Texto largo: Literata.",
          "Interfaz, precios, navegación: Outfit.",
          "Datos de fórmula (EDP, mililitros, notas técnicas): DM Mono.",
          "Árabe real: Noto Naskh Arabic.",
        ],
      },
      {
        type: "p",
        text: "Cormorant se usa en romana para el nombre y los titulares. La itálica es una frase, no el sistema. No la cambies por una script, ni por un Didot más flaco, ni por Playfair.",
      },
    ],
  },
  {
    heading: "Cómo presentar las mockups",
    blocks: [
      {
        type: "p",
        text: "Sobre marfil, yeso cálido o lino. No sobre mármol veteado ni sobre negro con oro. Si hay packaging: caja mate color marfil, impresión en ónix, sello granate, cierre con un hilo de bronce mate. Nada de foil. Las dos salas se fotografían con la misma luz y el mismo fondo.",
      },
    ],
  },
  {
    heading: "Dirección, no camisa de fuerza",
    blocks: [
      {
        type: "p",
        text: "El estudio del manual alinea la idea. El dibujo puede alejarse de esa elipse. No puede alejarse de la piedra única, del metal mate y escaso, del wordmark en Cormorant, ni de esta paleta.",
      },
    ],
  },
]

export function briefToMarkdown(): string {
  const lines: string[] = [
    "# Brief de identidad visual — Mirra",
    "",
    briefIntro,
    "",
  ]

  for (const section of briefSections) {
    lines.push(`## ${section.heading}`, "")
    for (const block of section.blocks) {
      if (block.type === "p") {
        lines.push(block.text, "")
      } else {
        for (const item of block.items) lines.push(`- ${item}`)
        lines.push("")
      }
    }
  }

  lines.push(
    "---",
    "",
    "Manual de identidad, versión 2. El símbolo todavía no está dibujado: este documento es el encargo.",
    "",
  )

  return lines.join("\n")
}

export const briefMarkdown = briefToMarkdown()

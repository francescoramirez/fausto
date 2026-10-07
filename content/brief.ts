export type BriefBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

export type BriefSection = {
  heading: string
  blocks: BriefBlock[]
}

export const briefIntro =
  "Brief para dibujar el símbolo de Cálamo. La estrategia, la paleta y la tipografía ya están decididas. El encargo es el isotipo, el wordmark y las aplicaciones. No hace falta proponer otra personalidad."

export const briefSections: BriefSection[] = [
  {
    heading: "La casa",
    blocks: [
      {
        type: "p",
        text: "Cálamo es una casa de perfume en español. Vende dos categorías con la misma seriedad: perfumes de diseñador (Sala Firma) y perfumes de casas árabes (Sala Qalam). No es una maison francesa de mentira ni un bazar disfrazado. Existe porque ese mercado, en América Latina, está lleno de tiendas negro y oro que tratan lo árabe como oferta y lo europeo como trofeo.",
      },
      {
        type: "p",
        text: "Idioma de todas las piezas: español. El árabe se escribe solo cuando es una palabra real —قلم, el nombre de una casa, un material que se dice así—. Nunca como ornamentación.",
      },
    ],
  },
  {
    heading: "El nombre",
    blocks: [
      {
        type: "ul",
        items: [
          "Escritura correcta: Cálamo. Con acento.",
          "Pronunciación: CÁ-la-mo. Tres sílabas, fuerza en la primera.",
          "No se dice «la Cálamo». Se dice «Cálamo», como una casa: «en Cálamo».",
          "En piezas comerciales el nombre va con la categoría «casa de perfume», salvo en el sello chico de una caja que ya dice perfume.",
          "En árabe, la misma caña se llama qalam y se escribe قلم. Pronunciación para el equipo: ká-lam. Puede acompañar al símbolo como leyenda, no como adorno.",
          "Hasta que el isotipo exista, la marca pública es la palabra Cálamo en Fraunces. No se inventa un logo provisorio.",
        ],
      },
    ],
  },
  {
    heading: "Idea del símbolo",
    blocks: [
      {
        type: "p",
        text: "Un cálamo es una caña hueca, cortada en diagonal, con la que se escribía a mano. El español «cálamo» viene del latín calamus, y ese del griego kálamos. El árabe qalam (قلم) nombra esa misma caña: llegó desde el griego. No es un juego de letras. Las dos tradiciones de esta tienda escribieron con el mismo instrumento.",
      },
      {
        type: "p",
        text: "El isotipo es esa caña vista en corte: un círculo hueco (el tubo) y un solo corte (la punta). El corte es el único lugar donde entra el azafrán. El resto del símbolo vive en cardenillo o en tinta. En la versión de una sola tinta, el corte es el vacío: no se simula el azafrán con un gris.",
      },
      {
        type: "p",
        text: "En el manual hay un estudio geométrico —arco abierto hacia abajo a la derecha, corte en diagonal—. Es una hipótesis para alinear la idea. Si aparece una caña más simple o más memorable, se sigue. Lo que no se negocia: caña hueca, un solo corte, azafrán solo ahí, y lectura clara a 16 px.",
      },
    ],
  },
  {
    heading: "Qué no es el logo",
    blocks: [
      {
        type: "ul",
        items: [
          "No es un monograma, una gota ni un frasco.",
          "No es una corona, un laurel, un diamante, un león ni un escudo.",
          "No es caligrafía árabe decorativa, ni una frase árabe que el equipo no pueda leer.",
          "No es geometría islámica usada como disfraz.",
          "No lleva mármol, humo, destellos ni foil de oro como requisito.",
          "No va en script inglesa ni en un Didot de vitrina.",
          "No se le quita el acento a la Á.",
          "La versión principal del wordmark no va en mayúsculas. «CÁLAMO» en caja alta solo se permite como filete muy chico, con tracking amplio.",
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
          "Fuente: Fraunces, romana, no itálica.",
          "Caja: «Cálamo», mayúscula inicial, acento visible.",
          "Peso aproximado: 520 a 620. Tracking ligeramente negativo.",
          "El acento es parte del dibujo. No se pinta de otro color: el cardenillo vive en el isotipo, no en una letra suelta.",
          "Debajo, en Outfit, caja alta, tracking amplio, tamaño pequeño: CASA DE PERFUME.",
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
          "Isotipo a color: cardenillo con el corte en azafrán.",
          "Isotipo a una tinta, sobre papel y en reversa.",
          "Wordmark solo.",
          "Lockup horizontal: isotipo, wordmark y «casa de perfume».",
          "Lockup vertical.",
          "Favicon y avatar. Tiene que leerse a 16 px y a 32 px.",
          "Sello de caja: isotipo chico, sin slogan.",
          "Aplicaciones de muestra, no una biblia: avatar, encabezado de tienda, cara de caja, tarjeta de lectura (salida, corazón, fondo) y una plantilla de historia.",
        ],
      },
    ],
  },
  {
    heading: "Color, ya cerrado",
    blocks: [
      {
        type: "p",
        text: "No propongas otra paleta. Cuatro colores se recuerdan. Los demás sostienen la lectura o etiquetan una sala.",
      },
      {
        type: "ul",
        items: [
          "Papel de tira #E6D9C8 — fondo principal.",
          "Tinta de agallas #1A1613 — texto y wordmark.",
          "Cardenillo #0E6B5E — color firma, isotipo, botones.",
          "Azafrán #C6531F — solo el corte, un hilo, un sello. Una vez por pieza.",
          "Hueso #F3EEE6 — fichas y reverso.",
          "Caña #CDBFA6 — filetes y fondos quietos.",
          "Humo #524A43 — texto secundario sobre papel.",
          "Cardenillo profundo #085248 — enlaces y texto chico sobre papel.",
          "Resina #7A3140 — rótulo de la Sala Qalam, nada más.",
          "Azul de hiel #2C384C — rótulo de la Sala Firma, nada más.",
        ],
      },
      {
        type: "p",
        text: "Proporción aproximada: sesenta por ciento papel, veinticinco tinta, diez cardenillo. El azafrán aparece una sola vez. Resina y hiel no pintan pantallas enteras: identifican la sala en una etiqueta.",
      },
    ],
  },
  {
    heading: "Tipografía, ya cerrada",
    blocks: [
      {
        type: "ul",
        items: [
          "Display y wordmark: Fraunces.",
          "Texto largo: Literata.",
          "Interfaz, precios, navegación: Outfit.",
          "Datos de fórmula (EDP, mililitros, notas técnicas): DM Mono.",
          "Árabe real: Noto Naskh Arabic.",
        ],
      },
      {
        type: "p",
        text: "No sustituyas Fraunces por Didot, Playfair o una script. Fraunces tiene el terminal blando de la tinta que se abre en el papel. Un Didot sería la firma de otra marca.",
      },
    ],
  },
  {
    heading: "Cómo presentar las mockups",
    blocks: [
      {
        type: "p",
        text: "Sobre papel de tira, no sobre mármol. Si hay packaging: cartón sin estucar, impresión en tinta, cierre con un hilo color azafrán. Nada de foil. Las dos salas se fotografían con la misma luz. Un frasco árabe no va sobre un tapete «exótico» si el de diseñador va sobre mármol: los dos van sobre la misma mesa.",
      },
    ],
  },
  {
    heading: "Dirección, no camisa de fuerza",
    blocks: [
      {
        type: "p",
        text: "El estudio del manual alinea la idea. El dibujo puede alejarse de esa geometría. No puede alejarse de la caña, del corte único, del azafrán escaso, del acento en la Á, ni de esta paleta.",
      },
    ],
  },
]

export function briefToMarkdown(): string {
  const lines: string[] = [
    "# Brief de identidad visual — Cálamo",
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
    "Manual de identidad, versión 1. El símbolo todavía no está dibujado: este documento es el encargo.",
    "",
  )

  return lines.join("\n")
}

export const briefMarkdown = briefToMarkdown()

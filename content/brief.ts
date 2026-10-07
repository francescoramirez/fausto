export type BriefBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }

export type BriefSection = {
  heading: string
  blocks: BriefBlock[]
}

export const briefIntro =
  "Encargo para dibujar el logo de Mirra. El nombre, los colores y las letras ya están decididos."

export const briefSections: BriefSection[] = [
  {
    heading: "Qué es",
    blocks: [
      {
        type: "p",
        text: "Mirra es una casa de perfume. Vende perfumes de diseñador y perfumes árabes, los dos con la misma seriedad. El lujo es elegante y contenido: mucho marfil, poco granate, el bronce es una línea. Todo el texto de la marca va en español.",
      },
    ],
  },
  {
    heading: "El nombre",
    blocks: [
      {
        type: "ul",
        items: [
          "Se escribe Mirra. Mayúscula inicial. No MIRRA.",
          "Se pronuncia MI-rra.",
          "Debajo, chico: CASA DE PERFUME.",
          "Hasta que el símbolo exista, la marca es la palabra Mirra. No se publica un logo provisorio.",
        ],
      },
    ],
  },
  {
    heading: "El símbolo",
    blocks: [
      {
        type: "p",
        text: "Una piedra granate, lisa, y debajo un arco de bronce mate que la sostiene. Es una joya simple, sin brillantina. En el manual hay un dibujo de referencia. Se puede simplificar. No se puede convertir en gota, corona, diamante ni frasco.",
      },
      {
        type: "ul",
        items: [
          "Versión a color: granate y bronce mate.",
          "Versión a una tinta, sobre marfil y sobre ónix.",
          "El nombre solo, y el nombre con el símbolo.",
          "Avatar que se lea chico.",
        ],
      },
    ],
  },
  {
    heading: "Colores",
    blocks: [
      {
        type: "ul",
        items: [
          "Marfil #F3EEE6 — fondo.",
          "Ónix #12100E — texto y nombre.",
          "Granate #6B2434 — símbolo y botones. Poco.",
          "Bronce mate #8F785C — una línea. Nunca un fondo.",
          "Crema #FBF8F4 — fichas.",
          "Piedra #D4CBBF — filetes.",
          "Sombra #5E564E — texto secundario.",
          "Granate profundo #5C1E2C — links.",
        ],
      },
    ],
  },
  {
    heading: "Letras",
    blocks: [
      {
        type: "ul",
        items: [
          "Nombre y títulos: Cormorant Garamond, romana, peso 600.",
          "Textos: Literata.",
          "Precios, menú y botones: Outfit.",
          "Mililitros y concentración: DM Mono.",
        ],
      },
    ],
  },
  {
    heading: "Qué no hacer",
    blocks: [
      {
        type: "ul",
        items: [
          "Fondo dorado, foil, glitter o mármol.",
          "Corona, gota, diamante o caligrafía de adorno.",
          "El nombre en mayúsculas o en letra script.",
          "Mockups que parezcan una promo.",
        ],
      },
    ],
  },
]

export function briefToMarkdown(): string {
  const lines: string[] = ["# Brief — Mirra", "", briefIntro, ""]

  for (const section of briefSections) {
    lines.push(`## ${section.heading}`, "")
    for (const block of section.blocks) {
      if (block.type === "p") lines.push(block.text, "")
      else {
        for (const item of block.items) lines.push(`- ${item}`)
        lines.push("")
      }
    }
  }

  return lines.join("\n")
}

export const briefMarkdown = briefToMarkdown()

export const colors = {
  papel: "#E6D9C8",
  hueso: "#F3EEE6",
  tinta: "#1A1613",
  humo: "#524A43",
  cana: "#CDBFA6",
  cardenillo: "#0E6B5E",
  cardenilloInk: "#085248",
  azafran: "#C6531F",
  resina: "#7A3140",
  hiel: "#2C384C",
  miel: "#8A5A32",
} as const

export const chapters = [
  { id: "portada", n: "00", label: "Portada" },
  { id: "idea", n: "01", label: "La idea" },
  { id: "nombre", n: "02", label: "Nombre" },
  { id: "posicion", n: "03", label: "Posición" },
  { id: "relato", n: "04", label: "Relato" },
  { id: "caracter", n: "05", label: "Carácter" },
  { id: "salas", n: "06", label: "Salas" },
  { id: "voz", n: "07", label: "Voz" },
  { id: "color", n: "08", label: "Color" },
  { id: "tipo", n: "09", label: "Tipo" },
  { id: "simbolo", n: "10", label: "Símbolo" },
  { id: "imagen", n: "11", label: "Imagen" },
  { id: "piezas", n: "12", label: "Piezas" },
  { id: "tienda", n: "13", label: "Tienda" },
  { id: "brief", n: "14", label: "Brief" },
  { id: "limites", n: "15", label: "Límites" },
] as const

export type ChapterId = (typeof chapters)[number]["id"]

export const coreColors = [
  {
    name: "Papel de tira",
    hex: colors.papel,
    ink: "dark" as const,
    role: "El fondo de la casa. Es el color de una tira de blotter, no un blanco de clínica.",
    use: "Fondos, cajas, gran parte de Instagram.",
  },
  {
    name: "Tinta de agallas",
    hex: colors.tinta,
    ink: "light" as const,
    role: "La tinta con la que se escribía. Casi negra, con un fondo cálido.",
    use: "Texto, wordmark, la página del relato.",
  },
  {
    name: "Cardenillo",
    hex: colors.cardenillo,
    ink: "light" as const,
    role: "El color que se recuerda. Cobre oxidado, el de un alambique viejo.",
    use: "Isotipo, botones, un acento por pieza. Texto chico: usa el cardenillo profundo.",
  },
  {
    name: "Azafrán",
    hex: colors.azafran,
    ink: "dark" as const,
    role: "El corte del cálamo. Un hilo, un sello, una línea. Aparece una vez.",
    use: "Nunca como texto pequeño. Nunca como fondo con letras claras encima.",
  },
]

export const supportColors = [
  {
    name: "Hueso",
    hex: colors.hueso,
    ink: "dark" as const,
    role: "Superficie elevada: ficha, carta, reverso del sello.",
    use: "Tarjetas y cajas interiores.",
  },
  {
    name: "Caña",
    hex: colors.cana,
    ink: "dark" as const,
    role: "La caña sin cortar. Filetes, fondos quietos, separadores.",
    use: "Líneas y bloques secundarios.",
  },
  {
    name: "Humo",
    hex: colors.humo,
    ink: "light" as const,
    role: "Texto secundario. No es un gris de interfaz: es tinta diluida.",
    use: "Párrafos de apoyo sobre papel o hueso.",
  },
  {
    name: "Cardenillo profundo",
    hex: colors.cardenilloInk,
    ink: "light" as const,
    role: "El mismo cobre, más oscuro, para que un enlace se pueda leer.",
    use: "Links y labels chicos sobre papel.",
  },
  {
    name: "Resina",
    hex: colors.resina,
    ink: "light" as const,
    role: "Etiqueta de la Sala Qalam. Rosa seca, cuero, dragón.",
    use: "Solo el rótulo de esa sala. No pinta la tienda.",
  },
  {
    name: "Azul de hiel",
    hex: colors.hiel,
    ink: "light" as const,
    role: "Etiqueta de la Sala Firma. La tinta europea, azulada.",
    use: "Solo el rótulo de esa sala. No pinta la tienda.",
  },
]

export const rooms = [
  {
    id: "firma",
    n: "Sala 01",
    name: "Firma",
    accent: "Azul de hiel",
    hex: colors.hiel,
    pronoun: "La sala de las firmas",
    promise: "Perfumes de casas de diseñador, dichos por su nombre.",
    not: "No es la sección cara, ni la de los originales de verdad frente a las copias.",
    sentence:
      "Terre d’Hermès es naranja amarga sobre piedra. Para el día en que quieres oler a aire seco.",
  },
  {
    id: "qalam",
    n: "Sala 02",
    name: "Qalam",
    accent: "Resina",
    hex: colors.resina,
    pronoun: "La sala qalam, se pronuncia ká-lam",
    promise: "Perfumes de casas árabes, con la misma luz que las firmas.",
    not: "No es el cajón barato, ni el rincón exótico, ni la imitación de la sala de al lado.",
    sentence:
      "Khamrah, de Lattafa, es dátil, canela y tonka. Se queda en la ropa. No es un oud.",
  },
  {
    id: "tiras",
    n: "Formato",
    name: "Tiras",
    accent: "Cardenillo",
    hex: colors.cardenillo,
    pronoun: "Pide una tira",
    promise: "Decants y sets cortos para decidir con la piel, no con el anuncio.",
    not: "No se llama mini, ni muestra, ni combo, si se está cobrando.",
    sentence:
      "Una tira de 10 ml es el perfume, en menos vidrio. El nombre y la concentración no cambian.",
  },
  {
    id: "cuaderno",
    n: "Voz pública",
    name: "Cuaderno",
    accent: "Tinta",
    hex: colors.tinta,
    pronoun: "El cuaderno de la casa",
    promise: "Textos cortos que enseñan a leer un perfume sin hablar hacia abajo.",
    not: "No es un blog de estilo de vida ni una tanda de tips con emojis.",
    sentence:
      "Un attar es aceite. No es un eau de parfum más fuerte. Se pone en menos cantidad.",
  },
] as const

export const families = [
  "Cítrico seco",
  "Floral",
  "Ambarado dulce",
  "Gourmand",
  "Madera",
  "Oud",
  "Cuero y humo",
  "Piel limpia",
] as const

export const say = [
  ["Casa de perfume", "Tienda de fragancias premium"],
  ["Firma y Qalam", "Diseñador y árabes baratos"],
  ["Eau de parfum, attar, 10 ml", "Esencia intensa de larga duración"],
  ["Se queda en la ropa", "Despierta tus sentidos"],
  ["Lattafa, Hermès, Rasasi", "Tipo Baccarat, inspirado en, el dupe de"],
  ["Tester, si lo es", "Sellado, cuando no lo está"],
  ["Para el día, para el frío, para una cena", "Para ella, para él, para la mujer empoderada"],
] as const

export const traits = [
  {
    word: "Precisa",
    line: "Dice la casa, la concentración, los mililitros y la estela. No adjetiva para no informar.",
  },
  {
    word: "Cálida",
    line: "Habla de la ropa, de la hora y de la piel. El perfume ocurre en un cuerpo, no en una vitrina.",
  },
  {
    word: "Pareja",
    line: "Las dos salas pesan lo mismo. Qalam no es la oferta. Firma no es la única de verdad.",
  },
  {
    word: "Derecha",
    line: "El frasco se llama como se llama. Si se parece a otro, eso se dice después, nunca en el título.",
  },
] as const

export const refusals = [
  "Decir que un perfume árabe es «el tipo» de uno europeo antes de decir su nombre.",
  "Organizar la tienda en hombre y mujer. Si una casa lo comercializó así, es un dato al pie, no una puerta.",
  "Llamar premium, luxe, VIP o económico. El precio es un número, no un adjetivo.",
  "Disfrazar la casa de París con un «Maison», ni de zoco con caligrafía que nadie de la tienda sabe leer.",
  "Usar oro, mármol, corona, león, mezquita, humo de estudio o foil como si fueran obligatorios.",
  "Esconder un tester, un decant o una presentación sin celofán.",
  "Tachar un precio al lado de otro para que la marca parezca una promo permanente.",
  "Publicar un logo provisorio de otra estética mientras el isotipo se dibuja. Hasta entonces, el wordmark tipográfico es la marca.",
] as const

export const cssTokens = `/* Cálamo — tokens de color
   Papel, tinta, cardenillo y azafrán son la marca.
   El resto sostiene la lectura o etiqueta una sala. */

:root {
  --papel: #E6D9C8;
  --hueso: #F3EEE6;
  --tinta: #1A1613;
  --humo: #524A43;
  --cana: #CDBFA6;
  --cardenillo: #0E6B5E;
  --cardenillo-ink: #085248;
  --azafran: #C6531F;
  --resina: #7A3140;
  --hiel: #2C384C;
  --miel: #8A5A32; /* solo imagen: la mancha del blotter. No es color de interfaz */
}
`

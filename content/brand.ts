export const colors = {
  papel: "#F3EEE6",
  hueso: "#FBF8F4",
  tinta: "#12100E",
  humo: "#5E564E",
  cana: "#D4CBBF",
  cardenillo: "#6B2434",
  cardenilloInk: "#5C1E2C",
  azafran: "#8F785C",
  resina: "#5C4038",
  hiel: "#1C2433",
  miel: "#6E4A38",
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
    name: "Marfil",
    hex: colors.papel,
    ink: "dark" as const,
    role: "El fondo. Marfil cálido, limpio, de salón. La mayor parte de la casa vive aquí.",
    use: "Fondos, cajas, la grilla de Instagram.",
  },
  {
    name: "Ónix",
    hex: colors.tinta,
    ink: "light" as const,
    role: "Negro cálido, de noche. El texto y el wordmark. No es un negro de plástico.",
    use: "Texto, wordmark, la página del relato.",
  },
  {
    name: "Granate",
    hex: colors.cardenillo,
    ink: "light" as const,
    role: "La joya. Un rojo de piedra, apagado, como la mirra a contraluz. Es el color que se recuerda.",
    use: "Isotipo, botones, un acento por pieza. Texto chico: granate profundo.",
  },
  {
    name: "Bronce mate",
    hex: colors.azafran,
    ink: "dark" as const,
    role: "El único metal. Un hilo, un engarce, un filete. Mate: si brilla, se pasó.",
    use: "Nunca un fondo. Nunca foil. Nunca texto pequeño.",
  },
]

export const supportColors = [
  {
    name: "Crema",
    hex: colors.hueso,
    ink: "dark" as const,
    role: "Superficie elevada: ficha, carta, interior de la caja.",
    use: "Tarjetas y el reverso del sello.",
  },
  {
    name: "Piedra",
    hex: colors.cana,
    ink: "dark" as const,
    role: "Yeso cálido. Filetes y fondos quietos.",
    use: "Líneas y bloques secundarios.",
  },
  {
    name: "Sombra",
    hex: colors.humo,
    ink: "light" as const,
    role: "Texto secundario. Ónix diluido, nunca un gris frío de interfaz.",
    use: "Párrafos de apoyo sobre marfil o crema.",
  },
  {
    name: "Granate profundo",
    hex: colors.cardenilloInk,
    ink: "light" as const,
    role: "El mismo granate, más oscuro, para que un enlace se lea.",
    use: "Links y rótulos chicos sobre marfil.",
  },
  {
    name: "Cuero",
    hex: colors.resina,
    ink: "light" as const,
    role: "Etiqueta de la Sala Attar. Marrón de estuche, no un dorado.",
    use: "Solo el rótulo de esa sala. No pinta la tienda.",
  },
  {
    name: "Noche",
    hex: colors.hiel,
    ink: "light" as const,
    role: "Etiqueta de la Sala Firma. Azul de smoking, casi negro.",
    use: "Solo el rótulo de esa sala. No pinta la tienda.",
  },
]

export const rooms = [
  {
    id: "firma",
    n: "Sala 01",
    name: "Firma",
    accent: "Noche",
    hex: colors.hiel,
    pronoun: "La sala de las firmas",
    promise: "Perfumes de casas de diseñador, dichos por su nombre.",
    not: "No es la sección cara, ni la de los originales de verdad frente a las copias.",
    sentence:
      "Terre d’Hermès es naranja amarga sobre piedra. Para el día en que quieres oler a aire seco.",
  },
  {
    id: "attar",
    n: "Sala 02",
    name: "Attar",
    accent: "Cuero",
    hex: colors.resina,
    pronoun: "La sala attar, se pronuncia Á-tar",
    promise: "Perfumes de casas árabes, con la misma luz que las firmas.",
    not: "No es el cajón barato, ni el rincón exótico, ni la imitación de la sala de al lado.",
    sentence:
      "Khamrah, de Lattafa, es dátil, canela y tonka. Se queda en la ropa. No es un oud.",
  },
  {
    id: "tiras",
    n: "Formato",
    name: "Tiras",
    accent: "Granate",
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
    accent: "Ónix",
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
  ["Firma y Attar", "Diseñador y árabes baratos"],
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
    line: "Las dos salas pesan lo mismo. Attar no es la oferta. Firma no es la única de verdad.",
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
  "Cubrir una pieza de dorado, foil, glitter o mármol veteado. El bronce es un hilo mate. Si la pieza grita dinero, no es Mirra.",
  "Esconder un tester, un decant o una presentación sin celofán.",
  "Tachar un precio al lado de otro para que la marca parezca una promo permanente.",
  "Publicar un logo provisorio de otra estética mientras el isotipo se dibuja. Hasta entonces, el wordmark tipográfico es la marca.",
] as const

export const cssTokens = `/* Mirra — tokens de color
   Marfil, ónix, granate y bronce mate son la marca.
   El bronce nunca es un fondo. Cuero y noche solo etiquetan una sala. */

:root {
  --marfil: #F3EEE6;
  --crema: #FBF8F4;
  --onix: #12100E;
  --sombra: #5E564E;
  --piedra: #D4CBBF;
  --granate: #6B2434;
  --granate-ink: #5C1E2C;
  --bronce: #8F785C;
  --cuero: #5C4038;
  --noche: #1C2433;
  --resina-imagen: #6E4A38; /* solo la mancha de una foto. No es color de interfaz */
}
`

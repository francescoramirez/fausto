export const chapters = [
  { id: "portada", n: "00", label: "Portada" },
  { id: "esencial", n: "01", label: "Lo esencial" },
  { id: "color", n: "02", label: "Colores" },
  { id: "tipo", n: "03", label: "Letras" },
  { id: "producto", n: "04", label: "Un producto" },
  { id: "mensajes", n: "05", label: "Mensajes" },
  { id: "no", n: "06", label: "Qué no hacer" },
] as const

export const essentials = [
  ["Nombre", "Aromas Donofrio. Se pronuncia a-RO-mas do-NO-frio. Se escribe «Aromas Donofrio», nunca en mayúsculas ni con apóstrofo. Debajo, chico: casa de perfume. En una charla alcanza con «Donofrio»."],
  ["Frase", "Lujo en voz baja."],
  ["Qué vende", "Perfumes de diseñador y perfumes árabes, con la misma seriedad. Cada frasco con su marca y su nombre."],
  ["Cómo se ordena", "Dos secciones: Diseñador y Árabes. Los testers van en su sección, con «tester» en la ficha."],
  ["Cómo se ve", "Fondo marfil, texto ónix. Granate poco, en el botón. Una línea de bronce mate. Nada dorado."],
  ["Cómo se habla", "De vos y concreto: marca, nombre, concentración y mililitros. El precio es un número. Si es tester, se dice."],
  ["El logo", "Todavía no existe. Hasta que exista, la marca son las palabras Aromas Donofrio, en ónix, en una línea o en dos. Nada provisorio. La dirección: una piedra granate lisa con un arco de bronce mate debajo."],
] as const

export const coreColors = [
  {
    name: "Marfil",
    hex: "#F3EEE6",
    ink: "dark" as const,
    role: "El fondo: tienda, historias, caja, fotos.",
    use: "Casi todo es marfil.",
  },
  {
    name: "Ónix",
    hex: "#12100E",
    ink: "light" as const,
    role: "El texto y el nombre de la marca.",
    use: "Como fondo, solo si hace falta.",
  },
  {
    name: "Granate",
    hex: "#6B2434",
    ink: "light" as const,
    role: "El botón de comprar. Después, el símbolo.",
    use: "Una vez por pantalla. Nunca un fondo grande.",
  },
  {
    name: "Bronce mate",
    hex: "#8F785C",
    ink: "dark" as const,
    role: "Una línea fina: bajo el nombre o entre secciones.",
    use: "Nunca fondo ni texto. Nunca brillante.",
  },
]

export const supportColors = [
  {
    name: "Crema",
    hex: "#FBF8F4",
    role: "Fichas y tarjetas, apenas más claras que el marfil.",
  },
  {
    name: "Piedra",
    hex: "#D4CBBF",
    role: "Separadores y fondo de foto. No para texto.",
  },
  {
    name: "Sombra",
    hex: "#5E564E",
    role: "Texto secundario: aclaraciones, no títulos.",
  },
  {
    name: "Granate profundo",
    hex: "#5C1E2C",
    role: "Links y texto chico en granate.",
  },
]

export const say = [
  ["Aromas Donofrio, casa de perfume", "Premium, luxe, VIP"],
  ["Khamrah, de Lattafa", "Un perfume «tipo» otra marca"],
  ["Eau de parfum, 100 ml", "Esencia intensa de larga duración"],
  ["Árabes", "Árabes baratos"],
  ["Terre d’Hermès, tester, 100 ml", "Último frasco, se agota"],
  ["Para el día o para salir", "Para ella, para él"],
] as const

export const refusals = [
  ["Palabras", "«Tipo [otra marca]» en un título. «Árabes desde…» para abrir la tienda. «Premium», «luxe», «VIP». Separar todo en hombre y mujer."],
  ["Tester", "Esconder que un frasco es tester."],
  ["Nombre", "Escribir «AROMAS DONOFRIO», «D’Onofrio» o el nombre en letra manuscrita."],
  ["Imagen", "Fondo dorado, foil, glitter o mármol. Corona, gota, diamante, frasco dibujado o caligrafía de adorno. Fotos que parezcan una promo."],
  ["Precio", "Tachados, combos, cuentas regresivas y «oferta imperdible»."],
  ["Logo", "Publicar uno provisorio mientras se dibuja el de verdad."],
] as const

export const cssTokens = `/* Aromas Donofrio — colores
   Bronce solo para una línea: nunca fondo, nunca texto. */

:root {
  --marfil: #F3EEE6;
  --crema: #FBF8F4;
  --onix: #12100E;
  --sombra: #5E564E;
  --piedra: #D4CBBF;
  --granate: #6B2434;
  --granate-profundo: #5C1E2C;
  --bronce: #8F785C;
}
`

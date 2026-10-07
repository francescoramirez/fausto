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
  { id: "esencial", n: "01", label: "Esencial" },
  { id: "color", n: "02", label: "Color" },
  { id: "tipo", n: "03", label: "Letras" },
  { id: "simbolo", n: "04", label: "Logo" },
  { id: "voz", n: "05", label: "Cómo se habla" },
  { id: "tienda", n: "06", label: "Tienda" },
  { id: "brief", n: "07", label: "Brief" },
] as const

export type ChapterId = (typeof chapters)[number]["id"]

export const coreColors = [
  {
    name: "Marfil",
    hex: colors.papel,
    ink: "dark" as const,
    role: "El fondo de la página, de la caja y de las fotos.",
    use: "Úsalo en casi todo.",
  },
  {
    name: "Ónix",
    hex: colors.tinta,
    ink: "light" as const,
    role: "El texto y el nombre Mirra.",
    use: "También para un fondo oscuro, cuando haga falta.",
  },
  {
    name: "Granate",
    hex: colors.cardenillo,
    ink: "light" as const,
    role: "El color que se recuerda. Botón y símbolo.",
    use: "Poco. Una vez por pieza alcanza.",
  },
  {
    name: "Bronce mate",
    hex: colors.azafran,
    ink: "dark" as const,
    role: "Una línea. El único metal.",
    use: "Nunca un fondo. Nunca dorado brillante.",
  },
]

export const supportColors = [
  {
    name: "Crema",
    hex: colors.hueso,
    ink: "dark" as const,
    role: "Fichas y tarjetas, un poco más claras que el marfil.",
    use: "Cajas interiores.",
  },
  {
    name: "Piedra",
    hex: colors.cana,
    ink: "dark" as const,
    role: "Filetes y bloques secundarios.",
    use: "Separar, no decorar.",
  },
  {
    name: "Sombra",
    hex: colors.humo,
    ink: "light" as const,
    role: "Texto secundario.",
    use: "Aclaraciones, no títulos.",
  },
  {
    name: "Granate profundo",
    hex: colors.cardenilloInk,
    ink: "light" as const,
    role: "El mismo granate, más oscuro, para texto chico.",
    use: "Links.",
  },
]

export const say = [
  ["Mirra, casa de perfume", "Premium, luxe, VIP"],
  ["Diseñador y árabes", "Árabes baratos"],
  ["Eau de parfum, 100 ml", "Esencia intensa de larga duración"],
  ["Khamrah, de Lattafa", "El tipo de otra marca"],
  ["Tester, si lo es", "Sellado, si no lo está"],
  ["Para el día o para salir", "Para ella, para él, para la reina"],
] as const

export const refusals = [
  "Poner «tipo [marca]» como título del producto.",
  "Abrir la tienda con «árabes desde…».",
  "Separar todo en hombre y mujer.",
  "Llenar una pieza de dorado, foil o mármol.",
  "Esconder que un frasco es tester.",
  "Publicar un logo provisorio mientras se dibuja el de verdad.",
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

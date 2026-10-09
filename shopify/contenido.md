# Aromas Donofrio — contenido de la tienda Shopify

Textos listos para cargar. Salen del manual de marca v2. Lo que está entre [corchetes] lo tiene que completar el dueño.

## Datos de la tienda

- Nombre de la tienda: Aromas Donofrio
- Moneda: pesos argentinos (ARS)
- Idioma: español
- Logo del encabezado: `marca/png/isologo-web-color.png` (sobre fondo marfil). Ancho en el tema: 200 a 240 px.
- Logo para fondo oscuro (pie): `marca/png/isologo-web-marfil.png`
- Favicon: `marca/png/favicon-512.png` (Shopify lo achica)
- Imagen para compartir: `marca/png/isologo-vertical-color.png`

## Colores del tema

| Uso en el tema | Color |
|---|---|
| Fondo | Marfil #F3EEE6 |
| Fondo de tarjetas y fichas | Crema #FBF8F4 |
| Texto | Ónix #12100E |
| Texto secundario | Sombra #5E564E |
| Botón principal | Granate #6B2434, texto crema #FBF8F4 |
| Links | Granate profundo #5C1E2C |
| Bordes y separadores | Piedra #D4CBBF |
| Pie de página | Ónix #12100E, texto marfil #F3EEE6 |

El bronce #8F785C solo se usa como línea fina. Nunca de fondo ni de texto.

## Letras del tema

- Títulos y nombre de cada perfume: Cormorant Garamond 600
- Descripciones: Literata
- Menú, botones y precios: Outfit
- Concentración, ml y «tester»: DM Mono

## Menú principal

Diseñador · Árabes · Nosotros · Preguntas frecuentes · Contacto

## Colecciones

### Diseñador
Perfumes originales de las casas de diseñador, sellados y con su caja.

### Árabes
Perfumes originales de las casas árabes, sellados y con su caja. La misma seriedad que los de diseñador.

Los testers no son una sección: van en Diseñador o en Árabes, con «tester» en su ficha.

## Cómo se carga un producto

| Campo de Shopify | Qué va | Ejemplo |
|---|---|---|
| Título | Nombre del perfume, sin la marca | Khamrah |
| Proveedor | Marca del perfume, como la escribe su casa | Lattafa |
| Tipo de producto | Concentración | Eau de parfum |
| Variante | Mililitros | 100 ml |
| Precio | Un número, sin «desde» | 59000 |
| Etiquetas | árabe o diseñador; tester si lo es | árabe |
| Descripción | Una o dos frases: cómo huele y para qué momento | Dátil, canela y tonka. Dulce, para la noche. |

Para cargar muchos de una vez: completá `plantilla-catalogo.csv` y subila en Productos → Importar.

No va: «tipo [otra marca]» en el título, precios tachados, «oferta», «últimas unidades», ni hombre y mujer.

## Página de inicio

**Bloque principal**
- Título: Lujo en voz baja.
- Texto: Perfumes originales de diseñador y árabes, con la misma seriedad.
- Botón 1: Ver Diseñador
- Botón 2: Ver Árabes

**Bloque de texto**
- Título: No fabricamos perfumes. Los elegimos.
- Texto: Aromas Donofrio es una casa de perfume argentina. Vendemos perfumes originales y sellados, de diseñador y árabes, y también testers. Cada frasco con su marca y su nombre.

**Colecciones destacadas:** Diseñador y Árabes.

**Bloque de contacto**
- Título: ¿No sabés cuál elegir?
- Texto: Contanos qué perfume usás y para qué momento. Te proponemos dos.
- Botón: Escribinos por WhatsApp → https://wa.me/[número con código de país, sin + ni espacios]

## Página «Nosotros»

**No fabricamos perfumes. Los elegimos.**

Aromas Donofrio es una casa de perfume argentina. Vendemos perfumes originales de diseñador y perfumes árabes, con la misma seriedad para los dos.

No competimos con las marcas que vendemos: las presentamos. Por eso cada frasco lleva su marca y su nombre, y te contamos cómo huele antes de hablar del precio.

Lujo en voz baja.

## Página «Preguntas frecuentes»

**¿Los perfumes son originales?**
Sí. Todos son originales y llegan sellados en su caja. Si es tester, lo decimos en la ficha y antes de cobrarte.

**¿Qué es un tester?**
Es el mismo perfume que se usa en las tiendas para probar. Viene sin caja o con caja blanca, y a veces sin tapa. El contenido es el mismo.

**¿A qué se parece este perfume?**
Primero te contamos cómo huele y para qué momento sirve. Si hace falta, después te decimos a qué se parece.

**¿Hacen envíos?**
[Zonas, demora y costo de envío.]

**¿Cómo pago?**
[Medios de pago.]

## Página «Contacto»

Escribinos por WhatsApp: [número]
Instagram: @aromasdonofrio
[Correo, si hay.]

## Pie de página

Aromas Donofrio · casa de perfume
Tienda online · WhatsApp · Instagram

## Plantilla del catálogo (`plantilla-catalogo.csv`)

Se abre con Excel o Google Sheets. Una fila por perfume. Las dos filas que empiezan con «ejemplo-» son ejemplos con precio 0: reemplazalas o borralas antes de importar.

| Columna | Qué va |
|---|---|
| Handle | La dirección del producto, sin espacios ni tildes: `khamrah-lattafa-edp-100-ml`. Si es tester, terminá en `-tester`. |
| Title | El nombre del perfume, sin la marca: `Khamrah` |
| Body (HTML) | Una o dos frases entre `<p>` y `</p>`: cómo huele y para qué momento. Si es tester, decilo. |
| Vendor | La marca, como la escribe su casa: `Lattafa` |
| Type | La concentración: `Eau de parfum`, `Eau de toilette`, `Extrait de parfum` o `Parfum` |
| Tags | `árabe` o `diseñador`. Si es tester, agregá `, tester`. La etiqueta lo pone solo en su colección. |
| Published | `TRUE` para que se vea en la tienda, `FALSE` para dejarlo oculto |
| Option1 Value | Los mililitros: `100 ml`. Si es tester: `100 ml · tester` |
| Variant Inventory Qty | Cuántos tenés |
| Variant Price | El precio, solo el número, sin puntos ni signo: `59000` |
| Image Src | El link de la foto, si ya está subida. Si no, dejalo vacío y la subís después en cada producto. |
| Status | `active` para vender, `draft` para borrador |

Las otras columnas dejalas como están en los ejemplos. Para subirla: Productos → Importar → elegir el archivo.

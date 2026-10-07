import { Kicker } from "@/components/book/kicker"

export function Manifesto() {
  return (
    <section id="relato" className="scroll-mt-20 bg-tinta text-hueso xl:scroll-mt-8">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Kicker n="04" tone="ink">
            Relato
          </Kicker>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-5xl">
            Para leer en voz alta.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-cana">
            Treinta segundos. Si al terminarlo no se entiende qué se vende, el relato falló. Tiene que oírse a perfume, no a papelería.
          </p>
        </div>
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-pretty lg:col-span-8 lg:text-xl">
          <p className="font-display text-3xl leading-snug tracking-[-0.03em] italic md:text-4xl">
            Hay perfumes que se firman y perfumes que entran en la habitación antes que la persona.
          </p>
          <p>
            Los primeros llevan el nombre de una casa de moda. Los reconoces en una muñeca, en un anuncio, en un frasco que ya es famoso.
          </p>
          <p>
            Los segundos vienen de otra escritura. Oud, ámbar, rosa, almizcle, dátil. A veces son aceite y a veces eau de parfum. En muchas tiendas de aquí esa escritura se mostró como el cajón barato.
          </p>
          <p>Mirra no traduce una sala a la otra. Las sienta a la misma mesa y lee cada frasco por su nombre.</p>
          <p>
            Si un perfume es de Hermès, se dice Hermès.
            <br />
            Si es de Lattafa, se dice Lattafa.
            <br />
            Ninguno es el tipo del otro.
          </p>
        </div>
      </div>

      <div className="border-t border-hueso/15">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-2 md:px-10">
          <article className="bg-hueso p-6 text-tinta md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cardenillo-ink">
              Tarjeta de bolsillo
            </p>
            <p className="mt-6 font-display text-5xl font-semibold leading-none tracking-[-0.03em]">Mirra</p>
            <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.22em] text-humo">
              Casa de perfume
            </p>
            <p className="mt-6 max-w-sm text-lg leading-relaxed">
              Vendemos perfumes de diseñador y de casas árabes. Los leemos con la misma seriedad. Ninguno es el tipo del otro.
            </p>
          </article>
          <article className="flex flex-col justify-between border border-hueso/20 p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cana">
              Bio, mientras no hay tienda
            </p>
            <p className="mt-6 font-reading text-lg leading-relaxed text-hueso">
              Mirra — casa de perfume.
              <br />
              Lujo en voz baja. Firmas de diseñador y casas árabes.
              <br />
              Tiras de prueba. El frasco se llama como se llama.
            </p>
            <p className="mt-6 text-sm text-cana">
              Historias fijas: Firma, Attar, Tiras, Lecturas, Envíos. Envíos nombra la ciudad cuando exista, no antes.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

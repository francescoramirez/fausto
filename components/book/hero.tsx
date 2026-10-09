export function Hero() {
  return (
    <header id="portada" className="scroll-mt-20 px-5 pt-24 pb-14 md:px-10 md:pt-20 xl:scroll-mt-8 xl:pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-sombra">Manual de identidad</p>
        <h1 className="mt-10 font-display text-[clamp(3.6rem,11vw,6.6rem)] leading-[0.9] tracking-[-0.02em]">
          Aromas Donofrio
        </h1>
        <p className="mt-4 font-sans text-[13px] uppercase tracking-[0.28em] text-sombra">Casa de perfume</p>
        <div className="mt-8 h-[2px] w-16 bg-bronce" aria-hidden />
        <p className="mt-8 max-w-xl font-display text-3xl leading-[1.1] tracking-[-0.01em] text-balance md:text-5xl">
          Lujo en voz baja.
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-sombra">
          Perfumes de diseñador y perfumes árabes, con la misma seriedad. Cada frasco con su marca y su nombre.
        </p>
      </div>
    </header>
  )
}

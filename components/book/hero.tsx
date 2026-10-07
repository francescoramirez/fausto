import { ReedMark } from "@/components/reed-mark"

export function Hero() {
  return (
    <header id="portada" className="scroll-mt-20 px-5 pt-24 pb-8 md:px-10 md:pt-16 xl:scroll-mt-8 xl:pt-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-humo">
          Manual de identidad
        </p>
        <ReedMark className="mt-8 size-14 md:size-16" />
        <h1 className="mt-5 font-display text-[clamp(4.4rem,13vw,8rem)] font-semibold leading-[0.8] tracking-[-0.03em] text-tinta">
          Mirra
        </h1>
        <p className="mt-4 font-sans text-[12px] uppercase tracking-[0.28em] text-humo">
          Casa de perfume
        </p>
        <p className="mt-8 max-w-xl font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-balance md:text-5xl">
          Lujo en voz baja.
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-humo">
          Vende perfumes de diseñador y perfumes árabes. Los dos con la misma seriedad. Cada frasco con su marca y su nombre.
        </p>
        <div className="mt-8 h-[3px] w-16 bg-azafran" aria-hidden />
      </div>
    </header>
  )
}

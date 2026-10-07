import { ReedMark } from "@/components/reed-mark"

const steps = [
  {
    n: "01",
    title: "Léelo en voz alta",
    text: "Si no puedes explicar el nombre en una frase, no sirve. La frase está en la sección del nombre. Este nombre es una propuesta: se adopta o se discute antes de dibujar.",
  },
  {
    n: "02",
    title: "Encarga el símbolo, no otra personalidad",
    text: "La paleta, la voz y las salas ya están cerradas. Al final hay un brief para copiar y pegar en la herramienta de diseño.",
  },
  {
    n: "03",
    title: "Habla ya con esta voz",
    text: "Instagram y WhatsApp pueden usar el wordmark tipográfico desde hoy. No publiques un logo provisorio de otra estética.",
  },
]

export function Hero() {
  return (
    <header id="portada" className="scroll-mt-20 px-5 pt-20 pb-8 md:px-10 md:pt-14 xl:scroll-mt-0 xl:pt-10">
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col xl:min-h-[calc(100svh-3rem)]">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-humo">
          <span>00 / Portada</span>
          <span className="hidden sm:inline">Manual de identidad · versión 1</span>
          <span>Antes de la tienda</span>
        </div>

        <div className="mt-12 grid flex-1 content-end gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <ReedMark className="size-16 md:size-20" />
            <h1 className="mt-6 font-display text-[clamp(4.6rem,15vw,9.4rem)] leading-[0.78] tracking-[-0.05em] text-balance text-tinta">
              Cálamo
            </h1>
            <p className="mt-5 font-sans text-[12px] uppercase tracking-[0.28em] text-humo">
              Casa de perfume
            </p>
          </div>

          <div className="border-t border-tinta/15 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-8">
            <p lang="ar" dir="rtl" className="font-arabic text-7xl leading-none text-tinta md:text-8xl">
              قلم
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-humo">
              qalam · ká-lam
            </p>
            <p className="mt-3 max-w-xs text-lg leading-snug text-pretty text-tinta">
              La misma caña, en la otra escritura.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-tinta/15 pt-8 md:grid-cols-12">
          <p className="font-display text-[2rem] leading-[1.05] tracking-[-0.03em] text-balance text-tinta md:col-span-7 md:text-5xl">
            Dos escrituras.
            <span className="mt-1 block italic text-cardenillo-ink">Un mismo cálamo.</span>
          </p>
          <p className="max-w-sm self-end text-lg leading-relaxed text-pretty text-humo md:col-span-5">
            Perfumes de diseñador y casas árabes, leídos con la misma seriedad. Ninguno es el tipo del otro.
          </p>
        </div>

        <div className="mt-8 h-[3px] w-24 bg-azafran" aria-hidden />
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-y border-tinta/10 bg-hueso/80">
        <ol className="grid gap-8 px-1 py-8 md:grid-cols-3 md:px-2">
          {steps.map((step) => (
            <li key={step.n} className="px-4 md:px-5">
              <p className="font-mono text-[11px] tracking-[0.18em] text-cardenillo-ink">{step.n}</p>
              <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] text-balance">
                {step.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-pretty text-humo">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </header>
  )
}

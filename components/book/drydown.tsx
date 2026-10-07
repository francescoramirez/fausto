"use client"

import { actionClass } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const readings = [
  {
    id: "terre",
    sala: "Firma",
    salaClass: "text-hiel",
    house: "Hermès",
    name: "Terre d’Hermès",
    meta: "Eau de toilette · 100 ml",
    stages: [
      { part: "Salida", text: "Naranja y toronja. Amarga, no jugosa." },
      { part: "Corazón", text: "Pimienta y pelargonio sobre pedernal." },
      { part: "Fondo", text: "Cedro, vetiver, benjuí. Aire seco." },
    ],
    close: "Para el día. No compite con una sobremesa dulce: la deja existir.",
  },
  {
    id: "khamrah",
    sala: "Qalam",
    salaClass: "text-resina",
    house: "Lattafa",
    name: "Khamrah",
    meta: "Eau de parfum · 100 ml",
    stages: [
      { part: "Salida", text: "Canela, nuez moscada, bergamota." },
      { part: "Corazón", text: "Dátil, praliné, un floral que no manda." },
      { part: "Fondo", text: "Tonka, vainilla, ámbar, mirra." },
    ],
    close: "Se queda en la ropa hasta el día siguiente. No es un oud. Es una sobremesa.",
  },
] as const

export function Drydown() {
  const [current, setCurrent] = useState<(typeof readings)[number]["id"]>("terre")
  const reading = readings.find((item) => item.id === current) ?? readings[0]

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="flex flex-col gap-3 lg:col-span-4">
        {readings.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant={item.id === current ? "default" : "outline"}
            className={cn(actionClass, "h-auto justify-start py-3 text-left whitespace-normal")}
            onClick={() => setCurrent(item.id)}
            aria-pressed={item.id === current}
          >
            <span>
              <span className="block text-[10px] tracking-[0.18em]">{item.sala}</span>
              <span className="mt-1 block font-display text-lg tracking-[-0.03em] normal-case">
                {item.name}
              </span>
            </span>
          </Button>
        ))}
        <p className="text-sm leading-relaxed text-humo">
          La ficha no es una lista de notas: es una lectura en el tiempo. Salida, corazón, fondo, y una frase que dice para qué sirve.
        </p>
      </div>

      <article className="bg-hueso p-6 md:p-8 lg:col-span-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={cn("font-mono text-[11px] uppercase tracking-[0.18em]", reading.salaClass)}>
              {reading.sala}
            </p>
            <h3 className="mt-2 font-display text-4xl tracking-[-0.04em] md:text-5xl">{reading.name}</h3>
            <p className="mt-2 font-sans text-sm text-humo">{reading.house}</p>
          </div>
          <div className="h-28 w-6 bg-papel" aria-hidden>
            <div
              key={reading.id}
              className="h-full w-full bg-miel/80 motion-safe:h-0 motion-safe:animate-[calamo-fill_2.1s_ease_forwards]"
            />
          </div>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-humo">{reading.meta}</p>
        <ol className="mt-6 space-y-4" key={reading.id}>
          {reading.stages.map((stage, index) => (
            <li
              key={stage.part}
              className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-tinta/10 pt-3 motion-safe:animate-[calamo-reveal_500ms_ease_forwards] motion-safe:opacity-0"
              style={{ animationDelay: `${index * 650}ms` }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-cardenillo-ink">
                {stage.part}
              </span>
              <span className="leading-relaxed">{stage.text}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-display text-2xl leading-snug tracking-[-0.03em] text-balance">{reading.close}</p>
      </article>
    </div>
  )
}

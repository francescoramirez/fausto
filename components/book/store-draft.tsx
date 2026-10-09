"use client"

import { actionClass } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { useState } from "react"

const sections = [
  {
    id: "disenador",
    label: "Diseñador",
    house: "Hermès",
    product: "Terre d’Hermès",
    meta: "EDT · 100 ml · tester",
    line: "Naranja, vetiver y piedra. Para el día.",
    price: "$ 98.000",
  },
  {
    id: "arabes",
    label: "Árabes",
    house: "Lattafa",
    product: "Khamrah",
    meta: "EDP · 100 ml",
    line: "Dátil, canela y tonka. Dulce, para la noche.",
    price: "$ 59.000",
  },
] as const

export function StoreDraft() {
  const [id, setId] = useState<(typeof sections)[number]["id"]>("disenador")
  const item = sections.find((section) => section.id === id) ?? sections[0]

  return (
    <div className="mx-auto max-w-[24rem]">
      <div className="border border-onix/20 bg-marfil px-4 pt-4 pb-5 text-onix">
        <p className="font-display text-3xl leading-none tracking-[-0.02em]">Aromas Donofrio</p>
        <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.2em] text-sombra">Casa de perfume</p>
        <div className="mt-1 h-[2px] w-10 bg-bronce" aria-hidden />

        <div className="mt-5 flex gap-2" role="tablist" aria-label="Secciones de la tienda">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={section.id === item.id}
              onClick={() => setId(section.id)}
              className={cn(
                "h-10 flex-1 font-sans text-[13px] tracking-[0.04em]",
                section.id === item.id ? "bg-onix text-crema" : "bg-crema text-sombra",
              )}
            >
              {section.label}
            </button>
          ))}
        </div>

        <article className="mt-5 bg-crema p-4">
          <div className="flex h-36 items-end bg-piedra/50 p-3">
            <span className="h-24 w-8 bg-onix/85" aria-hidden />
          </div>
          <p className="mt-4 font-sans text-sm text-sombra">{item.house}</p>
          <h3 className="font-display text-3xl leading-tight tracking-[-0.02em]">{item.product}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-sombra">{item.meta}</p>
          <p className="mt-3 text-sm leading-relaxed">{item.line}</p>
          <p className="mt-4 font-sans text-xl">{item.price}</p>
          <Button
            type="button"
            className={cn(actionClass, "mt-3 w-full")}
            onClick={() =>
              toast("Es una muestra de la ficha. La tienda todavía no vende.", {
                description: item.product,
              })
            }
          >
            Comprar
          </Button>
        </article>
      </div>
      <p className="mt-4 text-center font-sans text-xs text-sombra">
        Ejemplo con precios inventados. Ancho de teléfono.
      </p>
    </div>
  )
}

"use client"

import { actionClass } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { useState } from "react"

const rooms = [
  {
    id: "firma",
    label: "Firma",
    kicker: "Sala Firma",
    title: "El frasco con firma.",
    text: "Casas de diseñador, leídas sin vitrina.",
    product: "Terre d’Hermès",
    house: "Hermès",
    meta: "Eau de toilette · 100 ml",
    line: "Naranja amarga sobre piedra. Para el día.",
  },
  {
    id: "qalam",
    label: "Qalam",
    kicker: "Sala Qalam",
    title: "La otra escritura.",
    text: "Casas árabes, con la misma luz.",
    product: "Khamrah",
    house: "Lattafa",
    meta: "Eau de parfum · 100 ml",
    line: "Dátil, canela, tonka. No es un oud.",
  },
  {
    id: "tiras",
    label: "Tiras",
    kicker: "Tiras",
    title: "Decide con la piel.",
    text: "10 ml del mismo perfume. No es un combo.",
    product: "Tira · Khamrah",
    house: "Lattafa",
    meta: "Eau de parfum · 10 ml",
    line: "El nombre no cambia porque el vidrio sea menor.",
  },
] as const

export function StoreDraft() {
  const [roomId, setRoomId] = useState<(typeof rooms)[number]["id"]>("firma")
  const room = rooms.find((item) => item.id === roomId) ?? rooms[0]

  return (
    <div className="mx-auto max-w-[24rem]">
      <div className="border border-tinta/20 bg-tinta p-2 shadow-[0_24px_60px_rgba(26,22,19,0.18)]">
        <div className="bg-papel px-4 pt-4 pb-5 text-tinta">
          <div className="flex items-baseline justify-between">
            <p className="font-display text-3xl leading-none tracking-[-0.04em]">Cálamo</p>
            <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-humo">Casa de perfume</p>
          </div>
          <div className="mt-4 flex gap-2" role="tablist" aria-label="Salas de la tienda">
            {rooms.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === room.id}
                onClick={() => setRoomId(item.id)}
                className={cn(
                  "h-9 flex-1 font-sans text-[11px] uppercase tracking-[0.14em]",
                  item.id === room.id ? "bg-tinta text-hueso" : "bg-hueso text-humo",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-cardenillo-ink">
            {room.kicker}
          </p>
          <p className="mt-2 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-balance">
            {room.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-humo">{room.text}</p>

          <article className="mt-6 bg-hueso p-4">
            <div className="flex h-36 items-end bg-cana/50 p-3">
              <span className="h-24 w-8 bg-tinta/85" aria-hidden />
            </div>
            <p className="mt-4 font-sans text-xs text-humo">{room.house}</p>
            <h3 className="font-display text-2xl tracking-[-0.03em]">{room.product}</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-humo">{room.meta}</p>
            <p className="mt-3 text-sm leading-relaxed">{room.line}</p>
            <Button
              type="button"
              className={cn(actionClass, "mt-4 w-full")}
              onClick={() =>
                toast("Esto es una muestra de la ficha. La tienda todavía no vende.", {
                  description: room.product,
                })
              }
            >
              Agregar
            </Button>
          </article>
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-humo">
        Borrador de portada · ancho de teléfono
      </p>
    </div>
  )
}

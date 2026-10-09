"use client"

import { Button } from "@/components/ui/button"
import { chapters } from "@/content/brand"
import { cn } from "@/lib/utils"
import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(chapters[0].id)

  useEffect(() => {
    const nodes = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id
        if (id) setActive(id)
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.45] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const links = (
    <ol className="space-y-0.5">
      {chapters.map((chapter) => {
        const current = active === chapter.id
        return (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              aria-current={current ? "location" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-baseline gap-3 rounded-[2px] px-2 py-1.5 font-sans text-[13px] transition-colors",
                current
                  ? "bg-crema text-onix"
                  : "text-sombra hover:bg-crema/70 hover:text-onix",
              )}
            >
              <span
                className={cn(
                  "w-6 shrink-0 font-sans text-[12px]",
                  current ? "text-granate-profundo" : "text-sombra/70",
                )}
              >
                {chapter.n}
              </span>
              {chapter.label}
            </a>
          </li>
        )
      })}
    </ol>
  )

  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <header className="no-print fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between gap-3 border-b border-onix/10 bg-marfil/90 px-4 backdrop-blur-md xl:hidden">
        <a href="#portada" className="font-display text-[1.75rem] leading-none tracking-[-0.02em]">
          Aromas Donofrio
        </a>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={open}
            aria-controls={open ? "indice" : undefined}
            className="size-11 border-onix/20 bg-crema"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XIcon /> : <MenuIcon />}
            <span className="sr-only">{open ? "Cerrar índice" : "Abrir índice"}</span>
          </Button>
        </div>
      </header>

      {open ? (
        <nav
          id="indice"
          className="no-print fixed inset-0 z-30 overflow-y-auto bg-marfil px-5 pt-20 pb-16 xl:hidden"
        >
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.16em] text-sombra">
            Índice
          </p>
          {links}
        </nav>
      ) : null}

      <aside className="no-print fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-onix/10 bg-marfil/95 px-3 py-6 backdrop-blur-md xl:flex">
        <a href="#portada" className="px-2">
          <span>
            <span className="block font-display text-[1.6rem] leading-none tracking-[-0.02em]">
              Aromas Donofrio
            </span>
            <span className="mt-1 block font-sans text-[11px] uppercase tracking-[0.2em] text-sombra">
              Casa de perfume
            </span>
          </span>
        </a>
        <nav className="mt-8 flex-1 overflow-y-auto pr-1" aria-label="Secciones">
          {links}
        </nav>
      </aside>
    </>
  )
}

"use client"

import { CopyButton } from "@/components/copy-button"
import { ReedMark } from "@/components/reed-mark"
import { Button } from "@/components/ui/button"
import { chapters } from "@/content/brand"
import { briefMarkdown } from "@/content/brief"
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
                  ? "bg-hueso text-tinta"
                  : "text-humo hover:bg-hueso/70 hover:text-tinta",
              )}
            >
              <span
                className={cn(
                  "w-6 shrink-0 font-mono text-[10px] tracking-[0.14em]",
                  current ? "text-cardenillo-ink" : "text-humo/70",
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

      <header className="no-print fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between gap-3 border-b border-tinta/10 bg-papel/90 px-4 backdrop-blur-md xl:hidden">
        <a href="#portada" className="font-display text-[1.75rem] font-semibold leading-none tracking-[-0.02em]">
          Mirra
        </a>
        <div className="flex items-center gap-2">
          <CopyButton
            value={briefMarkdown}
            label="Brief"
            toastMessage="Brief copiado. Listo para pegar en el diseño."
            className="h-9 px-3"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={open}
            aria-controls={open ? "indice" : undefined}
            className="size-11 border-tinta/20 bg-hueso"
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
          className="no-print fixed inset-0 z-30 overflow-y-auto bg-papel px-5 pt-20 pb-16 xl:hidden"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-humo">
            Índice del manual
          </p>
          {links}
        </nav>
      ) : null}

      <aside className="no-print fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-tinta/10 bg-papel/95 px-3 py-6 backdrop-blur-md xl:flex">
        <a href="#portada" className="flex items-center gap-2 px-2">
          <ReedMark className="size-8" title="Mirra, casa de perfume" />
          <span>
            <span className="block font-display text-[1.85rem] font-semibold leading-none tracking-[-0.02em]">
              Mirra
            </span>
            <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.22em] text-humo">
              Casa de perfume
            </span>
          </span>
        </a>
        <nav className="mt-8 flex-1 overflow-y-auto pr-1" aria-label="Secciones">
          {links}
        </nav>
        <CopyButton
          value={briefMarkdown}
          label="Copiar brief"
          toastMessage="Brief copiado. Listo para pegar en el diseño."
          className="mt-4 w-full"
        />
      </aside>
    </>
  )
}

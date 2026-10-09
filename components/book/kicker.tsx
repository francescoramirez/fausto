import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Kicker({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-granate-profundo">
      {n}
      <span className="mx-2 opacity-40">/</span>
      {children}
    </p>
  )
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.02em] text-balance md:text-6xl">
      {children}
    </h2>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-sombra">{children}</p>
}

export function Shell({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-t border-onix/10 py-14 md:py-20 xl:scroll-mt-8", className)}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">{children}</div>
    </section>
  )
}

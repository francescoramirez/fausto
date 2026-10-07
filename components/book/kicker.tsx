import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Kicker({
  n,
  children,
  tone = "paper",
}: {
  n: string
  children: ReactNode
  tone?: "paper" | "ink"
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.22em]",
        tone === "ink" ? "text-cana" : "text-cardenillo-ink",
      )}
    >
      <span className={tone === "ink" ? "text-hueso" : "text-cardenillo-ink"}>{n}</span>
      <span className="mx-2 opacity-40">/</span>
      {children}
    </p>
  )
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
      className={cn(
        "scroll-mt-20 border-t border-tinta/10 py-20 md:py-28 xl:scroll-mt-8",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">{children}</div>
    </section>
  )
}

import { cn } from "@/lib/utils"

type ReedMarkProps = {
  className?: string
  ink?: "color" | "mono"
  title?: string
}

/**
 * Estudio del isotipo: caña hueca (arco) y un solo corte.
 * No es el logo final. Es la hipótesis que el brief encarga dibujar.
 */
export function ReedMark({
  className,
  ink = "color",
  title = "Estudio del isotipo de Cálamo",
}: ReedMarkProps) {
  const stroke = ink === "color" ? "#0E6B5E" : "currentColor"

  return (
    <svg
      viewBox="20 20 164 164"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M121.21 158.26 A 62 62 0 1 1 158.26 121.21"
        fill="none"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
      />
      {ink === "color" ? (
        <path
          d="M125.5 162.5 L162.5 125.5"
          fill="none"
          stroke="#C6531F"
          strokeWidth="10"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  )
}

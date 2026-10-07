import { cn } from "@/lib/utils"

type StoneMarkProps = {
  className?: string
  ink?: "color" | "mono"
  title?: string
}

/**
 * Estudio del isotipo: un granate en cabujón y un engarce de bronce mate.
 * No es el logo final. Es la hipótesis que el brief encarga dibujar.
 */
export function ReedMark({
  className,
  ink = "color",
  title = "Estudio del isotipo de Mirra",
}: StoneMarkProps) {
  const stone = ink === "color" ? "#6B2434" : "currentColor"
  const metal = ink === "color" ? "#8F785C" : "currentColor"

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        d="M62 108 Q100 168 138 108"
        fill="none"
        stroke={metal}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <ellipse cx="100" cy="84" rx="50" ry="52" fill={stone} />
    </svg>
  )
}

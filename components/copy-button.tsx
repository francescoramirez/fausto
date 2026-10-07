"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

async function writeClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    try {
      const area = document.createElement("textarea")
      area.value = value
      area.setAttribute("readonly", "")
      area.style.position = "fixed"
      area.style.left = "0"
      area.style.top = "0"
      area.style.opacity = "0"
      document.body.appendChild(area)
      area.focus()
      area.select()
      const ok = document.execCommand("copy")
      area.remove()
      return ok
    } catch {
      return false
    }
  }
}

const actionClass =
  "h-11 rounded-[2px] px-4 font-sans text-[12px] font-medium tracking-[0.16em] uppercase"

export function CopyButton({
  value,
  label,
  toastMessage,
  variant = "default",
  className,
}: {
  value: string
  label: string
  toastMessage: string
  variant?: "default" | "outline" | "secondary" | "ghost"
  className?: string
}) {
  return (
    <Button
      type="button"
      variant={variant}
      className={cn(actionClass, className)}
      onClick={async () => {
        const ok = await writeClipboard(value)
        if (ok) toast.success(toastMessage)
        else toast.error("No se pudo copiar. Selecciona el texto y cópialo a mano.")
      }}
    >
      {label}
    </Button>
  )
}

export { actionClass }

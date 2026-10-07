import { CopyButton } from "@/components/copy-button"
import { Kicker, Shell } from "@/components/book/kicker"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { briefIntro, briefMarkdown } from "@/content/brief"

export function Brief() {
  return (
    <Shell id="brief" className="bg-hueso/50">
      <Kicker n="07">Brief</Kicker>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-balance md:text-6xl">
        Para dibujar el logo.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-humo">{briefIntro}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <CopyButton
          value={briefMarkdown}
          label="Copiar brief"
          toastMessage="Brief copiado. Pégalo en la herramienta de diseño."
        />
        <Button
          variant="outline"
          className="h-11 rounded-[2px] border-tinta/25 px-4 font-sans text-[12px] font-medium tracking-[0.16em] uppercase"
          asChild
        >
          <a href="/api/brief">Descargar .md</a>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="h-11 rounded-[2px] border-tinta/25 px-4 font-sans text-[12px] font-medium tracking-[0.16em] uppercase"
            >
              Ver en limpio
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[min(86svh,860px)] overflow-y-auto bg-hueso sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="font-display text-3xl tracking-[-0.03em]">
                Brief de Mirra
              </DialogTitle>
              <DialogDescription className="text-base text-humo">
                Texto plano, listo para copiar. Es el mismo archivo que se descarga.
              </DialogDescription>
            </DialogHeader>
            <pre className="font-reading text-sm leading-relaxed whitespace-pre-wrap text-tinta">
              {briefMarkdown}
            </pre>
            <CopyButton
              value={briefMarkdown}
              label="Copiar brief"
              toastMessage="Brief copiado."
            />
          </DialogContent>
        </Dialog>
      </div>

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-humo">
        El texto repite las decisiones de arriba, en un archivo para pegar en la herramienta de diseño.
      </p>
    </Shell>
  )
}

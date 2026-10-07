import { ReedMark } from "@/components/reed-mark";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-24">
      <div className="mx-auto max-w-lg">
        <ReedMark className="size-16" />
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-cardenillo-ink">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-balance">
          Esta página no está en el cuaderno.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-humo">
          El manual sigue en la portada. El símbolo, cuando exista, también va a vivir ahí.
        </p>
        <Button
          asChild
          className="mt-8 h-11 rounded-[2px] px-4 font-sans text-[12px] tracking-[0.16em] uppercase"
        >
          <Link href="/">Volver al manual</Link>
        </Button>
      </div>
    </main>
  );
}

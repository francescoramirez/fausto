"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-24">
      <div className="mx-auto max-w-lg">
        <p className="font-display text-3xl tracking-[-0.02em]">Aromas Donofrio</p>
        <h1 className="mt-8 font-display text-5xl leading-[0.95] tracking-[-0.02em] text-balance">
          Esta página no se pudo leer.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-sombra">Probá de nuevo.</p>
        <Button
          type="button"
          onClick={() => reset()}
          className="mt-8 h-11 rounded-[2px] px-4 font-sans text-[12px] tracking-[0.16em] uppercase"
        >
          Reintentar
        </Button>
      </div>
    </main>
  );
}

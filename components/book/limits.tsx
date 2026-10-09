import { Kicker, Shell, Title } from "@/components/book/kicker"
import { refusals } from "@/content/brand"

export function Limits() {
  return (
    <Shell id="no">
      <Kicker n="06">Qué no hacer</Kicker>
      <Title>Seis cosas que no.</Title>
      <dl className="mt-10 border-t border-onix/15">
        {refusals.map(([label, value]) => (
          <div key={label} className="grid gap-2 border-b border-onix/15 py-5 md:grid-cols-12 md:gap-8">
            <dt className="font-sans text-[13px] uppercase tracking-[0.16em] text-granate-profundo md:col-span-3">
              {label}
            </dt>
            <dd className="text-lg leading-relaxed text-pretty md:col-span-9">{value}</dd>
          </div>
        ))}
      </dl>
    </Shell>
  )
}

import { Essentials } from "@/components/book/essentials";
import { Hero } from "@/components/book/hero";
import { Limits } from "@/components/book/limits";
import { Palette } from "@/components/book/palette";
import { Shop } from "@/components/book/shop";
import { TypeSpecimen } from "@/components/book/type";
import { Voice } from "@/components/book/voice";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="contenido" className="xl:pl-60">
        <Hero />
        <Essentials />
        <Palette />
        <TypeSpecimen />
        <Shop />
        <Voice />
        <Limits />
      </main>
    </>
  );
}

import { Brief } from "@/components/book/brief";
import { Essentials } from "@/components/book/essentials";
import { Hero } from "@/components/book/hero";
import { Palette } from "@/components/book/palette";
import { Shop } from "@/components/book/shop";
import { Symbol } from "@/components/book/symbol";
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
        <Symbol />
        <Voice />
        <Shop />
        <Brief />
      </main>
    </>
  );
}

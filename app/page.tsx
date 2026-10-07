import { Brief } from "@/components/book/brief";
import { Character } from "@/components/book/character";
import { Hero } from "@/components/book/hero";
import { Idea } from "@/components/book/idea";
import { ImageDirection } from "@/components/book/image-direction";
import { Limits } from "@/components/book/limits";
import { Manifesto } from "@/components/book/manifesto";
import { Name } from "@/components/book/name";
import { Palette } from "@/components/book/palette";
import { Pieces } from "@/components/book/pieces";
import { Position } from "@/components/book/position";
import { Rooms } from "@/components/book/rooms";
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
        <Idea />
        <Name />
        <Position />
        <Manifesto />
        <Character />
        <Rooms />
        <Voice />
        <Palette />
        <TypeSpecimen />
        <Symbol />
        <ImageDirection />
        <Pieces />
        <Shop />
        <Brief />
        <Limits />
      </main>
    </>
  );
}

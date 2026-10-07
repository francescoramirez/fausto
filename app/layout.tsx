import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Mono, Fraunces, Literata, Noto_Naskh_Arabic, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-mono",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-naskh",
});

export const metadata: Metadata = {
  title: "Cálamo — manual de identidad",
  description:
    "Identidad de una casa de perfume que vende firmas de diseñador y casas árabes. Nombre, voz, paleta y brief para dibujar el símbolo.",
  openGraph: {
    title: "Cálamo — manual de identidad",
    description:
      "Dos escrituras. Un mismo cálamo. Manual de marca para una casa de perfume de diseñador y árabe.",
    locale: "es_419",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E6D9C8",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${literata.variable} ${outfit.variable} ${dmMono.variable} ${naskh.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

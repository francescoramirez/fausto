import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Mono, Literata, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
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

export const metadata: Metadata = {
  title: "Mirra — manual de identidad",
  description:
    "Lo esencial de Mirra, casa de perfume: nombre, colores, letras, logo y cómo hablarle al cliente.",
  openGraph: {
    title: "Mirra — manual de identidad",
    description:
      "Lujo en voz baja. Manual de marca para una casa de perfume de diseñador y árabe.",
    locale: "es_419",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F3EEE6",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${literata.variable} ${outfit.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

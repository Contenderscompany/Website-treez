import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TREEZ Salad Bar — Fraîcheur, Équilibre & Saveurs Locales en Guadeloupe",
  description:
    "Des salades fraîches, gourmandes et personnalisables, préparées chaque jour avec des ingrédients de qualité en Guadeloupe. Restaurant healthy, produits frais et locaux.",
  keywords: [
    "salad bar",
    "Guadeloupe",
    "restaurant healthy",
    "salade fraîche",
    "produits locaux",
    "TREEZ",
  ],
  openGraph: {
    title: "TREEZ Salad Bar — Guadeloupe",
    description:
      "Des salades fraîches, gourmandes et personnalisables en Guadeloupe.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

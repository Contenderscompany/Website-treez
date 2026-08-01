"use client";

import Image from "next/image";
import { Leaf, Utensils, Clock } from "lucide-react";

export default function Concept() {
  return (
    <section id="concept" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-treez-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-treez-100 text-treez-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Notre Concept
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900">
            Votre restaurant{" "}
            <span className="gradient-text">healthy</span> en Guadeloupe
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Chez <strong className="text-treez-700">TREEZ SALAD BAR</strong>,
              nous proposons une alternative saine à la restauration rapide
              traditionnelle.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Notre salad bar en Guadeloupe vous permet de{" "}
              <strong>composer des salades personnalisées</strong> ou de choisir
              parmi nos recettes signature, élaborées à partir de{" "}
              <strong>produits frais et locaux</strong>.
            </p>

            {/* Feature cards */}
            <div className="grid gap-4 mt-8">
              {[
                {
                  icon: Leaf,
                  title: "100% Frais",
                  desc: "Ingrédients sélectionnés chaque matin",
                },
                {
                  icon: Utensils,
                  title: "Personnalisable",
                  desc: "Composez votre salade idéale",
                },
                {
                  icon: Clock,
                  title: "Rapide & Savoureux",
                  desc: "Simple, rapide et toujours bon",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-treez-50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-treez-100 group-hover:bg-treez-200 rounded-xl flex items-center justify-center transition-colors">
                    <item.icon size={22} className="text-treez-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-treez-500 pl-6 mt-8 italic text-slate-600 text-lg">
              &ldquo;Manger équilibré ne doit pas être compliqué. Nous le
              rendons simple, rapide et savoureux.&rdquo;
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/salad-concept.jpg"
                alt="Concept TREEZ - Salades fraîches en Guadeloupe"
                width={600}
                height={700}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-treez-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
              <div className="w-14 h-14 bg-treez-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🥗</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">100%</p>
                <p className="text-sm text-slate-500">Fait maison</p>
              </div>
            </div>
            {/* Floating badge right */}
            <div className="absolute -top-4 -right-4 bg-warm-400 text-warm-50 rounded-2xl shadow-xl px-5 py-3 font-bold text-sm">
              🌿 Produits locaux
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

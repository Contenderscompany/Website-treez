"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nagège A.",
    text: "Je pensais que manger sain voulait dire manger trois feuilles et rentrer chez moi en pleurant... Mais chez TREEZ ? Non non non. Les portions sont généreuses, les saveurs sont là, et la mangue fraîche dans la salade… sa ka palé ! C'est frais, c'est rapide, c'est bon. Mi sa nou té bizwen an Gwadloup !",
    initials: "NA",
    color: "bg-treez-500",
  },
  {
    name: "Félix G.",
    text: "Je fais attention à mon alimentation et chez TREEZ je peux composer ma salade exactement comme je veux. Les protéines sont bien préparées, les ingrédients sont frais et les portions généreuses. C'est sain, copieux et toujours bon. Je recommande à 100 %.",
    initials: "FG",
    color: "bg-warm-500",
  },
  {
    name: "Christelle L.",
    text: "Je me suis dit : \"Bon, je vais tester une fois.\" Résultat ? J'y vais minimum deux fois par semaine. Les ingrédients sont super frais, on sent que c'est préparé avec soin, et l'équipe est toujours souriante. Même quand je veux faire un écart… je finis chez TREEZ quand même. Sa sé manjé ki ka fè'w santi'w byen !",
    initials: "CL",
    color: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-treez-100 text-treez-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900">
            Sa yo ka di{" "}
            <span className="gradient-text">!</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Ce que nos clients pensent de TREEZ
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-treez-500/10 transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-treez-100"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="text-treez-200 mb-4 group-hover:text-treez-400 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-warm-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">Client fidèle</p>
                </div>
              </div>

              {/* Decorative number */}
              <span className="absolute top-6 right-6 text-7xl font-serif font-bold text-treez-500/5">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

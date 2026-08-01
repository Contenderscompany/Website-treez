"use client";

import {
  Leaf,
  MapPin,
  ChefHat,
  Zap,
  Recycle,
} from "lucide-react";

const engagements = [
  {
    icon: ChefHat,
    title: "Produits frais préparés chaque jour",
    description:
      "Chaque matin, nos ingrédients sont soigneusement sélectionnés et préparés pour vous offrir une fraîcheur incomparable.",
    color: "bg-treez-500",
    lightColor: "bg-treez-50",
  },
  {
    icon: MapPin,
    title: "Ingrédients locaux & de saison",
    description:
      "Nous privilégions les producteurs guadeloupéens et les fruits & légumes de saison pour une alimentation responsable.",
    color: "bg-warm-500",
    lightColor: "bg-warm-50",
  },
  {
    icon: Leaf,
    title: "Recettes équilibrées & personnalisables",
    description:
      "Composez votre salade sur mesure ou laissez-vous guider par nos recettes signature pensées par notre chef.",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Service rapide et pratique",
    description:
      "Commandez sur place ou à emporter. Un service efficace pour s'adapter à votre rythme sans compromis sur la qualité.",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
  },
  {
    icon: Recycle,
    title: "Démarche écoresponsable",
    description:
      "Emballages recyclables, réduction du gaspillage alimentaire et choix de fournisseurs engagés pour l'environnement.",
    color: "bg-teal-500",
    lightColor: "bg-teal-50",
  },
];

export default function Engagements() {
  return (
    <section
      id="engagements"
      className="relative py-24 bg-gradient-to-br from-treez-950 via-treez-900 to-emerald-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-treez-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-warm-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-treez-300 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Nos Engagements
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Ce qui nous{" "}
            <span className="text-treez-400">différencie</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-lg">
            Cinq piliers qui guident chaque assiette que nous servons
          </p>
        </div>

        {/* Engagement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <item.icon size={26} className="text-white" />
              </div>

              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-white/5">
                0{i + 1}
              </span>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

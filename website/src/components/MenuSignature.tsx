"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Salade bowl avec poulet grillé",
    title: "Bowl Poulet Grillé",
  },
  {
    src: "https://images.pexels.com/photos/1435893/pexels-photo-1435893.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Salade fraîche végétarienne",
    title: "Veggie Delight",
  },
  {
    src: "https://images.pexels.com/photos/20929210/pexels-photo-20929210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Salade colorée aux légumes",
    title: "Rainbow Bowl",
  },
  {
    src: "https://images.pexels.com/photos/2291344/pexels-photo-2291344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Buffet de salades fraîches",
    title: "Buffet Signature",
  },
  {
    src: "https://images.pexels.com/photos/13630358/pexels-photo-13630358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Assortiment de salades",
    title: "Salade Tropicale",
  },
  {
    src: "https://images.pexels.com/photos/29060268/pexels-photo-29060268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Salad bar - sélection d'ingrédients",
    title: "Notre Salad Bar",
  },
];

export default function MenuSignature() {
  return (
    <section id="menu" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-100 text-warm-500 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            <Star size={14} fill="currentColor" />
            Fait maison
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900">
            Menu{" "}
            <span className="gradient-text">Signature</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Les spécialités du chef ! Découvrez nos créations uniques préparées
            avec amour chaque jour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  i === 0 ? "h-full min-h-[300px] sm:min-h-[500px]" : "h-48 sm:h-64"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-base sm:text-lg">{img.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1">Recette signature</p>
              </div>
              {/* Corner badge */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Voir +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

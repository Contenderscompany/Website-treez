"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative py-24 bg-gradient-to-br from-treez-50 to-emerald-50 overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-treez-200/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/19771754/pexels-photo-19771754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Équipe TREEZ"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <Heart size={22} className="text-white" fill="white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Passionnés</p>
                <p className="text-sm text-slate-500">Depuis le jour 1</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-treez-100 text-treez-700 rounded-full text-sm font-semibold tracking-wider uppercase">
              Notre Équipe
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Faites connaissance avec{" "}
              <span className="gradient-text">notre équipe</span> !
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Derrière chaque salade TREEZ, il y a une équipe passionnée et
              souriante, dédiée à vous offrir le meilleur de la cuisine healthy
              en Guadeloupe.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nous croyons que la bonne cuisine commence par des personnes
              passionnées. De la sélection des ingrédients à l&apos;assemblage de
              votre bowl, chaque étape est réalisée avec soin et bonne humeur.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "100%", label: "Fait maison" },
                { value: "Local", label: "Produits frais" },
                { value: "❤️", label: "Avec amour" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm"
                >
                  <p className="text-2xl font-bold text-treez-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

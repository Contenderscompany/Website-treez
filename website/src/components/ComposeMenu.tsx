"use client";

import Image from "next/image";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";

export default function ComposeMenu() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/compose-bg.jpg"
          alt="Composez votre menu"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-treez-950/95 via-treez-900/90 to-emerald-900/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-treez-300 rounded-full text-sm font-semibold tracking-wider uppercase">
              Passez commande
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Composez{" "}
              <span className="text-treez-400">votre menu</span>
            </h2>

            <p className="text-xl text-white/70 leading-relaxed">
              Prêt(e) à vous faire du bien ? Commandez vos salades fraîches et
              personnalisées dès maintenant !
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+590690000000"
                className="group inline-flex items-center justify-center gap-3 bg-treez-500 hover:bg-treez-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl shadow-treez-500/30 hover:shadow-treez-400/40 hover:scale-105"
              >
                <Phone size={22} />
                Appeler maintenant
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <MapPin size={22} className="text-treez-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Où nous trouver</p>
                  <p className="text-white/60 text-sm mt-1">
                    Guadeloupe — Retrouvez-nous sur place ou commandez à emporter
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <Clock size={22} className="text-treez-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Horaires</p>
                  <p className="text-white/60 text-sm mt-1">
                    Du lundi au samedi
                    <br />
                    11h00 - 15h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Social proof / Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  emoji: "🥗",
                  number: "500+",
                  label: "Salades servies par mois",
                },
                {
                  emoji: "⭐",
                  number: "4.9/5",
                  label: "Note moyenne",
                },
                {
                  emoji: "🌿",
                  number: "100%",
                  label: "Ingrédients frais",
                },
                {
                  emoji: "❤️",
                  number: "98%",
                  label: "Clients satisfaits",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-4xl mb-4 block">{stat.emoji}</span>
                  <p className="text-3xl font-bold text-white">{stat.number}</p>
                  <p className="text-white/60 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

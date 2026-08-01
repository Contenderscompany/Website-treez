"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Salades fraîches TREEZ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-treez-950/80" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-treez-400/20 blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-warm-400/20 blur-xl animate-float delay-300" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-treez-300/15 blur-lg animate-float delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <Sparkles size={16} className="text-warm-300" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
            Fraîcheur · Équilibre · Saveurs Locales
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight animate-fade-in-up delay-200">
          Bienvenue chez{" "}
          <span className="relative inline-block">
            <span className="gradient-text">TREEZ</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C40 2 80 2 100 6C120 10 160 3 198 7"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Des salades fraîches, gourmandes et personnalisables, préparées chaque
          jour avec des ingrédients de qualité en{" "}
          <span className="text-warm-300 font-semibold">Guadeloupe</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up delay-400">
          <a
            href="#menu"
            className="group bg-treez-600 hover:bg-treez-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl shadow-treez-600/30 hover:shadow-treez-500/40 hover:scale-105 flex items-center gap-2"
          >
            Découvrir le Menu
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#concept"
            className="group glass text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20 flex items-center gap-2"
          >
            Notre Concept
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#concept"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

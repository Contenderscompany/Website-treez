"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Concept", href: "#concept" },
  { label: "Engagements", href: "#engagements" },
  { label: "Menu", href: "#menu" },
  { label: "Équipe", href: "#equipe" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/treez-logo.png"
                alt="TREEZ Logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              className={`text-2xl font-bold font-serif tracking-wide transition-colors ${
                scrolled ? "text-treez-800" : "text-white"
              } group-hover:text-treez-500`}
            >
              TREEZ
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-treez-500/20 ${
                  scrolled
                    ? "text-slate-700 hover:text-treez-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 bg-treez-600 hover:bg-treez-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-treez-500/30 hover:scale-105"
            >
              <Phone size={16} />
              Commander
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md mt-2 mx-4 rounded-2xl shadow-xl p-4 border border-treez-100">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-treez-50 hover:text-treez-700 font-medium transition-colors"
            >
              <Leaf size={14} className="text-treez-500" />
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 bg-treez-600 text-white px-5 py-3 rounded-xl font-semibold"
          >
            <Phone size={16} />
            Commander maintenant
          </a>
        </div>
      </div>
    </nav>
  );
}

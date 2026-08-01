import { Leaf, Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-treez-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Leaf size={28} className="text-treez-400" />
              <span className="text-3xl font-serif font-bold">TREEZ</span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed">
              Des salades fraîches, gourmandes et personnalisables, préparées
              chaque jour avec des ingrédients de qualité en Guadeloupe. Votre
              salad bar healthy préféré.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.treezsaladbar.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site web"
                className="w-10 h-10 bg-white/10 hover:bg-treez-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                aria-label="Suivez-nous"
                className="w-10 h-10 bg-white/10 hover:bg-treez-600 rounded-xl flex items-center justify-center transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-treez-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Concept", href: "#concept" },
                { label: "Menu", href: "#menu" },
                { label: "Témoignages", href: "#temoignages" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-treez-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-treez-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-treez-400 flex-shrink-0 mt-1"
                />
                <span className="text-white/60">Guadeloupe, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-treez-400 flex-shrink-0" />
                <a
                  href="tel:+590690000000"
                  className="text-white/60 hover:text-treez-400 transition-colors"
                >
                  0690 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-treez-400 flex-shrink-0" />
                <a
                  href="mailto:contact@treezsaladbar.com"
                  className="text-white/60 hover:text-treez-400 transition-colors"
                >
                  contact@treezsaladbar.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} TREEZ Salad Bar. Tous droits
            réservés.
          </p>
          <p className="text-white/40 text-sm">
            Fraîcheur · Équilibre · Saveurs Locales 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}

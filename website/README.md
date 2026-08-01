# 🥗 TREEZ Salad Bar - Site Web

Site web moderne pour TREEZ Salad Bar, restaurant healthy en Guadeloupe.

## 🚀 Déploiement rapide sur Vercel

1. Cliquez sur le bouton ci-dessous :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

2. Importez ce repository GitHub
3. Vercel déploiera automatiquement votre site !

## 🛠️ Technologies utilisées

- **Next.js 16** - Framework React moderne
- **Tailwind CSS 4** - Styles utilitaires
- **Drizzle ORM** - Connexion base de données
- **PostgreSQL** - Base de données
- **Lucide React** - Icônes

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Section héro
│   ├── Concept.tsx     # Section concept
│   ├── Engagements.tsx # Nos engagements
│   ├── MenuSignature.tsx # Galerie menu
│   ├── Team.tsx        # Section équipe
│   ├── Testimonials.tsx # Témoignages
│   ├── ComposeMenu.tsx # Section commande
│   └── Footer.tsx      # Pied de page
└── db/
    ├── index.ts        # Connexion DB
    └── schema.ts       # Schéma DB
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/app/globals.css` :
- `treez-500` : Vert principal (#22c55e)
- `treez-700` : Vert foncé (#15803d)
- `warm-400` : Accent doré (#facc15)

### Images
Remplacez les images dans `public/images/` :
- `hero-bg.jpg` : Image de fond héro
- `salad-concept.jpg` : Image section concept
- `compose-bg.jpg` : Image section commande
- `treez-logo.png` : Logo

### Contenu
Modifiez le texte directement dans les fichiers composants (`src/components/`).

## 📞 Contact

Pour toute question : contact@treezsaladbar.com

---

Fait avec ❤️ pour TREEZ Salad Bar - Guadeloupe

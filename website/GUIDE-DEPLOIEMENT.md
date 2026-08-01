# 🚀 Guide de Déploiement TREEZ - Pas à Pas

## Prérequis
- Un compte GitHub (gratuit) : https://github.com
- Un compte Vercel (gratuit) : https://vercel.com

---

## ÉTAPE 1 : Créer le projet sur GitHub

### 1.1 Connectez-vous à GitHub
Allez sur https://github.com et connectez-vous (ou créez un compte).

### 1.2 Créez un nouveau repository
1. Cliquez sur le **"+"** en haut à droite → **"New repository"**
2. **Repository name** : `treez-salad-bar`
3. **Description** : `Site web TREEZ Salad Bar`
4. Cochez **"Public"**
5. Cochez **"Add a README file"**
6. Cliquez **"Create repository"**

---

## ÉTAPE 2 : Ajouter les fichiers

Sur votre nouveau repository, cliquez **"Add file"** → **"Upload files"**

Vous devez uploader ces fichiers (téléchargez-les depuis le ZIP fourni) :

```
📁 Structure des fichiers à uploader :

├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── drizzle.config.json
├── .gitignore
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── 📁 api/health/
│   │       └── route.ts
│   │
│   ├── 📁 components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Concept.tsx
│   │   ├── Engagements.tsx
│   │   ├── MenuSignature.tsx
│   │   ├── Team.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ComposeMenu.tsx
│   │   └── Footer.tsx
│   │
│   └── 📁 db/
│       ├── index.ts
│       └── schema.ts
│
└── 📁 public/
    └── 📁 images/
        ├── hero-bg.jpg
        ├── salad-concept.jpg
        ├── compose-bg.jpg
        └── treez-logo.png
```

---

## ÉTAPE 3 : Déployer sur Vercel

### 3.1 Connectez-vous à Vercel
1. Allez sur https://vercel.com
2. Cliquez **"Sign Up"** → **"Continue with GitHub"**
3. Autorisez Vercel à accéder à votre GitHub

### 3.2 Importer le projet
1. Sur le dashboard Vercel, cliquez **"Add New..."** → **"Project"**
2. Trouvez votre repository `treez-salad-bar` dans la liste
3. Cliquez **"Import"**

### 3.3 Configurer la base de données
1. Avant de déployer, cliquez sur **"Storage"** dans le menu de gauche
2. Cliquez **"Create Database"** → **"Postgres"** → **"Continue"**
3. Donnez un nom : `treez-db`
4. Cliquez **"Create"**
5. Vercel ajoutera automatiquement les variables d'environnement

### 3.4 Déployer
1. Retournez dans **"Projects"** → votre projet
2. Cliquez **"Deploy"**
3. ⏳ Attendez 1-2 minutes...
4. ✅ Votre site est en ligne sur `treez-salad-bar.vercel.app` !

---

## ÉTAPE 4 : Connecter votre nom de domaine

### 4.1 Dans Vercel
1. Allez dans **Settings** → **Domains**
2. Tapez `www.treezsaladbar.com`
3. Cliquez **"Add"**
4. Vercel affiche les enregistrements DNS à configurer

### 4.2 Chez votre registrar (OVH, Gandi, etc.)
Allez dans la gestion DNS de votre domaine et ajoutez :

**Pour `treezsaladbar.com` (sans www) :**
- Type : `A`
- Nom : `@`
- Valeur : `76.76.21.21`

**Pour `www.treezsaladbar.com` :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `cname.vercel-dns.com`

⏳ Propagation DNS : 5 minutes à 24 heures.

---

## ✅ C'est terminé !

Votre nouveau site TREEZ est maintenant en ligne, ultra-rapide, et sécurisé !

### Support
Pour toute question : contact@treezsaladbar.com

---

*Guide créé pour TREEZ Salad Bar - Guadeloupe 🌿*

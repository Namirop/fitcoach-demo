# FitCoach Pro - Site Vitrine Coach Sportif

Site vitrine moderne et professionnel pour un coach sportif personnel, développé avec Next.js 15, TypeScript et Tailwind CSS.

## Aperçu

FitCoach Pro est un template de site vitrine conçu pour les coachs sportifs et professionnels du fitness. Il présente une structure complète avec :

- **Page d'accueil** - Hero impactant, points forts, témoignages et certifications
- **Page Services** - Présentation des offres avec tarifs et FAQ
- **Page À propos** - Biographie, parcours et valeurs du coach
- **Page Résultats** - Transformations clients avant/après
- **Page Blog** - Articles avec filtrage par catégorie
- **Page Contact** - Formulaire avec validation et envoi d'emails via Resend

## Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4
- **Composants UI** : shadcn/ui
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form + Zod
- **Emails** : Resend
- **Icônes** : Lucide React

## Installation

### Prérequis

- Node.js 18.17 ou supérieur
- npm, yarn, pnpm ou bun

### Étapes

1. **Cloner le projet**

```bash
git clone <votre-repo>
cd fitcoach-pro
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer les variables d'environnement**

Copiez le fichier `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Puis renseignez vos valeurs :

```env
# Clé API Resend pour l'envoi des emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email de destination pour le formulaire de contact
CONTACT_EMAIL=contact@votredomaine.fr
```

4. **Lancer le serveur de développement**

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
fitcoach-pro/
├── src/
│   ├── app/                    # Pages et routes Next.js
│   │   ├── api/contact/        # API Route pour le formulaire
│   │   ├── about/              # Page À propos
│   │   ├── blog/               # Page Blog
│   │   ├── contact/            # Page Contact
│   │   ├── results/            # Page Résultats
│   │   ├── services/           # Page Services
│   │   ├── globals.css         # Styles globaux
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Page d'accueil
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Sections de page (Hero, CTA, etc.)
│   │   ├── shared/             # Composants réutilisables
│   │   └── ui/                 # Composants shadcn/ui
│   │
│   ├── lib/
│   │   ├── animations.ts       # Variants Framer Motion
│   │   ├── data.ts             # Données du site (services, témoignages, etc.)
│   │   ├── utils.ts            # Utilitaires
│   │   └── validations.ts      # Schémas Zod
│   │
│   └── types/
│       └── index.ts            # Types TypeScript
│
├── public/                     # Assets statiques
├── .env.example               # Template variables d'environnement
├── next.config.ts             # Configuration Next.js
├── tailwind.config.ts         # Configuration Tailwind (si nécessaire)
└── tsconfig.json              # Configuration TypeScript
```

## Configuration Resend

1. Créez un compte sur [Resend](https://resend.com/)
2. Générez une clé API dans les paramètres
3. Ajoutez la clé dans votre fichier `.env.local`

**Note** : En développement, utilisez `onboarding@resend.dev` comme expéditeur. En production, vérifiez votre domaine dans Resend pour utiliser votre propre adresse email.

## Personnalisation

### Données du site

Modifiez le fichier `src/lib/data.ts` pour personnaliser :

- Informations du coach (nom, bio, contact)
- Services et tarifs
- Témoignages clients
- Certifications
- Transformations
- Articles de blog
- FAQ

### Couleurs

Les couleurs sont définies dans `src/app/globals.css` :

```css
:root {
  --primary: #2563EB;      /* Bleu principal */
  --secondary: #F59E0B;    /* Orange secondaire */
  --foreground: #1F2937;   /* Texte principal */
  --muted: #6B7280;        /* Texte secondaire */
}
```

### Images

Les images utilisent l'API Unsplash par défaut. Remplacez les URLs dans `src/lib/data.ts` par vos propres images.

## Scripts Disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint
```

## Déploiement sur Vercel

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez les variables d'environnement dans les paramètres Vercel
4. Déployez !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Fonctionnalités SEO

- Métadonnées complètes pour chaque page
- Open Graph et Twitter Cards
- Sitemap automatique (via Next.js)
- Robots.txt configurable
- Balises sémantiques HTML5

## Accessibilité

- Navigation au clavier
- Attributs ARIA appropriés
- Contraste des couleurs conforme WCAG
- Textes alternatifs pour les images

## Performance

- Images optimisées avec `next/image`
- Lazy loading automatique
- Code splitting par route
- Fonts optimisés avec `next/font`

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

Développé avec Next.js 15, TypeScript et Tailwind CSS

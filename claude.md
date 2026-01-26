# FitCoach Pro - Notes de développement

## Contexte du projet

Site vitrine pour un coach sportif personnel. Template moderne et professionnel prêt à être personnalisé.

## Stack technique

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui pour les composants
- Framer Motion pour les animations
- React Hook Form + Zod pour les formulaires
- Resend pour l'envoi d'emails

## Structure des pages

- `/` - Page d'accueil (Hero, Services, Témoignages, CTA)
- `/services` - Détail des offres avec tarifs et FAQ
- `/about` - Biographie et parcours du coach
- `/results` - Galerie des transformations clients
- `/blog` - Articles avec filtrage par catégorie
- `/contact` - Formulaire de contact fonctionnel

## API Routes

- `POST /api/contact` - Traitement du formulaire de contact avec envoi d'email via Resend

## Configuration requise

### Variables d'environnement (.env.local)

```env
RESEND_API_KEY=re_xxxxx           # Clé API Resend
CONTACT_EMAIL=email@exemple.fr    # Email de destination des messages
```

### Note importante sur Resend

- Sans domaine vérifié, les emails ne peuvent être envoyés qu'à l'adresse email du compte Resend
- L'expéditeur par défaut est `onboarding@resend.dev`
- Pour la production, vérifier un domaine sur resend.com/domains

## Fichiers de données

Toutes les données du site sont centralisées dans `src/lib/data.ts` :
- Informations du coach
- Liste des services
- Témoignages clients
- Certifications
- Transformations
- Articles de blog
- FAQ

## Commandes utiles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run lint     # Linting
```

## Points d'attention

1. Les images utilisent actuellement des URLs Unsplash - à remplacer par de vraies photos
2. Les données sont statiques - possibilité d'ajouter un CMS si besoin
3. Le formulaire de contact nécessite une clé API Resend valide

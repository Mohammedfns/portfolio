# Portfolio Next.js avec Tailwind CSS

Un portfolio moderne et élégant développé avec Next.js et Tailwind CSS.

## Fonctionnalités

- Design élégant en mode sombre
- Animations et transitions fluides
- Responsive design pour tous les appareils
- Sections complètes (Accueil, À propos, Projets, Compétences, etc.)
- Optimisé pour le SEO
- Formulaire de contact fonctionnel

## Prérequis

- Node.js 18.0.0 ou version ultérieure
- npm ou yarn

## Installation

1. Clonez ce dépôt ou décompressez l'archive
2. Naviguez dans le répertoire du projet

```bash
cd portfolio
```

3. Installez les dépendances

```bash
npm install
# ou
yarn install
```

## Utilisation

### Mode développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Mode production

Pour construire l'application pour la production :

```bash
npm run build
# ou
yarn build
```

Pour démarrer le serveur de production :

```bash
npm run start
# ou
yarn start
```

## Personnalisation

### Contenu

- Modifiez les informations personnelles dans les composants de section
- Ajoutez vos propres projets dans la section Projets
- Mettez à jour vos compétences dans la section Compétences

### Style

- Les styles globaux sont définis dans `src/app/globals.css`
- Les couleurs principales peuvent être modifiées dans les variables CSS root
- Tailwind CSS est utilisé pour le styling des composants

## Structure du projet

```
portfolio/
├── public/            # Fichiers statiques (images, etc.)
├── src/
│   ├── app/           # Pages de l'application
│   ├── components/    # Composants réutilisables
│   │   ├── layout/    # Composants de mise en page (Header, Footer)
│   │   ├── sections/  # Sections principales du portfolio
│   │   └── ui/        # Composants UI réutilisables
│   └── styles/        # Styles globaux
├── .eslintrc.json     # Configuration ESLint
├── next.config.ts     # Configuration Next.js
├── package.json       # Dépendances et scripts
├── tailwind.config.ts # Configuration Tailwind CSS
└── tsconfig.json      # Configuration TypeScript
```

## Licence

Ce projet est sous licence MIT.


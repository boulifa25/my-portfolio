# Portfolio — Aziz

Portfolio personnel en **Next.js 15 (App Router) + TypeScript**, sans framework CSS
(du CSS écrit à la main, avec des variables de thème). Export statique : le site se
déploie tel quel sur Vercel, Netlify, GitHub Pages ou n'importe quel hébergeur.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de production (génère un site statique dans `out/`) :

```bash
npm run build
```

## Déployer sur Vercel

1. Crée un dépôt GitHub et pousse le dossier.
2. Sur vercel.com → **Add New → Project** → importe le dépôt.
3. Aucun réglage à changer, Vercel détecte Next.js. → **Deploy**.

## Personnaliser

Presque tout le contenu est dans un seul fichier : **`data/content.ts`**.
Modifie-le, le site suit. Les valeurs à remplir sont marquées `← À COMPLÉTER` :

- `profile.lastName`, `email`, `phone`, `github`, `linkedin`
- vérifie les années dans `experience` (je les ai estimées)
- ajoute ou retire des projets dans `projects`

**CV** : dépose ton PDF dans `public/cv.pdf`. Tous les boutons « CV » pointent dessus.

**Couleurs et typo** : en haut de `app/globals.css`, dans le bloc `:root`.
L'accent ambre est la seule couleur vive du site — change `--amber` et toute
l'identité bascule.

## Structure

```
app/
  layout.tsx        métadonnées SEO, <html lang="fr">
  page.tsx          assemble les sections
  globals.css       tous les styles (tokens en haut)
components/
  Nav · Hero · About · Skills · Experience · Projects · Contact · Footer
  Reveal.tsx        apparition au scroll (IntersectionObserver)
  SectionHead.tsx   titre de section
  icons.tsx         icônes SVG inline (zéro dépendance)
data/
  content.ts        ← tout le texte du site
public/
  cv.pdf            ← à ajouter
```

## Parti pris de design

- **Fond encre + un seul accent ambre.** Pas de dégradés multicolores : la couleur
  ne sert qu'à signaler ce qui compte (statut, période en cours, liens).
- **Le hero présente le profil comme un résultat de requête SQL.** C'est la
  signature du site, et elle vient de ton métier (Oracle, PostgreSQL, ETL) plutôt
  que d'un effet décoratif.
- **Les intitulés de section sont des questions** (`qui`, `avec quoi`,
  `depuis quand`, `quoi`, `et après`) plutôt qu'une numérotation 01/02/03.
- **Pas de barres de progression sur les compétences.** « Java 85 % » ne veut rien
  dire pour un recruteur : les technos sont regroupées par domaine.
- Accessibilité : focus clavier visible, `prefers-reduced-motion` respecté,
  contenu lisible sans JavaScript, responsive jusqu'à 360 px.

## Aperçu rapide

`preview.html` est une version statique autonome (CSS inclus) : ouvre-la dans un
navigateur pour voir le rendu sans rien installer. Elle est générée à partir du
build, ne l'édite pas directement.

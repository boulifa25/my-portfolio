/**
 * ─────────────────────────────────────────────────────────────
 *  TOUT LE CONTENU DU SITE EST ICI.
 *  Tu n'as normalement pas besoin de toucher aux composants :
 *  modifie ce fichier et le site suit.
 *  Les valeurs marquées « ← À COMPLÉTER » sont des placeholders.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  firstName: "Aziz",
  lastName: "Boulifa",
  role: "Ingénieur logiciel — full-stack & données",
  tagline:
    "Je construis des applications web et des pipelines de données qui rendent l'information réellement trouvable.",
  email: "azizboulifa25@gmail.com",
  phone: "+216 00 000 000", // ← À COMPLÉTER (ou supprime la ligne dans Contact.tsx)
  github: "https://github.com/boulifa25",
  linkedin: "https://www.linkedin.com/in/boulifa-aziz-a7b802268/",
  cv: "/Aziz_Boulifa_CV.pdf",
  photo: "/avatar.jpg",
  available: true,
};

/** Les lignes du panneau « résultat de requête » du hero. */
export const heroRows: { key: string; value: string; accent?: boolean }[] = [
  { key: "rôle", value: "Ingénieur logiciel · full-stack & données" },
  { key: "poste", value: "Stage ingénieur @ Sopra Steria" },
  { key: "projet", value: "DataScope HR — recherche RH, NLP, ETL" },
  { key: "formation", value: "ESPRIT — Génie Informatique" },
  { key: "lieu", value: "Tunis, Tunisie · mobile France" },
  { key: "statut", value: "ouvert aux opportunités", accent: true },
];

export const about = {
  paragraphs: [
    "Je suis ingénieur en génie informatique, diplômé d'ESPRIT. Je travaille surtout là où le back-end rencontre la donnée : une API propre d'un côté, un schéma de base qui tient debout de l'autre, et une interface qui ne demande pas un mode d'emploi.",
    "Aujourd'hui je suis en stage chez Sopra Steria sur DataScope HR, une application de recherche et de gestion de données RH : recherche hybride en langage naturel, génération assistée par un LLM exécuté en local, et un pipeline ETL entre Oracle et PostgreSQL.",
    "Ce qui m'intéresse : réduire la distance entre une question posée en français et la réponse qui dort quelque part dans une base.",
  ],
  facts: [
    { icon: "🎓", label: "formation", value: "ESPRIT — Génie Informatique" },
    { icon: "💡", label: "spécialité", value: "Full-stack & données" },
    { icon: "📍", label: "localisation", value: "Tunis, Tunisie" },
    { icon: "🚀", label: "objectif", value: "Impact par la donnée" },
  ],
  terminal: [
    { cmd: "whoami", output: "Aziz Boulifa — Ingénieur logiciel" },
    {
      cmd: "echo $SCHOOL",
      output: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies",
    },
    { cmd: "git status", output: "✓ Ouvert aux nouvelles opportunités", success: true },
  ],
  passions: [
    { label: "Ingénierie logicielle", color: "purple" },
    { label: "Machine Learning", color: "pink" },
    { label: "Données & ETL", color: "cyan" },
    { label: "Développement back-end", color: "blue" },
    { label: "Recherche & NLP", color: "mint" },
  ],
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "back-end",
    items: ["Java", "Spring Boot", "Python", "FastAPI", "Symfony", "API REST", "JWT"],
  },
  {
    label: "front-end",
    items: ["Angular", "React", "Next.js", "TypeScript", "HTML / CSS"],
  },
  {
    label: "données",
    items: ["PostgreSQL", "Oracle", "PL/SQL", "ETL", "Qlik Sense", "Pandas"],
  },
  {
    label: "ia & recherche",
    items: ["NLP", "Recherche hybride", "Embeddings", "Ollama", "LLM local", "AWS Bedrock"],
  },
  {
    label: "outils",
    items: ["Docker", "Git", "GitLab CI", "Linux", "Postman"],
  },
];

/** Ordre : du plus récent au plus ancien. Ajuste les dates si besoin. */
export const experience = [
  {
    period: "Juin — août 2026 · 3 mois",
    title: "Stagiaire Ingénieur IA / Développement",
    org: "Sopra HR Software · Stage",
    place: "Tunis, Tunisie · Hybride",
    summary:
      "Stage sur la plateforme DataScope HR, de recherche et de gestion de données RH assistée par LLM.",
    bullets: [
      "Intégration d'AWS Bedrock (Nova 2 Lite) comme second moteur de génération via un pattern Adapter piloté par configuration, rendant le fournisseur d'inférence interchangeable sans modifier le code métier.",
      "Mise en place de l'observabilité du service : coût estimé par requête, tokens et tendance quotidienne, avec isolation par requête pour rester exact sous charge concurrente. Première visibilité budgétaire de l'équipe avant passage en production.",
      "Développement d'une recherche en langage naturel combinant approche lexicale et approche sémantique vectorielle (PostgreSQL / pgvector, embeddings CamemBERT).",
      "Construction du pipeline ETL Oracle vers PostgreSQL, avec règles d'anonymisation conformes au RGPD.",
      "Sélection d'un profil d'inférence cross-région EU maintenant les données dans l'Union européenne.",
    ],
    stack: "Python, FastAPI, AWS Bedrock, Ollama, boto3, PostgreSQL, Oracle, React, Docker",
  },
  {
    period: "Juil. — août 2025 · 2 mois",
    title: "Stagiaire Data Engineering / BI",
    org: "Sopra HR Software · Stage",
    place: "Tunis, Tunisie · Hybride",
    summary: "Stage sur les données de référence du SIRH HR Access.",
    bullets: [
      "Déploiement d'un mécanisme de Change Data Capture sur 15 tables critiques, assurant le suivi en temps réel des données sensibles.",
      "Développement de 45 triggers PL/SQL capturant les opérations INSERT, UPDATE et DELETE, avec moins de 5 % de surcoût mesuré sur les transactions courantes.",
      "Modélisation de tables d'audit portant à 100 % la traçabilité des modifications sur les données de référence.",
      "Livraison de 5 tableaux de bord Qlik Sense utilisés quotidiennement par les équipes RH et la direction.",
    ],
    stack: "Oracle, PL/SQL, SQL, Qlik Sense, modélisation décisionnelle",
  },
];

/** Ordre : du plus récent au plus ancien. */
export const education = [
  {
    period: "2023 — 2026",
    title: "Diplôme d'ingénieur — Génie Informatique",
    org: "ESPRIT",
    place: "Tunis",
    current: true,
    bullets: [
      "Spécialisation développement logiciel, bases de données et informatique décisionnelle.",
    ],
  },
];

export const projects = [
  {
    name: "StageIA",
    year: "2026",
    context: "Projet académique",
    summary:
      "Plateforme de gestion des stages avec suivi pédagogique assisté par IA : offres, candidatures, conventions, suivi, soutenances et attestations PDF, avec un espace dédié par rôle. Le module IA (Llama 3.3 70B via Groq) analyse les rapports des étudiants, détecte le risque de décrochage et calcule un score de compatibilité entre CV et offres.",
    stack: ["React", "TypeScript", "Spring Boot", "Spring Security / JWT", "PostgreSQL", "Groq / Llama 3.3"],
    status: "Terminé",
    href: "https://github.com/boulifa25/Projet_IA_SAE",
  },
  {
    name: "DataScope HR",
    year: "2026",
    context: "Sopra Steria",
    summary:
      "Application de recherche et de gestion de données RH. Une question posée en français est traduite en recherche hybride sur la base, puis reformulée en réponse par un LLM local.",
    stack: ["React", "FastAPI", "PostgreSQL", "Ollama", "Docker"],
    status: "Projet interne",
    href: "",
  },
  {
    name: "NephroPaidi",
    year: "2025",
    context: "Projet académique",
    summary:
      "Plateforme de suivi de patients en néphrologie pédiatrique : dossiers, suivi des mesures et restitution pour l'équipe soignante.",
    stack: ["Spring Boot", "Angular", "MySQL"],
    status: "Terminé",
    href: "",
  },
  {
    name: "The Host",
    year: "2026",
    context: "Freelance — HoYouGroupe",
    summary:
      "Plateforme vitrine pour un service de conciergerie immobilière premium : les propriétaires achètent, l'équipe co-investit, équipe et gère leurs biens en location courte durée, avec reporting de revenus et prise de contact intégrée.",
    stack: ["React", "Vite", "Tailwind CSS", "GSAP", "React Router"],
    status: "En cours",
    href: "https://github.com/boulifa25/The-Host-Group",
  },
  {
    name: "Flowtask",
    year: "2024",
    context: "Concept produit",
    summary:
      "Concept de SaaS de gestion de projet : maquettes UI/UX d'un tableau de bord, système de composants et parcours utilisateur.",
    stack: ["Figma", "React", "Design system"],
    status: "Concept",
    href: "",
  },
  {
    name: "Plateforme de gestion de bibliothèque",
    year: "2025",
    context: "Projet académique — architecte principal",
    summary:
      "API RESTful sécurisée gérant plus de 1 000 transactions quotidiennes, avec authentification JWT à rôles et permissions granulaires et documentation Swagger / OpenAPI. Requêtes optimisées via Doctrine ORM : temps de réponse réduit de 40 %.",
    stack: ["Symfony 6", "Doctrine ORM", "MySQL", "JWT", "PHPUnit", "API Platform"],
    status: "Terminé",
    href: "",
  },
  {
    name: "Site vitrine — projet startup",
    year: "2025",
    context: "Projet startup — lead developer",
    summary:
      "Interface responsive cross-platform atteignant 95+ sur Google Lighthouse (performance, accessibilité, SEO). Lazy loading et code splitting via Webpack : temps de chargement initial réduit de 60 %. Suivi Google Analytics et stratégie SEO.",
    stack: ["React.js", "Redux", "Sass", "Webpack", "Jest"],
    status: "Terminé",
    href: "",
  },
  {
    name: "Système de gestion de stock",
    year: "2024",
    context: "Projet académique — architecte logiciel",
    summary:
      "Application desktop multi-utilisateurs gérant un catalogue de plus de 10 000 articles, interface graphique Qt. Système de cache intelligent réduisant la consommation mémoire de 30 %, architecture MVC modulaire.",
    stack: ["C++", "Qt", "SQLite", "CMake"],
    status: "Terminé",
    href: "",
  },
];

export const nav = [
  { id: "profil", label: "profil" },
  { id: "competences", label: "compétences" },
  { id: "parcours", label: "parcours" },
  { id: "formation", label: "formation" },
  { id: "projets", label: "projets" },
  { id: "contact", label: "contact" },
];

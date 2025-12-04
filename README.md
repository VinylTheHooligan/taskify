# Taskify – Application Kanban de gestion de tâches (Front)

## Objectif
Taskify est une application web de type to-do list inspirée du modèle Kanban.  
Ce dépôt représente la **partie front** du projet, c’est-à-dire l’interface utilisateur qui permet d’afficher et d’interagir avec les données.

## Stack technique
- **React 19** avec **Vite** pour le développement et le build.  
- **TailwindCSS 4** pour la mise en page et le style.  
- **React Router v7 (Data API)** pour la navigation et la gestion des données via `loader` et `action`.  
- **dnd-kit** pour le glisser-déposer des tâches.  
- **TypeScript ~5.9** pour la sécurité et la clarté du code.

## Choix architecturaux
- Pas de rendu serveur ni d’outils orientés SEO, l’application est pensée uniquement pour l’usage.  
- Les `loader` et `action` de React Router centralisent la récupération et la mise à jour des données.  
- Le drag & drop est géré directement avec dnd-kit.  
- Les mises à jour d’état respectent l’immuabilité pour assurer la réactivité.  
- Les composants sont conçus pour être réutilisables et faciles à maintenir.

## Points forts
- Temps de build rapide grâce à Vite.  
- Architecture simple, sans surcharge inutile.  
- Glisser-déposer fluide pour déplacer les tâches entre colonnes.  
- Code structuré et maintenable avec TypeScript.  
- Interface responsive et cohérente grâce à TailwindCSS.  
- Dépendances limitées à l’essentiel.  
- Développement fluide avec le rechargement à chaud.

## Fonctionnalités
- 📋 Créer, modifier et supprimer des tâches  
- 🔄 Déplacer les tâches entre colonnes par glisser-déposer  
- ➕ Ajouter ou supprimer des colonnes Kanban  
- 🎨 Interface adaptée aux différents écrans  
- ⚡ Navigation gérée par React Router  

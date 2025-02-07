
# Application de Streaming Utilisateurs

## Description
Cette application permet aux utilisateurs de s'inscrire, de se connecter et de gérer leurs abonnements pour accéder à un catalogue de films. Les utilisateurs peuvent noter des films, laisser des commentaires, et gérer une liste de films favoris.

## Fonctionnalités

### Inscription et Connexion
- **Inscription des utilisateurs** : Permet aux utilisateurs de créer un compte.
- **Connexion et gestion des abonnés** : Authentification sécurisée avec gestion des comptes pour les utilisateurs abonnés.

### Streaming et Interactions
- **Streaming de films** : Accès au catalogue de films pour les utilisateurs abonnés.
- **Notation des films** : Les utilisateurs peuvent évaluer les films.
- **Recherche et filtrage** :
  - Recherche de films par nom.
  - Filtrage des films par genre et date.

### Commentaires et Favoris
- **Commentaires** :
  - Ajout de commentaires sur les films.
  - Affichage des commentaires associés à chaque film.
- **Films favoris** : Les utilisateurs peuvent gérer une liste de leurs films préférés.

### Contenus et Suggestions
- **Affichage des nouveautés** : Présentation des derniers films ajoutés sur la page d’accueil.
- **Détail des films** : Affichage des informations détaillées avec des suggestions de films en relation.

### Administration
- **Interface administrateur** :
  - Gestion des utilisateurs.
  - Analyse des statistiques d’utilisation, telles que :
    - Temps passé sur l’application.
    - Nombre de visiteurs.
    - Nombre d’inscriptions globales et sur une période donnée.

### Notifications
- **Utilisation de notifications programmées** :
  - Types de notifications :
    - Envoi de notifications aux utilisateurs n'ayant pas ouvert l'application depuis plus de 24 heures.
    - Notifications en temps réel : Pour informer des nouveaux films ajoutés.
    - Alertes promotionnelles : Notifications pour les films en promotion.
    - Rappels d'abonnement : Rappels pour les abonnements à renouveler.

## Technologies Utilisées
- **Tests** : Jest, Supertest, React Native Testing Library
- **Backend** : NestJS, TypeORM
- **Frontend Mobile** : React Native, Expo

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/hanane987/MyVod1.git

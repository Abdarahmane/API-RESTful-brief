

# API de Gestion des Recettes

## Description

Cette API permet de gérer les recettes dans une application de gestion de recettes. Elle permet de créer, lire, mettre à jour et supprimer des recettes.

## Endpoints

### Recettes

- **GET /api/recettes**
  - Récupère toutes les recettes.
  - **Exemple de réponse** :
    ```json
    [
      {
        "id": 1,
        "titre": "Salade César revisitée",
        "ingredients": "Laitue, Poulet grillé",
        "type": "Entrée"
      }
    ]
    ```

- **GET /api/recettes/:id**
  - Récupère une recette par ID.
  - **Paramètre** :
    - `id` : L'ID de la recette à récupérer.
  - **Exemple de requête** :
    ```bash
    GET /api/recettes/1
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César revisitée",
      "ingredients": "Laitue, Poulet grillé",
      "type": "Entrée"
    }
    ```

- **POST /api/recettes**
  - Crée une nouvelle recette.
  - **Exemple de requête** :
    ```bash
    POST /api/recettes
    Content-Type: application/json
    ```
  - **Corps de la requête (Body)** :
    ```json
    {
      "titre": "Pâtes à la carbonara",
      "ingredients": "Pâtes, Œufs, Lardons",
      "type": "Plat principal"
    }
    ```

  - **Exemple de réponse** :
    ```json
    {
      "id": 2,
      "titre": "Pâtes à la carbonara",
      "ingredients": "Pâtes, Œufs, Lardons",
      "type": "Plat principal"
    }
    ```

- **PUT /api/recettes/:id**
  - Met à jour une recette existante.
  - **Paramètre** :
    - `id` : L'ID de la recette à mettre à jour.
  - **Exemple de requête** :
    ```bash
    PUT /api/recettes/1
    Content-Type: application/json
    ```
  - **Corps de la requête (Body)** :
    ```json
    {
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entrée"
    }
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entrée"
    }
    ```

- **DELETE /api/recettes/:id**
  - Supprime une recette par ID.
  - **Paramètre** :
    - `id` : L'ID de la recette à supprimer.
  - **Exemple de requête** :
    ```bash
    DELETE /api/recettes/1
    ```
  - **Exemple de réponse** :
    ```json
    {
      "message": "Recette supprimée avec succès."
    }
    ```
# Prérequis
  
  avant de  commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine:

  * Node.js(v16 ou superieure) 
  * Mysql
  * Postman ( pour tester l'API)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Fatoumacisse99/APIGestion_Recettes.git

 2. Accédez au répertoire du projet :

```bash
cd APIGestion_Recettes
```
3. Installez les dépendances :

```bash
npm install
```

4. Configurez la base de données :

- Assurez-vous que Mysql est en cours d'exécution sur votre machine locale.
- Mettez les paramètres de connexion dans db.js.
- Créez un fichier .env avec la configuration de votre base de données :

```bash

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mypassWord
DB_NAME=db_name 
DB_PORT=port_spécifier

```
 
- si vous souhaitez connecter avec l'image docker

```bash
DB_HOST=db
DB_USER=root
DB_PASSWORD= yourpassword
DB_NAME=db_name
DB_PORT= port_spécifier
```
5. Démarrez le serveur :

```bash
 npm start
 ```
## Exécution des commandes
 - Pour exécuter les tests unitaires, utilisez la commande suivante :

```bash
npm test
```

- Pour linting, exécutez la commande suivante 

```bash

npm run lint
```
Pour formater le code avec Prettier, exécutez :

```bash

npm run format
```
## Lancer l'API avec Docker

Pour lancer l'API avec Docker, suivez ces étapes :

### 1. Construire l'image Docker

À la racine de votre projet, exécutez la commande suivante pour construire l'image Docker de l'API :

```bash
docker build -t recette-api .
```

* Lancer le Conteneur avec Docker Compose : Pour lancer le conteneur en utilisant docker-compose, exécutez cette commande :
  ```bash
  docker-compose up --build
  ```
## Auteur
  [Abdarahmane Ibrahima Demba](https://github.com/Abdarahmane)

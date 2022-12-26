# ECE DEVOPS Project User-API

It is a basic **NodeJS** web application exposing **REST API** that creates and stores user parameters in **Redis database**

## Prérequis

Cette application est écris en **NodeJS** et utilise **Redis** comme base de donnée

1. [Installer NodeJS](https://nodejs.org/en/download/)

2. [Install Redis](https://redis.io/download)

## Instructions

### 1. Create a web application

Pour le projet, on utilise l'API utilisateur présenté ici [Userapi in Corrections](https://github.com/adaltas/ece-devops-2022-fall-corrections/tree/main/userapi).

### Utilisations

1. Initier l'application (installer dépendance)

Allez dans le répertoire racine de l'application (où le fichier `package.json` est localisé) et lancer:

```
npm install
```

2. Démarrer le serveur web

Dans le répertoire racine de l'application, lancer:

```
npm start
```

Cela démarre un serveur web disponible dans votre navigateur à l'adresse http://localhost:3000.

3. Tester

Dans le répertoire racine de l'application, lancer:

```
npm test
```

4. Créer un utilisateur

Envoyer une requête POST (REST protocol) en utilsant le terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"alexcmr","firstname":"Alexandre","lastname":"Correia"}' \
  http://localhost:3000/user
```

Il affichera:

```
{"status":"success","msg":"OK"}
```


## Author

Alexandre CORREIA & Christ ABESSOLO

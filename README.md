## DEV CORONA

App de suivie et de gestion de la crise Corona et d'information:

- [Laravel 6](https://laravel.com/docs).
- [Node Js 12.14](https://nodejs.org/en/).
- [ReactJs](https://fr.reactjs.org/).
- [Ionic](https://ionicframework.com/).


### Prérequis

Le travail sur ce projet nécéssite des connaissances de base en developement 
- HTML, CSS, JS, Bootstraps 
- PHP
- SQL et ORM
- Node JS
- Ionic 4
- Connaissance de git et CLI git 


### Installation

Le système nécécite l'installation d'un ensembles de programes et librairies parmis les quelles on aura : PHP v7.3... Laravel 6, Node Js, un SGBD de son choix peut importe (MySQL, Postgres, Maria DB...). Aussi Git pour le versionning et la collaboration sur le projet.


### PHP et SGBD

En général, PHP, Maria DB ou MySQL vienent avec WAMP serveur ou XAMP serveur, donc faudrait juste mettre PHP en variable d'environement.


### Laravel 6

Laravel est un Framework PHP qui a besoin de PHP, PHP 7.3.. pour la version 6 que nous allons utiliser dans notre projet. Mais aussi de [Composer](https://getcomposer.org/). Composer est un gestionnaire de dépendance ou de librairies PHP, donc nécéssite l'installation préalable de PHP et l'ajout de ce programme en variable d'environement pour fonctionner.
Pour télecharger composer rendez-vous sur le site de composer et télécharger le fichier éxécutable si vous êtes sous window. Pour les utilisateurs des systèmes Unix suivez les consignes sur le site de Composer.
Une fois composer installer vous pouvez passer à la récupération du code source du projet dans le repertoire.


### Remarque: 

**Créer votre base de donnée, car les migrations correspondent à la création des tables de la base de données, action qui ne saurait s'exécuter seulement lorsqu'une base de données est présente** 

Avant de lancer toutes les commandes, ouvrez le fichier <b>.env </b> à la racine de votre Projet et configurez le comme suit: <br />
    DB_CONNECTION=pgsql         // Correspont à mon connecteur de base de données (Dans mon cas c'est psql, ceux qui ont MySQL ce sera mysql)<br />
    DB_PORT=5432                // Correspond au port du SGBD (Dans mon cas c'est celui de Postgres pour MySql c'est 3306 pour Maria DB c'est 3307)<br />
    DB_DATABASE=devcorona       // Nom de la Base de données<br />
    DB_USERNAME=devcorona       // Nom de l'utilisateur de la base de données<br />
    DB_PASSWORD=devcorona       // Mot de passe de l'utilisateur de la Base de données <br />


## Mise en place du projet

    1. Cloner le projet 
    git clone https://github.com/FGI-HUB/devCorona.git

    2. Téléchargement des dépendances php 
    composer install

    3. Téléchargement des dépendances Javascript 
    npm install

    4. Lancement de Laravel  (BACKEND)
    php artisan migrate
    php artisan passport:install
    php artisan serve

    5. Lancement de React (FRONTEND)
    npm run watch
    
    6. Lancement de L'app Mobile (MOBILE)
    ionic serve


**La commande npm Install peut dans certains cas neccéssité les privilèges administrateur, donc ouvrez un terminal en tant qu'administrateur pour ceux qui sont sous Window. Pour ceux utilisant les système unix utiliser la avec la commande sudo (`sudo npm install` )**

## Installation de Ionic

Ionic s'installe automatiquement lorsque l'utilisateur install les dépendances Javascripts donc plus besoin d'installer quoi que ce soit.


### Modifier le Backend

- Pour ceux qui font le Backend, le code du projet de Backend est dans la racine du repertoire. Dans notre projet vue que nous avons scinder le Backend et le FrontEnd, plus besoin d'utilisation des vues. Les controllers et les models et les routes seront à la racine du document. <br /> 
Pour les routes, elles sont créés dans le fichier `routes/api.php`  <br />
 <br />
- Pour ceux qui travaillent sur le FrontEnd, le code du projet est situé dans le repertoire `resources/js/frontend/frontoffice` <br /> 
 <br />
- Pour ceux qui travaillent sur le mobile, le code du projet de Front est situé dans le repertoire `src/` <br /> 
 <br />
 <br />
 
 Pour plus d'info, contactez @stephcyrille (stephcyril.sc@gmail.com)
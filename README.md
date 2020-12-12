# piquante
## prerequis
* nécessite node.js v14.8.0
* nécessite npm v6.14.7
* nodemon - `npm install -g nodemon`
* angular cli (vous permettra de lancer le front fournit par openclassrooms) - `npm install -g @angular/cli`
## marche à suivre pour installer le projet
 1. cloner le projet
 2. renommer le fichier `.env-exemple` en `.env` et y configurer les informations de votre base de données
 3. faire un `npm install`
 4. faire un `nodemon server`(en mode developpement)
 5. l'api est disponible sur [http://localhost:3000/](http://localhost:3000/)
 6. si vous voulez consommer l'api vous pouvez utiliser le front fournit par openclassrooms en faisant `npm install` puis `ng serve`et ensuite le projet sera disponible sur [http://localhost:4200/](http://localhost:4200/)
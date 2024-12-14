# Utilisation d'une image officielle de Node.js.
FROM node:18

# Définit le répertoire de travail dans le conteneur pour le backend.
WORKDIR /app

# Copie les fichiers `package.json` et `package-lock.json` pour installer les dépendances.
COPY package*.json ./

# Installe les dépendances du backend, définies dans `package.json`.
RUN npm install

# Copie tous les fichiers du projet backend dans le conteneur.
COPY . .

# Expose le port 5000 pour le backend.
EXPOSE 5000

# Lance le serveur qui reste à l'écoute.
CMD ["npx", "nodemon", "server.js"]

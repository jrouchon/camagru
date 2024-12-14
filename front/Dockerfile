# Utilisation d'une image officielle de Node.js
FROM node:18 

# Définit le répertoire de travail dans le conteneur.
# Tout fichier copié ou commandé sera exécuté dans ce répertoire.
WORKDIR /app

# Copie les fichiers `package.json` et `package-lock.json` dans le conteneur.
# Cela permet d'installer les dépendances avant de copier tout le code.
COPY package*.json ./

# Installe les dépendances nécessaires du projet React.
RUN npm install 

# Copie tous les fichiers du projet local dans le conteneur.
# Cela inclut le code source et les fichiers de configuration.
COPY . .

# Expose le port 3000, utilisé par React.
EXPOSE 3000 

# Démarre le serveur React.
CMD ["npm", "start"]

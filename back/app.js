const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const helmet = require('helmet');

// const userRoutes = require('./routes/user.js');
// const postsRoutes = require('./routes/posts.js');

//mongodb connect
const dbuser = process.env.DB_USER
const dbpasswd = process.env.DB_PASSWORD 
mongoose.connect(`mongodb+srv://${dbuser}:${dbpasswd}@cluster0.iwcca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion a MongoDB reussie !'))
    .catch((err) => console.log('Connexion a MongoDB echouee !', err));


//middleware cors_handling bodyparser
app.use(helmet({
    crossOriginResourcePolicy: { policy: "same-site"}
}))

app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Camagru Backend Running!");
  });

// testing server
//app.use((req, res) => {
//    res.json({ message: 'Votre requete a bien été reçue !' });
//});

//routes
 // app.use('/api/auth', userRoutes);
 // app.use('/api/posts', postsRoutes);
 // app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
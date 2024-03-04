const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bonjour, ceci est une application Express!');
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
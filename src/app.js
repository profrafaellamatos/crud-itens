// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig'); // Importe o arquivo de configuração

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

//Rotas


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
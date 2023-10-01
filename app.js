// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./src/dbConfig'); // Importe o arquivo de configuração

const app = express();
const port = 3000;

// Configurar middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Rotas
// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicie o servidor
const server = app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

module.exports = { app, server, pool };
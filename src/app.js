// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig'); // Importe o arquivo de configuração

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Restante do seu código...

// Exemplo de rota para obter todos os itens
app.get('/items', (req, res) => {
  const query = 'SELECT * FROM items';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar itens:', err);
      res.status(500).send('Erro interno');
    } else {
      res.json(results);
    }
  });
});

// Restante do seu código...

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig'); // Importe o arquivo de configuração

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

//Rotas
// Rota para obter um item por ID
app.get('/itens/:id', (req, res) => {
    const itemId = req.params.id;
    const query = 'SELECT * FROM itens WHERE id = ?';

    db.query(query, [itemId], (err, results) => {
        if (err) {
            console.error('Erro ao buscar item por ID:', err);
            res.status(500).send('Erro interno');
        } else if (results.length === 0) {
            res.status(404).send('Item não encontrado');
        } else {
            res.json(results[0]);
        }
    });
});

// Rota para adicionar um novo item
app.post('/itens', (req, res) => {
    const {
        name
    } = req.body;
    const query = 'INSERT INTO itens (nome) VALUES (?)';

    db.query(query, [name], (err, results) => {
        if (err) {
            console.error('Erro ao adicionar item:', err);
            res.status(500).send('Erro interno');
        } else {
            res.json({
                id: results.insertId,
                name
            });
        }
    });
});

// Rota para atualizar um item por ID
app.put('/itens/:id', (req, res) => {
    const itemId = req.params.id;
    const {
        name
    } = req.body;
    const query = 'UPDATE itens SET nome = ? WHERE id = ?';

    db.query(query, [name, itemId], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar item:', err);
            res.status(500).send('Erro interno');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Item não encontrado');
        } else {
            res.json({
                id: itemId,
                name
            });
        }
    });
});

// Rota para excluir um item por ID
app.delete('/itens/:id', (req, res) => {
    const itemId = req.params.id;
    const query = 'DELETE FROM itens WHERE id = ?';

    db.query(query, [itemId], (err, results) => {
        if (err) {
            console.error('Erro ao excluir item:', err);
            res.status(500).send('Erro interno');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Item não encontrado');
        } else {
            res.status(204).send(); // Resposta de sucesso sem conteúdo
        }
    });
});


// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
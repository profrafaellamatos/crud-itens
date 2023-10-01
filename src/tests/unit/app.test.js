// app.test.js
const request = require('supertest');
const { app, server, pool } = require('../../../app'); // Importe o objeto app, server e pool

afterAll(async () => {
  // Fecha o servidor após todos os testes
  await new Promise((resolve) => server.close(resolve));
  // Fecha a conexão do pool
  await pool.end();
});

describe('Testes de Rotas', () => {
  test('Deve retornar status 200 para a rota da página inicial', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Adicione mais testes conforme necessário para outras rotas
});

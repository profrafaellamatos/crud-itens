const request = require('supertest');
const { app, server } = require('../../../app'); // Importe o objeto app e server

afterAll((done) => {
  // Fecha o servidor após todos os testes
  server.close(done);
});

describe('Testes de Rotas', () => {
  test('Deve retornar status 200 para a rota da página inicial', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Adicione mais testes conforme necessário para outras rotas
});

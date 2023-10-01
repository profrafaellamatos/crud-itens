// dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'crud_itens_db',
});

module.exports = pool;

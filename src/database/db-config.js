// 1. Importação dos modulos
const knex = require('knex');
// 1.2 Importação do arquivo de configuração do knex
const config = require('../../knexfile.js');

// 2. Define qual configuração sera utilizada
const db = knex(config.development);

// 2.1 Exporta a configuração para ser utilizada na aplicação
module.exports = db;
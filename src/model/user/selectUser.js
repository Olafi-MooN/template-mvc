// Importação da configuração do banco de dados
const db = require('../../database/db-config');

// Selecione o usuario quando
const selectUserWhere = async (column, value) => {
    const result = db('users').where('id', 1);
    return result;
}

module.exports = selectUserWhere;
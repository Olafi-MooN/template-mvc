// 1. importação da model que controla o bd
const insertUser = require('../../model/user/insertUser');
const selectUserWhere = require('../../model/user/selectUser');

// 1.2 configurando as rotas que insere os dados no banco
exports.insert = async (req, res) => {
    const result = await insertUser('Alef', 'Santos');
    return res.send(result)
}

// 2. exportando o modulo que retorna a página principal 
exports.index = async (req, res) => {
    const result = await selectUserWhere('fist_name', 'Alef');
    res.render('index.html', {result});
} 

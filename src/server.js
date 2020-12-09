// 1. importação de módulos node
const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// 2. middleware 
server.use(express.static(__dirname+'/public'));
server.use(express.json());
server.use(require('./app'));

// 3. Servidor
server.listen(process.env.PORT || 3000, () => {
    console.log('O servidor foi iniciado com sucesso!')
});
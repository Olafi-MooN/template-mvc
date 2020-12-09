// 1. importação de módulos node
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// 1.1 importação de módulos usuário
const router = require('./routers/router');

// 1.2 pegando os métodos do express
const app = express();

// 2. Configurando o nunjucks (template engine)
nunjucks.configure(__dirname+"/views", {
    autoescape: true,
    express: app,
    watch: true
});

// 3. middleware - configurando o body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(cookieParser());

// 4. middleware 
app.use(router);

// 5. exportando o app para ser usando no projeto inteiro
module.exports = app;
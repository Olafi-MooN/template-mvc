// 1. Importação do modulo de rotas
const router = require('express').Router();

// 2. Importação dos controllers
const index = require('../controllers/index/IndexController');

// 2. Rota principal
router.get('/', index.index);
router.get('/insert', index.insert);

// 3. Exportando a rota para ser utilizada na aplicaçao
module.exports = router;
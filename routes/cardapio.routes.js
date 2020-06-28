const router = require('express-promise-router')()
const cardapioController = require('../controllers/cardapio.controller')

// Listar o cardápio de lanches
router.get('/cardapio',cardapioController.listAll)

// Cadastrar um novo item no cardápio
router.post('/cardapio',cardapioController.createItem)

// Excluir um item do cardápio
router.delete('/cardapio/:id',cardapioController.deleteitem)

module.exports = router
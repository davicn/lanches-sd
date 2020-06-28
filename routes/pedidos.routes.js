const router = require('express-promise-router')()
const pedidosController = require('../controllers/pedidos.controller')

// Cadastrar um novo item no cardápio
router.post('/pedidos',pedidosController.createPedido)

module.exports = router
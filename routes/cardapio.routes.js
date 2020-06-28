const router = require('express-promise-router')()
const cardapioController = require('../controllers/cardapio.controller')


router.get('/cardapio',cardapioController.listAll)

module.exports = router
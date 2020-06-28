const router = require('express-promise-router')()
const cardapioController = require('../controllers/cardapio.controller')


router.get('/cardapio',cardapioController.listAll)
router.post('/cardapio',cardapioController.createItem)

module.exports = router
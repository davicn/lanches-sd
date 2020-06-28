const router = require('express-promise-router')()
const entregasController = require('../controllers/entregas.controller')

router.post('/entregas',entregasController.createEntrega)


module.exports =router
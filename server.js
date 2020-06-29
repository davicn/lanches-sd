const express = require('express')
const app = express()
const cors = require('cors');

const port = process.env.PORT || 3000;

const cardapioRoute = require('./routes/cardapio.routes')
const pedidosRoute = require('./routes/pedidos.routes')
const entregasRoute = require('./routes/entregas.routes')


app.get("/", (request, response) => {
    response.send({ status: "SERVER ON!" })
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors());

app.use('/', cardapioRoute)
app.use('/', pedidosRoute)
app.use('/',entregasRoute)

app.listen(port, () => {
    console.log("Servidor inicializado!");
});
const express = require('express')
const db = require('./database/config')
const app = express()

const cardapioRoute = require('./routes/cardapio.routes')

  
app.get("/",(request,response)=>{
    response.send({status:"SERVER ON!"})
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))

app.use('/',cardapioRoute)

app.listen(3000, () => {
    console.log("Servidor inicializado!");
});
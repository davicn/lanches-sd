const express = require('express')

const app = express()

const port = 3000


app.get("/",(request,response)=>{
    response.send(JSON.stringify({status:"SERVER ON!"}))
})


app.listen(port, () => {
    console.log("Servidor inicializado!");
});
const axios = require('axios')
const { response } = require('express')



axios.post('https://rest-api-lanches-sd.herokuapp.com/pedidos',
    {
        pedidos:[1]
    })
    .then(response => {
        console.log(response.data.msg)
    }).catch(error => {
        console.log(error)
    })


// Listar Cardápio
axios.get('https://rest-api-lanches-sd.herokuapp.com/cardapio')
    .then((response) => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
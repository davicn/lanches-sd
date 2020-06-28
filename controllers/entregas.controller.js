const db = require('../database/config')

exports.createEntrega = async (req, res) => {
    const {endereco} = req.body
    await db.query(
        'insert into entregas (pedido,endereco) select max(idPedido),$1 from pedidos',[endereco]
    )
    res.status(201).send({
        msg: "Entrega solicitada!",
        body: {
            endereco: {
                endereco
            }
        }
    })
}
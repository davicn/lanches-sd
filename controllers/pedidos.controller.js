const db = require('../database/config')


exports.createPedido = async (req, res) => {
    const { pedidos } = req.body
    await db.query(
        `insert into pedidos (items) values (array ${pedidos})`
    )
    res.status(201).send({
        msg: "Pedido salvo!",
        body: {
            lanche: {
                pedidos
            }
        }
    })
}
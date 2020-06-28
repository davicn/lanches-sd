const db = require('../database/config')

// Listar o cardápio de lanches
exports.listAll = async (req, res) => {
    const response = await db.query(
        `select * from cardapio`
    )
    res.status(200).send(response.rows)
}

exports.createItem = async (req, res) => {
    const { descricao } = req.body
    const { rows } = await db.query(
        "insert into cardapio (descricao) values ($1)",[descricao]
    )
    res.status(201).send({
        msg: "Novo lanche inserido!",
        body: {
            lanche: {
                descricao
            }
        }
    })
}
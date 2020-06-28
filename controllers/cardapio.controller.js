const db = require('../database/config')

// Listar o cardápio de lanches
exports.listAll = async (req, res) => {
    const response = await db.query(
        `select * from cardapio`
    )
    res.status(200).send(response.rows)
}

// Cadastrar um novo item no cardápio
exports.createItem = async (req, res) => {
    const { descricao } = req.body
    const { rows } = await db.query(
        "insert into cardapio (descricao) values ($1)", [descricao]
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

// Excluir um item do cardápio
exports.deleteitem = async (req, res) => {
    const idItem = parseInt(req.params.id)
    await db.query("delete from cardapio where idCardapio=$1", [idItem])

    res.status(200).send({ message: 'Item deleta do cardápio!', idItem });
}

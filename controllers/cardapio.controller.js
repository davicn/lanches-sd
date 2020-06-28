const db = require('../database/config')

exports.listAll = async (req, res) => { 
    const response = await db.query(
        `select * from cardapio`
    )
    res.status(200).send(response.rows)
}
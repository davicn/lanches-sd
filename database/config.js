const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    /*user: 'postgres',
    host: 'localhost',
    database: 'db_lanches',
    password: '12345',
    port: 5432,*/
    //conString: "postgres://postgres:12345@localhost:5432/db_lanche"//process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('Base de Dados conectado!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

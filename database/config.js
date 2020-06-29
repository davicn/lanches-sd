const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: 'postgres://cbowimjtocsuau:e594cfac07a72b5210527d4a6c73636f678396bcaaf34ff4242e633a59b7abe8@ec2-34-233-226-84.compute-1.amazonaws.com:5432/d4aelf3c2ltv8v',
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

const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: 'postgres://qawohvqlxsyocy:53c9ed2b4d5b453043e9404d3c2bdc84120fdfeb526a392add9dcd4d6f02e5b2@ec2-54-236-169-55.compute-1.amazonaws.com:5432/dbdr25h606nl71',
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

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {

    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }

    console.log('Conectado ao MySQL com sucesso!');

    connection.release();
});

export default pool;
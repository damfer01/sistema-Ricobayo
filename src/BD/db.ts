const mysql = require('mysql2/promise');

const connection  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'ricobayo'
});

connection.query('SELECT 1')
.then(data => console.log(data)).catch((err) => console.log('conexão falhou !!! . \n' +err));

module.exports = connection;
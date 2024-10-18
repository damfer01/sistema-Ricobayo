const router = require('./routes')
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 const db = require('./BD/db')

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use(router);

// PORTA DE ENTRADA||SAIDA
db.query('SELECT 1')
.then(() => {
    console.log('Conexão feita com sucesso')
    app.listen(3000, () =>{
        console.log('O servidor está rodando na porta 3000');
    });
}).catch((err) => console.log('conexão com Banco de dados Falhou !!!. \n' +err))

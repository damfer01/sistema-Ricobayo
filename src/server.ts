
const rotas = require('./routes');

const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);


//**TUDO SOBRE O  MONGO  */
app.use(cors());
app.use(express.json());


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/snack-hub?retryWrites=true&w=majority");

mongoose.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
        console.log('error:', error);
    });


    app.use(rotas);

    // PORTA DE ENTRADA||SAIDA
    server.listen(process.env.PORT || 3333, () => {
        console.log('O servidor está rodando na porta');
    });
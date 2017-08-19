const port = 3003

//Toda requisição para api ele faz o parse do JSON para object javascript
const bodyParser = require('body-parser');
//servidor express que roda em cima do nodejs
const express = require('express');
//Startando o servidor
const server = express();
//Habilitando o cors
const allowCors = require('./cors');

//Adicionando middleware para o servidor
//Ele desserializa e transforma em object Javascript
//Esse serve para quando for dados enviado por post do formulário
server.use(bodyParser.urlencoded({ extends: true}));
//Esse serve para desserializar JSON para  object Javascript
server.use(bodyParser.json());
server.use(allowCors);


server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server;
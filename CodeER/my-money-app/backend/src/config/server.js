const port = 3003;
//Adicionando os middlewares
const bodyParser = require("body-parser");
const express = require("express"); // CommonJs retornar singleton

const server = express(); // Sempre retorna uma nova instancia.

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;

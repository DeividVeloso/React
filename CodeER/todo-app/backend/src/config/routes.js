const express = require('express');

//Função para receber o servidor e registrar as rotas
module.exports = function(server){
    //API routes
    //Pegando as rotas do express
    const router = express.Router();
    //E adicionando um middleware para elas
    //Todos os endpoints irão começar com api
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    //Registrando as rotas da API e Adicionando /api/todos para todos os verbos HTTP
    //['get', 'post', 'put', 'delete']
    todoService.register(router, '/todos')
}
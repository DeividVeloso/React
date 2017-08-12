const restful = require('node-restful');
//Cria todo esquema entre a API e o mongo Schema
const mongoose = restful.mongoose;

//Criando meu documento para os meus TODOS
//Colunas(são propriedades JSON)
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done:  { type: Boolean, required: true, default: false},
    createdAt:  { type: Date, required: true, default: Date.now},
});

//Relacionando meu Documento com o meu modelo(object Javascript)
module.exports= restful.model('Todo', todoSchema);
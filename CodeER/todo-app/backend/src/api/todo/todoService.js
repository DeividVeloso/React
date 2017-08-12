const Todo = require('./todo');
//Habilitando meus VERBOS HTTP para esse Schema TODO
Todo.methods(['get', 'post', 'put', 'delete']);
//Configurações para o métdo de update
//Para trazer sempre o objeto atualizado o novo e para validar de acordo com o esquema criado
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;
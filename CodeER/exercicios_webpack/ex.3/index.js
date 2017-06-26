const produto = {
  nome: "Caneta Bic Preta",
  preco: 1.90,
  desconto: 0.05
};

function clone(produto){
    return {...produto} //retorna um novo objeto com as propriedades do objeto produto.
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto);
const BillingCycle = require("./billingCycle");
const errorHandler = require("../common/errorHandler");

//habilitando métodos REST
BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });

//Aplicando o Middleware ErrorHandler
BillingCycle.after("post", errorHandler);
BillingCycle.after("put", errorHandler);

BillingCycle.route("count", (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

BillingCycle.route("summary", (req, res, next) => {
  //são quatro passos
  //1° soma meus valores, faça minha condição,
  //2° Agrupamento, caso queira agrupar por data ou qualquer atributo especifico
  //3° O que vou retornar para API
  //4° Chamar uma call  back, para o retorno da API erro ou valor
  BillingCycle.aggregate(
    {
      //Serve para pegar acessar a tabela BillingCycle criada dentro do mongo
      //E projetar novas colunas, no caso quero criar uma coluna de credit e somar todos os meus créditos
      //e uma poutra coluna de debt e somar todos os débitos.
      //Aqui eu tirei todos as outras colunas e só peguei a soma desses dois arrays
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    //Nesse segundo parametro da função Aggregate, vou agrupar meus valores com algum critério.
    //O resultado de project vou usar no goup para gerar um novo resultado.
    {
      //Quero pegar todos os meus objetos no banco por isso o Id null e somar tudo o que saiu do project
      //Essa key abaixo credit é diferente da propriedade do Project a do project é o $credit
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    //Nesse terceiro parametro vou dizer o que vai retorar para API
    {
      //Não quero que apareça o Id, e retorne o credit e debt
      $project: { _id: 0, credit: 1, debt: 1 }
    },
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        //Como não estou agrupando por ano por exemplo, ele sempre vai retornar um array com um único item,
        //Mas caso não retorne, eu respondo com o objeto crédito e débito igual a 0.
        res.json(result[0] || { credit: 0, debt: 0 });
      }
    }
  );
});

module.exports = BillingCycle;

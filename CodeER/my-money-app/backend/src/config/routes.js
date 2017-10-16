const express = require("express");

module.exports = function(server) {
  //URL base para todas as rotas
  const router = express.Router();
  server.use("/api", router);

  //Rotas de Ciclo de Pagamento
  //Pegando meu serviço de Pagamento, meus objetos e adicionando o nome para fica rno endpoint 
  //loaclhost:3003/api/billingCycles
  const BillingCycle = require('../api/billingCycle/billingCycleService');
  BillingCycle.register(router, '/billingCycles')
};

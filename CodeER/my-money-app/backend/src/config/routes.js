const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  /*
* Rotas JWT
*/
  //URL base para todas as rotas
  const protectedRouter = express.Router();
  server.use("/api", protectedRouter);

  //Filtro de autenticação.
  protectedRouter.use(auth);

  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(protectedRouter, "/billingCycles");

  /*
* Rotas SEM JWT
*/
  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};

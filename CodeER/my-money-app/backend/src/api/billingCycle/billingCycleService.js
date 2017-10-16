const BillingCycle = require("./billingCycle");

//habilitando métodos REST
BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;

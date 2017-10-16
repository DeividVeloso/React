const mongoose = require("mongoose");
//Estamos sobreescrevendo a API Promise do Mongoose pela do Nodejs, pois ela vai ser descontinuada.
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/mymoney");

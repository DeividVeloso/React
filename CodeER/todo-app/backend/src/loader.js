const server = require('./config/server');
require('./config/database');
//Pegando o server e passando como parâmetro para o routes.
require('./config/routes')(server);
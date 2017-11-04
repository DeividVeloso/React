//Fazendo um middleware
const _ = require("lodash");

module.exports = (req, res, next) => {
  //Interceptando meus requests e pegano os erros.
  //Como se forre os Handle Messages da WEBAPI do C#
  const bundle = res.locals.bundle;

  //Pego os erros e transformo em um array para retornar para API
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    //continua a request, para ir para o próximo middleware da cadeia de middleware
    next();
  }
};

const parseErrors = nodeRestFullErrors => {
  const errors = [];
  _.forIn(nodeRestFullErrors, error => errors.push(error.message));
  return errors;
};

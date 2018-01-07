const jwt = require("jsonwebtoken");
const env = require("../.env");

module.exports = (req, res, next) => {
  // CORS preflight request
  if (req.method === "OPTIONS") {
    next();
  } else {
    const token =
      req.body.token || req.query.token || req.headers["authorization"];
    //Se não passou o token
    if (!token) {
      return res.status(403).send({ errors: ["No token provided."] });
    }
    //Verifica o token junto a minha chave
    jwt.verify(token, env.authSecret, function(err, decoded) {
      if (err) {
        return res.status(403).send({
          errors: ["Failed to authenticate token."]
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

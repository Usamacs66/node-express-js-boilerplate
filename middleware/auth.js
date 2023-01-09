const jwt = require("jsonwebtoken");
const httpError = require('./error');

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    throw httpError.forbidden("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    throw httpError.unauthorized("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
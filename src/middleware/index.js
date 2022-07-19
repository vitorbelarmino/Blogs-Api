const { CustomError } = require('../helpers/CustomError');
const helpers = require('../helpers/tokenValidate');

const { userSchema } = require('../schema');

const loginValidate = (req, _res, next) => {
  const login = req.body;
  if (!login.email || !login.password) {
    throw new CustomError(400, 'Some required fields are missing');
  }

  return next();
};

const userValidate = (req, _res, next) => {
  const user = req.body;
  const { error } = userSchema.validate(user);
  if (!error) { return next(); }
  const { message } = error;
  throw new CustomError(400, message);
};

const tokenValidate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new CustomError(401, 'Token not found');
  helpers.validateToken(token);
  next();
};

module.exports = { loginValidate, userValidate, tokenValidate };
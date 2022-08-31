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

const categoryValidate = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new CustomError(400, '"name" is required');
  }
  next();
};

const blogPostValidate = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new CustomError(400, 'Some required fields are missing');
  }
  next();
};

module.exports = { loginValidate, userValidate, tokenValidate, categoryValidate, blogPostValidate };
const { CustomError } = require('../helpers/CustomError');
const helpers = require('../helpers/tokenValidate');

const { userSchema } = require('../schema');

const Login = (req, _res, next) => {
  const login = req.body;
  if (!login.email || !login.password) {
    throw new CustomError(400, 'Some required fields are missing');
  }

  return next();
};

const User = (req, _res, next) => {
  const user = req.body;
  const { error } = userSchema.validate(user);
  if (!error) { return next(); }
  const { message } = error;
  throw new CustomError(400, message);
};

const Token = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new CustomError(401, 'Token not found');
  helpers.validateToken(token);
  next();
};

const Category = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new CustomError(400, '"name" is required');
  }
  next();
};

const BlogPost = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new CustomError(400, 'Some required fields are missing');
  }
  next();
};

const EditPost = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw new CustomError(400, 'Some required fields are missing');
  }
  next();
};
const validates = {
  Login,
  User,
  Token,
  Category,
  BlogPost,
  EditPost,
};

module.exports = validates;
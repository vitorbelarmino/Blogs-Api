const { CustomError } = require('../helpers/CustomError');
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

module.exports = { loginValidate, userValidate };
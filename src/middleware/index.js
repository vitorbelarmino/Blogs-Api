const { CustomError } = require('../helpers/CustomError');
const { loginSchema } = require('../schema');

const loginValidate = (req, res, next) => {
  const login = req.body;
  const { error } = loginSchema.validate(login);
  if (error) throw new CustomError(400, 'Some required fields are missing');
  
  return next();
};

module.exports = { loginValidate };
const { CustomError } = require('../helpers/CustomError');
// const { loginSchema } = require('../schema');

const loginValidate = (req, res, next) => {
  const login = req.body;
  console.log(login);
  if (!login.password || !login.email) {
    throw new CustomError(400, 'Some required fields are missing');
  }
  // const { error } = loginSchema.validate(login);
  // console.log(error.message);
  // if (error) return res.status(400).json({ message: error.message });
  
  next();
};

module.exports = { loginValidate };
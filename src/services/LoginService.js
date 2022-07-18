const { User } = require('../database/models/index');
const { tokenGenerate } = require('../helpers/tokenGenerate');
const { CustomError } = require('../helpers/CustomError');

const login = async (info) => {
  const getUser = await User.findOne({ where: { email: info.email } });
  if (!getUser) throw new CustomError(400, 'Invalid fields');

  const validPassword = getUser.password === info.password;

  if (!validPassword) throw new CustomError(400, 'Invalid password');

  const token = tokenGenerate(info);

  return token;
};

module.exports = { login };
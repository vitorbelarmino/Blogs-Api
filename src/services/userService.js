const { User } = require('../database/models/index');
const { CustomError } = require('../helpers/CustomError');
const { tokenGenerate } = require('../helpers/tokenGenerate');

const createUser = async (userInfo) => {
  const user = await User.findOne({ where: { email: userInfo.email } });

  if (user) throw new CustomError(409, 'User already registered');

  await User.create(userInfo);

  const token = tokenGenerate(userInfo);
  return token;
};
const getAll = async () => {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return users;
};

module.exports = { createUser, getAll };

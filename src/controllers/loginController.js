const login = require('../services/LoginService');

const test = async (req, res) => {
  const loginInfo = req.body;
  const token = await login.login(loginInfo);
  res.status(200).json({ token });
};

module.exports = { test };
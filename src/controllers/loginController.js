const { login } = require('../services/LoginService');

const loginController = async (req, res) => {
  const loginInfo = req.body;
  const token = await login(loginInfo);
  res.status(200).json({ token });
};

module.exports = { loginController };
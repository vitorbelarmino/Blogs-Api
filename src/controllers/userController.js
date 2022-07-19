const { createUser } = require('../services/userService');

const userController = async (req, res) => {
  const userInfo = req.body;
  const token = await createUser(userInfo);
  res.status(201).json({ token });
};

module.exports = { userController };
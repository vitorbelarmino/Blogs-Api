const { createUser, getAll } = require('../services/userService');

const userController = async (req, res) => {
  const userInfo = req.body;
  const token = await createUser(userInfo);
  res.status(201).json({ token });
};

const getAllController = async (req, res) => {
  const users = await getAll();
  res.status(200).json(users);
};

module.exports = { userController, getAllController };
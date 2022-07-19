const services = require('../services/userService');

const createUser = async (req, res) => {
  const userInfo = req.body;
  const token = await services.createUser(userInfo);
  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await services.getAll();
  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await services.getById(id);
  return res.status(200).json(user);
};

module.exports = { createUser, getAll, getById };
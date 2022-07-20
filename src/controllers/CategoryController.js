const service = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await service.createCategory(name);
  return res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const allCategories = await service.getAll();
  return res.status(200).json(allCategories);
};

module.exports = { createCategory, getAll };
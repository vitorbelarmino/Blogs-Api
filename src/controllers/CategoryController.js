const service = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await service.createCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = { createCategory };
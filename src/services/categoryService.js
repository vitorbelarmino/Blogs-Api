const { Category } = require('../database/models/index');

const { CustomError } = require('../helpers/CustomError');

const createCategory = async (name) => {
  const category = await Category.findOne({ where: { name } });
  if (category) throw new CustomError(409, 'User already registered');

  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAll };
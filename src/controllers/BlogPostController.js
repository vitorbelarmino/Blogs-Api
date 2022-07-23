const service = require('../services/BlogPostService');

const getAll = async (req, res) => {
  const post = await service.getAll();
  return res.status(200).json(post);
};

module.exports = { getAll };
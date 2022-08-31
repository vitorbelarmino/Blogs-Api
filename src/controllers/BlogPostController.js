const service = require('../services/BlogPostService');

const getAll = async (req, res) => {
  const post = await service.getAll();
  return res.status(200).json(post);
};

const createPost = async (req, res) => {
  const post = req.body;
  const token = req.headers.authorization;

  const newPost = await service.createPost(post, token);
  return res.status(201).json(newPost);
};

module.exports = { getAll, createPost };
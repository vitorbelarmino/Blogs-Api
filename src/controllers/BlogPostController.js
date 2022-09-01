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

const getId = async (req, res) => {
  const { id } = req.params;
  const post = await service.getId(Number(id));
  return res.status(200).json(post);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const post = req.body; 
  const token = req.headers.authorization;
  const editedPost = await service.editPost({ id: Number(id), ...post }, token);
  return res.status(200).json(editedPost);
};

module.exports = { getAll, createPost, getId, editPost };
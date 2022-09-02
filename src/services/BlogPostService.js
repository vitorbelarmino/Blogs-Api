const { BlogPost, User, Category, PostCategory } = require('../database/models');
const { CustomError } = require('../helpers/CustomError');
const { validateToken } = require('../helpers/tokenValidate');

const getAll = async () => {
  const post = await BlogPost.findAll({ 
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
  });
  return post;
};

const verifyCategories = async (ids) => {
  const getIds = await Category.findAll();
  const verify = getIds.every((e) => ids.some((d) => e.id === d));
  if (!verify) throw new CustomError(400, '"categoryIds" not found');
};

const createPost = async (post, token) => {
  const { email } = validateToken(token);
  const user = await User.findOne({ where: { email } });
  await verifyCategories(post.categoryIds);
  const info = {
    userId: user.id,
    ...post,
    published: Date(),
    updated: Date(),
  };

  const newPost = await BlogPost.create(info);
  await Promise.all(post.categoryIds.map((id) => PostCategory.create({
    postId: newPost.id,
    categoryId: id,
  })));
  return newPost;
};

const getId = async (id) => {
  const post = await BlogPost.findOne({
    where: id,
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    },
  ],
  });
  if (!post) throw new CustomError(404, 'Post does not exist');
  return post;
};

const editPost = async ({ id, title, content }, token) => {
  const { email } = validateToken(token);
  const user = await User.findOne({ where: { email } });
  if (id !== user.id) throw new CustomError(401, 'Unauthorized user');
  await BlogPost.update({ title, content }, { where: { id } });
  const editedPost = await getId(id);
  return editedPost;
};

const deletePost = async (id, token) => {
  const { email } = validateToken(token);
  const user = await User.findOne({ where: { email } });
  const getPost = await BlogPost.findOne({ where: { id } });
  if (!getPost) throw new CustomError(404, 'Post does not exist');
  if (getPost.userId !== user.id) throw new CustomError(401, 'Unauthorized user');
  await BlogPost.destroy({ where: { id } });
};

const deleteMe = async (token) => {
  console.log(token);
  const { email } = validateToken(token);
  const user = await User.findOne({ where: { email } });
  await User.destroy({ where: { id: user.id } });
};

module.exports = { getAll, createPost, getId, editPost, deletePost, deleteMe };
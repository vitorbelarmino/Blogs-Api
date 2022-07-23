const { BlogPost, User, Category } = require('../database/models');

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

module.exports = { getAll };
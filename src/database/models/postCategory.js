'use strict';
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPosts',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }
  },
  {
    tableName: 'PostCategories',
    timestamps: false,
  },
  )
 PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory,
        as: 'blogPosts',
      });
 }
  return PostCategory;
};

module.exports = createPostCategoryModel

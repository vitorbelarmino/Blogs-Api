'use strict';
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'Categories',
    timestamps: false,
  })
  return Category;
};
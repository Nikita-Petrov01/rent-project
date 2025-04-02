'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    static associate({User, Category, Like}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Category, {foreignKey: 'categoryId'})
      this.hasMany(Like, {foreignKey: 'advertisementId'})
    }
  }
  Advertisement.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      image: DataTypes.ARRAY(DataTypes.TEXT),
      categoryId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Advertisement',
    },
  );
  return Advertisement;
};

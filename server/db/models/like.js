'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({User, Advertisement}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Advertisement, {foreignKey: 'advertisementId'})
    }
  }
  Like.init({
    userId: DataTypes.INTEGER,
    advertisementId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
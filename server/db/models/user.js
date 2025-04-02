const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Advertisement, Like}) {
      this.hasMany(Advertisement, {foreignKey: 'userId'})
      this.hasMany(Like, {foreignKey: 'userId'})
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM('admin', 'user'),
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      NIK: { type: DataTypes.INTEGER, primaryKey: true, unique: true },
      Name: { type: DataTypes.STRING, allowNull: true },
      Email: { type: DataTypes.STRING, allowNull: true },
      Password: { type: DataTypes.STRING, allowNull: true },
      isAdmin: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

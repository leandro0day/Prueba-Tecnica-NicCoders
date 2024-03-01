"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorite.init(
    {
      characterId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      species: DataTypes.STRING,
      type: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.STRING,
      url: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Favorite",
      timestamps: false,
    }
  );
  return Favorite;
};

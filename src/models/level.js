'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      // define association here
      Level.hasMany(models.Class, { foreignKey: 'level_id' })
    }
  }
  Level.init({
    desc_level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // define association here
      Class.hasMany(models.Enrollment, { foreignKey: class_id })
      Class.belongsTo(models.Level)
      Class.belongsTo(models.Person)
    }
  }
  Class.init({
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.Class)
      Enrollment.belongsTo(models.Person)
    }
  }
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};

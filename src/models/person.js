'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      // define association here
      Person.hasMany(models.Class, { foreignKey: teacher_id })
      Person.hasMany(models.Enrollmen, { foreignKey: student_id })
    }
  }
  Person.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};
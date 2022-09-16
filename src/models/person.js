'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      // define association here
      Person.hasMany(models.Class, { foreignKey: 'teacher_id' })
      Person.hasMany(models.Enrollment, { foreignKey: 'student_id' })
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validFunction: (data) => {
          if (data.length < 3) { throw new Error('Invalid Name') }
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid e-mail"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: { where: {} },
      ///etc: constraint: value
    }
  });
  return Person;
};
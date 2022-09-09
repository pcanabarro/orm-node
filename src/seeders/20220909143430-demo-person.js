'use strict';

const { DATE } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      name: 'Robert Ki',
      active: false,
      email: "robert@email.com",
      role: "student",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Carla Wi',
        active: true,
        email: "carla@email.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				desc_level: 'basic',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				desc_level: 'intermediary',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				desc_level: 'advanced',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}

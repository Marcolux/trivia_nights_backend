'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('users', 'music', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'film', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'sports', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'general', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'popCulture', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'history', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'science', Sequelize.BOOLEAN);
    await queryInterface.addColumn('users', 'currentEvents', Sequelize.BOOLEAN);
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

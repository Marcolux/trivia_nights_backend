'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users',
    [
      {
        name: 'John Doe',
        email: 'test@test.com',
        password: '123',
        signup_date: new Date(),
        interest: 'Test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Will Naval',
        email: 'will@test.com',
        password: '123',
        signup_date: new Date(),
        interest: 'Test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cullen Reddy',
        email: 'cullen@test.com',
        password: '123',
        signup_date: new Date(),
        interest: 'Test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marco Colucci',
        email: 'marco@test.com',
        password: '123',
        signup_date: new Date(),
        interest: 'Test',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )
},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

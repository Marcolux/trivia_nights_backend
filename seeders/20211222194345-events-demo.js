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
    await queryInterface.bulkInsert('events',
      [
        {
          name: 'Sports Trivia',
          venue: 'Seattle, WA',
          date: '9/6',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pop Culture Trivia',
          venue: 'Honolulu, HI',
          date: '10/12',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Music Trivia',
          venue: 'Chicago, IL',
          date: '10/25',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Film Trivia',
          venue: 'Oakland, CA',
          date: '11/7',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Science Trivia',
          venue: 'Boston, MA',
          date: '11/17',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Art Trivia',
          venue: 'Los Angeles, CA',
          date: '12/2',
          capacity: '100',
          createdAt: new Date(),
          updatedAt: new Date()
        },
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

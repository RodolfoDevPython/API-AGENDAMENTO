'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuarios', 
      'email',
      { type: Sequelize.STRING }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropColumn('usuarios', 'email');
  }
};

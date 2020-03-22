'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('servicos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }, 
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duracao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cargo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cargos', key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('servicos');
  }
};

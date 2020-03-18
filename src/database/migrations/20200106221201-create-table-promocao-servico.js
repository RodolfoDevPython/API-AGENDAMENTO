'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('promocoes_servicos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      promocao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'promocoes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      servico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'servicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE
      },
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('promocoes_servicos');

  }
};

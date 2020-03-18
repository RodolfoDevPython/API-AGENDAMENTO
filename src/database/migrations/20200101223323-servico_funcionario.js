'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('servicos_funcionarios', { 
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement:  true,
        allowNull: true,
      },
      servico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'servicos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'funcionarios', key: 'id' },
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

    return queryInterface.dropTable('servicos_funcionarios');
    
  }

};

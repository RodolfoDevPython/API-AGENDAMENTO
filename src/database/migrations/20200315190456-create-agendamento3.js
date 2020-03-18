'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('agendamentos', { 
      servico_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      promocao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dia_agendado: {
        type: Sequelize.DATE,
        allowNull: false
      }      
    })
    .then( () => (  queryInterface.addConstraint('agendamentos', ['funcionario_id', 'dia_agendado', 'horario_id', 'usuario_id'], {
            type: 'primary key',
            name: 'agendamento_pkeys'
          })
      )
    );
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('agendamentos');
    
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'home_team',
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      homeTeamGoals:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'home_team_goals'
      },
      awayTeamGoals:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'away_team_goals'
      },
      inProgress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'in_progress',
        defaultValue: 0,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};

import { INTEGER, BOOLEAN, Model } from 'sequelize';
import db from './index';
import Team from './Teams';

class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare awayTeam: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.hasMany(Matches, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});
Team.hasMany(Matches, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

Matches.belongsTo(Team, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});
Matches.belongsTo(Team, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});

export default Matches;

import ILeaderboardHome from '../interfaces/leaderboard/IChampionshipboard';
import Sequelize from '../models/index';

import homeBoardQuery from './utils/queries/homeBoardQuery';

import awayBoardQuery from './utils/queries/awayBoardQuery';

const getChampionshipHomeBoard = async (): Promise<{
  championshipHomeBoard: ILeaderboardHome[] | unknown;
}> => {
  const [championshipHomeBoard] = await Sequelize.query(homeBoardQuery);
  return { championshipHomeBoard };
};

const getChampionshipAwayBoard = async (): Promise<{
  championshipAwayBoard: ILeaderboardHome[] | unknown;
}> => {
  const [championshipAwayBoard] = await Sequelize.query(awayBoardQuery);
  return { championshipAwayBoard };
};

export { getChampionshipHomeBoard, getChampionshipAwayBoard };

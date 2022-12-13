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

const boardStatistics = (eachItem: ILeaderboardHome, team: ILeaderboardHome) => {
  const totalPoints = Number(eachItem.totalPoints) + Number(team.totalPoints);
  const totalGames = Number(eachItem.totalGames) + Number(team.totalGames);
  const { name } = eachItem;
  return {
    name,
    totalPoints,
    totalGames,
    totalVictories: Number(eachItem.totalVictories) + Number(team.totalVictories),
    totalDraws: Number(eachItem.totalDraws) + Number(team.totalDraws),
    totalLosses: Number(eachItem.totalLosses) + Number(team.totalLosses),
    goalsFavor: Number(eachItem.goalsFavor) + Number(team.goalsFavor),
    goalsOwn: Number(eachItem.goalsOwn) + Number(team.goalsOwn),
    goalsBalance: Number(eachItem.goalsBalance) + Number(team.goalsBalance),
    efficiency: ((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
};

const sortBoardTeams = (objToReturn: ILeaderboardHome[]) => {
  const obj = objToReturn.sort((a, b) =>
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor);
  return obj;
};

const mapTeamsToBoard = (homeTeams: ILeaderboardHome[], awayTeams: ILeaderboardHome[]) => {
  const objMap: ILeaderboardHome[] = homeTeams.map((eachItem) => {
    const { name } = eachItem;
    const team = awayTeams.find((awayTeam) => awayTeam.name === name);
    if (!team) throw new Error('time não encontrado');
    return boardStatistics(eachItem, team);
  });
  return sortBoardTeams(objMap);
};

const leaderboardServiceGetAll = async (): Promise<ILeaderboardHome[]> => {
  const { championshipHomeBoard } = await getChampionshipHomeBoard();
  const { championshipAwayBoard } = await getChampionshipAwayBoard();
  const homeTeams = championshipHomeBoard as ILeaderboardHome[];
  const awayTeams = championshipAwayBoard as ILeaderboardHome[];
  const generateChampionshipBoard: ILeaderboardHome[] = mapTeamsToBoard(homeTeams, awayTeams);
  return generateChampionshipBoard;
};

export { getChampionshipHomeBoard, getChampionshipAwayBoard, leaderboardServiceGetAll };

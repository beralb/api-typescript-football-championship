import ILeaderboardHome from '../interfaces/leaderboard/IChampionshipboard';
import Sequelize from '../models/index';

const championshipHomeBoardQuery = `SELECT t.team_name AS 'name',
SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 3 ELSE 0 END ) +
  SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalPoints,
COUNT( m.home_team ) AS totalGames,
(SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END ) -
  SUM(CASE WHEN m.in_progress = 1 THEN 1 ELSE 0 END)) AS totalVictories,
SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalDraws,
SUM( CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END ) AS totalLosses,
SUM(m.home_team_goals) AS goalsFavor,
SUM(m.away_team_goals) AS goalsOwn,
(SUM(m.home_team_goals)-SUM(m.away_team_goals)) AS goalsBalance,
ROUND(((SUM( CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END )*3 +
  SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ))/
  (COUNT(m.home_team) * 3)) * 100, 2) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.matches AS m
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.home_team
WHERE m.in_progress = 0 
GROUP BY t.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

const getChampionshipHomeBoard = async (): Promise<{
  championshipHomeBoard: ILeaderboardHome[] | unknown;
}> => {
  const [championshipHomeBoard] = await Sequelize.query(championshipHomeBoardQuery);
  return { championshipHomeBoard };
};

const championshipAwayBoardQuery = `SELECT t.team_name AS 'name',
SUM( CASE WHEN m.away_team_goals > m.home_team_goals THEN 3 ELSE 0 END ) +
  SUM( CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END ) AS totalPoints,
COUNT( m.away_team ) AS totalGames,
SUM( CASE WHEN m.away_team_goals > m.home_team_goals THEN 1 ELSE 0 END ) AS totalVictories,
  SUM( CASE WHEN m.away_team_goals = m.home_team_goals THEN 1 ELSE 0 END ) AS totalDraws,
  SUM( CASE WHEN m.away_team_goals < m.home_team_goals THEN 1 ELSE 0 END ) AS totalLosses,
  SUM(m.away_team_goals) AS goalsFavor,
SUM(m.home_team_goals) AS goalsOwn,
(SUM(m.away_team_goals)-SUM(m.home_team_goals)) AS goalsBalance,
  ROUND(((SUM( CASE WHEN m.away_team_goals > m.home_team_goals THEN 1 ELSE 0 END )*3 +
  SUM( CASE WHEN m.away_team_goals = m.home_team_goals THEN 1 ELSE 0 END ))/
  (COUNT(m.away_team) * 3)) * 100, 2) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.matches AS m
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.away_team
WHERE m.in_progress = 0
GROUP BY t.team_name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn;`;

const getChampionshipAwayBoard = async (): Promise<{
  championshipAwayBoard: ILeaderboardHome[] | unknown;
}> => {
  const [championshipAwayBoard] = await Sequelize.query(championshipAwayBoardQuery);
  return { championshipAwayBoard };
};

export { getChampionshipHomeBoard, getChampionshipAwayBoard };

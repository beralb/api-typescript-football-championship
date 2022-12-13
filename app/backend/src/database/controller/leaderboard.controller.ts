import { Request, Response } from 'express';
import {
  getChampionshipHomeBoard,
  getChampionshipAwayBoard,
  leaderboardServiceGetAll,
} from '../service/leaderboard.service';

const homeTeamController = async (_req: Request, res: Response) => {
  const { championshipHomeBoard } = await getChampionshipHomeBoard();
  if (!championshipHomeBoard) return res.status(400).json({ message: 'No leaderboard found' });
  res.status(200).json(championshipHomeBoard);
};

const awayTeamController = async (_req: Request, res: Response) => {
  const { championshipAwayBoard } = await getChampionshipAwayBoard();
  if (!championshipAwayBoard) return res.status(400).json({ message: 'No leaderboard found' });
  res.status(200).json(championshipAwayBoard);
};

const leaderboardController = async (_req: Request, res: Response) => {
  const championshipBoard = await leaderboardServiceGetAll();
  if (!championshipBoard) return res.status(400).json({ message: 'Leaderboard not found!' });
  res.status(200).json(championshipBoard);
};

export { homeTeamController, awayTeamController, leaderboardController };

import { Request, Response } from 'express';
import { getChampionshipHomeBoard, getChampionshipAwayBoard } from '../service/leaderboard.service';

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

export { homeTeamController, awayTeamController };

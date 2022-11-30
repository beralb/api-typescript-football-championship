import { Request, Response } from 'express';
import getChampionshipBoard from '../service/leaderboard.service';

const homeTeamController = async (_req: Request, res: Response) => {
  const { championshipBoard } = await getChampionshipBoard();
  console.log(championshipBoard);
  if (championshipBoard) return res.status(200).json(championshipBoard);
  res.status(200).json(championshipBoard);
};

export default homeTeamController;

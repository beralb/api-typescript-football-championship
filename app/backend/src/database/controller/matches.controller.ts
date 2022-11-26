import { Request, Response } from 'express';
import matchServiceGetAll from '../service/matches.service';

async function matchControllerGetAll(_req: Request, res: Response) {
  const { matches } = await matchServiceGetAll();
  if (!matches) return res.status(400).json({ message: 'Teams not found' });

  res.status(200).json(matches);
}

export default matchControllerGetAll;

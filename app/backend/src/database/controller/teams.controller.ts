import { Request, Response } from 'express';
import ServiceGetAll from '../service/teams.service';

async function controllerGetAll(_req: Request, res: Response) {
  const { teams } = await ServiceGetAll();
  if (!teams) return res.status(400).json({ message: 'No teams found' });
  res.status(200).json(teams);
}

export default controllerGetAll;

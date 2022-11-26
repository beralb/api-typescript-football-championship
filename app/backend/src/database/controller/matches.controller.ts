import { Request, Response } from 'express';
import matchServiceGetAll, { matchServiceGetProgress } from '../service/matches.service';

async function matchControllerGetAll(req: Request, res: Response) {
  if (Object.keys(req.query).length > 0) {
    const reqParam = String(req.query.inProgress);
    const { matches } = await matchServiceGetProgress(reqParam);
    res.status(200).json(matches);
    return;
  }
  const { matches } = await matchServiceGetAll();
  res.status(200).json(matches);
}

export default matchControllerGetAll;

import { Request, Response } from 'express';
import matchServiceGetAll, {
  matchServiceGetProgress, matchServicePatchMatch, matchServiceSaveMatch,
} from '../service/matches.service';

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

async function matchControllerSaveMatch(req: Request, res: Response) {
  const sentMatch = { ...req.body, inProgress: true };
  const {
    newMatch,
  } = await matchServiceSaveMatch(sentMatch);
  if (!newMatch) return res.status(400).json({ message: 'No teams inserted' });
  res.status(201).json(newMatch);
}

async function matchControllerPatchMatch(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { message } = await matchServicePatchMatch(id);
  if (!message) return res.status(400).json({ message: 'No teams patched' });
  res.status(200).json({ message });
}

export default matchControllerGetAll;

export {
  matchControllerSaveMatch,
  matchControllerPatchMatch,
};

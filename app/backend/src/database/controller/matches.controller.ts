import { Request, Response } from 'express';
import matchServiceGetAll, {
  matchServiceChangeScore,
  matchServiceGetProgress, matchServicePatchMatch, matchServiceSaveMatch,
} from '../service/matches.service';

async function matchControllerGet(req: Request, res: Response) {
  if (Object.keys(req.query).length > 0) {
    const reqParam = String(req.query.inProgress);
    if (reqParam === 'true' || reqParam === 'false') {
      const { matches } = await matchServiceGetProgress(reqParam);
      res.status(200).json(matches);
      return;
    }
    return res.status(400).json({ message: 'invalid request format' });
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

async function matchControllerChangeScore(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { homeTeamGoals, awayTeamGoals } = req.body;

  const { message } = await matchServiceChangeScore(id, homeTeamGoals, awayTeamGoals);
  if (!message) return res.status(400).json({ message: 'No score changed' });
  res.status(200).json({ message });
}

export default matchControllerGet;

export {
  matchControllerSaveMatch,
  matchControllerPatchMatch,
  matchControllerChangeScore,
};

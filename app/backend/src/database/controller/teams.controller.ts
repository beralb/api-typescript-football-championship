import { Request, Response } from 'express';
import serviceGetAll, { serviceGetTeamById } from '../service/teams.service';

async function controllerGetAll(_req: Request, res: Response) {
  const { teams } = await serviceGetAll();
  if (!teams) return res.status(400).json({ message: 'No teams found' });
  res.status(200).json(teams);
}

async function controllerTeamGetById(req: Request, res: Response) {
  const { id } = req.params;
  const idParam = Number(id);
  const { team } = await serviceGetTeamById(idParam);
  if (!team) return res.status(400).json({ message: 'Did not find teams' });
  res.status(200).json(team);
}

export default controllerGetAll;

export {
  controllerTeamGetById,
};

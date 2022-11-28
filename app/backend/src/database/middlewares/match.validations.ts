import { RequestHandler } from 'express';
import { serviceGetTeamById } from '../service/teams.service';

const validateNewMatchBody: RequestHandler = (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  next();
};

const validateExistingTeams: RequestHandler = async (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;
  const homeTeamInDB = await serviceGetTeamById(homeTeam);
  const awayTeamInDB = await serviceGetTeamById(awayTeam);

  if (homeTeamInDB.team === null || awayTeamInDB.team === null) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }

  next();
};

export default validateNewMatchBody;

export {
  validateExistingTeams,
};

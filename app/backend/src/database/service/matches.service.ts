import IMatch from '../interfaces/matches/IMatch';
import Matches from '../models/Matches';

import Teams from '../models/Teams';

const matchServiceGetAll = async (): Promise<{ matches: Matches[] }> => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

const matchServiceGetProgress = async (
  queryParam: string,
): Promise<{
  matches: Matches[]
}> => {
  const convertedQueryParam = ((query: string) => {
    if (query === 'true') return 1;
    return 0;
  });

  const matches = await Matches.findAll({
    where: { inProgress: convertedQueryParam(queryParam) },
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });
  return { matches };
};

const matchServiceSaveMatch = async (matchParam: IMatch): Promise<{ newMatch: Matches }> => {
  const {
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  } = matchParam;
  const newMatch = await Matches.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  });

  return { newMatch };
};

const matchServicePatchMatch = async (id: number) => {
  await Matches.update(
    { inProgress: false },
    { where: { id } },
  );
  const response = { message: 'Finished' };
  return response;
};

const matchServiceChangeScore = async (
  id: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
) => {
  await Matches.update(
    { homeTeamGoals, awayTeamGoals },
    { where: { id } },
  );
  const response = { message: 'Score updated' };
  return response;
};

export default matchServiceGetAll;

export {
  matchServiceGetProgress,
  matchServiceSaveMatch,
  matchServicePatchMatch,
  matchServiceChangeScore,
};

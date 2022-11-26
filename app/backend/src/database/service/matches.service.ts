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
): Promise<{ matches: Matches[]
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

export default matchServiceGetAll;

export {
  matchServiceGetProgress,
};
